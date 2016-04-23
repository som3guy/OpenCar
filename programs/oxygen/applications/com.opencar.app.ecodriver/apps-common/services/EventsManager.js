/**
 * Events Manager
 */

define(function(require) {
    'use strict';

    var events = {};

    var EventsManager = {
        
        fire : function(evt, params) {
            if (events.hasOwnProperty(evt)) {
                for (var i = 0; i < events[evt].length; i++) {
                    events[evt][i](params);
                }
            }
        },

        on : function(evt, callback) {
            if (!events.hasOwnProperty(evt)) {
                events[evt] = [];
            }

            events[evt].push(callback);
        },

        off : function(evt, callback) {
            if (events.hasOwnProperty(evt)) {
                for (var i = 0; i < events[evt].length; i++) {
                    if (events[evt][i] === callback) {
                        events[evt].splice(i, 1);
                    }
                }
            }
        }

    };

    return EventsManager;
});
