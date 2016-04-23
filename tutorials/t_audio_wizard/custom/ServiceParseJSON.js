define(function(require) {
    'use strict';

    /*
     This module allows for custom view-side code designed to handle JSON parsing.

     This module is invoked by the audio wizard to support the request for non-xml web-service return parsing.


     Non-JSON text responses may also be parsed here.
     Check the "typeof" for the respData object to insure it is the expected type:

        if(typeof respData === 'string') {
            // parse as text
        }
        if(typeof respData === 'object') {
            // handle as a parsed JSON object
        }
        if(Array.isArray(respData)) {
            // handle as a parsed JSON array
        }

     */
    return (
        {
            // This init method is called at the start of the module so that you may perform
            // any one-time initialization tasks you may need.
            init : function() {
                Log.debug("ServiceParseJSON init method called");
            },

            //
            // Put your functions here that match the "parseFunction" name in the fetchInfo block.
            // The fetchInfo data is passed as a parameter as well.
            // return catalog data suitable for listing as an array (or a Promise returning one).
            //
            // e.g.:
            // myServiceParseMethod : function(respData, fetchInfo) {
            //      // return catalog data parsed out of the response.
            //      // Note that we 'build' additional data tree and fetch directives by including
            //      // _data_tree_branch and/or fetchInfo members in an array item representing a "branch".
            // }
            //

            //
            // Parse the JSON return from the list of public broadcast stations service
            //
            parsePublicStations: function(respData, fetchInfo) {
                var listItems = [];
                // In the service response from this sample service,
                // we expect an array to be returned at the root of the JSON response
                if(Array.isArray(respData)) {
                    var serviceList = respData;  // the service return is the array of services
                    for(var i=0; i<serviceList.length; i++) {
                        var svcItem = serviceList[i];
                        // we need to translate the relevant fields from each of the stations in this service
                        // into items that we can display.
                        // Note also we *could* do some or all of this in CatalogContentHandler.supplyNowPlayingData,
                        // but it is generally simpler to just do all the translation here in place.
                        var newItem = {
                            text            : svcItem.name +" "+svcItem.city,
                            stationName     : svcItem.name,
                            trackTitle      : svcItem.city,
                            contentImgUrl   : fetchInfo.url.substring(0,fetchInfo.url.lastIndexOf("/")+1)+svcItem.logo,
                            trackUrl        : svcItem.stream
                        };

                        listItems.push(newItem);
                    }
                } else {
                    Log.error("Response from this example server expected to return array");
                }
                return listItems;
            },

            //
            // Parse the JSON return from the list of public domain classical music service
            //
            parsePublicDomainAudio : function(respData, fetchInfo) {
                var listItems = [];
                // In the service response from this sample service, like the one before,
                // we expect an array to be returned at the root of the JSON response
                if(Array.isArray(respData)) {
                    var serviceList = respData;  // the service return is the array of services
                    for(var i=0; i<serviceList.length; i++) {
                        var svcItem = serviceList[i];
                        // Note that different services may need to be translated differently.
                        // This one has a different schema for the relevant data than before,
                        // but the mapping technique is basically the same
                        var duration;
                        if(svcItem.duration) {
                            // expect duration in minutes:seconds
                            var parts = svcItem.duration.split(":");
                            duration = Math.floor(parts[0])*60+Math.floor(parts[1]);
                            if(!isFinite(duration)) {
                                duration = undefined;
                            }
                        }
                        var newItem = {
                            text            : svcItem.title,
                            trackTitle      : svcItem.title,
                            fromTitle       : svcItem.performer,
                            contextTitle    : svcItem.composer,
                            trackUrl        : svcItem.stream,
                            contentImgUrl   : svcItem.image,
                            duration        : duration,

                            // set up any options for behavior other than default with the optionFlags element
                            optionFlags     : {
                                // we don't want any metadata from the track to override the catalog information we set here.
                                noMetadataUpdate: true
                            }
                        };

                        listItems.push(newItem);
                    }
                } else {
                    Log.error("Response from this example server expected to return array");
                }
                return listItems;
            },

            //
            // This is the complement to ServiceFetch.js fetchFavorites.
            // Declaring these methods and listing in the configs.js is the standard way to handle favorites in an audio app.
            //
            parseFavorites: function(favoritesList) {
                return favoritesList;
            }

        }
    );
});