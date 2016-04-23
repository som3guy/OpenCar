define(function (require) {
    'use strict';
    var Class = require('common/Class'),
        TextChamberBase = require('common/platform/chamber/TextChamberBase');


    var HydrogenTextChamber = Class.create(TextChamberBase,
        {

            /* Profile aware Configurable overrides */

            /*  profile specific: how big is the font used in the list */
            listItemFontSize: "38px",

            /* profile specific: allocated pixels per row for text */
            pixelsPerRow: 630,


            init: function ($super, screen) {
                //Log.log("init... HydrogenTextChamber");
                $super(screen);
            }.override()

        });


    return HydrogenTextChamber;
});
