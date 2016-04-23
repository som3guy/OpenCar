define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        Control    = require('common/ui/Control');


    return Class.create(
        ModuleView,
        {
            init: function() {
                this.txtView = Control.getById("hello");
                this.txtView.model.set('text', "Hello OpenCar Layout World!");

                this.otherText = Control.getById("other");
                this.otherText.model.set('text', "Layout + CSS creates better flexibility");
            }
        }
    );
});
