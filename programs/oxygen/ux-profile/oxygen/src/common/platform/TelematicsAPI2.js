//
// oxygen implementation
// THIS IS A GENERATED FILE - DO NOT EDIT
//
/**
 * <h2>Oxygen CES Telematics API 2.0</h2>
 * <h3>Oxygen CES (oxygen)</h3>
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
     * <h2>Oxygen CES Telematics API 2.0</h2>
     * TelematicsAPI2 (for the "oxygen" profile) provides a static interface, and alternative to the more basic TelematicsAPI.
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
     * @namespace oxygen/TelematicsAPI2
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
         * @memberof oxygen/TelematicsAPI2
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Acceleration - Vertical, measured in Meters Per Second Squared.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-40</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>40</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meters Per Second Squared</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VerticalAcceleration.min        - Minimum value ( -40 )
         * @property {number} VerticalAcceleration.max        - Maximum value ( 40 )
         * @property {number} VerticalAcceleration.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} VerticalAcceleration.precision  - Decimals of precision reported ( 2 )
         * @property {string} VerticalAcceleration.unit       - Unit of measure ( "Meters Per Second Squared" )
         * @property {string} VerticalAcceleration.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VerticalAcceleration : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Acceleration - Vertical
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VerticalAcceleration.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VerticalAcceleration', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VerticalAcceleration.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VerticalAcceleration', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Acceleration - Vertical.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VerticalAcceleration.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VerticalAcceleration', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VerticalAcceleration.type
             */
            type: "number",
            min: -40,
            max: 40,
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Accumulated Engine Run Time, measured in Second.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>4294967295</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} AccumulatedEngineRunTime.min        - Minimum value ( 0 )
         * @property {number} AccumulatedEngineRunTime.max        - Maximum value ( 4294967295 )
         * @property {number} AccumulatedEngineRunTime.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} AccumulatedEngineRunTime.precision  - Decimals of precision reported ( 0 )
         * @property {string} AccumulatedEngineRunTime.unit       - Unit of measure ( "Second" )
         * @property {string} AccumulatedEngineRunTime.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        AccumulatedEngineRunTime : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Accumulated Engine Run Time
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AccumulatedEngineRunTime.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AccumulatedEngineRunTime', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AccumulatedEngineRunTime.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AccumulatedEngineRunTime', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Accumulated Engine Run Time.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AccumulatedEngineRunTime.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AccumulatedEngineRunTime', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} AccumulatedEngineRunTime.type
             */
            type: "number",
            min: 0,
            max: 4294967295,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Value is true if Active Noise Control Mode
         * 
         * <br/>Category: Personalization



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ActiveNoiseControlMode : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Active Noise Control Mode
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ActiveNoiseControlMode.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ActiveNoiseControlMode', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ActiveNoiseControlMode.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ActiveNoiseControlMode', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Active Noise Control Mode.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ActiveNoiseControlMode.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ActiveNoiseControlMode', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ActiveNoiseControlMode.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Adaptive Cruise Control Active
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AdaptiveCruiseControlActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Adaptive Cruise Control Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AdaptiveCruiseControlActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AdaptiveCruiseControlActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AdaptiveCruiseControlActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AdaptiveCruiseControlActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Adaptive Cruise Control Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AdaptiveCruiseControlActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AdaptiveCruiseControlActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AdaptiveCruiseControlActive.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Air Conditioner On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AirConditionerOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Air Conditioner On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirConditionerOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AirConditionerOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirConditionerOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AirConditionerOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Air Conditioner On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirConditionerOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AirConditionerOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AirConditionerOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Air Recirculation On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AirRecirculationOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Air Recirculation On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirRecirculationOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AirRecirculationOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirRecirculationOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AirRecirculationOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Air Recirculation On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirRecirculationOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AirRecirculationOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AirRecirculationOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Airbag Deployed
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AirbagDeployed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Airbag Deployed
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagDeployed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AirbagDeployed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagDeployed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AirbagDeployed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Airbag Deployed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagDeployed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AirbagDeployed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AirbagDeployed.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Airbag Status Left, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NOT_ACTIVE</td><td>1</td></tr>
         * <tr><td>states.ACTIVE</td><td>2</td></tr>
         * <tr><td>states.DEPLOYED</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property AirbagStatusLeft.states {object} Property object of possible value states
         *       @property {number} [AirbagStatusLeft.states.NOT_ACTIVE=1]
         *       @property {number} [AirbagStatusLeft.states.ACTIVE=2]
         *       @property {number} [AirbagStatusLeft.states.DEPLOYED=3]
         *

         *
         */
        AirbagStatusLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Airbag Status Left
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagStatusLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AirbagStatusLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagStatusLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AirbagStatusLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Airbag Status Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagStatusLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AirbagStatusLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} AirbagStatusLeft.type
             */
            type: "object",
            states : {
                NOT_ACTIVE: 1,
                ACTIVE: 2,
                DEPLOYED: 3
            }
        },
        /**
         * @description
         * Airbag Status Right, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NOT_ACTIVE</td><td>1</td></tr>
         * <tr><td>states.ACTIVE</td><td>2</td></tr>
         * <tr><td>states.DEPLOYED</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property AirbagStatusRight.states {object} Property object of possible value states
         *       @property {number} [AirbagStatusRight.states.NOT_ACTIVE=1]
         *       @property {number} [AirbagStatusRight.states.ACTIVE=2]
         *       @property {number} [AirbagStatusRight.states.DEPLOYED=3]
         *

         *
         */
        AirbagStatusRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Airbag Status Right
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagStatusRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AirbagStatusRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagStatusRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AirbagStatusRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Airbag Status Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AirbagStatusRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AirbagStatusRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} AirbagStatusRight.type
             */
            type: "object",
            states : {
                NOT_ACTIVE: 1,
                ACTIVE: 2,
                DEPLOYED: 3
            }
        },
        /**
         * @description
         * Alarm Status, expressed as state values
         * 
         * <br/>Category: Parking


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.DISARMED</td><td>0</td></tr>
         * <tr><td>states.PREARMED</td><td>1</td></tr>
         * <tr><td>states.ARMED</td><td>2</td></tr>
         * <tr><td>states.ALARMED</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property AlarmStatus.states {object} Property object of possible value states
         *       @property {number} [AlarmStatus.states.DISARMED=0]
         *       @property {number} [AlarmStatus.states.PREARMED=1]
         *       @property {number} [AlarmStatus.states.ARMED=2]
         *       @property {number} [AlarmStatus.states.ALARMED=3]
         *

         *
         */
        AlarmStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Alarm Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AlarmStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AlarmStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AlarmStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AlarmStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Alarm Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AlarmStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AlarmStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} AlarmStatus.type
             */
            type: "object",
            states : {
                DISARMED: 0,
                PREARMED: 1,
                ARMED: 2,
                ALARMED: 3
            }
        },
        /**
         * @description
         * Value is true if Antilock Braking System Enabled
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AntilockBrakingSystemEnabled : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Antilock Braking System Enabled
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AntilockBrakingSystemEnabled.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AntilockBrakingSystemEnabled', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AntilockBrakingSystemEnabled.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AntilockBrakingSystemEnabled', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Antilock Braking System Enabled.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AntilockBrakingSystemEnabled.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AntilockBrakingSystemEnabled', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AntilockBrakingSystemEnabled.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Antilock Braking System Engaged
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AntilockBrakingSystemEngaged : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Antilock Braking System Engaged
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AntilockBrakingSystemEngaged.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AntilockBrakingSystemEngaged', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AntilockBrakingSystemEngaged.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AntilockBrakingSystemEngaged', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Antilock Braking System Engaged.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AntilockBrakingSystemEngaged.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AntilockBrakingSystemEngaged', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AntilockBrakingSystemEngaged.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Atmospheric Pressure, measured in Kilopascal.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilopascal</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} AtmosphericPressure.min        - Minimum value ( 0 )
         * @property {number} AtmosphericPressure.max        - Maximum value ( 255 )
         * @property {number} AtmosphericPressure.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} AtmosphericPressure.precision  - Decimals of precision reported ( 0 )
         * @property {string} AtmosphericPressure.unit       - Unit of measure ( "Kilopascal" )
         * @property {string} AtmosphericPressure.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        AtmosphericPressure : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Atmospheric Pressure
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AtmosphericPressure.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AtmosphericPressure', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AtmosphericPressure.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AtmosphericPressure', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Atmospheric Pressure.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AtmosphericPressure.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AtmosphericPressure', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} AtmosphericPressure.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 1,
            precision: 0,
            unit: 'Kilopascal'
        },
        /**
         * @description
         * Value is true if Automatic Headlight Active
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        AutomaticHeadlightActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Automatic Headlight Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AutomaticHeadlightActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('AutomaticHeadlightActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AutomaticHeadlightActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('AutomaticHeadlightActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Automatic Headlight Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function AutomaticHeadlightActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('AutomaticHeadlightActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} AutomaticHeadlightActive.type
             */
            type: "boolean"
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Battery Charge Cord Connected
         * 
         * <br/>Category: Electric Vehicle



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        BatteryChargeCordConnected : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Battery Charge Cord Connected
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryChargeCordConnected.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BatteryChargeCordConnected', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryChargeCordConnected.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BatteryChargeCordConnected', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Battery Charge Cord Connected.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryChargeCordConnected.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BatteryChargeCordConnected', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} BatteryChargeCordConnected.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Battery Current Consumption, measured in Ampere.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Ampere</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} BatteryCurrentConsumption.min        - Minimum value ( 0 )
         * @property {number} BatteryCurrentConsumption.max        - Maximum value ( 255 )
         * @property {number} BatteryCurrentConsumption.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} BatteryCurrentConsumption.precision  - Decimals of precision reported ( 0 )
         * @property {string} BatteryCurrentConsumption.unit       - Unit of measure ( "Ampere" )
         * @property {string} BatteryCurrentConsumption.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BatteryCurrentConsumption : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Battery Current Consumption
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryCurrentConsumption.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BatteryCurrentConsumption', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryCurrentConsumption.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BatteryCurrentConsumption', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Battery Current Consumption.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryCurrentConsumption.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BatteryCurrentConsumption', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BatteryCurrentConsumption.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 1,
            precision: 0,
            unit: 'Ampere'
        },
        /**
         * @description
         * Battery Voltage, measured in Volt.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Volt</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} BatteryVoltage.min        - Minimum value ( 0 )
         * @property {number} BatteryVoltage.max        - Maximum value ( 65.535 )
         * @property {number} BatteryVoltage.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} BatteryVoltage.precision  - Decimals of precision reported ( 0 )
         * @property {string} BatteryVoltage.unit       - Unit of measure ( "Volt" )
         * @property {string} BatteryVoltage.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BatteryVoltage : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Battery Voltage
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryVoltage.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BatteryVoltage', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryVoltage.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BatteryVoltage', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Battery Voltage.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BatteryVoltage.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BatteryVoltage', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BatteryVoltage.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 0,
            unit: 'Volt'
        },
        /**
         * @description
         * Blower Fan Speed, expressed as state values
         * 
         * <br/>Category: Climate


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.SPEED_1</td><td>1</td></tr>
         * <tr><td>states.SPEED_2</td><td>2</td></tr>
         * <tr><td>states.SPEED_3</td><td>3</td></tr>
         * <tr><td>states.SPEED_4</td><td>4</td></tr>
         * <tr><td>states.SPEED_5</td><td>5</td></tr>
         * <tr><td>states.SPEED_6</td><td>6</td></tr>
         * <tr><td>states.SPEED_7</td><td>7</td></tr>
         * <tr><td>states.SPEED_8</td><td>8</td></tr>
         * <tr><td>states.SPEED_9</td><td>9</td></tr>
         * <tr><td>states.SPEED_10</td><td>10</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property BlowerFanSpeed.states {object} Property object of possible value states
         *       @property {number} [BlowerFanSpeed.states.OFF=0]
         *       @property {number} [BlowerFanSpeed.states.SPEED_1=1]
         *       @property {number} [BlowerFanSpeed.states.SPEED_2=2]
         *       @property {number} [BlowerFanSpeed.states.SPEED_3=3]
         *       @property {number} [BlowerFanSpeed.states.SPEED_4=4]
         *       @property {number} [BlowerFanSpeed.states.SPEED_5=5]
         *       @property {number} [BlowerFanSpeed.states.SPEED_6=6]
         *       @property {number} [BlowerFanSpeed.states.SPEED_7=7]
         *       @property {number} [BlowerFanSpeed.states.SPEED_8=8]
         *       @property {number} [BlowerFanSpeed.states.SPEED_9=9]
         *       @property {number} [BlowerFanSpeed.states.SPEED_10=10]
         *

         *
         */
        BlowerFanSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Blower Fan Speed
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BlowerFanSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BlowerFanSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BlowerFanSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BlowerFanSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Blower Fan Speed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BlowerFanSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BlowerFanSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} BlowerFanSpeed.type
             */
            type: "object",
            states : {
                OFF: 0,
                SPEED_1: 1,
                SPEED_2: 2,
                SPEED_3: 3,
                SPEED_4: 4,
                SPEED_5: 5,
                SPEED_6: 6,
                SPEED_7: 7,
                SPEED_8: 8,
                SPEED_9: 9,
                SPEED_10: 10
            }
        },
        /**
         * @description
         * Brake Fluid Hydraulic Pressure, measured in Megapascal.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-5</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>19.969216</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.032768</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>6</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Megapascal</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} BrakeFluidHydraulicPressure.min        - Minimum value ( -5 )
         * @property {number} BrakeFluidHydraulicPressure.max        - Maximum value ( 19.969216 )
         * @property {number} BrakeFluidHydraulicPressure.resolution - Minimum amount of change in unit measure ( 0.032768 )
         * @property {number} BrakeFluidHydraulicPressure.precision  - Decimals of precision reported ( 6 )
         * @property {string} BrakeFluidHydraulicPressure.unit       - Unit of measure ( "Megapascal" )
         * @property {string} BrakeFluidHydraulicPressure.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BrakeFluidHydraulicPressure : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Fluid Hydraulic Pressure
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeFluidHydraulicPressure.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakeFluidHydraulicPressure', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeFluidHydraulicPressure.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakeFluidHydraulicPressure', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Fluid Hydraulic Pressure.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeFluidHydraulicPressure.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakeFluidHydraulicPressure', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BrakeFluidHydraulicPressure.type
             */
            type: "number",
            min: -5,
            max: 19.969216,
            resolution: 0.032768,
            precision: 6,
            unit: 'Megapascal'
        },
        /**
         * @description
         * Brake Fluid Level, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} BrakeFluidLevel.min        - Minimum value ( 0 )
         * @property {number} BrakeFluidLevel.max        - Maximum value ( 100 )
         * @property {number} BrakeFluidLevel.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} BrakeFluidLevel.precision  - Decimals of precision reported ( 0 )
         * @property {string} BrakeFluidLevel.unit       - Unit of measure ( "Percentage" )
         * @property {string} BrakeFluidLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        BrakeFluidLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Fluid Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeFluidLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakeFluidLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeFluidLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakeFluidLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Fluid Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeFluidLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakeFluidLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} BrakeFluidLevel.type
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Brake Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        BrakeLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakeLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakeLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brake Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakeLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakeLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} BrakeLightOn.type
             */
            type: "boolean"
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        BrakePedalDepressed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brake Pedal Depressed
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Brakes Worn
         * 
         * <br/>Category: Maintenance



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        BrakesWorn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Brakes Worn
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakesWorn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('BrakesWorn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakesWorn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('BrakesWorn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Brakes Worn.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function BrakesWorn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('BrakesWorn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} BrakesWorn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Center Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        CenterLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Center Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CenterLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('CenterLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CenterLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('CenterLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Center Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CenterLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('CenterLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} CenterLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Change Engine Oil
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ChangeEngineOil : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Change Engine Oil
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChangeEngineOil.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ChangeEngineOil', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChangeEngineOil.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ChangeEngineOil', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Change Engine Oil.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChangeEngineOil.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ChangeEngineOil', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ChangeEngineOil.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Charging Status On
         * 
         * <br/>Category: Electric Vehicle



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ChargingStatusOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Charging Status On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChargingStatusOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ChargingStatusOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChargingStatusOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ChargingStatusOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Charging Status On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChargingStatusOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ChargingStatusOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ChargingStatusOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Child Safety Lock On
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ChildSafetyLockOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Child Safety Lock On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChildSafetyLockOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ChildSafetyLockOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChildSafetyLockOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ChildSafetyLockOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Child Safety Lock On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChildSafetyLockOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ChildSafetyLockOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ChildSafetyLockOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Chime On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ChimeOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Chime On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChimeOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ChimeOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChimeOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ChimeOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Chime On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ChimeOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ChimeOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ChimeOn.type
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Convertible Roof On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ConvertibleRoofOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Convertible Roof On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ConvertibleRoofOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ConvertibleRoofOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ConvertibleRoofOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ConvertibleRoofOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Convertible Roof On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ConvertibleRoofOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ConvertibleRoofOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ConvertibleRoofOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Cruise Control Active
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        CruiseControlActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Cruise Control Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CruiseControlActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('CruiseControlActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CruiseControlActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('CruiseControlActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Cruise Control Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CruiseControlActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('CruiseControlActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} CruiseControlActive.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Cruise Control Speed Setting, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} CruiseControlSettingSpeed.min        - Minimum value ( 0 )
         * @property {number} CruiseControlSettingSpeed.max        - Maximum value ( 255 )
         * @property {number} CruiseControlSettingSpeed.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} CruiseControlSettingSpeed.precision  - Decimals of precision reported ( 0 )
         * @property {string} CruiseControlSettingSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} CruiseControlSettingSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        CruiseControlSettingSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Cruise Control Speed Setting
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CruiseControlSettingSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('CruiseControlSettingSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CruiseControlSettingSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('CruiseControlSettingSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Cruise Control Speed Setting.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function CruiseControlSettingSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('CruiseControlSettingSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} CruiseControlSettingSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 1,
            precision: 0,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Dashboard Illumination, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} DashboardIllumination.min        - Minimum value ( 0 )
         * @property {number} DashboardIllumination.max        - Maximum value ( 100 )
         * @property {number} DashboardIllumination.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} DashboardIllumination.precision  - Decimals of precision reported ( 0 )
         * @property {string} DashboardIllumination.unit       - Unit of measure ( "Percentage" )
         * @property {string} DashboardIllumination.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        DashboardIllumination : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Dashboard Illumination
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DashboardIllumination.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DashboardIllumination', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DashboardIllumination.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DashboardIllumination', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Dashboard Illumination.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DashboardIllumination.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DashboardIllumination', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} DashboardIllumination.type
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
         * Value is true if Defrost Rear Windshield On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DefrostRearWindshieldOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Defrost Rear Windshield On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DefrostRearWindshieldOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DefrostRearWindshieldOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DefrostRearWindshieldOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DefrostRearWindshieldOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Defrost Rear Windshield On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DefrostRearWindshieldOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DefrostRearWindshieldOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DefrostRearWindshieldOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Defrost Side Mirrors On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DefrostSideMirrorsOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Defrost Side Mirrors On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DefrostSideMirrorsOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DefrostSideMirrorsOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DefrostSideMirrorsOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DefrostSideMirrorsOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Defrost Side Mirrors On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DefrostSideMirrorsOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DefrostSideMirrorsOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DefrostSideMirrorsOn.type
             */
            type: "boolean"
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Distance Travelled Since Codes Cleared, measured in Meter.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65535000</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} DistanceTravelledSinceCodesCleared.min        - Minimum value ( 0 )
         * @property {number} DistanceTravelledSinceCodesCleared.max        - Maximum value ( 65535000 )
         * @property {number} DistanceTravelledSinceCodesCleared.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} DistanceTravelledSinceCodesCleared.precision  - Decimals of precision reported ( 0 )
         * @property {string} DistanceTravelledSinceCodesCleared.unit       - Unit of measure ( "Meter" )
         * @property {string} DistanceTravelledSinceCodesCleared.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        DistanceTravelledSinceCodesCleared : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Distance Travelled Since Codes Cleared
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DistanceTravelledSinceCodesCleared.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DistanceTravelledSinceCodesCleared', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DistanceTravelledSinceCodesCleared.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DistanceTravelledSinceCodesCleared', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Distance Travelled Since Codes Cleared.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DistanceTravelledSinceCodesCleared.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DistanceTravelledSinceCodesCleared', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} DistanceTravelledSinceCodesCleared.type
             */
            type: "number",
            min: 0,
            max: 65535000,
            resolution: 1,
            precision: 0,
            unit: 'Meter'
        },
        /**
         * @description
         * Distance Travelled With Malfunction Indicator Light On, measured in Meter.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65535000</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} DistanceTravelledWithMilOn.min        - Minimum value ( 0 )
         * @property {number} DistanceTravelledWithMilOn.max        - Maximum value ( 65535000 )
         * @property {number} DistanceTravelledWithMilOn.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} DistanceTravelledWithMilOn.precision  - Decimals of precision reported ( 0 )
         * @property {string} DistanceTravelledWithMilOn.unit       - Unit of measure ( "Meter" )
         * @property {string} DistanceTravelledWithMilOn.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        DistanceTravelledWithMilOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Distance Travelled With Malfunction Indicator Light On
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DistanceTravelledWithMilOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DistanceTravelledWithMilOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DistanceTravelledWithMilOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DistanceTravelledWithMilOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Distance Travelled With Malfunction Indicator Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DistanceTravelledWithMilOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DistanceTravelledWithMilOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} DistanceTravelledWithMilOn.type
             */
            type: "number",
            min: 0,
            max: 65535000,
            resolution: 1,
            precision: 0,
            unit: 'Meter'
        },
        /**
         * @description
         * Value is true if Door Locked Driver
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DoorLockedDriver : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Locked Driver
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedDriver.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorLockedDriver', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedDriver.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorLockedDriver', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Locked Driver.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedDriver.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorLockedDriver', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DoorLockedDriver.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Door Locked Passenger
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DoorLockedPassenger : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Locked Passenger
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedPassenger.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorLockedPassenger', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedPassenger.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorLockedPassenger', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Locked Passenger.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedPassenger.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorLockedPassenger', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DoorLockedPassenger.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Door Locked Rear Left
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DoorLockedRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Locked Rear Left
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorLockedRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorLockedRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Locked Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorLockedRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DoorLockedRearLeft.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Door Locked Rear Right
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DoorLockedRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Locked Rear Right
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorLockedRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorLockedRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Locked Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorLockedRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorLockedRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DoorLockedRearRight.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Door Open Status Driver, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusDriver.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusDriver.states.OPEN=1]
         *       @property {number} [DoorOpenStatusDriver.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusDriver.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusDriver : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Driver
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusDriver.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusDriver', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusDriver.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusDriver', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Driver.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusDriver.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusDriver', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusDriver.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Door Open Status Fuel Filler Cap, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusFuelFillerCap.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusFuelFillerCap.states.OPEN=1]
         *       @property {number} [DoorOpenStatusFuelFillerCap.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusFuelFillerCap.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusFuelFillerCap : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Fuel Filler Cap
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusFuelFillerCap.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusFuelFillerCap', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusFuelFillerCap.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusFuelFillerCap', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Fuel Filler Cap.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusFuelFillerCap.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusFuelFillerCap', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusFuelFillerCap.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Door Open Status Hood, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusHood.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusHood.states.OPEN=1]
         *       @property {number} [DoorOpenStatusHood.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusHood.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusHood : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Hood
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusHood.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusHood', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusHood.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusHood', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Hood.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusHood.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusHood', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusHood.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Door Open Status Passenger, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusPassenger.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusPassenger.states.OPEN=1]
         *       @property {number} [DoorOpenStatusPassenger.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusPassenger.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusPassenger : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Passenger
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusPassenger.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusPassenger', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusPassenger.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusPassenger', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Passenger.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusPassenger.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusPassenger', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusPassenger.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Door Open Status Rear Left, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusRearLeft.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusRearLeft.states.OPEN=1]
         *       @property {number} [DoorOpenStatusRearLeft.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusRearLeft.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Rear Left
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusRearLeft.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Door Open Status Rear Right, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusRearRight.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusRearRight.states.OPEN=1]
         *       @property {number} [DoorOpenStatusRearRight.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusRearRight.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Rear Right
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusRearRight.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Door Open Status Trunk, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DoorOpenStatusTrunk.states {object} Property object of possible value states
         *       @property {number} [DoorOpenStatusTrunk.states.OPEN=1]
         *       @property {number} [DoorOpenStatusTrunk.states.CLOSED=2]
         *       @property {number} [DoorOpenStatusTrunk.states.AJAR=3]
         *

         *
         */
        DoorOpenStatusTrunk : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Door Open Status Trunk
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusTrunk.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DoorOpenStatusTrunk', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusTrunk.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DoorOpenStatusTrunk', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Door Open Status Trunk.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DoorOpenStatusTrunk.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DoorOpenStatusTrunk', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DoorOpenStatusTrunk.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Value is true if Driver Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DriverLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Driver Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DriverLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DriverLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DriverLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DriverLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Driver Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DriverLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DriverLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DriverLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Driving Mode, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.COMFORT</td><td>1</td></tr>
         * <tr><td>states.AUTO</td><td>2</td></tr>
         * <tr><td>states.SPORT</td><td>3</td></tr>
         * <tr><td>states.ECO</td><td>4</td></tr>
         * <tr><td>states.MANUAL</td><td>5</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property DrivingMode.states {object} Property object of possible value states
         *       @property {number} [DrivingMode.states.COMFORT=1]
         *       @property {number} [DrivingMode.states.AUTO=2]
         *       @property {number} [DrivingMode.states.SPORT=3]
         *       @property {number} [DrivingMode.states.ECO=4]
         *       @property {number} [DrivingMode.states.MANUAL=5]
         *

         *
         */
        DrivingMode : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Driving Mode
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DrivingMode.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DrivingMode', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DrivingMode.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DrivingMode', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Driving Mode.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DrivingMode.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DrivingMode', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} DrivingMode.type
             */
            type: "object",
            states : {
                COMFORT: 1,
                AUTO: 2,
                SPORT: 3,
                ECO: 4,
                MANUAL: 5
            }
        },
        /**
         * @description
         * Value is true if Dynamic High Beam Active
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        DynamicHighBeamActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Dynamic High Beam Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DynamicHighBeamActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DynamicHighBeamActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DynamicHighBeamActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DynamicHighBeamActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Dynamic High Beam Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DynamicHighBeamActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DynamicHighBeamActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} DynamicHighBeamActive.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Electronic Stability Control Enabled
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ElectronicStabilityControlEnabled : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Electronic Stability Control Enabled
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ElectronicStabilityControlEnabled.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ElectronicStabilityControlEnabled', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ElectronicStabilityControlEnabled.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ElectronicStabilityControlEnabled', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Electronic Stability Control Enabled.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ElectronicStabilityControlEnabled.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ElectronicStabilityControlEnabled', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ElectronicStabilityControlEnabled.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Electronic Stability Control Engaged
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ElectronicStabilityControlEngaged : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Electronic Stability Control Engaged
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ElectronicStabilityControlEngaged.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ElectronicStabilityControlEngaged', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ElectronicStabilityControlEngaged.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ElectronicStabilityControlEngaged', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Electronic Stability Control Engaged.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ElectronicStabilityControlEngaged.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ElectronicStabilityControlEngaged', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ElectronicStabilityControlEngaged.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Engine Coolant Level, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} EngineCoolantLevel.min        - Minimum value ( 0 )
         * @property {number} EngineCoolantLevel.max        - Maximum value ( 100 )
         * @property {number} EngineCoolantLevel.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} EngineCoolantLevel.precision  - Decimals of precision reported ( 0 )
         * @property {string} EngineCoolantLevel.unit       - Unit of measure ( "Percentage" )
         * @property {string} EngineCoolantLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EngineCoolantLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Coolant Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineCoolantLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineCoolantLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineCoolantLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineCoolantLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Coolant Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineCoolantLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineCoolantLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EngineCoolantLevel.type
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
         * Value is true if Engine Coolant Level Low
         * 
         * <br/>Category: Maintenance



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        EngineCoolantLevelLow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Coolant Level Low
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineCoolantLevelLow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineCoolantLevelLow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineCoolantLevelLow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineCoolantLevelLow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Coolant Level Low.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineCoolantLevelLow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineCoolantLevelLow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} EngineCoolantLevelLow.type
             */
            type: "boolean"
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Engine Oil Pressure, measured in Kilopascal.
         * 
         * <br/>Category: Running Status

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} EngineOilPressure.min        - Minimum value ( 0 )
         * @property {number} EngineOilPressure.max        - Maximum value ( 765 )
         * @property {number} EngineOilPressure.resolution - Minimum amount of change in unit measure ( 3 )
         * @property {number} EngineOilPressure.precision  - Decimals of precision reported ( 0 )
         * @property {string} EngineOilPressure.unit       - Unit of measure ( "Kilopascal" )
         * @property {string} EngineOilPressure.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EngineOilPressure : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Oil Pressure
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineOilPressure.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineOilPressure', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineOilPressure.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineOilPressure', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Oil Pressure.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineOilPressure.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineOilPressure', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EngineOilPressure.type
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
         * Engine Oil Temperature, measured in Degrees Celsius.
         * 
         * <br/>Category: Running Status

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} EngineOilTemp.min        - Minimum value ( -40 )
         * @property {number} EngineOilTemp.max        - Maximum value ( 215 )
         * @property {number} EngineOilTemp.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} EngineOilTemp.precision  - Decimals of precision reported ( 0 )
         * @property {string} EngineOilTemp.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} EngineOilTemp.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EngineOilTemp : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Engine Oil Temperature
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineOilTemp.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EngineOilTemp', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineOilTemp.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EngineOilTemp', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Engine Oil Temperature.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EngineOilTemp.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EngineOilTemp', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EngineOilTemp.type
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Estimated Range Remaining, measured in Kilometer.
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
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometer</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} EstimatedRangeRemaining.min        - Minimum value ( 0 )
         * @property {number} EstimatedRangeRemaining.max        - Maximum value ( 655.35 )
         * @property {number} EstimatedRangeRemaining.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} EstimatedRangeRemaining.precision  - Decimals of precision reported ( 2 )
         * @property {string} EstimatedRangeRemaining.unit       - Unit of measure ( "Kilometer" )
         * @property {string} EstimatedRangeRemaining.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        EstimatedRangeRemaining : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Estimated Range Remaining
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EstimatedRangeRemaining.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('EstimatedRangeRemaining', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EstimatedRangeRemaining.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('EstimatedRangeRemaining', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Estimated Range Remaining.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function EstimatedRangeRemaining.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('EstimatedRangeRemaining', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} EstimatedRangeRemaining.type
             */
            type: "number",
            min: 0,
            max: 655.35,
            resolution: 0.01,
            precision: 2,
            unit: 'Kilometer'
        },
        /**
         * @description
         * Exterior Brightness, measured in Lux.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>167772.15</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Lux</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} ExteriorBrightness.min        - Minimum value ( 0 )
         * @property {number} ExteriorBrightness.max        - Maximum value ( 167772.15 )
         * @property {number} ExteriorBrightness.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} ExteriorBrightness.precision  - Decimals of precision reported ( 0 )
         * @property {string} ExteriorBrightness.unit       - Unit of measure ( "Lux" )
         * @property {string} ExteriorBrightness.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        ExteriorBrightness : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Exterior Brightness
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ExteriorBrightness.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ExteriorBrightness', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ExteriorBrightness.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ExteriorBrightness', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Exterior Brightness.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ExteriorBrightness.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ExteriorBrightness', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} ExteriorBrightness.type
             */
            type: "number",
            min: 0,
            max: 167772.15,
            resolution: 0.01,
            precision: 0,
            unit: 'Lux'
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Front Collision Detection Active
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        FrontCollisionDetectionActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Collision Detection Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontCollisionDetectionActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontCollisionDetectionActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Collision Detection Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontCollisionDetectionActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} FrontCollisionDetectionActive.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Front Collision Detection Distance, measured in Meter.
         * 
         * <br/>Category: Driver Safety

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>25.5</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} FrontCollisionDetectionDistance.min        - Minimum value ( 0 )
         * @property {number} FrontCollisionDetectionDistance.max        - Maximum value ( 25.5 )
         * @property {number} FrontCollisionDetectionDistance.resolution - Minimum amount of change in unit measure ( 0.1 )
         * @property {number} FrontCollisionDetectionDistance.precision  - Decimals of precision reported ( 1 )
         * @property {string} FrontCollisionDetectionDistance.unit       - Unit of measure ( "Meter" )
         * @property {string} FrontCollisionDetectionDistance.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FrontCollisionDetectionDistance : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Collision Detection Distance
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionDistance.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontCollisionDetectionDistance', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionDistance.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontCollisionDetectionDistance', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Collision Detection Distance.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionDistance.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontCollisionDetectionDistance', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FrontCollisionDetectionDistance.type
             */
            type: "number",
            min: 0,
            max: 25.5,
            resolution: 0.1,
            precision: 1,
            unit: 'Meter'
        },
        /**
         * @description
         * Front Collision Detection Time, measured in Second.
         * 
         * <br/>Category: Driver Safety

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} FrontCollisionDetectionTime.min        - Minimum value ( 0 )
         * @property {number} FrontCollisionDetectionTime.max        - Maximum value ( 65.535 )
         * @property {number} FrontCollisionDetectionTime.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} FrontCollisionDetectionTime.precision  - Decimals of precision reported ( 3 )
         * @property {string} FrontCollisionDetectionTime.unit       - Unit of measure ( "Second" )
         * @property {string} FrontCollisionDetectionTime.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FrontCollisionDetectionTime : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Collision Detection Time
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionTime.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontCollisionDetectionTime', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionTime.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontCollisionDetectionTime', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Collision Detection Time.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontCollisionDetectionTime.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontCollisionDetectionTime', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FrontCollisionDetectionTime.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 3,
            unit: 'Second'
        },
        /**
         * @description
         * Value is true if Front Defroster On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        FrontDefroster : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Defroster On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontDefroster.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontDefroster', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontDefroster.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontDefroster', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Defroster On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontDefroster.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontDefroster', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} FrontDefroster.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Front Fog Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        FrontFogLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Fog Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontFogLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontFogLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontFogLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontFogLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Fog Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontFogLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontFogLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} FrontFogLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Front Wheel Radius, measured in Meter.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} FrontWheelRadius.min        - Minimum value ( 0 )
         * @property {number} FrontWheelRadius.max        - Maximum value ( 65.535 )
         * @property {number} FrontWheelRadius.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} FrontWheelRadius.precision  - Decimals of precision reported ( 3 )
         * @property {string} FrontWheelRadius.unit       - Unit of measure ( "Meter" )
         * @property {string} FrontWheelRadius.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        FrontWheelRadius : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Front Wheel Radius
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontWheelRadius.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FrontWheelRadius', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontWheelRadius.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FrontWheelRadius', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Front Wheel Radius.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FrontWheelRadius.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FrontWheelRadius', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} FrontWheelRadius.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 3,
            unit: 'Meter'
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Fuel Cap Locked
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        FuelCapLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Fuel Cap Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FuelCapLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FuelCapLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FuelCapLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FuelCapLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Fuel Cap Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FuelCapLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FuelCapLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} FuelCapLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Fuel Configuration, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NOT_AVAILABLE</td><td>0</td></tr>
         * <tr><td>states.GASOLINE</td><td>1</td></tr>
         * <tr><td>states.METHANOL</td><td>2</td></tr>
         * <tr><td>states.ETHANOL</td><td>3</td></tr>
         * <tr><td>states.DIESEL</td><td>4</td></tr>
         * <tr><td>states.LIQUEFIED_PETROLEUM_GAS</td><td>5</td></tr>
         * <tr><td>states.COMPRESSED_NATURAL_GAS</td><td>6</td></tr>
         * <tr><td>states.PROPANE</td><td>7</td></tr>
         * <tr><td>states.BATTERY_ELECTRIC</td><td>8</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property FuelConfiguration.states {object} Property object of possible value states
         *       @property {number} [FuelConfiguration.states.NOT_AVAILABLE=0]
         *       @property {number} [FuelConfiguration.states.GASOLINE=1]
         *       @property {number} [FuelConfiguration.states.METHANOL=2]
         *       @property {number} [FuelConfiguration.states.ETHANOL=3]
         *       @property {number} [FuelConfiguration.states.DIESEL=4]
         *       @property {number} [FuelConfiguration.states.LIQUEFIED_PETROLEUM_GAS=5]
         *       @property {number} [FuelConfiguration.states.COMPRESSED_NATURAL_GAS=6]
         *       @property {number} [FuelConfiguration.states.PROPANE=7]
         *       @property {number} [FuelConfiguration.states.BATTERY_ELECTRIC=8]
         *

         *
         */
        FuelConfiguration : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Fuel Configuration
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FuelConfiguration.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('FuelConfiguration', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FuelConfiguration.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('FuelConfiguration', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Fuel Configuration.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function FuelConfiguration.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('FuelConfiguration', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} FuelConfiguration.type
             */
            type: "object",
            states : {
                NOT_AVAILABLE: 0,
                GASOLINE: 1,
                METHANOL: 2,
                ETHANOL: 3,
                DIESEL: 4,
                LIQUEFIED_PETROLEUM_GAS: 5,
                COMPRESSED_NATURAL_GAS: 6,
                PROPANE: 7,
                BATTERY_ELECTRIC: 8
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Generated Vehicle Sound Mode, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NORMAL</td><td>1</td></tr>
         * <tr><td>states.QUIET</td><td>2</td></tr>
         * <tr><td>states.SPORT</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property GeneratedVehicleSoundMode.states {object} Property object of possible value states
         *       @property {number} [GeneratedVehicleSoundMode.states.NORMAL=1]
         *       @property {number} [GeneratedVehicleSoundMode.states.QUIET=2]
         *       @property {number} [GeneratedVehicleSoundMode.states.SPORT=3]
         *

         *
         */
        GeneratedVehicleSoundMode : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Generated Vehicle Sound Mode
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function GeneratedVehicleSoundMode.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('GeneratedVehicleSoundMode', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function GeneratedVehicleSoundMode.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('GeneratedVehicleSoundMode', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Generated Vehicle Sound Mode.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function GeneratedVehicleSoundMode.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('GeneratedVehicleSoundMode', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} GeneratedVehicleSoundMode.type
             */
            type: "object",
            states : {
                NORMAL: 1,
                QUIET: 2,
                SPORT: 3
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Hazard Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        HazardLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Hazard Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HazardLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HazardLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HazardLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HazardLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Hazard Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HazardLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HazardLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} HazardLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Headlight On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        HeadlightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Headlight On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HeadlightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HeadlightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HeadlightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HeadlightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Headlight On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HeadlightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HeadlightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} HeadlightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Headlight Status, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.DAYTIME_RUNNING_LIGHTS_ON</td><td>1</td></tr>
         * <tr><td>states.TNS_ON</td><td>2</td></tr>
         * <tr><td>states.HEADLIGHT_LOW</td><td>3</td></tr>
         * <tr><td>states.HEADLIGHT_HIGH</td><td>4</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property LightStatus.states {object} Property object of possible value states
         *       @property {number} [LightStatus.states.OFF=0]
         *       @property {number} [LightStatus.states.DAYTIME_RUNNING_LIGHTS_ON=1]
         *       @property {number} [LightStatus.states.TNS_ON=2]
         *       @property {number} [LightStatus.states.HEADLIGHT_LOW=3]
         *       @property {number} [LightStatus.states.HEADLIGHT_HIGH=4]
         *

         *
         */
        LightStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Headlight Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LightStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LightStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LightStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LightStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Headlight Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LightStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LightStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} LightStatus.type
             */
            type: "object",
            states : {
                OFF: 0,
                DAYTIME_RUNNING_LIGHTS_ON: 1,
                TNS_ON: 2,
                HEADLIGHT_LOW: 3,
                HEADLIGHT_HIGH: 4
            }
        },
        /**
         * @description
         * Value is true if Heater On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        HeaterOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Heater On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HeaterOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HeaterOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HeaterOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HeaterOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Heater On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HeaterOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HeaterOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} HeaterOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Highbeam On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        HighbeamOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Highbeam On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HighbeamOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HighbeamOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HighbeamOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HighbeamOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Highbeam On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HighbeamOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HighbeamOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} HighbeamOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Hood Locked
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        HoodLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Hood Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HoodLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HoodLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HoodLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HoodLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Hood Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HoodLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HoodLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} HoodLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Horn On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        HornOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Horn On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HornOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HornOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HornOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HornOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Horn On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HornOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HornOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} HornOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * HVAC Fan Direction, expressed as state values
         * 
         * <br/>Category: Climate


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.FRONT_PANEL</td><td>1</td></tr>
         * <tr><td>states.FLOOR_DUCT</td><td>2</td></tr>
         * <tr><td>states.FRONT_AND_FLOOR</td><td>3</td></tr>
         * <tr><td>states.DEFROSTER_AND_FLOOR</td><td>4</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property HVACFanDirection.states {object} Property object of possible value states
         *       @property {number} [HVACFanDirection.states.FRONT_PANEL=1]
         *       @property {number} [HVACFanDirection.states.FLOOR_DUCT=2]
         *       @property {number} [HVACFanDirection.states.FRONT_AND_FLOOR=3]
         *       @property {number} [HVACFanDirection.states.DEFROSTER_AND_FLOOR=4]
         *

         *
         */
        HVACFanDirection : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for HVAC Fan Direction
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HVACFanDirection.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HVACFanDirection', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HVACFanDirection.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HVACFanDirection', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for HVAC Fan Direction.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HVACFanDirection.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HVACFanDirection', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} HVACFanDirection.type
             */
            type: "object",
            states : {
                FRONT_PANEL: 1,
                FLOOR_DUCT: 2,
                FRONT_AND_FLOOR: 3,
                DEFROSTER_AND_FLOOR: 4
            }
        },
        /**
         * @description
         * HVAC Fan Target Temperature, measured in Degrees Celsius.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>30</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Degrees Celsius</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} HVACFanTargetTemp.min        - Minimum value ( 0 )
         * @property {number} HVACFanTargetTemp.max        - Maximum value ( 30 )
         * @property {number} HVACFanTargetTemp.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} HVACFanTargetTemp.precision  - Decimals of precision reported ( 0 )
         * @property {string} HVACFanTargetTemp.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} HVACFanTargetTemp.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        HVACFanTargetTemp : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for HVAC Fan Target Temperature
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HVACFanTargetTemp.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HVACFanTargetTemp', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HVACFanTargetTemp.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HVACFanTargetTemp', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for HVAC Fan Target Temperature.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HVACFanTargetTemp.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HVACFanTargetTemp', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} HVACFanTargetTemp.type
             */
            type: "number",
            min: 0,
            max: 30,
            resolution: 1,
            precision: 0,
            unit: 'Degrees Celsius'
        },
        /**
         * @description
         * Hybrid Power Status, expressed as state values
         * 
         * <br/>Category: Electric Vehicle


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.IDLE</td><td>1</td></tr>
         * <tr><td>states.BATTERY_MODE</td><td>2</td></tr>
         * <tr><td>states.ENGINE_MODE</td><td>3</td></tr>
         * <tr><td>states.HYBRID_MODE</td><td>4</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property HybridPowerStatus.states {object} Property object of possible value states
         *       @property {number} [HybridPowerStatus.states.IDLE=1]
         *       @property {number} [HybridPowerStatus.states.BATTERY_MODE=2]
         *       @property {number} [HybridPowerStatus.states.ENGINE_MODE=3]
         *       @property {number} [HybridPowerStatus.states.HYBRID_MODE=4]
         *

         *
         */
        HybridPowerStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Hybrid Power Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HybridPowerStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HybridPowerStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HybridPowerStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HybridPowerStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Hybrid Power Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HybridPowerStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HybridPowerStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} HybridPowerStatus.type
             */
            type: "object",
            states : {
                IDLE: 1,
                BATTERY_MODE: 2,
                ENGINE_MODE: 3,
                HYBRID_MODE: 4
            }
        },
        /**
         * @description
         * Hybrid Type, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NONE</td><td>1</td></tr>
         * <tr><td>states.MILD</td><td>2</td></tr>
         * <tr><td>states.FULL</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property HybridType.states {object} Property object of possible value states
         *       @property {number} [HybridType.states.NONE=1]
         *       @property {number} [HybridType.states.MILD=2]
         *       @property {number} [HybridType.states.FULL=3]
         *

         *
         */
        HybridType : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Hybrid Type
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HybridType.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('HybridType', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HybridType.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('HybridType', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Hybrid Type.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function HybridType.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('HybridType', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} HybridType.type
             */
            type: "object",
            states : {
                NONE: 1,
                MILD: 2,
                FULL: 3
            }
        },
        /**
         * @description
         * Ignition Off Time (IgOff), measured in Second.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>429496730</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} IgnitionOffTime.min        - Minimum value ( 0 )
         * @property {number} IgnitionOffTime.max        - Maximum value ( 429496730 )
         * @property {number} IgnitionOffTime.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} IgnitionOffTime.precision  - Decimals of precision reported ( 0 )
         * @property {string} IgnitionOffTime.unit       - Unit of measure ( "Second" )
         * @property {string} IgnitionOffTime.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        IgnitionOffTime : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Ignition Off Time (IgOff)
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function IgnitionOffTime.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('IgnitionOffTime', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function IgnitionOffTime.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('IgnitionOffTime', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Ignition Off Time (IgOff).
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function IgnitionOffTime.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('IgnitionOffTime', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} IgnitionOffTime.type
             */
            type: "number",
            min: 0,
            max: 429496730,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Ignition On Time (IgOn), measured in Second.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>429496730</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} IgnitionOnTime.min        - Minimum value ( 0 )
         * @property {number} IgnitionOnTime.max        - Maximum value ( 429496730 )
         * @property {number} IgnitionOnTime.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} IgnitionOnTime.precision  - Decimals of precision reported ( 0 )
         * @property {string} IgnitionOnTime.unit       - Unit of measure ( "Second" )
         * @property {string} IgnitionOnTime.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        IgnitionOnTime : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Ignition On Time (IgOn)
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function IgnitionOnTime.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('IgnitionOnTime', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function IgnitionOnTime.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('IgnitionOnTime', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Ignition On Time (IgOn).
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function IgnitionOnTime.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('IgnitionOnTime', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} IgnitionOnTime.type
             */
            type: "number",
            min: 0,
            max: 429496730,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Inside Mirror Automatic Tinting Status, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.INACTIVE</td><td>1</td></tr>
         * <tr><td>states.ACTIVE</td><td>2</td></tr>
         * <tr><td>states.ERROR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property InsideMirrorAutomaticTintingStatus.states {object} Property object of possible value states
         *       @property {number} [InsideMirrorAutomaticTintingStatus.states.INACTIVE=1]
         *       @property {number} [InsideMirrorAutomaticTintingStatus.states.ACTIVE=2]
         *       @property {number} [InsideMirrorAutomaticTintingStatus.states.ERROR=3]
         *

         *
         */
        InsideMirrorAutomaticTintingStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Inside Mirror Automatic Tinting Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function InsideMirrorAutomaticTintingStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('InsideMirrorAutomaticTintingStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function InsideMirrorAutomaticTintingStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('InsideMirrorAutomaticTintingStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Inside Mirror Automatic Tinting Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function InsideMirrorAutomaticTintingStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('InsideMirrorAutomaticTintingStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} InsideMirrorAutomaticTintingStatus.type
             */
            type: "object",
            states : {
                INACTIVE: 1,
                ACTIVE: 2,
                ERROR: 3
            }
        },
        /**
         * @description
         * Interior Temperature, measured in Degrees Celsius.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} InteriorTemperature.min        - Minimum value ( -40 )
         * @property {number} InteriorTemperature.max        - Maximum value ( 215 )
         * @property {number} InteriorTemperature.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} InteriorTemperature.precision  - Decimals of precision reported ( 0 )
         * @property {string} InteriorTemperature.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} InteriorTemperature.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        InteriorTemperature : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Interior Temperature
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function InteriorTemperature.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('InteriorTemperature', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function InteriorTemperature.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('InteriorTemperature', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Interior Temperature.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function InteriorTemperature.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('InteriorTemperature', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} InteriorTemperature.type
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
         * Value is true if Lane Departed
         * 
         * <br/>Category: Vision System



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        LaneDeparted : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Lane Departed
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LaneDeparted.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LaneDeparted', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LaneDeparted.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LaneDeparted', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Lane Departed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LaneDeparted.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LaneDeparted', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} LaneDeparted.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Lane Departure Detection Active
         * 
         * <br/>Category: Vision System



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        LaneDepartureDetectionActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Lane Departure Detection Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LaneDepartureDetectionActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LaneDepartureDetectionActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LaneDepartureDetectionActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LaneDepartureDetectionActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Lane Departure Detection Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LaneDepartureDetectionActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LaneDepartureDetectionActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} LaneDepartureDetectionActive.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Language, expressed as a string
         * 
         * <br/>Category: Personalization



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        Language : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Language
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function Language.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('Language', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function Language.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('Language', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Language.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function Language.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('Language', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "string" )
             * @property {string} Language.type
             */
            type: "string"
        },
        /**
         * @description
         * Value is true if Left Turn Signal On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        LeftTurnSignalOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Left Turn Signal On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LeftTurnSignalOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('LeftTurnSignalOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LeftTurnSignalOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('LeftTurnSignalOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Left Turn Signal On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function LeftTurnSignalOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('LeftTurnSignalOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} LeftTurnSignalOn.type
             */
            type: "boolean"
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Malfunction Indicator Lamp On
         * 
         * <br/>Category: Maintenance



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        MalfunctionIndicatorLampOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Malfunction Indicator Lamp On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MalfunctionIndicatorLampOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MalfunctionIndicatorLampOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MalfunctionIndicatorLampOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MalfunctionIndicatorLampOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Malfunction Indicator Lamp On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MalfunctionIndicatorLampOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MalfunctionIndicatorLampOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} MalfunctionIndicatorLampOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Max Wheel Speed Exceeded
         * 
         * <br/>Category: Maintenance



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        MaxWheelSpeedExceeded : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Max Wheel Speed Exceeded
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MaxWheelSpeedExceeded.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MaxWheelSpeedExceeded', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MaxWheelSpeedExceeded.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MaxWheelSpeedExceeded', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Max Wheel Speed Exceeded.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MaxWheelSpeedExceeded.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MaxWheelSpeedExceeded', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} MaxWheelSpeedExceeded.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Measurement System, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.METRIC</td><td>1</td></tr>
         * <tr><td>states.ENGLISH</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property MeasurementSystem.states {object} Property object of possible value states
         *       @property {number} [MeasurementSystem.states.METRIC=1]
         *       @property {number} [MeasurementSystem.states.ENGLISH=2]
         *

         *
         */
        MeasurementSystem : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Measurement System
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystem.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MeasurementSystem', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystem.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MeasurementSystem', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Measurement System.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystem.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MeasurementSystem', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} MeasurementSystem.type
             */
            type: "object",
            states : {
                METRIC: 1,
                ENGLISH: 2
            }
        },
        /**
         * @description
         * Measurement System Fuel, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.LITER</td><td>1</td></tr>
         * <tr><td>states.GALLON</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property MeasurementSystemFuel.states {object} Property object of possible value states
         *       @property {number} [MeasurementSystemFuel.states.LITER=1]
         *       @property {number} [MeasurementSystemFuel.states.GALLON=2]
         *

         *
         */
        MeasurementSystemFuel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Measurement System Fuel
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemFuel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MeasurementSystemFuel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemFuel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MeasurementSystemFuel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Measurement System Fuel.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemFuel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MeasurementSystemFuel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} MeasurementSystemFuel.type
             */
            type: "object",
            states : {
                LITER: 1,
                GALLON: 2
            }
        },
        /**
         * @description
         * Measurement System String Consumption, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.L_PER_100KM</td><td>1</td></tr>
         * <tr><td>states.KM_PER_L</td><td>2</td></tr>
         * <tr><td>states.MPG</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property MeasurementSystemStringConsumption.states {object} Property object of possible value states
         *       @property {number} [MeasurementSystemStringConsumption.states.L_PER_100KM=1]
         *       @property {number} [MeasurementSystemStringConsumption.states.KM_PER_L=2]
         *       @property {number} [MeasurementSystemStringConsumption.states.MPG=3]
         *

         *
         */
        MeasurementSystemStringConsumption : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Measurement System String Consumption
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringConsumption.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MeasurementSystemStringConsumption', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringConsumption.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MeasurementSystemStringConsumption', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Measurement System String Consumption.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringConsumption.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MeasurementSystemStringConsumption', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} MeasurementSystemStringConsumption.type
             */
            type: "object",
            states : {
                L_PER_100KM: 1,
                KM_PER_L: 2,
                MPG: 3
            }
        },
        /**
         * @description
         * Measurement System String Distance, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.KILOMETER</td><td>1</td></tr>
         * <tr><td>states.MILE</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property MeasurementSystemStringDistance.states {object} Property object of possible value states
         *       @property {number} [MeasurementSystemStringDistance.states.KILOMETER=1]
         *       @property {number} [MeasurementSystemStringDistance.states.MILE=2]
         *

         *
         */
        MeasurementSystemStringDistance : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Measurement System String Distance
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringDistance.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MeasurementSystemStringDistance', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringDistance.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MeasurementSystemStringDistance', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Measurement System String Distance.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringDistance.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MeasurementSystemStringDistance', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} MeasurementSystemStringDistance.type
             */
            type: "object",
            states : {
                KILOMETER: 1,
                MILE: 2
            }
        },
        /**
         * @description
         * Measurement System String Speed, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.KM_PER_H</td><td>1</td></tr>
         * <tr><td>states.MPH</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property MeasurementSystemStringSpeed.states {object} Property object of possible value states
         *       @property {number} [MeasurementSystemStringSpeed.states.KM_PER_H=1]
         *       @property {number} [MeasurementSystemStringSpeed.states.MPH=2]
         *

         *
         */
        MeasurementSystemStringSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Measurement System String Speed
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MeasurementSystemStringSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MeasurementSystemStringSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Measurement System String Speed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MeasurementSystemStringSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MeasurementSystemStringSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} MeasurementSystemStringSpeed.type
             */
            type: "object",
            states : {
                KM_PER_H: 1,
                MPH: 2
            }
        },
        /**
         * @description
         * Mirror Pan Center, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} MirrorPanCenter.min        - Minimum value ( -100 )
         * @property {number} MirrorPanCenter.max        - Maximum value ( 100 )
         * @property {number} MirrorPanCenter.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} MirrorPanCenter.precision  - Decimals of precision reported ( 0 )
         * @property {string} MirrorPanCenter.unit       - Unit of measure ( "Percentage" )
         * @property {string} MirrorPanCenter.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MirrorPanCenter : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Mirror Pan Center
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanCenter.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MirrorPanCenter', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanCenter.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MirrorPanCenter', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Mirror Pan Center.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanCenter.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MirrorPanCenter', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MirrorPanCenter.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Mirror Pan Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} MirrorPanLeft.min        - Minimum value ( -100 )
         * @property {number} MirrorPanLeft.max        - Maximum value ( 100 )
         * @property {number} MirrorPanLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} MirrorPanLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} MirrorPanLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} MirrorPanLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MirrorPanLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Mirror Pan Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MirrorPanLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MirrorPanLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Mirror Pan Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MirrorPanLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MirrorPanLeft.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Mirror Pan Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} MirrorPanRight.min        - Minimum value ( -100 )
         * @property {number} MirrorPanRight.max        - Maximum value ( 100 )
         * @property {number} MirrorPanRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} MirrorPanRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} MirrorPanRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} MirrorPanRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MirrorPanRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Mirror Pan Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MirrorPanRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MirrorPanRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Mirror Pan Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorPanRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MirrorPanRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MirrorPanRight.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Mirror Tilt Center, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} MirrorTiltCenter.min        - Minimum value ( -100 )
         * @property {number} MirrorTiltCenter.max        - Maximum value ( 100 )
         * @property {number} MirrorTiltCenter.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} MirrorTiltCenter.precision  - Decimals of precision reported ( 0 )
         * @property {string} MirrorTiltCenter.unit       - Unit of measure ( "Percentage" )
         * @property {string} MirrorTiltCenter.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MirrorTiltCenter : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Mirror Tilt Center
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltCenter.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MirrorTiltCenter', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltCenter.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MirrorTiltCenter', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Mirror Tilt Center.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltCenter.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MirrorTiltCenter', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MirrorTiltCenter.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Mirror Tilt Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} MirrorTiltLeft.min        - Minimum value ( -100 )
         * @property {number} MirrorTiltLeft.max        - Maximum value ( 100 )
         * @property {number} MirrorTiltLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} MirrorTiltLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} MirrorTiltLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} MirrorTiltLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MirrorTiltLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Mirror Tilt Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MirrorTiltLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MirrorTiltLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Mirror Tilt Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MirrorTiltLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MirrorTiltLeft.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Mirror Tilt Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} MirrorTiltRight.min        - Minimum value ( -100 )
         * @property {number} MirrorTiltRight.max        - Maximum value ( 100 )
         * @property {number} MirrorTiltRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} MirrorTiltRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} MirrorTiltRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} MirrorTiltRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        MirrorTiltRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Mirror Tilt Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('MirrorTiltRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('MirrorTiltRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Mirror Tilt Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function MirrorTiltRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('MirrorTiltRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} MirrorTiltRight.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Number Of Doors 1st Row, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.DOOR_COUNT_0</td><td>0</td></tr>
         * <tr><td>states.DOOR_COUNT_1</td><td>1</td></tr>
         * <tr><td>states.DOOR_COUNT_2</td><td>2</td></tr>
         * <tr><td>states.DOOR_COUNT_3</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property NumberofDoors1stRow.states {object} Property object of possible value states
         *       @property {number} [NumberofDoors1stRow.states.DOOR_COUNT_0=0]
         *       @property {number} [NumberofDoors1stRow.states.DOOR_COUNT_1=1]
         *       @property {number} [NumberofDoors1stRow.states.DOOR_COUNT_2=2]
         *       @property {number} [NumberofDoors1stRow.states.DOOR_COUNT_3=3]
         *

         *
         */
        NumberofDoors1stRow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Number Of Doors 1st Row
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoors1stRow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('NumberofDoors1stRow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoors1stRow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('NumberofDoors1stRow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Number Of Doors 1st Row.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoors1stRow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('NumberofDoors1stRow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} NumberofDoors1stRow.type
             */
            type: "object",
            states : {
                DOOR_COUNT_0: 0,
                DOOR_COUNT_1: 1,
                DOOR_COUNT_2: 2,
                DOOR_COUNT_3: 3
            }
        },
        /**
         * @description
         * Number Of Doors 2nd Row, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.DOOR_COUNT_0</td><td>0</td></tr>
         * <tr><td>states.DOOR_COUNT_1</td><td>1</td></tr>
         * <tr><td>states.DOOR_COUNT_2</td><td>2</td></tr>
         * <tr><td>states.DOOR_COUNT_3</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property NumberofDoors2ndRow.states {object} Property object of possible value states
         *       @property {number} [NumberofDoors2ndRow.states.DOOR_COUNT_0=0]
         *       @property {number} [NumberofDoors2ndRow.states.DOOR_COUNT_1=1]
         *       @property {number} [NumberofDoors2ndRow.states.DOOR_COUNT_2=2]
         *       @property {number} [NumberofDoors2ndRow.states.DOOR_COUNT_3=3]
         *

         *
         */
        NumberofDoors2ndRow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Number Of Doors 2nd Row
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoors2ndRow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('NumberofDoors2ndRow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoors2ndRow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('NumberofDoors2ndRow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Number Of Doors 2nd Row.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoors2ndRow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('NumberofDoors2ndRow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} NumberofDoors2ndRow.type
             */
            type: "object",
            states : {
                DOOR_COUNT_0: 0,
                DOOR_COUNT_1: 1,
                DOOR_COUNT_2: 2,
                DOOR_COUNT_3: 3
            }
        },
        /**
         * @description
         * Number Of Doors in 3rd Row, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.DOOR_COUNT_0</td><td>0</td></tr>
         * <tr><td>states.DOOR_COUNT_1</td><td>1</td></tr>
         * <tr><td>states.DOOR_COUNT_2</td><td>2</td></tr>
         * <tr><td>states.DOOR_COUNT_3</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property NumberofDoorsin3rdRow.states {object} Property object of possible value states
         *       @property {number} [NumberofDoorsin3rdRow.states.DOOR_COUNT_0=0]
         *       @property {number} [NumberofDoorsin3rdRow.states.DOOR_COUNT_1=1]
         *       @property {number} [NumberofDoorsin3rdRow.states.DOOR_COUNT_2=2]
         *       @property {number} [NumberofDoorsin3rdRow.states.DOOR_COUNT_3=3]
         *

         *
         */
        NumberofDoorsin3rdRow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Number Of Doors in 3rd Row
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoorsin3rdRow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('NumberofDoorsin3rdRow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoorsin3rdRow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('NumberofDoorsin3rdRow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Number Of Doors in 3rd Row.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberofDoorsin3rdRow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('NumberofDoorsin3rdRow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} NumberofDoorsin3rdRow.type
             */
            type: "object",
            states : {
                DOOR_COUNT_0: 0,
                DOOR_COUNT_1: 1,
                DOOR_COUNT_2: 2,
                DOOR_COUNT_3: 3
            }
        },
        /**
         * @description
         * Number of Doors Total, measured in Count.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Count</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} NumberOfDoorsTotal.min        - Minimum value ( 0 )
         * @property {number} NumberOfDoorsTotal.max        - Maximum value ( 255 )
         * @property {number} NumberOfDoorsTotal.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} NumberOfDoorsTotal.precision  - Decimals of precision reported ( 0 )
         * @property {string} NumberOfDoorsTotal.unit       - Unit of measure ( "Count" )
         * @property {string} NumberOfDoorsTotal.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        NumberOfDoorsTotal : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Number of Doors Total
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberOfDoorsTotal.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('NumberOfDoorsTotal', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberOfDoorsTotal.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('NumberOfDoorsTotal', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Number of Doors Total.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function NumberOfDoorsTotal.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('NumberOfDoorsTotal', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} NumberOfDoorsTotal.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 1,
            precision: 0,
            unit: 'Count'
        },
        /**
         * @description
         * Value is true if Obstacle Distance Sensor Active
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ObstacleDistanceSensorActive : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Obstacle Distance Sensor Active
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ObstacleDistanceSensorActive.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ObstacleDistanceSensorActive', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ObstacleDistanceSensorActive.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ObstacleDistanceSensorActive', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Obstacle Distance Sensor Active.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ObstacleDistanceSensorActive.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ObstacleDistanceSensorActive', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ObstacleDistanceSensorActive.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Occupants Status Driver, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.ADULT</td><td>1</td></tr>
         * <tr><td>states.CHILD</td><td>2</td></tr>
         * <tr><td>states.VACANT</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property OccupantsStatusDriver.states {object} Property object of possible value states
         *       @property {number} [OccupantsStatusDriver.states.ADULT=1]
         *       @property {number} [OccupantsStatusDriver.states.CHILD=2]
         *       @property {number} [OccupantsStatusDriver.states.VACANT=3]
         *

         *
         */
        OccupantsStatusDriver : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Occupants Status Driver
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusDriver.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('OccupantsStatusDriver', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusDriver.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('OccupantsStatusDriver', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Occupants Status Driver.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusDriver.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('OccupantsStatusDriver', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} OccupantsStatusDriver.type
             */
            type: "object",
            states : {
                ADULT: 1,
                CHILD: 2,
                VACANT: 3
            }
        },
        /**
         * @description
         * Occupants Status Passenger, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.ADULT</td><td>1</td></tr>
         * <tr><td>states.CHILD</td><td>2</td></tr>
         * <tr><td>states.VACANT</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property OccupantsStatusPassenger.states {object} Property object of possible value states
         *       @property {number} [OccupantsStatusPassenger.states.ADULT=1]
         *       @property {number} [OccupantsStatusPassenger.states.CHILD=2]
         *       @property {number} [OccupantsStatusPassenger.states.VACANT=3]
         *

         *
         */
        OccupantsStatusPassenger : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Occupants Status Passenger
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusPassenger.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('OccupantsStatusPassenger', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusPassenger.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('OccupantsStatusPassenger', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Occupants Status Passenger.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusPassenger.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('OccupantsStatusPassenger', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} OccupantsStatusPassenger.type
             */
            type: "object",
            states : {
                ADULT: 1,
                CHILD: 2,
                VACANT: 3
            }
        },
        /**
         * @description
         * Occupants Status Rear Left, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.ADULT</td><td>1</td></tr>
         * <tr><td>states.CHILD</td><td>2</td></tr>
         * <tr><td>states.VACANT</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property OccupantsStatusRearLeft.states {object} Property object of possible value states
         *       @property {number} [OccupantsStatusRearLeft.states.ADULT=1]
         *       @property {number} [OccupantsStatusRearLeft.states.CHILD=2]
         *       @property {number} [OccupantsStatusRearLeft.states.VACANT=3]
         *

         *
         */
        OccupantsStatusRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Occupants Status Rear Left
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('OccupantsStatusRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('OccupantsStatusRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Occupants Status Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('OccupantsStatusRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} OccupantsStatusRearLeft.type
             */
            type: "object",
            states : {
                ADULT: 1,
                CHILD: 2,
                VACANT: 3
            }
        },
        /**
         * @description
         * Occupants Status Rear Right, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.ADULT</td><td>1</td></tr>
         * <tr><td>states.CHILD</td><td>2</td></tr>
         * <tr><td>states.VACANT</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property OccupantsStatusRearRight.states {object} Property object of possible value states
         *       @property {number} [OccupantsStatusRearRight.states.ADULT=1]
         *       @property {number} [OccupantsStatusRearRight.states.CHILD=2]
         *       @property {number} [OccupantsStatusRearRight.states.VACANT=3]
         *

         *
         */
        OccupantsStatusRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Occupants Status Rear Right
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('OccupantsStatusRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('OccupantsStatusRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Occupants Status Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OccupantsStatusRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('OccupantsStatusRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} OccupantsStatusRearRight.type
             */
            type: "object",
            states : {
                ADULT: 1,
                CHILD: 2,
                VACANT: 3
            }
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Odometer Since Restart, measured in Kilometer.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>6553.5</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometer</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} OdometerSinceRestart.min        - Minimum value ( 0 )
         * @property {number} OdometerSinceRestart.max        - Maximum value ( 6553.5 )
         * @property {number} OdometerSinceRestart.resolution - Minimum amount of change in unit measure ( 0.1 )
         * @property {number} OdometerSinceRestart.precision  - Decimals of precision reported ( 1 )
         * @property {string} OdometerSinceRestart.unit       - Unit of measure ( "Kilometer" )
         * @property {string} OdometerSinceRestart.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        OdometerSinceRestart : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Odometer Since Restart
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OdometerSinceRestart.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('OdometerSinceRestart', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OdometerSinceRestart.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('OdometerSinceRestart', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Odometer Since Restart.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function OdometerSinceRestart.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('OdometerSinceRestart', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} OdometerSinceRestart.type
             */
            type: "number",
            min: 0,
            max: 6553.5,
            resolution: 0.1,
            precision: 1,
            unit: 'Kilometer'
        },
        /**
         * @description
         * Value is true if Oil Level Low
         * 
         * <br/>Category: Maintenance



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        OilLevelLow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Oil Level Low
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Value is true if Parking Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ParkingLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Parking Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ParkingLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ParkingLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ParkingLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ParkingLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Parking Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ParkingLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ParkingLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ParkingLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Parking Lights On
         * 
         * <br/>Category: Parking



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        ParkingLightsOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Parking Lights On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ParkingLightsOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('ParkingLightsOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ParkingLightsOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('ParkingLightsOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Parking Lights On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function ParkingLightsOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('ParkingLightsOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} ParkingLightsOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Passenger Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        PassengerLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Passenger Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function PassengerLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('PassengerLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function PassengerLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('PassengerLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Passenger Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function PassengerLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('PassengerLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} PassengerLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Powertrain Torque, measured in Newton Meter.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-500</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>1500</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Newton Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} PowertrainTorque.min        - Minimum value ( -500 )
         * @property {number} PowertrainTorque.max        - Maximum value ( 1500 )
         * @property {number} PowertrainTorque.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} PowertrainTorque.precision  - Decimals of precision reported ( 0 )
         * @property {string} PowertrainTorque.unit       - Unit of measure ( "Newton Meter" )
         * @property {string} PowertrainTorque.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        PowertrainTorque : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Powertrain Torque
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function PowertrainTorque.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('PowertrainTorque', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function PowertrainTorque.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('PowertrainTorque', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Powertrain Torque.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function PowertrainTorque.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('PowertrainTorque', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} PowertrainTorque.type
             */
            type: "number",
            min: -500,
            max: 1500,
            resolution: 1,
            precision: 0,
            unit: 'Newton Meter'
        },
        /**
         * @description
         * Value is true if Rain Sensor
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        RainSensor : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Rain Sensor
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RainSensor.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RainSensor', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RainSensor.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RainSensor', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Rain Sensor.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RainSensor.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RainSensor', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} RainSensor.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Rear Fog Light On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        RearFogLightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Rear Fog Light On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearFogLightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RearFogLightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearFogLightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RearFogLightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Rear Fog Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearFogLightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RearFogLightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} RearFogLightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Rear Wheel Radius, measured in Meter.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} RearWheelRadius.min        - Minimum value ( 0 )
         * @property {number} RearWheelRadius.max        - Maximum value ( 65.535 )
         * @property {number} RearWheelRadius.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} RearWheelRadius.precision  - Decimals of precision reported ( 3 )
         * @property {string} RearWheelRadius.unit       - Unit of measure ( "Meter" )
         * @property {string} RearWheelRadius.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        RearWheelRadius : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Rear Wheel Radius
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWheelRadius.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RearWheelRadius', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWheelRadius.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RearWheelRadius', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Rear Wheel Radius.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWheelRadius.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RearWheelRadius', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} RearWheelRadius.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 3,
            unit: 'Meter'
        },
        /**
         * @description
         * Rear Window, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} RearWindow.min        - Minimum value ( 0 )
         * @property {number} RearWindow.max        - Maximum value ( 100 )
         * @property {number} RearWindow.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} RearWindow.precision  - Decimals of precision reported ( 0 )
         * @property {string} RearWindow.unit       - Unit of measure ( "Percentage" )
         * @property {string} RearWindow.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        RearWindow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Rear Window
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWindow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RearWindow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWindow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RearWindow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Rear Window.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWindow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RearWindow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} RearWindow.type
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
         * Rear Wiper Status, expressed as state values
         * 
         * <br/>Category: Climate


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>1</td></tr>
         * <tr><td>states.SLOWEST</td><td>2</td></tr>
         * <tr><td>states.FASTEST</td><td>3</td></tr>
         * <tr><td>states.AUTO</td><td>4</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property RearWiperStatus.states {object} Property object of possible value states
         *       @property {number} [RearWiperStatus.states.OFF=1]
         *       @property {number} [RearWiperStatus.states.SLOWEST=2]
         *       @property {number} [RearWiperStatus.states.FASTEST=3]
         *       @property {number} [RearWiperStatus.states.AUTO=4]
         *

         *
         */
        RearWiperStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Rear Wiper Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWiperStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RearWiperStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWiperStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RearWiperStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Rear Wiper Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RearWiperStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RearWiperStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} RearWiperStatus.type
             */
            type: "object",
            states : {
                OFF: 1,
                SLOWEST: 2,
                FASTEST: 3,
                AUTO: 4
            }
        },
        /**
         * @description
         * Refuel Position, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.REAR_LEFT</td><td>1</td></tr>
         * <tr><td>states.REAR_RIGHT</td><td>2</td></tr>
         * <tr><td>states.REAR_CENTER</td><td>3</td></tr>
         * <tr><td>states.FRONT_LEFT</td><td>4</td></tr>
         * <tr><td>states.FRONT_RIGHT</td><td>5</td></tr>
         * <tr><td>states.FRONT_CENTER</td><td>6</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property RefuelPosition.states {object} Property object of possible value states
         *       @property {number} [RefuelPosition.states.REAR_LEFT=1]
         *       @property {number} [RefuelPosition.states.REAR_RIGHT=2]
         *       @property {number} [RefuelPosition.states.REAR_CENTER=3]
         *       @property {number} [RefuelPosition.states.FRONT_LEFT=4]
         *       @property {number} [RefuelPosition.states.FRONT_RIGHT=5]
         *       @property {number} [RefuelPosition.states.FRONT_CENTER=6]
         *

         *
         */
        RefuelPosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Refuel Position
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RefuelPosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RefuelPosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RefuelPosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RefuelPosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Refuel Position.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RefuelPosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RefuelPosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} RefuelPosition.type
             */
            type: "object",
            states : {
                REAR_LEFT: 1,
                REAR_RIGHT: 2,
                REAR_CENTER: 3,
                FRONT_LEFT: 4,
                FRONT_RIGHT: 5,
                FRONT_CENTER: 6
            }
        },
        /**
         * @description
         * Value is true if Right Turn Signal On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        RightTurnSignalOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Right Turn Signal On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RightTurnSignalOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('RightTurnSignalOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RightTurnSignalOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('RightTurnSignalOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Right Turn Signal On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function RightTurnSignalOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('RightTurnSignalOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} RightTurnSignalOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Seat Back Cushion Front Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatBackCushionFrontLeft.min        - Minimum value ( 0 )
         * @property {number} SeatBackCushionFrontLeft.max        - Maximum value ( 100 )
         * @property {number} SeatBackCushionFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatBackCushionFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatBackCushionFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatBackCushionFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatBackCushionFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Back Cushion Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackCushionFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBackCushionFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackCushionFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBackCushionFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Back Cushion Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackCushionFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBackCushionFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatBackCushionFrontLeft.type
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
         * Seat Back Cushion Front Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatBackCushionFrontRight.min        - Minimum value ( 0 )
         * @property {number} SeatBackCushionFrontRight.max        - Maximum value ( 100 )
         * @property {number} SeatBackCushionFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatBackCushionFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatBackCushionFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatBackCushionFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatBackCushionFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Back Cushion Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackCushionFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBackCushionFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackCushionFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBackCushionFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Back Cushion Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackCushionFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBackCushionFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatBackCushionFrontRight.type
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
         * Seat Back Recline Front Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>-100</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Percentage</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatBackReclineFrontRight.min        - Minimum value ( -100 )
         * @property {number} SeatBackReclineFrontRight.max        - Maximum value ( 100 )
         * @property {number} SeatBackReclineFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatBackReclineFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatBackReclineFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatBackReclineFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatBackReclineFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Back Recline Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackReclineFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBackReclineFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackReclineFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBackReclineFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Back Recline Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBackReclineFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBackReclineFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatBackReclineFrontRight.type
             */
            type: "number",
            min: -100,
            max: 100,
            resolution: 1,
            precision: 0,
            unit: 'Percentage'
        },
        /**
         * @description
         * Value is true if Seat Belt Driver Fastened
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SeatBeltDriverFastened : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Belt Driver Fastened
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltDriverFastened.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBeltDriverFastened', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltDriverFastened.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBeltDriverFastened', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Belt Driver Fastened.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltDriverFastened.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBeltDriverFastened', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SeatBeltDriverFastened.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Seat Belt Passenger Fastened
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SeatBeltPassengerFastened : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Belt Passenger Fastened
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltPassengerFastened.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBeltPassengerFastened', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltPassengerFastened.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBeltPassengerFastened', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Belt Passenger Fastened.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltPassengerFastened.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBeltPassengerFastened', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SeatBeltPassengerFastened.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Seat Belt Rear Left Fastened
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SeatBeltRearLeftFastened : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Belt Rear Left Fastened
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltRearLeftFastened.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBeltRearLeftFastened', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltRearLeftFastened.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBeltRearLeftFastened', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Belt Rear Left Fastened.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltRearLeftFastened.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBeltRearLeftFastened', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SeatBeltRearLeftFastened.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Seat Belt Rear Right Fastened
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SeatBeltRearRightFastened : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Belt Rear Right Fastened
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltRearRightFastened.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatBeltRearRightFastened', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltRearRightFastened.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatBeltRearRightFastened', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Belt Rear Right Fastened.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatBeltRearRightFastened.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatBeltRearRightFastened', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SeatBeltRearRightFastened.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Seat Cooler Level Driver, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatCoolerLevelDriver.min        - Minimum value ( 0 )
         * @property {number} SeatCoolerLevelDriver.max        - Maximum value ( 10 )
         * @property {number} SeatCoolerLevelDriver.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatCoolerLevelDriver.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatCoolerLevelDriver.unit       - Unit of measure ( "Level" )
         * @property {string} SeatCoolerLevelDriver.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatCoolerLevelDriver : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cooler Level Driver
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelDriver.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCoolerLevelDriver', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelDriver.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCoolerLevelDriver', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cooler Level Driver.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelDriver.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCoolerLevelDriver', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatCoolerLevelDriver.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Seat Cooler Level Left Rear, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatCoolerLevelLeftRear.min        - Minimum value ( 0 )
         * @property {number} SeatCoolerLevelLeftRear.max        - Maximum value ( 10 )
         * @property {number} SeatCoolerLevelLeftRear.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatCoolerLevelLeftRear.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatCoolerLevelLeftRear.unit       - Unit of measure ( "Level" )
         * @property {string} SeatCoolerLevelLeftRear.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatCoolerLevelLeftRear : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cooler Level Left Rear
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelLeftRear.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCoolerLevelLeftRear', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelLeftRear.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCoolerLevelLeftRear', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cooler Level Left Rear.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelLeftRear.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCoolerLevelLeftRear', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatCoolerLevelLeftRear.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Seat Cooler Level Passenger, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatCoolerLevelPassenger.min        - Minimum value ( 0 )
         * @property {number} SeatCoolerLevelPassenger.max        - Maximum value ( 10 )
         * @property {number} SeatCoolerLevelPassenger.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatCoolerLevelPassenger.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatCoolerLevelPassenger.unit       - Unit of measure ( "Level" )
         * @property {string} SeatCoolerLevelPassenger.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatCoolerLevelPassenger : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cooler Level Passenger
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelPassenger.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCoolerLevelPassenger', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelPassenger.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCoolerLevelPassenger', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cooler Level Passenger.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelPassenger.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCoolerLevelPassenger', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatCoolerLevelPassenger.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Seat Cooler Level Right Rear, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatCoolerLevelRightRear.min        - Minimum value ( 0 )
         * @property {number} SeatCoolerLevelRightRear.max        - Maximum value ( 10 )
         * @property {number} SeatCoolerLevelRightRear.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatCoolerLevelRightRear.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatCoolerLevelRightRear.unit       - Unit of measure ( "Level" )
         * @property {string} SeatCoolerLevelRightRear.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatCoolerLevelRightRear : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cooler Level Right Rear
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelRightRear.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCoolerLevelRightRear', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelRightRear.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCoolerLevelRightRear', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cooler Level Right Rear.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerLevelRightRear.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCoolerLevelRightRear', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatCoolerLevelRightRear.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Value is true if Seat Cooler On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SeatCoolerOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cooler On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCoolerOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCoolerOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cooler On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCoolerOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCoolerOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SeatCoolerOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Seat Cushion Height Front Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatCushionHeightFrontLeft.min        - Minimum value ( 0 )
         * @property {number} SeatCushionHeightFrontLeft.max        - Maximum value ( 100 )
         * @property {number} SeatCushionHeightFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatCushionHeightFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatCushionHeightFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatCushionHeightFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatCushionHeightFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cushion Height Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCushionHeightFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCushionHeightFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCushionHeightFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCushionHeightFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cushion Height Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCushionHeightFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCushionHeightFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatCushionHeightFrontLeft.type
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
         * Seat Cushion Height Front Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatCushionHeightFrontRight.min        - Minimum value ( 0 )
         * @property {number} SeatCushionHeightFrontRight.max        - Maximum value ( 100 )
         * @property {number} SeatCushionHeightFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatCushionHeightFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatCushionHeightFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatCushionHeightFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatCushionHeightFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Cushion Height Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCushionHeightFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatCushionHeightFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCushionHeightFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatCushionHeightFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Cushion Height Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatCushionHeightFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatCushionHeightFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatCushionHeightFrontRight.type
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
         * Seat Headrest Front Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatHeadrestFrontLeft.min        - Minimum value ( 0 )
         * @property {number} SeatHeadrestFrontLeft.max        - Maximum value ( 100 )
         * @property {number} SeatHeadrestFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatHeadrestFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatHeadrestFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatHeadrestFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatHeadrestFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Headrest Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeadrestFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeadrestFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeadrestFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeadrestFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Headrest Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeadrestFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeadrestFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatHeadrestFrontLeft.type
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
         * Seat Headrest Front Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatHeadrestFrontRight.min        - Minimum value ( 0 )
         * @property {number} SeatHeadrestFrontRight.max        - Maximum value ( 100 )
         * @property {number} SeatHeadrestFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatHeadrestFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatHeadrestFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatHeadrestFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatHeadrestFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Headrest Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeadrestFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeadrestFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeadrestFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeadrestFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Headrest Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeadrestFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeadrestFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatHeadrestFrontRight.type
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
         * Seat Heater Level Driver, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatHeaterLevelDriver.min        - Minimum value ( 0 )
         * @property {number} SeatHeaterLevelDriver.max        - Maximum value ( 10 )
         * @property {number} SeatHeaterLevelDriver.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatHeaterLevelDriver.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatHeaterLevelDriver.unit       - Unit of measure ( "Level" )
         * @property {string} SeatHeaterLevelDriver.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatHeaterLevelDriver : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Heater Level Driver
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelDriver.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeaterLevelDriver', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelDriver.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeaterLevelDriver', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Heater Level Driver.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelDriver.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeaterLevelDriver', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatHeaterLevelDriver.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Seat Heater Level Left Rear, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatHeaterLevelLeftRear.min        - Minimum value ( 0 )
         * @property {number} SeatHeaterLevelLeftRear.max        - Maximum value ( 10 )
         * @property {number} SeatHeaterLevelLeftRear.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatHeaterLevelLeftRear.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatHeaterLevelLeftRear.unit       - Unit of measure ( "Level" )
         * @property {string} SeatHeaterLevelLeftRear.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatHeaterLevelLeftRear : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Heater Level Left Rear
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelLeftRear.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeaterLevelLeftRear', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelLeftRear.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeaterLevelLeftRear', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Heater Level Left Rear.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelLeftRear.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeaterLevelLeftRear', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatHeaterLevelLeftRear.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Seat Heater Level Passenger, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatHeaterLevelPassenger.min        - Minimum value ( 0 )
         * @property {number} SeatHeaterLevelPassenger.max        - Maximum value ( 10 )
         * @property {number} SeatHeaterLevelPassenger.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatHeaterLevelPassenger.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatHeaterLevelPassenger.unit       - Unit of measure ( "Level" )
         * @property {string} SeatHeaterLevelPassenger.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatHeaterLevelPassenger : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Heater Level Passenger
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelPassenger.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeaterLevelPassenger', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelPassenger.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeaterLevelPassenger', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Heater Level Passenger.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelPassenger.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeaterLevelPassenger', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatHeaterLevelPassenger.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Seat Heater Level Right Rear, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatHeaterLevelRightRear.min        - Minimum value ( 0 )
         * @property {number} SeatHeaterLevelRightRear.max        - Maximum value ( 10 )
         * @property {number} SeatHeaterLevelRightRear.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatHeaterLevelRightRear.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatHeaterLevelRightRear.unit       - Unit of measure ( "Level" )
         * @property {string} SeatHeaterLevelRightRear.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatHeaterLevelRightRear : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Heater Level Right Rear
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelRightRear.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeaterLevelRightRear', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelRightRear.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeaterLevelRightRear', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Heater Level Right Rear.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterLevelRightRear.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeaterLevelRightRear', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatHeaterLevelRightRear.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Value is true if Seat Heater On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SeatHeaterOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Heater On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatHeaterOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatHeaterOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Heater On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatHeaterOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatHeaterOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SeatHeaterOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Seat Position Preset Recall, expressed as state values
         * 
         * <br/>Category: Personalization


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.POSITION_0</td><td>1</td></tr>
         * <tr><td>states.POSITION_1</td><td>2</td></tr>
         * <tr><td>states.POSITION_2</td><td>3</td></tr>
         * <tr><td>states.POSITION_3</td><td>4</td></tr>
         * <tr><td>states.POSITION_4</td><td>5</td></tr>
         * <tr><td>states.POSITION_5</td><td>6</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property SeatPositionPresetRecall.states {object} Property object of possible value states
         *       @property {number} [SeatPositionPresetRecall.states.POSITION_0=1]
         *       @property {number} [SeatPositionPresetRecall.states.POSITION_1=2]
         *       @property {number} [SeatPositionPresetRecall.states.POSITION_2=3]
         *       @property {number} [SeatPositionPresetRecall.states.POSITION_3=4]
         *       @property {number} [SeatPositionPresetRecall.states.POSITION_4=5]
         *       @property {number} [SeatPositionPresetRecall.states.POSITION_5=6]
         *

         *
         */
        SeatPositionPresetRecall : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Position Preset Recall
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatPositionPresetRecall.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatPositionPresetRecall', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatPositionPresetRecall.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatPositionPresetRecall', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Position Preset Recall.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatPositionPresetRecall.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatPositionPresetRecall', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} SeatPositionPresetRecall.type
             */
            type: "object",
            states : {
                POSITION_0: 1,
                POSITION_1: 2,
                POSITION_2: 3,
                POSITION_3: 4,
                POSITION_4: 5,
                POSITION_5: 6
            }
        },
        /**
         * @description
         * Seat Side Cushion Front Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatSideCushionFrontLeft.min        - Minimum value ( 0 )
         * @property {number} SeatSideCushionFrontLeft.max        - Maximum value ( 100 )
         * @property {number} SeatSideCushionFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatSideCushionFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatSideCushionFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatSideCushionFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatSideCushionFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Side Cushion Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSideCushionFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatSideCushionFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSideCushionFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatSideCushionFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Side Cushion Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSideCushionFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatSideCushionFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatSideCushionFrontLeft.type
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
         * Seat Side Cushion Front Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatSideCushionFrontRight.min        - Minimum value ( 0 )
         * @property {number} SeatSideCushionFrontRight.max        - Maximum value ( 100 )
         * @property {number} SeatSideCushionFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatSideCushionFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatSideCushionFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatSideCushionFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatSideCushionFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Side Cushion Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSideCushionFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatSideCushionFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSideCushionFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatSideCushionFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Side Cushion Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSideCushionFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatSideCushionFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatSideCushionFrontRight.type
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
         * Seat Slide Front Left, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatSlideFrontLeft.min        - Minimum value ( 0 )
         * @property {number} SeatSlideFrontLeft.max        - Maximum value ( 100 )
         * @property {number} SeatSlideFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatSlideFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatSlideFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatSlideFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatSlideFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Slide Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSlideFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatSlideFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSlideFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatSlideFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Slide Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSlideFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatSlideFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatSlideFrontLeft.type
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
         * Seat Slide Front Right, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SeatSlideFrontRight.min        - Minimum value ( 0 )
         * @property {number} SeatSlideFrontRight.max        - Maximum value ( 100 )
         * @property {number} SeatSlideFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SeatSlideFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} SeatSlideFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} SeatSlideFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SeatSlideFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Seat Slide Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSlideFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SeatSlideFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSlideFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SeatSlideFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Seat Slide Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SeatSlideFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SeatSlideFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SeatSlideFrontRight.type
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
         * Security Alert, expressed as state values
         * 
         * <br/>Category: Parking


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.IDLE</td><td>1</td></tr>
         * <tr><td>states.ACTIVATED</td><td>2</td></tr>
         * <tr><td>states.ALARM_DETECTED</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property SecurityAlert.states {object} Property object of possible value states
         *       @property {number} [SecurityAlert.states.IDLE=1]
         *       @property {number} [SecurityAlert.states.ACTIVATED=2]
         *       @property {number} [SecurityAlert.states.ALARM_DETECTED=3]
         *

         *
         */
        SecurityAlert : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Security Alert
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SecurityAlert.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SecurityAlert', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SecurityAlert.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SecurityAlert', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Security Alert.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SecurityAlert.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SecurityAlert', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} SecurityAlert.type
             */
            type: "object",
            states : {
                IDLE: 1,
                ACTIVATED: 2,
                ALARM_DETECTED: 3
            }
        },
        /**
         * @description
         * Value is true if Side Window Driver Locked
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SideWindowDriveLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Driver Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowDriveLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowDriveLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowDriveLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowDriveLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Driver Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowDriveLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowDriveLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SideWindowDriveLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Side Window Driver Openness, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SideWindowDriverOpenness.min        - Minimum value ( 0 )
         * @property {number} SideWindowDriverOpenness.max        - Maximum value ( 100 )
         * @property {number} SideWindowDriverOpenness.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SideWindowDriverOpenness.precision  - Decimals of precision reported ( 0 )
         * @property {string} SideWindowDriverOpenness.unit       - Unit of measure ( "Percentage" )
         * @property {string} SideWindowDriverOpenness.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SideWindowDriverOpenness : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Driver Openness
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowDriverOpenness.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowDriverOpenness', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowDriverOpenness.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowDriverOpenness', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Driver Openness.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowDriverOpenness.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowDriverOpenness', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SideWindowDriverOpenness.type
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
         * Value is true if Side Window Passenger Locked
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SideWindowPassengerLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Passenger Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowPassengerLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowPassengerLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowPassengerLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowPassengerLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Passenger Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowPassengerLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowPassengerLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SideWindowPassengerLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Side Window Passenger Openness, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SideWindowPassengerOpenness.min        - Minimum value ( 0 )
         * @property {number} SideWindowPassengerOpenness.max        - Maximum value ( 100 )
         * @property {number} SideWindowPassengerOpenness.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SideWindowPassengerOpenness.precision  - Decimals of precision reported ( 0 )
         * @property {string} SideWindowPassengerOpenness.unit       - Unit of measure ( "Percentage" )
         * @property {string} SideWindowPassengerOpenness.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SideWindowPassengerOpenness : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Passenger Openness
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowPassengerOpenness.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowPassengerOpenness', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowPassengerOpenness.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowPassengerOpenness', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Passenger Openness.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowPassengerOpenness.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowPassengerOpenness', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SideWindowPassengerOpenness.type
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
         * Value is true if Side Window Rear Left Locked
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SideWindowRearLeftLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Rear Left Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearLeftLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowRearLeftLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearLeftLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowRearLeftLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Rear Left Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearLeftLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowRearLeftLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SideWindowRearLeftLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Side Window Rear Left Openness, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SideWindowRearLeftOpenness.min        - Minimum value ( 0 )
         * @property {number} SideWindowRearLeftOpenness.max        - Maximum value ( 100 )
         * @property {number} SideWindowRearLeftOpenness.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SideWindowRearLeftOpenness.precision  - Decimals of precision reported ( 0 )
         * @property {string} SideWindowRearLeftOpenness.unit       - Unit of measure ( "Percentage" )
         * @property {string} SideWindowRearLeftOpenness.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SideWindowRearLeftOpenness : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Rear Left Openness
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearLeftOpenness.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowRearLeftOpenness', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearLeftOpenness.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowRearLeftOpenness', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Rear Left Openness.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearLeftOpenness.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowRearLeftOpenness', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SideWindowRearLeftOpenness.type
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
         * Value is true if Side Window Rear Right Locked
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SideWindowRearRightLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Rear Right Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearRightLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowRearRightLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearRightLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowRearRightLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Rear Right Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearRightLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowRearRightLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SideWindowRearRightLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Side Window Rear Right Openness, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SideWindowRearRightOpenness.min        - Minimum value ( 0 )
         * @property {number} SideWindowRearRightOpenness.max        - Maximum value ( 100 )
         * @property {number} SideWindowRearRightOpenness.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SideWindowRearRightOpenness.precision  - Decimals of precision reported ( 0 )
         * @property {string} SideWindowRearRightOpenness.unit       - Unit of measure ( "Percentage" )
         * @property {string} SideWindowRearRightOpenness.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SideWindowRearRightOpenness : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Side Window Rear Right Openness
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearRightOpenness.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SideWindowRearRightOpenness', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearRightOpenness.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SideWindowRearRightOpenness', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Side Window Rear Right Openness.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SideWindowRearRightOpenness.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SideWindowRearRightOpenness', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SideWindowRearRightOpenness.type
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Steering Rotation Direction, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.STRAIGHT</td><td>0</td></tr>
         * <tr><td>states.LEFT</td><td>1</td></tr>
         * <tr><td>states.RIGHT</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property SteeringWheelRotationDirection.states {object} Property object of possible value states
         *       @property {number} [SteeringWheelRotationDirection.states.STRAIGHT=0]
         *       @property {number} [SteeringWheelRotationDirection.states.LEFT=1]
         *       @property {number} [SteeringWheelRotationDirection.states.RIGHT=2]
         *

         *
         */
        SteeringWheelRotationDirection : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Rotation Direction
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelRotationDirection.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelRotationDirection', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelRotationDirection.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelRotationDirection', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Rotation Direction.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelRotationDirection.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelRotationDirection', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} SteeringWheelRotationDirection.type
             */
            type: "object",
            states : {
                STRAIGHT: 0,
                LEFT: 1,
                RIGHT: 2
            }
        },
        /**
         * @description
         * Steering Wheel Heater Level, measured in Level.
         * 
         * <br/>Category: Climate

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>10</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Level</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SteeringWheelHeaterLevel.min        - Minimum value ( 0 )
         * @property {number} SteeringWheelHeaterLevel.max        - Maximum value ( 10 )
         * @property {number} SteeringWheelHeaterLevel.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SteeringWheelHeaterLevel.precision  - Decimals of precision reported ( 0 )
         * @property {string} SteeringWheelHeaterLevel.unit       - Unit of measure ( "Level" )
         * @property {string} SteeringWheelHeaterLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SteeringWheelHeaterLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Wheel Heater Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelHeaterLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelHeaterLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelHeaterLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelHeaterLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Wheel Heater Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelHeaterLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelHeaterLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SteeringWheelHeaterLevel.type
             */
            type: "number",
            min: 0,
            max: 10,
            resolution: 1,
            precision: 0,
            unit: 'Level'
        },
        /**
         * @description
         * Value is true if Steering Wheel Heater On
         * 
         * <br/>Category: Climate



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        SteeringWheelHeaterOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Wheel Heater On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelHeaterOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelHeaterOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelHeaterOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelHeaterOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Wheel Heater On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelHeaterOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelHeaterOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} SteeringWheelHeaterOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Steering Wheel Position, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.LEFT</td><td>1</td></tr>
         * <tr><td>states.RIGHT</td><td>2</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property SteeringWheelPosition.states {object} Property object of possible value states
         *       @property {number} [SteeringWheelPosition.states.LEFT=1]
         *       @property {number} [SteeringWheelPosition.states.RIGHT=2]
         *

         *
         */
        SteeringWheelPosition : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Wheel Position
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPosition.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelPosition', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPosition.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelPosition', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Wheel Position.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPosition.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelPosition', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} SteeringWheelPosition.type
             */
            type: "object",
            states : {
                LEFT: 1,
                RIGHT: 2
            }
        },
        /**
         * @description
         * Steering Wheel Position Telescoping, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SteeringWheelPositionTelescoping.min        - Minimum value ( 0 )
         * @property {number} SteeringWheelPositionTelescoping.max        - Maximum value ( 100 )
         * @property {number} SteeringWheelPositionTelescoping.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SteeringWheelPositionTelescoping.precision  - Decimals of precision reported ( 0 )
         * @property {string} SteeringWheelPositionTelescoping.unit       - Unit of measure ( "Percentage" )
         * @property {string} SteeringWheelPositionTelescoping.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SteeringWheelPositionTelescoping : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Wheel Position Telescoping
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPositionTelescoping.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelPositionTelescoping', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPositionTelescoping.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelPositionTelescoping', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Wheel Position Telescoping.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPositionTelescoping.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelPositionTelescoping', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SteeringWheelPositionTelescoping.type
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
         * Steering Wheel Position Tilt, measured in Percentage.
         * 
         * <br/>Category: Personalization

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SteeringWheelPositionTilt.min        - Minimum value ( 0 )
         * @property {number} SteeringWheelPositionTilt.max        - Maximum value ( 100 )
         * @property {number} SteeringWheelPositionTilt.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SteeringWheelPositionTilt.precision  - Decimals of precision reported ( 0 )
         * @property {string} SteeringWheelPositionTilt.unit       - Unit of measure ( "Percentage" )
         * @property {string} SteeringWheelPositionTilt.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SteeringWheelPositionTilt : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Steering Wheel Position Tilt
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPositionTilt.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SteeringWheelPositionTilt', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPositionTilt.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SteeringWheelPositionTilt', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Steering Wheel Position Tilt.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SteeringWheelPositionTilt.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SteeringWheelPositionTilt', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SteeringWheelPositionTilt.type
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
         * Sunroof Openness, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SunroofOpenness.min        - Minimum value ( 0 )
         * @property {number} SunroofOpenness.max        - Maximum value ( 100 )
         * @property {number} SunroofOpenness.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SunroofOpenness.precision  - Decimals of precision reported ( 0 )
         * @property {string} SunroofOpenness.unit       - Unit of measure ( "Percentage" )
         * @property {string} SunroofOpenness.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SunroofOpenness : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Sunroof Openness
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SunroofOpenness.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SunroofOpenness', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SunroofOpenness.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SunroofOpenness', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Sunroof Openness.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SunroofOpenness.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SunroofOpenness', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SunroofOpenness.type
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
         * Sunroof Tilt, measured in Percentage.
         * 
         * <br/>Category: Climate

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} SunroofTilt.min        - Minimum value ( 0 )
         * @property {number} SunroofTilt.max        - Maximum value ( 100 )
         * @property {number} SunroofTilt.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} SunroofTilt.precision  - Decimals of precision reported ( 0 )
         * @property {string} SunroofTilt.unit       - Unit of measure ( "Percentage" )
         * @property {string} SunroofTilt.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        SunroofTilt : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Sunroof Tilt
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SunroofTilt.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('SunroofTilt', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SunroofTilt.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('SunroofTilt', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Sunroof Tilt.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function SunroofTilt.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('SunroofTilt', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} SunroofTilt.type
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
         * Value is true if Taillight On
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        TaillightOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Taillight On
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TaillightOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TaillightOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TaillightOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TaillightOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Taillight On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TaillightOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TaillightOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} TaillightOn.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Target Charge Level, measured in Percentage.
         * 
         * <br/>Category: Electric Vehicle

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TargetChargeLevel.min        - Minimum value ( 0 )
         * @property {number} TargetChargeLevel.max        - Maximum value ( 100 )
         * @property {number} TargetChargeLevel.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TargetChargeLevel.precision  - Decimals of precision reported ( 0 )
         * @property {string} TargetChargeLevel.unit       - Unit of measure ( "Percentage" )
         * @property {string} TargetChargeLevel.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TargetChargeLevel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Target Charge Level
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TargetChargeLevel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TargetChargeLevel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TargetChargeLevel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TargetChargeLevel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Target Charge Level.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TargetChargeLevel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TargetChargeLevel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TargetChargeLevel.type
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
         * Value is true if Target Vehicle Detected
         * 
         * <br/>Category: Running Status



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        TargetVehicleDetected : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Target Vehicle Detected
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TargetVehicleDetected.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TargetVehicleDetected', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TargetVehicleDetected.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TargetVehicleDetected', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Target Vehicle Detected.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TargetVehicleDetected.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TargetVehicleDetected', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} TargetVehicleDetected.type
             */
            type: "boolean"
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Time Run With Malfunction Indicator Light On, measured in Second.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>3932100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TimeRunWithMilOn.min        - Minimum value ( 0 )
         * @property {number} TimeRunWithMilOn.max        - Maximum value ( 3932100 )
         * @property {number} TimeRunWithMilOn.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TimeRunWithMilOn.precision  - Decimals of precision reported ( 0 )
         * @property {string} TimeRunWithMilOn.unit       - Unit of measure ( "Second" )
         * @property {string} TimeRunWithMilOn.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TimeRunWithMilOn : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Time Run With Malfunction Indicator Light On
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimeRunWithMilOn.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TimeRunWithMilOn', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimeRunWithMilOn.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TimeRunWithMilOn', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Time Run With Malfunction Indicator Light On.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimeRunWithMilOn.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TimeRunWithMilOn', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TimeRunWithMilOn.type
             */
            type: "number",
            min: 0,
            max: 3932100,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Time Since Diagnostic Trouble Codes Cleared, measured in Second.
         * 
         * <br/>Category: Maintenance

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>3932100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TimeSinceCodesCleared.min        - Minimum value ( 0 )
         * @property {number} TimeSinceCodesCleared.max        - Maximum value ( 3932100 )
         * @property {number} TimeSinceCodesCleared.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TimeSinceCodesCleared.precision  - Decimals of precision reported ( 0 )
         * @property {string} TimeSinceCodesCleared.unit       - Unit of measure ( "Second" )
         * @property {string} TimeSinceCodesCleared.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TimeSinceCodesCleared : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Time Since Diagnostic Trouble Codes Cleared
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimeSinceCodesCleared.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TimeSinceCodesCleared', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimeSinceCodesCleared.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TimeSinceCodesCleared', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Time Since Diagnostic Trouble Codes Cleared.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimeSinceCodesCleared.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TimeSinceCodesCleared', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TimeSinceCodesCleared.type
             */
            type: "number",
            min: 0,
            max: 3932100,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Time Spent Driving, measured in Second.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>429496730</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} DrivingTime.min        - Minimum value ( 0 )
         * @property {number} DrivingTime.max        - Maximum value ( 429496730 )
         * @property {number} DrivingTime.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} DrivingTime.precision  - Decimals of precision reported ( 0 )
         * @property {string} DrivingTime.unit       - Unit of measure ( "Second" )
         * @property {string} DrivingTime.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        DrivingTime : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Time Spent Driving
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DrivingTime.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('DrivingTime', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DrivingTime.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('DrivingTime', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Time Spent Driving.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function DrivingTime.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('DrivingTime', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} DrivingTime.type
             */
            type: "number",
            min: 0,
            max: 429496730,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Time to Full Charge, measured in Second.
         * 
         * <br/>Category: Electric Vehicle

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TimetoFullCharge.min        - Minimum value ( 0 )
         * @property {number} TimetoFullCharge.max        - Maximum value ( 65535 )
         * @property {number} TimetoFullCharge.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TimetoFullCharge.precision  - Decimals of precision reported ( 0 )
         * @property {string} TimetoFullCharge.unit       - Unit of measure ( "Second" )
         * @property {string} TimetoFullCharge.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TimetoFullCharge : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Time to Full Charge
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimetoFullCharge.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TimetoFullCharge', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimetoFullCharge.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TimetoFullCharge', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Time to Full Charge.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimetoFullCharge.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TimetoFullCharge', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TimetoFullCharge.type
             */
            type: "number",
            min: 0,
            max: 65535,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Time to Target Charge, measured in Second.
         * 
         * <br/>Category: Electric Vehicle

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TimetoTargetCharge.min        - Minimum value ( 0 )
         * @property {number} TimetoTargetCharge.max        - Maximum value ( 65535 )
         * @property {number} TimetoTargetCharge.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TimetoTargetCharge.precision  - Decimals of precision reported ( 0 )
         * @property {string} TimetoTargetCharge.unit       - Unit of measure ( "Second" )
         * @property {string} TimetoTargetCharge.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TimetoTargetCharge : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Time to Target Charge
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimetoTargetCharge.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TimetoTargetCharge', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimetoTargetCharge.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TimetoTargetCharge', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Time to Target Charge.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TimetoTargetCharge.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TimetoTargetCharge', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TimetoTargetCharge.type
             */
            type: "number",
            min: 0,
            max: 65535,
            resolution: 1,
            precision: 0,
            unit: 'Second'
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Tire Pressure Low, expressed as state values
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

         * @memberof! oxygen/TelematicsAPI2#
         * @property TirePressureLow.states {object} Property object of possible value states
         *       @property {number} [TirePressureLow.states.NOT_LOW=0]
         *       @property {number} [TirePressureLow.states.LOW=1]
         *       @property {number} [TirePressureLow.states.ERROR=2]
         *

         *
         */
        TirePressureLow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Low
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureLow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureLow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureLow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureLow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Low.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureLow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureLow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TirePressureLow.type
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Tire Pressure Status Front Left, expressed as state values
         * 
         * <br/>Category: Maintenance


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NORMAL</td><td>1</td></tr>
         * <tr><td>states.LOW</td><td>2</td></tr>
         * <tr><td>states.HIGH</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TirePressureStatusFrontLeft.states {object} Property object of possible value states
         *       @property {number} [TirePressureStatusFrontLeft.states.NORMAL=1]
         *       @property {number} [TirePressureStatusFrontLeft.states.LOW=2]
         *       @property {number} [TirePressureStatusFrontLeft.states.HIGH=3]
         *

         *
         */
        TirePressureStatusFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Status Front Left
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureStatusFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureStatusFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Status Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureStatusFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TirePressureStatusFrontLeft.type
             */
            type: "object",
            states : {
                NORMAL: 1,
                LOW: 2,
                HIGH: 3
            }
        },
        /**
         * @description
         * Tire Pressure Status Front Right, expressed as state values
         * 
         * <br/>Category: Maintenance


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NORMAL</td><td>1</td></tr>
         * <tr><td>states.LOW</td><td>2</td></tr>
         * <tr><td>states.HIGH</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TirePressureStatusFrontRight.states {object} Property object of possible value states
         *       @property {number} [TirePressureStatusFrontRight.states.NORMAL=1]
         *       @property {number} [TirePressureStatusFrontRight.states.LOW=2]
         *       @property {number} [TirePressureStatusFrontRight.states.HIGH=3]
         *

         *
         */
        TirePressureStatusFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Status Front Right
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureStatusFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureStatusFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Status Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureStatusFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TirePressureStatusFrontRight.type
             */
            type: "object",
            states : {
                NORMAL: 1,
                LOW: 2,
                HIGH: 3
            }
        },
        /**
         * @description
         * Tire Pressure Status Rear Left, expressed as state values
         * 
         * <br/>Category: Maintenance


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NORMAL</td><td>1</td></tr>
         * <tr><td>states.LOW</td><td>2</td></tr>
         * <tr><td>states.HIGH</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TirePressureStatusRearLeft.states {object} Property object of possible value states
         *       @property {number} [TirePressureStatusRearLeft.states.NORMAL=1]
         *       @property {number} [TirePressureStatusRearLeft.states.LOW=2]
         *       @property {number} [TirePressureStatusRearLeft.states.HIGH=3]
         *

         *
         */
        TirePressureStatusRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Status Rear Left
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureStatusRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureStatusRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Status Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureStatusRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TirePressureStatusRearLeft.type
             */
            type: "object",
            states : {
                NORMAL: 1,
                LOW: 2,
                HIGH: 3
            }
        },
        /**
         * @description
         * Tire Pressure Status Rear Right, expressed as state values
         * 
         * <br/>Category: Maintenance


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.NORMAL</td><td>1</td></tr>
         * <tr><td>states.LOW</td><td>2</td></tr>
         * <tr><td>states.HIGH</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TirePressureStatusRearRight.states {object} Property object of possible value states
         *       @property {number} [TirePressureStatusRearRight.states.NORMAL=1]
         *       @property {number} [TirePressureStatusRearRight.states.LOW=2]
         *       @property {number} [TirePressureStatusRearRight.states.HIGH=3]
         *

         *
         */
        TirePressureStatusRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Pressure Status Rear Right
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TirePressureStatusRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TirePressureStatusRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Pressure Status Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TirePressureStatusRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TirePressureStatusRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TirePressureStatusRearRight.type
             */
            type: "object",
            states : {
                NORMAL: 1,
                LOW: 2,
                HIGH: 3
            }
        },
        /**
         * @description
         * Tire Temperature Front Left, measured in Degrees Celsius.
         * 
         * <br/>Category: Maintenance

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireTemperatureFrontLeft.min        - Minimum value ( -40 )
         * @property {number} TireTemperatureFrontLeft.max        - Maximum value ( 215 )
         * @property {number} TireTemperatureFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireTemperatureFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireTemperatureFrontLeft.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} TireTemperatureFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireTemperatureFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Temperature Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireTemperatureFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireTemperatureFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Temperature Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireTemperatureFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireTemperatureFrontLeft.type
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
         * Tire Temperature Front Right, measured in Degrees Celsius.
         * 
         * <br/>Category: Maintenance

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireTemperatureFrontRight.min        - Minimum value ( -40 )
         * @property {number} TireTemperatureFrontRight.max        - Maximum value ( 215 )
         * @property {number} TireTemperatureFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireTemperatureFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireTemperatureFrontRight.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} TireTemperatureFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireTemperatureFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Temperature Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireTemperatureFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireTemperatureFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Temperature Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireTemperatureFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireTemperatureFrontRight.type
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
         * Tire Temperature Rear Left, measured in Degrees Celsius.
         * 
         * <br/>Category: Maintenance

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireTemperatureRearLeft.min        - Minimum value ( -40 )
         * @property {number} TireTemperatureRearLeft.max        - Maximum value ( 215 )
         * @property {number} TireTemperatureRearLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireTemperatureRearLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireTemperatureRearLeft.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} TireTemperatureRearLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireTemperatureRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Temperature Rear Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireTemperatureRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireTemperatureRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Temperature Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireTemperatureRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireTemperatureRearLeft.type
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
         * Tire Temperature Rear Right, measured in Degrees Celsius.
         * 
         * <br/>Category: Maintenance

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireTemperatureRearRight.min        - Minimum value ( -40 )
         * @property {number} TireTemperatureRearRight.max        - Maximum value ( 215 )
         * @property {number} TireTemperatureRearRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireTemperatureRearRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireTemperatureRearRight.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} TireTemperatureRearRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireTemperatureRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Temperature Rear Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireTemperatureRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireTemperatureRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Temperature Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireTemperatureRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireTemperatureRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireTemperatureRearRight.type
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
         * Tire Wear Front Left, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireWearFrontLeft.min        - Minimum value ( 0 )
         * @property {number} TireWearFrontLeft.max        - Maximum value ( 100 )
         * @property {number} TireWearFrontLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireWearFrontLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireWearFrontLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} TireWearFrontLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireWearFrontLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Wear Front Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearFrontLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireWearFrontLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearFrontLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireWearFrontLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Wear Front Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearFrontLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireWearFrontLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireWearFrontLeft.type
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
         * Tire Wear Front Right, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireWearFrontRight.min        - Minimum value ( 0 )
         * @property {number} TireWearFrontRight.max        - Maximum value ( 100 )
         * @property {number} TireWearFrontRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireWearFrontRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireWearFrontRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} TireWearFrontRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireWearFrontRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Wear Front Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearFrontRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireWearFrontRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearFrontRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireWearFrontRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Wear Front Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearFrontRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireWearFrontRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireWearFrontRight.type
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
         * Tire Wear Rear Left, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireWearRearLeft.min        - Minimum value ( 0 )
         * @property {number} TireWearRearLeft.max        - Maximum value ( 100 )
         * @property {number} TireWearRearLeft.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireWearRearLeft.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireWearRearLeft.unit       - Unit of measure ( "Percentage" )
         * @property {string} TireWearRearLeft.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireWearRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Wear Rear Left
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireWearRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireWearRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Wear Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireWearRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireWearRearLeft.type
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
         * Tire Wear Rear Right, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TireWearRearRight.min        - Minimum value ( 0 )
         * @property {number} TireWearRearRight.max        - Maximum value ( 100 )
         * @property {number} TireWearRearRight.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TireWearRearRight.precision  - Decimals of precision reported ( 0 )
         * @property {string} TireWearRearRight.unit       - Unit of measure ( "Percentage" )
         * @property {string} TireWearRearRight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TireWearRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Tire Wear Rear Right
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TireWearRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TireWearRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Tire Wear Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TireWearRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TireWearRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TireWearRearRight.type
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
         * Value is true if Traction Control System Enabled
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        TractionControlSystemEnabled : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Traction Control System Enabled
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TractionControlSystemEnabled.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TractionControlSystemEnabled', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TractionControlSystemEnabled.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TractionControlSystemEnabled', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Traction Control System Enabled.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TractionControlSystemEnabled.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TractionControlSystemEnabled', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} TractionControlSystemEnabled.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Traction Control System Engaged
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        TractionControlSystemEngaged : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Traction Control System Engaged
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TractionControlSystemEngaged.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TractionControlSystemEngaged', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TractionControlSystemEngaged.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TractionControlSystemEngaged', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Traction Control System Engaged.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TractionControlSystemEngaged.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TractionControlSystemEngaged', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} TractionControlSystemEngaged.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Transmission Gear Type, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.AUTO</td><td>0</td></tr>
         * <tr><td>states.MANUAL</td><td>1</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TransmissionGearType.states {object} Property object of possible value states
         *       @property {number} [TransmissionGearType.states.AUTO=0]
         *       @property {number} [TransmissionGearType.states.MANUAL=1]
         *

         *
         */
        TransmissionGearType : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Transmission Gear Type
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionGearType.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TransmissionGearType', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionGearType.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TransmissionGearType', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Transmission Gear Type.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionGearType.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TransmissionGearType', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TransmissionGearType.type
             */
            type: "object",
            states : {
                AUTO: 0,
                MANUAL: 1
            }
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Transmission Oil Temperature, measured in Degrees Celsius.
         * 
         * <br/>Category: Maintenance

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TransmissionOilTemperature.min        - Minimum value ( -40 )
         * @property {number} TransmissionOilTemperature.max        - Maximum value ( 215 )
         * @property {number} TransmissionOilTemperature.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TransmissionOilTemperature.precision  - Decimals of precision reported ( 0 )
         * @property {string} TransmissionOilTemperature.unit       - Unit of measure ( "Degrees Celsius" )
         * @property {string} TransmissionOilTemperature.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TransmissionOilTemperature : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Transmission Oil Temperature
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionOilTemperature.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TransmissionOilTemperature', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionOilTemperature.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TransmissionOilTemperature', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Transmission Oil Temperature.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionOilTemperature.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TransmissionOilTemperature', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TransmissionOilTemperature.type
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
         * Transmission Oil Wear, measured in Percentage.
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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TransmissionOilWear.min        - Minimum value ( 0 )
         * @property {number} TransmissionOilWear.max        - Maximum value ( 100 )
         * @property {number} TransmissionOilWear.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} TransmissionOilWear.precision  - Decimals of precision reported ( 0 )
         * @property {string} TransmissionOilWear.unit       - Unit of measure ( "Percentage" )
         * @property {string} TransmissionOilWear.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TransmissionOilWear : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Transmission Oil Wear
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionOilWear.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TransmissionOilWear', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionOilWear.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TransmissionOilWear', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Transmission Oil Wear.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TransmissionOilWear.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TransmissionOilWear', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TransmissionOilWear.type
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
         * Trip Meter 1 Average Speed, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TripMeter1AverageSpeed.min        - Minimum value ( 0 )
         * @property {number} TripMeter1AverageSpeed.max        - Maximum value ( 255 )
         * @property {number} TripMeter1AverageSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} TripMeter1AverageSpeed.precision  - Decimals of precision reported ( 2 )
         * @property {string} TripMeter1AverageSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} TripMeter1AverageSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TripMeter1AverageSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trip Meter 1 Average Speed
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1AverageSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TripMeter1AverageSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1AverageSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TripMeter1AverageSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trip Meter 1 Average Speed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1AverageSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TripMeter1AverageSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TripMeter1AverageSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 0.01,
            precision: 2,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Trip Meter 1 Distance, measured in Kilometer.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>429496729.5</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometer</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TripMeter1Distance.min        - Minimum value ( 0 )
         * @property {number} TripMeter1Distance.max        - Maximum value ( 429496729.5 )
         * @property {number} TripMeter1Distance.resolution - Minimum amount of change in unit measure ( 0.1 )
         * @property {number} TripMeter1Distance.precision  - Decimals of precision reported ( 1 )
         * @property {string} TripMeter1Distance.unit       - Unit of measure ( "Kilometer" )
         * @property {string} TripMeter1Distance.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TripMeter1Distance : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trip Meter 1 Distance
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1Distance.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TripMeter1Distance', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1Distance.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TripMeter1Distance', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trip Meter 1 Distance.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1Distance.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TripMeter1Distance', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TripMeter1Distance.type
             */
            type: "number",
            min: 0,
            max: 429496729.5,
            resolution: 0.1,
            precision: 1,
            unit: 'Kilometer'
        },
        /**
         * @description
         * Trip Meter 1 Fuel Consumption, measured in Kilometers Per Liter.
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
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Liter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TripMeter1FuelConsumption.min        - Minimum value ( 0 )
         * @property {number} TripMeter1FuelConsumption.max        - Maximum value ( 655.35 )
         * @property {number} TripMeter1FuelConsumption.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} TripMeter1FuelConsumption.precision  - Decimals of precision reported ( 2 )
         * @property {string} TripMeter1FuelConsumption.unit       - Unit of measure ( "Kilometers Per Liter" )
         * @property {string} TripMeter1FuelConsumption.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TripMeter1FuelConsumption : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trip Meter 1 Fuel Consumption
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1FuelConsumption.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TripMeter1FuelConsumption', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1FuelConsumption.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TripMeter1FuelConsumption', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trip Meter 1 Fuel Consumption.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter1FuelConsumption.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TripMeter1FuelConsumption', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TripMeter1FuelConsumption.type
             */
            type: "number",
            min: 0,
            max: 655.35,
            resolution: 0.01,
            precision: 2,
            unit: 'Kilometers Per Liter'
        },
        /**
         * @description
         * Trip Meter 2 Average Speed, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>255</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.01</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Hour</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TripMeter2AverageSpeed.min        - Minimum value ( 0 )
         * @property {number} TripMeter2AverageSpeed.max        - Maximum value ( 255 )
         * @property {number} TripMeter2AverageSpeed.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} TripMeter2AverageSpeed.precision  - Decimals of precision reported ( 2 )
         * @property {string} TripMeter2AverageSpeed.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} TripMeter2AverageSpeed.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TripMeter2AverageSpeed : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trip Meter 2 Average Speed
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2AverageSpeed.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TripMeter2AverageSpeed', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2AverageSpeed.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TripMeter2AverageSpeed', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trip Meter 2 Average Speed.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2AverageSpeed.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TripMeter2AverageSpeed', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TripMeter2AverageSpeed.type
             */
            type: "number",
            min: 0,
            max: 255,
            resolution: 0.01,
            precision: 2,
            unit: 'Kilometers Per Hour'
        },
        /**
         * @description
         * Trip Meter 2 Distance, measured in Kilometer.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>429496729.5</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>1</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometer</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TripMeter2Distance.min        - Minimum value ( 0 )
         * @property {number} TripMeter2Distance.max        - Maximum value ( 429496729.5 )
         * @property {number} TripMeter2Distance.resolution - Minimum amount of change in unit measure ( 0.1 )
         * @property {number} TripMeter2Distance.precision  - Decimals of precision reported ( 1 )
         * @property {string} TripMeter2Distance.unit       - Unit of measure ( "Kilometer" )
         * @property {string} TripMeter2Distance.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TripMeter2Distance : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trip Meter 2 Distance
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2Distance.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TripMeter2Distance', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2Distance.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TripMeter2Distance', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trip Meter 2 Distance.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2Distance.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TripMeter2Distance', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TripMeter2Distance.type
             */
            type: "number",
            min: 0,
            max: 429496729.5,
            resolution: 0.1,
            precision: 1,
            unit: 'Kilometer'
        },
        /**
         * @description
         * Trip Meter 2 Fuel Consumption, measured in Kilometers Per Liter.
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
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Kilometers Per Liter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} TripMeter2FuelConsumption.min        - Minimum value ( 0 )
         * @property {number} TripMeter2FuelConsumption.max        - Maximum value ( 655.35 )
         * @property {number} TripMeter2FuelConsumption.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} TripMeter2FuelConsumption.precision  - Decimals of precision reported ( 2 )
         * @property {string} TripMeter2FuelConsumption.unit       - Unit of measure ( "Kilometers Per Liter" )
         * @property {string} TripMeter2FuelConsumption.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        TripMeter2FuelConsumption : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trip Meter 2 Fuel Consumption
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2FuelConsumption.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TripMeter2FuelConsumption', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2FuelConsumption.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TripMeter2FuelConsumption', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trip Meter 2 Fuel Consumption.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TripMeter2FuelConsumption.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TripMeter2FuelConsumption', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} TripMeter2FuelConsumption.type
             */
            type: "number",
            min: 0,
            max: 655.35,
            resolution: 0.01,
            precision: 2,
            unit: 'Kilometers Per Liter'
        },
        /**
         * @description
         * Trunk Deck, expressed as state values
         * 
         * <br/>Category: Driver Safety


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OPEN</td><td>1</td></tr>
         * <tr><td>states.CLOSED</td><td>2</td></tr>
         * <tr><td>states.AJAR</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TrunkDeck.states {object} Property object of possible value states
         *       @property {number} [TrunkDeck.states.OPEN=1]
         *       @property {number} [TrunkDeck.states.CLOSED=2]
         *       @property {number} [TrunkDeck.states.AJAR=3]
         *

         *
         */
        TrunkDeck : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trunk Deck
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TrunkDeck.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TrunkDeck', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TrunkDeck.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TrunkDeck', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trunk Deck.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TrunkDeck.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TrunkDeck', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TrunkDeck.type
             */
            type: "object",
            states : {
                OPEN: 1,
                CLOSED: 2,
                AJAR: 3
            }
        },
        /**
         * @description
         * Value is true if Trunk Locked
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        TrunkLocked : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Trunk Locked
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TrunkLocked.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TrunkLocked', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TrunkLocked.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TrunkLocked', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Trunk Locked.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TrunkLocked.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TrunkLocked', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} TrunkLocked.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Turn Indicator Status, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.RIGHT</td><td>1</td></tr>
         * <tr><td>states.LEFT</td><td>2</td></tr>
         * <tr><td>states.HAZARD_ON</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property TurnIndicatorStatus.states {object} Property object of possible value states
         *       @property {number} [TurnIndicatorStatus.states.OFF=0]
         *       @property {number} [TurnIndicatorStatus.states.RIGHT=1]
         *       @property {number} [TurnIndicatorStatus.states.LEFT=2]
         *       @property {number} [TurnIndicatorStatus.states.HAZARD_ON=3]
         *

         *
         */
        TurnIndicatorStatus : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Turn Indicator Status
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TurnIndicatorStatus.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('TurnIndicatorStatus', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TurnIndicatorStatus.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('TurnIndicatorStatus', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Turn Indicator Status.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function TurnIndicatorStatus.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('TurnIndicatorStatus', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} TurnIndicatorStatus.type
             */
            type: "object",
            states : {
                OFF: 0,
                RIGHT: 1,
                LEFT: 2,
                HAZARD_ON: 3
            }
        },
        /**
         * @description
         * Vehicle Brand or Make, expressed as a string
         * 
         * <br/>Category: Configuration and Identification



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        VehicleBrandOrMake : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Brand or Make
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleBrandOrMake.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleBrandOrMake', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleBrandOrMake.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleBrandOrMake', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Brand or Make.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleBrandOrMake.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleBrandOrMake', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "string" )
             * @property {string} VehicleBrandOrMake.type
             */
            type: "string"
        },
        /**
         * @description
         * Vehicle Height, measured in Meter.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VehicleHeight.min        - Minimum value ( 0 )
         * @property {number} VehicleHeight.max        - Maximum value ( 65.535 )
         * @property {number} VehicleHeight.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} VehicleHeight.precision  - Decimals of precision reported ( 2 )
         * @property {string} VehicleHeight.unit       - Unit of measure ( "Meter" )
         * @property {string} VehicleHeight.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleHeight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Height
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleHeight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleHeight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleHeight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleHeight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Height.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleHeight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleHeight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleHeight.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 2,
            unit: 'Meter'
        },
        /**
         * @description
         * Vehicle Identification Number, expressed as a string
         * 
         * <br/>Category: Configuration and Identification



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        VehicleIdentificationNumber : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Identification Number
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleIdentificationNumber.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleIdentificationNumber', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleIdentificationNumber.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleIdentificationNumber', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Identification Number.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleIdentificationNumber.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleIdentificationNumber', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "string" )
             * @property {string} VehicleIdentificationNumber.type
             */
            type: "string"
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

         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Vehicle Length, measured in Meter.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VehicleLength.min        - Minimum value ( 0 )
         * @property {number} VehicleLength.max        - Maximum value ( 65.535 )
         * @property {number} VehicleLength.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} VehicleLength.precision  - Decimals of precision reported ( 2 )
         * @property {string} VehicleLength.unit       - Unit of measure ( "Meter" )
         * @property {string} VehicleLength.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleLength : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Length
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleLength.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleLength', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleLength.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleLength', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Length.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleLength.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleLength', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleLength.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 2,
            unit: 'Meter'
        },
        /**
         * @description
         * Vehicle Model, expressed as a string
         * 
         * <br/>Category: Configuration and Identification



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        VehicleModel : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Model
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleModel.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleModel', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleModel.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleModel', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Model.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleModel.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleModel', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "string" )
             * @property {string} VehicleModel.type
             */
            type: "string"
        },
        /**
         * @description
         * Vehicle Model Year, measured in Year.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>2000</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>2100</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Year</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VehicleModelYear.min        - Minimum value ( 2000 )
         * @property {number} VehicleModelYear.max        - Maximum value ( 2100 )
         * @property {number} VehicleModelYear.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} VehicleModelYear.precision  - Decimals of precision reported ( 0 )
         * @property {string} VehicleModelYear.unit       - Unit of measure ( "Year" )
         * @property {string} VehicleModelYear.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleModelYear : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Model Year
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleModelYear.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleModelYear', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleModelYear.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleModelYear', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Model Year.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleModelYear.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleModelYear', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleModelYear.type
             */
            type: "number",
            min: 2000,
            max: 2100,
            resolution: 1,
            precision: 0,
            unit: 'Year'
        },
        /**
         * @description
         * Vehicle Power Mode, expressed as state values
         * 
         * <br/>Category: Running Status


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.OFF</td><td>0</td></tr>
         * <tr><td>states.ACCESSORY_1</td><td>1</td></tr>
         * <tr><td>states.ACCESSORY_2</td><td>2</td></tr>
         * <tr><td>states.RUNNING</td><td>3</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property VehiclePowerMode.states {object} Property object of possible value states
         *       @property {number} [VehiclePowerMode.states.OFF=0]
         *       @property {number} [VehiclePowerMode.states.ACCESSORY_1=1]
         *       @property {number} [VehiclePowerMode.states.ACCESSORY_2=2]
         *       @property {number} [VehiclePowerMode.states.RUNNING=3]
         *

         *
         */
        VehiclePowerMode : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Power Mode
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehiclePowerMode.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehiclePowerMode', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehiclePowerMode.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehiclePowerMode', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Power Mode.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehiclePowerMode.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehiclePowerMode', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} VehiclePowerMode.type
             */
            type: "object",
            states : {
                OFF: 0,
                ACCESSORY_1: 1,
                ACCESSORY_2: 2,
                RUNNING: 3
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Vehicle Time Since Restart, measured in Second.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Second</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VehicleTimeSinceRestart.min        - Minimum value ( 0 )
         * @property {number} VehicleTimeSinceRestart.max        - Maximum value ( 65535 )
         * @property {number} VehicleTimeSinceRestart.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} VehicleTimeSinceRestart.precision  - Decimals of precision reported ( 0 )
         * @property {string} VehicleTimeSinceRestart.unit       - Unit of measure ( "Second" )
         * @property {string} VehicleTimeSinceRestart.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleTimeSinceRestart : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Time Since Restart
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleTimeSinceRestart.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleTimeSinceRestart', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleTimeSinceRestart.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleTimeSinceRestart', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Time Since Restart.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleTimeSinceRestart.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleTimeSinceRestart', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleTimeSinceRestart.type
             */
            type: "number",
            min: 0,
            max: 65535,
            resolution: 1,
            precision: 0,
            unit: 'Second'
        },
        /**
         * @description
         * Vehicle Top Speed Limit, measured in Kilometers Per Hour.
         * 
         * <br/>Category: Driver Safety

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


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VehicleTopSpeedLimit.min        - Minimum value ( 0 )
         * @property {number} VehicleTopSpeedLimit.max        - Maximum value ( 655.35 )
         * @property {number} VehicleTopSpeedLimit.resolution - Minimum amount of change in unit measure ( 0.01 )
         * @property {number} VehicleTopSpeedLimit.precision  - Decimals of precision reported ( 2 )
         * @property {string} VehicleTopSpeedLimit.unit       - Unit of measure ( "Kilometers Per Hour" )
         * @property {string} VehicleTopSpeedLimit.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleTopSpeedLimit : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Top Speed Limit
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleTopSpeedLimit.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleTopSpeedLimit', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleTopSpeedLimit.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleTopSpeedLimit', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Top Speed Limit.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleTopSpeedLimit.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleTopSpeedLimit', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleTopSpeedLimit.type
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
         * Vehicle Type, expressed as state values
         * 
         * <br/>Category: Configuration and Identification


         * <table>
         * <caption>States Properties</caption>
         * <thead><th>name</th><th>value</th></thead>
         * <tbody>
         * <tr><td>states.PASSENGER_CAR_MINI</td><td>0</td></tr>
         * <tr><td>states.PASSENGER_CAR_LIGHT</td><td>1</td></tr>
         * <tr><td>states.PASSENGER_CAR_COMPACT</td><td>2</td></tr>
         * <tr><td>states.PASSENGER_CAR_MEDIUM</td><td>3</td></tr>
         * <tr><td>states.PASSENGER_CAR_HEAVY</td><td>4</td></tr>
         * <tr><td>states.SPORT_UTILITY_VEHICLE</td><td>5</td></tr>
         * <tr><td>states.PICKUP_TRUCK</td><td>6</td></tr>
         * <tr><td>states.VAN</td><td>7</td></tr>
         * </tbody>
         * </table>

         * @memberof! oxygen/TelematicsAPI2#
         * @property VehicleType.states {object} Property object of possible value states
         *       @property {number} [VehicleType.states.PASSENGER_CAR_MINI=0]
         *       @property {number} [VehicleType.states.PASSENGER_CAR_LIGHT=1]
         *       @property {number} [VehicleType.states.PASSENGER_CAR_COMPACT=2]
         *       @property {number} [VehicleType.states.PASSENGER_CAR_MEDIUM=3]
         *       @property {number} [VehicleType.states.PASSENGER_CAR_HEAVY=4]
         *       @property {number} [VehicleType.states.SPORT_UTILITY_VEHICLE=5]
         *       @property {number} [VehicleType.states.PICKUP_TRUCK=6]
         *       @property {number} [VehicleType.states.VAN=7]
         *

         *
         */
        VehicleType : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Type
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleType.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleType', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleType.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleType', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Type.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleType.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleType', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} VehicleType.type
             */
            type: "object",
            states : {
                PASSENGER_CAR_MINI: 0,
                PASSENGER_CAR_LIGHT: 1,
                PASSENGER_CAR_COMPACT: 2,
                PASSENGER_CAR_MEDIUM: 3,
                PASSENGER_CAR_HEAVY: 4,
                SPORT_UTILITY_VEHICLE: 5,
                PICKUP_TRUCK: 6,
                VAN: 7
            }
        },
        /**
         * @description
         * Vehicle Width, measured in Meter.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>2</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} VehicleWidth.min        - Minimum value ( 0 )
         * @property {number} VehicleWidth.max        - Maximum value ( 65.535 )
         * @property {number} VehicleWidth.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} VehicleWidth.precision  - Decimals of precision reported ( 2 )
         * @property {string} VehicleWidth.unit       - Unit of measure ( "Meter" )
         * @property {string} VehicleWidth.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        VehicleWidth : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Vehicle Width
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleWidth.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('VehicleWidth', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleWidth.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('VehicleWidth', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Vehicle Width.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function VehicleWidth.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('VehicleWidth', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} VehicleWidth.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 2,
            unit: 'Meter'
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Washer Fluid Level Low, expressed as state values
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

         * @memberof! oxygen/TelematicsAPI2#
         * @property WasherFluidLevelLow.states {object} Property object of possible value states
         *       @property {number} [WasherFluidLevelLow.states.NOT_LOW=0]
         *       @property {number} [WasherFluidLevelLow.states.LOW=1]
         *       @property {number} [WasherFluidLevelLow.states.ERROR=2]
         *

         *
         */
        WasherFluidLevelLow : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Washer Fluid Level Low
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WasherFluidLevelLow.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WasherFluidLevelLow', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WasherFluidLevelLow.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WasherFluidLevelLow', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Washer Fluid Level Low.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with State Object value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WasherFluidLevelLow.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WasherFluidLevelLow', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "object" )
             * @property {string} WasherFluidLevelLow.type
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
         * Wheel Radius, measured in Meter.
         * 
         * <br/>Category: Configuration and Identification

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>65.535</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>0.001</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>3</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Meter</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} WheelRadius.min        - Minimum value ( 0 )
         * @property {number} WheelRadius.max        - Maximum value ( 65.535 )
         * @property {number} WheelRadius.resolution - Minimum amount of change in unit measure ( 0.001 )
         * @property {number} WheelRadius.precision  - Decimals of precision reported ( 3 )
         * @property {string} WheelRadius.unit       - Unit of measure ( "Meter" )
         * @property {string} WheelRadius.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        WheelRadius : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Wheel Radius
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WheelRadius.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WheelRadius', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WheelRadius.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WheelRadius', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Wheel Radius.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WheelRadius.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WheelRadius', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} WheelRadius.type
             */
            type: "number",
            min: 0,
            max: 65.535,
            resolution: 0.001,
            precision: 3,
            unit: 'Meter'
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
         * Wheel Tick, measured in Count.
         * 
         * <br/>Category: Running Status

         * <table>
         * <caption>Properties</caption>
         * <thead><th>type</th><th>name</th><th>description</th><th>value</th></thead>
         * <tbody>
         * <tr><td>number</td><td>min</td><td>Minimum value</td><td>0</td></tr>
         * <tr><td>number</td><td>max</td><td>Maximum value</td><td>4294967295</td></tr>
         * <tr><td>number</td><td>resolution</td><td>Minimum amount of change in unit measure</td><td>1</td></tr>
         * <tr><td>number</td><td>precision</td><td>Decimals of precision reported</td><td>0</td></tr>
         * <tr><td>string</td><td>unit</td><td>Unit of measure</td><td>Count</td></tr>
         * <tr><td>string</td><td>type</td><td>JavaScript type for the returned value</td><td>number</td></tr>
         * </tbody>
         * </table>


         * @memberof! oxygen/TelematicsAPI2#
         * @property {number} WheelTick.min        - Minimum value ( 0 )
         * @property {number} WheelTick.max        - Maximum value ( 4294967295 )
         * @property {number} WheelTick.resolution - Minimum amount of change in unit measure ( 1 )
         * @property {number} WheelTick.precision  - Decimals of precision reported ( 0 )
         * @property {string} WheelTick.unit       - Unit of measure ( "Count" )
         * @property {string} WheelTick.type - JavaScript type for the returned value ( "number" )
         *

         *
         */
        WheelTick : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Wheel Tick
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WheelTick.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WheelTick', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WheelTick.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WheelTick', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Wheel Tick.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Number value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WheelTick.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WheelTick', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "number" )
             * @property {string} WheelTick.type
             */
            type: "number",
            min: 0,
            max: 4294967295,
            resolution: 1,
            precision: 0,
            unit: 'Count'
        },
        /**
         * @description
         * Value is true if Window Locked Driver
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        WindowLockedDriver : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Window Locked Driver
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedDriver.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WindowLockedDriver', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedDriver.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WindowLockedDriver', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Window Locked Driver.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedDriver.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WindowLockedDriver', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} WindowLockedDriver.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Window Locked Passenger
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        WindowLockedPassenger : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Window Locked Passenger
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedPassenger.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WindowLockedPassenger', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedPassenger.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WindowLockedPassenger', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Window Locked Passenger.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedPassenger.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WindowLockedPassenger', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} WindowLockedPassenger.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Window Locked Rear Left
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        WindowLockedRearLeft : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Window Locked Rear Left
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedRearLeft.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WindowLockedRearLeft', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedRearLeft.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WindowLockedRearLeft', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Window Locked Rear Left.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedRearLeft.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WindowLockedRearLeft', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} WindowLockedRearLeft.type
             */
            type: "boolean"
        },
        /**
         * @description
         * Value is true if Window Locked Rear Right
         * 
         * <br/>Category: Driver Safety



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        WindowLockedRearRight : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for Window Locked Rear Right
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedRearRight.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WindowLockedRearRight', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedRearRight.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WindowLockedRearRight', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for Window Locked Rear Right.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with Boolean value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WindowLockedRearRight.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WindowLockedRearRight', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "boolean" )
             * @property {string} WindowLockedRearRight.type
             */
            type: "boolean"
        },
        /**
         * @description
         * World Manufacturer Identifier, expressed as a string
         * 
         * <br/>Category: Configuration and Identification



         * @memberof! oxygen/TelematicsAPI2#
         *

         *
         */
        WorldManufacturerIdentifier : {
            /**
             * Subscribes to the signal and calls the provided callback to receive updated values for World Manufacturer Identifier
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WorldManufacturerIdentifier.subscribe
             */
            subscribe : function(callbackFn) {
                subscribeSignal('WorldManufacturerIdentifier', callbackFn);
            },
            /**
             * Removes a previous subscribed callback for this signal
             *
             * @param callbackFn    {Function} Callback which has been subscribed for this signal
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WorldManufacturerIdentifier.unsubscribe
             */
            unsubscribe : function(callbackFn) {
                unsubscribeSignal('WorldManufacturerIdentifier', callbackFn);
            },
            /**
             * Subscribes to the signal one time only and calls the provided callback to receive updated values for World Manufacturer Identifier.
             * The subscription is automatically unsubscribed after the callback is made.
             *
             * @param callbackFn    {Function} Callback called with String value
             *
             * @memberof! oxygen/TelematicsAPI2#
             * @function WorldManufacturerIdentifier.subscribeOnce
             */
            subscribeOnce : function(callbackFn) {
                subscribeSignalOnce('WorldManufacturerIdentifier', callbackFn);
            },

            /**
             * @description JavaScript type for the returned value ( "string" )
             * @property {string} WorldManufacturerIdentifier.type
             */
            type: "string"
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


         * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
             * @memberof! oxygen/TelematicsAPI2#
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
