define(function(require) {

    var Promise         = require('common/lib/Promise'),
        SysInfoAPI      = require('common/platform/SystemInformationAPI'),
        InstallHandler  = require("$MODULE_PATH/module/InstallHandler");

    var sysInfo;

    return {

        //
        // init is to be called at the beforeStart of the Controller
        //
        init: function() {
            sysInfo = new SysInfoAPI();
            return Promise.whenAll(InstallHandler.init(), sysInfo.init());
        },

        // Start --
        // Called from View after getting information from module config
        // Note: We may or may not be putting service info in the manifest this way,
        // so we could do this in Controller.started if we have the information otherwise
        setServiceInfo: function(info) {
            InstallHandler.setServiceInfo(info);
            InstallHandler.setAppCatalogListener(ourAppCatalogListener.bind(this));
            InstallHandler.setInstallStatusListener(ourInstallStatusListener.bind(this));
        },

        //
        // Called from UI handler to start checking on demand
        //
        startNow: function() {
            InstallHandler.start();
        },

        //
        // Add an action to the batch
        //
        addInstallAction: function(app) {
            InstallHandler.addInstallAction(app);
        },

        //
        // Starts a batch of action tasks
        //
        startActionBatch: function() {
            InstallHandler.startActionBatch();
        },

        //
        // Cancels the current batch
        //
        cancelActionBatch: function() {
            InstallHandler.cancelActionBatch();
        },

        //
        // Called from UI handler to retrieve error
        //
        getInstallerError: function() {
            return InstallHandler.getError();
        },

        //
        // Called from UI to see when we are scheduled to make next query
        //
        getWhenNextQuery: function() {
            return InstallHandler.getWhenNextQuery();
        },

        //
        // Called from the UI handling to get current settings
        //
        getAutomatedOptions: function() {
            return InstallHandler.getAutomatedOptions();
        },

        //
        // Called from the UI Handling to set options
        //
        setAutomatedOptions: function(options) {
            InstallHandler.setAutomatedOptions(options);
        }
    };


    //
    // Showroom reports available apps. Echo to view at `onAppsDiscovered`
    //
    function ourAppCatalogListener(apps) {
        //Log.debug("OurAppCatalogListener sees ", apps);
        var appView = this.getView();
        if(appView && typeof appView.onAppsDiscovered === 'function') {
            sysInfo.getApplicationInfo().done(function (appInfo) {
                //We need to communicate this list to the appView for distribution to the screens
                appView.onAppsDiscovered(apps, appInfo.apps);
            });
        }
    }

    //
    // Installer reports status. Echo to view at `onGatherStarted`, `onTaskActivity`, and `onTaskCompleted`
    //
    function ourInstallStatusListener(status) {
        //Log.debug("OurInstallStatusListener sees ", status);
        var appView = this.getView();
        if(status && appView) {
            if (status.installationStage === "Gather") {
                if (typeof appView.onGatherStarted === 'function') {
                    appView.onGatherStarted();
                }
            }
            if (status.actionPhase || status.actionDetail || status.installationStage === "Error") {
                if (typeof appView.onTaskActivity === 'function') {
                    appView.onTaskActivity(status);
                }
            }

            if (status.installationStage === "RecordActionSuccess") {
                if (typeof appView.onTaskCompleted === 'function') {
                    appView.onTaskCompleted();
                }
            }

            if (status.installationStage === "DoneBatch" || status.installationStage === "Error") {
                if (typeof appView.onBatchCompleted === 'function') {
                    appView.onBatchCompleted();
                }
            }
        }
    }

});