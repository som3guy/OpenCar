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

        }
    );

});
