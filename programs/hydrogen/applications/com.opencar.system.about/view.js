define(function(require) {
    'use strict';

    var Class           = require('common/Class'),
        ModuleView      = require('common/platform/ModuleView');

    return Class.create(
        ModuleView,
        {

            data : function(){
                return this.getController().data();
            }
        }
    );
});
