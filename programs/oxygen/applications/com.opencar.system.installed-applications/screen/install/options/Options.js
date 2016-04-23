define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Control             = require('common/ui/Control'),
        Promise             = require('common/lib/Promise'),
        StandardFormatter   = require('common/lib/StandardFormatter'),
        DialogConfig        = require('common/ui/dialogs/DialogConfig'),
        Dialog              = require('common/ui/Dialog'),
        PersistAPI          = require('common/platform/PersistAPI'),
        Chamber             = require('common/platform/chamber/Chamber');

    var appView, appController;
    var cbEnable, cbInstall, cbUpdate;
    var tvCheck, btnEdit, tvErrCheck, btnErrEdit;
    var revisitDays, retryMins;

    var fmtr, persist;

    // ===================================================

    // Separate actions that call the controller because the installer might not be available

    // return a promise
    function getAutomatedOptions() {
        if(typeof appController.getAutomatedOptions === 'function') {
            return appController.getAutomatedOptions();
        }
        return Promise.wrap({});
    }
    // return a promise
    function setAutomatedOptions(options) {
        if(typeof appController.setAutomatedOptions === 'function') {
            return appController.setAutomatedOptions(options);
        }
        return Promise.wrap();
    }

    function display() {
        getAutomatedOptions().done(function(options){
            Log.warn("options retrieved ",options);
            cbEnable.setChecked(!options.autoDisabled);
            cbInstall.setChecked(options.autoInstall);
            cbUpdate.setChecked(options.autoUpdate);

            cbInstall.setDisabled(!cbEnable.isChecked());
            cbUpdate.setDisabled(!cbEnable.isChecked());

            var text = "";
            var ts = Number(options.showroomRevisitSeconds);

            if(isFinite(ts)) {
                var days = ts / 86400;
                days = Math.floor(days * 100) / 100;
                text = "Showroom query interval "+days+" days";
                revisitDays = days;
            }
            tvCheck.setText(text);
            if(text) btnEdit.show();
            else     btnEdit.hide();

            text = "";
            ts = Number(options.showroomRetrySeconds);
            if(isFinite(ts)) {
                var mins = ts / 60;
                mins = Math.floor(mins * 60) / 60;
                text = "Error retry interval "+mins+" minutes";
                retryMins = mins;
            }
            tvErrCheck.setText(text);
            if(text) btnErrEdit.show();
            else     btnErrEdit.hide();

            refreshPersist();
        });
    }

    function updateAutomation() {
        var options = {
            autoDisabled: !cbEnable.isChecked()
        };
        if(cbEnable.isChecked()) {
            options.autoInstall = cbInstall.isChecked();
            options.autoUpdate = cbUpdate.isChecked();
        }
        setAutomatedOptions(options).always(function(){
            display();
        });
    }
    function invokeKeyboard(param) {
        var option = (param === 2);
        var whenEdit = option ? retryMins : revisitDays;
        var config = new DialogConfig.KeyboardDialog({
            text: option ? "Error retry interval (minutes): "+retryMins : "Showroom query interval (days): "+revisitDays,
            hide: function( ev, control, text, status ) {
                if(status === 'accept') {
                    var n = text.lastIndexOf(":");
                    var vs = text.substring(n+1).trim();
                    var v = Number(vs);
                    if(isFinite(v)) {
                        var props = {};
                        if(option) {
                            props.showroomRetrySeconds = Math.floor(v * 60);
                        } else {
                            props.showroomRevisitSeconds = Math.floor(v * 86400);
                        }
                        setAutomatedOptions(props).done(function() {
                            updateAutomation();
                        });
                    }
                }
            }
        }).build();
        var dlg = new Dialog(config);
        dlg.show();

    }
    function invokeKeyboard2() {
        invokeKeyboard(2);
    }

    var persistData;
    //
    // Keep values updated in persistence if they change
    //
    function refreshPersist() {

        persistData = persistData || {};

        var newOptions = {
            autoDisabled: !cbEnable.isChecked(),
            autoInstall: cbInstall.isChecked(),
            autoUpdate: cbUpdate.isChecked(),
            showroomRevisitSeconds: revisitDays * 86400,
            showroomRetrySeconds: retryMins * 60
        };
        var updated = false;
        for(var p in newOptions) {
            if(persistData[p] != newOptions[p]) {
                updated = true;
                break;
            }
        }
        if(updated && persist) {
            //Log.debug("Persisting new option data = "+JSON.stringify(newOptions));
            persist.set("OPTIONS", newOptions).fail(function(err) {
                Log.error("Failed to update options");
            });
        }
    }

    //
    // Get options from persistence and set these
    //
    function restorePersistedOptions(defaults) {
        var p = new Promise();

        if(persist) {
            persist.get("OPTIONS").then(
                function (data) {
                    // Set the defaults (that come from our app manifest) if we don't have a persisted value for that
                    persistData = data || defaults || {};
                    Log.warn("Setting options to ",persistData);
                    setAutomatedOptions(persistData).then(
                        function() {
                            //Log.debug("Persisted data = "+JSON.stringify(persistData));
                            p.resolve();
                        },
                        function (err) {
                            Log.error("Failed to write persisted option data to InstallHandler");
                            p.reject();
                        }
                    );
                },
                function (err) {
                    Log.error("Failed to retrieve persisted option data ", err);
                    p.reject();
                }
            )
        } else {
            p.reject();
        }
        return p;
    }

    // ===================================================
    // ===================================================

    return Class.create(
        Chamber,
        {
            init : function($super, container){
                $super(container);

                //this.setCustomButtonHandler(this);
                appView = this.moduleView;
                appController = appView.getController();

                fmtr = new StandardFormatter();
                persist = new PersistAPI();

            }.override(),

            beforeStart: function($super) {

                cbEnable = Control.getById("opt-cb-enable");
                cbInstall = Control.getById("opt-cb-install");
                cbUpdate = Control.getById("opt-cb-update");

                tvCheck = Control.getById("opt-tv-check");
                btnEdit = Control.getById("opt-btn-edit");
                tvErrCheck = Control.getById("opt-tv-errcheck");
                btnErrEdit = Control.getById("opt-btn-erredit");

                cbEnable.setText("Enable Automated Tasks");
                cbInstall.setText("Auto Install New Apps");
                cbUpdate.setText("Auto Update Existing Apps");

                btnEdit.setText("edit");
                btnErrEdit.setText("edit");

                cbEnable.addClickListener(updateAutomation);
                cbInstall.addClickListener(updateAutomation);
                cbUpdate.addClickListener(updateAutomation);
                btnEdit.addClickListener(invokeKeyboard);
                btnErrEdit.addClickListener(invokeKeyboard2);

                cbInstall.requestFocus();

                restorePersistedOptions().always(
                    function() {
                        display();
                    }
                );

                return $super();
            }.override(),

            // Set the initial automation options
            // Called from appView at startup
            //
            setInitialSettings: function(configSettings) {
                return restorePersistedOptions(configSettings);
            }

        }
    );
});
