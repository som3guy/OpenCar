define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Promise             = require('common/lib/Promise'),
        Model               = require('common/Model'),
        PlatformConfig      = require('common/PlatformConfig'),
        ImageView           = require('common/ui/ImageView'),
        Pane                = require('common/ui/Pane'),
        TextView            = require('common/ui/TextView'),
        Paths               = require('common/lib/Paths'), //xxx Paths
        PersistAPI          = require('common/platform/PersistAPI'),
        DialogConfig        = require('common/ui/dialogs/DialogConfig'),
        Dialog              = require('common/ui/Dialog'),
        ListChamber         = require('common/platform/chamber/ListChamber');

    // Set true if we have an InstallAPI; if we failed init this will be false (no InstallAPI implemented)
    var haveInstallAPI;
    // The icon display pane
    var previewIconsPane;
    // The stack of icons
    var previewImageStack;
    // persistence for usage stats tracking
    var persist;
    // The number of launches and when for each app by id
    var usageStats;
    // The "no apps for you" dialog
    var noAppsDialog;

    // The catalog app list, cached.  If we have a subsequent error, we can use this cached version.
    var appList=[];

    // OPTIONS FOR PRESENTATION
    // Note: if both true, configure CSS for a hybrid appearance (TBD)
    // Use the icon display pane
    var useCategoryIcons = false;
    // Use the stack of icons
    var useStack = true;

    // Put action of access to ota settings in Showroom items
    var otaSettingsAsShowroomItem = true;
    var settingsIcon = "/ui/vehicle-profiles/oxygen/res/themes/default/images/ui/button-bar/oxygen-settings.png";

    //------------

    return Class.create(
    ListChamber,
    {

        //
        // Setup the UI
        //
        beforeStart: function($super) {
            var renderElement = this.moduleView.getView();

            // Check for our API
            var appController = this.moduleView.getController();
            appController.isInstallControllerAvailable().done(function(isAPI) {
                haveInstallAPI = isAPI;
            });

            // Create our preview pane for showing icons
            previewIconsPane = new Pane({id: 'preview-icons'});
            previewIconsPane.ivImgIcon = new ImageView({classNames:['app-icon']});
            previewIconsPane.tvFontIcon = new TextView({classNames:['app-icon', 'font-icon']});
            previewIconsPane.addChild(previewIconsPane.ivImgIcon);
            previewIconsPane.addChild(previewIconsPane.tvFontIcon);
            previewIconsPane.render(renderElement);

            previewImageStack = new Pane({id: 'preview-image-stack'});
            previewImageStack.imageViews = [];
            for(var i=0; i<3; i++) {
                var iv = new ImageView({id: "imgstack-"+i});
                previewImageStack.imageViews.push(iv);
                previewImageStack.addChild(iv);
            }
            previewImageStack.render(renderElement);

            // Add a function to the preview pane that understands how to display icons using its child controls
            previewIconsPane.showMenuItem = function(item) {
                if(useCategoryIcons) {
                    if (item.type === 'category' || item.type === 'empty') {
                        this.ivImgIcon.hide();
                        if (item.icon_font) {
                            this.tvFontIcon.setText(item.icon_font);
                            this.tvFontIcon.show();
                        } else {
                            this.tvFontIcon.hide();
                        }
                    } else if (item.type === 'app') {
                        this.tvFontIcon.hide();
                        if (item.icon) {
                            this.ivImgIcon.setSrc(item.icon);
                            this.ivImgIcon.show();
                        } else {
                            this.ivImgIcon.hide();
                        }
                    } else {
                        this.tvFontIcon.hide();
                        this.ivImgIcon.hide();
                    }
                    this.show();
                } else {
                    this.hide();
                    previewImageStack.show();
                }
            };

            return $super();
        },

        //
        // Last bit of setup, once running
        //
        started: function($super) {
            // set up our ListChamber handler in case we trigger any actions in our list
            this.setHandlerObject(this);

            // get the initial load of stats (no app id passed)
            recordLaunchStats();

            return $super();
        },

        // handler object callback for actions
        onActionActivated: function(node) {
            if(node.actionInfo.name === "settings") {
                this.goto("options");
            }
        },

        //
        // Notified when showroom apps are updated.
        // This will update the Showroom entry
        //
        onNewShowroomAppsAvailable: function(showroomApps) {
            if(!showroomApps) showroomApps = appList || [];
            var showroomPath = [0];
            var sr = this.getContentItemData(showroomPath);
            appList = [];
            var totalTasks = 0;
            for(var i=0; i<showroomApps.length; i++) {

                var app = showroomApps[i];
                totalTasks++;
                // don't list forced actions; they must occur anyway regardless of UI
                if(app.status.indexOf("force_") === -1) {
                    // We need to rename text and icon for list consumption
                    app.text = app.appName; delete app.appName;
                    app.icon = app.imageUrl; delete app.imageUrl;
                    appList.push(app);
                }
            }
            if(otaSettingsAsShowroomItem) {
                appList.push({
                    text:   "Showroom Settings",
                    icon: settingsIcon,
                    actionInfo: {
                        name: "settings"
                    }
                });
            }

            sr.$disabled = (haveInstallAPI && appList.length) ? false : true;
            sr._data_tree_branch = appList;
            this.setContentItemData([0], sr);

            // if we are on this branch now, we need to refresh
            if(this.areNodePathsEqual(this.getNodePathInfo(), showroomPath)) {
                this.refresh();
            }
        },

        // Fill the data tree of this ListChamber
        data : function() {
            var p = new Promise();
            this.moduleView.getMenuDataTree().then(
                function(dt) {
                    // Take categories in the order they come in from the categories.json config file
                    // (if we wanted to sort: dt.sort(...) )
                    // But, go through the categories and
                    // ... remove unwanted icon references
                    // ... sort the apps by name
                    for(var i=0; i<dt.length; i++) {
                        if(dt[i].icon_font) {
                            delete dt[i].icon; // we don't use image icons at top level for this display, we use the font version
                        }
                        var appList = dt[i]._data_tree_branch;
                        // Sort apps by name
                        if(Array.isArray(appList)) {
                            appList.sort(function(a, b) {
                                return (a.text.toUpperCase() > b.text.toUpperCase()) ? 1 : -1;
                            });
                        }
                    }

                    // Add the Showroom app to the top of the list of categories
                    dt.unshift({
                        $disabled: true,
                        type:"showroom",
                        text:"Showroom",
                        icon:"refresh"
                    });

                    p.resolve(dt);
                },
                function() {p.reject()}
            );
            return p;

        }.override(),

        // Use this opportunity to turn off icon preview on descent
        signalUpdate: function($super, descending, listItems, selectedIndex) {
            if(descending) {
                previewIconsPane.hide();
                previewImageStack.hide();
            }
            if(noAppsDialog) {
                noAppsDialog.hide();
                noAppsDialog = undefined;
            }
            return $super(descending, listItems, selectedIndex);
        }.override(),



        // Override to supply custom config options for the ListView
        render : function($super, config){
            //Log.log("Render config", config);
            config.itemChanged = leafSelected.bind(this.moduleView);
            config.itemClick = leafClicked.bind(this.moduleView);
            $super(config);

            // Specialized action to remove back button when we are acting as the home screen
            if(this.moduleView._appId === PlatformConfig.homeScreenApplicationId) {
                var backButtonElement = document.querySelector('.back-button');
                var subTitleText = document.querySelector('.subtitle__text');
                backButtonElement.style.display = 'none';

                if (backButtonElement) {
                    var that = this;
                    this.subscribe(ListChamber.Event.EV_CHANGED, function(evt, prop, type, level, listItems){
                        if(level === 0) {
                            backButtonElement.style.display = 'none';
                            subTitleText.style.display = 'none'
                        }else{
                            backButtonElement.style.display = '';
                            subTitleText.style.display = ''
                        }
                        leafSelected.call(that.moduleView, undefined, that.lv, new Model(listItems[0]));
                    });
                }
            }
        }.override(),

        //
        // Get the usage state per id
        //
        getApplicationUsageStats: function(appId) {
            return usageStats[appId];
        }

        /*
        // Find the node path of the app that has the given id
        //
        findMenuNode: function(startPath, appId) {
            if(appId) {
                var nlm = this.nestedListManager;
                var indices = nlm.nodePathToIndices(startPath);
                var list = nlm.getListItems(indices) || [];
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    if (item && item.appId === appId) {
                        Log.debug("Found " + appId + " at index " + i + " in path " + nlm.getNodePathInfo(indices), indices);
                        indices.push(i);
                        return indices;
                    }
                    if (item.type !== 'showroom' && item._data_tree_branch && item._data_tree_branch.length) {
                        var ni = indices.slice();
                        ni.push(i);
                        var rt = this.findMenuNode(ni, appId);
                        if (rt) return rt;
                    }
                }
            }
        }
        */

    });

    //
    // When we highlight an item, show the preview
    //
    function leafSelected(e, lv, model) {
        if(model.type !== 'showroom') {
            imageStack(model);
            previewIconsPane.showMenuItem(model);
        } else {
            previewImageStack.hide();
        }
    }

    //
    // Handle the activation of an item
    //
    function leafClicked(lv, model) {
        //console.warn('appView.leafClicked()');
        //console.log(model);
        if(model.type === 'empty') {
            noAppsForYou.call(this);
        }
        else if (model.type === "app") {
            this.getController().startApplication(model.appId);
            recordLaunchStats(model.appId);
        } else if (model.status) {
            this.goto('detail',model);
        }
    }

    //
    // Set the chosen top images to the image stack
    //
    function imageStack(model) {

        var i = 0;
        var picks = sortByUsage(model && model._data_tree_branch) || [];
        while(i < 3) {
            var pick = picks[i] || {};
            if(useStack && pick.icon) {
                //Log.debug("ICON SHOWING ["+i+"] "+pick.icon);
                previewImageStack.imageViews[i].setSrc(pick.icon);
                previewImageStack.imageViews[i].show();
            } else {
                previewImageStack.imageViews[i].setSrc("");
                previewImageStack.imageViews[i].hide();
            }
            i++;
        }

    }

    //
    // Record statistics about the frequency of use of each application
    //
    // Most Recently Used / Most Frequently Used
    //
    function recordLaunchStats(appId) {
        if(!persist) {
            persist = new PersistAPI();
        }
        persist.get("LaunchStats").then(
            function(stats) {
                stats = stats || {};
                usageStats = stats;
                if(appId) {
                    var appStats = stats[appId] || {
                            launches: 0
                        };
                    appStats.launches++;
                    appStats.lastLaunch = Date.now();
                    stats[appId] = appStats;
                    persist.set("LaunchStats", stats);
                    usageStats = stats;
                }
                //Log.debug("---------- Usage Stats", usageStats);
            }
        );

    }

    //
    // Pick the top n items from the list based on most frequent / most recent use
    //
    function sortByUsage(items) {
        if(!usageStats) return items;

        items = items || [];
        var sorted = items.slice();
        // sort by most frequent first, then most recent, then by name
        sorted.sort(function(a,b) {
            var useA = (usageStats || {})[a.appId] || {};
            var useB = (usageStats || {})[b.appId] || {};
            var fa = (useA || {}).launches || 0;
            var fb = (useB || {}).launches || 0;
            if(fa === fb) {
                var ra = (useA || {}).lastLaunch || 0;
                var rb = (useB || {}).lastLaunch || 0;
                ra = Math.floor(ra/3600000); // within last hour
                rb = Math.floor(rb/3600000);

                if(ra === rb) {
                    return (a.text.toUpperCase() > b.text.toUpperCase()) ? 1 : -1;
                }
                return (ra > rb) ? -1 : 1;
            }
            return (fa > fb) ? -1 : 1;
        });
        return sorted;
    }

    //
    // No apps in this folder.
    //
    function noAppsForYou() {
        var menu = this.getChamber('menu');

        // TODO: fix dialog bug so we can separate the addButton.  Right now, it fails for some reason so we have to
        // create one of two different dialog versions

        var dialogConfig;
        if(haveInstallAPI) {
            dialogConfig = new DialogConfig.InfoDialog(
                {
                    title: "No Apps in this category.",
                    text: "Go to the Showroom to install Apps.",
                    hide: function (ev, control, status) {
                        if (status === 'Confirm') {
                            menu.setCurrentNodePath([0]);
                        }
                    }
                }
            ).addButton('Confirm',
                {
                    text: 'Showroom',
                    classNames: ['oc-confirm-button']
                }
            ).addButton('Dismiss',
                {
                    text: 'Close Dialog',
                    timeout: 36000
                }
            ).build();
        }
        else {
            dialogConfig = new DialogConfig.InfoDialog(
                {
                    title: "No Apps in this category.",
                    text: "Visit insidetrack.opencar.com for available applications to download"
                }
            ).addButton('Dismiss',
                {
                    text: 'Close Dialog',
                    timeout: 36000
                }
            ).build();
        }

        noAppsDialog = new Dialog(dialogConfig);
        noAppsDialog.show();
    }

});
