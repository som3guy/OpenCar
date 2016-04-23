define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ButtonBar               = require('common/ui/ButtonBar'),
        Chamber                 = require('common/platform/chamber/Chamber');

    var PREVIOUS_BUTTON_INDEX = 0;
    var ChamberB = Class.create(
        Chamber,
        {
            init : function($super, container){
                $super(container);

                this.buttonBar = new ButtonBar({
                    classNames : ['bottom'],
                    model: {
                        buttons: [
                            {
                                label: "Previous",
                                classNames :['bb-last-button']
                            }
                        ]
                    },
                    onButtonAction: function(button){
                        switch(button.getIndex()){
                            case PREVIOUS_BUTTON_INDEX:
                                this.goto('chamber-a');
                            break;
                        }
                    }.bind(this)
                });
                this.buttonBar.init();
                this.buttonBar.render(this.screen.element);
            }.override()
        }
    );


    return ChamberB;
});
