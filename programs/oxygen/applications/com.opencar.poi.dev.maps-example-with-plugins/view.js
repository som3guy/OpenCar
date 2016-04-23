define(function(require) {
    'use strict';

    var Class                       = require('common/Class'),
        ModuleView                  = require('common/platform/ModuleView');

    // navigateTo
    var PARKING_ACTION              = 'oc:nearest_parking';
    var AIRPORT_ACTION              = 'oc:nearest_airport';
    var HOSPITAL_ACTION             = 'oc:nearest_hospital';
    var LODGING_ACTION              = 'oc:nearest_lodging';
    // layers
    var SHOW_TRAFFIC_ACTION         = 'oc:show_traffic';
    var SHOW_TRANSIT_ACTION         = 'oc:show_transit';
    var SHOW_BIKE_ACTION            = 'oc:show_bike';
    var SHOW_WEATHER_ACTION         = 'oc:show_weather';
    var SHOW_CLOUD_ACTION           = 'oc:show_cloud';
    var SHOW_PANO_ACTION            = 'oc:show_pano';
    var SHOW_PARKINGS_ACTION        = 'oc:show_parking';
    // extension points
    var navigateToExtensionPoint    = 'oc-locations-navigateTo';
    var layerExtensionPoint         = 'oc-locations-showAll';

    var View = Class.create(
        ModuleView,
        {
            /**********************
             * CONTROLLER HANDLER *
             **********************/
            locationChanged : function(lat,lng){
                this.getChamber('map-chamber').locationChanged(lat, lng);
            },
            getLayerModels : function(){
                return this.layerModels;
            },
            buildSettings : function(){
                var extensions = this.getExtensions(), item = {}, children, child, j, jj, keys, i, ii, option,
                    x, xx, moreChildren, choice, moreChild, extension;

                this._treeListData = [];
                this.currentExtension = navigateToExtensionPoint;

                for (keys = Object.keys(extensions), i = 0, ii = keys.length; i < ii; i++) {
                    extension = extensions[keys[i]];
                    item = {
                        text    : extension.name,
                        id      : extension.id,
                        type    : 'extension'
                    };
                    children = [];
                    switch(extension.id){
                        case navigateToExtensionPoint:
                            children.push({
                                text        : 'Nearest Parking',
                                id          : PARKING_ACTION,
                                isDynamic   : true,
                                type        : 'plugin'
                            });
                            children.push({
                                text        : 'Nearest Airport',
                                id          : AIRPORT_ACTION,
                                isDynamic   : true,
                                type        : 'plugin'
                            });
                            children.push({
                                text        : 'Nearest Hospital',
                                id          : HOSPITAL_ACTION,
                                isDynamic   : true,
                                type        : 'plugin'
                            });
                            children.push({
                                text        : 'Nearest Lodging',
                                id          : LODGING_ACTION,
                                isDynamic   : true,
                                type        : 'plugin'
                            });
                            if(Array.isArray(extension.menu)){
                                for (j = 0, jj = extension.menu.length; j < jj; j++) {
                                    option = extension.menu[j];
                                    child = {
                                        text    : option.label,
                                        id      : option.id,
                                        type    :'plugin'
                                    };
                                    if(Array.isArray(option.choices)){
                                        moreChildren = [];
                                        for(x = 0, xx = option.choices.length; x < xx; x++){
                                            choice = option.choices[x];
                                            moreChild = {
                                                text : choice.label,
                                                isDynamic   : true,
                                                id : choice.id
                                            };
                                            moreChildren.push(moreChild);
                                        }
                                        child._data_tree_branch = moreChildren;
                                    }

                                    children.push(child);
                                }
                            }
                            break;
                        case layerExtensionPoint:
                            children.push({
                                text    : 'Traffic',
                                id      : SHOW_TRAFFIC_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            children.push({
                                text    : 'Transit',
                                id      : SHOW_TRANSIT_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            children.push({
                                text    : 'Bicycling',
                                id      : SHOW_BIKE_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            children.push({
                                text    : 'Weather',
                                id      : SHOW_WEATHER_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            children.push({
                                text    : 'Cloud',
                                id      : SHOW_CLOUD_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            children.push({
                                text    : 'Panoramio',
                                id      : SHOW_PANO_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            children.push({
                                text    : 'Parking',
                                id      : SHOW_PARKINGS_ACTION,
                                type    : 'plugin',
                                checked : false
                            });
                            if(Array.isArray(extension.menu)){
                                for (j = 0, jj = extension.menu.length; j < jj; j++) {
                                    option = extension.menu[j];
                                    child = {
                                        text    : option.label,
                                        id      : option.id,
                                        type    :'plugin'
                                    };
                                    if(Array.isArray(option.choices)){
                                        moreChildren = [];
                                        for(x = 0, xx = option.choices.length; x < xx; x++){
                                            choice = option.choices[x];
                                            moreChild = {
                                                text : choice.label,
                                                id : choice.id,
                                                checked : false
                                            };
                                            moreChildren.push(moreChild);
                                        }
                                        child._data_tree_branch = moreChildren;
                                    }

                                    children.push(child);
                                }
                            }
                            this.layerModels = children;
                            break;
                    }
                    item._data_tree_branch = children;
                    this._treeListData.push(item);
                }
                return this._treeListData;
            }
        }
    );

    return View;
});
