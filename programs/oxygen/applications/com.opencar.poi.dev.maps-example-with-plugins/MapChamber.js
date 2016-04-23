define(function (require) {
    'use strict';

    //MapsLib
    require('async!http://maps.googleapis.com/maps/api/js?v=3&sensor=true&libraries=places,weather,panoramio!callback');

    var Class = require('common/Class'),
        Chamber = require('common/platform/chamber/Chamber'),
        Promise = require('common/lib/Promise'),
        Map = require('common/ui/Map');

    // navigateTo immediate action
    var NAVIGATE_TO_GPS = 'oc:navigate_to_gps_now';
    var ZOOM_OUT = 'oc:zoom_out';
    // layers
    var SHOW_TRAFFIC_ACTION = 'oc:show_traffic';
    var SHOW_TRANSIT_ACTION = 'oc:show_transit';
    var SHOW_BIKE_ACTION = 'oc:show_bike';
    var SHOW_WEATHER_ACTION = 'oc:show_weather';
    var SHOW_CLOUD_ACTION = 'oc:show_cloud';
    var SHOW_PANO_ACTION = 'oc:show_pano';
    var SHOW_PARKINGS_ACTION = 'oc:show_parking';

    var fromCenter = false;

    var MapChamber = Class.create(
        Chamber,
        {


            // ~~~~~~~~~~~ lifecycle APIs ~~~~~~~~~~~~~~~~~

            init: function ($super, screen) {
                var p = $super(screen);
                this.render(screen);
                return p;
            }.override(),


            activate: function (coord) {

                if ( coord ) {
                    this.mapView.navigateTo(coord);
                }
            },


            // main UI construction and initial rendering
            render: function (screen) {
                var testCoords = {lat: 47.61357, lng: -122.213516};
                var latLng = new google.maps.LatLng(testCoords.lat, testCoords.lng);

                this.mapView = new Map({
                    id: 'map-canvas',
                    location: latLng,
                    menu: this.onMapMenu.bind(this),
                    zoomLevel: 15
                });
                this.mapView.render(screen.element);


                this.mapView.subscribe('zoom-changed', function () {
                    var i, j, aModel, aChildModel, id, childId, arrayList, a, b, childModels;

                    var models = this.moduleView.getLayerModels();

                    // verify existence
                    if ( models ) {
                        for (i = 0, j = models.length; i < j; i++) {
                            aModel = models[i];
                            id = aModel.id;
                            if ( aModel.checked ) {
                                //remove existing markers first
                                renderLayer(id, false, this.mapView, this);
                                //render new ones
                                renderLayer(id, true, this.mapView, this);
                            }
                            arrayList = aModel._data_tree_branch;
                            if ( arrayList && arrayList.length ) {
                                childModels = arrayList;//.getArray();
                                for (a = 0, b = childModels.length; a < b; a++) {
                                    aChildModel = childModels[a];
                                    childId = aChildModel.id;
                                    if ( aChildModel.id ) {
                                        //remove existing markers first
                                        renderLayer(childId, false, this.mapView, this);
                                        //render new ones
                                        renderLayer(childId, true, this.mapView, this);
                                    }
                                }
                            }
                        }
                    }


                }.bind(this));

                this.boundsPoll = setInterval(function () {
                    if ( this.mapView.initSearchRadius() !== 0 ) {
                        this.mapView.requestFocus();
                        Toast.show("Long Press to bring up options menu.");
                        clearInterval(this.boundsPoll);
                    }
                }.bind(this), 200);
            },

            onMapMenu: function () {
                var currentLocation = fromCenter ? this.mapView.getCenter() : this.mapView.getInitialLocation();
                this.goto('settings-chamber', currentLocation);
                if(this.moduleView._breadcrumb) {
                    this.moduleView._breadcrumb.model.set('subtitle', 'Settings');
                }
            },
            locationChanged: function (lat, lng) {
                this.mapView.setCenter(new google.maps.LatLng(lat, lng));
            },
            queryPlacesService: function (types) {
                return queryPlacesService.call(this, types);
            },
            zoomOut: function () {
                this.mapView.zoomOut();
            },
            renderLayer: function (id, newValue) {
                return renderLayer(id, newValue, this.mapView, this);
            },
            renderLayerFromPlugin: function (pluginId, methodName, newValue) {
                renderLayerFromPlugin.call(this, pluginId, methodName, newValue);
            }
        }
    );
    var comparator = function (a, b) {
        return a.distance-b.distance;
    };

    var toRad = function (lat) {
        return lat * Math.PI / 180;
    };

    var calcDistance = function (startLat, startLng, endLat, endLng) {
        var R = 6371; // Average Radius of the earth in km - verified by wiki and physics books
        var dLat = toRad(startLat-endLat);  // Javascript functions in radians
        var dLon = toRad(startLng-endLng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2)+
            Math.cos(toRad(startLat)) * Math.cos(toRad(endLat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return (R * c * 0.621371).toFixed(1); // Distance in miles, simple rounding
    };

    // web service call
    var queryPlacesService = function (types) {
        var moreChildren, promise = new Promise();
        this.moduleView.showLoading();
        var request = {
            location: fromCenter ? this.mapView.getCenter() : this.mapView.getInitialLocation(),
            types: types,
            radius: this.mapView.getSearchRadius()
        };
        this.mapView.nearbySearch(request, function (results, status, pagination) {
            if ( status === google.maps.places.PlacesServiceStatus.OK ) {
                var x, xx, choice, moreChild, distance, tempArray = [];
                for (x = 0, xx = results.length; x < xx; x++) {
                    choice = results[x];
                    distance = calcDistance(request.location.lat(), request.location.lng(),
                        choice.geometry.location.lat(), choice.geometry.location.lng());
                    moreChild = {
                        // formatting for list
                        text: choice.name,
                        status: [distance,'mi'].join(" "),

                        id: NAVIGATE_TO_GPS,
                        lat: choice.geometry.location.lat(),
                        lng: choice.geometry.location.lng(),
                        distance: distance
                    };
                    tempArray.push(moreChild);
                }
                tempArray.sort(comparator);
                moreChildren = tempArray.slice();
            } else {
                if ( results.length === 0 || status === 'ZERO_RESULTS' ) {
                    Toast.alert('No data');
                }
                moreChildren = [];
            }
            if ( pagination && pagination.hasNextPage ) {
                setTimeout(function () {
                    pagination.nextPage();
                }, 2000);
            } else {
                this.moduleView.hideLoading();
                if ( moreChildren.length === 0 && results.length === 0 ) {
                    moreChildren.push({
                        text: 'No data.  Try zooming out.',
                        id: ZOOM_OUT
                    });
                }
                promise.resolve(moreChildren);
            }
        }.bind(this));

        return promise;
    };

    function renderLayer (id, newValue, mapView, scope) {
        var handledNatively = false;

        // controller logic, determine which layers
        [
            [SHOW_TRAFFIC_ACTION, mapView.showTrafficLayer, mapView.hideTrafficLayer],
            [SHOW_TRANSIT_ACTION, mapView.showTransitLayer, mapView.hideTransitLayer],
            [SHOW_BIKE_ACTION, mapView.showBikeLayer, mapView.hideBikeLayer],
            [SHOW_WEATHER_ACTION, mapView.showWeatherLayer, mapView.hideWeatherLayer],
            [SHOW_CLOUD_ACTION, mapView.showCloudLayer, mapView.hideCloudLayer],
            [SHOW_PANO_ACTION, mapView.showPanoLayer, mapView.hidePanoLayer]
        ].forEach(function (rule) {
                if ( id === rule[0] ) {
                    // set flag
                    handledNatively = true;
                    // invoke a show or hide API ( slot 1 / 2 )
                    rule[( newValue === true ) ? 1 : 2].call(mapView);
                }
            }, this);


        // tricky use case, parking
        if ( id === SHOW_PARKINGS_ACTION ) {
            handledNatively = true;
            if ( newValue === true ) {
                usePlacesServiceForLayer.call(scope, 'parking');
            } else {
                mapView.removeMarkerType('parking');
            }
        }

        return handledNatively;
    }

    var renderLayerFromPlugin = function (methodName, pluginId, newValue) {
        if ( newValue === true ) {
            var currentLocation = fromCenter ? this.mapView.getCenter() : this.mapView.getInitialLocation();
            var image = window.MODULE_PATH+'/images/fillingstation.png';
            this.moduleView.showLoading();
            this.moduleView.getController().invokePlugin(
                pluginId,
                methodName,
                [currentLocation.lat(), currentLocation.lng(), this.mapView.getSearchRadius() / 1000 * 0.621371]
            ).done(function (results) {
                    this.moduleView.hideLoading();
                    if ( results.length ) {
                        for (var i = 0; i < results.length; i++) {
                            this.mapView.createMarkerRaw(methodName, results[i].lat, results[i].lng, image, '$'+results[i].reg_price);
                        }
                    } else {
                        Toast.alert('No data');
                    }
                }.bind(this)).error(function (error) {
                    Toast.alert(error ? error.getMessage() : 'No data');
                }).always(function () {
                }.bind(this));
        } else {
            this.mapView.removeMarkerType(methodName);
        }
    };

    var usePlacesServiceForLayer = function (type) {
        var image;
        if ( type === 'parking' ) {
            image = window.MODULE_PATH+'/images/parking.png';
        } else if ( type === 'gas_station' ) {
            image = window.MODULE_PATH+'/images/fillingstation.png';
        }
        var request = {
            location: fromCenter ? this.mapView.getCenter() : this.mapView.getInitialLocation(),
            types: [type],
            radius: this.mapView.getSearchRadius()
        };
        this.mapView.radarSearch(request, function (results, status) {
            if ( status === google.maps.places.PlacesServiceStatus.OK ) {
                for (var i = 0; i < results.length; i++) {
                    this.mapView.createMarker(type, results[i], image);
                }
            } else {
                if ( results.length === 0 || status === 'ZERO_RESULTS' ) {
                    Toast.alert('No data');
                }
            }
        }.bind(this));
    };

    return MapChamber;
})
;
