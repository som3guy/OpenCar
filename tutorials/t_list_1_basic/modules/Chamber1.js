define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    var MenuModule = Class.create(
        ListChamber,
        {
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