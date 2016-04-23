define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Promise                 = require('common/lib/Promise'),
        ModuleView              = require('common/platform/ModuleView');

    var View = Class.create(
        ModuleView,
        {
            started : function($super){
                return Promise.wrap($super()).done(function(){
                    // after some algorithm
                    this.goto('chamber1');
                }.bind(this));
            }.override()
        }
    );

    return View;
});
