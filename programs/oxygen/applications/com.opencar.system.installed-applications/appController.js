define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Promise                 = require('common/lib/Promise'),
        ModuleController        = require('common/platform/ModuleController');

    // These implementation modules are used to compartmentalize functionality
    var MenuController      = require("$MODULE_PATH/module/MenuController"),
        InstallController   = require("$MODULE_PATH/module/InstallController");

    return Class.create(
        ModuleController,
        {
            //
            // Init the component modules (if they have an init function).
            // Insure these are all done before leaving `beforeStart`
            //
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
            },

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
