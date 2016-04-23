define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        Control     = require('common/ui/Control'),

        HeuerClock      = require('$MODULE_PATH/canvas-clock/CanvasClock'),
        HeuerStopwatch  = require('$MODULE_PATH/canvas-clock/CanvasStopwatch'),
        MountingBack    = require('$MODULE_PATH/canvas-clock/MountingBack'),
        Stopwatch       = require('$MODULE_PATH/clocks/DigitalStopwatch'),
        LapTimeList     = require('$MODULE_PATH/LapTimeList');

    /*
    This is the application "view" module.

    The app "view" module is used for any UI control creation and handling.

    You may choose to use layout from your appLayout.html file (as noted in your app.manifest)
    Please see the SDK documentation for how to declare elements in markup and/or in code.

    You may create an application with or without use of a controller.
    Use of a controller is recommended. See the SDK documentation.

    Note that functions defined in the controller may be called via this.getController()
    Functions declared in this view class may also be called from the controller.

    Functions designed to be called from the controller must return a Promise.
     */

    return Class.create(
        ModuleView,
        {
            ///////////////////////////////////
            //
            // Note the lifecycle methods of the
            // ModuleView class listed below.
            //
            // You may remove these commented guides
            // if you prefer.
            //
            // Uncomment them to enable and modify.
            //
            // Note the use of $super() used to reference
            // the built-in functionality.
            ///////////////////////////////////

            /*
             Called prior to the application being displayed.
             Executes in parallel to the module controller's init().
             Controller and View are not yet linked
             Return void, or a Promise to resolve for deferred completion.
             */
            init: function($super) {
                Log.debug("view init()");

                // Create the mounting panel for the two timepieces.
                
                var htmlCanvas = document.getElementById( 'mountingBack' );
                htmlCanvas.width = 460;
                htmlCanvas.height = 215;
                this.mountingBack = new MountingBack( htmlCanvas );
                
                // Get the canvas for the Heuer clock and create the clock.
                
                htmlCanvas = document.getElementById( 'clock' );
                htmlCanvas.width = htmlCanvas.height = 215;             // size of clock
                this.clock = new HeuerClock( htmlCanvas );
                this.clock.start();
                
                // Get the canvas for the Heuer stopwatch and create it.
                
                htmlCanvas = document.getElementById( 'stopwatch' );
                htmlCanvas.width = htmlCanvas.height = 215;             // size of clock
                this.stopwatch = new HeuerStopwatch( htmlCanvas );
 
                // Create the digital elapsed time and lap time stopwatches.
                
                var container = document.getElementById( 'elapsedTime' );
                this.elapsedTime = new Stopwatch( container, { decimal: 0 } );
  
                container = document.getElementById( 'lapTime' );
                this.lapTime = new Stopwatch( container, { hours: false, decimal: 10 } );

                // Create the lap times list.

                container = document.getElementById( 'lapListContainer' );
                this.lapTimesList = new LapTimeList( container );
                
                // Create the buttons and attach click listeners.

                this.btnStart = Control.getById( 'startButton' );
                this.btnReset = Control.getById( 'resetButton' );
                this.btnStart.addClickListener( this.startButtonClicked.bind( this ));
                this.btnReset.addClickListener( this.resetButtonClicked.bind( this ));
   
                return $super();
            }.override(),

            // Starts all stopwatches and updates button labels.
            //
            startTiming: function() {
            
                this.elapsedTime.start();
                this.lapTime.start();
                this.stopwatch.start();
                this.btnStart.model.set( 'text', "Stop" );
                this.btnReset.model.set( 'text', "Lap" );
            },

            // Stops all stopwatches and updates button labels.
            //
            stopTiming: function() {
                
                this.elapsedTime.stop();
                this.lapTime.stop();
                this.stopwatch.stop();
                this.btnStart.model.set( 'text', "Start" );
                this.btnReset.model.set( 'text', "Reset" );
            },
            
            // Resets all stopwatches.
            //
            resetTime: function() {
                
                this.elapsedTime.reset();
                this.lapTime.reset();
                this.stopwatch.reset();
                this.lapTimesList.clear();
            },
            
            // Adds the lap time from the lap stopwatch to the list.
            //
            addLapTime: function() {
                
                var timeStr = this.lapTime.getTimeString();
                this.lapTimesList.addLapTime( timeStr );
                this.lapTime.stop();
                this.lapTime.reset();
                this.lapTime.start();
            },
            
            // Responds to Start/Stop button.
            //
            startButtonClicked: function() {
               
                if( this.elapsedTime.isRunning() ) {
                    this.stopTiming();
                }
                else {
                    this.startTiming();
                }
            },
            
            // Responds to Reset/Lap button.
            //
            resetButtonClicked: function() {
                
                if( this.elapsedTime.isRunning() ) {
                    this.addLapTime();
                }
                else {
                    this.resetTime();
                }
            }
        }
    );
});
