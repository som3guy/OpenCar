define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        PhoneAPI = require('common/platform/PhoneAPI'),
        ModuleController = require('common/platform/ModuleController'),
        ActivationAPI = require('common/platform/ActivationAPI');

    return Class.create(
        ModuleController,
        {
            init: function ($super) {
                this.phoneAPI = new PhoneAPI();
                this.phoneState = PhoneAPI.State.IDLE;
                this.activation = new ActivationAPI();
                return $super();
            }.override(),

            beforeStart: function ($super) {
                var data = arguments[1];
                if (data) {
                    this.getView().dataReceived(data);
                }
                return $super();
            }.override(),

            beforeResume: function ($super) {
                var data = arguments[1];
                if (data) {
                    this.getView().dataReceived(data);
                }
                return $super();
            }.override(),

            dialNumber: function (number) {
                this.phoneState = PhoneAPI.State.DIALING;
                return this.phoneAPI.dial(number).done(function (data) {
                    this.phoneState = PhoneAPI.State.CONNECTED;
                }.bind(this));
            },

            endCall: function () {
                return this.phoneAPI.end().done(function (data) {
                    this.phoneState = PhoneAPI.State.IDLE;
                }.bind(this));
            },

            getPhoneState: function () {
                return this.phoneState;
            },

            // Audio is relinquished and requested in the screen controlled by CallInfo.js. The expectation is
            // audio is relinquished when the call button is pressed and requested when either the call end
            // button is pressed or the phone app is exited.

            relinquishAudio: function() {
                Log.log("PHONE asking platform to relinquish audio focus (MEDIA SHOULD STOP)");
                this.activation.audioRelinquish('MEDIA');
                this.activation.audioRelinquish('TTS');
            },

            requestAudio: function() {
                Log.log("PHONE asking platform to request audio focus (MEDIA SHOULD RESUME)");
                this.activation.audioRequest('MEDIA');
                this.activation.audioRequest('TTS');
            }
        }
    );

});
