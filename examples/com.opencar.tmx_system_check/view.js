define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        ModuleView = require('common/platform/ModuleView'),
        Pane = require('common/ui/Pane'),
        ImageView = require('common/ui/ImageView'),
        Icon = require('view!icon'),
        TextView = require('common/ui/TextView');

	
    return Class.create(
        ModuleView,
        {
            // This is only used to help load the initial values.
            // Safe to remove when we no longer need to load initial values.
            // Or if you don't want to remove the code that handles the initial
            // values, you can just set this variable to true.
            isTelematicsLoaded: false,

            // The item that currently has focus.
            currentFocus: "",

            // The item that previously had focus.
            previousFocus: "",

            // This represents the frame where the animation should stop.
            // These numbers correspond to images named with the corresponding numbers.
            restingFrames: {
                "Battery": 4,
                "Clutch": 8,
                "Tire Pressure": 12,
                "Tire Wear": 16,
                "Brakes": 20,
                "Oil Life": 24,
                "Washer Fluid": 28,
                "Brake Fluid": 32,
                "Trans. Oil Wear": 36,
                "Coolant Level": 40
            },

            init: function ($super) {
				// If we didn't need to populate the initial values ourselves, we can just
				// create an empty object here. The telematics API will populate
				// it for us.
				var profile = oc.states.systemState['vehicle-profile'];

				if (profile == "oxygen") {
					this.leftColumnList = [
						"Battery",
						"Clutch",
						"Tire Pressure",
						"Tire Wear",
						"Brakes"
					];

					this.rightColumnList = [
						"Oil Life",
						"Washer Fluid",
						"Brake Fluid",
						"Trans. Oil Wear",
						"Coolant Level"
					];

					this.telematicsData = {
						"Brake Fluid": {
							text: "Brake fluid level is OK.",
							data: "95",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Clutch": {
							text: "Clutch is OK.",
							data: "93",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Coolant Level": {
							text: "Coolant level is OK.",
							data: "97",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Oil Life": {
							text: "Engine oil is at end of life. Service immediately.",
							data: "4",
							unitOfMeasurement: "%",
							icon: {
								class: "red",
								icon: "warning"
							}
						},
						"Battery": {
							text: "Battery is OK.",
							data: "90",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Trans. Oil Wear": {
							text: "Transmission oil is OK.",
							data: "67",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Washer Fluid": {
							text: "Washer fluid level is OK.",
							data: "65",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Tire Pressure": {
							text: "Tire pressure is OK.",
							icon: {
								class: "green",
								icon: "check-circle-o"
							},
							unitOfMeasurement: "kPa",
							frontLeft: "200",
							frontRight: "201",
							rearLeft: "199",
							rearRight: "197"
						},
						"Tire Wear": {
							text: "Tire tread is OK.",
							icon: {
								class: "green",
								icon: "check-circle-o"
							},
							unitOfMeasurement: "%",
							frontLeft: "76",
							frontRight: "74",
							rearLeft: "73",
							rearRight: "77"
						},
						"Brakes": {
							text: "Brake pads will need replacing soon.",
							icon: {
								class: "yellow",
								icon: "warning"
							},
							unitOfMeasurement: "%",
							frontLeft: "19",
							frontRight: "18",
							rearLeft: "35",
							rearRight: "37"
						}
					};
				} else if (profile == "hydrogen") {
					this.leftColumnList = [
						"Battery",
						"Clutch",
						"Tire Pressure"
					];

					this.rightColumnList = [
						"Oil Life",
						"Washer Fluid",
						"Brakes"
					];

					this.telematicsData = {
						"Clutch": {
							text: "Clutch is OK.",
							data: "93",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Oil Life": {
							text: "Engine oil is at end of life. Service immediately.",
							data: "4",
							unitOfMeasurement: "%",
							icon: {
								class: "red",
								icon: "warning"
							}
						},
						"Battery": {
							text: "Battery is OK.",
							data: "90",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Washer Fluid": {
							text: "Washer fluid level is OK.",
							data: "65",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Tire Pressure": {
							text: "Tire pressure is OK.",
							icon: {
								class: "green",
								icon: "check-circle-o"
							},
							unitOfMeasurement: "kPa",
							frontLeft: "200",
							frontRight: "201",
							rearLeft: "199",
							rearRight: "197"
						},
						"Brakes": {
							text: "Brake pads will need replacing soon.",
							icon: {
								class: "yellow",
								icon: "warning"
							},
							unitOfMeasurement: "%",
							frontLeft: "19",
							frontRight: "18",
							rearLeft: "35",
							rearRight: "37"
						}
					};
				} else if (profile == "mazda3") {
					this.leftColumnList = [
						"Battery",
						"Tire Pressure"
					];

					this.rightColumnList = [
						"Oil Life"
					];

					this.telematicsData = {
						"Oil Life": {
							text: "Engine oil is at end of life. Service immediately.",
							data: "4",
							unitOfMeasurement: "%",
							icon: {
								class: "red",
								icon: "warning"
							}
						},
						"Battery": {
							text: "Battery is OK.",
							data: "90",
							unitOfMeasurement: "%",
							icon: {
								class: "green",
								icon: "check-circle-o"
							}
						},
						"Tire Pressure": {
							text: "Tire pressure is OK.",
							icon: {
								class: "green",
								icon: "check-circle-o"
							},
							unitOfMeasurement: "kPa",
							frontLeft: "200",
							frontRight: "201",
							rearLeft: "199",
							rearRight: "197"
						}
					};
				}

                var icon;
                this.viewContainer = new Pane({
                    id: "view-container"
                }).render(this._view);

                this.leftColumn = new Pane({
                    id: "left-column"
                }).render(this.viewContainer);

                this.centerColumn = new Pane({
                    id: "center-column"
                }).render(this.viewContainer);

                this.rightColumn = new Pane({
                    id: "right-column"
                }).render(this.viewContainer);

                this.centerImage = new ImageView({
                    id: "center-image",
                    src: window.MODULE_PATH + "/images/s1.png"
                }).render(this.centerColumn);

                this.textViewInfoContainer = new Pane({
                    id: "text-view-info-container"
                }).render(this.viewContainer);

                this.textViewInfo = new TextView({
                    id: "text-view-info",
                }).render(this.textViewInfoContainer);

                this.centerOverlay = new Pane({
                    id: "center-overlay"
                }).render(this.centerColumn);

                for (var i = 0; i < this.leftColumnList.length; i++) {
                    this["Pane " + this.leftColumnList[i]] = new Pane({
                        classNames: ["list-item-container"],
                        focusable: true,
                        focus: this.handleFocus.bind(this)
                    }).render(this.leftColumn);

                    icon = new Icon({
                        src: "",
                        fontSize: "36px"
                    }, "main");

                    this["Image " + this.leftColumnList[i]] = icon.querySelector("oc-icon");
                    this["Pane " + this.leftColumnList[i]].element.appendChild(icon);

                    new TextView({
                        classNames: ["list-item"],
                        text: this.leftColumnList[i],
                        focusable: false
                    }).render(this["Pane " + this.leftColumnList[i]]);
                }
                for (i = 0; i < this.rightColumnList.length; i++) {
                    this["Pane " + this.rightColumnList[i]] = new Pane({
                        classNames: ["list-item-container"],
                        focusable: true,
                        focus: this.handleFocus.bind(this)
                    }).render(this.rightColumn);
                    new TextView({
                        classNames: ["list-item"],
                        text: this.rightColumnList[i],
                        focusable: false
                    }).render(this["Pane " + this.rightColumnList[i]]);

                    icon = new Icon({
                        src: "",
                        fontSize: "36px"
                    }, "main");

                    this["Image " + this.rightColumnList[i]] = icon.querySelector("oc-icon");
                    this["Pane " + this.rightColumnList[i]].element.appendChild(icon);
                }
                this.currentFocus = "Battery";
                this["Pane Battery"].requestFocus();
                return $super();
            }.override(),

            // This is used to help load the initial values and lets us know when all the telematics data has been read
            // the first time.
            setTelematicsLoaded: function (loaded) {
                this.isTelematicsLoaded = loaded;
            },

            updateWithNewTelematicsData: function (category, data) {
                this["Image " + category].classList.remove("yellow");
                this["Image " + category].classList.remove("red");
                this["Image " + category].classList.remove("green");
                this["Image " + category].classList.add(data.icon.class);
                this["Image " + category].setAttribute("src", data.icon.icon);
                if (this["Pane " + category].isFocused()) {
                    this.textViewInfo.model.set("text", data.text);
                    if (this.textViewData) {
                        this.textViewData.model.set("text", data.data + data.unitOfMeasurement);
                    }
                    if (this.textViewDataFrontLeft
                        && this.textViewDataFrontLeft.model.get("text") != data.frontLeft) {
                        this.textViewDataFrontLeft.model.set("text", data.frontLeft + data.unitOfMeasurement);
                    }
                    if (this.textViewDataFrontRight
                        && this.textViewDataFrontRight.model.get("text") != data.frontRight) {
                        this.textViewDataFrontRight.model.set("text", data.frontRight + data.unitOfMeasurement);
                    }
                    if (this.textViewDataRearLeft
                        && this.textViewDataRearLeft.model.get("text") != data.rearLeft) {
                        this.textViewDataRearLeft.model.set("text", data.rearLeft + data.unitOfMeasurement);
                    }
                    if (this.textViewDataRearRight
                        && this.textViewDataRearRight.model.get("text") != data.rearRight) {
                        this.textViewDataRearRight.model.set("text", data.rearRight + data.unitOfMeasurement);
                    }
                }
            },

            setTelematicsData: function (category, data) {
                // The "if" part of this statement is only used to help load the initial values.
                // We want to ignore all telematics data the first time because we want to display our
                // predetermined values.
                if (this.isTelematicsLoaded) {
                    this.telematicsData[category] = data;
                }
                this.updateWithNewTelematicsData(category, this.telematicsData[category]);
            },

            animateFrames: function (start, end) {
                var frameRate = (4 / (Math.abs(start - end))) * 100;
                var intervalId = setInterval(function () {
                    if (start < end) {
                        start++;
                    } else {
                        start--;
                    }
                    var src = "";
                    src = window.MODULE_PATH + "/images/s" + start + ".png";
                    this.centerImage.model.set("src", src);
                    if (start == end) {
                        clearInterval(intervalId);
                    }
                }.bind(this), frameRate);
            },

            getTelematicsData: function () {
                return this.telematicsData;
            },

            handleFocus: function (f, e) {
                this.centerOverlay.element.innerHTML = '';

                if (e == this["Pane Brake Fluid"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Brake Fluid"]);
                    var brakeFluidData = this.telematicsData["Brake Fluid"];
                    this.textViewInfo.model.set("text", brakeFluidData.text);
                    this.textViewData = new TextView({
                        id: "brake-fluid-data",
                        classNames: ["text-view-data", "center"],
                        text: brakeFluidData.data.toString() + brakeFluidData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Brake Fluid";
                } else if (e == this["Pane Brakes"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames.Brakes);
                    var brakesData = this.telematicsData.Brakes;
                    this.textViewInfo.model.set("text", brakesData.text);
                    this.textViewDataFrontLeft = new TextView({
                        id: "brakes-data-front-left",
                        classNames: ["text-view-data", "front-left"],
                        text: brakesData.frontLeft.toString() + brakesData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataFrontRight = new TextView({
                        id: "brakes-data-front-right",
                        classNames: ["text-view-data", "front-right"],
                        text: brakesData.frontRight.toString() + brakesData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataRearLeft = new TextView({
                        id: "brakes-data-rear-left",
                        classNames: ["text-view-data", "rear-left"],
                        text: brakesData.rearLeft.toString() + brakesData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataRearRight = new TextView({
                        id: "brakes-data-rear-right",
                        classNames: ["text-view-data", "rear-right"],
                        text: brakesData.rearRight.toString() + brakesData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Brakes";
                } else if (e == this["Pane Clutch"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames.Clutch);
                    var clutchData = this.telematicsData.Clutch;
                    this.textViewInfo.model.set("text", clutchData.text);
                    this.textViewData = new TextView({
                        id: "clutch-data",
                        classNames: ["text-view-data", "center"],
                        text: clutchData.data.toString() + clutchData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Clutch";
                } else if (e == this["Pane Coolant Level"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Coolant Level"]);
                    var coolantLevelData = this.telematicsData["Coolant Level"];
                    this.textViewInfo.model.set("text", coolantLevelData.text);
                    this.textViewData = new TextView({
                        id: "coolant-level-data",
                        classNames: ["text-view-data", "center"],
                        text: coolantLevelData.data.toString() + coolantLevelData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Coolant Level";
                } else if (e == this["Pane Oil Life"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Oil Life"]);
                    var oilLifeData = this.telematicsData["Oil Life"];
                    this.textViewInfo.model.set("text", oilLifeData.text);
                    this.textViewData = new TextView({
                        id: "oil-life-data",
                        classNames: ["text-view-data", "center"],
                        text: oilLifeData.data.toString() + oilLifeData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Oil Life";
                } else if (e == this["Pane Battery"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames.Battery);
                    var batteryData = this.telematicsData.Battery;
                    this.textViewInfo.model.set("text", batteryData.text);
                    this.textViewData = new TextView({
                        id: "battery-data",
                        classNames: ["text-view-data", "center"],
                        text: batteryData.data.toString() + batteryData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Battery";
                } else if (e == this["Pane Trans. Oil Wear"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Trans. Oil Wear"]);
                    var transOilWearData = this.telematicsData["Trans. Oil Wear"];
                    this.textViewInfo.model.set("text", transOilWearData.text);
                    this.textViewData = new TextView({
                        id: "trans-oil-wear-data",
                        classNames: ["text-view-data", "center"],
                        text: transOilWearData.data.toString() + transOilWearData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Trans. Oil Wear";
                } else if (e == this["Pane Washer Fluid"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Washer Fluid"]);
                    var washerFluidData = this.telematicsData["Washer Fluid"];
                    this.textViewInfo.model.set("text", washerFluidData.text);
                    this.textViewData = new TextView({
                        id: "washer-fluid-data",
                        classNames: ["text-view-data", "center"],
                        text: washerFluidData.data.toString() + washerFluidData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Washer Fluid";
                } else if (e == this["Pane Tire Pressure"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Tire Pressure"]);
                    var tirePressureData = this.telematicsData["Tire Pressure"];
                    this.textViewInfo.model.set("text", tirePressureData.text);
                    this.textViewDataFrontLeft = new TextView({
                        id: "tire-pressure-data-front-left",
                        classNames: ["text-view-data", "front-left"],
                        text: tirePressureData.frontLeft.toString() + tirePressureData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataFrontRight = new TextView({
                        id: "tire-pressure-data-front-right",
                        classNames: ["text-view-data", "front-right"],
                        text: tirePressureData.frontRight.toString() + tirePressureData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataRearLeft = new TextView({
                        id: "tire-pressure-data-rear-left",
                        classNames: ["text-view-data", "rear-left"],
                        text: tirePressureData.rearLeft.toString() + tirePressureData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataRearRight = new TextView({
                        id: "tire-pressure-data-rear-right",
                        classNames: ["text-view-data", "rear-right"],
                        text: tirePressureData.rearRight.toString() + tirePressureData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Tire Pressure";
                } else if (e == this["Pane Tire Wear"]) {
                    this.animateFrames(this.restingFrames[this.currentFocus], this.restingFrames["Tire Wear"]);
                    var tireWearData = this.telematicsData["Tire Wear"];
                    this.textViewInfo.model.set("text", tireWearData.text);
                    this.textViewDataFrontLeft = new TextView({
                        id: "tire-wear-data-front-left",
                        classNames: ["text-view-data", "front-left"],
                        text: tireWearData.frontLeft.toString() + tireWearData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataFrontRight = new TextView({
                        id: "tire-wear-data-front-right",
                        classNames: ["text-view-data", "front-right"],
                        text: tireWearData.frontRight.toString() + tireWearData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataRearLeft = new TextView({
                        id: "tire-wear-data-rear-left",
                        classNames: ["text-view-data", "rear-left"],
                        text: tireWearData.rearLeft.toString() + tireWearData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.textViewDataRearRight = new TextView({
                        id: "tire-wear-data-rear-right",
                        classNames: ["text-view-data", "rear-right"],
                        text: tireWearData.rearRight.toString() + tireWearData.unitOfMeasurement
                    }).render(this.centerOverlay);
                    this.previousFocus = this.currentFocus;
                    this.currentFocus = "Tire Wear";
                }
            }

        }
    );
});
