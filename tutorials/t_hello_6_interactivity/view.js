define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        Control     = require('common/ui/Control');

    // In this example, we'll use 'module' variables rather than 'this' variables.
    // In JavaScript, a 'module' (closure) variable like this is a scope-local static variable
    var txtView, timeText, timeBtn;

    // Handle the action of the click here
    var onClick = function() {
        Log.log("Clicked!");
        var date = new Date();
        timeText.model.set('text', date.toString());
    };

    return Class.create(
        ModuleView,
        {
            init: function() {
                // Get our control references from layout
                txtView = Control.getById("hello");
                timeText = Control.getById("time");
                timeBtn = Control.getById("timeBtn");

                // Set initial states
                txtView.model.set('text', "Time for OpenCar!");
                timeBtn.model.set('text', "Press for Time");

                // Give the button our click listener
                timeBtn.addClickListener(onClick);
            }
        }
    );
});
