define(function(require) {
    'use strict';

    /*
     This module allows for custom view-side code designed to handle XML parsing.

     XML parsing requires a DOM-level object not available in a WebWorker (controller-side code).

     This module is invoked by the audio wizard to support the request for XML web-service return parsing.
     */
    return (
        {
            // This init method is called at the start of the module so that you may perform
            // any one-time initialization tasks you may need.
            init : function() {
                Log.debug("ServiceParseXML init method called");
            },

            //
            // Put your functions here that match the "parseFunction" name in the fetchInfo block.
            // The fetchInfo data is passed as a parameter as well.
            // return catalog data suitable for listing as an array (or a Promise returning one).
            //
            // e.g.:
            // myXmlServiceParseMethod : function(xmlData, fetchInfo) {
            //      // XML Data is a DOM object parsed from the XML service response.
            //      // return catalog data parsed out of the response.
            //      // Note that we 'build' additional data tree and fetch directives by including
            //      // _data_tree_branch and/or fetchInfo members in an array item representing a "branch".
            // }
            //

            parseSportsStations : function(xmlData, fetchInfo) {
                var listItems = [];
                var stations = xmlData.getElementsByTagName("station");
                for(var i=0; i<stations.length; i++) {
                    var newItem = {};
                    var station = stations[i];
                    var el = station.firstChild;
                    while(el) {
                        if(el.nodeName === "name") {
                            newItem.stationName = el.textContent;
                            newItem.text = el.textContent;
                        }
                        else if(el.nodeName === "display") {
                            newItem.trackTitle = el.textContent;
                        }
                        else if(el.nodeName === "streamUrl") {
                            newItem.trackUrl = el.textContent;
                        }
                        else if(el.nodeName === "stationLogo") {
                            newItem.contentImgUrl = fetchInfo.url.substring(0,fetchInfo.url.lastIndexOf("/")+1)+el.textContent;
                        }
                        el = el.nextSibling;
                    }
                    if(newItem.text && newItem.trackUrl) {
                        listItems.push(newItem);
                    }

                }
                return listItems;
            }
        }
    );
});