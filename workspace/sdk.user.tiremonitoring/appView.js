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
            },
            displayTirePFL: function(tirePFL) {
                this.txtView = Control.getById("tirePressureFrontLeft");
                var control = Control.getById("tirePressureFrontLeft");
                this.txtView = Control.getById("tirePressureFrontLeft");
                control.model.set('text', tirePFL.toFixed(1));
            },
            displayTirePRR: function(tirePRR) {
                this.txtView = Control.getById("tirePressureRearRight");
                var control = Control.getById("tirePressureRearRight");
                this.txtView = Control.getById("tirePressureRearRight");
                control.model.set('text', tirePRR.toFixed(1));
            },
            displayTirePRL: function(tirePRL) {
                this.txtView = Control.getById("tirePressureRearLeft");
                var control = Control.getById("tirePressureRearLeft");
                this.txtView = Control.getById("tirePressureRearLeft");
                control.model.set('text', tirePRL.toFixed(1));
            }
        }
    );
});