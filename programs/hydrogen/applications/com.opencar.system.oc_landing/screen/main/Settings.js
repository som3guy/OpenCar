define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        Promise             = require('common/lib/Promise'),
        ListChamber         = require('common/platform/chamber/ListChamber');


    return Class.create(
        ListChamber,
        {
            started: function($super) {
                this.setHandlerObject(this);
                return $super();
            },
            data: function() {
                return [
                    {
                        text: "About",
                        actionInfo: {
                            name: "about"
                        }
                    },
                    {
                        text: "Showroom Settings",
                        actionInfo: {
                            name: "showroomSettings"
                        }
                    }
                ];
            },
            onActionActivated: function(node) {
                var name = node.actionInfo.name;
                Log.debug("Activated "+name);
                if(name === 'showroomSettings') {
                    this.goto("options");
                }
                else if(name === 'about') {
                    this.moduleView.getController().startApplication('com.opencar.system.about');
                }

            }
        }
    );
});