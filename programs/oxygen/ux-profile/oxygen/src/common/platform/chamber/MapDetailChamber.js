define(function (require) {
    'use strict';
    var Class = require('common/Class'),
    // derived from platform
        MapDetailChamberBase = require('common/platform/chamber/MapDetailChamberBase');


    var OxygenMapDetailChamber = Class.create(MapDetailChamberBase,
        {

            /* ~~~~~~~~ lifecycle  ~~~~~~~~~*/
            init: function ($super, screen) {
                $super(screen);
                //this.adjustScrollbarHeight();
            }.override(),

            render: function ($super, config) {
                // force no titlebar - for Oxygen
                config.hasTitle = false;
                $super(config);
            }.override()

            /* ------------------- methods ------------  */


        });

    return OxygenMapDetailChamber;
});