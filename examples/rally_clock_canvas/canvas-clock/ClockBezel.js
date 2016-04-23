///////////////////////////////////////
//
// Clock Bezel
//
// Returns a class that draws the body and bezel a clock in the style of an Heuer 
// dash mounted clock or stopwatch.
//
// This module is mostly a collection of canvas manipulations, in particular the
// creation of many gradients used to draw the various components of the clock bezel
// and body. There is nothing especially tricky here, but it may not be very
// intelligible to someone unfamiliar with drawing using the HTML5 canvas element.
//
// All effects scale to the size of the canvas element provided.
//
// TO USE:
//
//      Call "drawPre" after clearing the canvas.
//      Call "drawPost" after the clock face and hands have been rendered.      
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
    var Point       = require('$MODULE_PATH/canvas-clock/Point');
    
    var ClockBezel = Class.create(
        {
            initialize: function( htmlCanvas ) {

                // Remember the canvas context for drawing and set defaults.
                //
                this.canvas = htmlCanvas;
                this.context = htmlCanvas.getContext("2d");
 
                // Preset colors.
                //
                this.GRAY_0 = "#0E0E0E";
                this.GRAY_1 = "#252524";
                this.GRAY_2 = "#373736";
                this.GRAY_3 = "#474646";
                this.GRAY_4 = "#5A5958";
                this.GRAY_5 = "#6E6D6B";
                this.GRAY_6 = "#838280";
                this.GRAY_7 = "#989794";
                this.GRAY_8 = "#B3B1AF";
                this.BRONZE_0 = "#2a2419";
                this.BRONZE_1 = "#6B5B3F";
                this.BRONZE_2 = "#A0885E";
            
                // Layout dimensions are all relative to canvas size. Locations of
                // elements from center.
                //               
                this.CENTER = new Point( htmlCanvas.width/2, htmlCanvas.height/2 );
                this.BEZEL_OUTER_RADIUS = htmlCanvas.width * 0.48;
                this.BEZEL_MIDDLE_RADIUS = htmlCanvas.width * 0.47;
                this.BEZEL_INNER_RADIUS = htmlCanvas.width * 0.42;
  
                // Gradients for all effects.
                //
                this.faceColor = this.context.createLinearGradient( 0, 0, htmlCanvas.width, htmlCanvas.height );
                this.faceColor.addColorStop( 0, this.GRAY_0 );
                this.faceColor.addColorStop( 0.5, this.GRAY_2 );
                this.faceColor.addColorStop( 1, this.GRAY_0 );

                this.bezelHighlight = this.context.createLinearGradient( 0, 0, htmlCanvas.width, htmlCanvas.height );
                this.bezelHighlight.addColorStop( 0, this.GRAY_8 );
                this.bezelHighlight.addColorStop( 0.3, this.GRAY_4 );
                this.bezelHighlight.addColorStop( 0.5, this.GRAY_2 );
                this.bezelHighlight.addColorStop( 1, this.GRAY_0 );

                this.bezelShadow = this.context.createLinearGradient( 0, 0, htmlCanvas.width, htmlCanvas.height );
                this.bezelShadow.addColorStop( 0, this.GRAY_0 );
                this.bezelShadow.addColorStop( 0.5, this.GRAY_3 );
                this.bezelShadow.addColorStop( 1, this.GRAY_7 );

                this.innerBezelColor = this.context.createLinearGradient( 0, 0, htmlCanvas.width, htmlCanvas.height );
                this.innerBezelColor.addColorStop( 0, this.BRONZE_1 );
                this.innerBezelColor.addColorStop( 0.5, this.BRONZE_0 );
                this.innerBezelColor.addColorStop( 1, this.BRONZE_2 );
            
                this.glassColor = this.context.createLinearGradient(
                                            this.CENTER.x + this.BEZEL_INNER_RADIUS,
                                            this.CENTER.y - this.BEZEL_INNER_RADIUS,
                                            this.CENTER.x - this.BEZEL_INNER_RADIUS,
                                            this.CENTER.y + this.BEZEL_INNER_RADIUS );

                this.glassColor.addColorStop( 0, "rgba( 255,255,255, 0.05 )" );
                this.glassColor.addColorStop( 0.5, "rgba( 235,245,203, 0.2 )" );
                this.glassColor.addColorStop( 0.8, "rgba( 255,255,255, 0.05 )" );
            },

            // Helper function to draw a circle, either as filled or stroked, depending
            // on "weight" parameter.
            //
            _drawCircle: function( center, radius, color, weight ) {
            
                this.context.save();
                this.context.beginPath();
                this.context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
                this.context.lineWidth = weight;
                if( weight ) {
                    this.context.strokeStyle = color;
                    this.context.stroke();
                }
                else {
                    this.context.fillStyle = color;
                    this.context.fill();
                }
                this.context.restore();
            },

            // Draws the inner and outer bezel rings. Considered private method.
            //
            _drawBezel: function() {

                var bezelWidth,
                    bezelRadius;

                // Outer wider bezel ring.
                //
                bezelWidth = this.BEZEL_OUTER_RADIUS - this.BEZEL_MIDDLE_RADIUS;
                bezelRadius = this.BEZEL_OUTER_RADIUS - bezelWidth/2;
                
                this._drawCircle( this.CENTER, bezelRadius, this.bezelColor, bezelWidth );
                this._drawCircle( this.CENTER, this.BEZEL_OUTER_RADIUS, this.bezelHighlight, 2 );
                this._drawCircle( this.CENTER, this.BEZEL_MIDDLE_RADIUS, this.bezelShadow, 2 );
          
                // Inner bronze bezel ring.
                //
                bezelWidth = this.BEZEL_MIDDLE_RADIUS - this.BEZEL_INNER_RADIUS;
                bezelRadius = this.BEZEL_MIDDLE_RADIUS - bezelWidth/2 - 2;
                
                this._drawCircle( this.CENTER, bezelRadius, this.innerBezelColor, bezelWidth );
            },
       
            // Called before the face and hands are drawn, to draw the basic clock body
            // on the empty canvas.  Draws the body and bezel of the clock.
            //
            drawPre: function() {

                // Black face in center.
                //
                this._drawCircle( this.CENTER, this.BEZEL_INNER_RADIUS, this.GRAY_0, 1 );
                this.context.fillStyle = this.faceColor;
                this.context.fill();

                // Two ring bezel.
                //                
                this._drawBezel();
            },
            
            // Called after the face and hands are drawn. Draws any details that lie over
            // the hands.
            //            
            drawPost: function() {
                
                this._drawCircle( this.CENTER, this.BEZEL_INNER_RADIUS, this.glassColor );
            }
        }
    );

    return ClockBezel;
});
