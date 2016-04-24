define(function(require) {
    'use strict';
    var Class       = require('common/Class'),
        Control     = require('common/ui/Control'),
        ModuleView  = require('common/platform/ModuleView');
    //
    // This is the application "view" module.
    //
    return Class.create(
        ModuleView,
        {
            displayEngineOilTemp: function(engOilTemp) {
                var control = Control.getById("engOilTemp");
                control.model.set('text', engOilTemp.toFixed(1));
            },
            displayEngineOilPressure: function(engOilPressure) {
                var control = Control.getById("engOilPressure");
                control.model.set('text', engOilPressure.toFixed(1));
            },
            displayEngineOilLife: function(engOilLife) {
                var control = Control.getById("engOilLife");
                control.model.set('text', engOilLife);
            }
        }
    );
});
