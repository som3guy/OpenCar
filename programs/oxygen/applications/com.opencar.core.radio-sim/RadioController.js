define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Http                = require('common/Http'),
        Stations            = require('text!$MODULE_PATH/stations.json'),
        AudioAppController  = require('common/appbase/1.1/audio/controller'),
        TrackListenLogger   = require('$MODULE_PATH/custom/TrackListenLogger'),
        VehicleName         = require('vehicle-profiles/VehicleName'),
        Promise             = require('common/lib/Promise'),
        TunerEvent          = require('$MODULE_PATH/TunerEvent'),
        TunerAPI            = require('$MODULE_PATH/FakeTunerAPI'),
        PersistAPI          = require('common/platform/PersistAPI');

    var aFaves = [];

    return Class.create(
        AudioAppController,
        {
            init : function($super) {
                this.persistAPI = new PersistAPI(this.getContext());
                this.tunerAPI = new TunerAPI();
                this.trackListenLogger = new TrackListenLogger();
                this.stationInfo = '';
                this.arrPlayableStations = JSON.parse(Stations);
                this.setPersistentValue("TunerPlaying",true);
                this.loadFaves();
                return $super();
            }.override(),

            beforeStart : function($super) {
                //use this block to test the RDS call letter translation
                //15019 s/b KQED
                //18863 s/b KVVC
                //5892 s/b KCRC
                //11820 s/b KLLC
                //var v = this.getCallLetters(11820);
                //Log.debug("CALL LETTERS",v)
                this.startRDS();
                return $super();
            }.override(),

            started: function($super) {
                return $super();
            }.override(),

            beforeStop: function($super) {
                var view = this.getView();
                this.tunerAPI.stopStream().done(function() {
                    view.setPause();
                });
                this.stopRDS();
                return $super();
            }.override(),

            getChannels : function() {
                var aChannels = [];
                var a = this.tunerAPI.getArrPlayableStations();
                for (var i = 0; i < a.length - 1; i++) {
                    aChannels.push({
                        frequency: a[i].frequency,
                        text: a[i].frequency + " " + a[i].callLetters,
                        icon: require.toUrl(a[i].contentImgUrl)
                    });
                }
                return aChannels;
            },

            getArrPlayableStations : function() {
                return this.arrPlayableStations;
            },

            getPlatform : function() {
                var promise = new Promise();
                VehicleName.get(function(vehicleName) {
                    promise.resolve(vehicleName);
                });
                return promise;
            },

            getCapabilities: function() {
                return this.tunerAPI.getCapabilities();
            },

            getCurrentStation: function() {
                return this.tunerAPI.getCurrentStation();
            },

            getLocation : function() {
                return this.tunerAPI.getLocation();
            },

            getNowPlaying : function() {
                return this.tunerAPI.getNowPlaying();
            },

            getDefaultFrequency : function() {
                return this.tunerAPI.getDefaultFrequency();
            },

            setVolume : function(volume) {
                this.persistAPI.set("volume", volume);
                return this.tunerAPI.setVolume(volume);
            },

            setMute : function(mute) {
                this.persistAPI.set("mute", mute);
                return this.tunerAPI.setMute(mute);
            },

            setAutoMemory : function() {
                return this.tunerAPI.setAutoMemory();
            },

            setTag : function() {
                return this.tunerAPI.setTag();
            },

            setHD : function(hd) {
                return this.tunerAPI.setHD();
            },

            setScan : function(currentFrequency,scanClicked) {
                return this.tunerAPI.setScan(currentFrequency,scanClicked,"SCAN");
            },

            setScanSim : function() {
                return this.tunerAPI.setScanSim();
            },

            seekPrevious : function() {
                return this.tunerAPI.seekPreviousStation();
            },

            seekNext : function() {
                return this.tunerAPI.seekNextStation();
            },

            startStream : function() {
                return this.tunerAPI.startStream();
            },

            showResult : function(objStation) {
                var view = this.getView();
                view.showResultView(objStation);
            },

            stopStream : function() {
                return this.tunerAPI.stopStream();
            },

            setCurrentStation : function(frequency) {
                return this.tunerAPI.setCurrentStation(frequency);
            },

            rememberStation : function(station, stationInfo) {
                this.station = station;
                this.stationInfo = stationInfo;
            },

            startRDS : function() {
                this.tunerAPI.subscribe(TunerEvent.RDS_EVENT, this.onRDSEvent.bind(this));
            },

            stopRDS : function() {
                // Haven't figure out how to make unsubscribe work.
                //this.tunerAPI.unsubscribe(this.onRDSEvent);
            },

            onRDSEvent : function(event) {
                Log.debug("RDS: " + JSON.stringify(event));
                if (event.PS) {
                    this.getView().updateFrom(event.PS);
                }
                if (event.RT) {
                    this.getMetadata(event.RT);
                }
                if (event.PI) {
                    var callLetters = this.getCallLetters(event.PI);
                    if (callLetters !== "" && this.station) {
                        this.stationInfo = this.station.frequency + " " + callLetters + " " + this.station.band;
                        this.getView().updateStationInfo(this.stationInfo);
                    }
                }
            },

            /*
             * Does RT field contain artist name?
             * I expect we'll need to update this for fuzzier matches after we see what kind of data comes in.
             */
            doesRtContain : function(rtField, artist) {
                if (!rtField || !artist) {
                    return false;
                }
                artist = artist.toLowerCase();
                rtField = rtField.toLowerCase();

                return (rtField.indexOf(artist) > -1);
            },

            /*
             * Return track name with unneeded info at end of track removed. Example input:
             *      Lose Yourself - Soundtrack Version
             *      Lose Yourself (Joe and Mike remix)
             */
            simplifyTrackName : function(trackName) {

                //Look for parens.
                var foundPos = trackName.indexOf('(');
                if (foundPos > 0) {
                    trackName = trackName.substring(0, foundPos);
                }

                //Look for hyphen.
                foundPos = trackName.indexOf('-');
                if (foundPos > 0) {
                    trackName = trackName.substring(0, foundPos);
                }

                return trackName.trim();
            },

            formatStationName : function(station) {
                if (!station) return "unknown";

                var band;
                if (station) {
                    if ("band" in station) {
                        band = station.band;
                    }
                }
                if (!band) { band = "FM"; }
                return station.frequency + " " + station.callLetters + " " + band;
            },

            parseSpotifyResponse : function(response, rtField) {
                var items = response.data.tracks.items;
                for (var i = 0; i < items.length; i++) {
                    var artists = items[i].artists;
                    for (var j = 0; j < artists.length; j++) {
                        if (this.doesRtContain(rtField, artists[j].name)) { //Found a match.

                            var images = items[i].album.images;
                            var albumArtUrl;
                            if (images.length > 2) {
                                albumArtUrl = images[images.length - 2].url; // get the second smallest image.
                            } else if (images.length > 0) {
                                albumArtUrl = images[0].url;
                            } else {
                                albumArtUrl = null;
                            }
                            if (albumArtUrl) albumArtUrl = albumArtUrl.replace("https", "http"); //HTTP access to URL works fine, so might as well use instead.
                            var trackName = this.simplifyTrackName(items[i].name);
                            var artistName = artists[j].name;

                            Log.debug("Parsed artist=" + artists[j].name + ", track=" + trackName + ", albumArtUrl=" + albumArtUrl);
                            var matchedInfo  = {
                                stationName: this.stationInfo,
                                trackTitle: trackName,
                                fromTitle: artistName,
                                //contextTitle: "",   //Could put album name here or leave empty.
                                contentImgUrl: albumArtUrl,
                                backgroundImage: albumArtUrl,
                                defaultContentImage: albumArtUrl
                            };
                            return matchedInfo;
                        }
                    }
                }
                return null; //No match found.
            },

            getMetadata: function(rtField) {
                if (!rtField) return; //Save work if passed in value is empty.
                var self = this;
                var searchUrl = "https://api.spotify.com/v1/search?q=" + encodeURIComponent(rtField.trim()) + "&type=track";
                Http.ajax({
                    url: searchUrl,
                    success: function(response) {
                        var matchedInfo = self.parseSpotifyResponse(response, rtField);
                        if (!matchedInfo) {
                            //Try to return something useful despite failed parse.
                            var trackName = self.simplifyTrackName(rtField);
                            matchedInfo = {
                                stationName: self.stationInfo,
                                trackTitle: trackName, //Will likely show in "artist + track" format.
                                fromTitle: '',
                                contextTitle: '',
                                contentImgUrl: null,
                                backgroundImgUrl: null,
                                defaultContentImage: null
                            };
                        }
                        self.getView().updateMetadata(matchedInfo);
                        self.getLocation().done(function(location) {
                            self.trackListenLogger.post(matchedInfo.trackTitle, matchedInfo.fromTitle, self.stationInfo, location);
                        });
                        Log.debug(response);
                    },
                    error: function(response) {
                        Log.error('Failed request to ' + searchUrl);
                        Log.debug(response);
                    }
                });
            },

            getPersistentValue : function(key) {
                var promise = new Promise();
                var persistAPI = new PersistAPI();
                persistAPI.get(key).done(function(value) {
                //Log.debug("controller.getPersistentValue",key,value)
                    if (value !== null) {
                        promise.resolve(value);
                    } else {
                        // Finished successfully but didn't return value.
                        promise.resolve("");
                    }
                }.bind(this)).error(function(error) {
                    // Didn't finish successfully.
                    promise.reject("Error from controller.getPersistentValue");
                }.bind(this));
                return promise;
            },

            setPersistentValue : function(key,value) {
                //Log.debug("controller.setPersistentValue",key,value);
                var promise = new Promise();
                var persistAPI = new PersistAPI();
                if (typeof value !== "undefined") {
                    persistAPI.set(key, value).done(function() {
                        promise.resolve();
                    }.bind(this)).error(function(error) {
                        // Didn't finish successfully.
                        promise.reject("Error from controller.getPersistentValue");
                    }.bind(this));
                }
                return promise;
            },

            faveExists : function(fave) {
                //check to make sure this frequency isn't already loaded
                var foundIt = false;
                for (var j = 0; j < aFaves.length; j++) {
                    if ((fave.frequency) && (aFaves[j].text)) {
                        if (aFaves[j].frequency == fave.frequency) {
                            foundIt = true;
                            break;
                        }
                    }
                }
                return foundIt;
            },

            getFaves : function() {
                return aFaves;
            },

            loadFaves : function() {
                var _this = this;
                var pushFav = function() {
                    return function(fave) {
                        if (!_this.faveExists(fave)) {
                            aFaves.push(fave);
                        }
                    };
                };
                this.getPersistentValue("faveCt").done(function(faveCt) {
                    for (var i = 0; i < faveCt; i++) {
                        _this.getPersistentValue("fave_" + i).done(pushFav());
                    }
                });
            },

            saveFave : function(station) {
                if (!this.faveExists(station)) {
                    var a = this.arrPlayableStations;
                    var foundIt = false;
                    for (var i = 0; i < a.length; i++) {
                         if (a[i].frequency == station.frequency) {
                            aFaves.push({
                                frequency: station.frequency,
                                text: a[i].frequency + " " + a[i].callLetters,
                                icon: require.toUrl(a[i].contentImgUrl)
                            });
                            foundIt = true;
                         }
                    }
                    if (!foundIt) {
                        aFaves.push({
                            frequency: station.frequency,
                            text: station.frequency.toString(),
                            icon: require.toUrl('./icons/placeholder-art-album.png')
                        });
                    }
                    this.setPersistentValue("faveCt", aFaves.length);
                    for (i = 0; i < aFaves.length; i++) {
                        if (aFaves[i]) {
                            this.setPersistentValue("fave_" + i, aFaves[i]);
                        }
                    }
                }
            },

            getCallLetters : function(decPI) {
                var hexPI = decPI.toString(16);
                return this.RDSCall(hexPI);
            },

            RDSCall : function(picode) {
                var part1,part2,part3;
                var code;
                var csign,csign2,csign3,csign4;
                var call1,call2,call3,call4;

                picode = picode.toUpperCase();
                if (picode.substr(0,2)=="AF") {
                    part1=picode.substr(2,2);
                    part2="00";
                    picode=part1+part2;
                }
                if (picode.substr(0,1)=="A") {
                    part1=picode.substr(1,1);
                    part2="0";
                    part3=picode.substr(2,2);
                    picode=part1+part2+part3;
                }
                picode=this.hex2dec(picode);
                csign="Bad code";
                if (picode>4095) {
                    if (picode<39247) {
                        if (picode>21671) {
                            call1="W";
                            code=picode-21672;
                        } else {
                            call1="K";
                            code=picode-4096;
                        }
                        call2=this.getfloor(code/676);
                        code=code-(676*call2);
                        call3=this.getfloor(code/26);
                        call4=code-(26*call3);
                        csign2=this.chx(call2+65);
                        csign3=this.chx(call3+65);
                        csign4=this.chx(call4+65);
                        csign=call1+csign2+csign3+csign4;
                    }
                }
                switch(picode) {
                    case 49829: csign="CIMF"; break;
                    case 17185: csign="CJPT"; break;
                    case 39248: csign="KEX"; break;
                    case 39249: csign="KFH"; break;
                    case 39250: csign="KFI"; break;
                    case 39251: csign="KGA"; break;
                    case 39252: csign="KGO"; break;
                    case 39253: csign="KGU"; break;
                    case 39254: csign="KGW"; break;
                    case 39255: csign="KGY"; break;
                    case 39256: csign="KID"; break;
                    case 39257: csign="KIT"; break;
                    case 39258: csign="KJR"; break;
                    case 39259: csign="KLO"; break;
                    case 39260: csign="KLZ"; break;
                    case 39261: csign="KMA"; break;
                    case 39262: csign="KMJ"; break;
                    case 39263: csign="KNX"; break;
                    case 39264: csign="KOA"; break;
                    case 39268: csign="KQV"; break;
                    case 39269: csign="KSL"; break;
                    case 39270: csign="KUJ"; break;
                    case 39271: csign="KVI"; break;
                    case 39272: csign="KWG"; break;
                    case 39275: csign="KYW"; break;
                    case 39277: csign="WBZ"; break;
                    case 39278: csign="WDZ"; break;
                    case 39279: csign="WEW"; break;
                    case 39281: csign="WGL"; break;
                    case 39282: csign="WGN"; break;
                    case 39283: csign="WGR"; break;
                    case 39285: csign="WHA"; break;
                    case 39286: csign="WHB"; break;
                    case 39287: csign="WHK"; break;
                    case 39288: csign="WHO"; break;
                    case 39290: csign="WIP"; break;
                    case 39291: csign="WJR"; break;
                    case 39292: csign="WKY"; break;
                    case 39293: csign="WLS"; break;
                    case 39294: csign="WLW"; break;
                    case 39297: csign="WOC"; break;
                    case 39299: csign="WOL"; break;
                    case 39300: csign="WOR"; break;
                    case 39304: csign="WWJ"; break;
                    case 39305: csign="WWL"; break;
                    case 39312: csign="KDB"; break;
                    case 39313: csign="KGB"; break;
                    case 39314: csign="KOY"; break;
                    case 39315: csign="KPQ"; break;
                    case 39316: csign="KSD"; break;
                    case 39317: csign="KUT"; break;
                    case 39318: csign="KXL"; break;
                    case 39319: csign="KXO"; break;
                    case 39321: csign="WBT"; break;
                    case 39322: csign="WGH"; break;
                    case 39323: csign="WGY"; break;
                    case 39324: csign="WHP"; break;
                    case 39325: csign="WIL"; break;
                    case 39326: csign="WMC"; break;
                    case 39327: csign="WMT"; break;
                    case 39328: csign="WOI"; break;
                    case 39329: csign="WOW"; break;
                    case 39330: csign="WRR"; break;
                    case 39331: csign="WSB"; break;
                    case 39332: csign="WSM"; break;
                    case 39333: csign="KBW"; break;
                    case 39334: csign="KCY"; break;
                    case 39335: csign="KDF"; break;
                    case 39338: csign="KHQ"; break;
                    case 39339: csign="KOB"; break;
                    case 39347: csign="WIS"; break;
                    case 39348: csign="WJW"; break;
                    case 39349: csign="WJZ"; break;
                    case 39353: csign="WRC"; break;
                    case 26542: csign="WHFI/CHFI"; break;
                    case 39250: csign="KFI/CJBC"; break;
                    case 49160: csign="CJBC-1"; break;
                    case 49158: csign="CBCK"; break;
                    case 52010: csign="CBLG"; break;
                    case 52007: csign="CBLJ"; break;
                    case 52012: csign="CBQT"; break;
                    case 52009: csign="CBEB"; break;
                    case 28378: csign="WJXY/CJXY"; break;
                    case 39251: csign="KGA/CBCx"; break;
                    case 39252: csign="KGO/CBCP"; break;
                    case 941: csign="CKGE"; break;
                    case 16416: csign="KSFW/CBLA"; break;
                    case 25414: csign="WFNY/CFNY"; break;
                    case 27382: csign="WILQ/CILQ"; break;
                    case 27424: csign="WING/CING"; break;
                    case 26428: csign="WHAY/CHAY"; break;
                    case 52033: csign="CBA-FM"; break;
                    case 52034: csign="CBCT"; break;
                    case 52045: csign="CBHM"; break;
                    case 45084: csign="CIQM"; break;
                    case 51806: csign="CHNI, CJNI, or CKNI"; break;
                    case 12289: csign="KLAS (Jamaica)"; break;
                    case 7877: csign="CFPL"; break;
                    case 7760: csign="ZFKY (Cayman Is.)"; break;
                    case 8151: csign="ZFCC (Cayman Is.)"; break;
                    case 12656: csign="WAVW"; break;
                    case 7908: csign="KTCZ"; break;
                    case 42149: csign="KSKZ or KWKR"; break;
                    case 45313: csign="XHCTO"; break;
                    case 34784: csign="XHTRR"; break;
                    case 39333: csign="XHSR"; break;
                }
                return csign;
            },

            chx : function(x) {
                return String.fromCharCode(x);
            },

            getfloor : function getfloor(x) {
                return Math.floor(x);
            },

            hex2dec : function(hex) {
                return parseInt(hex,16);
            }

        }
    );
});
