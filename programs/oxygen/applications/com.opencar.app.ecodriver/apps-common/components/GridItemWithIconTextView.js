// (C) 2013-2014 OpenCar Inc.
// All Rights Reserved.

define(function(require) {
    'use strict';
    var Class = require('common/Class'),
        ListItemView = require('common/ui/ListItemView'),
        GridItemWithIconView = require('common/ui/list-item-view/GridItemWithIconView');

    var GridItemWithIconTextView = Class.create(GridItemWithIconView, {
        initialize: function($super, attrs, autoRender) {
            this._configs = attrs || {};
            this.set('template', '<span class="item-text">{{{text}}}</span>');
            $super(this._configs, autoRender);
        },
        _generateElement: function($super) {
            var element = $super();
            var span;
            
            if (this.get('sub')) {
                span = document.createElement('span');
                span.classList.add('item-text-sub');
                span.appendChild(document.createTextNode(this.get('sub')));
                element.insertBefore(span, element.firstChild);
            }

            if (this.get('type')) {
                span = document.createElement('span');
                span.classList.add('item-type');
                span.appendChild(document.createTextNode(this.get('type')));
                element.appendChild(span);
            }

            if (this.get('details')) {
                span = document.createElement('span');
                span.classList.add('item-details');
                span.appendChild(document.createTextNode(this.get('details')));
                element.appendChild(span);
            }

            if (this.get('css')) {
                element.classList.add(this.get('css'));
            }

            return element;
        }
    });
    GridItemWithIconTextView.animateIn = function(element, mode) {};
    GridItemWithIconTextView.animateOut = function(element, mode) {};

    return GridItemWithIconTextView;
});
