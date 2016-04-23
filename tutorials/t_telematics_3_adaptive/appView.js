define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        Control     = require('common/ui/Control'),
        ModuleView  = require('common/platform/ModuleView');

    /*
     This is the application "view" module.
     */

    return Class.create(
        ModuleView,
        {
            displaySpeed: function(kph) {
                var control = Control.getById("speedDisplay");
                control.model.set('text', kph);
            },
            displayShiftPosition: function(pos) {
                var control = Control.getById("shiftDisplay");
                control.model.set('text', pos);
            },
            displayConvertibleRoofOn: function(on) {
                var text = "Convertible Roof: "+ (on ? "Up" : "Down");
                var control = Control.getById("roofDisplay");
                control.model.set('text', text);
            }
        }
    );
});
