///////////////////////////////////////
//
// Canvas Stopwatch
//
// Uses the HTML canvas element to draw a stopwatch. This module instantiates the 
// various components to build the stopwatch (hands, face, body) and calls their
// respective draw functions to paint the clock.
//
// NOTE: While this produces a realistic effect, it violates the OpenCar concept of
// using OpenCar controls to build the app. The OpenCar controls can respond to a
// variety of styling profiles, whereas the canvas stopwatch cannot.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
//    var Point       = require('$MODULE_PATH/canvas-clock/Point');
    var ClockHand   = require('$MODULE_PATH/canvas-clock/ClockHand');
    var ClockBezel  = require('$MODULE_PATH/canvas-clock/ClockBezel');
    var StopwatchFace   = require('$MODULE_PATH/canvas-clock/StopwatchFace');
    var StopwatchCore   = require('$MODULE_PATH/canvas-clock/StopwatchCore');
    
    var CanvasStopwatch = Class.create(
        {
            initialize: function( htmlCanvas ) {
                
                // Remember the canvas and get the drawing context.

                this.canvas = htmlCanvas;
                this.context = htmlCanvas.getContext("2d");

                // Set colors.

                this.HAND_COLOR = "rgb(241,241,216)";
                this.SECOND_HAND_COLOR = "rgb(234,234,198)";
                this.FACE_COLOR = "rgba(248,242,205,0.8)";
                                
                // Grab the components for the stopwatch.

                this.stopwatchFace = new StopwatchFace( htmlCanvas, this.HAND_COLOR );
                this.stopwatchFace.configure( { color: this.FACE_COLOR } );
               
                this.clockBezel = new ClockBezel( htmlCanvas );

                // Hands are sized relative to the canvas size, this is subjective
                // and determined experimentally.
                //
                this.secondHand = new ClockHand( htmlCanvas );
                this.secondHand.configure( {
                        length: htmlCanvas.width * 0.37,
                        width:  htmlCanvas.width * 0.010,
                        color:  this.SECOND_HAND_COLOR,
                        type:   "second",
                        style:  "straight"
                    });
                
                this.minuteHand = new ClockHand( htmlCanvas );
                this.minuteHand.configure( {
                        length: htmlCanvas.width * 0.32,
                        width:  htmlCanvas.width * 0.02,
                        color:  this.HAND_COLOR,
                        type:   "minute",
                        style:  "heuer-minute"
                    });
     
                // The stopwatch core powers the stopwatch. Specifying an update every
                // 200ms produces a perceptible tick motion.
                
                var precision = 200;    // update second hand every 200ms
                this.stopwatchCore = new StopwatchCore( this._draw.bind( this ), precision );

                this.reset();
            },

            // Clear the canvas then redraw the components in the proper order. For some
            // clock depictions, the clock bezel and body may have some ornaments that
            // must be drawn after the hands are positioned so it is split into "pre" and
            // "post" portions. The hands are provided the elapsed time for positioning.
            //                    
            _draw: function( time ) {
 
                var hours = time.hours,
                    minutes = time.minutes,
                    seconds = time.seconds,
                    milliseconds = time.milliseconds;

                this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );

                this.clockBezel.drawPre();
                this.stopwatchFace.draw();
                this.minuteHand.draw( hours, minutes, seconds, milliseconds );
                this.secondHand.draw( hours, minutes, seconds, milliseconds );
                this.clockBezel.drawPost();
            },
            
            // Wrappers for the stopwatch core.
            //
            start: function() {
                this.stopwatchCore.start();
            },
            
            stop: function() {
                this.stopwatchCore.stop();
            },
            
            reset: function() {
                this.stopwatchCore.reset();
                this._draw( { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 } );
            }
        }
    );

    return CanvasStopwatch;
});
