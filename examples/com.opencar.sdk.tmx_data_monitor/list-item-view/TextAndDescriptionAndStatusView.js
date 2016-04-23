define(function(require) {
    'use strict';

    var Class           = require('common/Class'),
        ListItemView    = require('common/ui/ListItemView');


    var TextAndStatusItemView = Class.create(
        ListItemView,
        {
            initialize : function($super, attrs, autoRender) {
                this._configs = attrs || {};
                this.set(
                    'template',
                    '<span class="item-text">{{{text}}}</span>'+
                    '<span class="item-quantity" id="item-quantity-{{{ocid.name}}}">{{{quantity}}} {{{units}}}</span>'+
                    '<span class="item-status">'+
                        '<span class="item-progress" id="item-progress-{{{ocid.name}}}" style="width: {{{percentage}}}%;"></span>'+
                    '</span>'
                );

                $super(this._configs, autoRender);
            }
        }
    );

    return TextAndStatusItemView;
});
