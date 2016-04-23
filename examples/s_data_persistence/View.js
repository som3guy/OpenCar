define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        Button      = require('common/ui/Button'),
        Pane        = require('common/ui/Pane'),
        TextView    = require('common/ui/TextView'),
        Toast       = require('common/ui/Toast');

    return Class.create(
        ModuleView,
        {
            init: function() {
                this.pane = new Pane({ id: "container" });
                this.buttonsPane = new Pane({ id: "buttons" });

                this.code0 = new TextView({ id: "code0"});
                this.code1 = new TextView({ id: "code1"});
                this.code2 = new TextView({ id: "code2"});

                new Button({
                    model : {
                        text: 'Generate New Code'
                    },
                    id: 'btn-generate',
                    click: function() {
                        this.getController().generateNewCode();
                    }.bind(this)
                }).render(this.buttonsPane);

                new Button({
                    model : {
                        text: 'Save Current Code'
                    },
                    id: 'btn-save',
                    click: function() {
                        if (this.displayedCode) {
                            this.getController().saveCode(this.displayedCode);
                        }
                    }.bind(this)
                }).render(this.buttonsPane);

                new Button({
                    model : {
                        text: 'Clear Current Code'
                    },
                    id: 'btn-clear',
                    click: function() {
                        this.clearCode();
                    }.bind(this)
                }).render(this.buttonsPane);

                new Button({
                    model : {
                        text: 'Load Saved Code'
                    },
                    id: 'btn-load',
                    click: function() {
                        this.getController().loadCode();
                    }.bind(this)
                }).render(this.buttonsPane);
            },

            displayCode: function(code) {
                this.displayedCode = code;

                this.code0.model.set('code', code[0]);
                this.code1.model.set('code', code[1]);
                this.code2.model.set('code', code[2]);
            },

            clearCode: function() {
                this.displayedCode = null;

                this.code0.model.set('code', '');
                this.code1.model.set('code', '');
                this.code2.model.set('code', '');
            },

            codeNotFound: function() {
                Toast.show('No saved code found.');
            }
        }
    );
});
