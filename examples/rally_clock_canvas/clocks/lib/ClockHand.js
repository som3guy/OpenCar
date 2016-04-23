///////////////////////////////////////
//
// Clock Hand
//
// Returns a class that draws a clock hand of some configured style in the postion
// corresponding to the time provided.
//
// TO USE:
//
//      Call "configure( {...} )" to change default hand properties.
//          {   
//              length  : <length>,
//              width   : <width>,
//              color   : <color>,
//              type    : <"second" | "minute" | "hour">,
//              style   : <"straight" | "pointer">
//          }
//
//      Call "draw( hours, minutes, seconds, milliseconds )" to update the hand position.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
    
    var ClockHand = Class.create(
        {
            initialize: function( htmlCanvas ) {
                
                // Remember our canvas context for drawing and set defaults.

                this.context = htmlCanvas.getContext("2d");

                this.CENTER = { x : htmlCanvas.width/2, y : htmlCanvas.height/2 };

                this.settings = {
                    length:    100,
                    width:     4,
                    color:     "red",
                    type:      "second",
                    style:     "straight"
                };
            },

            // Simple interface to update hand configuration. Copy any valid properties
            // provided to the hand configuration.
            //
            configure: function( settings ) {
                
                var property;
                
                for( property in settings ) {
                    if( settings.hasOwnProperty( property )) {
                        if( this.settings.hasOwnProperty( property )) {
                            this.settings[property] = settings[property];
                        }
                    }
                }
            },
         
            // Used by draw function, could be local function. Should be private method.
            //
            _degreesToRadians: function( degrees ) {
                return (Math.PI / 180) * degrees;
            },

            // Draws a straight hand (e.g., the second hand), called from the general
            // draw method. It takes advantage of the fact that the canvas has been
            // rotated and can be drawn straight up. Should be considered private.
            //
            _drawStraightHand: function() {
            
                this.context.beginPath();
                this.context.moveTo( 0, 8 );
                this.context.lineTo( 0, -this.settings.length );
                this.context.lineWidth = this.settings.width;
                this.context.lineCap = "round";
                this.context.strokeStyle = this.settings.color;
                this.context.stroke();
            },
            
            // Draws a hand that's shaped a little like a necktie. Called from the
            // general draw method, it takes advantage of the fact that the canvas has
            // been rotated some number of degrees and can be drawn straight up. It
            // should be considered private.
            //
            _drawPointerHand: function( type ) {
                
                var widePoint = this.settings.length * 0.7,
                    handWidth = this.settings.width/2,
                    baseWidth = this.settings.width/4;
  
                // Hour hand proportions are slightly different from minute hand.

                if( type === "hour" ) {
                    widePoint = this.settings.length * 0.77;
                    baseWidth = this.settings.width/4.5;
                }
                
                this.context.beginPath();
                this.context.moveTo( 0, 0 );
                this.context.moveTo( -baseWidth, 0 );
                this.context.lineTo( -handWidth, -widePoint );
                this.context.lineTo( 0, -this.settings.length );
                this.context.lineTo( handWidth, -widePoint );
                this.context.lineTo( baseWidth, 0 );
                this.context.lineTo( 0, 0 );
                this.context.fillStyle = this.settings.color;
                this.context.fill();
                
                // Minute hand benefits from a subtle border when overlapping hour hand.

                if( type === "minute" ) {
                    this.context.strokeStyle = "tan";
                    this.context.stroke();
                }
            },
            
            // Public method to draw the hands, based on the current time. Rotates the
            // canvas some number of degrees, then calls a helper function to draw the
            // hand shape. How many degrees to rotate is a function of the time and the
            // type of hand being drawn (hour, minute or second).
            //
            draw: function( hours, minutes, seconds, milliseconds ) {

                var degrees;

                // Calculate the number of degrees to rotate the canvas first.

                switch( this.settings.type ) {
                    case "minute":  degrees = (minutes + seconds/60) * 6;
                                    break;
                    case "hour":    hours = hours > 12 ? hours - 12 : hours;
                                    degrees = (hours + minutes/60) * 30;
                                    break;
                    default:        degrees = (seconds + milliseconds/1000) * 6;
                                    break;
                }
                
                // Translate and rotate the canvas before drawing the hand.

                this.context.save();
                this.context.translate( this.CENTER.x, this.CENTER.y );
                this.context.rotate( this._degreesToRadians( degrees ));
                 
                // Draw the hand and restore the context.
                                 
                switch( this.settings.style ) {
                    case "pointer": this._drawPointerHand( this.settings.type );
                                    break;
                    default:        this._drawStraightHand();
                }
                
                this.context.restore();
            }
        }
    );

    return ClockHand;
});
