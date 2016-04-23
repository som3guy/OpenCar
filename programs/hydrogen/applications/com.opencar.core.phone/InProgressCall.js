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
            muted: false,
            counter: 0,

            init: function ($super, container) {
                $super(container);

                var self = this;

                var containerMain = new Pane({
                    id: "container-in-progress-call-main"
                }).render(this.screen);

                var containerCallState = new Pane({
                    id: "container-call-state"
                }).render(containerMain);

                this.textViewCallState = new TextView({
                    id: "text-view-call-state",
                    text: "00:00"
                }).render(containerCallState);

                var containerCallerName = new Pane({
                    id: "container-caller-name"
                }).render(containerMain);

                this.textViewCallerName = new TextView({
                    id: "text-view-caller-name",
                }).render(containerCallerName);

                var containerPhoneNumberLabel = new Pane({
                    id: "container-phone-number-label"
                }).render(containerMain);

                this.textViewPhoneNumberLabel = new TextView({
                    id: "text-view-phone-number-label",
                    text: "home"
                }).render(containerPhoneNumberLabel);

                var containerInProgressCallButtons = new Pane({
                    id: "container-in-progress-call-buttons"
                }).render(containerMain);

                this.buttonEndCall = new Button({
                    id: "button-end-call",
                    text: "End Call",
                    click: function () {
                        self.buttonEndCallPressed();
                    }
                }).render(containerInProgressCallButtons);

                this.buttonMute = new Button({
                    id: "button-mute",
                    text: "Mute",
                    click: function () {
                        self.buttonMutePressed();
                    }
                }).render(containerInProgressCallButtons);

            }.override(),

            beforeStart: function ($super) {
                Log.debug("InProgressCall beforeStart()");
                return $super();
            }.override(),

            started: function ($super) {
                Log.debug("InProgressCall started()");
                return $super();
            }.override(),

            beforePause: function ($super) {
                Log.debug("InProgressCall beforePause()");
                return $super();
            }.override(),

            paused: function ($super) {
                Log.debug("InProgressCall paused()");
                return $super();
            }.override(),

            beforeResume: function ($super) {
                Log.debug("InProgressCall beforeResume()");
                return $super();
            }.override(),

            resumed: function ($super) {
                Log.debug("InProgressCall resumed()");
                return $super();
            }.override(),

            buttonEndCallPressed: function () {
                var phoneApi = new PhoneAPI();
                phoneApi.end().done(function (data) {
                    this.moduleView.state = data;
                    clearInterval(this.timeInterval);
                    this.textViewCallState.model.set("text", "00:00");
                    this.buttonMute.model.set("text", "Mute");
                    this.muted = false;
                    this.resume("chamber-dial-pad");
                }.bind(this));
            },

            buttonMutePressed: function () {
                if (this.muted) {
                    this.updateTextViewCallState();
                    this.buttonMute.model.set("text", "Mute");
                    /*
                     Log.debug(this.moduleView.getView());
                     Log.debug(this.moduleView.getView().style);
                     this.moduleView.getView().style.backgroundImage = "images/background.png";
                     */
                } else {
                    this.textViewCallState.model.set("text", "Muted");
                    this.buttonMute.model.set("text", "Un-Mute");
                    /*
                     Log.debug(this.moduleView.getView());
                     Log.debug(this.moduleView.getView().style);
                     this.moduleView.getView().style.backgroundImage = "";
                     */
                }
                this.muted = !this.muted;
            },

            activate: function (data) {
                if (data) {
                    var callerName = data.callerName;
                    var phoneNumber = data.phoneNumber;
                    this.counter = 0;
                    this.timeInterval = setInterval(this.updateTime.bind(this), 1000);
                    if (callerName) {
                        this.textViewCallerName.model.set("text", callerName);
                    } else if (phoneNumber) {
                        this.textViewCallerName.model.set("text", phoneNumber);
                    }
                }
            }.override(),

            updateTime: function () {
                this.counter++;
                if (!this.muted) {
                    this.updateTextViewCallState();
                }
            },

            updateTextViewCallState: function () {
                var seconds = this.counter % 60;
                var minutes = parseInt(this.counter / 60);
                var duration = ((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds);
                this.textViewCallState.model.set("text", duration);
            }

        }
    );
});
