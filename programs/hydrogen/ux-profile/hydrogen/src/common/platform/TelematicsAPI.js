//
// hydrogen implementation
// THIS IS A GENERATED FILE - DO NOT EDIT
//
/**
 * <h2>Hydrogen CES Telematics API 1.0</h2>
 * <h3>Hydrogen CES (hydrogen)</h3>
 */
define(function(require) {
    'use strict';

    var Class                   = require("common/Class"),
        PlatformAPI             = require("common/platform/PlatformAPI"),
        Promise                 = require('common/lib/Promise');

    var getValue = function(ocid, name) {
        return function() {
            var promise = new Promise(),
            self = this;
            this.exec('Telematics.getValue', ocid)
                .done(function(value) {
                    var cb = function(value) {
                        self.unsubscribe('Telematics.' + name, cb);
                        promise.resolve(value);
                    };
                    if (value !== undefined) {
                        promise.resolve(value);
                    } else {
                        self.subscribe('Telematics.' + name, cb);
                    }
                }).fail(function(e) {
                    promise.reject(e);
                });
            return promise;
        };
    };

    /**
     * @description
     * <h2>Hydrogen CES Telematics API 1.0</h2>
     * The TelematicsAPI 1.0 ( for the "hydrogen" profile ) provides an interface by which information concerning the vehicle's various systems and sensors can be queried.
     *
     * @readonly
     *
     * @example
     * var api = new TelematicsAPI();
     * api.getVehicleSpeed().done(function(value) {
     *     txtSpeed.model.set('text', value + ' KPH');
     * });
     *
     * @example
     * var api = new TelematicsAPI();
     * // Subscribe to changes to the vehicle's speed
     * api.subscribe(TelematicsAPI.Event.VEHICLE_SPEED, function(speed) {
     *     this.getView().setVehicleSpeed(value);
     * });
     *
     * @extends module:common/platform/PlatformAPI
     * @namespace hydrogen/TelematicsAPI
     * @class hydrogen/TelematicsAPI
     */
    var TelematicsAPI =  Class.create(
        PlatformAPI,

        /**
        @lends hydrogen/TelematicsAPI.prototype
        @xlends module:common/platform/TelematicsAPI.prototype */
        {
            /**
             * Returns a Promise which resolves as the value
             * of the current Acceleration - Lateral, measured in Meters Per Second Squared.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -40 Max: 41.91
             *
             * @return {module:common/lib/Promise}
             */
            getLateralAcceleration: getValue(906, 'LateralAcceleration'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Acceleration - Longitudinal, measured in Meters Per Second Squared.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -40 Max: 41.91
             *
             * @return {module:common/lib/Promise}
             */
            getLongitudinalAcceleration: getValue(907, 'LongitudinalAcceleration'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Accelerator Pedal Position, measured in Percentage.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 102.5
             *
             * @return {module:common/lib/Promise}
             */
            getAccelPedalPosition: getValue(900, 'AccelPedalPosition'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Automatic Transmission Shift Position, having one of the following values:
             * <ul>
             *  <li>AutomaticTransmissionShiftPosition.BETWEEN_2_POSITIONS</li>
             *  <li>AutomaticTransmissionShiftPosition.PARK</li>
             *  <li>AutomaticTransmissionShiftPosition.REVERSE</li>
             *  <li>AutomaticTransmissionShiftPosition.NEUTRAL</li>
             *  <li>AutomaticTransmissionShiftPosition.DRIVE</li>
             *  <li>AutomaticTransmissionShiftPosition.POSITION_2</li>
             *  <li>AutomaticTransmissionShiftPosition.POSITION_1</li>
             *  <li>AutomaticTransmissionShiftPosition.INVALID</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getAutomaticTransmissionShiftPosition: getValue(649, 'AutomaticTransmissionShiftPosition'),

            /**
             * Value States for AutomaticTransmissionShiftPosition
             * @enum
             * @type Number
             */
            AutomaticTransmissionShiftPosition: {
                /** Between 2 Positions */
                BETWEEN_2_POSITIONS: 0,
                /** Park */
                PARK: 1,
                /** Reverse */
                REVERSE: 2,
                /** Neutral */
                NEUTRAL: 3,
                /** Drive */
                DRIVE: 4,
                /** Shift Position S(2) */
                POSITION_2: 5,
                /** Shift Position L(1) */
                POSITION_1: 6,
                /** Invalid */
                INVALID: 16
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Fluid Level Low, having one of the following values:
             * <ul>
             *  <li>BrakeFluidLevelLow.NOT_LOW</li>
             *  <li>BrakeFluidLevelLow.LOW</li>
             *  <li>BrakeFluidLevelLow.ERROR</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getBrakeFluidLevelLow: getValue(605, 'BrakeFluidLevelLow'),

            /**
             * Value States for BrakeFluidLevelLow
             * @enum
             * @type Number
             */
            BrakeFluidLevelLow: {
                /** Not Low */
                NOT_LOW: 0,
                /** Low */
                LOW: 1,
                /** Error */
                ERROR: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Pad Wear Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getBrakePadWearFrontLeft: getValue(708, 'BrakePadWearFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Pad Wear Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getBrakePadWearFrontRight: getValue(709, 'BrakePadWearFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Pad Wear Rear Left, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getBrakePadWearRearLeft: getValue(710, 'BrakePadWearRearLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Pad Wear Rear Right, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getBrakePadWearRearRight: getValue(711, 'BrakePadWearRearRight'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Brake Pedal Depressed.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isBrakePedalDepressed: getValue(606, 'BrakePedalDepressed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Clutch Wear Level, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getClutchWearLevel: getValue(707, 'ClutchWearLevel'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Distance Travelled - Total, measured in Kilometer.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 15000
             *
             * @return {module:common/lib/Promise}
             */
            getDistanceTravelledTotal: getValue(9, 'DistanceTravelledTotal'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Engine Coolant Temp, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -40 Max: 214
             *
             * @return {module:common/lib/Promise}
             */
            getEngineCoolantTemp: getValue(902, 'EngineCoolantTemp'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Engine Oil Life Remaining, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getEngineOilLifeRemaining: getValue(699, 'EngineOilLifeRemaining'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Engine Speed, measured in Rotations Per Minute.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 16380
             *
             * @return {module:common/lib/Promise}
             */
            getEngineSpeed: getValue(903, 'EngineSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Exterior Temperature, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getExteriorTemperature: getValue(788, 'ExteriorTemperature'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Front Wiper Status, having one of the following values:
             * <ul>
             *  <li>FrontWiperStatus.OFF</li>
             *  <li>FrontWiperStatus.SLOW_SPEED</li>
             *  <li>FrontWiperStatus.FAST_SPEED</li>
             * </ul>
             * <br/>
             * <br/> Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            getFrontWiperStatus: getValue(619, 'FrontWiperStatus'),

            /**
             * Value States for FrontWiperStatus
             * @enum
             * @type Number
             */
            FrontWiperStatus: {
                /** Off */
                OFF: 0,
                /** Slow Speed */
                SLOW_SPEED: 1,
                /** Fast Speed */
                FAST_SPEED: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Fuel Consumption - Drive - Total, measured in Liter.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 1000
             *
             * @return {module:common/lib/Promise}
             */
            getTotalFuelConsumptionDrive: getValue(375, 'TotalFuelConsumptionDrive'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Fuel Efficiency - Drive - Mean, measured in Liters Per One Hundred Kilometers.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 500
             *
             * @return {module:common/lib/Promise}
             */
            getMeanFuelEfficiencyDrive: getValue(854, 'MeanFuelEfficiencyDrive'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Fuel Efficiency Instant, measured in Liters Per One Hundred Kilometers.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 500
             *
             * @return {module:common/lib/Promise}
             */
            getFuelEfficiencyInstant: getValue(850, 'FuelEfficiencyInstant'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Fuel Level, measured in Percentage.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getFuelLevel: getValue(904, 'FuelLevel'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Gear Position, having one of the following values:
             * <ul>
             *  <li>GearPosition.PARK_OR_NEUTRAL</li>
             *  <li>GearPosition.GEAR_1ST</li>
             *  <li>GearPosition.GEAR_2ND</li>
             *  <li>GearPosition.GEAR_3RD</li>
             *  <li>GearPosition.GEAR_4TH</li>
             *  <li>GearPosition.GEAR_5TH</li>
             *  <li>GearPosition.GEAR_6TH</li>
             *  <li>GearPosition.GEAR_7TH</li>
             *  <li>GearPosition.GEAR_8TH</li>
             *  <li>GearPosition.REVERSE</li>
             *  <li>GearPosition.UNKNOWN</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getGearPosition: getValue(620, 'GearPosition'),

            /**
             * Value States for GearPosition
             * @enum
             * @type Number
             */
            GearPosition: {
                /** Park or Neutral */
                PARK_OR_NEUTRAL: 0,
                /** 1st Gear */
                GEAR_1ST: 1,
                /** 2nd Gear */
                GEAR_2ND: 2,
                /** 3rd Gear */
                GEAR_3RD: 3,
                /** 4th Gear */
                GEAR_4TH: 4,
                /** 5th Gear */
                GEAR_5TH: 5,
                /** 6th Gear */
                GEAR_6TH: 6,
                /** 7th Gear */
                GEAR_7TH: 7,
                /** 8th Gear */
                GEAR_8TH: 8,
                /** Reverse */
                REVERSE: 15,
                /** Unknown */
                UNKNOWN: 16
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS - Altitude, measured in Meter.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: -1024 Max: 7168
             *
             * @return {module:common/lib/Promise}
             */
            getGpsAltitude: getValue(621, 'GpsAltitude'),

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS - Heading, measured in Angular Degrees.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: 0 Max: 360
             *
             * @return {module:common/lib/Promise}
             */
            getGpsHeading: getValue(613, 'GpsHeading'),

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS - Latitude, measured in Angular Degrees.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: -90 Max: 90
             *
             * @return {module:common/lib/Promise}
             */
            getGpsLatitude: getValue(3, 'GpsLatitude'),

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS - Longitude, measured in Angular Degrees.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: -180 Max: 180
             *
             * @return {module:common/lib/Promise}
             */
            getGpsLongitude: getValue(4, 'GpsLongitude'),

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS Accuracy, measured in Meter.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getGpsAccuracy: getValue(914, 'GpsAccuracy'),

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS Altitude Accuracy, measured in Meter.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getGpsAltitudeAccuracy: getValue(915, 'GpsAltitudeAccuracy'),

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS Fix Status, having one of the following values:
             * <ul>
             *  <li>GpsFixStatus.NONE</li>
             *  <li>GpsFixStatus.FIX</li>
             *  <li>GpsFixStatus.ESTIMATED</li>
             * </ul>
             * <br/>
             * <br/> Category: Location
             *
             * @return {module:common/lib/Promise}
             */
            getGpsFixStatus: getValue(916, 'GpsFixStatus'),

            /**
             * Value States for GpsFixStatus
             * @enum
             * @type Number
             */
            GpsFixStatus: {
                /** None */
                NONE: 0,
                /** Fix */
                FIX: 1,
                /** Estimated */
                ESTIMATED: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current GPS Timestamp, measured in Count.
             * <br/>
             * <br/> Category: Location
             * <br/> Min: 0 Max: 240000
             *
             * @return {module:common/lib/Promise}
             */
            getGpsTimestamp: getValue(917, 'GpsTimestamp'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Level of Charge, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 127.5
             *
             * @return {module:common/lib/Promise}
             */
            getLevelOfCharge: getValue(811, 'LevelOfCharge'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Odometer, measured in Kilometer.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 16777215
             *
             * @return {module:common/lib/Promise}
             */
            getOdometer: getValue(633, 'Odometer'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Oil Level Low.
             * <br/>
             * <br/>Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            isOilLevelLow: getValue(705, 'OilLevelLow'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Parking Brake On, having one of the following values:
             * <ul>
             *  <li>ParkingBrakeOn.OFF</li>
             *  <li>ParkingBrakeOn.ON</li>
             *  <li>ParkingBrakeOn.ERROR</li>
             * </ul>
             * <br/>
             * <br/> Category: Parking
             *
             * @return {module:common/lib/Promise}
             */
            getParkingBrakeOn: getValue(634, 'ParkingBrakeOn'),

            /**
             * Value States for ParkingBrakeOn
             * @enum
             * @type Number
             */
            ParkingBrakeOn: {
                /** Off */
                OFF: 0,
                /** On */
                ON: 1,
                /** Error */
                ERROR: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Steering Angle, measured in Angular Degrees.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -1600 Max: 1600
             *
             * @return {module:common/lib/Promise}
             */
            getSteeringWheelAngle: getValue(637, 'SteeringWheelAngle'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Throttle Position, measured in Percentage.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getThrottlePosition: getValue(529, 'ThrottlePosition'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Front Left, measured in Kilopascal.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 765
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureFrontLeft: getValue(715, 'TirePressureFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Front Right, measured in Kilopascal.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 765
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureFrontRight: getValue(716, 'TirePressureFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Rear Left, measured in Kilopascal.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 765
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureRearLeft: getValue(717, 'TirePressureRearLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Rear Right, measured in Kilopascal.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 765
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureRearRight: getValue(718, 'TirePressureRearRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Transmission Mode, having one of the following values:
             * <ul>
             *  <li>TransmissionMode.PARK</li>
             *  <li>TransmissionMode.REVERSE</li>
             *  <li>TransmissionMode.NEUTRAL</li>
             *  <li>TransmissionMode.LOW</li>
             *  <li>TransmissionMode.DRIVE</li>
             *  <li>TransmissionMode.OVERDRIVE</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getTransmissionMode: getValue(676, 'TransmissionMode'),

            /**
             * Value States for TransmissionMode
             * @enum
             * @type Number
             */
            TransmissionMode: {
                /** Park */
                PARK: 1,
                /** Reverse */
                REVERSE: 2,
                /** Neutral */
                NEUTRAL: 3,
                /** Low */
                LOW: 4,
                /** Drive */
                DRIVE: 5,
                /** Overdrive */
                OVERDRIVE: 6
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Key Position (Power Status), having one of the following values:
             * <ul>
             *  <li>VehicleKeyPosition.OFF</li>
             *  <li>VehicleKeyPosition.ACCESSORY</li>
             *  <li>VehicleKeyPosition.ON</li>
             *  <li>VehicleKeyPosition.CRANKING</li>
             *  <li>VehicleKeyPosition.ERROR</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleKeyPosition: getValue(642, 'VehicleKeyPosition'),

            /**
             * Value States for VehicleKeyPosition
             * @enum
             * @type Number
             */
            VehicleKeyPosition: {
                /** Off */
                OFF: 0,
                /** Accessory (ACC) */
                ACCESSORY: 1,
                /** On */
                ON: 2,
                /** Cranking */
                CRANKING: 3,
                /** Error */
                ERROR: 4
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Speed, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 655.35
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleSpeed: getValue(908, 'VehicleSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Washer Fluid Level, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getWasherFluidLevel: getValue(712, 'WasherFluidLevel'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Wheel Speed - Front Left, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getFrontLeftWheelSpeed: getValue(910, 'FrontLeftWheelSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Wheel Speed - Front Right, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getFrontRightWheelSpeed: getValue(911, 'FrontRightWheelSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Wheel Speed - Rear Left, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getRearLeftWheelSpeed: getValue(912, 'RearLeftWheelSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Wheel Speed - Rear Right, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getRearRightWheelSpeed: getValue(913, 'RearRightWheelSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Yaw Rate, measured in Angular Degrees Per Second.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -74.98161 Max: 75.01824
             *
             * @return {module:common/lib/Promise}
             */
            getYawrate: getValue(909, 'Yawrate')
        }
    );

    /**
    * Enumeration of Telematics events.
    * @enum {string}
    * @readonly
    * @memberof hydrogen/TelematicsAPI
    */
    TelematicsAPI.Event = {
        //** Event identifier for change in Acceleration - Lateral */
        LATERAL_ACCELERATION: 'Telematics.LateralAcceleration',

        //** Event identifier for change in Acceleration - Longitudinal */
        LONGITUDINAL_ACCELERATION: 'Telematics.LongitudinalAcceleration',

        //** Event identifier for change in Accelerator Pedal Position */
        ACCEL_PEDAL_POSITION: 'Telematics.AccelPedalPosition',

        //** Event identifier for change in Automatic Transmission Shift Position */
        AUTOMATIC_TRANSMISSION_SHIFT_POSITION: 'Telematics.AutomaticTransmissionShiftPosition',

        //** Event identifier for change in Brake Fluid Level Low */
        BRAKE_FLUID_LEVEL_LOW: 'Telematics.BrakeFluidLevelLow',

        //** Event identifier for change in Brake Pad Wear Front Left */
        BRAKE_PAD_WEAR_FRONT_LEFT: 'Telematics.BrakePadWearFrontLeft',

        //** Event identifier for change in Brake Pad Wear Front Right */
        BRAKE_PAD_WEAR_FRONT_RIGHT: 'Telematics.BrakePadWearFrontRight',

        //** Event identifier for change in Brake Pad Wear Rear Left */
        BRAKE_PAD_WEAR_REAR_LEFT: 'Telematics.BrakePadWearRearLeft',

        //** Event identifier for change in Brake Pad Wear Rear Right */
        BRAKE_PAD_WEAR_REAR_RIGHT: 'Telematics.BrakePadWearRearRight',

        //** Event identifier for change in Brake Pedal Depressed */
        BRAKE_PEDAL_DEPRESSED: 'Telematics.BrakePedalDepressed',

        //** Event identifier for change in Clutch Wear Level */
        CLUTCH_WEAR_LEVEL: 'Telematics.ClutchWearLevel',

        //** Event identifier for change in Distance Travelled - Total */
        DISTANCE_TRAVELLED_TOTAL: 'Telematics.DistanceTravelledTotal',

        //** Event identifier for change in Engine Coolant Temp */
        ENGINE_COOLANT_TEMP: 'Telematics.EngineCoolantTemp',

        //** Event identifier for change in Engine Oil Life Remaining */
        ENGINE_OIL_LIFE_REMAINING: 'Telematics.EngineOilLifeRemaining',

        //** Event identifier for change in Engine Speed */
        ENGINE_SPEED: 'Telematics.EngineSpeed',

        //** Event identifier for change in Exterior Temperature */
        EXTERIOR_TEMPERATURE: 'Telematics.ExteriorTemperature',

        //** Event identifier for change in Front Wiper Status */
        FRONT_WIPER_STATUS: 'Telematics.FrontWiperStatus',

        //** Event identifier for change in Fuel Consumption - Drive - Total */
        TOTAL_FUEL_CONSUMPTION_DRIVE: 'Telematics.TotalFuelConsumptionDrive',

        //** Event identifier for change in Fuel Efficiency - Drive - Mean */
        MEAN_FUEL_EFFICIENCY_DRIVE: 'Telematics.MeanFuelEfficiencyDrive',

        //** Event identifier for change in Fuel Efficiency Instant */
        FUEL_EFFICIENCY_INSTANT: 'Telematics.FuelEfficiencyInstant',

        //** Event identifier for change in Fuel Level */
        FUEL_LEVEL: 'Telematics.FuelLevel',

        //** Event identifier for change in Gear Position */
        GEAR_POSITION: 'Telematics.GearPosition',

        //** Event identifier for change in GPS - Altitude */
        GPS_ALTITUDE: 'Telematics.GpsAltitude',

        //** Event identifier for change in GPS - Heading */
        GPS_HEADING: 'Telematics.GpsHeading',

        //** Event identifier for change in GPS - Latitude */
        GPS_LATITUDE: 'Telematics.GpsLatitude',

        //** Event identifier for change in GPS - Longitude */
        GPS_LONGITUDE: 'Telematics.GpsLongitude',

        //** Event identifier for change in GPS Accuracy */
        GPS_ACCURACY: 'Telematics.GpsAccuracy',

        //** Event identifier for change in GPS Altitude Accuracy */
        GPS_ALTITUDE_ACCURACY: 'Telematics.GpsAltitudeAccuracy',

        //** Event identifier for change in GPS Fix Status */
        GPS_FIX_STATUS: 'Telematics.GpsFixStatus',

        //** Event identifier for change in GPS Timestamp */
        GPS_TIMESTAMP: 'Telematics.GpsTimestamp',

        //** Event identifier for change in Level of Charge */
        LEVEL_OF_CHARGE: 'Telematics.LevelOfCharge',

        //** Event identifier for change in Odometer */
        ODOMETER: 'Telematics.Odometer',

        //** Event identifier for change in Oil Level Low */
        OIL_LEVEL_LOW: 'Telematics.OilLevelLow',

        //** Event identifier for change in Parking Brake On */
        PARKING_BRAKE_ON: 'Telematics.ParkingBrakeOn',

        //** Event identifier for change in Steering Angle */
        STEERING_WHEEL_ANGLE: 'Telematics.SteeringWheelAngle',

        //** Event identifier for change in Throttle Position */
        THROTTLE_POSITION: 'Telematics.ThrottlePosition',

        //** Event identifier for change in Tire Pressure Front Left */
        TIRE_PRESSURE_FRONT_LEFT: 'Telematics.TirePressureFrontLeft',

        //** Event identifier for change in Tire Pressure Front Right */
        TIRE_PRESSURE_FRONT_RIGHT: 'Telematics.TirePressureFrontRight',

        //** Event identifier for change in Tire Pressure Rear Left */
        TIRE_PRESSURE_REAR_LEFT: 'Telematics.TirePressureRearLeft',

        //** Event identifier for change in Tire Pressure Rear Right */
        TIRE_PRESSURE_REAR_RIGHT: 'Telematics.TirePressureRearRight',

        //** Event identifier for change in Transmission Mode */
        TRANSMISSION_MODE: 'Telematics.TransmissionMode',

        //** Event identifier for change in Vehicle Key Position (Power Status) */
        VEHICLE_KEY_POSITION: 'Telematics.VehicleKeyPosition',

        //** Event identifier for change in Vehicle Speed */
        VEHICLE_SPEED: 'Telematics.VehicleSpeed',

        //** Event identifier for change in Washer Fluid Level */
        WASHER_FLUID_LEVEL: 'Telematics.WasherFluidLevel',

        //** Event identifier for change in Wheel Speed - Front Left */
        FRONT_LEFT_WHEEL_SPEED: 'Telematics.FrontLeftWheelSpeed',

        //** Event identifier for change in Wheel Speed - Front Right */
        FRONT_RIGHT_WHEEL_SPEED: 'Telematics.FrontRightWheelSpeed',

        //** Event identifier for change in Wheel Speed - Rear Left */
        REAR_LEFT_WHEEL_SPEED: 'Telematics.RearLeftWheelSpeed',

        //** Event identifier for change in Wheel Speed - Rear Right */
        REAR_RIGHT_WHEEL_SPEED: 'Telematics.RearRightWheelSpeed',

        //** Event identifier for change in Yaw Rate */
        YAWRATE: 'Telematics.Yawrate'
    };
    Object.freeze(TelematicsAPI.Event);

    return TelematicsAPI;
});
