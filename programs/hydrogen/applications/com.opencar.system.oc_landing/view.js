define(function(require) {
    'use strict';

    var Class                       = require('common/Class'),
        Promise                     = require('common/lib/Promise'),
        ListChamber                 = require('common/platform/chamber/ListChamber'),
        ListView                    = require('common/ui/ListView'),
        ModuleView                  = require('common/platform/ModuleView'),
        GridItemWithIconViewFancy   = require('common/ui/list-item-view/GridItemWithIconViewFancy'),
        Dialog                      = require('common/ui/Dialog'),
        Position                    = require('common/ui/Position'),
        text                        = require('view!text'),
        icon                        = require('view!icon'),
        Manifest                    = require('text!$MODULE_PATH/app.manifest'),
        Favorites                   = require('common/lib/Favorites');

    var treeData;
    var cancelTimeout = 5000;
    var favoriteApps = [], apps;
    var noFavoriteString = "You have no favorites.";
    var View = Class.create(
        ModuleView,
        {
            init: function($super) {
                $super();
                var i, j;
                this.favoritesAPI = new Favorites();
                this.favoritesAPI.setFavoritesPersistKey('hydrogen.app_favorites');
                this.favoritesAPI.subscribe(Favorites.Event.EV_CHANGED,function(evt, prop, type, value) {
                    var checkApp, checkApp1, found = false;
                    switch (type) {
                        case Favorites.Event.TYPE.ADD:
                            for(i = 0, j = apps.length; i < j; i++){
                                checkApp = apps[i];
                                if(checkApp.appId === value){
                                    favoriteApps.push(checkApp);
                                    break;
                                }
                                if(Array.isArray(checkApp._data_tree_branch) && checkApp._data_tree_branch.length) {
                                    for( var x = 0, y = checkApp._data_tree_branch.length; x < y; x++){
                                        checkApp1 = checkApp._data_tree_branch[x];
                                        if(checkApp1.appId === value){
                                            found = true;
                                            favoriteApps.push(checkApp1);
                                            if(favoriteApps.length === 2 && favoriteApps[0].text === noFavoriteString) {
                                                favoriteApps.mode = ListView.Mode.GRID;
                                                favoriteApps.shift();
                                            }
                                            break;
                                        }
                                    }
                                    if(found) {
                                        break;
                                    }
                                }
                            }
                            this.getChamber('menu').refresh();
                        break;
                        case Favorites.Event.TYPE.REMOVE:
                            for(i = 0, j = favoriteApps.length; i < j; i++) {
                                if(favoriteApps[i].appId === value) {
                                    favoriteApps.splice(i, 1);
                                    if(favoriteApps.length===0) {
                                        favoriteApps.push({
                                            text: noFavoriteString
                                        });
                                        favoriteApps.mode = ListView.Mode.LIST;
                                    }else{
                                        if(favoriteApps.mode !== ListView.Mode.GRID) {
                                            favoriteApps.mode = ListView.Mode.GRID;
                                        }
                                    }
                                    this.getChamber('menu').refresh();
                                    break;
                                }
                            }
                        break;
                    }
                }.bind(this));
                return this.favoritesAPI.getFavorites();
            },

            started: function($super, dataToStartingChamber) {
                return Promise.whenAll(
                    autoStart.call(this),
                    $super(dataToStartingChamber).done(function() {
                        this.getChamber('menu').lv.addItemLongClickListener(function(lv, model) {
                            var appId = model.get('appId');

                            var buttons = {};
                            buttons[Dialog.Result.NEUTRAL] = 'Cancel';

                            if (appId) {
                                if (this.favoritesAPI.isFavorite(appId)) {
                                    buttons[Dialog.Result.POSITIVE] = 'Remove Favorite';
                                } else {
                                    buttons[Dialog.Result.POSITIVE] = 'Add Favorite';
                                }

                                this._addFavoritesDialog = new Dialog({
                                    classNames : ['favorites-dialog'],
                                    content : icon({src:model.get('icon'),width:'100px',height: '100px'}, 'main'),
                                    title: text({text:model.get('text')}, 'header'),
                                    buttons: buttons,
                                    timeout: cancelTimeout,
                                    autoActivateOnDriveMode: true,
                                    hide: function(ev, control, status) {
                                        if (status === Dialog.Result.POSITIVE) {
                                            this.favoritesAPI.toggleFavorite(appId);
                                        }
                                    }.bind(this),
                                    position: Position.CENTER_STRETCH
                                });

                                this._addFavoritesDialog.setButtonOrder(
                                    Dialog.Result.NEUTRAL,
                                    Dialog.Result.POSITIVE
                                );

                                this._addFavoritesDialog.show();
                            }
                        }.bind(this));

                    this.getChamber('menu').subscribe(ListChamber.Event.EV_CHANGED, function(evt, prop, type, level){
                        if(level === 0) {
                            this.lv.element.classList.add('fancy');
                            this.lv.setItemsPerRow(3);
                            document.querySelector('.back-button-container').style.display = 'none';
                        }else{
                            this.lv.element.classList.remove('fancy');
                            this.lv.setItemsPerRow(4);
                            document.querySelector('.back-button-container').style.display = 'block';
                        }
                    });
                    }.bind(this))
                );
            },
            gotoCategory : function(branchText){
                this.getChamber('menu').nestedListManager.activateBranch(branchText);
            },
            data : function(){
                var promise = new Promise();
                this.getController().apps().done(function(allApps){
                    apps = allApps;
                    var mediaApps, navigationApps, callingApps;
                    var app, favoritesIndex;
                    for(var i = 0, j = apps.length; i < j; i++){
                        app = apps[i];
                        if(app.text === 'Audio'){
                            mediaApps = app._data_tree_branch;
                        }
                        if(app.text ==='Location'){
                            navigationApps = app._data_tree_branch;
                        }
                        if(app.text === 'Favorites'){
                            favoritesIndex = i;
                            favoriteApps = app._data_tree_branch;
                            if(favoriteApps.length === 0) {
                                favoriteApps = [
                                    {
                                        text: noFavoriteString
                                    }
                                ];
                                favoriteApps.mode = ListView.Mode.LIST;
                            }else{
                                favoriteApps.mode = ListView.Mode.GRID;
                            }
                        }
                        if(app.text === 'Calling'){
                            callingApps = app._data_tree_branch;
                        }
                    }
                    // remove favorites listing from apps
                    apps.splice(favoritesIndex, 1);

                    /*
                    var noApps = [
                        {
                            text: "No applications in this category."
                        }
                    ];
                    */
                    
                    

                    var data = [
                        {
                            text:'Apps',
                            icon: window.MODULE_PATH + '/img/hydrogen-icon-apps.png',
                            _data_tree_branch : apps
                        },
                        {
                            text:'Favorites',
                            icon: window.MODULE_PATH + '/img/hydrogen-icon-favorites.png',
                            _data_tree_branch : favoriteApps
                        },
                        {
                            text:'Settings',
                            icon: window.MODULE_PATH + '/img/hydrogen-icon-system.png',
                            //appId: 'com.opencar.system.about'   //'com.opencar.system.settings'
                            actionInfo: {
                                name: "goSettings"
                            }
                        },
                        {
                            text:'Radio',
                            icon: window.MODULE_PATH + '/img/hydrogen-icon-media.png',
                            appId: 'com.opencar.core.radio-sim'
                        },
                        {
                            text:'Nav',
                            icon: window.MODULE_PATH + '/img/hydrogen-icon-navigation.png',
                            appId: 'com.opencar.poi.dev.maps-example-with-plugins'
                            //_data_tree_branch : navigationApps
                        },
                        {
                            text:'Phone',
                            icon: window.MODULE_PATH + '/img/hydrogen-icon-call.png',
                            appId: 'com.opencar.core.phone' // _data_tree_branch : callingApps
                        }
                    ];
                    data.mode = ListView.Mode.GRID;
                    data.listItemViewType = GridItemWithIconViewFancy;
                    treeData = data;
                    promise.resolve(data);
                }.bind(this));
                return promise;
            },
            reset : function(){
                this.getChamber('menu').nestedListManager.activateBranch('');
            },
            resetAndRefresh : function(){
                this.getChamber('menu').nestedListManager.activateBranch('');
                this.goto('menu', undefined, false);
            },
            resetAndGo : function(cat, name) {
                var self = this,
                    lc = this.getChamber('menu');
                self.data().done(function(data) {
                    lc.reset(data);
                    if(cat) {
                        self.gotoCategory(cat);
                        if(name) {
                            lc.selectNamedItem(name);
                        }
                    }
                });
            }
        }
    );
    return View;


    //
    // Handle the start of automatic updates
    //
    function autoStart() {
        var config = JSON.parse(Manifest);
        var serviceInfo = {
            url: config.otaUrl,
            key : config.apiKey // not currently used
        };

        var pService;
        var appController = this.getController();

        // This will be false if there was an error initializing the Install services
        if(appController.isInstallControllerAvailable()) {

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

        return pService;
    }
});
