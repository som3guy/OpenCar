define(function(require) {

    var Promise                 = require('common/lib/Promise'),
        PlatformConfig          = require('common/PlatformConfig'),
        DataTree                = require('common/platform/DataTree'),
        ApplicationManagerAPI   = require('common/platform/ApplicationManagerAPI'),
        RegistryAPI             = require('common/platform/RegistryAPI');

    var registry;
    var appMgr;

    return {

        init: function(controller) {
            appMgr = new ApplicationManagerAPI();
            registry = new RegistryAPI();
            controller.getRouter().register('*', onRouteChange.bind(controller));
            controller.setStoppable(false);
            return Promise.wrap();
        },

        startApplication: function(appId) {
            appMgr.startApplication(appId);
        },

        /**
         * Return the list of categories known to the framework for this profile
         * @returns {string[]} List of category id strings
         */
        getCategorizedApps: function() {
            var p = new Promise();
            function fail(err) {
                Log.error("Failed to get categorized application info ",err);
                p.reject();
            }
            registry.load().then(
                function() {
                    registry.getCategories().then(
                        function(catList) {
                            p.resolve(catList);
                        },
                        fail
                    )
                },
                fail
            );
            return p;
        }
    };

    function onRouteChange(category) {
        var str = category['*'];
        var parts = str.split('/');
        var subhash, id;
        if(parts.length) {
            subhash = parts[0];
        }
        if(parts.length==2) {
            id = parts[1];
        }

        if(subhash==='category' && id !== undefined) {
            this.getView().gotoCategory(id);
        }else{
            this.getView().resetAndRefresh();
        }
    }

});