define(function(require) {
    'use strict';

    var Dialog = require('common/ui/Dialog'),
        DialogConfig = require('common/ui/dialogs/DialogConfig'),
        Button = require('common/ui/Button');

    var dialogConfig = new DialogConfig.InfoDialog({
        title : 'Title Text',
        text : ' Leek can be rubed with hot bagel, also try whisking the pudding with blood oranges juice.',
        hide : function(ev, control, status){
            console.log("dismissed with status", status);
        }
    }).build();

    var d = new Dialog(dialogConfig);
    return new Button({
        model : {
            text : 'Show Dialog'
        },
        click : function() {
            d.show();
        }
    });
});
