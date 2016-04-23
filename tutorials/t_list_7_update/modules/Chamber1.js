define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    var MenuModule = Class.create(
        ListChamber,
        {
            render : function($super, config){
                // register item click event listener
                config.itemClick = function(lv, model){
                    // respond to user activating a list item
                    model.checked = !model.checked;
                }.bind(this);
                // proceed with rendering
                $super(config);
            },
            data: function () {
                // return the data for our list
                return [
                    {
                        text : 'List Item 1',
                        checked: true
                    },
                    {
                        text : 'List Item 2',
                        checked: false
                    }
                ];
            }.override()
        });

    return MenuModule;
});