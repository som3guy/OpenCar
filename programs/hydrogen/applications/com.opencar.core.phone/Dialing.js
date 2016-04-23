define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        Pane = require('common/ui/Pane'),
        TextView = require('common/ui/TextView'),
        PhoneAPI = require('common/platform/PhoneAPI'),
        Chamber = require('common/platform/chamber/Chamber');

    return Class.create(
        Chamber,
        {
            init: function ($super, container) {
                $super(container);

                var containerMain = new Pane({
                    id: "container-dialing-main"
                }).render(this.screen);

                var containerCallState = new Pane({
                    id: "container-dialing-state"
                }).render(containerMain);

                this.textViewCallState = new TextView({
                    id: "text-view-dialing-state",
                    text: "Dialing..."
                }).render(containerCallState);

                var containerCallerName = new Pane({
                    id: "container-dialing-name"
                }).render(containerMain);

                this.textViewCallerName = new TextView({
                    id: "text-view-dialing-name",
                }).render(containerCallerName);

                var containerPhoneNumberLabel = new Pane({
                    id: "container-dialing-phone-number-label"
                }).render(containerMain);

                this.textViewPhoneNumberLabel = new TextView({
                    id: "text-view-dialing-phone-number-label",
                    text: "home"
                }).render(containerPhoneNumberLabel);

            }.override(),

            activate: function (data) {
                Log.debug("Dialing activate");
                if ( data ) {
                    this.callerName = data.callerName;
                    this.phoneNumber = data.phoneNumber;
                    var phoneApi = new PhoneAPI();
                    this.moduleView.state = PhoneAPI.State.DIALING;
                    phoneApi.dial(this.phoneNumber).done(function (data) {
                        this.moduleView.state = data;
                        this.resume("chamber-in-progress-call", {"phoneNumber": this.phoneNumber, "callerName": this.callerName});
                    }.bind(this));
                    if ( this.callerName ) {
                        this.textViewCallerName.model.set("text", this.callerName);
                    } else if ( this.phoneNumber ) {
                        this.textViewCallerName.model.set("text", this.phoneNumber);
                    }
                }
            }.override(),

        }
    );
});
