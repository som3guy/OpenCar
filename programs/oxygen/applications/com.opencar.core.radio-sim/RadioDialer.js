define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        Chamber = require('common/platform/chamber/Chamber'),
        MCDEvent = require('common/MCDEvent'),
        Control = require('common/ui/Control'),
        Pane = require('common/ui/Pane'),
        ImageView = require('common/ui/ImageView'),
        BackButton = require('common/ui/BackButton'),
        Button = require('common/ui/Button'),
        RadioDialer = require('common/ui/radio/RadioDialer');

    /*
     Main radio dialer screen.
     */

    return Class.create(
        Chamber,
        {


            // ~~~~~~~~~~~ lifecycle ~~~~~~~~~~~~~~~

            init: function ($super, container) {
                $super(container);
                var self = this;
                var containerMain = new Pane({
                    id: "container-main"
                }).render(this.screen);

                var containerBackButton = new Pane({
                    id: "container-back-button"
                }).render(containerMain);

                this.backButton = new BackButton({
                    classNames: ['move-back-button-in']
                }).render(containerBackButton);

                var containerDialer = new Pane({
                    id: "container-dialer"
                }).render(containerMain);

                self.dialer = new RadioDialer({
                    id: "dialer",
                    delegate: self



                    /*
                     focusable: true,
                     onIncomingFocus: function (event, origEvent) {
                     console.log("xxxxxxxxxxxxxxmoomomo", event, origEvent);


                     console.log("butn bar", containerButtons );
                     console.log("butn ", containerButtons.focusController.getLastFocusedItem() );
                     console.log("butn r", containerButtons.focusController.getFocusedItem() );
                     // restore focus to last active buttonbar button
                     //self.focusDefault();
                     }
                     */

                });


                //self.dialer.band = "am";
                //self.dialer.frequencyInterval = 10;

                this.moduleView.getController().getLocation().done(function (loc) {
                    var isUS = false;
                    if ( (loc.latitude < 50) && (loc.latitude > 24) && (loc.longitude < -48) && (loc.longitude > -167) ) {
                        isUS = true;
                    }
                    if ( isUS ) {
                        self.dialer.frequencyInterval = 0.2;
                        self.dialer.minFrequency = 87.7;
                        self.dialer.maxFrequency = 107.9;
                        // for testing am settings
                        //self.dialer.frequencyInterval = 10;
                        //self.dialer.minFrequency = 680;
                        //self.dialer.maxFrequency = 1580;
                        //self.dialer.band = "am";
                    } else {
                        self.dialer.frequencyInterval = 0.1;
                        self.dialer.minFrequency = 87.5;
                        self.dialer.maxFrequency = 108.0;
                    }
                    self.dialer.draw();
                }).error(function (data) {
                    self.dialer.draw();
                });
                if ( this.selectedFrequency ) {
                    self.dialer.selectedFrequency = parseFloat(this.selectedFrequency);
                }
                self.dialer.render(containerDialer);


                var containerButtons = new Pane({
                    id: "container-buttons"
                }).render(containerMain);

                this.buttonSeekPrevious = new Button({
                    id: "button-seek-previous",
                    text: "a",
                    click: function () {
                        var frequency = self.dialer.seekPrevious();
                        if ( frequency ) {
                            self.moduleView.getController().setCurrentStation(frequency).done(function (station) {
                                self.moduleView.getController().setPersistentValue("currentFrequency", self.dialer.selectedFrequency);
                            });
                        }
                    }

                }).render(containerButtons);
                this.imageViewHDIndicator = new ImageView({
                    id: "image-view-hd-indicator"
                }).render(containerButtons);
                this.buttonPreset1 = new Button({
                    id: "button-preset-1",
                    text: "1",
                    click: function () {
                        self.moduleView.getController().setPersistentValue("hd-channel", 1).done(function () {
                            self.setHDButtonStates();
                        });
                    },
                    longClick: function () {
                        /*
                         NOTE - keeping this comment to remind us how we did this.
                         self.moduleView.getController().setPersistentValue("preset1", self.dialer.selectedFrequency);
                         Toast.show("Button 1 preset to " + self.dialer.selectedFrequency);
                         //this.model.set("text", self.dialer.selectedFrequency);
                         */
                    }
                }).render(containerButtons);
                this.buttonPreset2 = new Button({
                    id: "button-preset-2",
                    text: "2",
                    click: function () {
                        self.moduleView.getController().setPersistentValue("hd-channel", 2).done(function () {
                            self.setHDButtonStates();
                        });
                    },
                    longClick: function () {
                    }
                }).render(containerButtons);
                this.buttonPreset3 = new Button({
                    id: "button-preset-3",
                    text: "3",
                    click: function () {
                        self.moduleView.getController().setPersistentValue("hd-channel", 3).done(function () {
                            self.setHDButtonStates();
                        });
                    },
                    longClick: function () {
                    }
                }).render(containerButtons);
                this.buttonPreset4 = new Button({
                    id: "button-preset-4",
                    text: "4",
                    click: function () {
                        self.moduleView.getController().setPersistentValue("hd-channel", 4).done(function () {
                            self.setHDButtonStates();
                        });
                    },
                    longClick: function () {
                    }
                }).render(containerButtons);
                this.buttonSeekNext = new Button({
                    id: "button-seek-next",
                    text: "a",
                    click: function () {
                        var frequency = self.dialer.seekNext();
                        if ( frequency ) {
                            self.moduleView.getController().setCurrentStation(frequency).done(function (station) {
                                self.moduleView.getController().setPersistentValue("currentFrequency", self.dialer.selectedFrequency);
                            });
                        }
                    }

                }).render(containerButtons);

                this.screen.addMCDEventListener(MCDEvent.EventType.Wheel.FORWARD,
                    function (event) {
                        self.dialer.seekNext();
                        event.stopPropagation();
                    });

                this.screen.addMCDEventListener(MCDEvent.EventType.Wheel.BACK,
                    function (event) {
                        self.dialer.seekPrevious();
                        event.stopPropagation();
                    });


                // example of listening to tuner transition events
                this._registerDialerSeekEvents();

            }.override(),


            beforeResume: function ($super) {
                this.setHDButtonStates();
                return $super();
            }.override(),

            beforeStart: function ($super) {
                this.setHDButtonStates();
                return $super();
            }.override(),


            // ++++++++ inherited from Chamber ++++++++++

            focusDefault: function ($super) {
                $super();
                // prefer to give initial focus to the button container -- the dialer is also receptive to touch events, but we don't want to yield focus there
                Control.getById("container-buttons").focus();
            }.override(),

            activate: function (data) {
                if ( this.moduleView._breadcrumb ) {
                    this.moduleView._breadcrumb.model.set('title', 'Radio Tuner - Dialer');
                }
                this.selectedFrequency = data;
                this.dialer.selectedFrequency = parseFloat(this.selectedFrequency);
                // for testing am settings
                //this.dialer.frequencyInterval = 10;
                //this.dialer.selectedFrequency = 1010;
                //this.dialer.minFrequency = 680;
                //this.dialer.maxFrequency = 1580;
                //this.dialer.band = "am";
                this.dialer.draw();
            }.override(),


            // ######## user interface methods ##########


            setHDButtonStates: function () {
                var self = this;
                var controller = this.moduleView.getController();
                controller.getPersistentValue("hd").done(function (isHD) {
                    if ( isHD ) {
                        self.imageViewHDIndicator.model.set("src", MODULE_PATH+"/icons/icon-hd-radio-med.png");
                        self.imageViewHDIndicator.show();
                        self.buttonPreset1.show();
                        self.buttonPreset2.show();
                        self.buttonPreset3.show();
                        self.buttonPreset4.show();
                        controller.getPersistentValue("hd-channel").done(function (hdChannel) {
                            self.buttonPreset1.removeClasses("on");
                            self.buttonPreset2.removeClasses("on");
                            self.buttonPreset3.removeClasses("on");
                            self.buttonPreset4.removeClasses("on");
                            if ( hdChannel ) {
                                Control.getById("button-preset-"+hdChannel).setClasses("on");
                            }
                        });
                    } else {
                        self.imageViewHDIndicator.model.set("src", MODULE_PATH+"/icons/h2o-icon-hd-radio.png");
                        self.imageViewHDIndicator.hide();
                        self.buttonPreset1.hide();
                        self.buttonPreset2.hide();
                        self.buttonPreset3.hide();
                        self.buttonPreset4.hide();
                    }
                });
            },

            // ^^^^^^^^^^^ events ^^^^^^^^^^^^^^^

            _registerDialerSeekEvents: function () {

                this.dialer.onSeekEndEvent = function ($super) {
                    console.log("frequency seekTo changed to", this.selectedFrequency);
                }.bind(this.dialer);


            }


        }
    );
});
