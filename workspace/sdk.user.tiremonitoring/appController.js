define(function(require) {
    'use strict';
    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController'),
        TelematicsAPI       = require('common/platform/TelematicsAPI');
    //
    // Module scope variables and functions
    //
    var telematics, view;
    var onTirePFR = function(tirePFR) {
        view.displayTirePFR(tirePFR * 0.14503773773020923); //kPa to psi
    };
    var onTirePFL = function(tirePFL) {
        view.displayTirePFL(tirePFL * 0.14503773773020923); //kPa to psi
    };
    var onTirePRR = function(tirePRR) {
        view.displayTirePRR(tirePRR * 0.14503773773020923); //kPa to psi
    };
    var onTirePRL = function(tirePRL) {
        view.displayTirePRL(tirePRL * 0.14503773773020923); //kPa to psi
    };
    //
    // This is the application "controller" module.
    //
    return Class.create(
        ModuleController,
        {
            //
            // Called prior the application being displayed, but after both the module controller's init()
            // and module view's init() are complete.
            // 
            beforeStart: function($super) {
                telematics = new TelematicsAPI();
                telematics.subscribe(TelematicsAPI.Event.TIRE_PRESSURE_FRONT_RIGHT, onTirePFR);
                telematics.subscribe(TelematicsAPI.Event.TIRE_PRESSURE_FRONT_LEFT, onTirePFL);
                telematics.subscribe(TelematicsAPI.Event.TIRE_PRESSURE_REAR_RIGHT, onTirePRR);
                telematics.subscribe(TelematicsAPI.Event.TIRE_PRESSURE_REAR_LEFT, onTirePRL);
                view = this.getView();
                telematics.getTirePressureFrontRight().done(function(tirePFR) {
                    onTirePFR(tirePFR);
                });
                telematics.getTirePressureFrontLeft().done(function(tirePFL) {
                    onTirePFL(tirePFL);
                });
                telematics.getTirePressureRearRight().done(function(tirePRR) {
                    onTirePRR(tirePRR);
                });
                telematics.getTirePressureRearLeft().done(function(tirePRL) {
                    onTirePRL(tirePRL);
                });
                return $super();
            }
        }
    );
});