define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Promise                 = require('common/lib/Promise'),
        Paths                   = require('common/lib/Paths'),
        RegistryAPI             = require('common/platform/RegistryAPI'),               //XX
        Favorites               = require('common/lib/Favorites'),
        ModuleController        = require('common/platform/ModuleController');

    // These implementation modules are used to compartmentalize functionality
    var MenuController      = require("$MODULE_PATH/module/MenuController"),
        InstallController   = require("$MODULE_PATH/module/InstallController");


    return Class.create(
        ModuleController,
        {
            init : function() {
                this._registryAPI           = new RegistryAPI(this.getContext());               //XX
                //this._applicationManagerAPI = new ApplicationManagerAPI(this.getContext());
                this.favoritesAPI           = new Favorites(this.getContext());
                this.favoritesAPI.setFavoritesPersistKey('hydrogen.app_favorites');
                this.setStoppable(false);
            }.override(),

            beforeStart: function($super) {
                var p = new Promise();
                var pm = Promise.wrap(MenuController.init ? MenuController.init(this) : undefined);
                var pi = Promise.wrap(InstallController.init ? InstallController.init(this) : undefined);
                Promise.whenAll(pi, pm).always(function() {
                    p.resolve();
                });

                // Disconnect functions to components that fail to init
                pi.fail(function() {
                    Log.error("FAILED INIT OF INSTALLATION SERVICES. SHOWROOM WILL NOT BE AVAILABLE.");
                    InstallController = null;
                });
                pm.fail(function() {
                    Log.error("FAILED INIT OF MENU CONTROLLER");
                    MenuController = null;
                });
                return Promise.whenAll($super(), p);
            }.override(),

            // XX
            // TODO: replace with MenuController getCategories, for better consistency with Oxygen version
            apps : function() {
                var promise = new Promise();

                Promise
                    .when(
                        this._registryAPI.getCategories(),
                        this._registryAPI.getApplications(),
                        this.favoritesAPI.getFavorites()
                    )
                    .then(function(categoriesArgs, applicationsArgs, favoritesArgs) {
                        var i, ii;
                        var sortByName = function(a, b) {
                            return (a._config.name.toUpperCase() > b._config.name.toUpperCase()) ? 1 : -1;
                        };

                        var categories = categoriesArgs[0],
                            applications = applicationsArgs[0],
                            favorites = favoritesArgs,
                            favoritedApps = [];

                        // Sort applications within categories by name
                        for (i = 0, ii = categories.length; i < ii; i++) {
                            categories[i].apps.sort(sortByName);
                        }

                        // Sort list of all applications by name
                        applications.sort(sortByName);

                        var children,appData,
                            treeListData = [];

                        for (i = 0, ii = categories.length; i < ii; i++) {
                            children        = [];
                            applications    = categories[i].apps;
                            for (var j = 0, jj = applications.length; j < jj; j++) {
                                appData = applications[j]._config;

                                // TODO: We need to figure out a way to maintain the data-type across the controller -> view
                                // wire.  Messing with the private property _config here is nasty...
                                // ...JSON SOAP here we come? :)

                                children.push({
                                    text    : appData.name,
                                    appId   : appData.id,
                                    path    : appData.path,
                                    icon    : Paths.resolve.root(appData.path+'/icon.png')
                                });

                                if(favorites.length && favorites.indexOf(appData.id)!==-1) {
                                    favoritedApps.push({
                                        text    : appData.name,
                                        appId   : appData.id,
                                        path    : appData.path,
                                        icon    : Paths.resolve.root(appData.path+'/icon.png')
                                    });
                                }
                            }

                            // If there are no children, create a placeholder list item so the user isn't completely lost.
                            if (!children.length) {
                                if (categories[i].id === 'WORKSPACE') {
                                    children.push({
                                        text : 'No projects in your workspace'
                                    });
                                }
                                else {
                                    children.push({
                                        text: 'Visit InsideTrack to'
                                    });
                                    children.push({
                                        text: 'download applications'
                                    });
                                    children.push({
                                        text: 'for this category.'
                                    });
                                }
                            }

                            //
                            // This sucks, but Paths won't work here controller-side for expansion.
                            // This has come up before.
                            // Since this is the hydrogen menu app, this hard-coded ugliness is not as
                            // bad as it would be elsewhere, I suppose.
                            // TODO: We really need a better Paths solution.
                            //
                            // Also: When and why did all these icons get put into "button-bar"?  Let's move them.
                            //
//                            var iconLocation = "$CURRENT_THEME/images/button-bar/";
                            var iconLocation = "/ui/vehicle-profiles/hydrogen/res/themes/default/images/button-bar/";

                            var catData = {
                                text : categories[i].name,
                                "_data_tree_branch"   : children
                            };
                            var iconUrl = categories[i].icon;
                            if(iconUrl && iconUrl.length > 1) {
//                                catData.icon = Paths.expand("",iconLocation + iconUrl);
                                catData.icon = iconLocation + iconUrl;
                            } else {
                                catData.icon_font = iconUrl;
                            }
                            treeListData.push(catData);
                        }
                        treeListData.push({
                            text : 'Favorites',
                            "_data_tree_branch" : favoritedApps
                        });

                        promise.resolve(treeListData);
                    }.bind(this));
                return promise;
            },
            beforeResume : function($super, config){
                var self = this,
                    promise = new Promise();

                if (config && config.reset && config.reset === 'true') {
                    self.getView().reset();
                    if(config.hasOwnProperty("categoryId")) {
                        Promise.whenAll(
                                self.getView().resetAndGo(config.categoryId, config.name))
                            .then(function() {
                                $super(config);
                                promise.resolve();
                            });
                    }else{
                        $super(config);
                        promise.resolve();
                    }
                }else{
                    $super(config);
                    promise.resolve();
                }
                return promise;
            }.override(),

            // ---------------------------------------------------

            // Test functions
            isMenuControllerAvailable: function() {return !!MenuController;},
            isInstallControllerAvailable: function() {return !!InstallController;},

            // --- Menu Controller functions: See the MenuController module for actual code and use
            getCategorizedApps: MenuController.getCategorizedApps,
            startApplication: MenuController.startApplication,

            // --- InstallController functions: See the InstallController module for actual code and use
            setServiceInfo: InstallController.setServiceInfo,
            startNow: InstallController.startNow,
            addInstallAction: InstallController.addInstallAction,
            startActionBatch: InstallController.startActionBatch,
            cancelActionBatch: InstallController.cancelActionBatch,
            getInstallerError: InstallController.getInstallerError,
            getWhenNextQuery: InstallController.getWhenNextQuery,
            getNumberOfInstalledApps: InstallController.getNumberOfInstalledApps,
            getAutomatedOptions: InstallController.getAutomatedOptions,
            setAutomatedOptions: InstallController.setAutomatedOptions

        }
    );
});
