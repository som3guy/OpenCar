define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController');

    /*
    This is the application "controller" module.

     The app "controller" module holds the application logic in an true MVC architecture.
     The corresponding application "view" is used for any UI control handling.

     You may choose to not use a controller and place your application logic in the view code space.
     If you do so, you may simply leave this file untouched, or remove it from your application folder
     and remove the "controller" line from your app.manifest file.
     */

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


            /*
             Called prior to the application being displayed.
             Executes in parallel to the module view's init().
             Controller and View are not yet linked
             Return void, or a Promise to resolve for deferred completion.
             */
            init: function($super) {
                Log.debug("controller init()");

                return $super();
            }.override()

        }
    );

});
