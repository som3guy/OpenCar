// (C) 2013-2014 OpenCar Inc.
// All Rights Reserved.

define(function(require) {
    'use strict';
    var Class = require('common/Class'),
        DOMHelper = require('common/DOMHelper'),
        TextAndStatusItemView   = require('common/ui/list-item-view/TextAndStatusItemView');

    var TextAndStatusAndIconItemView = Class.create(TextAndStatusItemView, {
        _generateElement: function($super) {
            var element = $super();

            if (this.get('css')) {
                DOMHelper.addClasses(element, this.get('css'));
            }

            return element;
        }
    });

    return TextAndStatusAndIconItemView;
});
