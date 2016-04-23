define(function(require) {
    'use strict';

    var Http                = require('common/Http'),
        GPSLocationAPI      = require('common/platform/GPSLocationAPI'),
        Favorites           = require('common/lib/Favorites'),
        Promise             = require('common/lib/Promise');

    /*
     This module is invoked by the audio wizard template if the configs.json value catalogJSON is set to "true".

     This allows for custom view-side code designed to handle custom fetching of information that isn't a
     simple URL return.

     Typically, this is a call to a web service that requires some parameters to be set up, or there may be a multi-step
     service query involved.

     Alternately, this may not be a web-based service at all, but a purely algorithmic mechanism for selecting a set of
     catalog items.

     Each function named here is presumed to have been named with a "fetchFunction" in the fetchInfo block.
     The parameters will match the parameters in "fetchParameters".

     */

    // GPSLocation object available to this module
    var gpsLocation;

    // This sets up the self-updating gpsLocation object
    var setupLocation = function() {
        gpsLocation = new GPSLocationAPI();
        gpsLocation.init().done(function(){
            Log.debug("ServiceFetch location initialized: gpsPosition = "+gpsLocation.getLatitude()+", "+gpsLocation.getLongitude());
        });
        gpsLocation.subscribe(GPSLocationAPI.Event.CHANGED, function(model) {
            // If the GPS location changes, it will be reported here.
        });
    };

    return (
        {
            // The init method is used here to initialize the Location object at load time.
            // Other initialization tasks you may require may also be included here.
            init : function() {
                Log.debug("ServiceFetch init method called");
                setupLocation();
            },

            //
            // Put your functions here that match the "fetchFunction" name and the parameters as defined
            // by "fetchParameters" as assigned in the "fetchInfo" block of the catalog data.
            //
            // e.g.:
            // myServiceMethod : function(myParameter1, myParameter2, etc) {
            //
            //      var promise = new Promise();
            //      Http.ajax({
            //          url: url,
            //          dataType: "json",
            //          complete: function(response) {
            //              promise.resolve(response && response.data);
            //          }
            //      });
            //      return promise;
            // }

            customFetchExample : function() {

                // This method returns a promise that is resolved when the fetch is complete.
                var funcPromise = new Promise();

                // The example service doesn't really do anything with location, but this is how you
                // would send this information to a service that did.
                var lat = gpsLocation.getLatitude();
                var lon = gpsLocation.getLongitude();

                var url = "http://www.ohmert.com/opencar/ocradio/public-domain.php?id=occ-sdk" +
                    "&lat=" + lat + "&lon=" + lon;
                Http.ajax({
                    url: url,
                    dataType: "json",
                    complete: function(response) {
                        // return the response here and we'll parse it in ServiceParseJSON
                        funcPromise.resolve(response.data);
                    }
                });

                return funcPromise;
            },

            //
            // Here is the normal way to handle favorites.
            // Note that we've added a "require" statement at the top for common/lib/Favorites.
            // This has the basic functionality in it we need for reading our locally stored favorites and
            // displaying them in a list.
            //
            // See also 'parseFavorites' in ServiceParseJSON.js
            //
            fetchFavorites : function() {
                return new Favorites().getFavoritesList();
            }

        }
    );
});