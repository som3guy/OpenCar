define(function(require) {
    'use strict';

    var Class           = require('common/Class'),
        ModuleView      = require('common/platform/ModuleView'),
        Button          = require('common/ui/Button'),
        ButtonBar       = require('common/ui/ButtonBar'),
        Pane            = require('common/ui/Pane');

    return Class.create(
        ModuleView,
        {
            init: function() {
                var extraButton1, extraButton2;

                var buttonBar = new ButtonBar({
                    model: {
                        buttons: [
                            {
                                label:      "Blue Circle",
                                "classNames"      : ["bb-last-button"]
                            },
                            {
                                label:      "Red Circle",
                                "classNames"      : ["bb-tag-button"]
                            },
                            {
                                label:      "Green Circle",
                                "classNames"      : ["bb-play-button"]
                            },
                            {
                                label:      "Yellow Circle",
                                "classNames"      : ["bb-favorite-button"]
                            },
                            {
                                label:      "Orange Circle",
                                "classNames"      : ["bb-next-button"]
                            }
                        ]
                    },
                    onButtonAction: this.onButtonAction.bind(this)
                });
                buttonBar.init();

                // For the app and for testing focus stuff, create a couple of other buttons
                extraButton1 = new Button({
                    model: {text: "Pin to Bottom"},
                    click: function() {
                        buttonBar.element.classList.add('bottom');
                    }
                });
                extraButton2 = new Button({
                    model: {text: "Unpin from Bottom"},
                    click: function() {
                        buttonBar.element.classList.remove('bottom');
                    }
                });

                // Put together the app view
                this.appPane = new Pane({id: "bb_app"});

                this.appPane.addChild(extraButton1);
                this.appPane.addChild(extraButton2);

                this.appPane.addChild(buttonBar);

                this.appPane.render(this.getView());
            },

            onButtonAction: function(buttonObj) {
                Log.log("*** SELECTED BUTTON #" + buttonObj.getIndex()+' "'+buttonObj.getLabel()+'"',buttonObj);
            }
        }
    );
});
