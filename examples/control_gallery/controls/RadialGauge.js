define(function(require) {
    'use strict';

    var RadialGauge = require('common/ui/RadialGauge'),
        Slider      = require('common/ui/Slider'),
        Pane        = require('common/ui/Pane');

    var startingValue = Math.round(Math.random() * 100);

    var pane = new Pane({
        classNames: ['oc-radialgauge-preview']
    });

    var radialGauge = new RadialGauge({
        value : startingValue,        
        tickLabels: RadialGauge.LabelType.EACH_TICK
    });

    var slider = new Slider({
        model : {
            value  : startingValue
        },
        maxValue    : 100,
        change : function(type, value) {
            radialGauge.model.set('value', value);
        }
    });

    pane.addChild(radialGauge);
    pane.addChild(slider);

    return pane;
});
