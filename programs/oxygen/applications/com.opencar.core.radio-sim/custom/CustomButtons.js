define(function(require) {
    'use strict';

    var Control         = require('common/ui/Control'),
        Dialog          = require('common/ui/Dialog'),
        DialogConfig    = require('common/ui/dialogs/DialogConfig');

    var dialogConfig;
    var tunerHasAudio;

    return ({

        onAudioSettings : function() {
            this.scanStop();
            dialogConfig = new DialogConfig.InfoDialog({
                text : 'Native audio settings unavailable.',
                hide : function(ev, control, status){
                    console.log("dismissed with status", status);
                }
            }).timeout(1000).build();
            var dialog = new Dialog(dialogConfig);
            dialog.show();
            //this.goto("chamber-audio-settings");
        },

        onAutoMemory : function() {
            this.scanStop();
            var self = this;
            var button = Control.getById("btn-memory");
            button.setClasses("on");
            var controller=this.moduleView.getController();
            controller.setAutoMemory().done(function(arrStations) {
                Control.getById("streaming-indicator").set("text", "Populating Auto Memory... ");
                // To do: timeout for simulated scan should be pushed down into TunerAPI simulator
                setTimeout(function(v) {
                    var rv="";
                    for (var i=0; i<=arrStations.length-1; i++) {
                        rv = rv + arrStations[i].frequency;
                        if (i<arrStations.length-1) {
                            rv = rv + ",";
                        }
                        Control.getById("streaming-indicator").set("text", "Live...");
                    }
                    if (i>=arrStations.length-1) {
                        Control.getById("streaming-indicator").set("text", "Live...");
                        button.removeClasses("on");
                        self.goto("chamber-listmemory");
                    }
                }, 3000);
            });
        },

        onFavorite : function() {
            this.scanStop();
            var controller = this.moduleView.getController();
            var self = this;
            controller.getCurrentStation().done(function(station) {
                controller.saveFave(station);
                self.goto("chamber-listfaves");
            });
        },

        onHD : function() {
            this.scanStop();
            var button = Control.getById("btn-hd");
            var icon = Control.getById("display-hd");
            var self = this;
            var controller = this.moduleView.getController();
            controller.getPersistentValue("hd").done(function(isHD) {
                isHD = !isHD;
                controller.setPersistentValue("hd",isHD).done(function() {
                    controller.setHD(!icon.isVisible()).done(function(rv) {
                        icon.toggle();
                        if (icon.isVisible()) {
                            button.setClasses("on");
                        } else {
                            button.removeClasses("on");
                        }
                        self.setHDButtons();
                    });
                });
            });
        },

        onPlayPause : function() {
            Log.debug("CustomButtons.onPlayPause");
            this.scanStop();
            var self = this;
            var button = Control.getById("btn-play-pause");
            var controller = this.moduleView.getController();
            if (button.getFocusElement().classList.contains("on")) {
                Control.getById("streaming-indicator").set("text","Stopped");
                controller.stopStream().done(function(rv) {
                    if (!tunerHasAudio) {
                        self.stop(); // use inherited streaming capability rather than tuner
                    }
                    controller.setPersistentValue("TunerPlaying",false).done(function() {
                        controller.getNowPlaying().done(function(station) {
                            self.callNowPlayingData(station);
                        });
                        //button.removeClasses("on");
                    });
                });
            } else {
                Control.getById("streaming-indicator").set("text", "Live...");
                controller.startStream().done(function(rv) {
                    if (!tunerHasAudio) {
                        self.start(); // use inherited streaming capability rather than tuner
                    }
                    controller.setPersistentValue("TunerPlaying",true).done(function() {
                        controller.getNowPlaying().done(function(station) {
                            self.callNowPlayingData(station);
                        });
                        //button.setClasses("on");
                    });
                });
            }
        },

        onScan : function() {
            Log.debug("CustomButtons.onScan");
            var self = this;
            var controller = this.moduleView.getController();
            this.stopScan = !this.stopScan;
            if (this.stopScan) {
                this.scanStop();
                return;
            }
            var button = Control.getById("btn-scan");
            if (!this.stopScan) {
                button.setClasses("on");
            } else {
                button.removeClasses("on");
            }
            // Simulated scan for now
            controller.setScanSim().done(function(arrStations) {
                controller.getPersistentValue("currentStationIdx").done(function(currentStationIdx) {
                    self.scanNext(arrStations, currentStationIdx, this.stopScan);
                });
            });
        },

        onTune : function() {
            this.scanStop();
            var controller = this.moduleView.getController();
            controller.stopRDS();
            var _this = this;
            controller.getDefaultFrequency().done(function(defaultFreq) {
                controller.getNowPlaying().done(function(station) {
                    var frequency = (station.frequency) ? station.frequency : defaultFreq;
                    _this.goto("chamber-radio-dialer", frequency);
                });
            });
        },

        onScanSim : function() {
            this.scanStop();
            var self = this;
            var controller = this.moduleView.getController();
            controller.setScanSim().done(function(arrStations) {
                self.scanNext(arrStations, 0);
            }.bind(this));
        },

        onSeekNext : function() {
            this.scanStop();
            var controller = this.moduleView.getController();
            var button = Control.getById("btn-seek-next");
            button.setClasses("on");
            controller.seekNext().done(function(rv) {
                controller.showResult(rv);
                button.removeClasses("on");
            }).error(function(message) {
                button.removeClasses("on");
            });
        },

        onSeekPrevious : function() {
            this.scanStop();
            var controller = this.moduleView.getController();
            var button = Control.getById("btn-seek-previous");
            button.setClasses("on");
            controller.seekPrevious().done(function(rv) {
                controller.showResult(rv);
                button.removeClasses("on");
            }).error(function(message) {
                button.removeClasses("on");
            });
        },

        onTag : function() {
            this.scanStop();
            var controller = this.moduleView.getController();
            controller.setTag().done(function(rv) {
                controller.getPersistentValue("Key1").done(function(rv) {
                    if (rv) {
                        Control.getById("streaming-indicator").set("text", rv + " (Persist)").show();
                    } else {
                        Control.getById("streaming-indicator").set("text", "Can't find persist value.").show();
                    }
                });
            });
        },


        /**
         * This method is called when this module is activated.
         * The 'this' reference is to the NowPlayingChamber.
         */
        init: function() {
            // Hide unavailable features
            // these flags can be changed in TunerAPI.getCapabilities
            var self = this;
            var controller = this.moduleView.getController();
            controller.getCapabilities().done(function(capabilities) {
                Control.getById("btn-tune").show();
                Control.getById("btn-seek-previous").show();
                Control.getById("btn-seek-next").show();
                Control.getById("btn-play-pause").show();
                Control.getById("btn-audio-settings").show();
                if (!capabilities.hasHD) {
                    Control.getById("btn-hd").set('disabled', true).hide();
                    //Control.getById("display-hd").hide();
                    controller.setPersistentValue("hd", false);
                } else {
                    Control.getById("btn-hd").set('disabled', false).show();
                    //Control.getById("display-hd").show();
                }
                if (!capabilities.hasMemory) {
                    Control.getById("btn-memory").set('disabled', true).hide();
                } else {
                    Control.getById("btn-memory").set('disabled', false).show();
                }
                if (!capabilities.hasFavorite) {
                    Control.getById("btn-favorite").set('disabled', true).hide();
                } else {
                    Control.getById("btn-favorite").set('disabled', false).show();
                }
                if (!capabilities.hasScan) {
                    Control.getById("btn-scan").set('disabled', true).hide();
                } else {
                    Control.getById("btn-scan").set('disabled', false).show();
                }
                tunerHasAudio = capabilities.hasAudio;
                self.setHDButtons();
            });
            this.moduleView.getController().getPersistentValue("hd").done(function(isHD){
                var button = Control.getById("btn-hd");
                var icon = Control.getById("display-hd");
                if (isHD) {
                    button.setClasses("on");
                    if (!icon.isVisible()) {
                        icon.toggle();
                    }
                } else {
                    button.removeClasses("on");
                    if (icon.isVisible()) {
                        icon.toggle();
                    }
                }
            });
            var button = Control.getById("btn-play-pause");
            if (button) {
                button.setClasses("on");
            }
        }

    });
});
