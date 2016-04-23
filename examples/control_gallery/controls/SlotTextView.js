define(function(require) {
    'use strict';

    var SlotTextView = require('common/ui/SlotTextView'),
        Pane = require('common/ui/Pane'),
        Button = require('common/ui/Button');


    var pane        = new Pane({
        classNames:['slot-text-view-demo']
    });


    var slotTextView = new SlotTextView({
        text : 481516,
        digits: 6,
        precision: 2
    });

    var btnUp       = new Button({
        text  : 'Increase Value',
        click : function() {
            slotTextView.set('text', parseInt(slotTextView.get('text'), 10) + 1);
        }
    });
    var btnDown     = new Button({
            text  : 'Decrease Value',
            click : function() {
                slotTextView.set('text',  parseInt(slotTextView.get('text'), 10) - 1);
            }
        });

    pane.addChild(btnUp);
    pane.addChild(btnDown);
    pane.addChild(slotTextView);

    return pane;
});
