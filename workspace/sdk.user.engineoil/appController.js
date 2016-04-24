define(function(require) {
    'use strict';
    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController'),
        TelematicsAPI       = require('common/platform/TelematicsAPI');
    //
    // Module scope variables and functions
    //
    var telematics, view;
    var onEngOilTemp = function(engOilTemp) {
        view.displayEngineOilTemp(engOilTemp * 1.8 + 32); 
    };
    var onEngOilPressure = function(engOilPressure) {
        view.displayEngineOilPressure(engOilPressure * 0.14503773773020923);  //kPa to psi
    };
    var onEngOilLife = function(engOilLife) {
        view.displayEngineOilLife(engOilLife); 
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
                telematics.subscribe(TelematicsAPI.Event.ENGINE_OIL_TEMP, onEngOilTemp);
                telematics.subscribe(TelematicsAPI.Event.ENGINE_OIL_PRESSURE, onEngOilPressure);
                telematics.subscribe(TelematicsAPI.Event.ENGINE_OIL_LIFE_REMAINING, onEngOilLife);
                view = this.getView();
                telematics.getEngineOilTemp().done(function(engOilTemp) {
                    onEngOilTemp(engOilTemp);
                });
                telematics.getEngineOilPressure().done(function(engOilPressure) {
                    onEngOilPressure(engOilPressure);
                });
                return $super();
            }
        }
    );
});