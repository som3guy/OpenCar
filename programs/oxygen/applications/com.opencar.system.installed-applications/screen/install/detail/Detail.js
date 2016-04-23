define(function (require) {
    'use strict';

    var Class           = require('common/Class'),
        Promise         = require('common/lib/Promise'),
        Chamber         = require('common/platform/chamber/Chamber'),
        ButtonBar       = require('common/ui/ButtonBar'),
        Control         = require('common/ui/Control'),
        Dialog          = require('common/ui/Dialog'),
        PersistAPI      = require('common/platform/PersistAPI'),
        DialogConfig    = require('common/ui/dialogs/DialogConfig');

    // reference access to Installer API functions
    var appController;
    // holds the Progress dialog
    var dialog;
    // holds the current app information in question
    var theAppInfo;
    // the UI controls
    var appTitle, appVersion, appDescription, appIcon, appWrapper;
    // Persistence
    var persist;
    // Progress dialog model object
    var progConf = {
        text: "",
        value: 0,
        max: 100
    };

    //
    //  Displays detail about the application and allows install, update, or remove functionality
    //
    return Class.create(
        Chamber,
        {
            //
            // Setup the chamber
            //
            init : function($super, container){
                $super(container);

                appController = this.moduleView.getController();

                appTitle = Control.getById("app-title");
                appVersion = Control.getById("app-version");
                appDescription = Control.getById("app-description");
                appIcon = Control.getById("app-icon");
                appWrapper = Control.getById("app-detail-wrapper");

                this.buttonBar = new ButtonBar({
                    classNames : ['bottom'],
                    model: {
                        buttons: [
                            {
                                label: "Install",
                                classNames :['bb-install-button']
                            },
                            {
                                label: "Remove",
                                classNames :['bb-delete-button']
                            }
                        ]
                    },
                    showTooltip: true,
                    onButtonAction: function(button){
                        startAction(button.controlProps.get('index') === 1); // true if delete
                    }.bind(this)
                });
                this.buttonBar.init();
                this.buttonBar.render(this.screen.element);
            }.override(),

            //
            // Apply the current application info to the display
            //
            activate: function(appInfo) {
                theAppInfo = appInfo || {};

                var menu = this.getChamber('menu');
                if(menu) {
                    theAppInfo.usageStats = menu.getApplicationUsageStats(theAppInfo.appId);
                }

                if(theAppInfo.status === "removed") {
                    theAppInfo.status = "new";
                }

                appTitle.setText(appInfo.text || "");

                var ver = appInfo.appVersion || "";
                if(this.moduleView.getVersionForm() !== 'long') {
                    var verparts = ver.split('.');
                    ver = "";
                    for (var i = 0; i < 3; i++) {
                        if (i < verparts.length) {
                            if (i > 0) ver += '.';
                            ver += verparts[i];
                        }
                    }
                }
                if(ver) appVersion.setText("Version: " + ver);
                else appVersion.setText("");

                appDescription.setText(appInfo.description || "");
                appIcon.setSrc(appInfo.icon);

                var installBtn = this.buttonBar.getButton(0);
                var deleteBtn = this.buttonBar.getButton(1);

                // we can install if we are not current or remove
                var canInstall = appInfo.status !== "current" && appInfo.status !== "remove" && appInfo.status !== "force_remove";
                // we can remove only if it was installed
                var canRemove = !!appInfo.dateInstalled;
                var installLabel = "Install";
                if(appInfo.status === "update") {
                    installLabel = "Update";
                }
                // we can't remove a system app
                if(appInfo.isSystem) {
                    canRemove = false;
                }

                this.buttonBar.hideTooltip();
                installBtn.setLabel(installLabel);
                if(canInstall) this.buttonBar.showTooltip();
                installBtn.set('disabled', !canInstall);
                deleteBtn.set('disabled', !canRemove);

                Log.debug("APP INFO:", appInfo);

                this.resetSelectedButton();
            },

            //
            // Reset the selected state to install so we have to move to delete
            //
            resetSelectedButton: function() {
                var installBtn = this.buttonBar.getButton(0);
                var isDisabled = installBtn.get('disabled');
                installBtn.set('disabled', false);
                this.buttonBar.selectButton(installBtn);
                installBtn.set('disabled', isDisabled);
            },

            //
            // On resume, reset the selected state so we have to move to delete
            //
            resumed: function($super) {
                this.resetSelectedButton();
                return $super();
            },

            onTaskActivity: onTaskActivity,
            onTaskCompleted: onTaskCompleted

        }
    );

    //-------------------------------------------------

    //
    // Start the install action as a one-task batch
    //
    function startAction(isDelete) {

        var p;
        if(isDelete) {
            p = areYouSure();
            createRemoveDialog();
        }
        else {
            p = Promise.wrap();
            if(theAppInfo.status === 'new') {
                progConf.text = 'Preparing to install "'+theAppInfo.text+'"';
            }
            else if(theAppInfo.status === 'update') {
                progConf.text = 'Preparing to update "'+theAppInfo.text+'"';
            }
            else {
                progConf.text = "Preparing...";
            }
            progConf.value = 0;

            createProgressDialog();
        }

        p.then(
            function() {
                dialog.show();

                if(isDelete) theAppInfo.status = 'remove';

                appController.addInstallAction(theAppInfo).then(
                    function() {
                        appController.startActionBatch().then(
                            function() {
                                Log.debug("Action started: "+theAppInfo.status+" "+theAppInfo.text);
                            },
                            function() {
                                Log.error("Failed to start action batch");
                                dialog.hide();
                            }
                        )
                    },
                    function() {
                        Log.error("Failed to add action");
                        dialog.hide();
                    }
                )
            }
        );
    }

    //
    // When the dialog is dismissed
    //
    function dialogDismissed(dlgStatus) {
        if(dlgStatus === "Cancel") {
            Log.warn("CALLING TO CANCEL");
            appController.cancelActionBatch();
        }
    }

    //
    // Called from the Installer
    //
    function onTaskActivity(status) {
        if(status.installationStage === "Error") {
            progConf.text = "Error";
            appController.getInstallerError().done(function(error) {
                error = error || {
                    errorCode: -1,
                    errorText: "Unspecified Error"
                };
                progConf.text = "Error ("+error.errorCode+"): "+error.errorText;
            });

        } else {
            progConf.value = status.progress;
            if(status.actionPhase) {
                switch (status.actionPhase.toLowerCase()) {
                    case "fetching":
                        progConf.text = 'Contacting server...';
                        break;
                    case "installing":
                        progConf.text = 'Installing "' + theAppInfo.text + '"';
                        break;
                    case "removing":
                        progConf.text = 'Removing "' + theAppInfo.text + '"';
                        break;
                }
            }
        }

    }

    //
    // Called from the Installer
    //
    function onTaskCompleted() {
        dialog.hide();
        if(theAppInfo.status === 'remove') {
            theAppInfo.status = 'new';
            markRemoved(true);
        } else {
            theAppInfo.status = 'current';
            theAppInfo.dateInstalled = new Date().toISOString();
            markRemoved(false);
        }
        this.activate(theAppInfo);
    }

    // -----------------------------------

    //
    // Record to persistence the id of items we have removed.
    // Remove from persistence any ids that we have re-installed.
    //
    function markRemoved(isRemoved) {
        if(!persist) {
            persist = new PersistAPI();
        }
        persist.get("RemovedApplications").then(
            function(removedIds) {
                removedIds = removedIds || [];
                if(isRemoved) {
                    removedIds.push(theAppInfo.appId);
                }
                else {
                    var i = removedIds.indexOf(theAppInfo.appId);
                    if (i !== -1) {
                        removedIds.splice(i, 1);
                    }
                }
                //Log.debug("+++++++++++++++++++++ Writing removed items: ", removedIds);
                persist.set("RemovedApplications", removedIds);
            }
        );
    }

    // -----------------------------------

    //
    // Handle the Progress dialog
    //
    function createProgressDialog() {
        var dialogConfig = new DialogConfig.ProgressDialog({
            title: progConf,
            progress: progConf,
            hide: function(ev, control, status) {
                dialogDismissed(status);
            }
        }).addButton('Cancel', {
                text: 'Cancel',
                classNames: ['oc-decline-button']
            }).build();
        dialog = new Dialog(dialogConfig);
    }

    //
    // Handle the Remove dialog (no progress, no cancel; remove cannot be interrupted for OPKG)
    //
    function createRemoveDialog() {
        var dialogConfig = new DialogConfig.InfoDialog({
            title: "Removing",
            text: theAppInfo.text,
            hide: function(ev, control, status) {
                dialogDismissed(status);
            }
        }).addButton('Okay', {
                text: 'Okay',
                classNames: ['oc-confirm-button']
            }).build();
        dialog = new Dialog(dialogConfig);
    }


    //
    // Provide an Are You Sure dialog for remove action
    //
    function areYouSure() {
        var p = new Promise(0);
        var dialogConfig = new DialogConfig.WarningAlertDialog({
            title : 'Remove "'+theAppInfo.text+'"',
            text : 'Are You Sure?',
            hide : function(ev, control, status){
                if(status === 'Yes') {
                    p.resolve();
                } else {
                    p.reject();
                }
            }
        }).addButton('No',{
                text : 'No',
                classNames: ['oc-decline-button']
            }).addButton('Yes',{
                text : 'Yes',
                classNames: ['oc-confirm-button']
            }).build();

        new Dialog(dialogConfig).show();
        return p;
    }

});