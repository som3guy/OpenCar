define(function(require) {
    'use strict';

    /*
     * This class may be used to define the application specific handling for connecting to a remote service
     * and feeding the content into the information displays and playback handler.
     *
     * Please see the documentation available at the OpenCar InsideTrack site.
     *
     */

    var Class                       = require('common/Class'),
        ModuleContentHandlerBase    = require('common/appbase/1.1/audio/ModuleContentHandlerBase');

    /**
     * ModuleContentHandler
     *
     * Handles fetching, parsing, and supplying data from the service returns to the application
     */
    return Class.create(
        ModuleContentHandlerBase,
        {
			/*
            supplyNowPlayingData : function(finalObject) {
                return finalObject;
            }.override()
			*/
        }
    );
});
