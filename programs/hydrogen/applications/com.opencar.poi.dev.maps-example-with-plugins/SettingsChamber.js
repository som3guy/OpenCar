define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        ListChamber = require('common/platform/chamber/ListChamber');

    // navigateTo
    var PARKING_ACTION = 'oc:nearest_parking';
    var AIRPORT_ACTION = 'oc:nearest_airport';
    var HOSPITAL_ACTION = 'oc:nearest_hospital';
    var LODGING_ACTION = 'oc:nearest_lodging';
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
    // extension points
    var navigateToExtensionPoint = 'oc-locations-navigateTo';
    var layerExtensionPoint = 'oc-locations-showAll';

    var SettingsChamber = Class.create(
        ListChamber,
        {
            activate: function (currentLocation) {
                this.currentLocation = currentLocation;
            },
            render: function ($super, config) {
                var scope = this;
                config.itemChanged = function (evt, lv, model) {
                    switch (model.get('type')) {
                        case 'extension':
                            this.currentExtension = model.id;
                            break;
                        case 'plugin':
                            this.currentPlugin = model.id;
                            break;
                    }
                }.bind(this);
                config.itemClick = function (lv, model) {
                    if ( !model._data_tree_branch ) {
                        var id = model.id;
                        if ( id == NAVIGATE_TO_GPS ) {
                            this.resume('map-chamber', {
                                latitude: model.lat,
                                longitude: model.lng
                            });
                        } else if ( id === PARKING_ACTION ) {
                            queryPlacesService.call(this, ['parking'], model);
                        } else if ( model.get('id') === AIRPORT_ACTION ) {
                            queryPlacesService.call(this, ['airport'], model);
                        } else if ( model.get('id') === HOSPITAL_ACTION ) {
                            queryPlacesService.call(this, ['hospital'], model);
                        } else if ( model.get('id') === LODGING_ACTION ) {
                            queryPlacesService.call(this, ['lodging'], model);
                        } else if ( model.get('id') === SHOW_TRAFFIC_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( model.get('id') === SHOW_TRANSIT_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( model.get('id') === SHOW_BIKE_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( model.get('id') === SHOW_WEATHER_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( model.get('id') === SHOW_CLOUD_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( model.get('id') === SHOW_PANO_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( model.get('id') === SHOW_PARKINGS_ACTION ) {
                            model.checked = !model.checked;
                        } else if ( id === ZOOM_OUT ) {
                            this.resume('map-chamber');
                            this.getChamber('map-chamber').zoomOut();
                            var parent = this.nestedListManager.getTreeNode();
                            delete parent._data_tree_branch;
                            this.back();

                        } else {
                            if ( this.currentExtension === navigateToExtensionPoint ) {
                                var currentLocation = this.currentLocation;
                                this.moduleView.showLoading();
                                this.moduleView.getController().invokePlugin(
                                    this.currentPlugin,
                                    model.id,
                                    [currentLocation.lat(), currentLocation.lng()]
                                    // while there are results to search for
                                ).done(function (results) {
                                        if ( Array.isArray(results) ) {
                                            var moreChildren = [];
                                            var x, xx, choice, moreChild;
                                            for (x = 0, xx = results.length; x < xx; x++) {
                                                choice = results[x];
                                                moreChild = {
                                                    text: choice.name,
                                                    id: NAVIGATE_TO_GPS,
                                                    lat: choice.lat,
                                                    lng: choice.lng
                                                };
                                                moreChildren.push(moreChild);
                                            }

                                            if ( moreChildren.length === 0 && results.length === 0 ) {
                                                moreChildren.push({
                                                    text: 'No data.  Try zooming out.',
                                                    id: ZOOM_OUT
                                                });
                                            }
                                            model._data_tree_branch = moreChildren;
                                            this.nestedListManager.descend(this.nestedListManager.getSelectedChild());
                                            // on a leaf, select then go to the map chamber view
                                        } else {
                                            if ( results.lat && results.lng ) {
                                                this.resume('map-chamber', {
                                                    latitude: results.lat,
                                                    longitude: results.lng
                                                });
                                            } else {
                                                Toast.alert('No data');
                                            }
                                        }

                                    }.bind(this)).error(function (error) {
                                        Toast.alert(error ? error.getMessage() : 'No data');
                                    }).always(function () {
                                        this.moduleView.hideLoading();
                                    }.bind(this));
                            } else if ( this.currentExtension === layerExtensionPoint ) {
                                model.checked = !model.checked;
                            }
                        }
                    } else {
                        switch (model.type) {
                            case 'extension':
                                this.currentExtension = model.id;
                                break;
                            case 'plugin':
                                this.currentPlugin = model.id;
                                break;
                        }
                    }

                    if ( typeof model.checked !== 'undefined' ) {
                        var modelId = model.get('id');
                        var newValue = model.checked;
                        if ( !scope.getChamber('map-chamber').renderLayer(modelId, newValue) ) {
                            scope.getChamber('map-chamber').renderLayerFromPlugin(modelId, scope.currentPlugin, newValue);
                        }
                        scope.resume('map-chamber');
                        if(scope.moduleView._breadcrumb) {
                            scope.moduleView._breadcrumb.model.set('subtitle', undefined);
                        }
                    }
                }.bind(this);
                config.showTitle = false;
                $super(config);
            },
            data: function () {
                var tree = this.moduleView.buildSettings.call(this.moduleView);
                return tree;
            }.override()
        }
    );

    var queryPlacesService = function (types, model) {
        // execute web service search then update UI
        this.getChamber('map-chamber').queryPlacesService(types).done(function (moreChildren) {
            model._data_tree_branch = moreChildren;
            this.nestedListManager.descend(this.nestedListManager.getSelectedChild());
        }.bind(this));
    };

    return SettingsChamber;
});
