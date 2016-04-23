define(function(require) {
    'use strict';

    var Checkbox = require('common/ui/Checkbox');

    return new Checkbox({
        model : {
            text: 'This is a checkbox!'
        }
    });
});
