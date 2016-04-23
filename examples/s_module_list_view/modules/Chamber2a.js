define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Chamber                 = require('common/platform/chamber/Chamber');

    var NowPlayingChamber = Class.create(
        Chamber,
        {
            init : function($super, screen){
                $super(screen);
                document.getElementById('chamber2a-to-screen1').getControl().addClickListener(function(){
                    this.goto('screen1');
                }.bind(this));

                document.getElementById('chamber2a-to-chamber1').getControl().addClickListener(function(){
                    this.goto('chamber1');
                }.bind(this));

                document.getElementById('chamber2a-to-chamber2b').getControl().addClickListener(function(){
                    this.goto('chamber2b');
                }.bind(this));

                document.getElementById('chamber2a-to-screen3').getControl().addClickListener(function(){
                    this.goto('screen3');
                }.bind(this));

                document.getElementById('chamber2a-to-chamber3').getControl().addClickListener(function(){
                    this.goto('chamber3');
                }.bind(this));
            }.override(),
            focusDefault : function($super){
                $super();
                document.getElementById('chamber2a-to-screen1').getControl().requestFocus();
            }.override(),
            goto : function(id){
                this.moduleView.goto(id);
            }
        });

    return NowPlayingChamber;
});
