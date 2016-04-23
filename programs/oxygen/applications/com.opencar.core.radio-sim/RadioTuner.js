define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Control                 = require('common/ui/Control'),
        NowPlaying              = require('common/appbase/1.1/audio/modules/NowPlaying');

    var scanning = false;
    var thisTimeout;
    var gidxStation;

    return Class.create(
        NowPlaying,
        {
           beforeStart: function($super) {
                Control.getById("display-hd-1").hide();
                Control.getById("display-hd-2").hide();
                Control.getById("display-hd-3").hide();
                Control.getById("display-hd-4").hide();
                Control.getById("btn-hd").set('disabled', true).hide();
                Control.getById("btn-memory").set('disabled', true).hide();
                Control.getById("btn-scan").set('disabled', true).hide();
                Control.getById("btn-favorite").set('disabled', true).hide();
                Control.getById("btn-tune").hide();
                Control.getById("btn-seek-previous").hide();
                Control.getById("btn-seek-next").hide();
                Control.getById("btn-play-pause").hide();
                Control.getById("btn-audio-settings").hide();
                Control.getById("streaming-indicator").set("text", "Live...");
				this.stopScan = true;
               return $super();
           }.override(),

            beforeResume: function($super) {
                this.restorePersistentData();
                if (this.moduleView._breadcrumb) {
                    this.moduleView._breadcrumb.model.set('title', 'Radio Tuner');
                }
                return $super();
            }.override(),

            scanStop: function() {
                clearTimeout(thisTimeout);
                Control.getById("streaming-indicator").set("text", "Live...");
                scanning = false;
                this.stopScan = true;
                var button = Control.getById("btn-scan");
                button.removeClasses("on");
            },

            scanNext: function(arrStations, idxStation, stopScan) {
				if (idxStation === undefined) {
					idxStation = 0;
				}
                // Simulated scan for now
                var _this = this;
                var controller = this.moduleView.getController();
                Control.getById("streaming-indicator").set("text", "Scanning...");
                if (!scanning) {
                    //first time - show the next station immediately
                    idxStation++;
                    if (idxStation > arrStations.length-1) { idxStation = 0; }
                    controller.setCurrentStation(arrStations[idxStation].frequency).done(function() {
                        _this.moduleView.showResultView(arrStations[idxStation]);
                    });
                }
                thisTimeout = setTimeout(function() {
                    scanning = true;
                    idxStation++;
                    if (idxStation > arrStations.length-1) { idxStation = 0; }
                    gidxStation = idxStation;
                    controller.setCurrentStation(arrStations[idxStation].frequency).done(function() {
                        _this.moduleView.showResultView(arrStations[idxStation]);
                        controller.setPersistentValue("currentStationIdx",gidxStation).done(function() {
                            _this.scanNext(arrStations, idxStation, stopScan);
                        });
                    });
                }.bind(this), 7500, idxStation);
            },

            /*
             *  topTitle            -- Used to display category or folder information
             *  stationName         -- Used to display station name
             *  trackTitle          -- Used to display the song or article name
             *  fromTitle           -- Used to display the artist or source name
             *  contextTitle        -- Used to display the album or contextual reference
             *  trackUrl            -- The URL of the audio stream
             *  contentImgUrl       -- The URL of an accompanying image (i.e. album art)
             *  duration            -- If set, represents the duration of the audio to use if it cannot be detected.
             *                         Duration of audio may not be auto-detectable in all situations.
             *                         By default, audio tracks without duration are presumed to be infinite
             *                         and the progress bar does not count progress.
             */
            callNowPlayingData: function(station) {
                //update to title, artist, station when RDS is built
                var band;
                var data;
                if (station) {
                    if ("band" in station) {
                        band = station.band;
                    }
                }
                if (!band) { band = "FM"; }
                var self = this;
                var controller=this.moduleView.getController();
                var vFreq = station.frequency;
                if (!vFreq) {
                    vFreq = "";
                }
                var vCall = station.callLetters;
                if (!vCall) {
                    vCall = "";
                }
                var stationInfo = vFreq + " " + vCall + " " + band;
                controller.getPersistentValue("TunerPlaying").done(function(isPlaying) {
                    var imageUrl = (station.contentImgUrl) ? require.toUrl(station.contentImgUrl) : require.toUrl('./icons/placeholder-art-album.png');
                    var track = (station.callLetters) ? station.callLetters : ' ';  // need space to force clear
                    var genre = (station.genre) ? station.genre : ' ';
                    var context = ' ';
                    // If trackUrl is set, the now playing chamber will stream audio over the internet.
                    var trackUrl = (station.trackUrl) ? require.toUrl(station.trackUrl) : null;
                    if ((isPlaying === undefined) || (isPlaying)) {
                        data = {
                                stationName: stationInfo,
                                trackTitle: track,
                                fromTitle: genre,
                                contextTitle: context,
                                trackUrl: trackUrl,
                                contentImgUrl: imageUrl,
                                backgroundImage: imageUrl,
                                defaultContentImage: imageUrl
                            };
                        self.setNowPlayingData(data, true);
                    } else {
                        data = {
                            stationName: stationInfo,
                            trackTitle: track,
                            fromTitle: genre,
                            contextTitle: context,
                            contentImgUrl: imageUrl,
                            backgroundImage: imageUrl,
                            defaultContentImage: imageUrl
                        };
                        self.setNowPlayingData(data, true);
                    }
                });
                controller.rememberStation(station, stationInfo);
            },

            restorePersistentData: function() {
                var self = this;
                this.moduleView.getController().getNowPlaying().done(function(station) {
                    self.callNowPlayingData(station);
                });
                this.moduleView.getController().getPersistentValue("hd").done(function(data){
                    var button = Control.getById("btn-hd");
                    var icon = Control.getById("display-hd");
                    if (data) {
                        icon.show();
                        button.setClasses("on");
                    } else {
                        icon.hide();
                        button.removeClasses("on");
                    }
                });
                this.moduleView.getController().getPersistentValue("TunerPlaying").done(function(isPlaying) {
                    var button = Control.getById("btn-play-pause");
                    if (isPlaying) {
                        button.setClasses("on");
                    } else {
                        button.removeClasses("on");
                    }
                });
            },

            resumed : function($super) {
                this.setHDButtons();
            }.override(),

            started : function($super) {
                this.moduleView.getController().getNowPlaying().done(function(station) {
                    this.callNowPlayingData(station);
                }.bind(this));
                return $super();
            }.override(),

            setHDButtons: function() {
                var controller = this.moduleView.getController();
                controller.getPersistentValue("hd").done(function(isHD) {
                    if (isHD) {
                        controller.getPersistentValue("hd-channel").done(function(hdChannel) {
                            Control.getById("display-hd-1").show();
                            Control.getById("display-hd-2").show();
                            Control.getById("display-hd-3").show();
                            Control.getById("display-hd-4").show();
                            Control.getById("display-hd-1").removeClasses("on");
                            Control.getById("display-hd-2").removeClasses("on");
                            Control.getById("display-hd-3").removeClasses("on");
                            Control.getById("display-hd-4").removeClasses("on");
                            if (hdChannel) {
                                Control.getById("display-hd-" + hdChannel).setClasses("on");
                            }
                        });
                    } else {
                        Control.getById("display-hd-1").hide();
                        Control.getById("display-hd-2").hide();
                        Control.getById("display-hd-3").hide();
                        Control.getById("display-hd-4").hide();
                    }
                });
            },

            activate: function($super, data) {
                var controller = this.moduleView.getController();
                var _this = this;
                if (data) {
                    if (data.get !== undefined) {
                        var frequency = data.get("frequency");
                        if (frequency) {
                            controller.setCurrentStation(frequency).done(function() {
                                controller.getNowPlaying().done(function(station) {
                                    _this.callNowPlayingData(station);
                                });
                            });
                        }
                    }
                }
                return $super();
            }.override()

        }
    );

});
