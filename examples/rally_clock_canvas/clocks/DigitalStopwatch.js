///////////////////////////////////////
//
// Digital Stopwatch
//
// Creates an OpenCar element for a digital stopwatch class, and appends it to the
// container provided. 
//
// Call constructor with config parameters:
//      {
//          hours:      true | false,       // show hours or not
//          decimal:    0 | 10 | 100        // decimal portion of seconds to show
//      }
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        TextView    = require('common/ui/TextView'),
        StopwatchCore   = require('$MODULE_PATH/clocks/lib/StopwatchCore');
        
    var DigitalStopwatch = Class.create(
        {
            initialize: function( container, config ) {
                
                // Can optionally show hours; the fractional portion for seconds can 
                // be optionally shown as tenths, hundredths, or not at all.

                this.options = {
                    hours: true,
                    decimal: 10                 // tenths, hundredths, or none
                };

                if( config && typeof config.hours != "undefined" ) {
                    this.options.hours = config.hours;
                }

                if( config && typeof config.decimal != "undefined" ) {
                    if( config.decimal === 0 || config.decimal === 10 || config.decimal === 100 ) {
                        this.options.decimal = config.decimal;
                    }
                }

                // Create an OpenCar TextView control to hold the stopwatch display.
                
                this.txtDisplay = new TextView().render( container );
                
                // How frequently the timer mechanism should update is a function of
                // desired precision.
                
                var timerInterval;
                switch( this.options.decimal ) {
                    case 100:   timerInterval = 10;     break;
                    case 10:    timerInterval = 100;    break;
                    default:    timerInterval = 500;
                }

                // Instantiate the stopwatch mechanism.
                
                this.stopwatchCore = new StopwatchCore( this._updateDisplay.bind( this ), timerInterval );
                this.reset();
            },
           
            _zeroPad: function( number, length ) {
                number = number.toString();
                while (number.length < length) {
                    number = '0' + number;
                }

                return number;
            },

            // Callback invoked when the stopwatch updates. Format the contents of the
            // time object as appropriate for this display.
            //
            _updateDisplay: function( time ) {

                var timeStr = "";
                
                // Hours may or may not be displayed.
  
                if( this.options.hours ) {
                    timeStr += this._zeroPad( time.hours, 2 ) + ":";
                }

                timeStr += this._zeroPad( time.minutes, 2 ) + ":";
                timeStr += this._zeroPad( time.seconds, 2 );
                
                // The fractional portion for seconds can be optionally shown as tenths,
                // hundredths, or not at all.
                
                if( this.options.decimal === 100 ) {
                    timeStr += "." + this._zeroPad( Math.floor( time.milliseconds / 10 ), 2 );
                }
                else if( this.options.decimal === 10 ) {
                    timeStr += "." + Math.floor( time.milliseconds / 100 );
                }

                this.txtDisplay.model.set( 'text', timeStr );
            },

            // Resets the display. Hours are optional; the fractional portion for
            // seconds can be optionally shown as tenths, hundredths, or not at all.
            //
            _resetDisplay: function() {

                var timeStr = "";
                
                if( this.options.hours ) {
                    timeStr += "00:";
                }

                timeStr += "00:00";

                if( this.options.decimal === 100 ) {
                    timeStr += ".00";
                }
                else if( this.options.decimal === 10 ) {
                    timeStr += ".0";
                }

                this.txtDisplay.model.set( 'text', timeStr );
            },
            
            // Allows caller to retrieve the current value of the stopwatch.
            //
            getTimeString: function() {
                return this.txtDisplay.model.get( 'text' );
            },
            
            // Wrappers for the stopwatch core functionality.
            //
            start: function() {
                this.stopwatchCore.start();
            },

            stop: function() {
                this.stopwatchCore.stop();
            },

            isRunning: function() {
                return this.stopwatchCore.isRunning();
            },
            
            reset: function() {
                this.stopwatchCore.reset();
                this._resetDisplay();
            }
        }
    );

    return DigitalStopwatch;
});
