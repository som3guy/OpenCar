define(function(require) {
    'use strict';

    var RadioButton = require('common/ui/RadioButton'),
        ButtonSet = require('common/ui/ButtonSet'),
        Pane = require('common/ui/Pane');

    var pane = new Pane();

    var radio = new RadioButton({
        model : {
            text: 'Yes'
        }
    });

    var radio1 = new RadioButton({
        model : {
            text: 'No'
        }
    });

    var radio2 = new RadioButton({
        model : {
            text: 'Maybe'
        }
    });

    pane.addChild(radio);
    pane.addChild(radio1);
    pane.addChild(radio2);

    return {
        render : function(parent){
            pane.render(parent);
        },
        postRender : function(){
            new ButtonSet({
                buttons:[radio, radio1, radio2]
            });
        }
    };
});
