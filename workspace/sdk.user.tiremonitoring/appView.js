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
            displayTirePFR: function(tirePFR) {
                this.txtView = Control.getById("tirePressureFrontRight");
                var control = Control.getById("tirePressureFrontRight");
                this.txtView = Control.getById("tirePressureFrontRight");
                control.model.set('text', tirePFR.toFixed(1));
            }
        }
    );
});