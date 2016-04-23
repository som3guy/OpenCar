define(function(require) {
    'use strict';

    var Button  = require('common/ui/Button'),
        Pane    = require('common/ui/Pane');

    var pane = new Pane({
        classNames : 'inline-container'
    });

    pane.addChild(
        new Button({
            classNames: ["block-button"],
            model : {
                text: 'Toast'
            },
            click: function() {
                Toast.show('1 piece of dry toast, with jam, sugar and a glass of orange juice please.');
            }
        })
    );

    pane.addChild(
        new Button({
            classNames: ["block-button"],
            model : {
                text: 'Toast w/ Icon'
            },
            click: function() {
                Toast.show({
                    message : 'sunt decores quaestio rusticus, raptus valebates.',
                    icon    : window.MODULE_PATH + '/icon.png'
                });
            }
        })
    );

    pane.addChild(
        new Button({
            classNames: ["block-button"],
            model : {
                text : 'Alert'
            },
            click : function() {
                Toast.alert({
                    message : 'I am an alert!'
                });
            }
        })
    );

    return pane;
});
