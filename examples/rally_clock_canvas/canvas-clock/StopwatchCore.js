///////////////////////////////////////
//
// Stopwatch Core
//
// Creates the timer mechanism to drive the stopwatches.
//
// The callback the constructor is instantiated with will be called with an object
// containing elapsed time values:
//
//      {   hours           : <value>,
//          minutes         : <value>,
//          seconds         : <value>,
//          milliseconds    : <value>
//      }
//
// The caller can determine how frequently the StopwatchCore updates the time by the
// value provided in the "precision" argument. This is the number of milliseconds
// between updating the elapsed time value.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');

    var StopwatchCore = Class.create(
        {
            initialize: function( callback, precision ) {
                
                if( !callback ) {
                    Log.error( "StopwatchCore() constructor requires a callback" );
                    return;
                }
                
                // Default is update every ten milliseconds.
                           
                if( !precision || precision < 10 ) {
                    this.precision = 10;
                }
                else {
                    this.precision = precision;
                }
                
                this.callback = callback;
                this.reset();
                this.running = false;
                
                this.MS_PER_MINUTE = 1000 * 60;
                this.MS_PER_HOUR = 1000 * 60 * 60;
            },
           
            // Called by the interval timer when the stopwatch is running.
            //
            calculateElapsedTime: function() {

                var deltaTime = Date.now() - this.startTime,
                    displayTime = this.elapsedTime + deltaTime,
                    time = {};
 
                time.hours = Math.floor( displayTime / this.MS_PER_HOUR );
                time.minutes = Math.floor( displayTime / this.MS_PER_MINUTE ) % 60;
                time.seconds = Math.floor( displayTime / 1000 ) % 60;
                time.milliseconds = Math.floor( displayTime % 1000 );
 
                this.callback( time );
            },

            // Starts the stopwatch.
            //
            start: function() {
                this.running = true;
                this.startTime = new Date();
                this.timerInterval = setInterval( this.calculateElapsedTime.bind( this ), this.precision );
            },
            
            // Stops the running stopwatch.
            //
            stop: function() {
                this.running = false;
                clearInterval( this.timerInterval );
                this.elapsedTime += Date.now() - this.startTime;
                this.startTime = 0;
            },

            // Resets the stopwatch.
            //
            reset: function() {
                this.elapsedTime = 0;
                this.startTime = Date.now();
            },
            
            // Allows caller to query state of timer.
            //
            isRunning: function() {
                return this.running;
            }
        }
    );

    return StopwatchCore;
});
