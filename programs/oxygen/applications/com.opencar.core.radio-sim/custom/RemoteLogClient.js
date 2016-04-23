define(function(require) {
    'use strict';

    var Class = require('common/Class'),
        Http = require('common/Http'),
        Logging = require('common/Logging'),
        Promise = require('common/lib/Promise');

    var endpointUrl = "http://demo-appws.opencar.com/";

    var remoteLogClient = Class.create({

        /*
         *  Post text message to a remote log.
         */
        post : function(msg) {
            var promise = new Promise(),
                data = { msg:  msg };

            Http.ajax({
                url: endpointUrl,
                data: data,
                method: 'GET',
                error: function (response) {
                    Logging.error('Failed to post message.');
                    promise.reject();
                },
                success: function (response) {
                    promise.resolve();
                }.bind(this)
            });
            return promise;
        }

    });

    return remoteLogClient;
});