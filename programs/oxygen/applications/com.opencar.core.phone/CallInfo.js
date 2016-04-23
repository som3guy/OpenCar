define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        Pane = require('common/ui/Pane'),
        TextView = require('common/ui/TextView'),
        ImageView = require('common/ui/ImageView'),
        PhoneAPI = require('common/platform/PhoneAPI'),
        ApplicationManagerAPI = require('common/platform/ApplicationManagerAPI'),
        ButtonBarChamber = require('common/platform/chamber/ButtonBarChamber');

    return Class.create(
        ButtonBarChamber,
        {
            init: function ($super, container) {
                $super(container);
                this.setCustomButtonHandler(this);
                this.isMute = false;

                var containerMain = new Pane({
                    id: "container-call-info-main"
                }).render(this.screen);

                var containerCallDetails = new Pane({
                    id: "container-call-info-details"
                }).render(containerMain);

                var containerCallerImage = new Pane({
                    id: "container-call-info-caller-image"
                }).render(containerMain);

                this.textViewCallStatus = new TextView({
                    id: "text-view-call-status",
                    text: "On Call"
                }).render(containerCallDetails);

                this.textViewCallerNameAndDuration = new TextView({
                    id: "text-view-caller-name-and-duration"
                }).render(containerCallDetails);

                this.imageViewCaller = new ImageView({
                    id: "image-view-caller",
                    src: MODULE_PATH + "/images/placeholder-contact.png"
                }).render(containerCallerImage);

                /* This one is for hydrogen. All other profiles should not display this element. */
                this.textViewCallStatus2 = new TextView({
                    id: "text-view-call-status-2",
                    text: "00:00"
                }).render(containerMain);

                this.profile = oc.states.systemState['vehicle-profile'];

            }.override(),

            // Relinquish audio when this screen starts (it is entered by pressing the call button on the dial pad).

            beforeStart: function($super) {
                this.moduleView.getController().relinquishAudio();
                return $super();
            },

            beforeResume: function($super) {
                this.moduleView.getController().relinquishAudio();
                return $super();
            },

            // Request audio back when the phone app exits. For demo purposes only we treat exiting the phone
            // app as an implicit call end. The other option is audio is unavailable until the user re-enters
            // the phone app and explicitly hangs up (which could result in a confusing lack of audio).

            beforeAppPause: function($super) {
                this.moduleView.getController().requestAudio();
                return $super();
            },

            back: function () {
                this.moduleView.getController().endCall().done(function (data) {
                    this.isMute = false;
                    var buttonMute = document.getElementById("bb-mute");
                    buttonMute.classList.remove("on");
                    this.textViewCallStatus.model.set("text", "Call Ended");
                    clearInterval(this.timeInterval);
                    this.resume("chamber-dial-pad");
                }.bind(this));
            },

            onDialPad: function () {
                this.moduleView.getController().endCall().done(function (data) {
                    this.isMute = false;
                    var buttonMute = document.getElementById("bb-mute");
                    buttonMute.classList.remove("on");
                    this.textViewCallStatus.model.set("text", "Call Ended");
                    clearInterval(this.timeInterval);
                    this.resume("chamber-dial-pad");
                }.bind(this));
            },

            onMute: function () {
                this.moduleView.getController().getPhoneState().done(function (data) {
                    if (data == PhoneAPI.State.CONNECTED) {
                        this.isMute = !this.isMute;
                        var buttonMute = document.getElementById("bb-mute");
                        buttonMute.classList.toggle("on");
                        if (this.isMute) {
                            this.textViewCallStatus.model.set("text", "Call Muted");
                        } else {
                            this.textViewCallStatus.model.set("text", "On Call");
                        }
                    }
                }.bind(this));
            },

            onDial: function () {
                Log.debug("OnDial");
            },

            onEndCall: function () {
                this.moduleView.getController().endCall().done(function (data) {
                    this.isMute = false;
                    var buttonMute = document.getElementById("bb-mute");
                    buttonMute.classList.remove("on");
                    this.textViewCallStatus.model.set("text", "Call Ended");
                    clearInterval(this.timeInterval);
                    // is there a calling app to hook back into?
                    if (this.callingApp) {
                        var applicationManager = new ApplicationManagerAPI();
                        applicationManager.startApplication(this.callingApp);
                    }
                    // Request audio focus so music/TTS can resume
                    this.moduleView.getController().requestAudio();
                }.bind(this));
            },

            activate: function (data) {
                this.textViewCallStatus2.model.set("text", "00:00");
                if (data) {
                    this.callerName = data.callerName;
                    this.phoneNumber = data.phoneNumber;
                    this.callingApp = data.callingApp;
                    if (data.type == "incoming") {
                        if (this.callerName) {
                            this.displayInfo = this.callerName;
                            this.textViewCallerNameAndDuration.model.set("text", this.callerName);
                        } else if (this.phoneNumber) {
                            this.displayInfo = this.phoneNumber;
                            this.textViewCallerNameAndDuration.model.set("text", this.phoneNumber);
                        }

                        this.textViewCallStatus.model.set("text", "Incoming Call");
                    } else {
                        if (this.callerName) {
                            this.displayInfo = this.callerName;
                            this.textViewCallerNameAndDuration.model.set("text", this.callerName);
                        } else if (this.phoneNumber) {
                            this.displayInfo = this.phoneNumber;
                            this.textViewCallerNameAndDuration.model.set("text", this.phoneNumber);
                        }

                        this.textViewCallStatus.model.set("text", "Calling...");
                        this.moduleView.getController().dialNumber(this.phoneNumber).done(function (data) {
                            this.counter = 0;
                            this.updateDisplay();
                            this.timeInterval = setInterval(this.updateDisplay.bind(this), 1000);
                            if (!this.isMute) {
                                this.textViewCallStatus.model.set("text", "On Call");
                            }
                        }.bind(this));
                    }
                }
            }.override(),

            updateDisplay: function () {
                var seconds = this.counter % 60;
                var minutes = parseInt(this.counter / 60);
                var duration = ((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds);
                // TODO: Need to handle this without app profile sniffing.
                if (this.profile != "hydrogen") {
                    this.textViewCallerNameAndDuration.model.set("text", this.displayInfo + " (" + duration + ")");
                }
                this.textViewCallStatus2.model.set("text", duration);
                this.counter++;
            }

        }
    );
});
