define(function(require) {
    'use strict';

    var ArrayList = require('common/ArrayList'),
        ListView = require('common/ui/CenteredListView');

    var arrayList = new ArrayList([
        { text: 'Seattle' },
        { text: 'Tacoma' },
        { text: 'Olympia' },
        { text: 'Portland' },
        { text: 'Salem' },
        { text: 'Sacramento' },
        { text: 'San Francisco' },
        { text: 'Los Angeles' },
        { text: 'San Diego' }
    ]);

    return new ListView({
        title: "",
        model: {
            arrayList: arrayList
        }
    });
});
