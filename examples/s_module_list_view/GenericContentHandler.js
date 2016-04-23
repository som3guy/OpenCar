define(function(require) {
    'use strict';

    var Class                  = require('common/Class'),
        ListDataHandlerBase    = require('common/platform/ListDataHandlerBase');

    return Class.create(
        ListDataHandlerBase,
        {
            onBeforeLeafDataLoaded : function(){
            }.override(),
            onLeafDataLoaded : function(finalObject){
            }.override(),
            parseFetchedResponse : function(node, fetchFunctionName, respData){
                return respData;
            }.override(),

            doSomething : function(){
                return [
                    {
                        text: 'lo there'
                    }
                ];
            }

        }
    );
});
