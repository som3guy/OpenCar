define(function(require) {
    'use strict';

    var Button = require('common/ui/Button'),
    Pane = require('common/ui/Pane');

    var pane        = new Pane({
        classNames: ['button-container']
    });

    pane.addChild(new Button({
        model : {
            text: 'Standard'
        },
        classNames:['oc-normal-button']
    }));
    pane.addChild(new Button({
        model : {
            text: 'Confirm'
        },
        classNames:['oc-confirm-button']
    }));
    pane.addChild(new Button({
        model : {
            text: 'Decline'
        },
        classNames:['oc-decline-button']
    }));
    pane.addChild(new Button({
        classNames:['oc-disabled-button'],
        model : {
            text: 'Disabled'
        },
        disabled: true
    }));
    return pane;
});
