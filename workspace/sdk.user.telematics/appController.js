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
        view.displaySpeed(val * 0.62137); //converts to mph
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
    var onRoofOn = function(on) {
        view.displayConvertibleRoofOn(on);
    };
    var onGearPosition = function(mpos) {
        var text;
        switch(mpos) {  
            case telematics.GearPosition.PARK_OR_NEUTRAL:
                text = "Neutral or Shifting";
                break;
            case telematics.GearPosition.GEAR_1ST:
                text = "First Gear";
                break;
            case telematics.GearPosition.GEAR_2ND:
                text = "2nd Gear";
                break;
            case telematics.GearPosition.GEAR_3RD:
                text = "3rd Gear";
                break;
            case telematics.GearPosition.GEAR_4TH:
                text = "4th Gear";
                break;
            case telematics.GearPosition.GEAR_5TH:
                text = "5th Gear";
                break;
            case telematics.GearPosition.GEAR_6TH:
                text = "6th Gear";
                break;
            case telematics.GearPosition.REVERSE:
                text = "Reverse";
                break;
            default:
                text = "ERR";
                break;
        }
        view.displayGearPosition(text);
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
                telematics.subscribe(TelematicsAPI.Event.VEHICLE_SPEED, onVehicleSpeed);
                telematics.subscribe(TelematicsAPI.Event.AUTOMATIC_TRANSMISSION_SHIFT_POSITION, onShiftPosition);
                telematics.subscribe(TelematicsAPI.Event.CONVERTIBLE_ROOF_ON, onRoofOn);
                telematics.subscribe(TelematicsAPI.Event.GEAR_POSITION, onGearPosition);
                view = this.getView();
                telematics.getVehicleSpeed().done(function(kph) {
                    onVehicleSpeed(kph);
                });
                telematics.getAutomaticTransmissionShiftPosition().done(function(pos){
                    onShiftPosition(pos);
                });
                telematics.isConvertibleRoofOn().done(function(on) {
                    onRoofOn(on);
                });
                 telematics.getGearPosition().done(function(mpos){
                    onGearPosition(mpos);
                });
                return $super();
            }
        }
    );
});