define(function(require) {
    'use strict';

    var ImageButton = require('common/ui/ImageButton');

    return new ImageButton({
        model : {
            text: 'This is a button with an image inside of it!',
            icon: {
                src: window.MODULE_PATH + '/img/opencarlogo.png',
                position: 'bottom'
            }
        }
    });
});
