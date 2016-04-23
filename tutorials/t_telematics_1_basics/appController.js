define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController'),
        TelematicsAPI       = require('common/platform/TelematicsAPI');


    //
    // Module scope variables and functions
    //
    var telematics, view;

    var onVehicleSpeed = function(val) {
        view.displaySpeed(val);
    };

    /*
     This is the application "controller" module.
     */
    return Class.create(
        ModuleController,
        {
            /*
             Called prior the application being displayed, but after both the module controller's init()
             and module view's init() are complete.
             */
            beforeStart: function($super) {
                telematics = new TelematicsAPI();
                telematics.subscribe(TelematicsAPI.Event.VEHICLE_SPEED, onVehicleSpeed);

                view = this.getView();

                telematics.getVehicleSpeed().done(function(kph) {
                    onVehicleSpeed(kph);
                });

                return $super();
            }
        }

    );

});
