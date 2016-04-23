define(function(require) {
    'use strict';

    var Tooltip = require('common/ui/Tooltip');

    var tooltip = new Tooltip({
        id: 'kitchen-sink-tooltip',
        model : {
            text: "I'm a tooltip!"
        }
    });

    window.requestAnimationFrame(function() {
        tooltip.show('480px', '160px');
    }, null);

    return tooltip;
});
