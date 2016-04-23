define(function(require) {
    'use strict';

    var Class           = require('common/Class'),
        Promise         = require('common/lib/Promise'),
        MCDEvent        = require('common/MCDEvent'),
        Paths           = require('common/lib/Paths'),
        PlatformConfig  = require('common/PlatformConfig'),
        Manifest        = require('text!$MODULE_PATH/app.manifest'),
        ModuleView      = require('common/platform/ModuleView');

    // Access to the controller
    var appController;
    // Controller features are checked at startup; Install service will fail if not supported.
    var haveInstallAPI;
    // The cached data tree
    var menuDataTree;
    // Used to prevent calling batch conclusion if there was an error (for benefit of UI handling logic only)
    var errorReceived;
    // Form ("long" or otherwise (short is default)) display of version string in Detail
    var versionForm;

    return Class.create(
        ModuleView,
        {
            initialize : function($super, context, name, focusController) {
                $super(context, name, focusController);
                focusController.addMCDEventListener(
                    MCDEvent.EventType.BACK,
                    function(event){
                        if(this._appId !== PlatformConfig.homeScreenApplicationId){
                            this.__ignoreKeys = true;
                            this._focusController.setChildrenAsNotFocusable();
                            this.getController().startApplication(PlatformConfig.homeScreenApplicationId);
                        }else{
                            //Log.log("ALREADY AT HOME");
                        }
                        event.stopPropagation();
                        event.preventDefault();
                    }.bind(this)
                );
            }.override(),

            beforeStart: function($super) {
                appController = this.getController();
                // Check for our API
                appController.isInstallControllerAvailable().done(function(isAPI) {
                    haveInstallAPI = isAPI;
                });
                return $super();
            },

            //
            // Set up with information from manifest
            //
            started: function($super) {
                var config = JSON.parse(Manifest);
                var serviceInfo = {
                    url: config.otaUrl,
                    key : config.apiKey // not currently used
                };

                versionForm = config.versionForm || "";

                var pService;

                // This will be false if there was an error initializing the Install services
                if(appController.isInstallControllerAvailable()) {

                    //Log.debug("Setting Showroom up with serviceInfo = ", serviceInfo);

                    // Set the install settings according to local persistence,
                    // Use any settings from the manifest as defaults
                    this.loadChamber('options').done(function(options) {
                        if(options && typeof options.setInitialSettings === 'function') {
                            options.setInitialSettings(config.defaultSettings).then(
                                function() {
                                    // Start after the settings are realized
                                    appController.startNow();
                                }
                            )
                        }
                    });

                    pService = appController.setServiceInfo(serviceInfo);

                }
                else {
                    pService = Promise.wrap();
                }

                return Promise.whenAll(
                    $super(),
                    pService,
                    this.getMenuDataTree(),
                    Promise.wrap(this.goto('menu', undefined, false))
                );
            },

            //
            // Report the versionForm recorded in the app.manifest
            //
            getVersionForm: function() {
                return versionForm;
            },

            // ------- Installer view callbacks -----

            //
            // Called when showroom server reports new information
            //
            onAppsDiscovered: function(catalogApps, allApps) {
                catalogApps = catalogApps || [];
                allApps = allApps || [];
                var menu = this.getChamber('menu');
                if(menu) {
                    // Reconcile the apps marked 'current' in the catalog
                    // with the installed apps.
                    // Merge the data for those.
                    var i, a, appMap = {};
                    for(i = 0; i<allApps.length; i++) {
                        a = allApps[i];
                        appMap[a.appId] = a;
                    }
                    // Now merge the apps from the showroom and get those properties
                    for(i = 0; i<catalogApps.length; i++) {
                        var b = catalogApps[i];
                        a = appMap[b.appId];
                        if(a) {
                            for(var p in a) {
                                if(!b.hasOwnProperty(p)) b[p] = a[p];
                            }
                        }
                    }
                    menu.onNewShowroomAppsAvailable(catalogApps);
                }
            },

            //
            // Called on activity for action
            //
            onTaskActivity: function(status) {
                //Log.debug("ON TASK ACTIVITY",status);
                var detail = this.getChamber('detail', true);
                if(detail) {
                    detail.onTaskActivity(status);
                }
                if(status.installationStage === "Error") {
                    errorReceived = status.error;
                    // on catalog fetch error, report "no catalog apps" to menu.
                    if(status.error.errorCode === 10000) { // SHOWROOM_REQUEST_FAILED
                        this.onAppsDiscovered([]);
                    }
                } else {
                    errorReceived = undefined;
                }
            },

            //
            // Called on completion of a task in a batch
            //
            onTaskCompleted: function() {
                var detail = this.getChamber('detail', true);
                if(detail) {
                    detail.onTaskCompleted();
                }
            },

            //
            // Called when the full batch is complete
            // Here is where we update the menu to match
            //
            onBatchCompleted: function() {
                if(!errorReceived) {
                    var menu = this.getChamber('menu');
                    if (menu) {
                        var path = menu.getNodePathInfo();
                        var index = menu.getCurrentSelectedIndex();
                        this.resetMenuDataTree();
                        menu.data().then(
                            function (tree) {
                                menu.reset(tree);
                                menu.setCurrentNodePath(path, index);
                                menu.refresh();
                            }
                        )
                    }
                }
            },

        // ---------- Menu data functions ---------

            /**
             * Returns the basic data tree of apps that will be used by the ListChamber
             * Builds first if tree is reset.
             *
             * @returns {Promise} Resolves the data tree array
             */
            getMenuDataTree: function() {
                var p = new Promise();
                if(!menuDataTree) {
                    this.buildDataTree().then(
                        function(tree) {
                            menuDataTree = tree;
                            p.resolve(tree);
                        },
                        function() {
                            p.reject();
                        }
                    );
                } else {
                    p.resolve(menuDataTree);
                }
                return p;
            },

            /**
             * Resets the data tree so next load is a new fetch
             */
            resetMenuDataTree: function() {
                menuDataTree = undefined;
            },

            /**
             * Build the basic data tree of apps that will be used by the ListChamber
             * @returns {Promise} Resolves the data tree array
             */
            buildDataTree: function() {
                var p = new Promise();
                appController.getCategorizedApps().then(
                    function(categorized) {
                        var tree = [];
                        if(categorized) {
                            for (var i = 0; i < categorized.length; i++) {
                                var cat = categorized[i];
                                var appList = makeAppList(cat.apps);
                                tree.push({
                                    type: appList && appList.length ? "category" : "empty",
                                    text: cat.name,
                                    icon_font: cat.icon_font,
                                    icon: cat.icon,
                                    _data_tree_branch: appList
                                });
                            }
                        }
                        p.resolve(tree);
                    },
                    function() {
                        p.reject();
                    }
                );
                return p;
            }

        }
    );
    // called by buildDataTree to map manifest data to our app data
    function makeAppList(catApps) {
        var appListOut = [];
        for(var i=0; i<catApps.length; i++) {
            var appData = catApps[i]._config;
            appListOut.push({
                type:   "app",
                text:   appData.name,
                appId:  appData.id,
                icon    : Paths.resolve.root(appData.path + '/icon.png')
            });
        }
        return appListOut;
    }
});
