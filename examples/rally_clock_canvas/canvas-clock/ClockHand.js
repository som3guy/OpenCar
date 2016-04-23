///////////////////////////////////////
//
// Clock Hand
//
// Returns a class that can draw a clock hand of some configured style in the postion
// corresponding to the time provided.
//
// TO USE:
//
//      Call "configure( {...} )" to change default hand properties.
//
//              {   length: <length>,
//                  width:  <width>,
//                  color:  <color>,
//                  type:   <"second" | "minute" | "hour">,
//                  style:  <"straight" | "pointer" | "heuer-second" | "heuer-minute">
//              }
//
//      Call "draw( time )" after the clock face is drawn.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
    var Point       = require('$MODULE_PATH/canvas-clock/Point');
    
    var ClockHand = Class.create(
        {
            initialize: function( htmlCanvas ) {
                
                // Remember our canvas context for drawing and set defaults.
                //
                this.context = htmlCanvas.getContext("2d");
                this.CENTER = new Point( htmlCanvas.width/2, htmlCanvas.height/2 );
                this.settings = {
                    length:    100,
                    width:     4,
                    color:     "red",
                    type:      "second",
                    style:     "straight"
                };
                
                this.HANDCENTER_RADIUS = htmlCanvas.width * 0.035;
            },

            // Simple interface to copy configured hand size and style.
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
          
            // Only used once, could be inline. Should be private method.
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
                this.context.moveTo( 0, 0 );
                this.context.lineTo( 0, -this.settings.length );
                this.context.lineWidth = this.settings.width;
                this.context.strokeStyle = this.settings.color;
                this.context.stroke();

            },
            
            // Draws the counterweighted second hand as used by the Heuer clock, called
            // from the draw method. Like other hands, drawn after canvas has been
            // rotated.
            //
            _drawHeuerSecondHand: function() {
                 
                // Second hand.
                      
                this.context.beginPath();
                this.context.moveTo( 0, -this.settings.length );
                this.context.lineTo( 0, this.settings.length * 0.2 );
                this.context.lineWidth = this.settings.width;
                this.context.strokeStyle = this.settings.color;
                this.context.stroke();
 
                // Counter weight at the end of the second hand.
                
                this.context.beginPath();
                this.context.arc( 0, this.settings.length * 0.25, this.HANDCENTER_RADIUS * 0.65, 0, 2 * Math.PI);
                this.context.fillStyle = this.settings.color;
                this.context.fill();
                this.context.lineWidth = 1;
                this.context.strokeStyle = "darkgray";
                this.context.stroke();
                
                // Round area where second hand attaches to shaft.
                
                this.context.beginPath();
                this.context.arc( 0, 0, this.HANDCENTER_RADIUS, 0, 2 * Math.PI);
                this.context.fillStyle = this.settings.color;
                this.context.fill();
                this.context.lineWidth = 1;
                this.context.strokeStyle = "darkgray";
                this.context.stroke();

                // Center dark area (end of shaft).
                
                this.context.beginPath();
                this.context.arc( 0, 0, 1, 0, 2 * Math.PI);
                this.context.strokeStyle = "darkgray";
                this.context.stroke();
            },
            
            // Draws the unique pointed minute hand used by the Heuer stopwatch, called
            // from the draw method. Like other hands, drawn after canvas has been
            // rotated.
            //
            _drawHeuerMinuteHand: function() {
                 
                // Minute hand.
                      
                this.context.beginPath();
                this.context.moveTo( 0, -this.settings.length );
                this.context.lineTo( -this.HANDCENTER_RADIUS, 0 );
                this.context.lineTo( this.HANDCENTER_RADIUS, 0 );
                this.context.lineTo( 0, -this.settings.length );
                this.context.lineWidth = 1;
                this.context.strokeStyle = "darkgray";
                this.context.stroke();
                this.context.fillStyle = this.settings.color;
                this.context.fill();

                // Triangle at top of minute hand.
                
                this.context.beginPath();
                this.context.moveTo( 0, -this.settings.length );
                this.context.lineTo( -this.HANDCENTER_RADIUS, -this.settings.length * 0.8 );
                this.context.lineTo( this.HANDCENTER_RADIUS, -this.settings.length * 0.8 );
                this.context.lineTo( 0, -this.settings.length );
                this.context.stroke();
                this.context.fillStyle = this.settings.color;
                this.context.fill();
                
                // Round area where second hand attaches to shaft.
                
                this.context.beginPath();
                this.context.arc( 0, 0, this.HANDCENTER_RADIUS, 0, 2 * Math.PI);
                this.context.fillStyle = this.settings.color;
                this.context.fill();
                this.context.lineWidth = 1;
                this.context.strokeStyle = "darkgray";
                this.context.stroke();

                // Center dark area (end of shaft).
                
                this.context.beginPath();
                this.context.arc( 0, 0, 1, 0, 2 * Math.PI);
                this.context.strokeStyle = "darkgray";
                this.context.stroke();
            },
   
            
            // Draws the hand that's shaped a little like a necktie. Called from the
            // general draw method, it takes advantage of the fact that the canvas has
            // been rotated some number of degrees and can be drawn straight up. It
            // should be considered private.
            //
            _drawPointerHand: function( type ) {
                
                var widePoint = this.settings.length * 0.7,
                    handWidth = this.settings.width/2,
                    baseWidth = this.settings.width/4;
  
                // Hour hand proportions are slightly different from minute hand.
                //
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
                //
                if( type === "minute" ) {
                    this.context.strokeStyle = "darkgray";
                    this.context.stroke();
                }
            },
            
            // Public method to draw the hands, based on time provided. Rotates the
            // canvas some number of degrees, then calls a helper function to draw the
            // hand shape. How many degrees to rotate is a function of the time and the
            // type of hand being drawn.
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
                    case "pointer":         this._drawPointerHand( this.settings.type );
                                            break;
                    case "heuer-second":    this._drawHeuerSecondHand( this.settings.type );
                                            break;
                    case "heuer-minute":    this._drawHeuerMinuteHand( this.settings.type );
                                            break;
                    default:                this._drawStraightHand();
                }
                
                this.context.restore();
            }
        }
    );

    return ClockHand;
});
