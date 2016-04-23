define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Chamber                 = require('common/platform/chamber/Chamber');

    var NowPlayingChamber = Class.create(
        Chamber,
        {
            init : function($super, screen){
                $super(screen);
                document.getElementById('chamber2b-to-screen1').getControl().addClickListener(function(){
                    this.goto('screen1');
                }.bind(this));

                document.getElementById('chamber2b-to-chamber1').getControl().addClickListener(function(){
                    this.goto('chamber1');
                }.bind(this));

                document.getElementById('chamber2b-to-chamber2a').getControl().addClickListener(function(){
                    this.goto('chamber2a');
                }.bind(this));

                document.getElementById('chamber2b-to-screen3').getControl().addClickListener(function(){
                    this.goto('screen3');
                }.bind(this));

                document.getElementById('chamber2b-to-chamber3').getControl().addClickListener(function(){
                    this.goto('chamber3');
                }.bind(this));

            }.override(),
            focusDefault : function($super){
                $super();
                document.getElementById('chamber2b-to-screen1').getControl().requestFocus();
            }.override(),
            goto : function(id){
                this.moduleView.goto(id);
            }
        });

    return NowPlayingChamber;
});
