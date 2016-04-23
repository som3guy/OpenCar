define(function(require) {
    'use strict';

    var ProgressBar = require('common/ui/ProgressBar'),
        Button      = require('common/ui/Button'),
        Pane        = require('common/ui/Pane');

    var pane = new Pane({
        id : 'pane-progress'
    });

    var paneButtons = new Pane({
        id : 'pane-progress-buttons'
    });

    var progressBar = new ProgressBar();

    var btnAddProgress = new Button({
        //classNames: ["block-button"],
        model : {
            text    : 'Add Progress'
        },
        click   : function() {
            var curProgress = parseFloat(progressBar.getValue());
            progressBar.model.set('value', curProgress += Math.random() * progressBar.get('maxValue'));
        }
    });

    var btnReset = new Button({
        //classNames: ["block-button"],
        model : {
            text    : 'Reset'
        },
        click   : function() {
            progressBar.model.set('value', 0);
        }
    });

    var prevMax,
        btnIndeterminate = new Button({
        //classNames: ["block-button"],
        model : {
            text    : 'Toggle Indeterminate'
        },
        click   : function() {
            if(prevMax) {
                progressBar.set('maxValue', prevMax);
                prevMax = undefined;
            } else {
                prevMax = progressBar.get('maxValue');
                progressBar.set('maxValue', undefined);
            }
        }
    });

    paneButtons.addChild(btnAddProgress);
    paneButtons.addChild(btnReset);
    paneButtons.addChild(btnIndeterminate);

    pane.addChild(progressBar);
    pane.addChild(paneButtons);

    return pane;
});
