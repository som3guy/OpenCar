///////////////////////////////////////
//
// Stopwatch Movement
//
// Uses the HTML canvas element to draw the stopwatch movement. This module instantiates
// the hands and a timer core classes. The timer hands are redrawn based on timer values
// to paint the stopwatch movement on the canvas provided by the caller.
//
// See "ClockHand.js" to understand how the clock hands are positioned and drawn.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ClockHand   = require('$MODULE_PATH/clocks/lib/ClockHand'),
        StopwatchCore   = require('$MODULE_PATH/clocks/lib/StopwatchCore');
    
    var StopwatchMovement = Class.create(
        {
            initialize: function( htmlCanvas ) {
                
                // Remember the canvas and get the drawing context.

                this.canvas = htmlCanvas;
                this.context = htmlCanvas.getContext("2d");
                                
                // Hands are sized relative to the canvas size, this is subjective
                // and determined experimentally.

                this.secondHand = new ClockHand( htmlCanvas );
                this.secondHand.configure( {
                        length: htmlCanvas.width * 0.5,
                        width:  htmlCanvas.width * 0.015,
                        color:  "white",
                        type:   "second",
                        style:  "straight"
                    });
                
                this.minuteHand = new ClockHand( htmlCanvas );
                this.minuteHand.configure( {
                        length: htmlCanvas.width * 0.5,
                        width:  htmlCanvas.width * 0.03,
                        color:  "white",
                        type:   "minute",
                        style:  "straight"
                    });

                // The precision parameter determines how frequently the time value is
                // updated. Every 200 milliseconds gives a nice perceptible ticking of
                // the analog hand.
                
                var precision = 200;
                this.stopwatchCore = new StopwatchCore( this._updateDisplay.bind( this ), precision );
                this.reset();
            },

            // Clear the canvas and call the draw method for each hand. Hands draw
            // their position based on the time provided.
            //
            _updateDisplay: function( time ) {

                this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
                this.minuteHand.draw( time.hours, time.minutes, time.seconds, time.milliseconds );
                this.secondHand.draw( time.hours, time.minutes, time.seconds, time.milliseconds );
            },
            
            // Wrappers to start and stop the stopwatch.
            //
            start: function() {
                this.stopwatchCore.start();
            },

            stop: function() {
                this.stopwatchCore.stop();
            },

            // Resets the timer; reset the actual stopwatch timer and redraw the hands.
            
            reset: function() {
                
                this.stopwatchCore.reset();
                                
                this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
                this.minuteHand.draw( 0, 0, 0, 0 );
                this.secondHand.draw( 0, 0, 0, 0 );
            },

            // Allows the color of the hands to be specified.
            //
            setHandColor: function( newColor ) {
                this.minuteHand.configure( { color: newColor } );
                this.secondHand.configure( { color: newColor } );
            }
        }
    );

    return StopwatchMovement;
});
