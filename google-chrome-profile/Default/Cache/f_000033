define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Config              = require('common/Config'),
        Promise             = require('common/lib/Promise'),
        Url                 = require('common/lib/Url'),
        VehicleLocationAPI  = require('common/platform/VehicleLocationAPI'),
        SystemInformationAPI= require('common/platform/SystemInformationAPI'),
        InstallAPI          = require('common/platform/InstallAPI'),
        IDA                 = require('common/InternetDataAccessAPI'),
        PersistAPI          = require('common/platform/PersistAPI'),
        StateController     = require('common/lib/StateController');

    /**
     * Defines the properties needed to access the showroom service.
     *
     * @typedef ServiceInfo
     * @property {string} url   The url for the Showroom Service
     */

    /**
     * Defines the options for automatic action.  Also defines periodicity of Showroom query updates
     * Unless `autoDisabled` is true, normal action is to automatically perform all mandatory *forced* actions.
     * That is, if this is *true*, no updates (force or otherwise), can occur.
     * If this is *false* (automatic action enabled), forced updates will occur regardless of the optional settings.
     * Additionally, the `autoInstall` and `autoUpdate` options can assign additional automatic option behavior for
     * when `autoDisabled` is false.  These allow unattended installs or updates of non-forced applications as well,
     * if selected.
     *
     * @typedef AutomationOptions
     * @property {boolean} [autoDisabled]   If `true`, no updates mandatory or otherwise will occur automatically.
     * @property {boolean} [autoInstall]    If `true`, all new items presented will be installed automatically
     * @property {boolean} [autoUpdate]     If `true`, all existing items with updates available will be updated automatically
     * @property {number} [showroomRetrySeconds] Number of seconds to wait before retrying Showroom if last attempt was an error.
     *                                           Default is 900 (15 minutes). Set to 0 to disable.
     * @property {number} [showroomRevisitSeconds] Number of seconds to wait before revisiting Showroom for new updates.
     *                                             Default is 86400 (1 day). Set to 0 to disable.
     */

    /**
     * Defines status information available during installation process
     *
     * @typedef InstallHandlerStatus
     * @property {string}   installationStage   Name of the stage of process the InstallHandler is currently executing
     * @property {boolean}  isCancelPending     True if cancel is pending during this stage
     * @property {string}   packageLocationUrl  (if processing) Url of package server location the actions refer to, if any.
     * @property {string}   appId               (if processing) The appId of the package being installed or removed
     * @property {string}   action              (if processing) Name of action being conducted on of "I
     * @property {string}   actionPhase         (if processing) One of the InstallAPI~InstallStatus strings indicating action.
     * @property {number}   actionProgress      (if processing) For download actions, the percent of progress.
     * @property {object}   error               (if error) Present if there is an error. Contains `errorCode` and `errorText`
     *                                          reporting the InstallAPI error condition for the action.
     */

    /**
     * Defines properties each app object in the array supplied to the listener registered with `setAppCatalogListener`
     *
     * @typedef AppCatalogProperties
     * @property {string}   appName             Title of the application
     * @property {string}   appId               Identifier of the application (as found in manifest)
     * @property {string}   appVersion          Version of this application (InsideTrack matched)
     * @property {InstallHandlerStatus} status  String constant of *InstallHandlerStatus* type defining status/action.
     * @property {string}   packageLocationUrl  Package server session url
     * @property {string}   description         Describes the application
     * @property {number}   kBSize              Size of the package in kilobytes
     * @property {string}   buildDate           ISO Date string of of package creation time (UTC)
     * @property {string}   imageUrl            URL of image depiction of package
     * @property {string[]} countries           Array of country identifiers
     * @property {string[]} languages           Array of language identifies
     */


    var defRevisitSeconds = 86400;
    var defRetrySeconds = 900;

    // set true if we fail in initialSetup
    var initHasFailed;

    var InstallHandler = {

        /**
         * Sets the service connection url and login options
         * @param {ServiceInfo} serviceInfo
         */
        setServiceInfo: function(serviceInfo) {
            oServiceInfo = serviceInfo;
        },

        /**
         * Sets the options for automatic installation behavior.
         * @param {AutomationOptions} options
         */
        setAutomatedOptions: function(options) {
            options = options || {};
            oOptions = oOptions || {};
            if(typeof options.autoDisabled === 'undefined') options.autoDisabled = oOptions.autoDisabled;
            if(typeof options.autoInstall === 'undefined') options.autoInstall = oOptions.autoInstall;
            if(typeof options.autoUpdate === 'undefined') options.autoUpdate = oOptions.autoUpdate;
            options.autoDisabled = !!options.autoDisabled;
            options.autoInstall = !!options.autoInstall;
            options.autoUpdate = !!options.autoUpdate;
            options.showroomRevisitSeconds = options.showroomRevisitSeconds || oOptions.showroomRevisitSeconds || defRevisitSeconds;
            options.showroomRetrySeconds = options.showroomRetrySeconds || oOptions.showroomRetrySeconds || defRetrySeconds;
            oOptions = options;
            revisitTimer();
        },

        /**
         * Returns the current automation options that have been set
         * @returns {AutomationOptions}
         */
        getAutomatedOptions: function() {
            return oOptions;
        },

        // Promise return to init this handler
        /**
         * Initializes InstallHandler for use.
         * Must be called once at start by controlling application.
         *
         * The `start()` function may be called after the returned Promise resolves successfully.
         *
         * @returns {Promise} Promise resolves on successful init.
         */
        init: function() {
            return initialSetup();
        },

        /**
         * Starts the InstallHandler action.
         *
         * The process begins with an exchange of information with the
         * Showroom service designated via `setServiceInfo` and proceeding with any automated operations
         * that have been enabled (see `setAutomatedOptions()`.
         *
         * Informational feedback is provided via the registered listeners of
         * `setAppCatalogListener()` and `setInstallStatusListener()`.
         *
         * This function need only be called once.  If there is automatic retry timing, the process
         * will repeat accordingly.
         *
         * The controlling app may, however, call this at any time when there is not already a batch
         * operation in progress.  Any start call will reset any timers related to automatic start.
         *
         */
        start: function() {
            //Log.warn("Start");
            clearTimeout(autoStartTimer); // clear any autostart timer that might be pending

            if(initHasFailed) {
                return;
            } // don't do anything if we have failed to init

            stateControl.setState("Gather");
        },

        /**
         * Registers an application callback to listen for new app catalog selections from Showroom app.
         * Listener is called with an array of available apps and status.
         *
         * Each object in the returned array will have the properties defined by *AppCatalogProperties*
         *
         * Object may have other properties designed to support UI or other informational purposes,
         * but at a minimum each app object will contain *appId* and *status*, where
         * *status* is one of the install action keywords.
         *
         * Application can submit the app object found in each element of the array to the `addInstallAction()`
         * function to carry out the recommended action of the *status* field.
         *
         * Application may also set the recommended status (e.g. "Remove") prior to submitting to
         * `addInstallAction()`.  Note that setting an action that does not result in change (e.g. attempting
         * to update an application that is current) will execute the action, but it will not result in a
         * change after execution has completed.
         *
         * @param {function} catalogListener -- accepts an array of apps as its parameter
         */
        setAppCatalogListener: function(catalogListener) {
            oAppCatalogListener = catalogListener;
        },

        /**
         * Registers an application callback to listen for status updates during the installation process.
         *
         * @param statusListener -- accepts an InstallHandlerStatus object as a parameter
         */
        setInstallStatusListener: function(statusListener) {
            oInstallStatusListener = statusListener;
        },

        /**
         * Adds an app object with requested status action to be handled in next action batch.
         *
         * This operation can be conducted even if there is a current batch operation in process.
         * The next `startActionBatch()` will execute this group of actions.
         */
        addInstallAction: function(app) {
            addInstallAction(app);
        },

        /**
         * Resets any existing install actions that are queued but not yet started.
         *
         * An application may choose to call this if it has committed actions it no longer wishes to
         * execute.
         */
        resetInstallActions: function() {
            installActionMap = {};
        },

        /**
         * Returns an array of the current set of apps that have been committed for install action.
         *
         * @returns {object[]} apps -- array of apps with *status* property indicating the scheduled action.
         */
        getInstallActions: function() {
            var outApps = [];
            if(installActionMap) {
                for(var p in installActionMap) {
                    if(installActionMap.hasOwnProperty(p)) {
                        outApps.concat(installActionMap[p]);
                    }
                }
            }
            return outApps;
        },

        /**
         * Starts the next action batch.
         *
         * Will return `false` if action failed.
         * @return {boolean} `true` if batch was successfully started; `false` if a batch is already in progress.
         */
        startActionBatch: function() {
            if(!batchActive) {
                stateControl.setState("StartBatch");
                return true;
            }
            return false;
        },

        /**
         * Checks to see if an action batch is currently in progress.
         *
         * @returns {boolean} `true` if there is a batch in progress currently.
         */
        isBatchInProgress: function() {
            return batchActive;
        },

        /**
         * Cancels the current batch process.
         *
         * Cancels the current installation action, if possible, and all actions thereafter for the batch.
         *
         * The ability to cancel an active installation action is
         * implementation dependent and generally limited to canceling a download operation.
         */
        cancelActionBatch: function() {
            oIsCanceled = true;
            batchActive = false;
            if(stateControl.getState().name === "PerformAction") {
                installSvc.cancelProcess();
            }
        },

        /**
         * Returns the current error status.
         * Relevant for a status report with an *installationStage* of *Error*.
         *
         * @returns {object} with fields `errorCode` (number) and `errorText` (string) describing error.
         */
        getError: function() {
            return error;
        },

        /**
         * Returns the date (timestamp) of the next query to the showroom server
         */
        getWhenNextQuery: function() {
            return nextShowroomQuery.getTime();
        }
    };

    // ------ Variables under control of API
    var
    // The Showroom service connection parameters
        oServiceInfo = {
            url: ""
        },
    // The currently chosen options
        oOptions = {
            autoDisabled: false,
            autoInstall: false,
            autoUpdate: false,
            showroomRetrySeconds: defRetrySeconds,
            showroomRevisitSeconds: defRevisitSeconds
        },
    // The currently registered listener to receive updates from the Showroom
        oAppCatalogListener,
    // The currently registered listener to receive updates about the installation status
        oInstallStatusListener,
    // Object map for collecting actions per package server that will be submitted for next batch
        oQueuedActionMap,
    // True if we have signaled a cancel
        oIsCanceled;

    // ------ Internal functional classes and state properties
    var sysInfo, installSvc, stateControl;
    // Current error report
    var error;
    // The current set of recommendations from the Showroom
    var appsCatalog;
    // Object map for grouping actions per package server
    var installActionMap;
    // Map to track completed sessions
    var sessionsCompleted;
    // Name of package server for current session
    var currentSession;
    // The array of actions to carry out during this package server session
    var sessionActions;
    // The index into the sessionActions array
    var actionIndex;
    // Flag if we are currently in a batch process
    var batchActive;
    // Handles state control during installation action
    var stateOnActionComplete, stateOnActionError;
    // Timer managing auto retry / revisit
    var autoStartTimer;
    // Time of the last showroom query
    var lastShowroomQuery;
    // Date/Time of next showroom query
    var nextShowroomQuery;
    // impatience timeout for actions that have no response
    var actionTimeout;


    // Error codes
    var INTERNAL_ERROR          = -1,
        SHOWROOM_REQUEST_FAILED = 10000,
        BUSY_ON_RETRY           = 10001;

    // Actions
    var STATUS_NO_ACTION = "current",
        STATUS_NEW = "new",
        STATUS_UPDATE = "update",
        STATUS_REMOVE = "remove",
        STATUS_FORCE_UPDATE = "force_update",
        STATUS_FORCE_NEW = "force_new",          // currently not part of specification
        STATUS_CANT_REMOVE = "no_remove";              // currently not part of specification

    var NON_SESSION = "non-session";   // reserved 'name' of session endpoint for non-session tasks
    //
    // Initial setup: Create API bindings
    //
    function initialSetup() {
        installSvc = new InstallAPI();
        var pi = installSvc.init().then(
            function(ret) {
                installSvc.subscribe(InstallAPI.Event.installStatus, installStatusCallback);
                //Log.debug("Successfully init install service", ret);
            },
            function(ret) {
                //Log.debug("Init rejected for install service", ret);
                initHasFailed = true;
            }
        );
        sysInfo = new SystemInformationAPI();
        var ps = sysInfo.init().then(
            function(ret) {
                //Log.debug("Successfully init SystemInformation service", ret);
            },
            function(ret) {
                //Log.debug("Init rejected for SystemInformation service", ret);
                initHasFailed = true;
            }
        );
        stateControl = new StateController();
        stateControl.add("Gather", gatherClientInfo);                   // setting up
        stateControl.add("QueryShowroom", queryShowroomServer);         // status info on server exchange

        stateControl.add("ChoiceSelection", choiceSelection);           // UI in control

        stateControl.add("StartBatch", startBatch);               // This loop runs.  Status is sent to UI monitoring
        stateControl.add("SessionEnd", sessionEnd);
        stateControl.add("NextSession", nextSession);
        stateControl.add("DoneBatch", doneBatch);

        stateControl.add("SessionStart", sessionStart);                 // Subloop
        stateControl.add("PerformAction", performAction);
        stateControl.add("RecordActionSuccess", recordActionSuccess);
        stateControl.add("NextAction", nextAction);
        stateControl.add("Error", errorState);

        return Promise.whenAll(pi, ps);
    }

    //
    // Class to gather all information from client needed for Showroom
    //
    var GatheredInfo = function() {

    }, gatheredInfo;

    GatheredInfo.prototype.collect = function() {
        gatheredInfo = {
            dateTime: new Date().toISOString(),
            systemLanguage: Config.locale
        };
        var pf = sysInfo.getFrameworkInfo().then(
            function(info) {
                gatheredInfo.programOTAId = info.programOTAId;

                gatheredInfo.programName = info.programName;
                gatheredInfo.frameworkName = info.frameworkName;
                gatheredInfo.frameworkVersion = info.commonVersion;
            }
        );
        var pd = sysInfo.getDeviceInfo().then(
            function(info) {
                gatheredInfo.uniqueDeviceId = info.uniqueDeviceId;
                gatheredInfo.runtime = info.runtime;
                gatheredInfo.os = info.os;
                gatheredInfo.osVersion = info.osVersion;
                gatheredInfo.hardware = info.hardware;
                gatheredInfo.hardwareVersion = info.hardwareVersion;
                gatheredInfo.architecture = info.architecture;
                gatheredInfo.localServer = info.localServer;
                gatheredInfo.localServerVersion = info.localServerVersion;
            }
        );
        var pl = new Promise(0);
        var vla = new VehicleLocationAPI();
        vla.init().then( // Call init first so we can trap errors.  We'll get a GPS Fix rejection that blows us out otherwise
            function() {
                new VehicleLocationAPI().getCurrentPosition(function (position) {
                    gatheredInfo.gpsLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    pl.resolve();
                });
            },
            function() {
                pl.resolve();
            }
        );
        var pa = sysInfo.getApplicationInfo().then(
            function(appListInfo) {
                //Log.debug("sysInfo getApplicationInfo ", appListInfo);
                gatheredInfo.kBInstalled = appListInfo.kilobytesInstalled;
                gatheredInfo.kBRemaining = appListInfo.kilobytesRemaining;
                gatheredInfo.apps = appListInfo.apps;

                for(var i=0; i<gatheredInfo.apps.length; i++) {
                    var a=gatheredInfo.apps[i];
                    delete a.appIcon;
                    a.app_id = a.appId; delete a.appId;
                    a.app_name = a.appName; delete a.appName;
                    a.app_version = a.appVersion; delete a.appVersion;
                }
            }
        );
        return Promise.whenAll(pf, pd, pa, pl);
    };

    //
    // Call the Showroom server for the `ppList functionality
    //
    function getCurrentAppList() {

        var theUrl = new Url(oServiceInfo.url);
        gatheredInfo.endpoint = theUrl.hostname;

        //Log.warn("================",JSON.stringify(gatheredInfo));
        //Log.debug("URL = "+oServiceInfo.url);
        Log.debug("================ getCurrentAppList request",gatheredInfo);
        var outerPromise = new Promise(0); // keep an outer promise so we can reject on an error message
        IDA.fetch(oServiceInfo.url+"/getCurrentAppList",
            {
                method: "post",
                headers: {"Accept":"application/json"},
                postMimeType: "json",
                data: JSON.stringify(gatheredInfo),
                dataType: "json"
            }
        ).then(
            function(response) {
                Log.debug("============== getCurrentAppList response", response.data);
                //Log.warn("================",JSON.stringify(response.data));
                if(response.data.errorMessage) {
                    error = {
                        errorCode : SHOWROOM_REQUEST_FAILED,
                        errorText : "Failed request to 'getCurrentAppList' "+ response.data.errorMessage
                    };
                    outerPromise.reject(error);
                } else {
                    //Log.debug(JSON.stringify(response.data));
                    appsCatalog = translateResponse(response.data.apps);
                    outerPromise.resolve(); // no need to pass back; we keep it local
                }
            },
            function(errResp) {
                Log.error("ERRRESP: ",errResp);
                error = {
                    errorCode : SHOWROOM_REQUEST_FAILED,
                    errorText : "Failed request to 'getCurrentAppList' "+(errResp.data ? ": "+errResp.data : "")
                };
                outerPromise.reject(error);
            }
        );
        return outerPromise;
    }

    //
    // Function to translate the actual service response to the semantics / style of this framework API
    //
    function translateResponse(appList) {
        var appListOut = [];

        function packageServerOf(opkPath) {
            opkPath = opkPath || "";
            if(opkPath.substring(opkPath.length-4) === ".opk") {
                //Log.warn(opkPath.substring(0, opkPath.lastIndexOf('/')));
                return opkPath.substring(0, opkPath.lastIndexOf('/'));
            }
            return opkPath;
        }

        for(var i=0; i<appList.length; i++) {
            var sa = appList[i];
            var ta = {
                appName : sa.app_name,
                appId : sa.app_id,
                appVersion : sa.app_version,
                status : sa.status.toLowerCase(),
                packageLocationUrl : packageServerOf(sa.package_location_url),
                description : sa.description,
                kBSize : sa.KB_size,
                buildDate : sa.build_date,
                imageUrl : sa.image_url,
                countries : sa.countries,
                languages : sa.languages
            };
            appListOut.push(ta);
        }
        return appListOut;
    }

    //
    // Call by UI / auto handler to add an action to the install list before starting session sets
    //
    function addInstallAction(app) {

        if(!oQueuedActionMap) oQueuedActionMap = {};

        var loc;
        if(app.status !== STATUS_REMOVE) { // this is a non-session action
            loc = app.packageLocationUrl;
        }
        if(!loc) loc = NON_SESSION;
        if(!oQueuedActionMap[loc]) {
            oQueuedActionMap[loc] = [];
        }
        oQueuedActionMap[loc].push({
            action: app.status.toLowerCase() === "remove" ? "remove" : "install",
            appId: app.appId
        });
    }

    //
    // Status callback
    //
    // Gets called on InstallAPI activity
    // Setup by initialSetup.
    //
    function installStatusCallback(status) {

        clearTimeout(actionTimeout);
        //Log.warn("              installStatus",status);
        // report status if not done with action
        var statusReport = {
            installationStage: stateControl.getState().name,
            actionPhase: status.action
        };
        if(typeof status.progress !== 'undefined') statusReport.progress = status.progress;
        if(currentSession && currentSession !== NON_SESSION) statusReport.packageLocationUrl = currentSession;
        if(oIsCanceled) statusReport.isCancelPending = true;
            if(status.action === "Installing" || status.action === "Removing") {
            statusReport.appId = sessionActions[actionIndex].appId;
        }
        if(status.status === "Error") {
            error = {
                errorCode : status.errorCode,
                errorText : status.errorText
            };
            statusReport.error = error;
        }
        if(status.installationStage === "PerformAction") {
            status.actionDetail = sessionActions[actionIndex];
        }

        if(oInstallStatusListener && status.status !== "Complete") {
            oInstallStatusListener(statusReport);
        }

        if(status.status === "Complete") {
            stateControl.setState(stateOnActionComplete);
        } else if(status.status === "Error") {
            stateControl.setState(stateOnActionError);
        }
    }

    //
    // This is the report that is sent to the listener
    //
    function signalInstallStatus() {
        if(oInstallStatusListener) {
            var report = {
                installationStage: stateControl.getState().name
            };
            if(oIsCanceled) {
                report.isCancelPending = true;
            }
            if(currentSession !== NON_SESSION) {
                report.packageLocationUrl = currentSession;
            }
            if(report.installationStage === "Error") {
                report.error = error;
            }
            if(report.installationStage === "PerformAction") {
                report.actionDetail = sessionActions[actionIndex];
            }
            oInstallStatusListener(report);
        }
    }

    //
    // Common status signaller called at each stage
    //
    function commonStateStart() {
        error = {};
        stateOnActionComplete = stateOnActionError = "";
        signalInstallStatus()
    }

    /************* State Handling Functions **************/

    ///////////////////////////////////////////////////////
    //
    // Gather
    //
    // Gathers information about our system and current set of applications
    //
    ///////////////////////////////////////////////////////
    function gatherClientInfo() {
        commonStateStart();

        //Log.warn("Gather State Started");


        new GatheredInfo().collect().then (
            function() {
                // on success go to next task
                stateControl.nextState(); // QueryShowroom
            },
            // record error on failure and abort
            function(err) {
                if(!err || !err.errorCode) {
                    error = {
                        errorCode: INTERNAL_ERROR,
                        errorText: "Failed to gather client info"
                    };
                } else {
                    error = err;
                }
                stateControl.setState("Error");
            }
        )
    }

    ///////////////////////////////////////////////////////
    //
    // QueryShowroom
    //
    // Query the Showroom server for catalog of choices
    //
    ///////////////////////////////////////////////////////
    function queryShowroomServer() {
        commonStateStart();

        lastShowroomQuery = Date.now();

        getCurrentAppList().then(
            function() {

                var fixedList = [];
                var unique = {};
                for(var i=0; i<appsCatalog.length; i++) {

                    var app = appsCatalog[i];
                    // filter out duplicates, because server has this problem
                    if (!unique[app.appId]) {
                        unique[app.appId] = true;
                        fixedList.push(app);
                    }
                }
                appsCatalog = fixedList;

                markRemovedItems().always(function(){
                    stateControl.nextState(); // ChoiceSelection
                });
            },
            // record error on failure and abort
            function(err) {
                if(!err || !err.errorCode) {
                    error = {
                        errorCode: SHOWROOM_REQUEST_FAILED,
                        errorText: "Failed to get results from Showroom server"
                    };
                } else {
                    error = err;
                }
                stateControl.setState("Error");
            }
        );
    }

    ///////////////////////////////////////////////////////
    //
    // ChoiceSelection
    //
    // Notifies the AppCatalogListener with the array of current and available apps with recommended actions, and options.
    // If automation is enabled and there are automatic actions taken, state will proceed to update the automated batch.
    // UI or automated process can call `addInstallAction` with choices from this list, with requested action set.
    // State does not proceed until UI or automated process calls `startActionBatch`.
    //
    ///////////////////////////////////////////////////////
    function choiceSelection() {
        commonStateStart();

        // Notify the results of the showroom query
        if(typeof oAppCatalogListener === 'function') {
            oAppCatalogListener(appsCatalog);
        }

        //  handle the next revisit time
        revisitTimer();

        // Handle any automated options while app (UI) queues up any next set of actions
        var autoActionTaken = false;
        var flagRetry = true; // if error
        var flagPackageError = false;
        if(!oOptions.autoDisabled) {
            for (var i = 0; i < appsCatalog.length; i++) {
                var doAuto = false;
                var app = appsCatalog[i];
                switch (app.status) {
                    case STATUS_NEW:
                        doAuto = oOptions.autoInstall;
                        if(doAuto) {
                            if(!app.packageLocationUrl) {
                                Log.warn("No packageLocationUrl for "+app.appId);
                                doAuto = false;
                                flagPackageError = true;
                            } else {
                                flagRetry = false;
                            }
                        }
                        break;
                    case STATUS_UPDATE:
                        doAuto = oOptions.autoUpdate;
                        if(doAuto) {
                            if(!app.packageLocationUrl) {
                                Log.warn("No packageLocationUrl for "+app.appId);
                                doAuto = false;
                                flagPackageError = true;
                            } else {
                                flagRetry = false;
                            }
                        }
                        break;
                    case STATUS_FORCE_UPDATE:
                    case STATUS_FORCE_NEW:
                        doAuto = true;
                        if(!app.packageLocationUrl) {
                            Log.warn("No packageLocationUrl for "+app.appId);
                            doAuto = false;
                            flagPackageError = true;
                        } else {
                            flagRetry = false;
                        }
                        break;
                    case STATUS_REMOVE:
                        doAuto = true;
                        break;
                }
                if (doAuto) {
                    //Log.debug("Adding an install action");
                    addInstallAction(app);
                    autoActionTaken = true;
                }
            }
        }
        if(flagPackageError) {
            error = {
                errorCode: -2,
                errorText: "No Package location provided"
            };
            if(!flagRetry) {
                stateControl.setState("Error");
                autoActionTaken = false;
            }
        }
        if(autoActionTaken) {
            stateControl.setState("StartBatch");
        }
    }

    ///////////////////////////////////////////////////////
    //
    // StartBatch
    //
    // Occurs at the start of processing the current batch
    // of install actions.  Actions will be processed in
    // session groups per package server.
    //
    ///////////////////////////////////////////////////////
    function startBatch() {
        batchActive = true;
        installActionMap = oQueuedActionMap;
        oQueuedActionMap = {};
        sessionsCompleted = {};
        commonStateStart();
        stateControl.setState("NextSession");
    }

    ///////////////////////////////////////////////////////
    //
    // NextSession
    //
    // Proceeds through the set of package server endpoints
    // and the associated actions and recorded in
    // installActionMap and marked off via sessionsCompleted
    //
    ///////////////////////////////////////////////////////
    function nextSession() {
        currentSession = "";

        if(oIsCanceled) {
            stateControl.setState("DoneBatch");
            return;
        }

        commonStateStart();
        //Log.debug("sessionsCompleted", sessionsCompleted);
        //Log.debug("installActionMap", installActionMap);
        // Do non-session actions first, since these can be done offline
        if(!sessionsCompleted[NON_SESSION] && installActionMap.hasOwnProperty(NON_SESSION)) {
            currentSession = NON_SESSION;
        } else {
            currentSession = "";
            for(var loc in installActionMap) {
                if(installActionMap.hasOwnProperty(loc)) {
                    if(!sessionsCompleted.hasOwnProperty(loc)) {
                        currentSession = loc;
                        break;
                    }
                }
            }
        }
        if(!currentSession) {
            stateControl.setState("DoneBatch");
        } else {
            //Log.debug("Current Session = " + currentSession);
            sessionActions = installActionMap[currentSession];
            if (Array.isArray(sessionActions) && sessionActions.length > 0) {
                stateControl.setState("SessionStart");
            } else {
                sessionsCompleted[currentSession] = true;
                stateControl.setState("NextSession");
            }
        }
    }

    ///////////////////////////////////////////////////////
    //
    // DoneBatch
    //
    // Occurs when all sessions for all package servers
    // for the current set of install actions is complete
    //
    ///////////////////////////////////////////////////////
    function doneBatch() {
        commonStateStart();
        batchActive = false;
        oIsCanceled = false;
        stateControl.setState("ChoiceSelection");
    }

    ///////////////////////////////////////////////////////
    //
    // SessionStart
    //
    // Occurs at the start of each new session with a package
    // server within a batch set of actions across possible
    // multiple package servers
    //
    ///////////////////////////////////////////////////////
    function sessionStart() {

        if(oIsCanceled) {
            stateControl.setState("DoneBatch");
            return;
        }

        commonStateStart();

        actionIndex = -1;
        stateOnActionComplete = "NextAction";
        stateOnActionError = "SessionEnd";

        if(currentSession === NON_SESSION) {
            // non-session jobs just start
            stateControl.setState(stateOnActionComplete);
        } else {
            // Handle install action promise then proceed
            installSvc.beginInstallationSession("OPKG-1A", {repositoryURL: currentSession})
                .fail(function() {
                    Log.error("Begin installation session failed");
                    // if for some reason this promise rejects, end the session
                    stateControl.setState(stateOnActionError);
                    return;
                }
                // otherwise we wait until we get result from installStatusCallback
            );
        }
    }

    ///////////////////////////////////////////////////////
    //
    // PerformAction
    //
    // Performs the actual installation action.
    // Status of this action is reported to the UI monitor
    //
    ///////////////////////////////////////////////////////
    function performAction() {
        commonStateStart();
        var appId = sessionActions[actionIndex].appId;
        var action = sessionActions[actionIndex].action;
        var timeoutMS = 5000;
        var toState;

        stateOnActionComplete = "RecordActionSuccess";
        stateOnActionError = toState = "NextAction";

        var ip;
        var timeoutMS;
        if(action === "remove") {
            ip = installSvc.removePackage(appId);
            timeoutMS=1000;
            toState = stateOnActionComplete;
        } else {
            ip = installSvc.installPackage(appId);
        }
        actionTimeout = setTimeout(function() { /*Log.debug("Action Timeout fired");*/ ip.resolve(); stateControl.setState(toState);}, timeoutMS);
        ip.fail(
            function() {
                clearTimeout(actionTimeout);
                // if for some reason this promise rejects, end the session
                stateControl.setState(stateOnActionError);
            }
        );
        // otherwise we wait until we get result from installStatusCallback
    }

    ///////////////////////////////////////////////////////
    //
    // RecordActionSuccess
    //
    // Records the current action as successfully complete
    // within the appsCatalog as we proceed through actions,
    // and then moves on to NextAction
    //
    ///////////////////////////////////////////////////////
    function recordActionSuccess() {
        commonStateStart();
        var appId = sessionActions[actionIndex].appId;
        var action = sessionActions[actionIndex].action;
        for(var i=0; i<appsCatalog.length; i++) {
            var app = appsCatalog[i];
            if(app.appId === appId) {
                if(action === 'remove') {
                    // if removed, put catalog availability back to current, unless it was a server-commanded action,
                    // in which case we want to remove it from the record entirely
                    if(app.status == STATUS_REMOVE) {
                        appsCatalog.splice(i, 1);
                    } else {
//                        app.status = STATUS_NEW;
                        app.status = "removed"; // prevents a reinstall by automatic action
                    }
                } else {
                    app.status = STATUS_NO_ACTION;
                }
                break;
            }
        }
        stateControl.setState("NextAction");
    }


    ///////////////////////////////////////////////////////
    //
    // NextAction
    //
    // Proceeds to the next action for this package server
    // or ends the package server session
    //
    ///////////////////////////////////////////////////////
    function nextAction() {
        commonStateStart();
        if(oIsCanceled) {
            stateControl.setState("SessionEnd");
            return;
        }
        commonStateStart();
        if(sessionActions[++actionIndex]) {
            stateControl.setState("PerformAction");
        } else {
            stateControl.setState("SessionEnd");
        }
    }

    ///////////////////////////////////////////////////////
    //
    // SessionEnd
    //
    // Occurs at the end of a session with a package server
    //
    ///////////////////////////////////////////////////////
    function sessionEnd() {
        commonStateStart();

        //Log.debug("All actions for "+currentSession+" complete");
        sessionsCompleted[currentSession] = true;

        var p = (currentSession === NON_SESSION) ? Promise.wrap() : installSvc.endInstallationSession();
        p.always(function() {
           stateControl.setState("NextSession");
        });
    }

    ///////////////////////////////////////////////////////
    //
    // ErrorState
    //
    // Occurs if we encounter a breaking error.
    // State remains unchanged until restart.
    //
    // If automatic options are set for retry after error,
    // a restart will automatically trigger at prescribed time.
    //
    ///////////////////////////////////////////////////////
    function errorState() {
        signalInstallStatus(); // don't clear error with commonStateStart()

        batchActive = false;
        revisitTimer();
    }

    ///////////////////////////////////////////////////////
    //
    // This sets up the timer callback process for
    // counting down and doing a restart
    //
    ///////////////////////////////////////////////////////
    function revisitTimer() {
        //Log.warn("Revisit Timer");
        // lastShowroomQuery is a timestamp of when we did getCurrentStatus
        // nextShowroomQuery is stamped after we set this

        clearTimeout(autoStartTimer);

        var seconds;

        if(error && error.errorCode) {
            seconds = oOptions.showroomRetrySeconds;
        } else {
            seconds = oOptions.showroomRevisitSeconds;
        }

        // Setting to 0 means no restart
        if(seconds <= 0) {
            Log.warn("Automatic restart of install handler disabled via configuration");
            return;
        }

        // add time to make future date
        // -- this should be a util function somewhere
        var r = seconds;
        function sepOut(val) {
            var v = Math.floor(r/val);
            r -= (v * val);
            return v;
        }
        var days = sepOut(86400);
        var hours = sepOut(3600);
        var mins = sepOut(60);
        var secs = r;
        var dt = new Date();
        dt.setDate(dt.getDate()+days);
        dt.setHours(dt.getHours()+hours);
        dt.setMinutes(dt.getMinutes()+mins);
        dt.setSeconds(dt.getSeconds()+secs);
        //--
        nextShowroomQuery = dt;

        countdownTimer();
    }

    //
    // Countdown timer that is called on each timer tick
    //
    function countdownTimer() {

        //Log.warn("Countdown Timer");

        var timeout = nextShowroomQuery.getTime() - Date.now();

        // if time is up, re-gather.  If that fails, error.
        // either event will restart us one way or the other
        if(autoStartTimer && timeout <= 0) {
            if(!batchActive) {
                InstallAPI.start();
            } else {
                error = {
                    errorCode: BUSY_ON_RETRY,
                    errorText: "Failed to restart because operation was in process"
                };
                stateControl.setState("Error");
            }
            autoStartTimer = undefined;
            return;
        }

        if(timeout <=0) timeout = 1000; // reconsider

        // ping every minute until we are close
        if(timeout > 60000) {
            timeout = 60000;
        }

        if(timeout) {
            autoStartTimer = setTimeout(countdownTimer, timeout);
        }
    }

    // ======================================

    var persist;

    // Support for removed tracking
    // Note that UI handlers must write the removed additions; we just read them here
    function markRemovedItems() {
        var p = new Promise();
        if(!persist) {
            persist = new PersistAPI();
        }
        persist.get("RemovedApplications").then(
            function(removedIds) {
                //Log.debug("-------------Read Removed Items:", removedIds);
                if(Array.isArray(appsCatalog) && Array.isArray(removedIds)) {
                    for(var i=0; i<appsCatalog.length; i++) {
                        var app = appsCatalog[i];
                        if(app.status === STATUS_NEW) {
                            if(removedIds.indexOf(app.appId) !== -1) {
                                app.status = 'removed';
                            }
                        }
                    }
                }
                p.resolve();
            },
            function() {
                p.resolve();
            }
        );
        return p;
    }

    // ======================================

    /**
     * Status keyword constants
     * @enum {string}
     */
    InstallHandler.STATUS = {
        NO_ACTION   : STATUS_NO_ACTION,
            NEW         : STATUS_NEW,
            UPDATE      : STATUS_UPDATE,
            REMOVE      : STATUS_REMOVE,
            FORCE_UPDATE : STATUS_FORCE_UPDATE
        //FORCE_NEW    : STATUS_FORCE_NEW,          // currently not part of specification
        //CANT_REMOVE     : STATUS_CANT_REMOVE            // currently not part of specification
    };
    Object.freeze(InstallHandler.STATUS);

    return InstallHandler;
});