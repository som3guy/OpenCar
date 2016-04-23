define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ModuleView              = require('common/platform/ModuleView');


    /*
    This is an example of an application that has multiple 'screens' (Chambers) of operation.
    The Chambers are defined in the app.manifest file in the "screens" property.
    The "screens" property can also be a reference to a separate json file containing the definitions.
    These definitions are used to frame the relationship of different Chambers of operation.

    On button reaction, the 'goto' method is used to transition to a new chamber by name.

    See the documentation for more information on Chambers and their use.
     */

    var View = Class.create(
        ModuleView,
        {
        }
    );

    return View;
});
