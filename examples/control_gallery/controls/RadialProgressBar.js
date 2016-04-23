define(function(require) {
    'use strict';

    var RadialProgressBar   = require('common/ui/RadialProgressBar'),
        Pane                = require('common/ui/Pane'),
        Slider              = require('common/ui/Slider');

    var buildColorMap = function() {
        //build colors for each progress value
        var colorMap = [];
        var start = {
            r : 255,
            g : 255,
            b : 255
        };
        var end = {
            r : 255,
            g : 255,
            b : 255
        };
        var width = 30;
        //pull gradient values up to 30% of the way
        var ratio;
        for (var i = 0; i < width; i++) {
            ratio = i / width;
            colorMap.push({
                r : Math.round(start.r + (end.r - start.r) * ratio),
                g : Math.round(start.g + (end.g - start.g) * ratio),
                b : Math.round(start.b + (end.b - start.b) * ratio)
            });
        }
        //fill the rest with the end color
        for (var j = width; j < 100; j++) {
            colorMap.push({
                r : end.r,
                g : end.g,
                b : end.b
            });
        }
        return colorMap;
    };

    var startingValue = 43;
    var max = 100;
    var pane = new Pane({
        classNames: ["pane-radial-progress"]
    });

    var bar = new RadialProgressBar({
        model : {
            value              : startingValue / 100
        },
        maxValue           : max,
        radius             : 77,
        barWidth           : 10,
        barColor           : buildColorMap(),
        showGradientKeyBar : false,
        width              : 186,
        height             : 114
    });

    var slider = new Slider({
        model : {
            value  : startingValue
        },
        maxValue    : max,
        change : function(type, value) {
            bar.model.set('value', value / 100);
        }
    });

    pane.addChild(slider);
    pane.addChild(bar);

    return pane;
});
