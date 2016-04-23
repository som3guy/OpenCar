define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    // max length of line to display
    var LINE_LENGTH = 30;

    // Breaks license text into individual lines
    var breakLines = function(block) {
        var lines = [];
        if(block) {
            block = block.replace(/(\n\n)/gm,"-LINEBREAK--LINEBREAK-");
            block = block.replace(/\n/gm," ");
            block = block.replace(/\s+/gm," ");
            block = block.replace(/-LINEBREAK-/gm,"\n");
            var ln = 0;
            var n = 0;
            while(n < block.length) {
                var t = n + LINE_LENGTH + 1;
                if(t >= block.length) {
                    t = n+1;
                }
                while(--t > n) {
                    var c = block.charAt(t);
                    if(c === ' ' || c === '\t' || c === '\n') {
                        break;
                    }
                }
                if(t === n) {
                    // can't find a space in this line.  Break uncomfortably.
                    t = n + LINE_LENGTH;
                    if(t > block.length) {
                        t = block.length;
                    }
                }
                lines[ln++] = {text: block.substring(n, t).trim()};
                n = t;
            }
        }
        return lines;
    };

    var Menu = Class.create(
        ListChamber,
        {
            data: function () {
                return this.moduleView.data();
            }.override(),
            render : function($super, cfg) {
                cfg.itemClick = function(lv, model){
                    var branch = model.get('_data_tree_branch');
                    if(branch && branch.length && branch[0].scrollText){
                        this.goto('license',breakLines(branch[0].text));
                        return false;
                    }
                }.bind(this);
                $super(cfg);
            }
        });

    return Menu;
});
