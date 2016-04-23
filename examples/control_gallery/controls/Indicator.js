define(function(require) {
    'use strict';

    var Indicator = require('common/ui/Indicator'),
        Pane = require('common/ui/Pane'),
        Button = require('common/ui/Button');

    var pane        = new Pane({id: "indicator-pane"}),
        indicator   = new Indicator({ id:"indicator", showLabel: true }),
        btnUp       = new Button({
            model : {
                text  : 'Increase Value'
            },
            click : function() {
                indicator.model.set('value', indicator.getValue() + 1);
            }
        }),
        btnDown     = new Button({
            model : {
                text  : 'Decrease Value'
            },
            click : function() {
                indicator.model.set('value', indicator.getValue() - 1);
            }
        });

    pane.addChild(btnUp);
    pane.addChild(btnDown);
    pane.addChild(indicator);

    return pane;
});
