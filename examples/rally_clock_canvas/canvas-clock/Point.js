define(function(require) {
    'use strict';

    var Class       = require('common/Class');

    var Point = Class.create(
        {
            initialize: function(x,y) {
                this.x = x;
                this.y = y;
            }
        }
    );

    return Point;
});
