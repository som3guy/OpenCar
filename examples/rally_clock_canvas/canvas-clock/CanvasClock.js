///////////////////////////////////////
//
// Canvas Clock
//
// Uses the HTML canvas element to draw a clock. This module instantiates the various
// components to build the clock (hands, face, body) and calls their respective draw
// functions to paint the clock.
//
// NOTE: While this produces a realistic effect, it violates the OpenCar concept of
// using OpenCar controls to build the app. The OpenCar controls can respond to a
// variety of styling profiles, whereas the canvas clock cannot.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
//    var Point       = require('$MODULE_PATH/canvas-clock/Point');
    var ClockFace   = require('$MODULE_PATH/canvas-clock/ClockFace');
    var ClockHand   = require('$MODULE_PATH/canvas-clock/ClockHand');
    var ClockBezel  = require('$MODULE_PATH/canvas-clock/ClockBezel');
    
    var CanvasClock = Class.create(
        {
            initialize: function( htmlCanvas ) {
                
                // Remember the canvas and get the drawing context.
                //
                this.canvas = htmlCanvas;
                this.context = htmlCanvas.getContext("2d");

                this.HAND_COLOR = "rgb(241,241,216)";
                this.SECOND_HAND_COLOR = "rgb(234,234,198)";
                this.FACE_COLOR = "rgba(248,242,205,0.8)";
                                
                // Grab the components for the clock.
                //
                this.clockFace = new ClockFace( htmlCanvas );
                this.clockFace.configure( { color: this.FACE_COLOR } );
               
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
                        style:  "heuer-second"
                    });
                
                this.minuteHand = new ClockHand( htmlCanvas );
                this.minuteHand.configure( {
                        length: htmlCanvas.width * 0.37,
                        width:  htmlCanvas.width * 0.04,
                        color:  this.HAND_COLOR,
                        type:   "minute",
                        style:  "pointer"
                    });
                    
                this.hourHand = new ClockHand( htmlCanvas );
                this.hourHand.configure( {
                        length: htmlCanvas.width * 0.29,
                        width:  htmlCanvas.width * 0.055,
                        color:  this.HAND_COLOR,
                        type:   "hour",
                        style:  "pointer"
                    });
            },

            // Clear the canvas then redraw the components in the proper order. For some
            // clock depictions, the clock bezel and body may have some ornaments that
            // must be drawn after the hands are positioned so it is split into "pre" and
            // "post" portions. The hands are provided the current time for positioning.
            //
            _draw: function() {

                var time = new Date(),
                    hours = time.getHours(),
                    minutes = time.getMinutes(),
                    seconds = time.getSeconds(),
                    milliseconds = time.getMilliseconds();
 
                this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );

                this.clockBezel.drawPre();
                this.clockFace.draw();
                this.hourHand.draw( hours, minutes, seconds, milliseconds );
                this.minuteHand.draw( hours, minutes, seconds, milliseconds );
                this.secondHand.draw( hours, minutes, seconds, milliseconds );
                this.clockBezel.drawPost();
            },
            
            // Only function that needs to be exposed. In theory a "stop" could be
            // provided also.
            //
            start: function() {
                this._draw();
                this.clockInterval = setInterval( this._draw.bind( this ), 1000/5 );
            }
        }
    );

    return CanvasClock;
});
