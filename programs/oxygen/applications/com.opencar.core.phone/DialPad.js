define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        MCDEvent = require('common/MCDEvent'),
        Pane = require('common/ui/Pane'),
        Button = require('common/ui/Button'),
        BackButton = require('common/ui/BackButton'),
        TextView = require('common/ui/TextView'),
        Toast = require('common/ui/Toast'),
        PhoneAPI = require('common/platform/PhoneAPI'),
        ApplicationManagerAPI = require('common/platform/ApplicationManagerAPI'),
        Chamber = require('common/platform/chamber/Chamber');

    var placeholderText = "Enter number",
        toastWarningText = "Please enter a phone number.";

    return Class.create(
        Chamber,
        {
            /*jshint unused:false */
            init: function ($super, container) {
                $super(container);

                var self = this;

                this.moduleView._focusController.addMCDEventListener(MCDEvent.EventType.BACK,
                    function (event) {
                        // tests for presence of data and existence of a callingApp
                        if (self.data && self.data.callingApp) {
                            var applicationManager = new ApplicationManagerAPI();
                            applicationManager.startApplication(self.data.callingApp);
                            self.data = null;
                            event.stopPropagation();
                        }
                    });

                this.moduleView.state = PhoneAPI.State.IDLE;

                var containerMain = new Pane({
                    id: "container-dial-pad-main"
                }).render(this.screen);

                var containerDialPad = new Pane({
                    id: "container-dial-pad"
                }).render(containerMain);

                var containerDialPadRow1 = new Pane({
                    id: "container-dial-pad-row-1"
                }).render(containerDialPad);

                this.dialKey1 = new Button({
                    id: "dial-key-1",
                    text: "1\n ",
                    onRight: "dial-key-2",
                    onDown: "dial-key-4",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow1);

                this.dialKey2 = new Button({
                    id: "dial-key-2",
                    onLeft: "dial-key-1",
                    onRight: "dial-key-3",
                    onDown: "dial-key-5",
                    text: "2\nABC",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow1);

                this.dialKey3 = new Button({
                    id: "dial-key-3",
                    onLeft: "dial-key-2",
                    onDown: "dial-key-6",
                    onRight: "dial-key-call",
                    text: "3\nDEF",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow1);

                var containerDialPadRow2 = new Pane({
                    id: "container-dial-pad-row-2"
                }).render(containerDialPad);

                this.dialKey4 = new Button({
                    id: "dial-key-4",
                    onUp: "dial-key-1",
                    onRight: "dial-key-5",
                    onDown: "dial-key-7",
                    text: "4\nGHI",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow2);

                this.dialKey5 = new Button({
                    id: "dial-key-5",
                    text: "5\nJKL",
                    onUp: "dial-key-2",
                    onLeft: "dial-key-4",
                    onRight: "dial-key-6",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow2);

                this.dialKey6 = new Button({
                    id: "dial-key-6",
                    text: "6\nMNO",
                    onUp: "dial-key-3",
                    onLeft: "dial-key-5",
                    onDown: "dial-key-9",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow2);

                var containerDialPadRow3 = new Pane({
                    id: "container-dial-pad-row-3"
                }).render(containerDialPad);

                this.dialKey7 = new Button({
                    id: "dial-key-7",
                    onUp: "dial-key-4",
                    onRight: "dial-key-8",
                    onDown: "dial-key-star",
                    text: "7\nPQRS",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow3);

                this.dialKey8 = new Button({
                    id: "dial-key-8",
                    onLeft: "dial-key-7",
                    onUp: "dial-key-5",
                    onRight: "dial-key-9",
                    onDown: "dial-key-0",
                    text: "8\nTUV",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow3);

                this.dialKey9 = new Button({
                    id: "dial-key-9",
                    onUp: "dial-key-6",
                    onLeft: "dial-key-8",
                    onDown: "dial-key-pound",
                    text: "9\nWXYZ",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow3);

                var containerDialPadRow4 = new Pane({
                    id: "container-dial-pad-row-4"
                }).render(containerDialPad);

                this.dialKeyStar = new Button({
                    id: "dial-key-star",
                    text: "*\n ",
                    onUp: "dial-key-7",
                    onRight: "dial-key-0",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow4);

                this.dialKey0 = new Button({
                    id: "dial-key-0",
                    onRight: "dial-key-pound",
                    onLeft: "dial-key-star",
                    onUp: "dial-key-8",
                    text: "0\n+",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow4);

                this.dialKeyPound = new Button({
                    id: "dial-key-pound",
                    onLeft: "dial-key-0",
                    onUp: "dial-key-9",
                    text: "#\n ",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerDialPadRow4);


                var containerMiscDialPad = new Pane({
                    id: "container-misc-dial-pad"
                }).render(containerMain);

                var containerMiscDialPadRow1 = new Pane({
                    id: "container-misc-dial-pad-row-1"
                }).render(containerMiscDialPad);

                this.dialKeyBackspace = new Button({
                    id: "dial-key-backspace",
                    text: "Delete",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerMiscDialPadRow1);

                var containerMiscDialPadRow2 = new Pane({
                    id: "container-misc-dial-pad-row-2"
                }).render(containerMiscDialPad);

                this.dialKeyContacts = new Button({
                    id: "dial-key-contacts",
                    text: "Contacts",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerMiscDialPadRow2);

                var containerMiscDialPadRow3 = new Pane({
                    id: "container-misc-dial-pad-row-3"
                }).render(containerMiscDialPad);

                this.dialKeyCall = new Button({
                    id: "dial-key-call",
                    text: "Call",
                    classNames: ["dial-button"],
                    click: function () {
                        self.dialKeyPressed(this);
                    }
                }).render(containerMiscDialPadRow3);

                var containerDisplay = new Pane({
                    id: "container-dial-pad-display"
                }).render(containerMain);

                this.textViewPhoneNumber = new TextView({
                    text: placeholderText,
                    classNames: ["placeholder"],
                    id: "text-view-phone-number"
                }).render(containerDisplay);

            }.override(),

            paused: function ($super) {
                var d = "doobe";
                this.textViewPhoneNumber.model.set("text", placeholderText);
                this.textViewPhoneNumber.setClasses(["placeholder"]);
                return $super();
            }.override(),

            started: function ($super) {
                new BackButton({
                    classNames: ['move-back-button-in'],
                    click: function (event) {
                        if (this.data && this.data.callingApp) {
                            var applicationManager = new ApplicationManagerAPI();
                            applicationManager.startApplication(this.data.callingApp);
                            this.data = null;
                        } else {
                            this.back();
                        }
                    }.bind(this)
                }).render(this.screen.element);
                return $super();
            }.override(),

            resumed: function ($super) {
                return $super();
            }.override(),

            focusDefault: function ($super) {
                $super();
                // preferred experience, put focus on dial button
                if (this.textViewPhoneNumber.model.get("text") !== placeholderText) {
                    this.dialKeyCall.requestFocus();
                }
            }.override(),

            formatPhoneNumber: function (phoneNumber) {
                var part1, part2, part3, part4;

                var formattedPhoneNumber = phoneNumber.replace(/ /g, ""); // remove all white space
                if (formattedPhoneNumber.length > 11) {
                    // Just return the number unchanged.
                } else if (formattedPhoneNumber.length > 10) {
                    part1 = formattedPhoneNumber.slice(0, 1);
                    part2 = formattedPhoneNumber.slice(1, 4);
                    part3 = formattedPhoneNumber.slice(4, 7);
                    part4 = formattedPhoneNumber.slice(7);
                    formattedPhoneNumber = part1 + " " + part2 + " " + part3 + " " + part4;
                } else if (formattedPhoneNumber.length > 7) {
                    part3 = formattedPhoneNumber.slice(-4);
                    part2 = formattedPhoneNumber.slice(-7, -4);
                    part1 = formattedPhoneNumber.slice(0, -7);
                    formattedPhoneNumber = part1 + " " + part2 + " " + part3;
                } else if (formattedPhoneNumber.length > 4) {
                    part2 = formattedPhoneNumber.slice(-4);
                    part1 = formattedPhoneNumber.slice(0, -4);
                    formattedPhoneNumber = part1 + " " + part2;
                }
                return formattedPhoneNumber;
            },

            getCharacterFromDialKey: function (dialKey) {
                var characters = dialKey.model.get("text");
                return characters.substr(0, 1);
            },

            dialKeyPressed: function (dialKey) {
                var phoneNumber = this.textViewPhoneNumber.model.get("text");
                if (phoneNumber == placeholderText) {
                    phoneNumber = null;
                }
                var id = dialKey.model.get("id");
                if (id === "dial-key-backspace") {
                    if (phoneNumber && phoneNumber.length > 0) {
                        phoneNumber = phoneNumber.slice(0, -1);
                        this.textViewPhoneNumber.model.set("text", this.formatPhoneNumber(phoneNumber));
                    }
                    if (!phoneNumber) {
                        this.textViewPhoneNumber.model.set("text", placeholderText);
                        this.textViewPhoneNumber.setClasses(["placeholder"]);
                    }
                } else if (id === "dial-key-contacts") {
                } else if (id === "dial-key-call") {
                    if (phoneNumber) {
                        var callingApp = null;
                        // tests for presence of data and existence of a callingApp
                        if (this.data && this.data.callingApp) {
                            callingApp = this.data.callingApp;
                        }
                        this.resume("chamber-call-info", {"phoneNumber": phoneNumber, "callingApp": callingApp});
                    } else {
                        Toast.show(toastWarningText);
                    }
                } else {
                    if (!phoneNumber) {
                        this.textViewPhoneNumber.removeClasses(["placeholder"]);
                        phoneNumber = "";
                    }
                    phoneNumber = phoneNumber + this.getCharacterFromDialKey(dialKey);
                    this.textViewPhoneNumber.model.set("text", this.formatPhoneNumber(phoneNumber));
                }
            },

            activate: function (data) {
                if (data && data.type == "dial") {
                    this.data = data;
                    var phoneNumber = data.phoneNumber;
                    if (phoneNumber) {
                        this.textViewPhoneNumber.model.set("text", this.formatPhoneNumber(phoneNumber));
                        this.textViewPhoneNumber.removeClasses(["placeholder"]);
                    }
                }
            }.override()

        }
    );
});
