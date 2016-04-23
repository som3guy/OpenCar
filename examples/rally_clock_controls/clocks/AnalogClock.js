///////////////////////////////////////
//
// Analog Clock
//
// The analog clock uses a hybrid approach to creating a clock. OpenCar TextView 
// controls are used to render the numerals and face, allowing them to be styled
// according to the profile applied. An HTML canvas element is used to draw the
// hands of the clock directly on the screen. The styling cues of the elements drawn
// directly to the screen are taken from the profile applied to the TextView controls.
//
// The Analog Clock can be created as a stopwatch by specifying so in the config:
//
// Create with config object: 
//      {
//          size        : <pixels>,
//          stopwatch   : true | false,                 // can be a clock or stopwatch
//          shape       : "round" | "square",
//          numerals    : "arabic" | "partial" | "stopwatch" | "roman_upper" | "roman_lower"
//      }
//
define(function(require) {
    'use strict';

    var Class       = require('common/Class'),

        ClockFace           = require('$MODULE_PATH/clocks/lib/ClockFace'),
        ClockMovement       = require('$MODULE_PATH/clocks/lib/ClockMovement'),
        StopwatchMovement   = require('$MODULE_PATH/clocks/lib/StopwatchMovement');
    
    var AnalogClock = Class.create(
        {
            initialize: function( container, config ) {
                
                // The clock element can be sized a number of ways - via this 
                // constructor, in HTML/CSS markup, or with defaults.
                                
                container.style.width = (config.size || container.offsetWidth || 300) + "px";
                container.style.height = (config.size || container.offsetHeight || 300) + "px";
                                
                // If the clock is a stopwatch, the style of numerals must match.
                
                if( config.stopwatch ) {
                    config.numerals = "stopwatch";
                }

                // Create the clock face first, from the HTML elements in the container.

                this.clockFace = new ClockFace( container, { numerals: config.numerals, shape: config.shape } );

                // After the container is sized and border width determined, create and
                // append the drawing canvas.

                var borderWidth = this.clockFace.preferredBorderWidth(),
                    htmlCanvas = this._createCanvas( container, borderWidth );
                
                // Create the movement as either a clock or stopwatch from the HTML
                // canvas.

                if( config.stopwatch ) {
                    this.clockMovement = new StopwatchMovement( htmlCanvas );
                }
                else {
                    this.clockMovement = new ClockMovement( htmlCanvas );
                }
                
                // Set the movement's hand color to match the text color, to help
                // reinforce appearance of the OpenCar profile.

                this.clockMovement.setHandColor( this.clockFace.getColor() );
            },

            // Creates, appends, and postions an HTML canvas to the center of the
            // clock container. This canvas will be used by the clock mechanism to draw
            // the clock hands. The size of this canvas determines the size of the clock
            // mechanism (hands) and is a percentage of the overall container (clock 
            // face) size.
            //
            _createCanvas: function( container, borderWidth ) {
                
                var htmlCanvas = document.createElement( 'canvas' );
                
                container.appendChild( htmlCanvas );
                htmlCanvas.style.position = "absolute";
                htmlCanvas.width = container.offsetWidth * 0.6;
                htmlCanvas.height = container.offsetHeight * 0.6;
                htmlCanvas.style.top = ((container.offsetHeight - htmlCanvas.height) / 2) - borderWidth + "px";
                htmlCanvas.style.left = ((container.offsetWidth - htmlCanvas.width) / 2) - borderWidth + "px";
            
                return htmlCanvas;
            },
            
            // Wrappers to control the clock/stopwatch movement.
            //
            start: function() {
                this.clockMovement.start();
            },
            
            stop: function() {
                this.clockMovement.stop();
            },
            
            reset: function() {
                this.clockMovement.reset();
            }
        }
    );

    return AnalogClock;
});
