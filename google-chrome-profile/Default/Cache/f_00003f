//
// hydrogen implementation
// THIS IS A GENERATED FILE - DO NOT EDIT
//
/**
 * <h2>Hydrogen CES Telematics API 2.0</h2>
 * <h3>Hydrogen CES (hydrogen)</h3>
 * -- The Alternative version for Telematics access
 */
define(function(require) {
    'use strict';

    var PlatformAPI             = require("common/platform/PlatformAPI");

    var singleton;

    function subscribeSignal(eventName, cb) {
        if(!singleton) {
            singleton = new PlatformAPI();
        }
        singleton.subscribe('Telematics.' + eventName, cb);
    }

    function unsubscribeSignal(eventName, cb) {
        if(singleton) {
            singleton.unsubscribe('Telematics.' + eventName, cb);
        }
    }
    function subscribeSignalOnce(eventName, cb) {
        if(!singleton) {
            singleton = new PlatformAPI();
        }
        singleton.subscribeOnce('Telematics.' + eventName, cb);
    }

    /**
     * @description
     * <h2>Hydrogen CES Telematics API 2.0</h2>
     * TelematicsAPI2 (for the "hydrogen" profile) provides a static interface, and alternative to the more basic TelematicsAPI.
     * Both APIs produce a manner in which information concerning the vehicle's various systems and sensors
     * can be queried.  The TelematicsAPI2 may be more convenient for more dynamic use cases.
     *
     * @readonly
     *
     * @example
     * <caption>Read the current value of the VehicleSpeed signal</caption>
     * TelematicsAPI2.VehicleSpeed.read().done(function(value) {
     *     txtSpeed.model.set('text', value + ' KPH');
     * });
     *
     * @example
     * <caption>Subscribe to changes to the VehicleSpeed signal</caption>
     * TelematicsAPI2.VehicleSpeed.subscribe(function(speed) {
     *     txtSpeed.model.set('text', value + ' KPH');
     * });
     *
     * @example
     * <caption>Check an informational field (in this case, resolution)</caption>
     * var res = TelematicsAPI2.VehicleSpeed.resolution;
     *
     * @example
     * <caption>Access indirectly</caption>
     * var signal = 'VehicleSpeed';
     * var max = TelematicsAPI2[signal].max;
     *
     * @example
     * <caption>Using pickMatchedStateValue to act upon a state return</caption>
     * var stateMsgs = {CLOSED: "The door is closed", default: "The door is not closed"};
     * var signal = "DoorOpenStatusPassenger";
     * TelematicsAPI2[signal].subscribe(function(value) {
     *     var msg = TelematicsAPI2.pickMatchedStateValue(signal, value, stateMsgs);
     *     Log.log(msg);
     * });
     *
     * @exports common/platform/TelematicsAPI2
     * @namespace hydrogen/TelematicsAPI2
     */
    var Signals = {

        /**
         * Matches the property name of the given telematics signal return state value
         * corresponding to the value supplied, then returns the value defined by the matchProps
         * object for this property name.  If there is no match in the matchProps object for this
         * name, the value for the matchProps property "default" is returned.
         * <p/>
         * If the value does not match one of the defined states for the given telematics signal
         * or if there is no "default" property in the matchProps object and no match found,
         * the function will return 'undefined'.
         * <p/>
         * This is a static utility function
         *
         * @memberof hydrogen/TelematicsAPI2
         *
         * @param signalName    {String}    Name of the telematics signal
         * @param val           {Number}    Integer value representing a defined state of this signal
         * @param matchProps    {Object}    Property object of corresponding names with values to return on match.
         *
         * @returns {mixed} value associated with matched property name
         */
         pickMatchedStateValue : function(signalName, val, matchProps) {
            var stateVal = Signals[signalName].states;
            if(stateVal && matchProps) {
                var c;
                for(var p in stateVal) {
                    if(stateVal.hasOwnProperty(p)) {
                        if(val === stateVal[p]) {
                            c = p;
                            break;
                        }
                    }
                }
                if(matchProps.hasOwnProperty(c)) {
                    return matchProps[c];
                }
                return matchProps.default;
            }
         },

        /**
         * @description
         * Acceleration - Lateral, measured in Meters Per Second Squared.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-40</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>41.91</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meters Per Second Squared</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} LateralAcceleration.min        - Minimum value ( -40 )
         * @property {number} LateralAcceleration.max        - Maximum value ( 41.91 )
         * @property {number} LateralAcceleration.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} LateralAcceleration.precision  - Decimals of precision reported ( 2 )
         * @property {string} LateralAcceleration.unit       - Unit of measure ( "Meters Per Second Squared" )
         * @property {string} LateralAcceleration.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        LateralAcceleration : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Acceleration - Lateral
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LateralAcceleration.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LateralAcceleration', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LateralAcceleration.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LateralAcceleration', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Acceleration - Lateral.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LateralAcceleration.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LateralAcceleration', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} LateralAcceleration.type
             */
            type: "number",
            min: -40,
            max: 41.91,
            resolution: 0.01,
            precision: 2,
            unit: 'Meters Per Second Squared'
        },
        /**
         * @description
         * Acceleration - Longitudinal, measured in Meters Per Second Squared.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-40</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>41.91</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meters Per Second Squared</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} LongitudinalAcceleration.min        - Minimum value ( -40 )
         * @property {number} LongitudinalAcceleration.max        - Maximum value ( 41.91 )
         * @property {number} LongitudinalAcceleration.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} LongitudinalAcceleration.precision  - Decimals of precision reported ( 2 )
         * @property {string} LongitudinalAcceleration.unit       - Unit of measure ( "Meters Per Second Squared" )
         * @property {string} LongitudinalAcceleration.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        LongitudinalAcceleration : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Acceleration - Longitudinal
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LongitudinalAcceleration.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LongitudinalAcceleration', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LongitudinalAcceleration.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LongitudinalAcceleration', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Acceleration - Longitudinal.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LongitudinalAcceleration.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LongitudinalAcceleration', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} LongitudinalAcceleration.type
             */
            type: "number",
            min: -40,
            max: 41.91,
            resolution: 0.01,
            precision: 2,
            unit: 'Meters Per Second Squared'
        },
        /**
         * @description
         * Accelerator Pedal Position, measured in Percentage.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>102.5</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} AccelPedalPosition.min        - Minimum value ( 0 )
         * @property {number} AccelPedalPosition.max        - Maximum value ( 102.5 )
         * @property {number} AccelPedalPosition.resolution - Minimum amount of change in unit measure ( 0.1 )
         * @property {number} AccelPedalPosition.precision  - Decimals of precision reported ( 2 )
         * @property {string} AccelPedalPosition.unit       - Unit of measure ( "Percentage" )
         * @property {string} AccelPedalPosition.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        AccelPedalPosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Accelerator Pedal Position
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function AccelPedalPosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AccelPedalPosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function AccelPedalPosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AccelPedalPosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Accelerator Pedal Position.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function AccelPedalPosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AccelPedalPosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} AccelPedalPosition.type
             */
            type: "number",
            min: 0,
            max: 102.5,
            resolution: 0.1,
            precision: 2,
            unit: 'Percentage'
        },
        /**
         * @description
         * Automatic Transmission Shift Position, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.BETWEEN_2_POSITIONS</td><td>0</td></tr>
         * <tr><td>states.PARK</td><td>1</td></tr>
         * <tr><td>states.REVERSE</td><td>2</td></tr>
         * <tr><td>states.NEUTRAL</td><td>3</td></tr>
         * <tr><td>states.DRIVE</td><td>4</td></tr>
         * <tr><td>states.POSITION_2</td><td>5</td></tr>
         * <tr><td>states.POSITION_1</td><td>6</td></tr>
         * <tr><td>states.INVALID</td><td>16</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property AutomaticTransmissionShiftPosition.states {object} Property object of possible value states
         *       @property {number} [AutomaticTransmissionShiftPosition.states.BETWEEN_2_POSITIONS=0]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.PARK=1]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.REVERSE=2]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.NEUTRAL=3]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.DRIVE=4]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.POSITION_2=5]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.POSITION_1=6]
         *       @property {number} [AutomaticTransmissionShiftPosition.states.INVALID=16]
         *

         *
         */
        AutomaticTransmissionShiftPosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Automatic Transmission Shift Position
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function AutomaticTransmissionShiftPosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AutomaticTransmissionShiftPosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function AutomaticTransmissionShiftPosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AutomaticTransmissionShiftPosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Automatic Transmission Shift Position.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function AutomaticTransmissionShiftPosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AutomaticTransmissionShiftPosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} AutomaticTransmissionShiftPosition.type
             */
            type: "object",
            states : {
                BETWEEN_2_POSITIONS: 0,
                PARK: 1,
                REVERSE: 2,
                NEUTRAL: 3,
                DRIVE: 4,
                POSITION_2: 5,
                POSITION_1: 6,
                INVALID: 16
            }
        },
        /**
         * @description
         * Brake Fluid Level Low, expressed as state values
         * 
         * <br/>Category: Maintenance


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NOT_LOW</td><td>0</td></tr>
         * <tr><td>states.LOW</td><td>1</td></tr>
         * <tr><td>states.ERROR</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property BrakeFluidLevelLow.states {object} Property object of possible value states
         *       @property {number} [BrakeFluidLevelLow.states.NOT_LOW=0]
         *       @property {number} [BrakeFluidLevelLow.states.LOW=1]
         *       @property {number} [BrakeFluidLevelLow.states.ERROR=2]
         *

         *
         */
        BrakeFluidLevelLow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Fluid Level Low
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakeFluidLevelLow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakeFluidLevelLow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakeFluidLevelLow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakeFluidLevelLow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Fluid Level Low.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakeFluidLevelLow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakeFluidLevelLow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} BrakeFluidLevelLow.type
             */
            type: "object",
            states : {
                NOT_LOW: 0,
                LOW: 1,
                ERROR: 2
            }
        },
        /**
         * @description
         * Brake Pad Wear Front Left, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} BrakePadWearFrontLeft.min        - Minimum value ( 0 )
         * @property {number} BrakePadWearFrontLeft.max        - Maximum value ( 100 )
         * @property {number} BrakePadWearFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} BrakePadWearFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} BrakePadWearFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} BrakePadWearFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BrakePadWearFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Pad Wear Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakePadWearFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakePadWearFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Pad Wear Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakePadWearFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BrakePadWearFrontLeft.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Brake Pad Wear Front Right, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} BrakePadWearFrontRight.min        - Minimum value ( 0 )
         * @property {number} BrakePadWearFrontRight.max        - Maximum value ( 100 )
         * @property {number} BrakePadWearFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} BrakePadWearFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} BrakePadWearFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} BrakePadWearFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BrakePadWearFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Pad Wear Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakePadWearFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakePadWearFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Pad Wear Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakePadWearFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BrakePadWearFrontRight.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Brake Pad Wear Rear Left, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} BrakePadWearRearLeft.min        - Minimum value ( 0 )
         * @property {number} BrakePadWearRearLeft.max        - Maximum value ( 100 )
         * @property {number} BrakePadWearRearLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} BrakePadWearRearLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} BrakePadWearRearLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} BrakePadWearRearLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BrakePadWearRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Pad Wear Rear Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakePadWearRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakePadWearRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Pad Wear Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakePadWearRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BrakePadWearRearLeft.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Brake Pad Wear Rear Right, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} BrakePadWearRearRight.min        - Minimum value ( 0 )
         * @property {number} BrakePadWearRearRight.max        - Maximum value ( 100 )
         * @property {number} BrakePadWearRearRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} BrakePadWearRearRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} BrakePadWearRearRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} BrakePadWearRearRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BrakePadWearRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Pad Wear Rear Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakePadWearRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakePadWearRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Pad Wear Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePadWearRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakePadWearRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BrakePadWearRearRight.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Value is true if Brake Pedal Depressed
         * 
         * <br/>Category: Running Status



         * @memberof! hydrogen/TelematicsAPI2#
         *

         *
         */
        BrakePedalDepressed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Pedal Depressed
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePedalDepressed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakePedalDepressed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePedalDepressed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakePedalDepressed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Pedal Depressed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function BrakePedalDepressed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakePedalDepressed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} BrakePedalDepressed.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Clutch Wear Level, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} ClutchWearLevel.min        - Minimum value ( 0 )
         * @property {number} ClutchWearLevel.max        - Maximum value ( 100 )
         * @property {number} ClutchWearLevel.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} ClutchWearLevel.precision  - Decimals of precision reported ( 0 )
         * @property {string} ClutchWearLevel.unit       - Unit of measure ( "Percentage" )
         * @property {string} ClutchWearLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        ClutchWearLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Clutch Wear Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ClutchWearLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ClutchWearLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ClutchWearLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ClutchWearLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Clutch Wear Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ClutchWearLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ClutchWearLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} ClutchWearLevel.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Distance Travelled - Total, measured in Kilometer.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>15000</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.0002</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>4</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometer</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} DistanceTravelledTotal.min        - Minimum value ( 0 )
         * @property {number} DistanceTravelledTotal.max        - Maximum value ( 15000 )
         * @property {number} DistanceTravelledTotal.resolution - Minimum amount of change in unit measure ( 0.0002 )
         * @property {number} DistanceTravelledTotal.precision  - Decimals of precision reported ( 4 )
         * @property {string} DistanceTravelledTotal.unit       - Unit of measure ( "Kilometer" )
         * @property {string} DistanceTravelledTotal.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        DistanceTravelledTotal : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Distance Travelled - Total
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function DistanceTravelledTotal.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DistanceTravelledTotal', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function DistanceTravelledTotal.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DistanceTravelledTotal', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Distance Travelled - Total.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function DistanceTravelledTotal.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DistanceTravelledTotal', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} DistanceTravelledTotal.type
             */
            type: "number",
            min: 0,
            max: 15000,
            resolution: 0.0002,
            precision: 4,
            unit: 'Kilometer'
        },
        /**
         * @description
         * Engine Coolant Temp, measured in Degrees Celsius.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-40</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>214</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Degrees Celsius</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} EngineCoolantTemp.min        - Minimum value ( -40 )
         * @property {number} EngineCoolantTemp.max        - Maximum value ( 214 )
         * @property {number} EngineCoolantTemp.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} EngineCoolantTemp.precision  - Decimals of precision reported ( 0 )
         * @property {string} EngineCoolantTemp.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} EngineCoolantTemp.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EngineCoolantTemp : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Coolant Temp
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineCoolantTemp.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineCoolantTemp', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineCoolantTemp.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineCoolantTemp', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Coolant Temp.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineCoolantTemp.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineCoolantTemp', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EngineCoolantTemp.type
             */
            type: "number",
            min: -40,
            max: 214,
            resolution: 1,
            precision: 0,
            unit: 'Degrees Celsius'
        },
        /**
         * @description
         * Engine Oil Life Remaining, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} EngineOilLifeRemaining.min        - Minimum value ( 0 )
         * @property {number} EngineOilLifeRemaining.max        - Maximum value ( 100 )
         * @property {number} EngineOilLifeRemaining.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} EngineOilLifeRemaining.precision  - Decimals of precision reported ( 0 )
         * @property {string} EngineOilLifeRemaining.unit       - Unit of measure ( "Percentage" )
         * @property {string} EngineOilLifeRemaining.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EngineOilLifeRemaining : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Oil Life Remaining
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineOilLifeRemaining.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineOilLifeRemaining', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineOilLifeRemaining.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineOilLifeRemaining', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Oil Life Remaining.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineOilLifeRemaining.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineOilLifeRemaining', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EngineOilLifeRemaining.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Engine Speed, measured in Rotations Per Minute.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>16380</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>2</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Rotations Per Minute</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} EngineSpeed.min        - Minimum value ( 0 )
         * @property {number} EngineSpeed.max        - Maximum value ( 16380 )
         * @property {number} EngineSpeed.resolution - Minimum amount of change in unit measure ( 2 )
         * @property {number} EngineSpeed.precision  - Decimals of precision reported ( 0 )
         * @property {string} EngineSpeed.unit       - Unit of measure ( "Rotations Per Minute" )
         * @property {string} EngineSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EngineSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Speed
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Speed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function EngineSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EngineSpeed.type
             */
            type: "number",
            min: 0,
            max: 16380,
            resolution: 2,
            precision: 0,
            unit: 'Rotations Per Minute'
        },
        /**
         * @description
         * Exterior Temperature, measured in Degrees Celsius.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-40</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>215</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Degrees Celsius</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} ExteriorTemperature.min        - Minimum value ( -40 )
         * @property {number} ExteriorTemperature.max        - Maximum value ( 215 )
         * @property {number} ExteriorTemperature.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} ExteriorTemperature.precision  - Decimals of precision reported ( 0 )
         * @property {string} ExteriorTemperature.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} ExteriorTemperature.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        ExteriorTemperature : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Exterior Temperature
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ExteriorTemperature.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ExteriorTemperature', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ExteriorTemperature.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ExteriorTemperature', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Exterior Temperature.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ExteriorTemperature.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ExteriorTemperature', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} ExteriorTemperature.type
             */
            type: "number",
            min: -40,
            max: 215,
            resolution: 1,
            precision: 0,
            unit: 'Degrees Celsius'
        },
        /**
         * @description
         * Front Wiper Status, expressed as state values
         * 
         * <br/>Category: Climate


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.SLOW_SPEED</td><td>1</td></tr>
         * <tr><td>states.FAST_SPEED</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property FrontWiperStatus.states {object} Property object of possible value states
         *       @property {number} [FrontWiperStatus.states.OFF=0]
         *       @property {number} [FrontWiperStatus.states.SLOW_SPEED=1]
         *       @property {number} [FrontWiperStatus.states.FAST_SPEED=2]
         *

         *
         */
        FrontWiperStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Wiper Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontWiperStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontWiperStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontWiperStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontWiperStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Wiper Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontWiperStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontWiperStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} FrontWiperStatus.type
             */
            type: "object",
            states : {
                OFF: 0,
                SLOW_SPEED: 1,
                FAST_SPEED: 2
            }
        },
        /**
         * @description
         * Fuel Consumption - Drive - Total, measured in Liter.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>1000</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.005</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Liter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} TotalFuelConsumptionDrive.min        - Minimum value ( 0 )
         * @property {number} TotalFuelConsumptionDrive.max        - Maximum value ( 1000 )
         * @property {number} TotalFuelConsumptionDrive.resolution - Minimum amount of change in unit measure ( 0.005 )
         * @property {number} TotalFuelConsumptionDrive.precision  - Decimals of precision reported ( 3 )
         * @property {string} TotalFuelConsumptionDrive.unit       - Unit of measure ( "Liter" )
         * @property {string} TotalFuelConsumptionDrive.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TotalFuelConsumptionDrive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Fuel Consumption - Drive - Total
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TotalFuelConsumptionDrive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TotalFuelConsumptionDrive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TotalFuelConsumptionDrive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TotalFuelConsumptionDrive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Fuel Consumption - Drive - Total.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TotalFuelConsumptionDrive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TotalFuelConsumptionDrive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TotalFuelConsumptionDrive.type
             */
            type: "number",
            min: 0,
            max: 1000,
            resolution: 0.005,
            precision: 3,
            unit: 'Liter'
        },
        /**
         * @description
         * Fuel Efficiency - Drive - Mean, measured in Liters Per One Hundred Kilometers.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>500</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Liters Per One Hundred Kilometers</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} MeanFuelEfficiencyDrive.min        - Minimum value ( 0 )
         * @property {number} MeanFuelEfficiencyDrive.max        - Maximum value ( 500 )
         * @property {number} MeanFuelEfficiencyDrive.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} MeanFuelEfficiencyDrive.precision  - Decimals of precision reported ( 2 )
         * @property {string} MeanFuelEfficiencyDrive.unit       - Unit of measure ( "Liters Per One Hundred Kilometers" )
         * @property {string} MeanFuelEfficiencyDrive.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MeanFuelEfficiencyDrive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Fuel Efficiency - Drive - Mean
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function MeanFuelEfficiencyDrive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MeanFuelEfficiencyDrive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function MeanFuelEfficiencyDrive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MeanFuelEfficiencyDrive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Fuel Efficiency - Drive - Mean.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function MeanFuelEfficiencyDrive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MeanFuelEfficiencyDrive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MeanFuelEfficiencyDrive.type
             */
            type: "number",
            min: 0,
            max: 500,
            resolution: 0.01,
            precision: 2,
            unit: 'Liters Per One Hundred Kilometers'
        },
        /**
         * @description
         * Fuel Efficiency Instant, measured in Liters Per One Hundred Kilometers.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>500</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.0002</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>4</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Liters Per One Hundred Kilometers</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} FuelEfficiencyInstant.min        - Minimum value ( 0 )
         * @property {number} FuelEfficiencyInstant.max        - Maximum value ( 500 )
         * @property {number} FuelEfficiencyInstant.resolution - Minimum amount of change in unit measure ( 0.0002 )
         * @property {number} FuelEfficiencyInstant.precision  - Decimals of precision reported ( 4 )
         * @property {string} FuelEfficiencyInstant.unit       - Unit of measure ( "Liters Per One Hundred Kilometers" )
         * @property {string} FuelEfficiencyInstant.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FuelEfficiencyInstant : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Fuel Efficiency Instant
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FuelEfficiencyInstant.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FuelEfficiencyInstant', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FuelEfficiencyInstant.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FuelEfficiencyInstant', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Fuel Efficiency Instant.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FuelEfficiencyInstant.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FuelEfficiencyInstant', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FuelEfficiencyInstant.type
             */
            type: "number",
            min: 0,
            max: 500,
            resolution: 0.0002,
            precision: 4,
            unit: 'Liters Per One Hundred Kilometers'
        },
        /**
         * @description
         * Fuel Level, measured in Percentage.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.5</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} FuelLevel.min        - Minimum value ( 0 )
         * @property {number} FuelLevel.max        - Maximum value ( 100 )
         * @property {number} FuelLevel.resolution - Minimum amount of change in unit measure ( 0.5 )
         * @property {number} FuelLevel.precision  - Decimals of precision reported ( 1 )
         * @property {string} FuelLevel.unit       - Unit of measure ( "Percentage" )
         * @property {string} FuelLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FuelLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Fuel Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FuelLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FuelLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FuelLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FuelLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Fuel Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FuelLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FuelLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FuelLevel.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 0.5,
            precision: 1,
            unit: 'Percentage'
        },
        /**
         * @description
         * Gear Position, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.PARK_OR_NEUTRAL</td><td>0</td></tr>
         * <tr><td>states.GEAR_1ST</td><td>1</td></tr>
         * <tr><td>states.GEAR_2ND</td><td>2</td></tr>
         * <tr><td>states.GEAR_3RD</td><td>3</td></tr>
         * <tr><td>states.GEAR_4TH</td><td>4</td></tr>
         * <tr><td>states.GEAR_5TH</td><td>5</td></tr>
         * <tr><td>states.GEAR_6TH</td><td>6</td></tr>
         * <tr><td>states.GEAR_7TH</td><td>7</td></tr>
         * <tr><td>states.GEAR_8TH</td><td>8</td></tr>
         * <tr><td>states.REVERSE</td><td>15</td></tr>
         * <tr><td>states.UNKNOWN</td><td>16</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property GearPosition.states {object} Property object of possible value states
         *       @property {number} [GearPosition.states.PARK_OR_NEUTRAL=0]
         *       @property {number} [GearPosition.states.GEAR_1ST=1]
         *       @property {number} [GearPosition.states.GEAR_2ND=2]
         *       @property {number} [GearPosition.states.GEAR_3RD=3]
         *       @property {number} [GearPosition.states.GEAR_4TH=4]
         *       @property {number} [GearPosition.states.GEAR_5TH=5]
         *       @property {number} [GearPosition.states.GEAR_6TH=6]
         *       @property {number} [GearPosition.states.GEAR_7TH=7]
         *       @property {number} [GearPosition.states.GEAR_8TH=8]
         *       @property {number} [GearPosition.states.REVERSE=15]
         *       @property {number} [GearPosition.states.UNKNOWN=16]
         *

         *
         */
        GearPosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Gear Position
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GearPosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GearPosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GearPosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GearPosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Gear Position.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GearPosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GearPosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} GearPosition.type
             */
            type: "object",
            states : {
                PARK_OR_NEUTRAL: 0,
                GEAR_1ST: 1,
                GEAR_2ND: 2,
                GEAR_3RD: 3,
                GEAR_4TH: 4,
                GEAR_5TH: 5,
                GEAR_6TH: 6,
                GEAR_7TH: 7,
                GEAR_8TH: 8,
                REVERSE: 15,
                UNKNOWN: 16
            }
        },
        /**
         * @description
         * GPS - Altitude, measured in Meter.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-1024</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>7168</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsAltitude.min        - Minimum value ( -1024 )
         * @property {number} GpsAltitude.max        - Maximum value ( 7168 )
         * @property {number} GpsAltitude.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} GpsAltitude.precision  - Decimals of precision reported ( 0 )
         * @property {string} GpsAltitude.unit       - Unit of measure ( "Meter" )
         * @property {string} GpsAltitude.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsAltitude : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS - Altitude
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAltitude.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsAltitude', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAltitude.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsAltitude', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS - Altitude.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAltitude.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsAltitude', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsAltitude.type
             */
            type: "number",
            min: -1024,
            max: 7168,
            resolution: 1,
            precision: 0,
            unit: 'Meter'
        },
        /**
         * @description
         * GPS - Heading, measured in Angular Degrees.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>360</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.000001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>6</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Angular Degrees</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsHeading.min        - Minimum value ( 0 )
         * @property {number} GpsHeading.max        - Maximum value ( 360 )
         * @property {number} GpsHeading.resolution - Minimum amount of change in unit measure ( 0.000001 )
         * @property {number} GpsHeading.precision  - Decimals of precision reported ( 6 )
         * @property {string} GpsHeading.unit       - Unit of measure ( "Angular Degrees" )
         * @property {string} GpsHeading.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsHeading : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS - Heading
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsHeading.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsHeading', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsHeading.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsHeading', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS - Heading.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsHeading.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsHeading', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsHeading.type
             */
            type: "number",
            min: 0,
            max: 360,
            resolution: 0.000001,
            precision: 6,
            unit: 'Angular Degrees'
        },
        /**
         * @description
         * GPS - Latitude, measured in Angular Degrees.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-90</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>90</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.000001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>6</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Angular Degrees</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsLatitude.min        - Minimum value ( -90 )
         * @property {number} GpsLatitude.max        - Maximum value ( 90 )
         * @property {number} GpsLatitude.resolution - Minimum amount of change in unit measure ( 0.000001 )
         * @property {number} GpsLatitude.precision  - Decimals of precision reported ( 6 )
         * @property {string} GpsLatitude.unit       - Unit of measure ( "Angular Degrees" )
         * @property {string} GpsLatitude.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsLatitude : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS - Latitude
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsLatitude.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsLatitude', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsLatitude.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsLatitude', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS - Latitude.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsLatitude.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsLatitude', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsLatitude.type
             */
            type: "number",
            min: -90,
            max: 90,
            resolution: 0.000001,
            precision: 6,
            unit: 'Angular Degrees'
        },
        /**
         * @description
         * GPS - Longitude, measured in Angular Degrees.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-180</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>180</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.000001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>6</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Angular Degrees</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsLongitude.min        - Minimum value ( -180 )
         * @property {number} GpsLongitude.max        - Maximum value ( 180 )
         * @property {number} GpsLongitude.resolution - Minimum amount of change in unit measure ( 0.000001 )
         * @property {number} GpsLongitude.precision  - Decimals of precision reported ( 6 )
         * @property {string} GpsLongitude.unit       - Unit of measure ( "Angular Degrees" )
         * @property {string} GpsLongitude.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsLongitude : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS - Longitude
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsLongitude.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsLongitude', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsLongitude.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsLongitude', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS - Longitude.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsLongitude.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsLongitude', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsLongitude.type
             */
            type: "number",
            min: -180,
            max: 180,
            resolution: 0.000001,
            precision: 6,
            unit: 'Angular Degrees'
        },
        /**
         * @description
         * GPS Accuracy, measured in Meter.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsAccuracy.min        - Minimum value ( 0 )
         * @property {number} GpsAccuracy.max        - Maximum value ( 255 )
         * @property {number} GpsAccuracy.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} GpsAccuracy.precision  - Decimals of precision reported ( 0 )
         * @property {string} GpsAccuracy.unit       - Unit of measure ( "Meter" )
         * @property {string} GpsAccuracy.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsAccuracy : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS Accuracy
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAccuracy.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsAccuracy', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAccuracy.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsAccuracy', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS Accuracy.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAccuracy.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsAccuracy', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsAccuracy.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 1,
            precision: 0,
            unit: 'Meter'
        },
        /**
         * @description
         * GPS Altitude Accuracy, measured in Meter.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsAltitudeAccuracy.min        - Minimum value ( 0 )
         * @property {number} GpsAltitudeAccuracy.max        - Maximum value ( 255 )
         * @property {number} GpsAltitudeAccuracy.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} GpsAltitudeAccuracy.precision  - Decimals of precision reported ( 0 )
         * @property {string} GpsAltitudeAccuracy.unit       - Unit of measure ( "Meter" )
         * @property {string} GpsAltitudeAccuracy.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsAltitudeAccuracy : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS Altitude Accuracy
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAltitudeAccuracy.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsAltitudeAccuracy', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAltitudeAccuracy.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsAltitudeAccuracy', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS Altitude Accuracy.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsAltitudeAccuracy.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsAltitudeAccuracy', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsAltitudeAccuracy.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 1,
            precision: 0,
            unit: 'Meter'
        },
        /**
         * @description
         * GPS Fix Status, expressed as state values
         * 
         * <br/>Category: Location


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NONE</td><td>0</td></tr>
         * <tr><td>states.FIX</td><td>1</td></tr>
         * <tr><td>states.ESTIMATED</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property GpsFixStatus.states {object} Property object of possible value states
         *       @property {number} [GpsFixStatus.states.NONE=0]
         *       @property {number} [GpsFixStatus.states.FIX=1]
         *       @property {number} [GpsFixStatus.states.ESTIMATED=2]
         *

         *
         */
        GpsFixStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS Fix Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsFixStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsFixStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsFixStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsFixStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS Fix Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsFixStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsFixStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} GpsFixStatus.type
             */
            type: "object",
            states : {
                NONE: 0,
                FIX: 1,
                ESTIMATED: 2
            }
        },
        /**
         * @description
         * GPS Timestamp, measured in Count.
         * 
         * <br/>Category: Location

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>240000</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Count</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} GpsTimestamp.min        - Minimum value ( 0 )
         * @property {number} GpsTimestamp.max        - Maximum value ( 240000 )
         * @property {number} GpsTimestamp.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} GpsTimestamp.precision  - Decimals of precision reported ( 0 )
         * @property {string} GpsTimestamp.unit       - Unit of measure ( "Count" )
         * @property {string} GpsTimestamp.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        GpsTimestamp : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for GPS Timestamp
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsTimestamp.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GpsTimestamp', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsTimestamp.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GpsTimestamp', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for GPS Timestamp.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function GpsTimestamp.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GpsTimestamp', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} GpsTimestamp.type
             */
            type: "number",
            min: 0,
            max: 240000,
            resolution: 1,
            precision: 0,
            unit: 'Count'
        },
        /**
         * @description
         * Level of Charge, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>127.5</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} LevelOfCharge.min        - Minimum value ( 0 )
         * @property {number} LevelOfCharge.max        - Maximum value ( 127.5 )
         * @property {number} LevelOfCharge.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} LevelOfCharge.precision  - Decimals of precision reported ( 0 )
         * @property {string} LevelOfCharge.unit       - Unit of measure ( "Percentage" )
         * @property {string} LevelOfCharge.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        LevelOfCharge : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Level of Charge
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LevelOfCharge.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LevelOfCharge', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LevelOfCharge.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LevelOfCharge', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Level of Charge.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function LevelOfCharge.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LevelOfCharge', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} LevelOfCharge.type
             */
            type: "number",
            min: 0,
            max: 127.5,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Odometer, measured in Kilometer.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>16777215</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometer</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} Odometer.min        - Minimum value ( 0 )
         * @property {number} Odometer.max        - Maximum value ( 16777215 )
         * @property {number} Odometer.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} Odometer.precision  - Decimals of precision reported ( 1 )
         * @property {string} Odometer.unit       - Unit of measure ( "Kilometer" )
         * @property {string} Odometer.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        Odometer : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Odometer
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function Odometer.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('Odometer', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function Odometer.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('Odometer', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Odometer.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function Odometer.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('Odometer', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} Odometer.type
             */
            type: "number",
            min: 0,
            max: 16777215,
            resolution: 1,
            precision: 1,
            unit: 'Kilometer'
        },
        /**
         * @description
         * Value is true if Oil Level Low
         * 
         * <br/>Category: Maintenance



         * @memberof! hydrogen/TelematicsAPI2#
         *

         *
         */
        OilLevelLow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Oil Level Low
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function OilLevelLow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('OilLevelLow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function OilLevelLow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('OilLevelLow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Oil Level Low.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function OilLevelLow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('OilLevelLow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} OilLevelLow.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Parking Brake On, expressed as state values
         * 
         * <br/>Category: Parking


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.ON</td><td>1</td></tr>
         * <tr><td>states.ERROR</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property ParkingBrakeOn.states {object} Property object of possible value states
         *       @property {number} [ParkingBrakeOn.states.OFF=0]
         *       @property {number} [ParkingBrakeOn.states.ON=1]
         *       @property {number} [ParkingBrakeOn.states.ERROR=2]
         *

         *
         */
        ParkingBrakeOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Parking Brake On
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ParkingBrakeOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ParkingBrakeOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ParkingBrakeOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ParkingBrakeOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Parking Brake On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ParkingBrakeOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ParkingBrakeOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} ParkingBrakeOn.type
             */
            type: "object",
            states : {
                OFF: 0,
                ON: 1,
                ERROR: 2
            }
        },
        /**
         * @description
         * Steering Angle, measured in Angular Degrees.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-1600</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>1600</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Angular Degrees</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} SteeringWheelAngle.min        - Minimum value ( -1600 )
         * @property {number} SteeringWheelAngle.max        - Maximum value ( 1600 )
         * @property {number} SteeringWheelAngle.resolution - Minimum amount of change in unit measure ( 0.1 )
         * @property {number} SteeringWheelAngle.precision  - Decimals of precision reported ( 1 )
         * @property {string} SteeringWheelAngle.unit       - Unit of measure ( "Angular Degrees" )
         * @property {string} SteeringWheelAngle.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SteeringWheelAngle : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Angle
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function SteeringWheelAngle.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelAngle', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function SteeringWheelAngle.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelAngle', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Angle.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function SteeringWheelAngle.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelAngle', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SteeringWheelAngle.type
             */
            type: "number",
            min: -1600,
            max: 1600,
            resolution: 0.1,
            precision: 1,
            unit: 'Angular Degrees'
        },
        /**
         * @description
         * Throttle Position, measured in Percentage.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.392157</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} ThrottlePosition.min        - Minimum value ( 0 )
         * @property {number} ThrottlePosition.max        - Maximum value ( 100 )
         * @property {number} ThrottlePosition.resolution - Minimum amount of change in unit measure ( 0.392157 )
         * @property {number} ThrottlePosition.precision  - Decimals of precision reported ( 0 )
         * @property {string} ThrottlePosition.unit       - Unit of measure ( "Percentage" )
         * @property {string} ThrottlePosition.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        ThrottlePosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Throttle Position
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ThrottlePosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ThrottlePosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ThrottlePosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ThrottlePosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Throttle Position.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function ThrottlePosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ThrottlePosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} ThrottlePosition.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 0.392157,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Tire Pressure Front Left, measured in Kilopascal.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>765</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>3</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilopascal</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} TirePressureFrontLeft.min        - Minimum value ( 0 )
         * @property {number} TirePressureFrontLeft.max        - Maximum value ( 765 )
         * @property {number} TirePressureFrontLeft.resolution - Minimum amount of change in unit measure ( 3 )
         * @property {number} TirePressureFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} TirePressureFrontLeft.unit       - Unit of measure ( "Kilopascal" )
         * @property {string} TirePressureFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TirePressureFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TirePressureFrontLeft.type
             */
            type: "number",
            min: 0,
            max: 765,
            resolution: 3,
            precision: 0,
            unit: 'Kilopascal'
        },
        /**
         * @description
         * Tire Pressure Front Right, measured in Kilopascal.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>765</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>3</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilopascal</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} TirePressureFrontRight.min        - Minimum value ( 0 )
         * @property {number} TirePressureFrontRight.max        - Maximum value ( 765 )
         * @property {number} TirePressureFrontRight.resolution - Minimum amount of change in unit measure ( 3 )
         * @property {number} TirePressureFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} TirePressureFrontRight.unit       - Unit of measure ( "Kilopascal" )
         * @property {string} TirePressureFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TirePressureFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TirePressureFrontRight.type
             */
            type: "number",
            min: 0,
            max: 765,
            resolution: 3,
            precision: 0,
            unit: 'Kilopascal'
        },
        /**
         * @description
         * Tire Pressure Rear Left, measured in Kilopascal.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>765</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>3</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilopascal</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} TirePressureRearLeft.min        - Minimum value ( 0 )
         * @property {number} TirePressureRearLeft.max        - Maximum value ( 765 )
         * @property {number} TirePressureRearLeft.resolution - Minimum amount of change in unit measure ( 3 )
         * @property {number} TirePressureRearLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} TirePressureRearLeft.unit       - Unit of measure ( "Kilopascal" )
         * @property {string} TirePressureRearLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TirePressureRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Rear Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TirePressureRearLeft.type
             */
            type: "number",
            min: 0,
            max: 765,
            resolution: 3,
            precision: 0,
            unit: 'Kilopascal'
        },
        /**
         * @description
         * Tire Pressure Rear Right, measured in Kilopascal.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>765</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>3</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilopascal</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} TirePressureRearRight.min        - Minimum value ( 0 )
         * @property {number} TirePressureRearRight.max        - Maximum value ( 765 )
         * @property {number} TirePressureRearRight.resolution - Minimum amount of change in unit measure ( 3 )
         * @property {number} TirePressureRearRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} TirePressureRearRight.unit       - Unit of measure ( "Kilopascal" )
         * @property {string} TirePressureRearRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TirePressureRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Rear Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TirePressureRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TirePressureRearRight.type
             */
            type: "number",
            min: 0,
            max: 765,
            resolution: 3,
            precision: 0,
            unit: 'Kilopascal'
        },
        /**
         * @description
         * Transmission Mode, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.PARK</td><td>1</td></tr>
         * <tr><td>states.REVERSE</td><td>2</td></tr>
         * <tr><td>states.NEUTRAL</td><td>3</td></tr>
         * <tr><td>states.LOW</td><td>4</td></tr>
         * <tr><td>states.DRIVE</td><td>5</td></tr>
         * <tr><td>states.OVERDRIVE</td><td>6</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property TransmissionMode.states {object} Property object of possible value states
         *       @property {number} [TransmissionMode.states.PARK=1]
         *       @property {number} [TransmissionMode.states.REVERSE=2]
         *       @property {number} [TransmissionMode.states.NEUTRAL=3]
         *       @property {number} [TransmissionMode.states.LOW=4]
         *       @property {number} [TransmissionMode.states.DRIVE=5]
         *       @property {number} [TransmissionMode.states.OVERDRIVE=6]
         *

         *
         */
        TransmissionMode : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Transmission Mode
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TransmissionMode.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TransmissionMode', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TransmissionMode.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TransmissionMode', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Transmission Mode.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function TransmissionMode.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TransmissionMode', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TransmissionMode.type
             */
            type: "object",
            states : {
                PARK: 1,
                REVERSE: 2,
                NEUTRAL: 3,
                LOW: 4,
                DRIVE: 5,
                OVERDRIVE: 6
            }
        },
        /**
         * @description
         * Vehicle Key Position (Power Status), expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.ACCESSORY</td><td>1</td></tr>
         * <tr><td>states.ON</td><td>2</td></tr>
         * <tr><td>states.CRANKING</td><td>3</td></tr>
         * <tr><td>states.ERROR</td><td>4</td></tr>
         * </tbody>
         * </table>

         * @memberof! hydrogen/TelematicsAPI2#
         * @property VehicleKeyPosition.states {object} Property object of possible value states
         *       @property {number} [VehicleKeyPosition.states.OFF=0]
         *       @property {number} [VehicleKeyPosition.states.ACCESSORY=1]
         *       @property {number} [VehicleKeyPosition.states.ON=2]
         *       @property {number} [VehicleKeyPosition.states.CRANKING=3]
         *       @property {number} [VehicleKeyPosition.states.ERROR=4]
         *

         *
         */
        VehicleKeyPosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Key Position (Power Status)
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function VehicleKeyPosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleKeyPosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function VehicleKeyPosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleKeyPosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Key Position (Power Status).
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function VehicleKeyPosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleKeyPosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} VehicleKeyPosition.type
             */
            type: "object",
            states : {
                OFF: 0,
                ACCESSORY: 1,
                ON: 2,
                CRANKING: 3,
                ERROR: 4
            }
        },
        /**
         * @description
         * Vehicle Speed, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>655.35</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} VehicleSpeed.min        - Minimum value ( 0 )
         * @property {number} VehicleSpeed.max        - Maximum value ( 655.35 )
         * @property {number} VehicleSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} VehicleSpeed.precision  - Decimals of precision reported ( 2 )
         * @property {string} VehicleSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} VehicleSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Speed
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function VehicleSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function VehicleSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Speed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function VehicleSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleSpeed.type
             */
            type: "number",
            min: 0,
            max: 655.35,
            resolution: 0.01,
            precision: 2,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Washer Fluid Level, measured in Percentage.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} WasherFluidLevel.min        - Minimum value ( 0 )
         * @property {number} WasherFluidLevel.max        - Maximum value ( 100 )
         * @property {number} WasherFluidLevel.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} WasherFluidLevel.precision  - Decimals of precision reported ( 0 )
         * @property {string} WasherFluidLevel.unit       - Unit of measure ( "Percentage" )
         * @property {string} WasherFluidLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        WasherFluidLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Washer Fluid Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function WasherFluidLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WasherFluidLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function WasherFluidLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WasherFluidLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Washer Fluid Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function WasherFluidLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WasherFluidLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} WasherFluidLevel.type
             */
            type: "number",
            min: 0,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Wheel Speed - Front Left, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} FrontLeftWheelSpeed.min        - Minimum value ( 0 )
         * @property {number} FrontLeftWheelSpeed.max        - Maximum value ( 255 )
         * @property {number} FrontLeftWheelSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} FrontLeftWheelSpeed.precision  - Decimals of precision reported ( 3 )
         * @property {string} FrontLeftWheelSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} FrontLeftWheelSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FrontLeftWheelSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Wheel Speed - Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontLeftWheelSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontLeftWheelSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontLeftWheelSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontLeftWheelSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Wheel Speed - Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontLeftWheelSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontLeftWheelSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FrontLeftWheelSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 0.01,
            precision: 3,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Wheel Speed - Front Right, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} FrontRightWheelSpeed.min        - Minimum value ( 0 )
         * @property {number} FrontRightWheelSpeed.max        - Maximum value ( 255 )
         * @property {number} FrontRightWheelSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} FrontRightWheelSpeed.precision  - Decimals of precision reported ( 3 )
         * @property {string} FrontRightWheelSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} FrontRightWheelSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FrontRightWheelSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Wheel Speed - Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontRightWheelSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontRightWheelSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontRightWheelSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontRightWheelSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Wheel Speed - Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function FrontRightWheelSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontRightWheelSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FrontRightWheelSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 0.01,
            precision: 3,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Wheel Speed - Rear Left, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} RearLeftWheelSpeed.min        - Minimum value ( 0 )
         * @property {number} RearLeftWheelSpeed.max        - Maximum value ( 255 )
         * @property {number} RearLeftWheelSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} RearLeftWheelSpeed.precision  - Decimals of precision reported ( 3 )
         * @property {string} RearLeftWheelSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} RearLeftWheelSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        RearLeftWheelSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Wheel Speed - Rear Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function RearLeftWheelSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RearLeftWheelSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function RearLeftWheelSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RearLeftWheelSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Wheel Speed - Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function RearLeftWheelSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RearLeftWheelSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} RearLeftWheelSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 0.01,
            precision: 3,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Wheel Speed - Rear Right, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} RearRightWheelSpeed.min        - Minimum value ( 0 )
         * @property {number} RearRightWheelSpeed.max        - Maximum value ( 255 )
         * @property {number} RearRightWheelSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} RearRightWheelSpeed.precision  - Decimals of precision reported ( 3 )
         * @property {string} RearRightWheelSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} RearRightWheelSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        RearRightWheelSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Wheel Speed - Rear Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function RearRightWheelSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RearRightWheelSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function RearRightWheelSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RearRightWheelSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Wheel Speed - Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function RearRightWheelSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RearRightWheelSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} RearRightWheelSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 0.01,
            precision: 3,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Yaw Rate, measured in Angular Degrees Per Second.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-74.98161</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>75.01824</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.03663</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Angular Degrees Per Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! hydrogen/TelematicsAPI2#
         * @property {number} Yawrate.min        - Minimum value ( -74.98161 )
         * @property {number} Yawrate.max        - Maximum value ( 75.01824 )
         * @property {number} Yawrate.resolution - Minimum amount of change in unit measure ( 0.03663 )
         * @property {number} Yawrate.precision  - Decimals of precision reported ( 2 )
         * @property {string} Yawrate.unit       - Unit of measure ( "Angular Degrees Per Second" )
         * @property {string} Yawrate.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        Yawrate : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Yaw Rate
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function Yawrate.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('Yawrate', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function Yawrate.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('Yawrate', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Yaw Rate.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! hydrogen/TelematicsAPI2#
             * @function Yawrate.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('Yawrate', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} Yawrate.type
             */
            type: "number",
            min: -74.98161,
            max: 75.01824,
            resolution: 0.03663,
            precision: 2,
            unit: 'Angular Degrees Per Second'
        }
    };

    Object.freeze(Signals);

    return Signals;
});
