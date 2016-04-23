/**
 * Google API
 */

define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Http                = require('common/Http'),
        _                   = require('$MODULE_PATH/apps-common/utils/lodash.min'),
        Promise             = require('common/lib/Promise');

    var GoogleAPI = Class.create({
        searchCityByLocation: function(lat, lng) {
            var promise = new Promise();

            Http.ajax({
                url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=false',
                dataType: 'json',
                complete: function(response) {
                    var parts, city,
                        zip, state, country,
                        extra = {lat: lat, lng: lng};

                    if(response.data && response.data.results && response.data.results.length) {
                        parts = response.data.results[0].address_components;
                        city = _.filter(parts, function(part) {
                            return part.types.join(',') === 'locality,political';
                        })[0];

                        state = _.filter(parts, function(part) {
                            return part.types.join(',') === 'administrative_area_level_1,political';
                        })[0];

                        country = _.filter(parts, function(part) {
                            return part.types.join(',') === 'country,political';
                        })[0];

                        zip = _.filter(parts, function(part) {
                            return part.types.join(',') === 'postal_code';
                        })[0];

                        if (state && state.short_name) {
                            extra.state = state.short_name;
                        }
                        if (country && country.short_name) {
                            extra.country = country.short_name;
                        }
                        if (zip && zip.short_name) {
                            extra.zip = zip.short_name;
                        }

                        if (city && city.long_name) {
                            extra.city = city.long_name;
                            promise.resolve(city.long_name, lat, lng, extra);
                        } else {
                            promise.resolve('Unknown', lat, lng, extra);
                        }
                    } else {
                        promise.resolve('Unknown', lat, lng, extra);
                    }
                }
            });

            return promise;
        },

        searchCityByName: function(name) {
            var promise = new Promise();

            Http.ajax({
                url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + name + '&sensor=false',
                dataType: 'json',
                complete: function(response) {
                    var parts, cityItem;

                    if(response.data && response.data.results && response.data.results.length) {
                        parts = response.data.results[0].address_components;
                        cityItem = _.filter(parts, function(part) {
                            return part.types.join(',') === 'locality,political' && part.long_name !== 'Undefined';
                        });

                        if (cityItem && cityItem[0]) {
                            promise.resolve(cityItem[0].long_name, name);
                        } else {
                            promise.resolve('Unknown');
                        }
                    } else {
                        promise.resolve('Unknown');
                    }
                },
                error: function() {
                    promise.resolve('Unknown');
                }
            });

            return promise;
        },

        getTimeOffsetByLocation: function(lat, lng, referenceDate) {
            var promise = new Promise();
            // reference date is used to correlate the daylight saving offset as well
            if ( referenceDate === undefined ) { referenceDate = new Date(); }

            Http.ajax({
                url: 'https://maps.googleapis.com/maps/api/timezone/json?timestamp='+ (referenceDate.getTime()/1000) +'&location='+lat+','+lng,
                dataType: 'json',
                complete: SuccessFn,
                error: function() {
                    promise.resolve(0);
                }
            });

            function SuccessFn(response) {
                if (!response || !response.data || !response.data.rawOffset) {
                    promise.resolve(0);
                } else {
                    promise.resolve(response.data.rawOffset + response.data.dstOffset);
                }
            }

            return promise;
        },

    });

    return GoogleAPI;
});
