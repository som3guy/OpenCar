define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        TelematicsAPI = require('common/platform/TelematicsAPI'),
        ModuleController = require('common/platform/ModuleController');

    var telematics, location = { lat: undefined, lng: undefined }; // init a GPS coordinate
    // GPS results supply these constants when data is unavailable
    var  undefinedLatitude =-90,  undefinedLongitude = -180;

    return Class.create(
        ModuleController,
        {
            started: function ($super, context) {
                telematics = new TelematicsAPI(context);
                return $super(context);
            }.override(),

            onLocationChanged: function (location) {
                if ( location.lat !== undefined && location.lng !== undefined ) {
                    if ( location.lat !== undefinedLatitude && location.lng !== undefinedLongitude ) {
                        this.getView().locationChanged(location.lat, location.lng);
                    }
                }
            },

            onLatChanged: function (latitude) {
                location.lat = latitude;
                this.onLocationChanged(location);
            }.on(TelematicsAPI.Event.GPS_LATITUDE),

            onLngChanged: function (longitude) {
                location.lng = longitude;
                this.onLocationChanged(location);
            }.on(TelematicsAPI.Event.GPS_LONGITUDE)
        }
    );

});
