define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Logging             = require('common/Logging'),
        RemoteLogClient     = require('$MODULE_PATH/custom/RemoteLogClient');

    var trackListenLogger = Class.create({

        /*
         *  Remote log info about a track user is listening to.
         */
        post : function(title, artist, station, location) {
            var msg = "title:" + title + ", artist:" + artist + ", station:" + station + ", ";
            if (!location) {
                msg += "gps:(unavailable)";
            } else {
                msg += "gps:(" + location.latitude + "," + location.longitude + ")";
            }

            Logging.debug("msg=" + msg);
            var rlc = new RemoteLogClient();
            rlc.post(msg); //Fire and forget.
        }

    });

    return trackListenLogger;
});
