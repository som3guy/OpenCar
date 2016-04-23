define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        TextView    = require('common/ui/TextView'),
        ModuleView  = require('common/platform/ModuleView');

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

    var txtStatus,
        txtAge,
        txtLastSignal,
        txtAccuracy,
        txtLatitude,
        txtLongitude,
        txtAltitude,
        txtAltAccuracy,
        txtHeading,
        txtSpeed,
        lastSignalTime,
        statusCount = 0;

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

                // Create text view elements for displaying information, set the
                // css style class, and render to the view.

                txtStatus = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtAge = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtLastSignal = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtAccuracy = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtLatitude = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtLongitude = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtHeading = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtSpeed = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtAltitude = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());

                txtAltAccuracy = new TextView()
                    .setClasses('locationInfo')
                    .render(this.getView());


                lastSignalTime = Date.now();
                return $super();
            }.override(),

            // Called by the controller to update the "Update" field on the screen. This is a measure
            // of how long it has been since we last receive a vehicle location signal.
            //
            updateLastSignal: function() {
                var newValue = Date.now() - lastSignalTime;
                if(newValue < 1000) {
                    txtLastSignal.setText("Update: " + newValue + " ms ago");
                }
                else {
                    txtLastSignal.setText("Update: " + Math.round(newValue/1000) + " sec ago");
                }
            },

            // Called by the controller when fresh signals arrive to update the values on the screen.
            //
            updateValues: function(values) {
                lastSignalTime = Date.now();

                // Status can be provided by various functions (init, getPosition, subscribePosition).
                this.updateStatus(values.coords.status);

                // Longitude, latitude and signal age are always supported.
                txtAge.setText("Signal age: " + (lastSignalTime - values.timestamp) + " ms");
                txtLatitude.setText("Lat: " + values.coords.latitude);
                txtLongitude.setText("Long: " + values.coords.longitude);

                // Heading, speed, altitude, accuracy, and altitude accuracy may or may not be supported.
                if(typeof(values.coords.heading) !== 'undefined') {
                    txtHeading.setText("Heading: " + values.coords.heading);
                }
                else {
                    txtHeading.setText("Heading: N/A");
                }
                if(typeof(values.coords.speed) !== 'undefined') {
                    txtSpeed.setText("Speed: " + values.coords.speed + " km/h");
                }
                else {
                    txtSpeed.setText("Speed: N/A");
                }
                if(typeof(values.coords.altitude) !== 'undefined') {
                    txtAltitude.setText("Altitude: " + values.coords.altitude + " m");
                }
                else {
                    txtAltitude.setText("Altitude: N/A");
                }
                if(typeof(values.coords.accuracy) !== 'undefined') {
                    txtAccuracy.setText("Accuracy: " + values.coords.accuracy + " m");
                }
                else {
                    txtAccuracy.setText("Accuracy: N/A");
                }
                if(typeof(values.coords.altitudeAccuracy) !== 'undefined') {
                    txtAltAccuracy.setText("Alt accuracy: " + values.coords.altitudeAccuracy + " m");
                }
                else {
                    txtAltAccuracy.setText("Alt accuracy: N/A");
                }
            },

            updateStatus: function(status) {
                statusCount += 1;

                // Explicitly check for valid status
                if(status === 0) {
                    txtStatus.setText("Status: success");
                }
                else if(status === 1) {
                    txtStatus.setText("Status: permission error");
                }
                else if(status === 2) {
                    if(statusCount % 2 === 0) {
                        txtStatus.setText("Status: no GPS signal");
                    }
                    else {
                        txtStatus.setText("Status: no GPS signal !!");
                    }
                    this.clearValues();
                }
                else if(status === 4) {
                    txtStatus.setText("Status: timeout");
                }
                else {
                    txtStatus.setText("Status: " + status + " (unexpected)");
                }
            },

            clearValues: function() {
                txtAge.setText("Signal age:");
                txtLatitude.setText("Latitude:");
                txtLongitude.setText("Longitude:");
                txtHeading.setText("Heading:");
                txtSpeed.setText("Speed:");
                txtAltitude.setText("Altitude:");
                txtAccuracy.setText("Accuracy:");
                txtAltAccuracy.setText("Alt accuracy:");
            }

            /*
             Controller and View are now linked
             Return void, or a Promise to resolve for deferred completion.
             */
//            beforeStart: function($super) {
//                Log.debug("view beforeStart()");
//                return $super();
//            }.override(),

            /*
             View is transitioned in and elements are visible.
             */
//            started: function($super) {
//                Log.debug("view started()");
//                return $super();
//            }.override(),

            /*
             Called prior to pausing the application and placing in background
             */
//            beforePause: function($super) {
//                Log.debug("view beforePause()");
//                return $super();
//            }.override(),

            /*
             Application is paused and is now paused in background
             */
//            paused: function($super) {
//                Log.debug("view paused()");
//                return $super();
//            }.override(),

            /*
             Called prior to being reactivated from being paused in background
             */
//            beforeResume: function($super) {
//                Log.debug("view beforeResume()");
//                return $super();
//            }.override(),

            /*
             Application is reactivated to foreground
             */
//            resumed: function($super) {
//                Log.debug("view resumed()");
//                return $super();
//            }.override(),

            /*
             Called after the application has been paused and fully transitioned out of view,
             but prior to the module being stopped and removed from runtime.
             */
//            beforeStop: function($super) {
//                Log.debug("view beforeStop()");
//                return $super();
//            }.override(),
        }
    );
});
