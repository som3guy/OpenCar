///////////////////////////////////////
//
// Mounting Back
//
// Returns a class that draws the mounting back for the Heuer Rally-Master clock
// and stopwatch.
//
// All effects scale to the size of the canvas element provided.
//
// TO USE:
//
// All drawing is completed at initialization.
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class');
    var Point       = require('$MODULE_PATH/canvas-clock/Point');
    
    var MountingBack = Class.create(
        {
            initialize: function( htmlCanvas ) {

                // Remember the canvas context for drawing and set defaults.
                //
                this.canvas = htmlCanvas;
                this.context = htmlCanvas.getContext("2d");
 
                // Preset colors (not all are used in the mounting panel).
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
               
                // Simple style for canvas element.
                //
                htmlCanvas.style.borderRadius = htmlCanvas.width * 0.05 + "px";
                htmlCanvas.style.border = "1px solid " + this.BRONZE_1;
 
                // Overall panel color.
                
                this.bodyColor = this.context.createLinearGradient( 0, 0, htmlCanvas.width, htmlCanvas.height );
                this.bodyColor.addColorStop( 0, this.GRAY_2 );
                this.bodyColor.addColorStop( 0.5, this.GRAY_1 );
                this.bodyColor.addColorStop( 1, this.GRAY_2 );

                this.context.rect( 0, 0, htmlCanvas.width, htmlCanvas.height );
                this.context.fillStyle = this.bodyColor;
                this.context.fill();

                // Size and locations of mounting holes.
                                
                this.MOUNT_HOLE_RADIUS = htmlCanvas.width * 0.03;
                this.MOUNT_HOLE_INNER_RADIUS = htmlCanvas.width * 0.015;

                this.UPPER_LEFT_MOUNT_HOLE = new Point( htmlCanvas.width * 0.045, htmlCanvas.width * 0.045 );
                this.LOWER_LEFT_MOUNT_HOLE = new Point( htmlCanvas.width * 0.045, htmlCanvas.height - htmlCanvas.width * 0.045 );
                this.UPPER_RIGHT_MOUNT_HOLE = new Point( htmlCanvas.width - htmlCanvas.width * 0.045, htmlCanvas.width * 0.045 );
                this.LOWER_RIGHT_MOUNT_HOLE = new Point( htmlCanvas.width - htmlCanvas.width * 0.045, htmlCanvas.height - htmlCanvas.width * 0.045 );
             
                // Draw the mounting holes.
                
                this._drawMountingHole( this.UPPER_LEFT_MOUNT_HOLE );
                this._drawMountingHole( this.LOWER_LEFT_MOUNT_HOLE );
                this._drawMountingHole( this.UPPER_RIGHT_MOUNT_HOLE );
                this._drawMountingHole( this.LOWER_RIGHT_MOUNT_HOLE );
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
            
            // Renders a little mounting hole. This function translates the canvas to
            // the mounting hole location, so gradients need to be constructed here as 
            // the coordinates of the gradient are relative to the repositioned canvas.
            // (Pre created gradients like those created in initialize won't work). Is
            // private to this module.
            //
            _drawMountingHole: function( location ) {

                var center = new Point(0,0),
                    holeGradient = this.context.createRadialGradient(
                                            center.x, center.y, 2,
                                            center.x, center.y, this.MOUNT_HOLE_RADIUS ),
                    edgeGradient = this.context.createLinearGradient(
                                            -this.MOUNT_HOLE_RADIUS, -this.MOUNT_HOLE_RADIUS,
                                            this.MOUNT_HOLE_RADIUS, this.MOUNT_HOLE_RADIUS );
                                            
                holeGradient.addColorStop( 0, this.GRAY_5 );
                holeGradient.addColorStop( 1, this.GRAY_2 );

                edgeGradient.addColorStop( 0, this.GRAY_0 );
                edgeGradient.addColorStop( 0.6, this.GRAY_1 );
                edgeGradient.addColorStop( 1, this.GRAY_7 );
                
                // Translate the canvas to the specified location. This means the center
                // of the hole is now (0,0) and not the "true" location on the canvas.
                //
                this.context.save();
                this.context.translate( location.x, location.y );
                
                this._drawCircle( center, this.MOUNT_HOLE_RADIUS, holeGradient );
                this._drawCircle( center, this.MOUNT_HOLE_RADIUS, edgeGradient, 1 );
                this._drawCircle( center, this.MOUNT_HOLE_INNER_RADIUS, "black" );

                this.context.restore();
            },
        }
    );

    return MountingBack;
});
