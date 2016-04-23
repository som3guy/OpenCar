/**
 * Geonames API
 */

define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Http                = require('common/Http'),
        _                   = require('$MODULE_PATH/apps-common/utils/lodash.min'),
        Promise             = require('common/lib/Promise'),
        GoogleAPI           = require('$MODULE_PATH/apps-common/services/GoogleAPI');

    var googleAPI = new GoogleAPI();

    function getDistance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180,
            radlat2 = Math.PI * lat2/180,
            radlon1 = Math.PI * lon1/180,
            radlon2 = Math.PI * lon2/180,
            theta = lon1-lon2,
            radtheta = Math.PI * theta/180,
            dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        // if (unit=="K") { dist = dist * 1.609344 } // if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }

    var GeonamesAPI = Class.create({
        // TODO: review and maybe tune this function
        // TODO: additional info may be found here: http://www.geonames.org/export/web-services.html | http://download.geonames.org/export/dump/readme.txt
        getCitiesNearLatLong: function(lat, lng, radius, count) {
            var params = [
                'http://api.geonames.org/findNearbyPlaceNameJSON?',
                'lat=' + lat,
                'lng=' + lng,
                'maxRows=' + (count || 10),
                'username=asubota', // TODO: register another user
                'radius=' + (radius || 50),
                'style=MEDIUM',
                'cities=cities5000',  // city population may be ['cities15000', 'cities5000', 'cities1000']
            ],
            promise = new Promise();

            Http.ajax({
                url: encodeURI(params.join('&')),
                dataType: 'json',
                complete: function(response) {
                    var data;
                    if (!response || !response.data || !response.data.geonames) {
                        promise.resolve([]);
                    } else {
                        data = _.map(response.data.geonames, function (item) {
                            return {
                                text: item.name || item.toponymName,
                                toponymName: item.toponymName,
                                countryCode: item.countryCode,
                                lat: parseFloat(item.lat),
                                lng: parseFloat(item.lng),
                                state: item.adminCode1,
                                geonameId: item.geonameId,
                                distance: parseInt(item.distance, 10),
                            };
                        });
                        promise.resolve(data);
                    }
                },
                error: function() { promise.resolve([]); }
            });
            return promise;
        },

        _lookupNearby: function(searchTerm, lat, lng, inBoundingBox) {
            var promise = new Promise(),
                diff = 1.75,
                params = [
                    'http://api.geonames.org/searchJSON?username=asubota', // TODO: register OpenCar username
                    'cities=cities5000',
                    'style=MEDIUM',
                    'maxRows=10',
                    'q='+searchTerm,
                    'name_startsWith='+searchTerm,
                ];

            // limit search in the bounding box
            if (inBoundingBox) {
                params.push('north=' + (lat + diff).toFixed(4));
                params.push('south=' + (lat - diff).toFixed(4));
                params.push('west=' + (lng - diff).toFixed(4));
                params.push('east=' + (lng + diff).toFixed(4));
            }

            Http.ajax({
                url: encodeURI(params.join('&')),
                dataType: 'json',
                complete: successFn,
                error: function() { promise.resolve([]); }
            });

            function successFn(response) {
                var data;
                if (!response || !response.data || !response.data.geonames) {
                    promise.resolve([]);
                }
                data = _.map(response.data.geonames, function(item) {
                    return {
                        text: item.name || item.toponymName,
                        toponymName: item.toponymName,
                        countryCode: item.countryCode,
                        lat: parseFloat(item.lat),
                        lng: parseFloat(item.lng),
                        state: item.adminCode1,
                        geonameId: item.geonameId,
                    };
                });
                promise.resolve(data);
            }
            return promise;
        },

        lookupCities: function(searchTerm, lat, lng) {
            var promise = new Promise();
            var lookupCallback = function(data) {
                return _.map(data, function(item) {
                    item.distance = parseInt(getDistance(lat, lng, item.lat, item.lng), 10);
                    return item;
                });
            };

            // get current position metadata
            var meta = googleAPI.searchCityByLocation(lat, lng);

            // find 500 cities in radius of 100 miles and manually search among them
            var nearby = this.getCitiesNearLatLong(lat, lng, 100, 500).then(function(data) {
                return _.filter(data, function(item) {
                    return item.text.toLowerCase().indexOf(searchTerm) > -1 || item.toponymName.toLowerCase().indexOf(searchTerm) > -1;
                });
            });

            // lookup cities in the bounding box
            var box = this._lookupNearby(searchTerm, lat, lng, true).then(lookupCallback);
            // lookup cities in the world
            var world = this._lookupNearby(searchTerm, lat, lng, false).then(lookupCallback);


            Promise.when.apply(null, [nearby, box, world, meta]).done(function(n, b, w, m) {
                var currentCountry = m[3].country,
                    currentState   = m[3].state;

                var data = _.chain([].concat(n, b, w))
                    .uniq('geonameId')
                    .sortBy('distance')
                    .map(function(item) {
                        var text = [item.text];

                        if (!!currentCountry && currentCountry !== item.countryCode) {  // add country if not equal current country
                            text.push(' ('+item.countryCode+')');
                        } else if (!!currentState && currentState !== item.state) {     // add state if not equal current state
                            text.push(', '+item.state);
                        }

                        if (item.distance) {
                            item.status = item.distance + ' mi';
                        }

                        item.text = text.join('');
                        return item;
                    })
                    .value();

                promise.resolve(data);
            });

            return promise;
        }

    });

    return GeonamesAPI;
});
