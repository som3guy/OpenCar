define(function (require) {
    'use strict';


// URL utilities

    var Class = require('common/Class');


    return Class.create({

        initialize: function (u, parameterMap) {

            this.url = u;
            // optional supplied querystring
            this.queryData = parameterMap;

        },

        // ~~~~~~~~~~~~~~ QueryString ~~~~~~~~~~~~~~
        // allow for multiples
        addQueryParameter: function (p, v) {
            var struct = this.queryData[p];

            // append
            if ( Array.isArray(struct) ) {
                struct.push(v);
                return;
            }

            // create holding
            if ( struct === null ) {
                this.queryData[p] = [v];
            }

            // xform scalar to indexed array, appending new value
            else {
                this.queryData[p] = [struct, v];
            }

        },

        setQueryParameter: function (p, v) {
            this.queryData[p] = v;
        },

        getQueryParameter: function (p) {
            return this.queryData[p];
        },
        removeQueryParameter: function (p) {
            delete this.queryData[p];
        },

        // the domain and URL path portion
        getURL: function () {
            return this.url;
        },

        serialize: function () {

            var url = "";

            url += this.url;

            var pathSuffixDynamicsList = [];

            var serializeQueryString = this.serializeQuery();

            // per RFC -- known this for YEARS

            if ( serializeQueryString && serializeQueryString.length > 1 ) {
                pathSuffixDynamicsList.push("?"+serializeQueryString);
            }

            // tack on goodies here !
            url += pathSuffixDynamicsList.join("");

            return url;
        },

        // turn an object literal into a URL encoded packed string for transmission across network
        serializeQuery: function () {
            var map = this.queryData;
            return Object.keys(map).reduce(function (a, k) {
                var valuesRef = map[k];
                // every value is fitted to be an array ( of 1 or more )
                if ( !Array.isArray(valuesRef) ) {
                    valuesRef = [valuesRef];
                }

                // push all the encoded items
                for (var i = 0; i < valuesRef.length; i++) {
                    var scalarValue = valuesRef[i];
                    a.push(encodeURIComponent(k)+'='+encodeURIComponent(scalarValue));
                }

                return a;
            }, []).join('&');
        }


    });


});
