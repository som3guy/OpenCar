define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        Pane = require('common/ui/Pane'),
        Button = require('common/ui/Button'),
        TextView = require('common/ui/TextView'),
        PhoneAPI = require('common/platform/PhoneAPI'),
        Chamber = require('common/platform/chamber/Chamber');

    return Class.create(
        Chamber,
        {
            init: function ($super, container) {
                $super(container);

                var self = this;

                var containerMain = new Pane({
                    id: "container-incoming-call-main"
                }).render(this.screen);

                var containerCallState = new Pane({
                    id: "container-incoming-call-state"
                }).render(containerMain);

                this.textViewCallState = new TextView({
                    id: "text-view-incoming-call-state",
                    text: "Incoming Call..."
                }).render(containerCallState);

                var containerCallerName = new Pane({
                    id: "container-incoming-caller-name"
                }).render(containerMain);

                this.textViewCallerName = new TextView({
                    id: "text-view-incoming-caller-name",
                }).render(containerCallerName);

                var containerPhoneNumberLabel = new Pane({
                    id: "container-incoming-call-phone-number-label"
                }).render(containerMain);

                this.textViewPhoneNumberLabel = new TextView({
                    id: "text-view-incoming-call-phone-number-label",
                    text: "home"
                }).render(containerPhoneNumberLabel);

                var containerIncomingCallButtons = new Pane({
                    id: "container-incoming-call-buttons"
                }).render(containerMain);

                this.buttonIgnore = new Button({
                    id: "incoming-call-button-ignore",
                    text: "Ignore",
                    click: function () {
                        self.buttonIgnorePressed();
                    }
                }).render(containerIncomingCallButtons);

                this.buttonAnswer = new Button({
                    id: "incoming-call-button-answer",
                    text: "Answer",
                    click: function () {
                        self.buttonAnswerPressed();
                    }
                }).render(containerIncomingCallButtons);

            }.override(),

            beforeStart: function ($super) {
                Log.debug("IncomingCall beforeStart()");
                return $super();
            }.override(),

            started: function ($super) {
                Log.debug("IncomingCall started()");
                return $super();
            }.override(),

            beforePause: function ($super) {
                Log.debug("IncomingCall beforePause()");
                return $super();
            }.override(),

            paused: function ($super) {
                Log.debug("IncomingCall paused()");
                return $super();
            }.override(),

            beforeResume: function ($super) {
                Log.debug("IncomingCall beforeResume()");
                return $super();
            }.override(),

            resumed: function ($super) {
                Log.debug("IncomingCall resumed()");
                return $super();
            }.override(),

            activate: function (data) {
                if (data) {
                    this.callerName = data.callerName;
                    this.phoneNumber = data.phoneNumber;
                    this.moduleView.state = PhoneAPI.State.RINGING;
                    if (this.callerName) {
                        this.textViewCallerName.model.set("text", this.callerName);
                    } else if (this.phoneNumber) {
                        this.textViewCallerName.model.set("text", this.phoneNumber);
                    }
                }
            }.override(),

            buttonIgnorePressed: function () {
                this.resume("chamber-dial-pad");
            },

            buttonAnswerPressed: function () {
                this.resume("chamber-in-progress-call", {
                    "callerName": this.callerName,
                    "phoneNumber": this.phoneNumber
                });
            }

        }
    );
});
