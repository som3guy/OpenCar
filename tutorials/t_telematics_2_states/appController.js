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
    var onShiftPosition = function(pos) {
        var text;
        switch(pos) {
            case telematics.AutomaticTransmissionShiftPosition.BETWEEN_2_POSITIONS:
                text = "Shifting...";
                break;
            case telematics.AutomaticTransmissionShiftPosition.PARK:
                text = "Park";
                break;
            case telematics.AutomaticTransmissionShiftPosition.REVERSE:
                text = "Reverse";
                break;
            case telematics.AutomaticTransmissionShiftPosition.NEUTRAL:
                text = "Neutral";
                break;
            case telematics.AutomaticTransmissionShiftPosition.DRIVE:
                text = "Drive";
                break;
            case telematics.AutomaticTransmissionShiftPosition.POSITION_2:
                text = "Drive 2";
                break;
            case telematics.AutomaticTransmissionShiftPosition.POSITION_1:
                text = "Drive 1";
                break;
            default:
                text = "ERR";
                break;

        }
        view.displayShiftPosition(text);
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
                telematics.subscribe(TelematicsAPI.Event.AUTOMATIC_TRANSMISSION_SHIFT_POSITION, onShiftPosition);


                view = this.getView();

                telematics.getVehicleSpeed().done(function(kph) {
                    onVehicleSpeed(kph);
                });
                telematics.getAutomaticTransmissionShiftPosition().done(function(pos){
                    onShiftPosition(pos);
                });


                return $super();
            }
        }

    );

});
