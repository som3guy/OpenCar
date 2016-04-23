define(function(require) {
    'use strict';

    var TextView = require('common/ui/TextView');

    return new TextView({
        model : {
            text: 'This is a text view!'
        }
    });
});
