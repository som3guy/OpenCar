define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        IconsListChamber        = require('$MODULE_PATH/apps-common/components/IconsListChamber');

    var List = Class.create(
        IconsListChamber, {
            data: function() {
                var data = [
                    {
                        'text': 'Reset Data'
                    },
                    {
                        'text': 'Fuel Price'
                    }
                ];
                return data;
            }
        });

    return List;
});
