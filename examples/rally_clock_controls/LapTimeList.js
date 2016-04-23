define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ListView    = require('common/ui/ListView');

    var LapTimeList = Class.create(
        {
            initialize: function( container ) {

                this.lapCount = 0;

                this.list = new ListView({
                    arrayList:[{ text : 'Lap Times'}]
                }).render( container );
            },

            // Adds a lap time to the list.
            // 
            addLapTime: function( time ) {

                var timeStr = (this.lapCount += 1) + " - " + time,
                    arrayList = this.list.getArrayList();

                this.list.addItems([{ text : timeStr }]);

                // The Oxygen list looks better for display (more entries are visible) if we don't select the
                // very last element.

                if(arrayList.length < 3) {
                    this.list.set('selectedIndex', arrayList.length - 1);
                }
                else {
                    this.list.set('selectedIndex', arrayList.length - 2);
                }
            },
            
            // Clears the list and resets the lap counter.
            //
            clear: function() {

                this.list.set('selectedIndex', 0);
                this.list.clear();
                this.list.addItems([{ text : 'Lap Times'}])
                this.lapCount = 0;
            }
        }
    );

    return LapTimeList;
});