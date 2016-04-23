/**
 * Template file for SDK user adjustable settings.
 *
 * Many aspects of the SDK platform are configurable. These settings are "system settings" and would be configured
 * specifically for the context in which the host platform was deployed.
 * All of these items have default values.  To experiment with what the effect of other configured
 * options might be within the SDK, this override file is available.
 *
 * This file initially has all values commented out, and thus the default values as defined by the SDK distribution
 * will be used for each of these commented out items.  Do not assume that the value shown in the comment is the
 * actual default value, as this may be somewhat different per SDK distribution context and version.
 *
 * To override any of these config property values to create your own installation context,
 * remove the comment notation and supply your own value for that property.
 */
define(function(require) {
    'use strict';

    var LogLevel        = require('common/LogLevel'),
        Http            = require('common/Http'),
        ObjectUtils     = require('common/ObjectUtils'),
        PlatformConfig  = require('common/PlatformConfig');

    var UserConfig =  {
        /**
         * Returns the current locale code. Locale codes are in the "alpha-2" (ISO-639-1) format for language,
         * or "alpha-3" (ISO-639-2) if necessary, optionally followed by a dash and the "alpha-2" (ISO-3166-1)
         * format for country code (or the "alpha-3" version if necessary) to indicate a regional geographic
         * variant to the given language.
         *
         * Changing the locale will also affect platform settings that linked to within
         * the localeSettings.json files within the i8n folders
         *
         * @memberOf module:common/Config
         * @type {string}
         * @default "en"
         */
//        locale : 'en',
        /**
         * Toggles whether or not to colorize the logging output to the console in browsers that support it.
         *
         * @memberOf module:common/Config
         * @type {boolean}
         */
//        colorizeConsole : true,
        /**
         * Toggles whether the logging functions defined in the oc namespace are extended to include a stack trace.
         *
         * @memberOf module:common/Config
         * @type {boolean}
         */
//        logStackTracesToConsole : true,
        /**
         * Minimum log level to send to the browser's console. Only log messages at or above this log level will appear
         * in the browser's JavaScript console window.
         *
         * @memberOf module:common/Config
         * @type {module:common/LogLevel}
         * @default {module:common/LogLevel.DEBUG}
         */
//        consoleLogLevel : LogLevel.DEBUG,
        /**
         * Minimum log level to send to the server. Only log messages at or above this log level will be sent to the
         * Xeno server for processing.
         *
         * @memberOf module:common/Config
         * @type {module:common/LogLevel}
         * @default {module:common/LogLevel.DEBUG}
         */
//        serverLogLevel : LogLevel.DEBUG,
        /**
         * If set, this css string is applied to the timestamp for debug messages.
         *
         * @memberOf module:common/Config
         * @type    {string}
         * @default 'background: #e6e8ea; color: #000'
         */
//        customDebugLogCss : undefined,
        /**
         * Enables a pink outline and background color for the currently focused control
         *
         * @memberOf module:common/Config
         * @type {boolean}
         * @default false
         */
//        enableFocusDebugBoundingBox : false,
        /**
         * Enables a yellow outline and background color for all entities that are focusable
         *
         * @memberOf module:common/Config
         * @type {boolean}
         * @default false
         */
//        enableFocusableIndicator : false,
        /**
         * Outputs to the console the element being focused as focus changes occur.
         *
         * @memberOf module:common/Config
         * @type {boolean}
         * @default false
         */
//        enableFocusDebugOutput : false,
        /**
         * Mapping of keyboard keyCode values to MCDEvent types.  This allows the developer to bind custom keys
         * to send commander events (ie, MCDEvent.EventType.Joystick.UP).
         *
         * @memberOf module:common/Config
         *
         * @property {object}       Wheel           Key mappings for the Wheel events.
         * @property {number[]}     Wheel.FORWARD   Array of key codes bound to Wheel.FORWARD. Defaults to [ 39, 40 ] (right arrow, down arrow)
         * @property {number[]}     Wheel.BACK      Array of key codes bound to Wheel.BACK. Defaults to [ 37, 38 ] (left arrow, up arrow)
         *
         * @property {object}       Joystick        Key mappings for joystick events.
         * @property {number[]}     Joystick.UP     Array of key codes bound to Joystick.UP. Defaults to [ 104, 87, 73 ] (keypad 8, w, i)
         * @property {number[]}     Joystick.DOWN   Array of key codes bound to Joystick.DOWN. Defaults to [ 98, 83, 188, 77 ] (keypad 2, s, comma, m)
         * @property {number[]}     Joystick.LEFT   Array of key codes bound to Joystick.LEFT.  Defaults to [ 100, 65, 74 ] (keypad 4, a, j)
         * @property {number[]}     Joystick.RIGHT  Array of key codes bound to Joystick.RIGHT.  Defaults to [ 102, 68, 76 ] (keypad 6, d, l)
         * @property {number[]}     Joystick.FIRE   Array of key codes bound to Joystick.FIRE. Defaults to [ 101, 13, 75 ] (keypad 5, enter, k)
         *
         * @property {number[]}     HOME            Array of key codes bound to the HOME button.  Defaults to [ 36, 123 ] (home, f12)
         * @property {number[]}     BACK            Array of key codes bound to the BACK button. Defaults to [ 8, 192 ] (backspace, backtick / grave accent)
         */
//        MCDKeyCodes : {
//            Wheel : {
//                FORWARD : [
//                    39,                     // right arrow
//                    40                      // down arrow
//                ],
//                BACK : [
//                    37,                     // left arrow
//                    38                      // up arrow
//                ]
//            },
//            Joystick : {
//                UP     : [
//                    104,                    // keypad 8
//                    87,                     // w
//                    73                      // i
//                ],
//                DOWN   : [
//                    98,                     // keypad 2
//                    83,                     // s
//                    188,                    // comma
//                    77                      // m
//                ],
//                LEFT   : [
//                    100,                    // keypad 4
//                    65,                     // a
//                    74                      // j
//                ],
//                RIGHT  : [
//                    102,                    // keypad 6
//                    68,                     // d
//                    76                      // l
//                ],
//                FIRE   : [
//                    101,                    // keypad 5
//                    13,                     // enter
//                    75                      // k
//                ]
//            },
//            HOME    : [
//                36,                         // home
//                123                         // f12
//            ],
//            BACK    : [
//                8,                          // Backspace (Note: Trapped by browser!)
//                192                         // Backtick [`] (grave accent)
//            ]
//        },

        userConfigLoaded: true
    };

    return UserConfig;
});
