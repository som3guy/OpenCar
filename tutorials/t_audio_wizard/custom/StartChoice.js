define(function(require) {
    'use strict';

    /*
     This module controls the default start behavior of the audio application and manages the decision to start at
     either the Now Playing screen and the Content List (if available), and what URL and metadata should be sent
     to the Now Playing screen should it be the first presentation of the application.

     This module file is created by the audio wizard.

     */
    return (
    {
        // This init method is called at the start of the module so that you may perform
        // any one-time initialization tasks you may need.
        init : function() {

        },

        //
        // Use this data to return the starting node data if you wish to start at the Now Playing screen.
        //
        // This data may be "leaf" data -- containing the stream url and metadata --
        // or it may be "fetch" data -- containing a fetchInfo block with named service and parser methods
        // that are set up in your ServiceFetch and ServiceParse modules.
        //
        // If you are fetching data, you should include a field in your "fetchInfo" block that
        // or otherwise use a special parser to insure the final return of the fetch is a single
        // item and not a list.  If a list is returned, the default action is to use the first item
        // of that list as the item data.
        //
        // Return nothing (undefined) to force starting at the content list screen
        //
        getStartNodeData: function() {

        }

    });
});
