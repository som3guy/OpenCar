//
// oxygen implementation
// THIS IS A GENERATED FILE - DO NOT EDIT
//
/**
 * <h2>Oxygen CES Telematics API 1.0</h2>
 * <h3>Oxygen CES (oxygen)</h3>
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
     * <h2>Oxygen CES Telematics API 1.0</h2>
     * The TelematicsAPI 1.0 ( for the "oxygen" profile ) provides an interface by which information concerning the vehicle's various systems and sensors can be queried.
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
     * @namespace oxygen/TelematicsAPI
     * @class oxygen/TelematicsAPI
     */
    var TelematicsAPI =  Class.create(
        PlatformAPI,

        /**
        @lends oxygen/TelematicsAPI.prototype
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
             * of the current Acceleration - Vertical, measured in Meters Per Second Squared.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -40 Max: 40
             *
             * @return {module:common/lib/Promise}
             */
            getVerticalAcceleration: getValue(821, 'VerticalAcceleration'),

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
             * of the current Accumulated Engine Run Time, measured in Second.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 4294967295
             *
             * @return {module:common/lib/Promise}
             */
            getAccumulatedEngineRunTime: getValue(675, 'AccumulatedEngineRunTime'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Active Noise Control Mode.
             * <br/>
             * <br/>Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            isActiveNoiseControlMode: getValue(844, 'ActiveNoiseControlMode'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Adaptive Cruise Control Active.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isAdaptiveCruiseControlActive: getValue(678, 'AdaptiveCruiseControlActive'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Air Conditioner On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isAirConditionerOn: getValue(601, 'AirConditionerOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Air Recirculation On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isAirRecirculationOn: getValue(794, 'AirRecirculationOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Airbag Deployed.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isAirbagDeployed: getValue(602, 'AirbagDeployed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Airbag Status Left, having one of the following values:
             * <ul>
             *  <li>AirbagStatusLeft.NOT_ACTIVE</li>
             *  <li>AirbagStatusLeft.ACTIVE</li>
             *  <li>AirbagStatusLeft.DEPLOYED</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getAirbagStatusLeft: getValue(747, 'AirbagStatusLeft'),

            /**
             * Value States for AirbagStatusLeft
             * @enum
             * @type Number
             */
            AirbagStatusLeft: {
                /** Not Active */
                NOT_ACTIVE: 1,
                /** Active  */
                ACTIVE: 2,
                /** Deployed */
                DEPLOYED: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Airbag Status Right, having one of the following values:
             * <ul>
             *  <li>AirbagStatusRight.NOT_ACTIVE</li>
             *  <li>AirbagStatusRight.ACTIVE</li>
             *  <li>AirbagStatusRight.DEPLOYED</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getAirbagStatusRight: getValue(748, 'AirbagStatusRight'),

            /**
             * Value States for AirbagStatusRight
             * @enum
             * @type Number
             */
            AirbagStatusRight: {
                /** Not Active */
                NOT_ACTIVE: 1,
                /** Active  */
                ACTIVE: 2,
                /** Deployed */
                DEPLOYED: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Alarm Status, having one of the following values:
             * <ul>
             *  <li>AlarmStatus.DISARMED</li>
             *  <li>AlarmStatus.PREARMED</li>
             *  <li>AlarmStatus.ARMED</li>
             *  <li>AlarmStatus.ALARMED</li>
             * </ul>
             * <br/>
             * <br/> Category: Parking
             *
             * @return {module:common/lib/Promise}
             */
            getAlarmStatus: getValue(890, 'AlarmStatus'),

            /**
             * Value States for AlarmStatus
             * @enum
             * @type Number
             */
            AlarmStatus: {
                /** Disarmed */
                DISARMED: 0,
                /** Pre-armed */
                PREARMED: 1,
                /** Armed */
                ARMED: 2,
                /** Alarmed */
                ALARMED: 3
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Antilock Braking System Enabled.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isAntilockBrakingSystemEnabled: getValue(742, 'AntilockBrakingSystemEnabled'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Antilock Braking System Engaged.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isAntilockBrakingSystemEngaged: getValue(743, 'AntilockBrakingSystemEngaged'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Atmospheric Pressure, measured in Kilopascal.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getAtmosphericPressure: getValue(326, 'AtmosphericPressure'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Automatic Headlight Active.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isAutomaticHeadlightActive: getValue(692, 'AutomaticHeadlightActive'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Battery Charge Cord Connected.
             * <br/>
             * <br/>Category: Electric Vehicle
             *
             * @return {module:common/lib/Promise}
             */
            isBatteryChargeCordConnected: getValue(812, 'BatteryChargeCordConnected'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Battery Current Consumption, measured in Ampere.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getBatteryCurrentConsumption: getValue(603, 'BatteryCurrentConsumption'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Battery Voltage, measured in Volt.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getBatteryVoltage: getValue(714, 'BatteryVoltage'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Blower Fan Speed, having one of the following values:
             * <ul>
             *  <li>BlowerFanSpeed.OFF</li>
             *  <li>BlowerFanSpeed.SPEED_1</li>
             *  <li>BlowerFanSpeed.SPEED_2</li>
             *  <li>BlowerFanSpeed.SPEED_3</li>
             *  <li>BlowerFanSpeed.SPEED_4</li>
             *  <li>BlowerFanSpeed.SPEED_5</li>
             *  <li>BlowerFanSpeed.SPEED_6</li>
             *  <li>BlowerFanSpeed.SPEED_7</li>
             *  <li>BlowerFanSpeed.SPEED_8</li>
             *  <li>BlowerFanSpeed.SPEED_9</li>
             *  <li>BlowerFanSpeed.SPEED_10</li>
             * </ul>
             * <br/>
             * <br/> Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            getBlowerFanSpeed: getValue(604, 'BlowerFanSpeed'),

            /**
             * Value States for BlowerFanSpeed
             * @enum
             * @type Number
             */
            BlowerFanSpeed: {
                /** Inactive */
                OFF: 0,
                /** Speed 1 */
                SPEED_1: 1,
                /** Speed 2 */
                SPEED_2: 2,
                /** Speed 3 */
                SPEED_3: 3,
                /** Speed 4 */
                SPEED_4: 4,
                /** Speed 5 */
                SPEED_5: 5,
                /** Speed 6 */
                SPEED_6: 6,
                /** Speed 7 */
                SPEED_7: 7,
                /** Speed 8 */
                SPEED_8: 8,
                /** Speed 9 */
                SPEED_9: 9,
                /** Speed 10 */
                SPEED_10: 10
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Fluid Hydraulic Pressure, measured in Megapascal.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -5 Max: 19.969216
             *
             * @return {module:common/lib/Promise}
             */
            getBrakeFluidHydraulicPressure: getValue(901, 'BrakeFluidHydraulicPressure'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Brake Fluid Level, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getBrakeFluidLevel: getValue(872, 'BrakeFluidLevel'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Brake Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isBrakeLightOn: getValue(686, 'BrakeLightOn'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Brakes Worn.
             * <br/>
             * <br/>Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            isBrakesWorn: getValue(871, 'BrakesWorn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Center Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isCenterLightOn: getValue(691, 'CenterLightOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Change Engine Oil.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isChangeEngineOil: getValue(700, 'ChangeEngineOil'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Charging Status On.
             * <br/>
             * <br/>Category: Electric Vehicle
             *
             * @return {module:common/lib/Promise}
             */
            isChargingStatusOn: getValue(810, 'ChargingStatusOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Child Safety Lock On.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isChildSafetyLockOn: getValue(765, 'ChildSafetyLockOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Chime On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isChimeOn: getValue(695, 'ChimeOn'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Convertible Roof On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isConvertibleRoofOn: getValue(808, 'ConvertibleRoofOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Cruise Control Active.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isCruiseControlActive: getValue(677, 'CruiseControlActive'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Cruise Control Speed Setting, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getCruiseControlSettingSpeed: getValue(636, 'CruiseControlSettingSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Dashboard Illumination, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getDashboardIllumination: getValue(843, 'DashboardIllumination'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Defrost Rear Windshield On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isDefrostRearWindshieldOn: getValue(796, 'DefrostRearWindshieldOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Defrost Side Mirrors On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isDefrostSideMirrorsOn: getValue(797, 'DefrostSideMirrorsOn'),

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
             * of the current Distance Travelled Since Codes Cleared, measured in Meter.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 65535000
             *
             * @return {module:common/lib/Promise}
             */
            getDistanceTravelledSinceCodesCleared: getValue(355, 'DistanceTravelledSinceCodesCleared'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Distance Travelled With Malfunction Indicator Light On, measured in Meter.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 65535000
             *
             * @return {module:common/lib/Promise}
             */
            getDistanceTravelledWithMilOn: getValue(352, 'DistanceTravelledWithMilOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Door Locked Driver.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isDoorLockedDriver: getValue(758, 'DoorLockedDriver'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Door Locked Passenger.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isDoorLockedPassenger: getValue(759, 'DoorLockedPassenger'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Door Locked Rear Left.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isDoorLockedRearLeft: getValue(760, 'DoorLockedRearLeft'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Door Locked Rear Right.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isDoorLockedRearRight: getValue(761, 'DoorLockedRearRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Driver, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusDriver.OPEN</li>
             *  <li>DoorOpenStatusDriver.CLOSED</li>
             *  <li>DoorOpenStatusDriver.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusDriver: getValue(750, 'DoorOpenStatusDriver'),

            /**
             * Value States for DoorOpenStatusDriver
             * @enum
             * @type Number
             */
            DoorOpenStatusDriver: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Fuel Filler Cap, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusFuelFillerCap.OPEN</li>
             *  <li>DoorOpenStatusFuelFillerCap.CLOSED</li>
             *  <li>DoorOpenStatusFuelFillerCap.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusFuelFillerCap: getValue(755, 'DoorOpenStatusFuelFillerCap'),

            /**
             * Value States for DoorOpenStatusFuelFillerCap
             * @enum
             * @type Number
             */
            DoorOpenStatusFuelFillerCap: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Hood, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusHood.OPEN</li>
             *  <li>DoorOpenStatusHood.CLOSED</li>
             *  <li>DoorOpenStatusHood.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusHood: getValue(756, 'DoorOpenStatusHood'),

            /**
             * Value States for DoorOpenStatusHood
             * @enum
             * @type Number
             */
            DoorOpenStatusHood: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Passenger, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusPassenger.OPEN</li>
             *  <li>DoorOpenStatusPassenger.CLOSED</li>
             *  <li>DoorOpenStatusPassenger.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusPassenger: getValue(751, 'DoorOpenStatusPassenger'),

            /**
             * Value States for DoorOpenStatusPassenger
             * @enum
             * @type Number
             */
            DoorOpenStatusPassenger: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Rear Left, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusRearLeft.OPEN</li>
             *  <li>DoorOpenStatusRearLeft.CLOSED</li>
             *  <li>DoorOpenStatusRearLeft.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusRearLeft: getValue(752, 'DoorOpenStatusRearLeft'),

            /**
             * Value States for DoorOpenStatusRearLeft
             * @enum
             * @type Number
             */
            DoorOpenStatusRearLeft: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Rear Right, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusRearRight.OPEN</li>
             *  <li>DoorOpenStatusRearRight.CLOSED</li>
             *  <li>DoorOpenStatusRearRight.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusRearRight: getValue(753, 'DoorOpenStatusRearRight'),

            /**
             * Value States for DoorOpenStatusRearRight
             * @enum
             * @type Number
             */
            DoorOpenStatusRearRight: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Door Open Status Trunk, having one of the following values:
             * <ul>
             *  <li>DoorOpenStatusTrunk.OPEN</li>
             *  <li>DoorOpenStatusTrunk.CLOSED</li>
             *  <li>DoorOpenStatusTrunk.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getDoorOpenStatusTrunk: getValue(754, 'DoorOpenStatusTrunk'),

            /**
             * Value States for DoorOpenStatusTrunk
             * @enum
             * @type Number
             */
            DoorOpenStatusTrunk: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Driver Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isDriverLightOn: getValue(689, 'DriverLightOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Driving Mode, having one of the following values:
             * <ul>
             *  <li>DrivingMode.COMFORT</li>
             *  <li>DrivingMode.AUTO</li>
             *  <li>DrivingMode.SPORT</li>
             *  <li>DrivingMode.ECO</li>
             *  <li>DrivingMode.MANUAL</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getDrivingMode: getValue(739, 'DrivingMode'),

            /**
             * Value States for DrivingMode
             * @enum
             * @type Number
             */
            DrivingMode: {
                /** Comfort */
                COMFORT: 1,
                /** Auto */
                AUTO: 2,
                /** Sport */
                SPORT: 3,
                /** Eco */
                ECO: 4,
                /** Manual */
                MANUAL: 5
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Dynamic High Beam Active.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isDynamicHighBeamActive: getValue(693, 'DynamicHighBeamActive'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Electronic Stability Control Enabled.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isElectronicStabilityControlEnabled: getValue(745, 'ElectronicStabilityControlEnabled'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Electronic Stability Control Engaged.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isElectronicStabilityControlEngaged: getValue(875, 'ElectronicStabilityControlEngaged'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Engine Coolant Level, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getEngineCoolantLevel: getValue(702, 'EngineCoolantLevel'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Engine Coolant Level Low.
             * <br/>
             * <br/>Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            isEngineCoolantLevelLow: getValue(703, 'EngineCoolantLevelLow'),

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
             * of the current Engine Oil Pressure, measured in Kilopascal.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 765
             *
             * @return {module:common/lib/Promise}
             */
            getEngineOilPressure: getValue(701, 'EngineOilPressure'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Engine Oil Temperature, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getEngineOilTemp: getValue(345, 'EngineOilTemp'),

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
             * of the current Estimated Range Remaining, measured in Kilometer.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 655.35
             *
             * @return {module:common/lib/Promise}
             */
            getEstimatedRangeRemaining: getValue(697, 'EstimatedRangeRemaining'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Exterior Brightness, measured in Lux.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 167772.15
             *
             * @return {module:common/lib/Promise}
             */
            getExteriorBrightness: getValue(789, 'ExteriorBrightness'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Front Collision Detection Active.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isFrontCollisionDetectionActive: getValue(779, 'FrontCollisionDetectionActive'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Front Collision Detection Distance, measured in Meter.
             * <br/>
             * <br/> Category: Driver Safety
             * <br/> Min: 0 Max: 25.5
             *
             * @return {module:common/lib/Promise}
             */
            getFrontCollisionDetectionDistance: getValue(780, 'FrontCollisionDetectionDistance'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Front Collision Detection Time, measured in Second.
             * <br/>
             * <br/> Category: Driver Safety
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getFrontCollisionDetectionTime: getValue(781, 'FrontCollisionDetectionTime'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Front Defroster On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isFrontDefroster: getValue(617, 'FrontDefroster'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Front Fog Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isFrontFogLightOn: getValue(618, 'FrontFogLightOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Front Wheel Radius, measured in Meter.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getFrontWheelRadius: getValue(662, 'FrontWheelRadius'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Fuel Cap Locked.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isFuelCapLocked: getValue(763, 'FuelCapLocked'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Fuel Configuration, having one of the following values:
             * <ul>
             *  <li>FuelConfiguration.NOT_AVAILABLE</li>
             *  <li>FuelConfiguration.GASOLINE</li>
             *  <li>FuelConfiguration.METHANOL</li>
             *  <li>FuelConfiguration.ETHANOL</li>
             *  <li>FuelConfiguration.DIESEL</li>
             *  <li>FuelConfiguration.LIQUEFIED_PETROLEUM_GAS</li>
             *  <li>FuelConfiguration.COMPRESSED_NATURAL_GAS</li>
             *  <li>FuelConfiguration.PROPANE</li>
             *  <li>FuelConfiguration.BATTERY_ELECTRIC</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getFuelConfiguration: getValue(868, 'FuelConfiguration'),

            /**
             * Value States for FuelConfiguration
             * @enum
             * @type Number
             */
            FuelConfiguration: {
                /** Not Available */
                NOT_AVAILABLE: 0,
                /** Gasoline&#x2F;Petrol */
                GASOLINE: 1,
                /** Methanol */
                METHANOL: 2,
                /** Ethanol */
                ETHANOL: 3,
                /** Diesel */
                DIESEL: 4,
                /** Liquefied Petroleum Gas (LPG) */
                LIQUEFIED_PETROLEUM_GAS: 5,
                /** Compressed Natural Gas (CNG) */
                COMPRESSED_NATURAL_GAS: 6,
                /** Propane */
                PROPANE: 7,
                /** Battery Electric */
                BATTERY_ELECTRIC: 8
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
             * of the current Generated Vehicle Sound Mode, having one of the following values:
             * <ul>
             *  <li>GeneratedVehicleSoundMode.NORMAL</li>
             *  <li>GeneratedVehicleSoundMode.QUIET</li>
             *  <li>GeneratedVehicleSoundMode.SPORT</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getGeneratedVehicleSoundMode: getValue(741, 'GeneratedVehicleSoundMode'),

            /**
             * Value States for GeneratedVehicleSoundMode
             * @enum
             * @type Number
             */
            GeneratedVehicleSoundMode: {
                /** Normal */
                NORMAL: 1,
                /** Quiet */
                QUIET: 2,
                /** Sport */
                SPORT: 3
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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Hazard Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isHazardLightOn: getValue(687, 'HazardLightOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Headlight On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isHeadlightOn: getValue(681, 'HeadlightOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Headlight Status, having one of the following values:
             * <ul>
             *  <li>LightStatus.OFF</li>
             *  <li>LightStatus.DAYTIME_RUNNING_LIGHTS_ON</li>
             *  <li>LightStatus.TNS_ON</li>
             *  <li>LightStatus.HEADLIGHT_LOW</li>
             *  <li>LightStatus.HEADLIGHT_HIGH</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getLightStatus: getValue(631, 'LightStatus'),

            /**
             * Value States for LightStatus
             * @enum
             * @type Number
             */
            LightStatus: {
                /** Light Off */
                OFF: 0,
                /** Daytime Running Lights On */
                DAYTIME_RUNNING_LIGHTS_ON: 1,
                /** TNS On */
                TNS_ON: 2,
                /** Headlight Low */
                HEADLIGHT_LOW: 3,
                /** Headlight High */
                HEADLIGHT_HIGH: 4
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Heater On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isHeaterOn: getValue(795, 'HeaterOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Highbeam On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isHighbeamOn: getValue(683, 'HighbeamOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Hood Locked.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isHoodLocked: getValue(764, 'HoodLocked'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Horn On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isHornOn: getValue(694, 'HornOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current HVAC Fan Direction, having one of the following values:
             * <ul>
             *  <li>HVACFanDirection.FRONT_PANEL</li>
             *  <li>HVACFanDirection.FLOOR_DUCT</li>
             *  <li>HVACFanDirection.FRONT_AND_FLOOR</li>
             *  <li>HVACFanDirection.DEFROSTER_AND_FLOOR</li>
             * </ul>
             * <br/>
             * <br/> Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            getHVACFanDirection: getValue(792, 'HVACFanDirection'),

            /**
             * Value States for HVACFanDirection
             * @enum
             * @type Number
             */
            HVACFanDirection: {
                /** Front Panel */
                FRONT_PANEL: 1,
                /** Floor Duct */
                FLOOR_DUCT: 2,
                /** Front + Floor */
                FRONT_AND_FLOOR: 3,
                /** Defroster + Floor */
                DEFROSTER_AND_FLOOR: 4
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current HVAC Fan Target Temperature, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 30
             *
             * @return {module:common/lib/Promise}
             */
            getHVACFanTargetTemp: getValue(793, 'HVACFanTargetTemp'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Hybrid Power Status, having one of the following values:
             * <ul>
             *  <li>HybridPowerStatus.IDLE</li>
             *  <li>HybridPowerStatus.BATTERY_MODE</li>
             *  <li>HybridPowerStatus.ENGINE_MODE</li>
             *  <li>HybridPowerStatus.HYBRID_MODE</li>
             * </ul>
             * <br/>
             * <br/> Category: Electric Vehicle
             *
             * @return {module:common/lib/Promise}
             */
            getHybridPowerStatus: getValue(809, 'HybridPowerStatus'),

            /**
             * Value States for HybridPowerStatus
             * @enum
             * @type Number
             */
            HybridPowerStatus: {
                /** Idle */
                IDLE: 1,
                /** Battery Mode */
                BATTERY_MODE: 2,
                /** Engine Mode */
                ENGINE_MODE: 3,
                /** Hybrid Mode */
                HYBRID_MODE: 4
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Hybrid Type, having one of the following values:
             * <ul>
             *  <li>HybridType.NONE</li>
             *  <li>HybridType.MILD</li>
             *  <li>HybridType.FULL</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getHybridType: getValue(667, 'HybridType'),

            /**
             * Value States for HybridType
             * @enum
             * @type Number
             */
            HybridType: {
                /** None */
                NONE: 1,
                /** Mild */
                MILD: 2,
                /** Full */
                FULL: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Ignition Off Time (IgOff), measured in Second.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 429496730
             *
             * @return {module:common/lib/Promise}
             */
            getIgnitionOffTime: getValue(628, 'IgnitionOffTime'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Ignition On Time (IgOn), measured in Second.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 429496730
             *
             * @return {module:common/lib/Promise}
             */
            getIgnitionOnTime: getValue(629, 'IgnitionOnTime'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Inside Mirror Automatic Tinting Status, having one of the following values:
             * <ul>
             *  <li>InsideMirrorAutomaticTintingStatus.INACTIVE</li>
             *  <li>InsideMirrorAutomaticTintingStatus.ACTIVE</li>
             *  <li>InsideMirrorAutomaticTintingStatus.ERROR</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getInsideMirrorAutomaticTintingStatus: getValue(738, 'InsideMirrorAutomaticTintingStatus'),

            /**
             * Value States for InsideMirrorAutomaticTintingStatus
             * @enum
             * @type Number
             */
            InsideMirrorAutomaticTintingStatus: {
                /** Inactive */
                INACTIVE: 1,
                /** Active */
                ACTIVE: 2,
                /** Error */
                ERROR: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Interior Temperature, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getInteriorTemperature: getValue(787, 'InteriorTemperature'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Lane Departed.
             * <br/>
             * <br/>Category: Vision System
             *
             * @return {module:common/lib/Promise}
             */
            isLaneDeparted: getValue(783, 'LaneDeparted'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Lane Departure Detection Active.
             * <br/>
             * <br/>Category: Vision System
             *
             * @return {module:common/lib/Promise}
             */
            isLaneDepartureDetectionActive: getValue(782, 'LaneDepartureDetectionActive'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Left Turn Signal On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isLeftTurnSignalOn: getValue(685, 'LeftTurnSignalOn'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Malfunction Indicator Lamp On.
             * <br/>
             * <br/>Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            isMalfunctionIndicatorLampOn: getValue(713, 'MalfunctionIndicatorLampOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Max Wheel Speed Exceeded.
             * <br/>
             * <br/>Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            isMaxWheelSpeedExceeded: getValue(727, 'MaxWheelSpeedExceeded'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Measurement System, having one of the following values:
             * <ul>
             *  <li>MeasurementSystem.METRIC</li>
             *  <li>MeasurementSystem.ENGLISH</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getMeasurementSystem: getValue(733, 'MeasurementSystem'),

            /**
             * Value States for MeasurementSystem
             * @enum
             * @type Number
             */
            MeasurementSystem: {
                /** Metric */
                METRIC: 1,
                /** English */
                ENGLISH: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Measurement System Fuel, having one of the following values:
             * <ul>
             *  <li>MeasurementSystemFuel.LITER</li>
             *  <li>MeasurementSystemFuel.GALLON</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getMeasurementSystemFuel: getValue(734, 'MeasurementSystemFuel'),

            /**
             * Value States for MeasurementSystemFuel
             * @enum
             * @type Number
             */
            MeasurementSystemFuel: {
                /** Liter */
                LITER: 1,
                /** Gallon */
                GALLON: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Measurement System String Consumption, having one of the following values:
             * <ul>
             *  <li>MeasurementSystemStringConsumption.L_PER_100KM</li>
             *  <li>MeasurementSystemStringConsumption.KM_PER_L</li>
             *  <li>MeasurementSystemStringConsumption.MPG</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getMeasurementSystemStringConsumption: getValue(737, 'MeasurementSystemStringConsumption'),

            /**
             * Value States for MeasurementSystemStringConsumption
             * @enum
             * @type Number
             */
            MeasurementSystemStringConsumption: {
                /** l&#x2F;100km */
                L_PER_100KM: 1,
                /** km&#x2F;l */
                KM_PER_L: 2,
                /** mpg */
                MPG: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Measurement System String Distance, having one of the following values:
             * <ul>
             *  <li>MeasurementSystemStringDistance.KILOMETER</li>
             *  <li>MeasurementSystemStringDistance.MILE</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getMeasurementSystemStringDistance: getValue(735, 'MeasurementSystemStringDistance'),

            /**
             * Value States for MeasurementSystemStringDistance
             * @enum
             * @type Number
             */
            MeasurementSystemStringDistance: {
                /** Kilometer */
                KILOMETER: 1,
                /** Mile */
                MILE: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Measurement System String Speed, having one of the following values:
             * <ul>
             *  <li>MeasurementSystemStringSpeed.KM_PER_H</li>
             *  <li>MeasurementSystemStringSpeed.MPH</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getMeasurementSystemStringSpeed: getValue(736, 'MeasurementSystemStringSpeed'),

            /**
             * Value States for MeasurementSystemStringSpeed
             * @enum
             * @type Number
             */
            MeasurementSystemStringSpeed: {
                /** km&#x2F;h */
                KM_PER_H: 1,
                /** mph */
                MPH: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Mirror Pan Center, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getMirrorPanCenter: getValue(824, 'MirrorPanCenter'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Mirror Pan Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getMirrorPanLeft: getValue(823, 'MirrorPanLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Mirror Pan Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getMirrorPanRight: getValue(825, 'MirrorPanRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Mirror Tilt Center, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getMirrorTiltCenter: getValue(827, 'MirrorTiltCenter'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Mirror Tilt Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getMirrorTiltLeft: getValue(826, 'MirrorTiltLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Mirror Tilt Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getMirrorTiltRight: getValue(828, 'MirrorTiltRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Number Of Doors 1st Row, having one of the following values:
             * <ul>
             *  <li>NumberofDoors1stRow.DOOR_COUNT_0</li>
             *  <li>NumberofDoors1stRow.DOOR_COUNT_1</li>
             *  <li>NumberofDoors1stRow.DOOR_COUNT_2</li>
             *  <li>NumberofDoors1stRow.DOOR_COUNT_3</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getNumberofDoors1stRow: getValue(656, 'NumberofDoors1stRow'),

            /**
             * Value States for NumberofDoors1stRow
             * @enum
             * @type Number
             */
            NumberofDoors1stRow: {
                /** 0 Doors */
                DOOR_COUNT_0: 0,
                /** 1 Door */
                DOOR_COUNT_1: 1,
                /** 2 Doors */
                DOOR_COUNT_2: 2,
                /** 3 Doors */
                DOOR_COUNT_3: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Number Of Doors 2nd Row, having one of the following values:
             * <ul>
             *  <li>NumberofDoors2ndRow.DOOR_COUNT_0</li>
             *  <li>NumberofDoors2ndRow.DOOR_COUNT_1</li>
             *  <li>NumberofDoors2ndRow.DOOR_COUNT_2</li>
             *  <li>NumberofDoors2ndRow.DOOR_COUNT_3</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getNumberofDoors2ndRow: getValue(657, 'NumberofDoors2ndRow'),

            /**
             * Value States for NumberofDoors2ndRow
             * @enum
             * @type Number
             */
            NumberofDoors2ndRow: {
                /** 0 Doors */
                DOOR_COUNT_0: 0,
                /** 1 Door */
                DOOR_COUNT_1: 1,
                /** 2 Doors */
                DOOR_COUNT_2: 2,
                /** 3 Doors */
                DOOR_COUNT_3: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Number Of Doors in 3rd Row, having one of the following values:
             * <ul>
             *  <li>NumberofDoorsin3rdRow.DOOR_COUNT_0</li>
             *  <li>NumberofDoorsin3rdRow.DOOR_COUNT_1</li>
             *  <li>NumberofDoorsin3rdRow.DOOR_COUNT_2</li>
             *  <li>NumberofDoorsin3rdRow.DOOR_COUNT_3</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getNumberofDoorsin3rdRow: getValue(658, 'NumberofDoorsin3rdRow'),

            /**
             * Value States for NumberofDoorsin3rdRow
             * @enum
             * @type Number
             */
            NumberofDoorsin3rdRow: {
                /** 0 Doors */
                DOOR_COUNT_0: 0,
                /** 1 Door */
                DOOR_COUNT_1: 1,
                /** 2 Doors */
                DOOR_COUNT_2: 2,
                /** 3 Doors */
                DOOR_COUNT_3: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Number of Doors Total, measured in Count.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getNumberOfDoorsTotal: getValue(848, 'NumberOfDoorsTotal'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Obstacle Distance Sensor Active.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isObstacleDistanceSensorActive: getValue(778, 'ObstacleDistanceSensorActive'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Occupants Status Driver, having one of the following values:
             * <ul>
             *  <li>OccupantsStatusDriver.ADULT</li>
             *  <li>OccupantsStatusDriver.CHILD</li>
             *  <li>OccupantsStatusDriver.VACANT</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getOccupantsStatusDriver: getValue(766, 'OccupantsStatusDriver'),

            /**
             * Value States for OccupantsStatusDriver
             * @enum
             * @type Number
             */
            OccupantsStatusDriver: {
                /** Adult */
                ADULT: 1,
                /** Child */
                CHILD: 2,
                /** Vacant */
                VACANT: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Occupants Status Passenger, having one of the following values:
             * <ul>
             *  <li>OccupantsStatusPassenger.ADULT</li>
             *  <li>OccupantsStatusPassenger.CHILD</li>
             *  <li>OccupantsStatusPassenger.VACANT</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getOccupantsStatusPassenger: getValue(767, 'OccupantsStatusPassenger'),

            /**
             * Value States for OccupantsStatusPassenger
             * @enum
             * @type Number
             */
            OccupantsStatusPassenger: {
                /** Adult */
                ADULT: 1,
                /** Child */
                CHILD: 2,
                /** Vacant */
                VACANT: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Occupants Status Rear Left, having one of the following values:
             * <ul>
             *  <li>OccupantsStatusRearLeft.ADULT</li>
             *  <li>OccupantsStatusRearLeft.CHILD</li>
             *  <li>OccupantsStatusRearLeft.VACANT</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getOccupantsStatusRearLeft: getValue(768, 'OccupantsStatusRearLeft'),

            /**
             * Value States for OccupantsStatusRearLeft
             * @enum
             * @type Number
             */
            OccupantsStatusRearLeft: {
                /** Adult */
                ADULT: 1,
                /** Child */
                CHILD: 2,
                /** Vacant */
                VACANT: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Occupants Status Rear Right, having one of the following values:
             * <ul>
             *  <li>OccupantsStatusRearRight.ADULT</li>
             *  <li>OccupantsStatusRearRight.CHILD</li>
             *  <li>OccupantsStatusRearRight.VACANT</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getOccupantsStatusRearRight: getValue(769, 'OccupantsStatusRearRight'),

            /**
             * Value States for OccupantsStatusRearRight
             * @enum
             * @type Number
             */
            OccupantsStatusRearRight: {
                /** Adult */
                ADULT: 1,
                /** Child */
                CHILD: 2,
                /** Vacant */
                VACANT: 3
            },

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
             * Returns a Promise which resolves as the value
             * of the current Odometer Since Restart, measured in Kilometer.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 6553.5
             *
             * @return {module:common/lib/Promise}
             */
            getOdometerSinceRestart: getValue(704, 'OdometerSinceRestart'),

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
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Parking Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isParkingLightOn: getValue(688, 'ParkingLightOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Parking Lights On.
             * <br/>
             * <br/>Category: Parking
             *
             * @return {module:common/lib/Promise}
             */
            isParkingLightsOn: getValue(785, 'ParkingLightsOn'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Passenger Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isPassengerLightOn: getValue(690, 'PassengerLightOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Powertrain Torque, measured in Newton Meter.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: -500 Max: 1500
             *
             * @return {module:common/lib/Promise}
             */
            getPowertrainTorque: getValue(668, 'PowertrainTorque'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Rain Sensor.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isRainSensor: getValue(790, 'RainSensor'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Rear Fog Light On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isRearFogLightOn: getValue(635, 'RearFogLightOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Rear Wheel Radius, measured in Meter.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getRearWheelRadius: getValue(663, 'RearWheelRadius'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Rear Window, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getRearWindow: getValue(805, 'RearWindow'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Rear Wiper Status, having one of the following values:
             * <ul>
             *  <li>RearWiperStatus.OFF</li>
             *  <li>RearWiperStatus.SLOWEST</li>
             *  <li>RearWiperStatus.FASTEST</li>
             *  <li>RearWiperStatus.AUTO</li>
             * </ul>
             * <br/>
             * <br/> Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            getRearWiperStatus: getValue(791, 'RearWiperStatus'),

            /**
             * Value States for RearWiperStatus
             * @enum
             * @type Number
             */
            RearWiperStatus: {
                /** Off */
                OFF: 1,
                /** Slowest */
                SLOWEST: 2,
                /** Fastest */
                FASTEST: 3,
                /** Auto */
                AUTO: 4
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Refuel Position, having one of the following values:
             * <ul>
             *  <li>RefuelPosition.REAR_LEFT</li>
             *  <li>RefuelPosition.REAR_RIGHT</li>
             *  <li>RefuelPosition.REAR_CENTER</li>
             *  <li>RefuelPosition.FRONT_LEFT</li>
             *  <li>RefuelPosition.FRONT_RIGHT</li>
             *  <li>RefuelPosition.FRONT_CENTER</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getRefuelPosition: getValue(819, 'RefuelPosition'),

            /**
             * Value States for RefuelPosition
             * @enum
             * @type Number
             */
            RefuelPosition: {
                /** Rear Left */
                REAR_LEFT: 1,
                /** Rear Right */
                REAR_RIGHT: 2,
                /** Rear Center */
                REAR_CENTER: 3,
                /** Front Left */
                FRONT_LEFT: 4,
                /** Front Right */
                FRONT_RIGHT: 5,
                /** Front Center */
                FRONT_CENTER: 6
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Right Turn Signal On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isRightTurnSignalOn: getValue(684, 'RightTurnSignalOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Back Cushion Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatBackCushionFrontLeft: getValue(837, 'SeatBackCushionFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Back Cushion Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatBackCushionFrontRight: getValue(838, 'SeatBackCushionFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Back Recline Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: -100 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatBackReclineFrontRight: getValue(832, 'SeatBackReclineFrontRight'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Seat Belt Driver Fastened.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isSeatBeltDriverFastened: getValue(770, 'SeatBeltDriverFastened'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Seat Belt Passenger Fastened.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isSeatBeltPassengerFastened: getValue(771, 'SeatBeltPassengerFastened'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Seat Belt Rear Left Fastened.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isSeatBeltRearLeftFastened: getValue(772, 'SeatBeltRearLeftFastened'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Seat Belt Rear Right Fastened.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isSeatBeltRearRightFastened: getValue(773, 'SeatBeltRearRightFastened'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Cooler Level Driver, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatCoolerLevelDriver: getValue(881, 'SeatCoolerLevelDriver'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Cooler Level Left Rear, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatCoolerLevelLeftRear: getValue(884, 'SeatCoolerLevelLeftRear'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Cooler Level Passenger, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatCoolerLevelPassenger: getValue(882, 'SeatCoolerLevelPassenger'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Cooler Level Right Rear, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatCoolerLevelRightRear: getValue(883, 'SeatCoolerLevelRightRear'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Seat Cooler On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSeatCoolerOn: getValue(800, 'SeatCoolerOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Cushion Height Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatCushionHeightFrontLeft: getValue(835, 'SeatCushionHeightFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Cushion Height Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatCushionHeightFrontRight: getValue(836, 'SeatCushionHeightFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Headrest Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatHeadrestFrontLeft: getValue(841, 'SeatHeadrestFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Headrest Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatHeadrestFrontRight: getValue(842, 'SeatHeadrestFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Heater Level Driver, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatHeaterLevelDriver: getValue(885, 'SeatHeaterLevelDriver'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Heater Level Left Rear, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatHeaterLevelLeftRear: getValue(888, 'SeatHeaterLevelLeftRear'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Heater Level Passenger, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatHeaterLevelPassenger: getValue(886, 'SeatHeaterLevelPassenger'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Heater Level Right Rear, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSeatHeaterLevelRightRear: getValue(887, 'SeatHeaterLevelRightRear'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Seat Heater On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSeatHeaterOn: getValue(799, 'SeatHeaterOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Position Preset Recall, having one of the following values:
             * <ul>
             *  <li>SeatPositionPresetRecall.POSITION_0</li>
             *  <li>SeatPositionPresetRecall.POSITION_1</li>
             *  <li>SeatPositionPresetRecall.POSITION_2</li>
             *  <li>SeatPositionPresetRecall.POSITION_3</li>
             *  <li>SeatPositionPresetRecall.POSITION_4</li>
             *  <li>SeatPositionPresetRecall.POSITION_5</li>
             * </ul>
             * <br/>
             * <br/> Category: Personalization
             *
             * @return {module:common/lib/Promise}
             */
            getSeatPositionPresetRecall: getValue(740, 'SeatPositionPresetRecall'),

            /**
             * Value States for SeatPositionPresetRecall
             * @enum
             * @type Number
             */
            SeatPositionPresetRecall: {
                /** Position 0 */
                POSITION_0: 1,
                /** Position 1 */
                POSITION_1: 2,
                /** Position 2 */
                POSITION_2: 3,
                /** Position 3 */
                POSITION_3: 4,
                /** Position 4 */
                POSITION_4: 5,
                /** Position 5 */
                POSITION_5: 6
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Side Cushion Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatSideCushionFrontLeft: getValue(839, 'SeatSideCushionFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Side Cushion Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatSideCushionFrontRight: getValue(840, 'SeatSideCushionFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Slide Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatSlideFrontLeft: getValue(833, 'SeatSlideFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Seat Slide Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSeatSlideFrontRight: getValue(834, 'SeatSlideFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Security Alert, having one of the following values:
             * <ul>
             *  <li>SecurityAlert.IDLE</li>
             *  <li>SecurityAlert.ACTIVATED</li>
             *  <li>SecurityAlert.ALARM_DETECTED</li>
             * </ul>
             * <br/>
             * <br/> Category: Parking
             *
             * @return {module:common/lib/Promise}
             */
            getSecurityAlert: getValue(784, 'SecurityAlert'),

            /**
             * Value States for SecurityAlert
             * @enum
             * @type Number
             */
            SecurityAlert: {
                /** Idle */
                IDLE: 1,
                /** Activated */
                ACTIVATED: 2,
                /** Alarm Detected */
                ALARM_DETECTED: 3
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Side Window Driver Locked.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSideWindowDriveLocked: getValue(876, 'SideWindowDriveLocked'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Side Window Driver Openness, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSideWindowDriverOpenness: getValue(801, 'SideWindowDriverOpenness'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Side Window Passenger Locked.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSideWindowPassengerLocked: getValue(877, 'SideWindowPassengerLocked'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Side Window Passenger Openness, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSideWindowPassengerOpenness: getValue(802, 'SideWindowPassengerOpenness'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Side Window Rear Left Locked.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSideWindowRearLeftLocked: getValue(878, 'SideWindowRearLeftLocked'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Side Window Rear Left Openness, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSideWindowRearLeftOpenness: getValue(803, 'SideWindowRearLeftOpenness'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Side Window Rear Right Locked.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSideWindowRearRightLocked: getValue(879, 'SideWindowRearRightLocked'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Side Window Rear Right Openness, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSideWindowRearRightOpenness: getValue(804, 'SideWindowRearRightOpenness'),

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
             * of the current Steering Rotation Direction, having one of the following values:
             * <ul>
             *  <li>SteeringWheelRotationDirection.STRAIGHT</li>
             *  <li>SteeringWheelRotationDirection.LEFT</li>
             *  <li>SteeringWheelRotationDirection.RIGHT</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getSteeringWheelRotationDirection: getValue(638, 'SteeringWheelRotationDirection'),

            /**
             * Value States for SteeringWheelRotationDirection
             * @enum
             * @type Number
             */
            SteeringWheelRotationDirection: {
                /** Straight */
                STRAIGHT: 0,
                /** Turn Left */
                LEFT: 1,
                /** Turn Right */
                RIGHT: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Steering Wheel Heater Level, measured in Level.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 10
             *
             * @return {module:common/lib/Promise}
             */
            getSteeringWheelHeaterLevel: getValue(889, 'SteeringWheelHeaterLevel'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Steering Wheel Heater On.
             * <br/>
             * <br/>Category: Climate
             *
             * @return {module:common/lib/Promise}
             */
            isSteeringWheelHeaterOn: getValue(798, 'SteeringWheelHeaterOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Steering Wheel Position, having one of the following values:
             * <ul>
             *  <li>SteeringWheelPosition.LEFT</li>
             *  <li>SteeringWheelPosition.RIGHT</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getSteeringWheelPosition: getValue(820, 'SteeringWheelPosition'),

            /**
             * Value States for SteeringWheelPosition
             * @enum
             * @type Number
             */
            SteeringWheelPosition: {
                /** Left */
                LEFT: 1,
                /** Right */
                RIGHT: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Steering Wheel Position Telescoping, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSteeringWheelPositionTelescoping: getValue(829, 'SteeringWheelPositionTelescoping'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Steering Wheel Position Tilt, measured in Percentage.
             * <br/>
             * <br/> Category: Personalization
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSteeringWheelPositionTilt: getValue(830, 'SteeringWheelPositionTilt'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Sunroof Openness, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSunroofOpenness: getValue(806, 'SunroofOpenness'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Sunroof Tilt, measured in Percentage.
             * <br/>
             * <br/> Category: Climate
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getSunroofTilt: getValue(807, 'SunroofTilt'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Taillight On.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isTaillightOn: getValue(682, 'TaillightOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Target Charge Level, measured in Percentage.
             * <br/>
             * <br/> Category: Electric Vehicle
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getTargetChargeLevel: getValue(813, 'TargetChargeLevel'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Target Vehicle Detected.
             * <br/>
             * <br/>Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            isTargetVehicleDetected: getValue(679, 'TargetVehicleDetected'),

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
             * of the current Time Run With Malfunction Indicator Light On, measured in Second.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 3932100
             *
             * @return {module:common/lib/Promise}
             */
            getTimeRunWithMilOn: getValue(353, 'TimeRunWithMilOn'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Time Since Diagnostic Trouble Codes Cleared, measured in Second.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 3932100
             *
             * @return {module:common/lib/Promise}
             */
            getTimeSinceCodesCleared: getValue(356, 'TimeSinceCodesCleared'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Time Spent Driving, measured in Second.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 429496730
             *
             * @return {module:common/lib/Promise}
             */
            getDrivingTime: getValue(616, 'DrivingTime'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Time to Full Charge, measured in Second.
             * <br/>
             * <br/> Category: Electric Vehicle
             * <br/> Min: 0 Max: 65535
             *
             * @return {module:common/lib/Promise}
             */
            getTimetoFullCharge: getValue(814, 'TimetoFullCharge'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Time to Target Charge, measured in Second.
             * <br/>
             * <br/> Category: Electric Vehicle
             * <br/> Min: 0 Max: 65535
             *
             * @return {module:common/lib/Promise}
             */
            getTimetoTargetCharge: getValue(815, 'TimetoTargetCharge'),

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
             * of the current Tire Pressure Low, having one of the following values:
             * <ul>
             *  <li>TirePressureLow.NOT_LOW</li>
             *  <li>TirePressureLow.LOW</li>
             *  <li>TirePressureLow.ERROR</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureLow: getValue(640, 'TirePressureLow'),

            /**
             * Value States for TirePressureLow
             * @enum
             * @type Number
             */
            TirePressureLow: {
                /** Not Low */
                NOT_LOW: 0,
                /** Low */
                LOW: 1,
                /** Error */
                ERROR: 2
            },

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
             * of the current Tire Pressure Status Front Left, having one of the following values:
             * <ul>
             *  <li>TirePressureStatusFrontLeft.NORMAL</li>
             *  <li>TirePressureStatusFrontLeft.LOW</li>
             *  <li>TirePressureStatusFrontLeft.HIGH</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureStatusFrontLeft: getValue(719, 'TirePressureStatusFrontLeft'),

            /**
             * Value States for TirePressureStatusFrontLeft
             * @enum
             * @type Number
             */
            TirePressureStatusFrontLeft: {
                /** Normal */
                NORMAL: 1,
                /** Low */
                LOW: 2,
                /** High */
                HIGH: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Status Front Right, having one of the following values:
             * <ul>
             *  <li>TirePressureStatusFrontRight.NORMAL</li>
             *  <li>TirePressureStatusFrontRight.LOW</li>
             *  <li>TirePressureStatusFrontRight.HIGH</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureStatusFrontRight: getValue(720, 'TirePressureStatusFrontRight'),

            /**
             * Value States for TirePressureStatusFrontRight
             * @enum
             * @type Number
             */
            TirePressureStatusFrontRight: {
                /** Normal */
                NORMAL: 1,
                /** Low */
                LOW: 2,
                /** High */
                HIGH: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Status Rear Left, having one of the following values:
             * <ul>
             *  <li>TirePressureStatusRearLeft.NORMAL</li>
             *  <li>TirePressureStatusRearLeft.LOW</li>
             *  <li>TirePressureStatusRearLeft.HIGH</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureStatusRearLeft: getValue(721, 'TirePressureStatusRearLeft'),

            /**
             * Value States for TirePressureStatusRearLeft
             * @enum
             * @type Number
             */
            TirePressureStatusRearLeft: {
                /** Normal */
                NORMAL: 1,
                /** Low */
                LOW: 2,
                /** High */
                HIGH: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Pressure Status Rear Right, having one of the following values:
             * <ul>
             *  <li>TirePressureStatusRearRight.NORMAL</li>
             *  <li>TirePressureStatusRearRight.LOW</li>
             *  <li>TirePressureStatusRearRight.HIGH</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getTirePressureStatusRearRight: getValue(722, 'TirePressureStatusRearRight'),

            /**
             * Value States for TirePressureStatusRearRight
             * @enum
             * @type Number
             */
            TirePressureStatusRearRight: {
                /** Normal */
                NORMAL: 1,
                /** Low */
                LOW: 2,
                /** High */
                HIGH: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Temperature Front Left, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getTireTemperatureFrontLeft: getValue(728, 'TireTemperatureFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Temperature Front Right, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getTireTemperatureFrontRight: getValue(729, 'TireTemperatureFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Temperature Rear Left, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getTireTemperatureRearLeft: getValue(730, 'TireTemperatureRearLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Temperature Rear Right, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getTireTemperatureRearRight: getValue(731, 'TireTemperatureRearRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Wear Front Left, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getTireWearFrontLeft: getValue(723, 'TireWearFrontLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Wear Front Right, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getTireWearFrontRight: getValue(724, 'TireWearFrontRight'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Wear Rear Left, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getTireWearRearLeft: getValue(725, 'TireWearRearLeft'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Tire Wear Rear Right, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getTireWearRearRight: getValue(726, 'TireWearRearRight'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Traction Control System Enabled.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isTractionControlSystemEnabled: getValue(744, 'TractionControlSystemEnabled'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Traction Control System Engaged.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isTractionControlSystemEngaged: getValue(874, 'TractionControlSystemEngaged'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Transmission Gear Type, having one of the following values:
             * <ul>
             *  <li>TransmissionGearType.AUTO</li>
             *  <li>TransmissionGearType.MANUAL</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getTransmissionGearType: getValue(660, 'TransmissionGearType'),

            /**
             * Value States for TransmissionGearType
             * @enum
             * @type Number
             */
            TransmissionGearType: {
                /** Auto */
                AUTO: 0,
                /** Manual */
                MANUAL: 1
            },

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
             * of the current Transmission Oil Temperature, measured in Degrees Celsius.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: -40 Max: 215
             *
             * @return {module:common/lib/Promise}
             */
            getTransmissionOilTemperature: getValue(706, 'TransmissionOilTemperature'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Transmission Oil Wear, measured in Percentage.
             * <br/>
             * <br/> Category: Maintenance
             * <br/> Min: 0 Max: 100
             *
             * @return {module:common/lib/Promise}
             */
            getTransmissionOilWear: getValue(822, 'TransmissionOilWear'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trip Meter 1 Average Speed, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getTripMeter1AverageSpeed: getValue(671, 'TripMeter1AverageSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trip Meter 1 Distance, measured in Kilometer.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 429496729.5
             *
             * @return {module:common/lib/Promise}
             */
            getTripMeter1Distance: getValue(669, 'TripMeter1Distance'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trip Meter 1 Fuel Consumption, measured in Kilometers Per Liter.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 655.35
             *
             * @return {module:common/lib/Promise}
             */
            getTripMeter1FuelConsumption: getValue(673, 'TripMeter1FuelConsumption'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trip Meter 2 Average Speed, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 255
             *
             * @return {module:common/lib/Promise}
             */
            getTripMeter2AverageSpeed: getValue(672, 'TripMeter2AverageSpeed'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trip Meter 2 Distance, measured in Kilometer.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 429496729.5
             *
             * @return {module:common/lib/Promise}
             */
            getTripMeter2Distance: getValue(670, 'TripMeter2Distance'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trip Meter 2 Fuel Consumption, measured in Kilometers Per Liter.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 655.35
             *
             * @return {module:common/lib/Promise}
             */
            getTripMeter2FuelConsumption: getValue(674, 'TripMeter2FuelConsumption'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Trunk Deck, having one of the following values:
             * <ul>
             *  <li>TrunkDeck.OPEN</li>
             *  <li>TrunkDeck.CLOSED</li>
             *  <li>TrunkDeck.AJAR</li>
             * </ul>
             * <br/>
             * <br/> Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            getTrunkDeck: getValue(757, 'TrunkDeck'),

            /**
             * Value States for TrunkDeck
             * @enum
             * @type Number
             */
            TrunkDeck: {
                /** Open */
                OPEN: 1,
                /** Closed  */
                CLOSED: 2,
                /** Ajar */
                AJAR: 3
            },

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Trunk Locked.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isTrunkLocked: getValue(762, 'TrunkLocked'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Turn Indicator Status, having one of the following values:
             * <ul>
             *  <li>TurnIndicatorStatus.OFF</li>
             *  <li>TurnIndicatorStatus.RIGHT</li>
             *  <li>TurnIndicatorStatus.LEFT</li>
             *  <li>TurnIndicatorStatus.HAZARD_ON</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getTurnIndicatorStatus: getValue(641, 'TurnIndicatorStatus'),

            /**
             * Value States for TurnIndicatorStatus
             * @enum
             * @type Number
             */
            TurnIndicatorStatus: {
                /** Off */
                OFF: 0,
                /** Right */
                RIGHT: 1,
                /** Left */
                LEFT: 2,
                /** Hazard On */
                HAZARD_ON: 3
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Height, measured in Meter.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleHeight: getValue(654, 'VehicleHeight'),

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
             * of the current Vehicle Length, measured in Meter.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleLength: getValue(655, 'VehicleLength'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Model Year, measured in Year.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 2000 Max: 2100
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleModelYear: getValue(666, 'VehicleModelYear'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Power Mode, having one of the following values:
             * <ul>
             *  <li>VehiclePowerMode.OFF</li>
             *  <li>VehiclePowerMode.ACCESSORY_1</li>
             *  <li>VehiclePowerMode.ACCESSORY_2</li>
             *  <li>VehiclePowerMode.RUNNING</li>
             * </ul>
             * <br/>
             * <br/> Category: Running Status
             *
             * @return {module:common/lib/Promise}
             */
            getVehiclePowerMode: getValue(849, 'VehiclePowerMode'),

            /**
             * Value States for VehiclePowerMode
             * @enum
             * @type Number
             */
            VehiclePowerMode: {
                /** Off */
                OFF: 0,
                /** Accessory 1 */
                ACCESSORY_1: 1,
                /** Accessory 2 */
                ACCESSORY_2: 2,
                /** Running */
                RUNNING: 3
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
             * of the current Vehicle Time Since Restart, measured in Second.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 65535
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleTimeSinceRestart: getValue(698, 'VehicleTimeSinceRestart'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Top Speed Limit, measured in Kilometers Per Hour.
             * <br/>
             * <br/> Category: Driver Safety
             * <br/> Min: 0 Max: 655.35
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleTopSpeedLimit: getValue(746, 'VehicleTopSpeedLimit'),

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Type, having one of the following values:
             * <ul>
             *  <li>VehicleType.PASSENGER_CAR_MINI</li>
             *  <li>VehicleType.PASSENGER_CAR_LIGHT</li>
             *  <li>VehicleType.PASSENGER_CAR_COMPACT</li>
             *  <li>VehicleType.PASSENGER_CAR_MEDIUM</li>
             *  <li>VehicleType.PASSENGER_CAR_HEAVY</li>
             *  <li>VehicleType.SPORT_UTILITY_VEHICLE</li>
             *  <li>VehicleType.PICKUP_TRUCK</li>
             *  <li>VehicleType.VAN</li>
             * </ul>
             * <br/>
             * <br/> Category: Configuration and Identification
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleType: getValue(652, 'VehicleType'),

            /**
             * Value States for VehicleType
             * @enum
             * @type Number
             */
            VehicleType: {
                /** Passenger cars: mini */
                PASSENGER_CAR_MINI: 0,
                /** Passenger cars: light */
                PASSENGER_CAR_LIGHT: 1,
                /** Passenger cars: compact */
                PASSENGER_CAR_COMPACT: 2,
                /** Passenger cars: medium */
                PASSENGER_CAR_MEDIUM: 3,
                /** Passenger cars: heavy */
                PASSENGER_CAR_HEAVY: 4,
                /** Sport Utility Vehicle */
                SPORT_UTILITY_VEHICLE: 5,
                /** Pickup Truck */
                PICKUP_TRUCK: 6,
                /** Van */
                VAN: 7
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Vehicle Width, measured in Meter.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getVehicleWidth: getValue(653, 'VehicleWidth'),

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
             * of the current Washer Fluid Level Low, having one of the following values:
             * <ul>
             *  <li>WasherFluidLevelLow.NOT_LOW</li>
             *  <li>WasherFluidLevelLow.LOW</li>
             *  <li>WasherFluidLevelLow.ERROR</li>
             * </ul>
             * <br/>
             * <br/> Category: Maintenance
             *
             * @return {module:common/lib/Promise}
             */
            getWasherFluidLevelLow: getValue(873, 'WasherFluidLevelLow'),

            /**
             * Value States for WasherFluidLevelLow
             * @enum
             * @type Number
             */
            WasherFluidLevelLow: {
                /** Not Low */
                NOT_LOW: 0,
                /** Low */
                LOW: 1,
                /** Error */
                ERROR: 2
            },

            /**
             * Returns a Promise which resolves as the value
             * of the current Wheel Radius, measured in Meter.
             * <br/>
             * <br/> Category: Configuration and Identification
             * <br/> Min: 0 Max: 65.535
             *
             * @return {module:common/lib/Promise}
             */
            getWheelRadius: getValue(661, 'WheelRadius'),

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
             * of the current Wheel Tick, measured in Count.
             * <br/>
             * <br/> Category: Running Status
             * <br/> Min: 0 Max: 4294967295
             *
             * @return {module:common/lib/Promise}
             */
            getWheelTick: getValue(870, 'WheelTick'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Window Locked Driver.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isWindowLockedDriver: getValue(774, 'WindowLockedDriver'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Window Locked Passenger.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isWindowLockedPassenger: getValue(775, 'WindowLockedPassenger'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Window Locked Rear Left.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isWindowLockedRearLeft: getValue(776, 'WindowLockedRearLeft'),

            /**
             * Returns a Promise which resolves as <code>true</code> or <code>false</code>
             * to reflect the state of Window Locked Rear Right.
             * <br/>
             * <br/>Category: Driver Safety
             *
             * @return {module:common/lib/Promise}
             */
            isWindowLockedRearRight: getValue(777, 'WindowLockedRearRight'),

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
    * @memberof oxygen/TelematicsAPI
    */
    TelematicsAPI.Event = {
        //** Event identifier for change in Acceleration - Lateral */
        LATERAL_ACCELERATION: 'Telematics.LateralAcceleration',

        //** Event identifier for change in Acceleration - Longitudinal */
        LONGITUDINAL_ACCELERATION: 'Telematics.LongitudinalAcceleration',

        //** Event identifier for change in Acceleration - Vertical */
        VERTICAL_ACCELERATION: 'Telematics.VerticalAcceleration',

        //** Event identifier for change in Accelerator Pedal Position */
        ACCEL_PEDAL_POSITION: 'Telematics.AccelPedalPosition',

        //** Event identifier for change in Accumulated Engine Run Time */
        ACCUMULATED_ENGINE_RUN_TIME: 'Telematics.AccumulatedEngineRunTime',

        //** Event identifier for change in Active Noise Control Mode */
        ACTIVE_NOISE_CONTROL_MODE: 'Telematics.ActiveNoiseControlMode',

        //** Event identifier for change in Adaptive Cruise Control Active */
        ADAPTIVE_CRUISE_CONTROL_ACTIVE: 'Telematics.AdaptiveCruiseControlActive',

        //** Event identifier for change in Air Conditioner On */
        AIR_CONDITIONER_ON: 'Telematics.AirConditionerOn',

        //** Event identifier for change in Air Recirculation On */
        AIR_RECIRCULATION_ON: 'Telematics.AirRecirculationOn',

        //** Event identifier for change in Airbag Deployed */
        AIRBAG_DEPLOYED: 'Telematics.AirbagDeployed',

        //** Event identifier for change in Airbag Status Left */
        AIRBAG_STATUS_LEFT: 'Telematics.AirbagStatusLeft',

        //** Event identifier for change in Airbag Status Right */
        AIRBAG_STATUS_RIGHT: 'Telematics.AirbagStatusRight',

        //** Event identifier for change in Alarm Status */
        ALARM_STATUS: 'Telematics.AlarmStatus',

        //** Event identifier for change in Antilock Braking System Enabled */
        ANTILOCK_BRAKING_SYSTEM_ENABLED: 'Telematics.AntilockBrakingSystemEnabled',

        //** Event identifier for change in Antilock Braking System Engaged */
        ANTILOCK_BRAKING_SYSTEM_ENGAGED: 'Telematics.AntilockBrakingSystemEngaged',

        //** Event identifier for change in Atmospheric Pressure */
        ATMOSPHERIC_PRESSURE: 'Telematics.AtmosphericPressure',

        //** Event identifier for change in Automatic Headlight Active */
        AUTOMATIC_HEADLIGHT_ACTIVE: 'Telematics.AutomaticHeadlightActive',

        //** Event identifier for change in Automatic Transmission Shift Position */
        AUTOMATIC_TRANSMISSION_SHIFT_POSITION: 'Telematics.AutomaticTransmissionShiftPosition',

        //** Event identifier for change in Battery Charge Cord Connected */
        BATTERY_CHARGE_CORD_CONNECTED: 'Telematics.BatteryChargeCordConnected',

        //** Event identifier for change in Battery Current Consumption */
        BATTERY_CURRENT_CONSUMPTION: 'Telematics.BatteryCurrentConsumption',

        //** Event identifier for change in Battery Voltage */
        BATTERY_VOLTAGE: 'Telematics.BatteryVoltage',

        //** Event identifier for change in Blower Fan Speed */
        BLOWER_FAN_SPEED: 'Telematics.BlowerFanSpeed',

        //** Event identifier for change in Brake Fluid Hydraulic Pressure */
        BRAKE_FLUID_HYDRAULIC_PRESSURE: 'Telematics.BrakeFluidHydraulicPressure',

        //** Event identifier for change in Brake Fluid Level */
        BRAKE_FLUID_LEVEL: 'Telematics.BrakeFluidLevel',

        //** Event identifier for change in Brake Fluid Level Low */
        BRAKE_FLUID_LEVEL_LOW: 'Telematics.BrakeFluidLevelLow',

        //** Event identifier for change in Brake Light On */
        BRAKE_LIGHT_ON: 'Telematics.BrakeLightOn',

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

        //** Event identifier for change in Brakes Worn */
        BRAKES_WORN: 'Telematics.BrakesWorn',

        //** Event identifier for change in Center Light On */
        CENTER_LIGHT_ON: 'Telematics.CenterLightOn',

        //** Event identifier for change in Change Engine Oil */
        CHANGE_ENGINE_OIL: 'Telematics.ChangeEngineOil',

        //** Event identifier for change in Charging Status On */
        CHARGING_STATUS_ON: 'Telematics.ChargingStatusOn',

        //** Event identifier for change in Child Safety Lock On */
        CHILD_SAFETY_LOCK_ON: 'Telematics.ChildSafetyLockOn',

        //** Event identifier for change in Chime On */
        CHIME_ON: 'Telematics.ChimeOn',

        //** Event identifier for change in Clutch Wear Level */
        CLUTCH_WEAR_LEVEL: 'Telematics.ClutchWearLevel',

        //** Event identifier for change in Convertible Roof On */
        CONVERTIBLE_ROOF_ON: 'Telematics.ConvertibleRoofOn',

        //** Event identifier for change in Cruise Control Active */
        CRUISE_CONTROL_ACTIVE: 'Telematics.CruiseControlActive',

        //** Event identifier for change in Cruise Control Speed Setting */
        CRUISE_CONTROL_SETTING_SPEED: 'Telematics.CruiseControlSettingSpeed',

        //** Event identifier for change in Dashboard Illumination */
        DASHBOARD_ILLUMINATION: 'Telematics.DashboardIllumination',

        //** Event identifier for change in Defrost Rear Windshield On */
        DEFROST_REAR_WINDSHIELD_ON: 'Telematics.DefrostRearWindshieldOn',

        //** Event identifier for change in Defrost Side Mirrors On */
        DEFROST_SIDE_MIRRORS_ON: 'Telematics.DefrostSideMirrorsOn',

        //** Event identifier for change in Distance Travelled - Total */
        DISTANCE_TRAVELLED_TOTAL: 'Telematics.DistanceTravelledTotal',

        //** Event identifier for change in Distance Travelled Since Codes Cleared */
        DISTANCE_TRAVELLED_SINCE_CODES_CLEARED: 'Telematics.DistanceTravelledSinceCodesCleared',

        //** Event identifier for change in Distance Travelled With Malfunction Indicator Light On */
        DISTANCE_TRAVELLED_WITH_MIL_ON: 'Telematics.DistanceTravelledWithMilOn',

        //** Event identifier for change in Door Locked Driver */
        DOOR_LOCKED_DRIVER: 'Telematics.DoorLockedDriver',

        //** Event identifier for change in Door Locked Passenger */
        DOOR_LOCKED_PASSENGER: 'Telematics.DoorLockedPassenger',

        //** Event identifier for change in Door Locked Rear Left */
        DOOR_LOCKED_REAR_LEFT: 'Telematics.DoorLockedRearLeft',

        //** Event identifier for change in Door Locked Rear Right */
        DOOR_LOCKED_REAR_RIGHT: 'Telematics.DoorLockedRearRight',

        //** Event identifier for change in Door Open Status Driver */
        DOOR_OPEN_STATUS_DRIVER: 'Telematics.DoorOpenStatusDriver',

        //** Event identifier for change in Door Open Status Fuel Filler Cap */
        DOOR_OPEN_STATUS_FUEL_FILLER_CAP: 'Telematics.DoorOpenStatusFuelFillerCap',

        //** Event identifier for change in Door Open Status Hood */
        DOOR_OPEN_STATUS_HOOD: 'Telematics.DoorOpenStatusHood',

        //** Event identifier for change in Door Open Status Passenger */
        DOOR_OPEN_STATUS_PASSENGER: 'Telematics.DoorOpenStatusPassenger',

        //** Event identifier for change in Door Open Status Rear Left */
        DOOR_OPEN_STATUS_REAR_LEFT: 'Telematics.DoorOpenStatusRearLeft',

        //** Event identifier for change in Door Open Status Rear Right */
        DOOR_OPEN_STATUS_REAR_RIGHT: 'Telematics.DoorOpenStatusRearRight',

        //** Event identifier for change in Door Open Status Trunk */
        DOOR_OPEN_STATUS_TRUNK: 'Telematics.DoorOpenStatusTrunk',

        //** Event identifier for change in Driver Light On */
        DRIVER_LIGHT_ON: 'Telematics.DriverLightOn',

        //** Event identifier for change in Driving Mode */
        DRIVING_MODE: 'Telematics.DrivingMode',

        //** Event identifier for change in Dynamic High Beam Active */
        DYNAMIC_HIGH_BEAM_ACTIVE: 'Telematics.DynamicHighBeamActive',

        //** Event identifier for change in Electronic Stability Control Enabled */
        ELECTRONIC_STABILITY_CONTROL_ENABLED: 'Telematics.ElectronicStabilityControlEnabled',

        //** Event identifier for change in Electronic Stability Control Engaged */
        ELECTRONIC_STABILITY_CONTROL_ENGAGED: 'Telematics.ElectronicStabilityControlEngaged',

        //** Event identifier for change in Engine Coolant Level */
        ENGINE_COOLANT_LEVEL: 'Telematics.EngineCoolantLevel',

        //** Event identifier for change in Engine Coolant Level Low */
        ENGINE_COOLANT_LEVEL_LOW: 'Telematics.EngineCoolantLevelLow',

        //** Event identifier for change in Engine Coolant Temp */
        ENGINE_COOLANT_TEMP: 'Telematics.EngineCoolantTemp',

        //** Event identifier for change in Engine Oil Life Remaining */
        ENGINE_OIL_LIFE_REMAINING: 'Telematics.EngineOilLifeRemaining',

        //** Event identifier for change in Engine Oil Pressure */
        ENGINE_OIL_PRESSURE: 'Telematics.EngineOilPressure',

        //** Event identifier for change in Engine Oil Temperature */
        ENGINE_OIL_TEMP: 'Telematics.EngineOilTemp',

        //** Event identifier for change in Engine Speed */
        ENGINE_SPEED: 'Telematics.EngineSpeed',

        //** Event identifier for change in Estimated Range Remaining */
        ESTIMATED_RANGE_REMAINING: 'Telematics.EstimatedRangeRemaining',

        //** Event identifier for change in Exterior Brightness */
        EXTERIOR_BRIGHTNESS: 'Telematics.ExteriorBrightness',

        //** Event identifier for change in Exterior Temperature */
        EXTERIOR_TEMPERATURE: 'Telematics.ExteriorTemperature',

        //** Event identifier for change in Front Collision Detection Active */
        FRONT_COLLISION_DETECTION_ACTIVE: 'Telematics.FrontCollisionDetectionActive',

        //** Event identifier for change in Front Collision Detection Distance */
        FRONT_COLLISION_DETECTION_DISTANCE: 'Telematics.FrontCollisionDetectionDistance',

        //** Event identifier for change in Front Collision Detection Time */
        FRONT_COLLISION_DETECTION_TIME: 'Telematics.FrontCollisionDetectionTime',

        //** Event identifier for change in Front Defroster On */
        FRONT_DEFROSTER: 'Telematics.FrontDefroster',

        //** Event identifier for change in Front Fog Light On */
        FRONT_FOG_LIGHT_ON: 'Telematics.FrontFogLightOn',

        //** Event identifier for change in Front Wheel Radius */
        FRONT_WHEEL_RADIUS: 'Telematics.FrontWheelRadius',

        //** Event identifier for change in Front Wiper Status */
        FRONT_WIPER_STATUS: 'Telematics.FrontWiperStatus',

        //** Event identifier for change in Fuel Cap Locked */
        FUEL_CAP_LOCKED: 'Telematics.FuelCapLocked',

        //** Event identifier for change in Fuel Configuration */
        FUEL_CONFIGURATION: 'Telematics.FuelConfiguration',

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

        //** Event identifier for change in Generated Vehicle Sound Mode */
        GENERATED_VEHICLE_SOUND_MODE: 'Telematics.GeneratedVehicleSoundMode',

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

        //** Event identifier for change in Hazard Light On */
        HAZARD_LIGHT_ON: 'Telematics.HazardLightOn',

        //** Event identifier for change in Headlight On */
        HEADLIGHT_ON: 'Telematics.HeadlightOn',

        //** Event identifier for change in Headlight Status */
        LIGHT_STATUS: 'Telematics.LightStatus',

        //** Event identifier for change in Heater On */
        HEATER_ON: 'Telematics.HeaterOn',

        //** Event identifier for change in Highbeam On */
        HIGHBEAM_ON: 'Telematics.HighbeamOn',

        //** Event identifier for change in Hood Locked */
        HOOD_LOCKED: 'Telematics.HoodLocked',

        //** Event identifier for change in Horn On */
        HORN_ON: 'Telematics.HornOn',

        //** Event identifier for change in HVAC Fan Direction */
        HVACFAN_DIRECTION: 'Telematics.HVACFanDirection',

        //** Event identifier for change in HVAC Fan Target Temperature */
        HVACFAN_TARGET_TEMP: 'Telematics.HVACFanTargetTemp',

        //** Event identifier for change in Hybrid Power Status */
        HYBRID_POWER_STATUS: 'Telematics.HybridPowerStatus',

        //** Event identifier for change in Hybrid Type */
        HYBRID_TYPE: 'Telematics.HybridType',

        //** Event identifier for change in Ignition Off Time (IgOff) */
        IGNITION_OFF_TIME: 'Telematics.IgnitionOffTime',

        //** Event identifier for change in Ignition On Time (IgOn) */
        IGNITION_ON_TIME: 'Telematics.IgnitionOnTime',

        //** Event identifier for change in Inside Mirror Automatic Tinting Status */
        INSIDE_MIRROR_AUTOMATIC_TINTING_STATUS: 'Telematics.InsideMirrorAutomaticTintingStatus',

        //** Event identifier for change in Interior Temperature */
        INTERIOR_TEMPERATURE: 'Telematics.InteriorTemperature',

        //** Event identifier for change in Lane Departed */
        LANE_DEPARTED: 'Telematics.LaneDeparted',

        //** Event identifier for change in Lane Departure Detection Active */
        LANE_DEPARTURE_DETECTION_ACTIVE: 'Telematics.LaneDepartureDetectionActive',

        //** Event identifier for change in Language */
        LANGUAGE: 'Telematics.Language',

        //** Event identifier for change in Left Turn Signal On */
        LEFT_TURN_SIGNAL_ON: 'Telematics.LeftTurnSignalOn',

        //** Event identifier for change in Level of Charge */
        LEVEL_OF_CHARGE: 'Telematics.LevelOfCharge',

        //** Event identifier for change in Malfunction Indicator Lamp On */
        MALFUNCTION_INDICATOR_LAMP_ON: 'Telematics.MalfunctionIndicatorLampOn',

        //** Event identifier for change in Max Wheel Speed Exceeded */
        MAX_WHEEL_SPEED_EXCEEDED: 'Telematics.MaxWheelSpeedExceeded',

        //** Event identifier for change in Measurement System */
        MEASUREMENT_SYSTEM: 'Telematics.MeasurementSystem',

        //** Event identifier for change in Measurement System Fuel */
        MEASUREMENT_SYSTEM_FUEL: 'Telematics.MeasurementSystemFuel',

        //** Event identifier for change in Measurement System String Consumption */
        MEASUREMENT_SYSTEM_STRING_CONSUMPTION: 'Telematics.MeasurementSystemStringConsumption',

        //** Event identifier for change in Measurement System String Distance */
        MEASUREMENT_SYSTEM_STRING_DISTANCE: 'Telematics.MeasurementSystemStringDistance',

        //** Event identifier for change in Measurement System String Speed */
        MEASUREMENT_SYSTEM_STRING_SPEED: 'Telematics.MeasurementSystemStringSpeed',

        //** Event identifier for change in Mirror Pan Center */
        MIRROR_PAN_CENTER: 'Telematics.MirrorPanCenter',

        //** Event identifier for change in Mirror Pan Left */
        MIRROR_PAN_LEFT: 'Telematics.MirrorPanLeft',

        //** Event identifier for change in Mirror Pan Right */
        MIRROR_PAN_RIGHT: 'Telematics.MirrorPanRight',

        //** Event identifier for change in Mirror Tilt Center */
        MIRROR_TILT_CENTER: 'Telematics.MirrorTiltCenter',

        //** Event identifier for change in Mirror Tilt Left */
        MIRROR_TILT_LEFT: 'Telematics.MirrorTiltLeft',

        //** Event identifier for change in Mirror Tilt Right */
        MIRROR_TILT_RIGHT: 'Telematics.MirrorTiltRight',

        //** Event identifier for change in Number Of Doors 1st Row */
        NUMBEROF_DOORS1ST_ROW: 'Telematics.NumberofDoors1stRow',

        //** Event identifier for change in Number Of Doors 2nd Row */
        NUMBEROF_DOORS2ND_ROW: 'Telematics.NumberofDoors2ndRow',

        //** Event identifier for change in Number Of Doors in 3rd Row */
        NUMBEROF_DOORSIN3RD_ROW: 'Telematics.NumberofDoorsin3rdRow',

        //** Event identifier for change in Number of Doors Total */
        NUMBER_OF_DOORS_TOTAL: 'Telematics.NumberOfDoorsTotal',

        //** Event identifier for change in Obstacle Distance Sensor Active */
        OBSTACLE_DISTANCE_SENSOR_ACTIVE: 'Telematics.ObstacleDistanceSensorActive',

        //** Event identifier for change in Occupants Status Driver */
        OCCUPANTS_STATUS_DRIVER: 'Telematics.OccupantsStatusDriver',

        //** Event identifier for change in Occupants Status Passenger */
        OCCUPANTS_STATUS_PASSENGER: 'Telematics.OccupantsStatusPassenger',

        //** Event identifier for change in Occupants Status Rear Left */
        OCCUPANTS_STATUS_REAR_LEFT: 'Telematics.OccupantsStatusRearLeft',

        //** Event identifier for change in Occupants Status Rear Right */
        OCCUPANTS_STATUS_REAR_RIGHT: 'Telematics.OccupantsStatusRearRight',

        //** Event identifier for change in Odometer */
        ODOMETER: 'Telematics.Odometer',

        //** Event identifier for change in Odometer Since Restart */
        ODOMETER_SINCE_RESTART: 'Telematics.OdometerSinceRestart',

        //** Event identifier for change in Oil Level Low */
        OIL_LEVEL_LOW: 'Telematics.OilLevelLow',

        //** Event identifier for change in Parking Brake On */
        PARKING_BRAKE_ON: 'Telematics.ParkingBrakeOn',

        //** Event identifier for change in Parking Light On */
        PARKING_LIGHT_ON: 'Telematics.ParkingLightOn',

        //** Event identifier for change in Parking Lights On */
        PARKING_LIGHTS_ON: 'Telematics.ParkingLightsOn',

        //** Event identifier for change in Passenger Light On */
        PASSENGER_LIGHT_ON: 'Telematics.PassengerLightOn',

        //** Event identifier for change in Powertrain Torque */
        POWERTRAIN_TORQUE: 'Telematics.PowertrainTorque',

        //** Event identifier for change in Rain Sensor */
        RAIN_SENSOR: 'Telematics.RainSensor',

        //** Event identifier for change in Rear Fog Light On */
        REAR_FOG_LIGHT_ON: 'Telematics.RearFogLightOn',

        //** Event identifier for change in Rear Wheel Radius */
        REAR_WHEEL_RADIUS: 'Telematics.RearWheelRadius',

        //** Event identifier for change in Rear Window */
        REAR_WINDOW: 'Telematics.RearWindow',

        //** Event identifier for change in Rear Wiper Status */
        REAR_WIPER_STATUS: 'Telematics.RearWiperStatus',

        //** Event identifier for change in Refuel Position */
        REFUEL_POSITION: 'Telematics.RefuelPosition',

        //** Event identifier for change in Right Turn Signal On */
        RIGHT_TURN_SIGNAL_ON: 'Telematics.RightTurnSignalOn',

        //** Event identifier for change in Seat Back Cushion Front Left */
        SEAT_BACK_CUSHION_FRONT_LEFT: 'Telematics.SeatBackCushionFrontLeft',

        //** Event identifier for change in Seat Back Cushion Front Right */
        SEAT_BACK_CUSHION_FRONT_RIGHT: 'Telematics.SeatBackCushionFrontRight',

        //** Event identifier for change in Seat Back Recline Front Right */
        SEAT_BACK_RECLINE_FRONT_RIGHT: 'Telematics.SeatBackReclineFrontRight',

        //** Event identifier for change in Seat Belt Driver Fastened */
        SEAT_BELT_DRIVER_FASTENED: 'Telematics.SeatBeltDriverFastened',

        //** Event identifier for change in Seat Belt Passenger Fastened */
        SEAT_BELT_PASSENGER_FASTENED: 'Telematics.SeatBeltPassengerFastened',

        //** Event identifier for change in Seat Belt Rear Left Fastened */
        SEAT_BELT_REAR_LEFT_FASTENED: 'Telematics.SeatBeltRearLeftFastened',

        //** Event identifier for change in Seat Belt Rear Right Fastened */
        SEAT_BELT_REAR_RIGHT_FASTENED: 'Telematics.SeatBeltRearRightFastened',

        //** Event identifier for change in Seat Cooler Level Driver */
        SEAT_COOLER_LEVEL_DRIVER: 'Telematics.SeatCoolerLevelDriver',

        //** Event identifier for change in Seat Cooler Level Left Rear */
        SEAT_COOLER_LEVEL_LEFT_REAR: 'Telematics.SeatCoolerLevelLeftRear',

        //** Event identifier for change in Seat Cooler Level Passenger */
        SEAT_COOLER_LEVEL_PASSENGER: 'Telematics.SeatCoolerLevelPassenger',

        //** Event identifier for change in Seat Cooler Level Right Rear */
        SEAT_COOLER_LEVEL_RIGHT_REAR: 'Telematics.SeatCoolerLevelRightRear',

        //** Event identifier for change in Seat Cooler On */
        SEAT_COOLER_ON: 'Telematics.SeatCoolerOn',

        //** Event identifier for change in Seat Cushion Height Front Left */
        SEAT_CUSHION_HEIGHT_FRONT_LEFT: 'Telematics.SeatCushionHeightFrontLeft',

        //** Event identifier for change in Seat Cushion Height Front Right */
        SEAT_CUSHION_HEIGHT_FRONT_RIGHT: 'Telematics.SeatCushionHeightFrontRight',

        //** Event identifier for change in Seat Headrest Front Left */
        SEAT_HEADREST_FRONT_LEFT: 'Telematics.SeatHeadrestFrontLeft',

        //** Event identifier for change in Seat Headrest Front Right */
        SEAT_HEADREST_FRONT_RIGHT: 'Telematics.SeatHeadrestFrontRight',

        //** Event identifier for change in Seat Heater Level Driver */
        SEAT_HEATER_LEVEL_DRIVER: 'Telematics.SeatHeaterLevelDriver',

        //** Event identifier for change in Seat Heater Level Left Rear */
        SEAT_HEATER_LEVEL_LEFT_REAR: 'Telematics.SeatHeaterLevelLeftRear',

        //** Event identifier for change in Seat Heater Level Passenger */
        SEAT_HEATER_LEVEL_PASSENGER: 'Telematics.SeatHeaterLevelPassenger',

        //** Event identifier for change in Seat Heater Level Right Rear */
        SEAT_HEATER_LEVEL_RIGHT_REAR: 'Telematics.SeatHeaterLevelRightRear',

        //** Event identifier for change in Seat Heater On */
        SEAT_HEATER_ON: 'Telematics.SeatHeaterOn',

        //** Event identifier for change in Seat Position Preset Recall */
        SEAT_POSITION_PRESET_RECALL: 'Telematics.SeatPositionPresetRecall',

        //** Event identifier for change in Seat Side Cushion Front Left */
        SEAT_SIDE_CUSHION_FRONT_LEFT: 'Telematics.SeatSideCushionFrontLeft',

        //** Event identifier for change in Seat Side Cushion Front Right */
        SEAT_SIDE_CUSHION_FRONT_RIGHT: 'Telematics.SeatSideCushionFrontRight',

        //** Event identifier for change in Seat Slide Front Left */
        SEAT_SLIDE_FRONT_LEFT: 'Telematics.SeatSlideFrontLeft',

        //** Event identifier for change in Seat Slide Front Right */
        SEAT_SLIDE_FRONT_RIGHT: 'Telematics.SeatSlideFrontRight',

        //** Event identifier for change in Security Alert */
        SECURITY_ALERT: 'Telematics.SecurityAlert',

        //** Event identifier for change in Side Window Driver Locked */
        SIDE_WINDOW_DRIVE_LOCKED: 'Telematics.SideWindowDriveLocked',

        //** Event identifier for change in Side Window Driver Openness */
        SIDE_WINDOW_DRIVER_OPENNESS: 'Telematics.SideWindowDriverOpenness',

        //** Event identifier for change in Side Window Passenger Locked */
        SIDE_WINDOW_PASSENGER_LOCKED: 'Telematics.SideWindowPassengerLocked',

        //** Event identifier for change in Side Window Passenger Openness */
        SIDE_WINDOW_PASSENGER_OPENNESS: 'Telematics.SideWindowPassengerOpenness',

        //** Event identifier for change in Side Window Rear Left Locked */
        SIDE_WINDOW_REAR_LEFT_LOCKED: 'Telematics.SideWindowRearLeftLocked',

        //** Event identifier for change in Side Window Rear Left Openness */
        SIDE_WINDOW_REAR_LEFT_OPENNESS: 'Telematics.SideWindowRearLeftOpenness',

        //** Event identifier for change in Side Window Rear Right Locked */
        SIDE_WINDOW_REAR_RIGHT_LOCKED: 'Telematics.SideWindowRearRightLocked',

        //** Event identifier for change in Side Window Rear Right Openness */
        SIDE_WINDOW_REAR_RIGHT_OPENNESS: 'Telematics.SideWindowRearRightOpenness',

        //** Event identifier for change in Steering Angle */
        STEERING_WHEEL_ANGLE: 'Telematics.SteeringWheelAngle',

        //** Event identifier for change in Steering Rotation Direction */
        STEERING_WHEEL_ROTATION_DIRECTION: 'Telematics.SteeringWheelRotationDirection',

        //** Event identifier for change in Steering Wheel Heater Level */
        STEERING_WHEEL_HEATER_LEVEL: 'Telematics.SteeringWheelHeaterLevel',

        //** Event identifier for change in Steering Wheel Heater On */
        STEERING_WHEEL_HEATER_ON: 'Telematics.SteeringWheelHeaterOn',

        //** Event identifier for change in Steering Wheel Position */
        STEERING_WHEEL_POSITION: 'Telematics.SteeringWheelPosition',

        //** Event identifier for change in Steering Wheel Position Telescoping */
        STEERING_WHEEL_POSITION_TELESCOPING: 'Telematics.SteeringWheelPositionTelescoping',

        //** Event identifier for change in Steering Wheel Position Tilt */
        STEERING_WHEEL_POSITION_TILT: 'Telematics.SteeringWheelPositionTilt',

        //** Event identifier for change in Sunroof Openness */
        SUNROOF_OPENNESS: 'Telematics.SunroofOpenness',

        //** Event identifier for change in Sunroof Tilt */
        SUNROOF_TILT: 'Telematics.SunroofTilt',

        //** Event identifier for change in Taillight On */
        TAILLIGHT_ON: 'Telematics.TaillightOn',

        //** Event identifier for change in Target Charge Level */
        TARGET_CHARGE_LEVEL: 'Telematics.TargetChargeLevel',

        //** Event identifier for change in Target Vehicle Detected */
        TARGET_VEHICLE_DETECTED: 'Telematics.TargetVehicleDetected',

        //** Event identifier for change in Throttle Position */
        THROTTLE_POSITION: 'Telematics.ThrottlePosition',

        //** Event identifier for change in Time Run With Malfunction Indicator Light On */
        TIME_RUN_WITH_MIL_ON: 'Telematics.TimeRunWithMilOn',

        //** Event identifier for change in Time Since Diagnostic Trouble Codes Cleared */
        TIME_SINCE_CODES_CLEARED: 'Telematics.TimeSinceCodesCleared',

        //** Event identifier for change in Time Spent Driving */
        DRIVING_TIME: 'Telematics.DrivingTime',

        //** Event identifier for change in Time to Full Charge */
        TIMETO_FULL_CHARGE: 'Telematics.TimetoFullCharge',

        //** Event identifier for change in Time to Target Charge */
        TIMETO_TARGET_CHARGE: 'Telematics.TimetoTargetCharge',

        //** Event identifier for change in Tire Pressure Front Left */
        TIRE_PRESSURE_FRONT_LEFT: 'Telematics.TirePressureFrontLeft',

        //** Event identifier for change in Tire Pressure Front Right */
        TIRE_PRESSURE_FRONT_RIGHT: 'Telematics.TirePressureFrontRight',

        //** Event identifier for change in Tire Pressure Low */
        TIRE_PRESSURE_LOW: 'Telematics.TirePressureLow',

        //** Event identifier for change in Tire Pressure Rear Left */
        TIRE_PRESSURE_REAR_LEFT: 'Telematics.TirePressureRearLeft',

        //** Event identifier for change in Tire Pressure Rear Right */
        TIRE_PRESSURE_REAR_RIGHT: 'Telematics.TirePressureRearRight',

        //** Event identifier for change in Tire Pressure Status Front Left */
        TIRE_PRESSURE_STATUS_FRONT_LEFT: 'Telematics.TirePressureStatusFrontLeft',

        //** Event identifier for change in Tire Pressure Status Front Right */
        TIRE_PRESSURE_STATUS_FRONT_RIGHT: 'Telematics.TirePressureStatusFrontRight',

        //** Event identifier for change in Tire Pressure Status Rear Left */
        TIRE_PRESSURE_STATUS_REAR_LEFT: 'Telematics.TirePressureStatusRearLeft',

        //** Event identifier for change in Tire Pressure Status Rear Right */
        TIRE_PRESSURE_STATUS_REAR_RIGHT: 'Telematics.TirePressureStatusRearRight',

        //** Event identifier for change in Tire Temperature Front Left */
        TIRE_TEMPERATURE_FRONT_LEFT: 'Telematics.TireTemperatureFrontLeft',

        //** Event identifier for change in Tire Temperature Front Right */
        TIRE_TEMPERATURE_FRONT_RIGHT: 'Telematics.TireTemperatureFrontRight',

        //** Event identifier for change in Tire Temperature Rear Left */
        TIRE_TEMPERATURE_REAR_LEFT: 'Telematics.TireTemperatureRearLeft',

        //** Event identifier for change in Tire Temperature Rear Right */
        TIRE_TEMPERATURE_REAR_RIGHT: 'Telematics.TireTemperatureRearRight',

        //** Event identifier for change in Tire Wear Front Left */
        TIRE_WEAR_FRONT_LEFT: 'Telematics.TireWearFrontLeft',

        //** Event identifier for change in Tire Wear Front Right */
        TIRE_WEAR_FRONT_RIGHT: 'Telematics.TireWearFrontRight',

        //** Event identifier for change in Tire Wear Rear Left */
        TIRE_WEAR_REAR_LEFT: 'Telematics.TireWearRearLeft',

        //** Event identifier for change in Tire Wear Rear Right */
        TIRE_WEAR_REAR_RIGHT: 'Telematics.TireWearRearRight',

        //** Event identifier for change in Traction Control System Enabled */
        TRACTION_CONTROL_SYSTEM_ENABLED: 'Telematics.TractionControlSystemEnabled',

        //** Event identifier for change in Traction Control System Engaged */
        TRACTION_CONTROL_SYSTEM_ENGAGED: 'Telematics.TractionControlSystemEngaged',

        //** Event identifier for change in Transmission Gear Type */
        TRANSMISSION_GEAR_TYPE: 'Telematics.TransmissionGearType',

        //** Event identifier for change in Transmission Mode */
        TRANSMISSION_MODE: 'Telematics.TransmissionMode',

        //** Event identifier for change in Transmission Oil Temperature */
        TRANSMISSION_OIL_TEMPERATURE: 'Telematics.TransmissionOilTemperature',

        //** Event identifier for change in Transmission Oil Wear */
        TRANSMISSION_OIL_WEAR: 'Telematics.TransmissionOilWear',

        //** Event identifier for change in Trip Meter 1 Average Speed */
        TRIP_METER1_AVERAGE_SPEED: 'Telematics.TripMeter1AverageSpeed',

        //** Event identifier for change in Trip Meter 1 Distance */
        TRIP_METER1_DISTANCE: 'Telematics.TripMeter1Distance',

        //** Event identifier for change in Trip Meter 1 Fuel Consumption */
        TRIP_METER1_FUEL_CONSUMPTION: 'Telematics.TripMeter1FuelConsumption',

        //** Event identifier for change in Trip Meter 2 Average Speed */
        TRIP_METER2_AVERAGE_SPEED: 'Telematics.TripMeter2AverageSpeed',

        //** Event identifier for change in Trip Meter 2 Distance */
        TRIP_METER2_DISTANCE: 'Telematics.TripMeter2Distance',

        //** Event identifier for change in Trip Meter 2 Fuel Consumption */
        TRIP_METER2_FUEL_CONSUMPTION: 'Telematics.TripMeter2FuelConsumption',

        //** Event identifier for change in Trunk Deck */
        TRUNK_DECK: 'Telematics.TrunkDeck',

        //** Event identifier for change in Trunk Locked */
        TRUNK_LOCKED: 'Telematics.TrunkLocked',

        //** Event identifier for change in Turn Indicator Status */
        TURN_INDICATOR_STATUS: 'Telematics.TurnIndicatorStatus',

        //** Event identifier for change in Vehicle Brand or Make */
        VEHICLE_BRAND_OR_MAKE: 'Telematics.VehicleBrandOrMake',

        //** Event identifier for change in Vehicle Height */
        VEHICLE_HEIGHT: 'Telematics.VehicleHeight',

        //** Event identifier for change in Vehicle Identification Number */
        VEHICLE_IDENTIFICATION_NUMBER: 'Telematics.VehicleIdentificationNumber',

        //** Event identifier for change in Vehicle Key Position (Power Status) */
        VEHICLE_KEY_POSITION: 'Telematics.VehicleKeyPosition',

        //** Event identifier for change in Vehicle Length */
        VEHICLE_LENGTH: 'Telematics.VehicleLength',

        //** Event identifier for change in Vehicle Model */
        VEHICLE_MODEL: 'Telematics.VehicleModel',

        //** Event identifier for change in Vehicle Model Year */
        VEHICLE_MODEL_YEAR: 'Telematics.VehicleModelYear',

        //** Event identifier for change in Vehicle Power Mode */
        VEHICLE_POWER_MODE: 'Telematics.VehiclePowerMode',

        //** Event identifier for change in Vehicle Speed */
        VEHICLE_SPEED: 'Telematics.VehicleSpeed',

        //** Event identifier for change in Vehicle Time Since Restart */
        VEHICLE_TIME_SINCE_RESTART: 'Telematics.VehicleTimeSinceRestart',

        //** Event identifier for change in Vehicle Top Speed Limit */
        VEHICLE_TOP_SPEED_LIMIT: 'Telematics.VehicleTopSpeedLimit',

        //** Event identifier for change in Vehicle Type */
        VEHICLE_TYPE: 'Telematics.VehicleType',

        //** Event identifier for change in Vehicle Width */
        VEHICLE_WIDTH: 'Telematics.VehicleWidth',

        //** Event identifier for change in Washer Fluid Level */
        WASHER_FLUID_LEVEL: 'Telematics.WasherFluidLevel',

        //** Event identifier for change in Washer Fluid Level Low */
        WASHER_FLUID_LEVEL_LOW: 'Telematics.WasherFluidLevelLow',

        //** Event identifier for change in Wheel Radius */
        WHEEL_RADIUS: 'Telematics.WheelRadius',

        //** Event identifier for change in Wheel Speed - Front Left */
        FRONT_LEFT_WHEEL_SPEED: 'Telematics.FrontLeftWheelSpeed',

        //** Event identifier for change in Wheel Speed - Front Right */
        FRONT_RIGHT_WHEEL_SPEED: 'Telematics.FrontRightWheelSpeed',

        //** Event identifier for change in Wheel Speed - Rear Left */
        REAR_LEFT_WHEEL_SPEED: 'Telematics.RearLeftWheelSpeed',

        //** Event identifier for change in Wheel Speed - Rear Right */
        REAR_RIGHT_WHEEL_SPEED: 'Telematics.RearRightWheelSpeed',

        //** Event identifier for change in Wheel Tick */
        WHEEL_TICK: 'Telematics.WheelTick',

        //** Event identifier for change in Window Locked Driver */
        WINDOW_LOCKED_DRIVER: 'Telematics.WindowLockedDriver',

        //** Event identifier for change in Window Locked Passenger */
        WINDOW_LOCKED_PASSENGER: 'Telematics.WindowLockedPassenger',

        //** Event identifier for change in Window Locked Rear Left */
        WINDOW_LOCKED_REAR_LEFT: 'Telematics.WindowLockedRearLeft',

        //** Event identifier for change in Window Locked Rear Right */
        WINDOW_LOCKED_REAR_RIGHT: 'Telematics.WindowLockedRearRight',

        //** Event identifier for change in World Manufacturer Identifier */
        WORLD_MANUFACTURER_IDENTIFIER: 'Telematics.WorldManufacturerIdentifier',

        //** Event identifier for change in Yaw Rate */
        YAWRATE: 'Telematics.Yawrate'
    };
    Object.freeze(TelematicsAPI.Event);

    return TelematicsAPI;
});
