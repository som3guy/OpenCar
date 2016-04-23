define(function(require){
    'use strict';

    var Class                   = require('common/Class'),
        NowPlayingChamberBase   = require('common/platform/chamber/NowPlayingChamberBase');


    var NowPlayingChamber = Class.create(
        NowPlayingChamberBase,
        {
            _displayStationTitle: function(data, isLiveMetadata) {

                if(!isLiveMetadata || data.stationName) {
                    if(data.stationName && data.stationName.length) {
                        if(data.topTitle) {
                            this.displayData.stationName = data.topTitle + "/" + data.stationName;
                        } else {
                            this.displayData.stationName = data.stationName;
                        }
                    } else {
                        this.displayData.stationName = data.topTitle;
                    }
                }
            }

        }
    );

    // Copy over all statics
    for(var p in NowPlayingChamberBase) {
        if(NowPlayingChamberBase.hasOwnProperty(p) && !NowPlayingChamber[p]) {
            NowPlayingChamber[p] = NowPlayingChamberBase[p];
        }
    }

    return NowPlayingChamber;
});
