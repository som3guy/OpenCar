define(function(require) {
    'use strict';

    var PlatformWorkerRequestCommand    = require('common/platform/PlatformWorkerRequestCommand');
    var WorkerResponse                  = require('common/worker/WorkerResponse');
    var PlatformViewport                = require('platform/presentation/PlatformViewport');

    // Import the original controller file
    var PlatformPresentationController = require('/ui/platform/presentation/PlatformPresentationController.js');

    var originalInitConnection = PlatformPresentationController._initConnection;
    PlatformPresentationController._initConnection = function(connection) {
        originalInitConnection.call(this, connection);

        connection.addRequestListener(
            PlatformWorkerRequestCommand.COLLAPSE_ORBITAL,
            function(request) {
                var response = new WorkerResponse({
                    request     : request,
                    status      : WorkerResponse.Status.SUCCESS
                });

                PlatformViewport.collapseOrbital.apply(PlatformViewport);
                response.send(connection);
            }
        );
    };

    return PlatformPresentationController;
});
