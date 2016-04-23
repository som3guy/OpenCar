define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController'),
        Persist             = require('common/platform/PersistAPI');

    var CODE_PERSIST_KEY = 'persist_code';

    var adjectives  = [ 'BIG', 'SAD', 'OLD', 'DRY', 'ODD', 'MAD', 'ILL', 'ONE' ],
        colors      = [ 'RED', 'BLUE', 'GREEN', 'GOLD', 'WHITE', 'BLACK', 'PINK', 'CYAN' ],
        animals     = [ 'ANT', 'BEE', 'CAT', 'DOG', 'EMU', 'FLY', 'GNU', 'HEN' ];

    return Class.create(
        ModuleController,
        {
            init: function() {
                this._persist = new Persist(this.getContext());
            },

            loadCode: function() {
                this._persist.get(CODE_PERSIST_KEY).then(function(code) {
                    if (code) {
                        this.getView().displayCode(code);
                    } else {
                        this.getView().codeNotFound();
                    }
                }.bind(this));
            },

            saveCode: function(value) {
                this._persist.set(CODE_PERSIST_KEY, value);
            },

            generateNewCode: function() {
                var code = [
                    adjectives[Math.floor(Math.random() * adjectives.length)],
                    colors[Math.floor(Math.random() * colors.length)],
                    animals[Math.floor(Math.random() * animals.length)]
                ];

                this.getView().displayCode(code);
            }
        }
    );
});
