define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    var LicenseText = Class.create(
        ListChamber,
        {
            activate : function(data) {
                // reset data
                this.nestedListManager.setListItemArray(data);
                this.nestedListManager.updateCurrentNode.call(this.nestedListManager);
            }
        });

    return LicenseText;
});
