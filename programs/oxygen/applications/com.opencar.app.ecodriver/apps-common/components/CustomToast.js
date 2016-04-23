// (C) 2013-2014 OpenCar Inc.
// All Rights Reserved.

define(function(require) {
    'use strict';

    var DialogConfig = require('common/ui/dialogs/DialogConfig'),
        Dialog       = require('common/ui/Dialog');

    var toast = function(message, timeout) {
        var dialog,
            dialogConfig = new DialogConfig.InfoDialog({
            text: message
        }).timeout(timeout || 3000).build();

        dialogConfig.removeOnHide = true;

        dialog = new Dialog(dialogConfig);
        dialog.show();

        // TODO: follow driver distraction rules
        if (message.length > 30) {
            Log.log("WARNING: Text \""+message+"\" exceeds 30 characters."); //Mazda driver distraction rule: this text should not exceed 30 characters.
        }
    };

    return {
        show: toast
    };
});
