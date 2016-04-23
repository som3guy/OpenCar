define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Promise                 = require('common/lib/Promise'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    var MenuModule = Class.create(
        ListChamber,
        {
            data: function () {
                var promise = new Promise();
                // return the data for our list
                setTimeout(function(){
                    promise.resolve([
                        {
                            text : 'List Item 1'
                        },
                        {
                            text : 'List Item 2'
                        }
                    ]);
                }, 3000);
                return promise;
            }.override()
        });

    return MenuModule;
});