/**
 * Tuner API
 * @module common/platform/TunerAPI
 */
define(function(require) {
    'use strict';

    var Class           = require("common/Class"),
        GPSLocationAPI  = require('common/platform/GPSLocationAPI'),
        PlatformAPI     = require("common/platform/PlatformAPI"),
        PersistAPI      = require('common/platform/PersistAPI'),
        Stations        = require('text!$MODULE_PATH/stations.json'),
        Promise         = require('common/lib/Promise');

    var initializePromise;
    var isHardwarePresent = false;

    var success = true;
    var scanning = false;
    var turnScanOn = false;

    var arrPlayableStations=[];

    var currentFrequency;
    var currentStationIdx = 0;
    var currentPlayState;

    //this variable might work better in the stations.json - there it can be adjusted for radio strength in the local area
    var signalThreshold = 500;

    // GPSLocation object available to this module
    var gpsLocation;
    // This sets up the self-updating gpsLocation object
    var setupLocation = function() {
        Log.debug("setupLocation");
        var promise = new Promise();
        gpsLocation = new GPSLocationAPI();
        gpsLocation.init().done(function(){
            Log.debug("ServiceFetch location initialized: gpsPosition = "+gpsLocation.getLatitude()+", "+gpsLocation.getLongitude());
            promise.resolve();
        });
        gpsLocation.subscribe(GPSLocationAPI.Event.CHANGED, function(model) {
            // If the GPS location changes, it will be reported here.
            Log.debug("ServiceFetch location changed: gpsPosition",model);
        });
        return promise;
    };

    var TunerAPI = Class.create(
        PlatformAPI,
        {
            /**
             * @constructor
             * opens the tuner driver
             *
             * @returns {module:common/lib/Promise}
             */
            initialize: function($super) {
                Log.debug("TunerAPI.initialize");
                $super();
                this.persist = new PersistAPI();
                this.arrPlayableStations = JSON.parse(Stations);
                setupLocation();
                // var _this = this;
                /* Why would we care about real hardware?
                initializePromise = this.exec.apply(this,['Tuner.open'].concat(Array.prototype.slice.call(arguments)));
                initializePromise.done(function() {
                    isHardwarePresent = true;
                    _this.setMute(false); // make sure audio begins audible
                }).error(function(message) {
                    if (message == 'Tuner already open') {
                        isHardwarePresent = true;
                    } else {
                        isHardwarePresent = false;
                    }
               });
               */
               initializePromise = Promise.wrap();
               isHardwarePresent = false;
            },

            /**
             * Returns the capabilities of the underlying hardware or simulator.
             *
             * @returns {module:common/lib/Promise}
             */
            getCapabilities: function() {
                var promise = new Promise();
                initializePromise.always(function() {
                    if (isHardwarePresent) {
                        promise.resolve({
                            hasHD:      false,
                            hasMemory:  false,
                            hasFavorite:false,
                            hasScan:    false,
                            hasRDS:		true,
                            hasAudio:	true
                        });
                    } else {
                        promise.resolve({
                            hasHD:      true,
                            hasMemory:  true,
                            hasFavorite:true,
                            hasScan:    true,
                            hasRDS:		false,
                            hasAudio:	false
                       });
                    }
                });
                return promise;
            },

            /**
             * Gets the current radio band ("AM", "FM").
             *
             * @returns {module:common/lib/Promise}
             *  - the current band (string)
             */
            getBand: function() {
                Log.debug("TunerAPI.getBand");
                var promise = new Promise();
                var returnVal="FM"; //would come from driver
                if (returnVal !== "") {
                    promise.resolve(returnVal);
                } else {
                    promise.reject("Error - getBand");
                }
                return promise;
            },

            /**
             * Sets the current radio band
             *
             * @param {string} [band="AM"] The desired radio band ("AM", "FM", etc.)
             *
             * @returns {module:common/lib/Promise}
             *  - the band you requested for confirmation (string)
             */
            setBand: function(band) {
                Log.debug("TunerAPI.setBand");
                var promise = new Promise();
                //success = performOperation()
                if (success) {
                    promise.resolve(band);
                } else {
                    promise.reject("Error - setBand");
                }
                return promise;
            },

            /**
             * Gets the available stations list
             *
             * @returns {module:common/lib/Promise}
             *  - a comma-delimited list Station, Frequency, Genre
             */
            getStationList: function() {
                Log.debug("TunerAPI.getStationList");
                var promise = new Promise();
                var arrPlayableStations=this.getArrPlayableStations();
                if (arrPlayableStations[0] !== null ) {
                    promise.resolve(arrPlayableStations);
                } else {
                    promise.reject("Error returning arrPlayableStations");
                }
                return promise;
            },

            /**
            * Gets the current station information
            *
            * @returns {module:common/lib/Promise}
            *   - Returns a structure with frequency (this gets divided by 1000000 to convert to MHz)
            */
            getCurrentStation: function() {
                Log.debug("TunerAPI.getCurrentStation");
                var promise = new Promise();
                var _this = this;
                initializePromise.always(function() {
                    if (isHardwarePresent) {
                        _this.exec.apply(_this,['Tuner.getStation'].concat(Array.prototype.slice.call(arguments)))
                            .done(function(response) {
                                currentFrequency = response.frequency / 1000000;
                                promise.resolve({
                                    frequency   : response.frequency / 1000000,  // convert to MHz
                                    signal      : response.signal,
                                    stereo      : response.stereo
                                });
                            }).error(function(message) {
                                promise.reject(message);
                            });
                    } else {
                        promise.resolve({
                            frequency   : currentFrequency,
                            signal      : 1000, // fake
                            stereo      : true  // fake
                        });
                    }
                });
                return promise;
            },

             /**
            * Sets the current volume
            *
            * @param {integer} [volume=80] The desired volume as percent of 100%, i.e 80(%)
            *
            * @returns {module:common/lib/Promise}
            *   - returns volume you passed
            */
            setVolume: function(volume) {
                Log.debug("Entering setVolume");
                var promise = new Promise();
                if (isHardwarePresent) {
                    this.exec.apply(this,['Tuner.setVolume'].concat(Array.prototype.slice.call(arguments))).done(function() {
                        promise.resolve(volume);
                    }).error(function(message) {
                        promise.reject(message);
                    });
                } else {
                    promise.resolve(volume);
                }
                return promise;
            },

             /**
            * Sets the mute state (true/false)
            *
            * @param {boolean} [muteOn=true] Set mute on (true) or off (false)
            *
            * @returns {module:common/lib/Promise}
            *   - returns muteOn parameter
            */
            setMute: function(muteOn) {
                Log.debug("TunerAPI.setMute");
                var promise = new Promise();
                if (isHardwarePresent) {
                    this.exec.apply(this,['Tuner.setMute'].concat(Array.prototype.slice.call(arguments))).done(function() {
                        promise.resolve(muteOn);
                    }).error(function(message) {
                        promise.reject(message);
                    });
                } else {
                    promise.resolve(muteOn);
                }
                return promise;
            },

           /**
            * Gets Now Playing information
            *
            * @returns {module:common/lib/Promise}
            *   - returns a structure with station name, genre, frequency, track and artist (all strings)
            */
            getNowPlaying: function() {
                Log.debug("TunerAPI.getNowPlaying");
                var promise = new Promise();
                var _this = this;
                var station = {};
                initializePromise.always(function() {
                    _this.getBand().done(function(band) {
                        if (isHardwarePresent) {
                            _this.getCurrentStation().done(function(rv) {
                                station.band = band;
                                station.frequency = rv.frequency;
                                station.callLetters = '';
                                station.genre = '';
                                promise.resolve(station);
                            }).error(function(message) {
                                promise.reject(message);
                            });
                        } else {
                            var arrStations = _this.getArrPlayableStations();
                            if (currentFrequency) {
                                station.band = band;
                                station.frequency = currentFrequency;
                                station.callLetters = '';
                                station.genre = '';
                                for (var i = 0; i < arrStations.length; i++) {
                                    if (String(arrStations[i].frequency) == String(currentFrequency)) {
                                        currentStationIdx = i;
                                        currentFrequency = arrStations[i].frequency;
                                        station.callLetters = arrStations[i].callLetters;
                                        station.genre = arrStations[i].genre;
                                        station.contentImgUrl = arrStations[i].contentImgUrl;
                                        station.trackUrl = arrStations[i].trackUrl;
                                        break;
                                    }
                                }
                                promise.resolve(station);
                            } else {
                                Log.debug("Defaulting to first station.");
                                station.band = "FM";
                                station.frequency = arrStations[0].frequency;
                                station.callLetters = arrStations[0].callLetters;
                                station.genre = arrStations[0].genre;
                                station.contentImgUrl = arrStations[0].contentImgUrl;
                                station.trackUrl = arrStations[0].trackUrl;
                                currentStationIdx = 0;
                                currentFrequency = station.frequency;
                                setTimeout(function(){
                                    promise.resolve(station);
                                }, 500);

                            }
                        }
                    });
                });
                return promise;
            },

            /**
             * Starts the radio audio stream
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Started"
             */
            startStream: function() {
                Log.debug("TunerAPI.startStream");
                var promise = new Promise();
                if (isHardwarePresent) {
                    this.setMute(false).done(function() {
                        currentPlayState = "Started";
                        promise.resolve("Started");
                    }).error(function(message) {
                        promise.reject(message);
                    });
                } else {
                    currentPlayState = "Started";
                    promise.resolve("Started");
                }
                return promise;
            },

            /**
             * Stops the radio audio stream
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Stopped"
             */
            stopStream: function() {
                Log.debug("TunerAPI.stopStream");
                var promise = new Promise();
                if (isHardwarePresent) {
                    this.setMute(true).done(function() {
                        currentPlayState = "Stopped";
                        promise.resolve("Stopped");
                    }).error(function(message) {
                        promise.reject(message);
                    });
                } else {
                    currentPlayState = "Stopped";
                    promise.resolve("Stopped");
                }
                return promise;
            },

            /**
             * Seek to previous station
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Previous station" but should eventually return new frequency
             */
            seekPreviousStation: function() {
                Log.debug("TunerAPI.seekPreviousStation");
                var promise = new Promise();
                var _this = this;
                if (isHardwarePresent) {
                    var parameters = [
                        false,  // upward
                        true,   // wrap
                    ];
                    this.exec.apply(this,['Tuner.seekFrequency'].concat(Array.prototype.slice.call(parameters)))
                        .done(function(response) {
                            promise.resolve({
                                band: "FM",
                                frequency: response.frequency / 1000000,  // convert to MHz
                                callLetters: '',
                                genre: ''
                            });
                        }).error(function(message) {
                            promise.reject(message);
                        });
                } else {
                    var arrStations = _this.getArrPlayableStations();
                    currentStationIdx = currentStationIdx - 1;
                    if (currentStationIdx < 0) {
                        currentStationIdx = arrStations.length - 1;
                    }
                    currentFrequency = arrStations[currentStationIdx].frequency;
                    promise.resolve(arrStations[currentStationIdx]);
                }
                return promise;
            },

            /**
             * Seek to next station
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Next station" but should eventually return new frequency
             */
            seekNextStation: function() {
                Log.debug("TunerAPI.seekNextStation");
                var promise = new Promise();
                if (isHardwarePresent) {
                    var parameters = [
                        true,   // upward
                        true,   // wrap
                    ];
                    this.exec.apply(this,['Tuner.seekFrequency'].concat(Array.prototype.slice.call(parameters)))
                        .done(function(response) {
                            promise.resolve({
                                band: "FM",
                                frequency: response.frequency / 1000000,  // convert to MHz
                                callLetters: '',
                                genre: ''
                            });
                        }).error(function(message) {
                            promise.reject(message);
                        });
                } else {
                    var arrStations = this.getArrPlayableStations();
                        currentStationIdx = parseInt(currentStationIdx) + 1;
                        if (currentStationIdx > arrStations.length - 1) {
                            currentStationIdx = 0;
                        }
                        currentFrequency = arrStations[currentStationIdx].frequency;
                        promise.resolve(arrStations[currentStationIdx]);
                }
                return promise;
            },

            /**
             * Gets the current status
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Status" but this will be replaced with true status info
             */
            getStatus: function() {
                Log.debug("TunerAPI.getStatus");
                var promise = new Promise();
                var returnVal = "Status"; //would come from driver
                if (returnVal !== "") {
                    promise.resolve(returnVal);
                } else {
                    promise.reject("Error");
                }
                return promise;
            },

            /**
             * Set Auto-Memory
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Auto Memory set" but this will be replaced with more apt info
             */
            setAutoMemory: function() {
                Log.debug("TunerAPI.setAutoMemory");
                var promise = new Promise();
                var arrStations = this.getArrPlayableStations();
                if (success) {
                    promise.resolve(arrStations);
                } else {
                    promise.reject("Error");
                }
                return promise;
            },

            /**
             * Set HD
             *
             * @returns {module:common/lib/Promise}
             *  - returns "HD set"
             */
            setHD: function() {
                Log.debug("TunerAPI.setHD");
                var promise = new Promise();
                //success = performOperation()
                if (success) {
                    promise.resolve("HD set");
                } else {
                    promise.reject("Error");
                }
                return promise;
            },

            /**
             * Set Tag
             *
             * @returns {module:common/lib/Promise}
             *  - returns "Tag set"
             */
            setTag: function() {
                Log.debug("TunerAPI.setTag");
                var promise = new Promise();
                //success = performOperation()
                if (success) {
                    promise.resolve("Tag set");
                } else {
                    promise.reject("Error");
                }
                return promise;
            },

            /**
             * Sets the current station
             *
             * @param {integer} [frequency=88.5] The desired radio frequency.  This is converted from MHz to Hz
             *
             * @returns {module:common/lib/Promise}
             *  - returns the frequency you passed
             */
            setCurrentStation: function(frequency) {
                Log.debug("TunerAPI.setCurrentStation",frequency);
                var promise = new Promise();
                var i;
                if (isHardwarePresent) {
                    var parameters = [
                        parseInt(frequency * 1000000) // convert from MHz to Hz
                    ];
                    this.exec.apply(this,['Tuner.setFrequency'].concat(Array.prototype.slice.call(parameters)))
                        .done(function(response) {
                            promise.resolve(frequency);
                        }).error(function(message) {
                            promise.reject(message);
                        });
                } else {
                    var arrStations = this.getArrPlayableStations();
                    var foundIt = false;
                    for (i=0; i<arrStations.length-1; i++) {
                        if (arrStations[i].frequency == frequency) {
                            foundIt = true;
                            break;
                        }
                    }
                    var station;
                    if (foundIt) {
                        station = arrStations[i];
                    } else {
                        station = {
                            band: "FM",
                            frequency: frequency,
                            callLetters: '',
                            genre: ''
                        };
                    }
                    currentStationIdx = i;
                    currentFrequency = frequency;
                    promise.resolve(station);
                }
                return promise;
            },

            /**
             * Set Scan Sim
             *      to simulate scanning, this returns a list of playable stations derived by parsing the stations.json file
             *
             * @returns {module:common/lib/Promise}
             *  - returns the array of playable stations
             */
            setScanSim: function() {
                var promise = new Promise();
                var arrStations = this.getArrPlayableStations();
                if (success) {
                    promise.resolve(arrStations);
                } else {
                    promise.reject("Error");
                }
                return promise;
            },

            /**
             * Set Scan
             *
             * @returns {module:common/lib/Promise}
             *  - returns the array of playable stations
             */
            setScan: function(currentFrequency,scanClicked,scanType) {
                Log.debug("TunerAPI.setScan","scanClicked",scanClicked);
                turnScanOn = scanClicked;
                var minFrequency = 88.1;
                if (currentFrequency !== "") {
                    minFrequency = currentFrequency;
                }
                var maxFrequency = 107.7;
                arrPlayableStations=getArrPlayableStations();
                arrPlayableStations.length = 0;
                var ct = 0;
                return this.scanFrequency(minFrequency, minFrequency, maxFrequency, ct, scanType);
            },

            /**
             * Recursive procedure to move thru the dial looking for signal strength greater than 10000.
             *
             * @returns {module:common/lib/Promise}
             *      - returns an array of playable stations
             */
            scanFrequency: function(currentFrequency, minFrequency, maxFrequency, ct, scanType) {
                Log.debug("scanFrequency","scanning",scanning,"turnScanOn",turnScanOn);
                var promise = new Promise();
                promise.resolve();
                promise = promise.then(function() {
                    return this.setCurrentStation(currentFrequency);
                }.bind(this)).then(function() {
                    return this.getCurrentStation();
                }.bind(this)).then(function(data) {
                    ct++;
                    currentFrequency *= 10;
                    minFrequency *= 10;
                    if (scanType == "NEXT") {
                        currentFrequency += 2;
                        if ((data.signal>signalThreshold) && ((scanning) && (turnScanOn)))  {
                            promise.resolve(data.frequency);
                            return promise;
                        } else {
                            scanning = true;
                            return this.scanFrequency(currentFrequency / 10, minFrequency / 10, maxFrequency, ct, scanType);
                        }
                    } else {
                        maxFrequency *= 10;
                        currentFrequency += 2;
                        if (data.signal > signalThreshold) {
                           arrPlayableStations.push(data.frequency);
                        }
                        scanning = true;
                        if ((currentFrequency <= maxFrequency) && (turnScanOn)) {
                            return this.scanFrequency(currentFrequency / 10, minFrequency / 10, maxFrequency / 10, ct, scanType);
                        } else {
                            scanning = false;
                            promise.resolve(arrPlayableStations);
                        }
                    }
                }.bind(this));
                return promise;
            },

            // Utility functions for TunerAPI - the persistent layer operations will be moved to the app

            /**
             * Returns the array of playable stations.
             *
             * @returns array of playable stations
             */
            getArrPlayableStations : function() {
                return this.arrPlayableStations;
            },

            /**
             * Returns the Current Station Index.
             *
             * @returns integer of array index
             */
            getCurrentStationIdx : function() {
                return currentStationIdx;
            },

            /**
             * Returns the Current Frequency.
             *
             * @returns current tuner frequency
             */
            getCurrentFrequency : function() {
                return currentFrequency;
            },

            /**
             * Returns the default Frequency.
             *
             * @returns default tuner frequency
             */
            getDefaultFrequency : function() {
                return this.arrPlayableStations[0].frequency;
            },

            /**
             * Returns the Current Frequency.
             *
             * @returns current tuner frequency
             */
            getCurrentPlayState : function() {
                return currentPlayState;
            },

             /**
             * Returns the lat/lng coordinates of current location
             *
             * @returns data.lat, data.lng
             */
            getLocation: function() {
                var gpsLocation = new GPSLocationAPI(),
                    promise = new Promise();
                gpsLocation.init().done(function() {
                Log.debug("LAT / LONG: " + gpsLocation.getLatitude() + ", " + gpsLocation.getLongitude());
                    promise.resolve({
                        latitude: gpsLocation.getLatitude(),
                        longitude: gpsLocation.getLongitude()
                    });
                });
                return promise;
            }

        }
    );

    return TunerAPI;
});
