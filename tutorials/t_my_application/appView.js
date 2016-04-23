define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
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
//            init: function($super) {
//                Log.debug("view init()");
//                return $super();
//            }.override(),

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
