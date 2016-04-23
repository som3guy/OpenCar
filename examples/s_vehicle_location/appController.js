define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        VehicleLocationAPI      = require('common/platform/VehicleLocationAPI'),
        //UpdateFlags         = require('common/platform/GPSLocationUpdateFlags'),
        ModuleController    = require('common/platform/ModuleController');

    /*
    This is the application "controller" module.

     The app "controller" module holds the application logic in an true MVC architecture.
     The corresponding application "view" is used for any UI control handling.

     You may choose to not use a controller and place your application logic in the view code space.
     If you do so, you may simply leave this file untouched, or remove it from your application folder
     and remove the "controller" line from your app.manifest file.
     */

    var vehicleLocation,
        subscribeId,
        updateInterval,
        retryTimer;

    return Class.create(
        ModuleController,
        {

            ///////////////////////////////////
            //
            // Note the lifecycle methods of the
            // ModuleController class listed below.
            //
            // You may remove these commented guides
            // if you prefer.
            //
            // Uncomment them to enable and modify.
            //
            // Note the use of $super() used to reference
            // the built-in functionality.
            ///////////////////////////////////

            ///////////////////////////////////
            //
            // Note that any functions of your own that you
            // define within this ModuleController space
            // may be called by the application "view" as
            // this.getController().yourControllerFunction()
            //
            // Any functions created in the "view"
            // may be called from here with
            // this.getView().yourViewFunction()
            //
            // Functions called between "view" and
            // "controller" must return a Promise.
            //
            ///////////////////////////////////

            // Subscribes to the Vehicle Location position data.
            //
            subscribePosition: function() {
                var subscribeId = vehicleLocation.subscribePosition(function success(data) {
                    Log.log("subscribePosition SEES DATA", data);
                    this.getView().updateValues(data);

                }.bind(this), function error(data){
                    Log.log("subscribePosition error", data);
                    this.getView().updateStatus(data.code);
                }.bind(this), {
                    maximumAge: 1000,
                    timeout: 1000
                });

                return subscribeId;
            },

            // Controls the polling to update the "Last signal" item on the screen.
            //
            startUpdateInterval: function() {
                var updateInterval = setInterval( function() {
                    this.getView().updateLastSignal();
                }.bind(this), 200 );

                return updateInterval;
            },

            // Initializes the Vehicle Location API; subscribes to position if init is successful,
            // schedules timeout to retry later if no GPS fix.
            //
            initVehicleLocation: function() {
                vehicleLocation.init(VehicleLocationAPI.UpdateFlags.ALL).then(function(initData){
                    Log.log("VEHICLE LOCATION API, INIT SUCCESS", initData);
                    vehicleLocation.getCurrentPosition(function success(data) {
                        Log.log("GOT DATA FOR FIRST CALL", data);
                    }, function error(data){
                        Log.log("GOT ERROR FOR FIRST CALL", data);
                    }, {
                        maximumAge: 1000,
                        timeout: 1000
                    });
                    subscribeId = this.subscribePosition();
                    updateInterval = this.startUpdateInterval();
                }.bind(this), function error(err) {
                    this.getView().updateStatus(err.status);
                    retryTimer = setTimeout(function() {
                        console.log( "RETRYING INIT" );
                        this.initVehicleLocation();
                    }.bind(this), 1000);
                    Log.log("vehicleLocation.init(), ERROR", err);
                }.bind(this));
            },

            /*
             Called prior to the application being displayed.
             Executes in parallel to the module view's init().
             Controller and View are not yet linked
             Return void, or a Promise to resolve for deferred completion.
             */
            init: function($super) {
                Log.debug("controller init()");
                vehicleLocation = new VehicleLocationAPI();
                this.initVehicleLocation();
                return $super();
            }.override(),

            /*
             Called prior the application being displayed, but after both the module controller's init()
             and module view's init() are complete.
             */
//          beforeStart: function($super) {
//                Log.debug("controller beforeStart()");
//                return $super();
//            }.override(),

            /*
             Called after the application has been transitioned fully into activation and view.
             */
//            started: function($super) {
//                Log.debug("controller started()");
//                return $super();
//            }.override(),

            /*
              Called prior to the application being paused.
             */
            beforePause: function($super) {
                Log.debug("controller beforePause()");
                // Either trying to establish a GPS fix, or have an active subscription. Cancel whichever
                // is active.
                if(retryTimer) {
                    clearTimeout(retryTimer);
                    retryTimer = null;
                }
                else {
                    clearInterval(updateInterval);
                    vehicleLocation.clearSubscription(subscribeId);
                }
                return $super();
            }.override(),

            /*
             Called after the module has been fully transitioned out of activation.
             */
//            paused: function($super) {
//                Log.debug("controller paused()");
//                return $super();
//            }.override(),

            /*
             Called prior to an application being resumed, before it's transitioned into activation.
             */
            beforeResume: function($super) {
                Log.debug("controller beforeResume()");
                // Start the whole process over. In the event the GPS signal was lost while we were paused,
                // our init function has retry logic built in.
                this.initVehicleLocation();
                return $super();
            }.override()

            /*
             Called after the module has been fully transitioned into activation.
             */
//            resumed: function($super) {
//                Log.debug("controller resumed()");
//                return $super();
//            }.override(),

            /*
             Called after the application has been fully transitioned out of activation,
             but prior to the module being stopped and removed from runtime.
             */
//            beforeStop: function($super) {
//                Log.debug("controller beforeStop()");
//                return $super();
//            }.override()

        }
    );

});
