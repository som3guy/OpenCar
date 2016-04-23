define(function(require) {
    'use strict';

    var Button                  = require('common/ui/Button'),
        Dialog                  = require('common/ui/Dialog'),
        DialogConfig            = require('common/ui/dialogs/DialogConfig'),
        Pane                    = require('common/ui/Pane');

    var pane = new Pane({
    });

    pane.addChild(
        new Button({
            classNames: ["block-button"],
            model : {
                text: 'Launch Keyboard'
            },
            click: function() {
                var cfg = new DialogConfig.KeyboardDialog({
                    text: 'Edit me',
                    hide : function(evt, dialog, status){
                        Log.log("done", status);
                    }
                }).build();
                new Dialog(cfg).show();
            }
        })
    );


    return pane;
});
