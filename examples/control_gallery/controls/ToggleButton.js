define(function(require) {
    'use strict';

    var ToggleButton = require('common/ui/ToggleButton');
    var Pane = require('common/ui/Pane');

    var pane = new Pane();
    pane.addChild(new ToggleButton({
        maxTextLength: 100,
        model: {
            text: 'Toggle'
        },
        toggleClasses: {
            on: ['toggled']
        }
    }));
    pane.addChild(new ToggleButton({
        maxTextLength: 100,
        model: {
            text: 'Toggle'
        },
        toggleClasses: {
            on: ['toggled']
        }
    }));
    return pane;
});
