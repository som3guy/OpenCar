define(function (require) {
    'use strict';
    var Class = require('common/Class'),
        TextChamberBase = require('common/platform/chamber/TextChamberBase');


    var OxygenTextChamber = Class.create(TextChamberBase,
        {

            /* Profile aware Configurable overrides */

            /*  profile specific: how big is the font used in the list */
            listItemFontSize: "30px",

            /* profile specific: allocated pixels per row for text */
            pixelsPerRow: 450,


            init: function ($super, screen) {
                //Log.log("init... OxygenTextChamber");
                $super(screen);
            }.override(),

            beforeStart: function ($super) {
                //Log.log("init... OxygenTextChamber");
                $super();
                this.listWrapper.querySelector('.default-scroll-bar').style.visibility = 'hidden';
            }.override()


        });


    return OxygenTextChamber;
});
