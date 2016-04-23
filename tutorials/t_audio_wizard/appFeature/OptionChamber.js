define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ActionableListItemView  = require('common/ui/ActionableListItemView'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    //////////////////////////
    // build data for List
    /////////////////////////
    var tree=[];
    tree.push({
        text: 'Colors',
        _data_tree_branch : [
            {
                text: 'Red',
                checked: false
            },
            {
                text: 'White',
                checked: false
            },
            {
                text: 'Blue',
                checked: false
            }
        ]
    });
    tree.push({
        text: 'Flavors',
        _data_tree_branch : [
            {
                text: 'Chocolate',
                checked: false
            },
            {
                text: 'Vanilla',
                checked: false
            },
            {
                text: 'Raspberry',
                checked: false
            }
        ]
    });
    tree.push({
        text: 'Activity',
        _data_tree_branch : [
            {
                text: 'Relaxation',
                checked: false
            },
            {
                text: 'Workout',
                checked: false
            },
            {
                text: 'Party',
                checked: false
            }
        ]
    });

    var options = {};
    var entered;

    var OptionChamber = Class.create(
        ListChamber,
        {
            render : function($super, config) {
                // register item click event listener
                config.itemClick = function(lv, model) {
                    if(model) {
                        if (!model.get('_data_tree_branch')) {
                            var checked = !model.get('checked');
                            model.set('checked', checked);
                            options[model.get('text')] = checked;
                        }
                    }
                };
                config.listItemViewType = ActionableListItemView;
                // proceed with rendering
                $super(config);
            },
            data: function () {
                // return the data for our list
                return tree;
            }.override(),

            activate: function($super) {
                entered = true;
                Log.log("Activated");
                return $super();
            }.override(),

            /**
             * When we exit (back out) of this, set the results to the NP screen
             */
            beforePause : function($super) {

                Log.log("ENTERED ", entered);

                // TODO: Not sure what the problem is with the need to latch this.  Something to look at later. (attn: Lam?)
                if(!entered) return;
                entered = false;

                var tracksToPickFrom = [
                    // okay, so my options are limited...
                    "opencar/ocradio/pd/214.mp3",
                    "opencar/ocradio/pd/231.mp3",
                    "opencar/ocradio/pd/401.mp3",
                    "opencar/ocradio/pd/665.mp3",
                    "opencar/ocradio/pd/1165.mp3",
                    "opencar/ocradio/pd/1425.mp3",
                    "opencar/ocradio/pd/5954.mp3",
                    "opencar/ocradio/pd/6378.mp3",
                    "badjam/basic%20blues%20stuff%20mix.wav",
                    "badjam/foobar%20mix.wav",
                    "opencar/ocradio/pd/6380.mp3",
                    "opencar/ocradio/pd/6418.mp3",
                    "opencar/ocradio/pd/6420.mp3",
                    "opencar/ocradio/pd/6424.mp3",
                    "opencar/ocradio/pd/6811.mp3",
                    "opencar/ocradio/pd/6922.mp3",
                    "opencar/ocradio/pd/6931.mp3",
                    "opencar/ocradio/pd/7070.mp3",
                    "opencar/ocradio/pd/7185.mp3"
                ];

                // Read the options and create the station name.  Presumably, select content based on choices (in a real world)
                // Note: the way I am doing this here should NOT be considered exemplary of anything good in any respect.
                // It just happens to work in this particularly contrived case.
                var optionStationName = "";
                for(var p in options) {
                    if(options.hasOwnProperty(p)) {
                        optionStationName += p + " ";
                    }
                }
                optionStationName = optionStationName + "Radio";
                var pickArray = [];
                var items = Math.floor(Math.random() * (tracksToPickFrom.length - 4) + 4);
                var picked = {};
                while(items--) {
                    var n;
                    while(!n || picked[n]) {
                        n = Math.floor(Math.random() * tracksToPickFrom.length);
                    }
                    picked[n] = true;
                    var track = tracksToPickFrom[n];
                    var title = track.substring(track.lastIndexOf("/")+1, track.lastIndexOf(".")).replace(/\%20/g, " ");
                    Log.log("picked: "+title);

                    pickArray.push({
                        text: title,
                        trackTitle: title,
                        stationName: optionStationName,
                        trackUrl: "http://www.ohmert.com/"+track
                    });
                }
                Log.log(optionStationName, pickArray);

                // Now that we have our playlist assembled, submit it.
                var menuChamber = this.moduleView.getChamber('menu-chamber');

                var keepList = true;

                if(keepList) {
                    // Okay... here's how we do it if we want to add it to the menu list

                    // This is the path (array of strings) to where we want to insert our option radio
                    // In this example, I want to put it at the root, but I could put it under a category too.
                    var pathArray = []; //["Selected Stations"];
                    // This is the path once we've inserted our station name
                    var insertedPathArray = pathArray.concat(optionStationName);

                    // For grins, let's delete our target branch if we find it there already (to test the API if nothing else)
                    // (we could also choose to skip... If we did nothing here, we'd create a duplicate... that could be awkward).
                    if (menuChamber.getNodeAtPath(insertedPathArray)) {
                        menuChamber.removeNodeAtPath(pathArray, optionStationName);
                    }
                    // Then we'll add the new one
                    menuChamber.insertNodePathBranch(pathArray, pickArray, optionStationName);

                    // Now let's switch to this branch and start it playing
                    menuChamber.activateAtPath(insertedPathArray);
                } else {
                    // And this is how you would use a detached list for NowPlaying screen only
                    menuChamber.actOnNodeData(pickArray);
                }

                return $super();
            }.override()

        });

    return OptionChamber;

});
