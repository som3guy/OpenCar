define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController');

    return Class.create(
        ModuleController,
        {
            // This method is called from the 'view' code.
            // It runs asynchronously, and returns a Promise object
            // that resolves on it's 'done' callback with the value returned here.

            getTimeStamp: function() {
                var date = new Date();
                return date.toString();
            }
        }
    );
});
