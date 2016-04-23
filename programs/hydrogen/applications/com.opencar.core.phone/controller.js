define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        PhoneAPI = require('common/platform/PhoneAPI'),
        ModuleController = require('common/platform/ModuleController');

    return Class.create(
        ModuleController,
        {
            init: function ($super) {
                this.phoneAPI = new PhoneAPI();
                this.phoneState = PhoneAPI.State.IDLE;
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
            }

        }
    );

});
