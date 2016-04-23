define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    var MenuModule = Class.create(
        ListChamber,
        {
            // NEW METHOD
            render : function($super, config){
                // register item click event listener
                config.itemClick = function(lv, model){
                    // respond to user activating a list item
                    Log.log("Clicked", model);
                }.bind(this);
                // proceed with rendering
                $super(config);
            },
            data: function () {
                // return the data for our list
                return [
                    {
                        text : 'List Item 1'
                    },
                    {
                        text : 'List Item 2'
                    }
                ];
            }.override()
        });

    return MenuModule;
});