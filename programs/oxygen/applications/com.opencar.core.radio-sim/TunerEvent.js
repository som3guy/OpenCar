/**
 * Enumeration of Tuner Events
 * @module common/platform/TunerEvent
 */
define(function() {
    'use strict';

    var Enum = require('common/Enum');

    /**
     * Tuner event types
     * @enum        {string}
     * @readonly
     */
    var TunerEvent = new Enum({
        /** Triggered when and RDS event is received from the tuner hardware. */
        RDS_EVENT       : 'Tuner.rdsEvent',
        /** Triggered as result of seek. */
        STATION_EVENT   : 'Tuner.stationEvent',
    });

    return TunerEvent;
});
