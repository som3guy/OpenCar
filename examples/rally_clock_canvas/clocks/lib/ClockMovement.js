///////////////////////////////////////
//
// Clock Movement
//
// Uses the HTML canvas element to draw the clock movement. This module instantiates
// the hands and calls their respective draw functions to paint the clock movement.
// See "ClockHand.js" to understand how the clock hands are positioned and drawn.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ClockHand   = require('$MODULE_PATH/clocks/lib/ClockHand');
    
    var ClockMovement = Class.create(
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
                    
                this.hourHand = new ClockHand( htmlCanvas );
                this.hourHand.configure( {
                        length: htmlCanvas.width * 0.3,
                        width:  htmlCanvas.width * 0.04,
                        color:  "white",
                        type:   "hour",
                        style:  "straight"
                    });
            },

            // Clear the canvas and call the draw method for each hand. Hands draw
            // their position based on the system time.
            //                    
            _draw: function() {

                var time = new Date(),
                
                    hours = time.getHours(),
                    minutes = time.getMinutes(),
                    seconds = time.getSeconds(),
                    milliseconds = time.getMilliseconds();
                
                
                this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );

                this.hourHand.draw( hours, minutes, seconds, milliseconds );
                this.minuteHand.draw( hours, minutes, seconds, milliseconds );
                this.secondHand.draw( hours, minutes, seconds, milliseconds );
            },
            
            // Allows the color of the hands to be specified.
            //
            setHandColor: function( newColor ) {
            
                this.minuteHand.configure( { color: newColor } );
                this.hourHand.configure( { color: newColor } );
                this.secondHand.configure( { color: newColor } );
            },
            
            // Start the clock.
            //
            start: function() {
    
                this._draw();
                this.clockInterval = setInterval( this._draw.bind( this ), 1000/5 );
            }
        }
    );

    return ClockMovement;
});
