define(function(require) {
    'use strict';

    var TabView = require('common/ui/TabView');

    var tabs = [
        { label: 'Teams' },
        { label: 'Standings' }
    ];

    return new TabView({
        model : {
            tabs: tabs
        },
        selectedIndex: 0
    });
});
