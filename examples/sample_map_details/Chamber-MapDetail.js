define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        Model = require('common/Model'),
        MapDetailChamber = require('common/platform/chamber/MapDetailChamber');

    // pseudo data for demo
    var locationsData = [

        {
            "title": "Seattle",
            "details": "Seattle is a coastal seaport city and the seat of King County, in the U.S. state of Washington. With an estimated 652,405 residents as of 2013, Seattle is the largest city in both the State of Washington and the Pacific Northwest region of North America and, as of July 2013, the fastest-growing city in the United States. "+
            "The Seattle metropolitan area of around 3.6 million inhabitants is the 15th largest metropolitan area in the United States. "+
            "The city is situated on a narrow isthmus between Puget Sound and Lake Washington, about 100 miles south of the Canada-United States border. A major gateway for trade with Asia, Seattle is the 8th large st port in the United States and 9th largest in North America in terms of container handling items.",
            "mapType": "terrain",
            "longitude": -122.333,
            "latitude": 47.609,
            "zoomLevel": 15
        },

        {
            "title": "Tokyo",
            "details": "Tokyo (&#26481;&#20140;) is one of the 47 prefectures of Japan. Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world. It is the seat of the Emperor of Japan and the Japanese government. Tokyo is in the Kanto region on the southeastern side of the main island Honshu and includes the Izu Islands and Ogasawara Islands. Formerly known as Edo it has been the de facto seat of government since 1603 when Shogun Tokugawa Ieyasu made the city his headquarter but only became the capital and was renamed Tokyo after Emperor Meiji moved his seat to the city from the old capital of Kyoto in 1868. Tokyo Metropolis was formed in 1943 from the merger of the former Tokyo Prefecture and the city of Tokyo (&#26481;&#20140;).",
            "longitude": 139.7533,
            "latitude": 35.6854,
            "zoomLevel": 12,

            "showTrafficeLayer": true,
            "showPanoLayer": true
        },

        {
            "title": "London",
            "details": "London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. London's ancient core, the City of London, largely retains its 1.12 square mile mediaeval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term 'London' has also referred to the metropolis developed around this core. The bulk of this conurbation forms the Greater London administrative area, governed by the Mayor of London and the London Assembly.",
            "mapType": "satellite",
            "longitude": -0.13,
            "latitude": 51.5,
            "zoomLevel": 10

        }
    ];

    return Class.create(MapDetailChamber, {

        // ~~~ lifecycle ~~~
        // define default module view
        init: function ($super, screen) {
            $super(screen);
            this.sampleModel = this.generateSampleModel();
        }.override(),


        generateSampleModel: function () {
            var m = new Model({}),
            location = locationsData[parseInt(Math.random() * locationsData.length)];

            // bind fields
            ["title", "details", "longitude", "latitude", "zoomLevel", "showTrafficLayer", "showPanoLayer"].forEach(function (o) {
                m.set(o, location[o]);
            });

            return m;
        },

        // required implementation of interfaces from MapDetailChamber
        /**
         * provides direct access to the model where state is contained for the upstream widget to use as configuration
         */
        getDetailModel: function () {
            return this.sampleModel;
        }.override()

    });
});
