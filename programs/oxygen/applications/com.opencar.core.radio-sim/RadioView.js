define(function(require) {
    'use strict';

    var Class           = require('common/Class'),
        Control         = require('common/ui/Control'),
        AudioAppView    = require('common/appbase/1.1/audio/view');

    // Defining here rather than including all of  NowPlayingChamber just for this
    var NowPlayingEvent = {
        STOPPED: "stopped",
        PLAYING: "playing",
        PAUSED: "paused",
        NEXT_TRACK: "nextTrack",
        PREVIOUS_TRACK: "previousTrack"
    };

    // Setting up button listeners because we
    function setupButtonStateListeners() {
        var us = this;
        function pauseFunc() {
            us.setPause();
        }
        function playFunc() {
            us.setPlay();
        }

        us._focusController.subscribe(NowPlayingEvent.PAUSED, pauseFunc);
        us._focusController.subscribe(NowPlayingEvent.STOPPED, pauseFunc);
        us._focusController.subscribe(NowPlayingEvent.PLAYING, playFunc);
    }

    return Class.create(
        AudioAppView,
        {
            beforeStart: function($super) {
                setupButtonStateListeners.call(this);
                return $super();
            },

            showResultView: function(station) {
                var self = this;
                this.getController().getArrPlayableStations().done(function(aStations) {
                    if (!station) {
                        station = aStations[0];
                    }
                    var chamber = self.getChamber("now-playing-chamber");
                    chamber.callNowPlayingData(station);
                });
            },

            setPlay: function() {
                Control.getById("btn-play-pause").setClasses("on");
            },

            setPause: function() {
                Control.getById("btn-play-pause").removeClasses("on");
            },

            updateFrom: function(value) {
                Control.getById("np-from").set("text", value);
            },

            updateCallLetters: function(value) {
                Control.getById("np-track").set("text", value);
                var data = [];
                data.callLetters = value;
                this.showResultView(data);
            },

            updateStationInfo: function(value) {
                Control.getById("np-station").set("text", value);
            },

            updateMetadata: function(data) {
                this.getChamber("now-playing-chamber").setNowPlayingData(data, true);
            }
        }
    );
});
