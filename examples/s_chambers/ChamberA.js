define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ButtonBar               = require('common/ui/ButtonBar'),
        Chamber                 = require('common/platform/chamber/Chamber');

    var NEXT_BUTTON_INDEX = 0;
    var ChamberA = Class.create(
        Chamber,
        {
            init : function($super, container){
                $super(container);
                this.buttonBar = new ButtonBar({
                    classNames : ['bottom'],
                    model: {
                        buttons: [
                            {
                                label: "Next",
                                classNames :['bb-next-button']
                            }
                        ]
                    },
                    onButtonAction: function(button){
                        switch(button.getIndex()){
                            case NEXT_BUTTON_INDEX:
                                this.goto('chamber-b');
                            break;
                        }
                    }.bind(this)
                });
                this.buttonBar.init();
                this.buttonBar.render(this.screen.element);
            }.override()
        }
    );


    return ChamberA;
});
