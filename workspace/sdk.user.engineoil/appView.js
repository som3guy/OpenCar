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
            displayEngineOilTemp: function(farh) {
                var control = Control.getById("engOilTemp");
                control.model.set('text', farh);
            }
            
        }
    );
});