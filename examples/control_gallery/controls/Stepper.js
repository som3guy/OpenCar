define(function(require) {
    'use strict';

    var Stepper = require('common/ui/Stepper');

    var options = ['Alpha', 'Beta', 'Gamma', 'Delta'];

    return new Stepper({
        options: options,
        selectedIndex: 0
    });
});
