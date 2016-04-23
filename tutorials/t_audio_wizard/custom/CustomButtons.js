define(function(require) {
    'use strict';

    /*
      This module is invoked by the audio wizard template if any buttons requiring specific implementation
      were selected.

      Action handlers are defined for each of these buttons.  When the button is activated, these methods are
      called.  You should modify these methods to supply the desired action to the buttons.

      The 'this' reference passed to methods of this class is that of the NowPlayingChamber.  From here, you
      can access other Chambers that are defined or call  upon other actions.  See the documentation at
      the InsideTrack site for more information.

     */
    return ({

        /* Button Actions */
        // Handle the action of the Approve event
        onApprove : function() {
            Log.log("Approve event fired");
        },
        // Handle the action of the Disapprove event
        onDisapprove : function() {
            Log.log("Disapprove event fired");
        },

        onDiscover : function() {
            Log.log("Discover event fired", this);
            this.moduleView.goto("option-pick");
        },

        ////End_Button_Actions////

        /**
         * This method is called when this module is activated.
         * The 'this' reference is to the NowPlayingChamber.
         */
        init: function() {
            Log.debug("CustomButtons init method called");
        }

    });
});
