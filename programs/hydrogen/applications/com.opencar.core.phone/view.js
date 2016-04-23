define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        ModuleView = require('common/platform/ModuleView');

    return Class.create(
        ModuleView,
        {
            dataReceived: function (data) {
                if (data && data.type == "dial") {
                    this.goto("chamber-dial-pad", data);
                } else if (data && data.type == "incoming") {
                    this.goto("chamber-call-info", data);
                }
            }
        }
    );
});
