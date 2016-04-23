define(function (require) {
    'use strict';
    var Class = require('common/Class'),
    // derived from platform
        MapDetailChamberBase = require('common/platform/chamber/MapDetailChamberBase');


    var HydrogenMapDetailChamber = Class.create(MapDetailChamberBase,
        {

            // ~~~~~~~~ lifecycle API ~~~~~~~~~~~~
            init: function ($super, screen) {
                $super(screen);

                this.__scrollBarHandle = screen.element.querySelector('.default-scroll-bar-handle');

                /* override definition where to place the map */
                this.mapContainerNode = this.listWrapper.parentNode;
                //this.adjustScrollbarHeight();
            }.override(),



            // ~~~~~~~~ inherited methods from ListChamber ~~~~~~~~~~~~
            render: function ($super, config) {

                // force no titlebar - for Hydrogen
                config.hasTitle = false;
                
                $super(config);

                // hide the title DOM it doesn't affect calculations in adjustScrollbarHeight
                if ( !this.hasTitle ) {
                    var td = this.screen.element.querySelector('.oc-textview-title');
                    if ( td ) {
                        td.getControl().hide();
                    }
                }

            }.override()

        });

    return HydrogenMapDetailChamber;
});