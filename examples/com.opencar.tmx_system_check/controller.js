define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        ModuleController = require('common/platform/ModuleController'),
        TelematicsAPI = require('common/platform/TelematicsAPI');

    return Class.create(
        ModuleController,
        {
            telematics: new TelematicsAPI(),

            brakeInfo: {
                frontLeft: 19,
                frontRight: 18,
                rearLeft: 35,
                rearRight: 37
            },

            tirePressureInfo: {
                frontLeft: 200,
                frontRight: 201,
                rearLeft: 199,
                rearRight: 197
            },

            tireWearInfo: {
                frontLeft: 76,
                frontRight: 74,
                rearLeft: 73,
                rearRight: 77
            },

            StatusIcons: {
                RED: {class: "red", icon: "warning"},
                YELLOW: {class: "yellow", icon: "warning"},
                GREEN: {class: "green", icon: "check-circle-o"}
            },

            // This is only used to help load the initial values.
            telematicsCount: 0,

            // This is only used to help load the initial values.
            // We want to ignore the telematics data the first time it is read
            // because we want to use our own predetermined values.
            // The number 20 represents the number of telematics data points
            // we are subscribing to.
            telematicsLoaded: function () {
                this.telematicsCount++;
                if (this.telematicsCount >= 20) {
                    this.getView().setTelematicsLoaded(true);
                }
            },

            started: function ($super) {
                this.telematics.subscribe(
                    TelematicsAPI.Event.BRAKE_FLUID_LEVEL,
                    this.reportBrakeFluidLevel.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.BRAKE_PAD_WEAR_FRONT_LEFT,
                    this.reportBrakePadWearFrontLeft.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.BRAKE_PAD_WEAR_FRONT_RIGHT,
                    this.reportBrakePadWearFrontRight.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.BRAKE_PAD_WEAR_REAR_LEFT,
                    this.reportBrakePadWearRearLeft.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.BRAKE_PAD_WEAR_REAR_RIGHT,
                    this.reportBrakePadWearRearRight.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.CLUTCH_WEAR_LEVEL,
                    this.reportClutchWearLevel.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.ENGINE_COOLANT_LEVEL,
                    this.reportEngineCoolantLevel.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.ENGINE_OIL_LIFE_REMAINING,
                    this.reportEngineOilLifeRemaining.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.LEVEL_OF_CHARGE,
                    this.reportLevelOfCharge.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TRANSMISSION_OIL_WEAR,
                    this.reportTransmissionOilWear.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.WASHER_FLUID_LEVEL,
                    this.reportWasherFluidLevel.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_PRESSURE_LOW,
                    this.reportTirePressureLow.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_PRESSURE_FRONT_LEFT,
                    this.reportTirePressureFrontLeft.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_PRESSURE_FRONT_RIGHT,
                    this.reportTirePressureFrontRight.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_PRESSURE_REAR_LEFT,
                    this.reportTirePressureRearLeft.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_PRESSURE_REAR_RIGHT,
                    this.reportTirePressureRearRight.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_WEAR_FRONT_LEFT,
                    this.reportTireWearFrontLeft.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_WEAR_FRONT_RIGHT,
                    this.reportTireWearFrontRight.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_WEAR_REAR_LEFT,
                    this.reportTireWearRearLeft.bind(this)
                );
                this.telematics.subscribe(
                    TelematicsAPI.Event.TIRE_WEAR_REAR_RIGHT,
                    this.reportTireWearRearRight.bind(this)
                );
                return $super();
            }.override(),

            reportBrakeFluidLevel: function (level) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (level <= 80) {
                        info.text = "Brake fluid level is dangerously low. Service immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (level >= 90) {
                        info.text = "Brake fluid level is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Brake fluid level is low. Service soon.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = level;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Brake Fluid", info);
                this.telematicsLoaded(); // Safe to remove when we no longer need to load initial values.
            },

            handleBrakeWearData: function () {
                if (this.telematicsCount >= 20) {
                    if ((this.brakeInfo.frontLeft !== null && this.brakeInfo.frontLeft <= 10)
                        || (this.brakeInfo.frontRight !== null && this.brakeInfo.frontRight <= 10)
                        || (this.brakeInfo.rearLeft !== null && this.brakeInfo.rearLeft <= 10)
                        || (this.brakeInfo.rearRight !== null && this.brakeInfo.rearRight <= 10)) {
                        this.brakeInfo.text = "Brake pads need replacing. Service immediately.";
                        this.brakeInfo.icon = this.StatusIcons.RED;
                    } else if ((this.brakeInfo.frontLeft !== null && this.brakeInfo.frontLeft >= 20)
                        && (this.brakeInfo.frontRight !== null && this.brakeInfo.frontRight >= 20)
                        && (this.brakeInfo.rearLeft !== null && this.brakeInfo.rearLeft >= 20)
                        && (this.brakeInfo.rearRight !== null && this.brakeInfo.rearRight >= 20)) {
                        this.brakeInfo.text = "Brake pads are Ok.";
                        this.brakeInfo.icon = this.StatusIcons.GREEN;
                    } else {
                        this.brakeInfo.text = "Brake pads will need replacing soon.";
                        this.brakeInfo.icon = this.StatusIcons.YELLOW;
                    }
                    this.brakeInfo.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Brakes", this.brakeInfo);
                this.telematicsLoaded();
            },

            reportBrakePadWearFrontLeft: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.brakeInfo.frontLeft = wear;
                }
                this.handleBrakeWearData();
            },

            reportBrakePadWearFrontRight: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.brakeInfo.frontRight = wear;
                }
                this.handleBrakeWearData();
            },

            reportBrakePadWearRearLeft: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.brakeInfo.rearLeft = wear;
                }
                this.handleBrakeWearData();
            },

            reportBrakePadWearRearRight: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.brakeInfo.rearRight = wear;
                }
                this.handleBrakeWearData();
            },

            reportClutchWearLevel: function (wear) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (wear <= 10) {
                        info.text = "Clutch dangerously worn and may cause further damage. Service immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (wear >= 20) {
                        info.text = "Clutch is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Clutch will need replacing soon.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = wear;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Clutch", info);
                this.telematicsLoaded();
            },

            reportEngineCoolantLevel: function (level) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (level <= 80) {
                        info.text = "Coolant level is dangerously low. Engine may be damaged if you continue to operate. Service immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (level >= 90) {
                        info.text = "Coolant level is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Coolant level is low. Service soon.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = level;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Coolant Level", info);
                this.telematicsLoaded();
            },

            reportEngineOilLifeRemaining: function (data) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (data <= 5) {
                        info.text = "Engine oil is at end of life. Service immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (data >= 20) {
                        info.text = "Engine oil is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Engine oil is nearing end of life. Service soon.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = data;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Oil Life", info);
                this.telematicsLoaded();
            },

            reportLevelOfCharge: function (charge) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (charge <= 70) {
                        info.text = "Battery level is extremely low. This may indicate a failing battery or other problem. Service immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (charge >= 80) {
                        info.text = "Battery level is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Battery level is low. Service soon.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = charge;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Battery", info);
                this.telematicsLoaded();
            },

            reportTransmissionOilWear: function (wear) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (wear <= 5) {
                        info.text = "Transmission oil is dangerously worn. Damage may occur. Service immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (wear >= 20) {
                        info.text = "Transmission oil is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Transmission oil is worn. Service soon.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = wear;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Trans. Oil Wear", info);
                this.telematicsLoaded();
            },

            reportWasherFluidLevel: function (level) {
                var info = {};
                if (this.telematicsCount >= 20) {
                    if (level <= 10) {
                        info.text = "Washer fluid very low. Add fluid immediately.";
                        info.icon = this.StatusIcons.RED;
                    } else if (level >= 40) {
                        info.text = "Washer fluid level is OK.";
                        info.icon = this.StatusIcons.GREEN;
                    } else {
                        info.text = "Washer fluid level is low. Add fluid.";
                        info.icon = this.StatusIcons.YELLOW;
                    }
                    info.data = level;
                    info.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Washer Fluid", info);
                this.telematicsLoaded();
            },

            handleTirePressureData: function () {
                if (this.telematicsCount >= 20) {
                    if (this.tirePressureInfo.isLow) {
                        this.tirePressureInfo.text = "Tire pressure is dangerously low. Service immediately.";
                        this.tirePressureInfo.icon = this.StatusIcons.RED;
                    } else {
                        if ((this.tirePressureInfo.frontLeft !== null && this.tirePressureInfo.frontLeft <= 150)
                            || (this.tirePressureInfo.frontRight !== null && this.tirePressureInfo.frontRight <= 150)
                            || (this.tirePressureInfo.rearLeft !== null && this.tirePressureInfo.rearLeft <= 150)
                            || (this.tirePressureInfo.rearRight !== null && this.tirePressureInfo.rearRight <= 150)) {
                            this.tirePressureInfo.text = "Tire pressure is dangerously low. Service immediately.";
                            this.tirePressureInfo.icon = this.StatusIcons.RED;
                        } else if ((this.tirePressureInfo.frontLeft !== null && this.tirePressureInfo.frontLeft >= 190)
                            && (this.tirePressureInfo.frontRight !== null && this.tirePressureInfo.frontRight >= 190)
                            && (this.tirePressureInfo.rearLeft !== null && this.tirePressureInfo.rearLeft >= 190)
                            && (this.tirePressureInfo.rearRight !== null && this.tirePressureInfo.rearRight >= 190)) {
                            this.tirePressureInfo.text = "Tire pressure is OK.";
                            this.tirePressureInfo.icon = this.StatusIcons.GREEN;
                        } else {
                            this.tirePressureInfo.text = "Tire pressure is low. Service soon.";
                            this.tirePressureInfo.icon = this.StatusIcons.YELLOW;
                        }
                    }
                    this.tirePressureInfo.unitOfMeasurement = "kPa";
                }
                this.getView().setTelematicsData("Tire Pressure", this.tirePressureInfo);
                this.telematicsLoaded();
            },

            reportTirePressureFrontLeft: function (pressure) {
                if (this.telematicsCount >= 20) {
                    this.tirePressureInfo.frontLeft = pressure;
                }
                this.handleTirePressureData();
            },

            reportTirePressureFrontRight: function (pressure) {
                if (this.telematicsCount >= 20) {
                    this.tirePressureInfo.frontRight = pressure;
                }
                this.handleTirePressureData();
            },

            reportTirePressureRearLeft: function (pressure) {
                if (this.telematicsCount >= 20) {
                    this.tirePressureInfo.rearLeft = pressure;
                }
                this.handleTirePressureData();
            },

            reportTirePressureRearRight: function (pressure) {
                if (this.telematicsCount >= 20) {
                    this.tirePressureInfo.rearRight = pressure;
                }
                this.handleTirePressureData();
            },

            reportTirePressureLow: function (isLow) {
                if (this.telematicsCount >= 20) {
                    this.tirePressureInfo.isLow = isLow;
                }
                this.handleTirePressureData();
            },

            handleTireWearData: function () {
                if (this.telematicsCount >= 20) {
                    if ((this.tireWearInfo.frontLeft !== null && this.tireWearInfo.frontLeft <= 10)
                        || (this.tireWearInfo.frontRight !== null && this.tireWearInfo.frontRight <= 10)
                        || (this.tireWearInfo.rearLeft !== null && this.tireWearInfo.rearLeft <= 10)
                        || (this.tireWearInfo.rearRight !== null && this.tireWearInfo.rearRight <= 10)) {
                        this.tireWearInfo.text = "Tires are dangerously worn. Service immediately.";
                        this.tireWearInfo.icon = this.StatusIcons.RED;
                    } else if ((this.tireWearInfo.frontLeft !== null && this.tireWearInfo.frontLeft >= 20)
                        && (this.tireWearInfo.frontRight !== null && this.tireWearInfo.frontRight >= 20)
                        && (this.tireWearInfo.rearLeft !== null && this.tireWearInfo.rearLeft >= 20)
                        && (this.tireWearInfo.rearRight !== null && this.tireWearInfo.rearRight >= 20)) {
                        this.tireWearInfo.text = "Tire tread is OK.";
                        this.tireWearInfo.icon = this.StatusIcons.GREEN;
                    } else {
                        this.tireWearInfo.text = "Tires are worn. Service soon.";
                        this.tireWearInfo.icon = this.StatusIcons.YELLOW;
                    }
                    this.tireWearInfo.unitOfMeasurement = "%";
                }
                this.getView().setTelematicsData("Tire Wear", this.tireWearInfo);
                this.telematicsLoaded();
            },

            reportTireWearFrontLeft: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.tireWearInfo.frontLeft = wear;
                }
                this.handleTireWearData();
            },

            reportTireWearFrontRight: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.tireWearInfo.frontRight = wear;
                }
                this.handleTireWearData();
            },

            reportTireWearRearLeft: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.tireWearInfo.rearLeft = wear;
                }
                this.handleTireWearData();
            },

            reportTireWearRearRight: function (wear) {
                if (this.telematicsCount >= 20) {
                    this.tireWearInfo.rearRight = wear;
                }
                this.handleTireWearData();
            }
        }
    );

});
