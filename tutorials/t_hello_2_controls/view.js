define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        TextView    = require('common/ui/TextView');


    return Class.create(
        ModuleView,
        {
            init: function() {
                this.txtView = new TextView({
                    id: 'hello',
                    model: {
                        text: 'Hello OpenCar Controls!'
                    }
                }).render(this.getView());
            }
        }
    );
});
