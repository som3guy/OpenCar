///////////////////////////////////////
//
// Clock Face
//
// Returns a class that draws the face of a clock in the style of an Heuer 
// dash mounted clock.
//
// All effects scale to the size of the canvas element provided.
//
// TO USE:
//
//      Call "configure( { color: <color> } )" to change default face color.
//      Call "draw" after clearing the canvas, but before drawing the clock hands.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
    var Point       = require('$MODULE_PATH/canvas-clock/Point');
    
    var ClockFace = Class.create(
        {
            initialize: function( htmlCanvas ) {
            
                // Remember the canvas context for drawing and set defaults.
                //
                this.context = htmlCanvas.getContext("2d");
                this.settings = {
                    color: "honeydew"
                };
                
                // Sizes of elements around the face.
                //
                this.SHORT_TICK_LENGTH = htmlCanvas.width * 0.03;
                this.SHORT_TICK_WIDTH = htmlCanvas.width * 0.004;
                this.HEAVY_TICK_LENGTH = htmlCanvas.width * 0.08;
                this.HEAVY_TICK_WIDTH = htmlCanvas.width * 0.028;
                this.TICK_ARROW_WIDTH = htmlCanvas.width * 0.04;
                
                // Font sizes relative to canvas size.
                //
                this.NUMBER_FONTSIZE = htmlCanvas.width * 0.14;
                this.MINUTE_NUMBER_FONTSIZE = htmlCanvas.width * 0.04;
                this.MASTERTIME_FONTSIZE = htmlCanvas.width * 0.03;
                this.EIGHT_DAYS_FONTSIZE = htmlCanvas.width * 0.03;
                
                // Layout dimensions are all relative to canvas size. Locations of
                // elements from center.
                // 
                this.CENTER = new Point( htmlCanvas.width/2, htmlCanvas.height/2 );
                this.TICK_RADIUS = htmlCanvas.width * 0.4;
                this.NUMBER_RADIUS = this.TICK_RADIUS - this.HEAVY_TICK_LENGTH - this.NUMBER_FONTSIZE/2;
                this.EIGHT_DAYS_RADIUS = htmlCanvas.width * 0.13;
                this.MASTERTIME_RADIUS = htmlCanvas.width * 0.13;
            },

            // Simple interface to copy configured properties.
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
          
            // Draws the "8 DAY" and "MASTER-TIME" labels on the clock face. Private.
            //
            _drawLabels: function() {
                
                this.context.save();
                this.context.textAlign = "center";
                this.context.textBaseline = "middle";
                
                this.context.font = "bold " + this.EIGHT_DAYS_FONTSIZE + "px sans-serif";
                this.context.fillStyle = this.settings.color;
                this.context.fillText( "8 DAYS", this.CENTER.x, this.CENTER.y + this.EIGHT_DAYS_RADIUS );
                
                this.context.font = this.MASTERTIME_FONTSIZE + "px sans-serif";
                this.context.fillStyle = "white";
                this.context.fillText( "MASTER-TIME", this.CENTER.x, this.CENTER.y - this.MASTERTIME_RADIUS );
                
                this.context.restore();
            },
 
            // Only used once, could be inline. Should be private method.
            //           
            _degreesToRadians: function( degrees ) {
                return (Math.PI / 180) * degrees;
            },
   
            // Draws the arrows around the face. Private
            //
            _drawArrow: function() {
                this.context.beginPath();
                this.context.moveTo( -this.TICK_ARROW_WIDTH/2, this.TICK_RADIUS );
                this.context.lineTo( 0, this.TICK_RADIUS - this.HEAVY_TICK_LENGTH * 1.1 );
                this.context.lineTo( this.TICK_ARROW_WIDTH/2, this.TICK_RADIUS );
                this.context.closePath();
                this.context.fill();
            },

            // Draws a tick on the outside of the face (either light or heavy). Takes
            // advantage of the canvas being rotated, and is drawn straight up. Private.
            // 
            _drawTick: function( length, weight ) {
                
                this.context.beginPath();
                this.context.moveTo( 0, this.TICK_RADIUS );
                this.context.lineTo( 0, this.TICK_RADIUS - length );
                this.context.lineWidth = weight;
                this.context.stroke();
            },

            // Draws the various marks around the face of the clock. Private.
            //       
            _drawTicks: function( count, style ) {

                var i;
                //var degrees = 360 / count;
                
                // Translate canvas to center so we can rotate around the center.
                //
                this.context.save();
                this.context.translate( this.CENTER.x, this.CENTER.y );

                this.context.strokeStyle = this.settings.color;
                this.context.fillStyle = this.settings.color;

                // Draw the appropriate symbol for this postion and rotate the clock
                // face another minute position (6 degrees).
                //
                for( i = 0; i < 360; i += 6 ) {
                    
                    if( i === 0 || i === 90 || i === 180 || i === 270 ) {
                        this._drawArrow();
                    }
                    else if( i % 30 !== 0 ) {
                        this._drawTick( this.SHORT_TICK_LENGTH, this.SHORT_TICK_WIDTH );
                    }
                    else {
                        this._drawTick( this.HEAVY_TICK_LENGTH, this.HEAVY_TICK_WIDTH );
                    }

                    this.context.rotate( this._degreesToRadians( 6 ));
                }
                
                this.context.restore();
            },
             
            // Draws the large numbers on the clock face. Private.
            // 
            _drawHourNumbers: function() {
                
                var hours = [3,6,9,12],
                    angle = 0,
                    x, y,
                    i = 0;
                  
                this.context.save();
                this.context.fillStyle = this.settings.color;
                this.context.font = "bold " +  this.NUMBER_FONTSIZE + "px sans-serif";
                this.context.textAlign = "center";
                this.context.textBaseline = "middle";

                for( i = 0; i < hours.length; i++ ) {

                    angle = Math.PI/6 * (hours[i] - 3);
    
                    x = this.CENTER.x + Math.cos(angle) * this.NUMBER_RADIUS;
                    y = this.CENTER.y + Math.sin(angle) * this.NUMBER_RADIUS;
                    this.context.fillText( hours[i], x, y );
                }
                
                this.context.restore();
            },

            // Draws the face of the clock by drawing all of the components.
            //            
            draw: function() {
            
                this._drawTicks();
                this._drawHourNumbers();
                this._drawLabels();
            }
        }
    );

    return ClockFace;
});
