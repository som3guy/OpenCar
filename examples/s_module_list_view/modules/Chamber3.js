define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        Chamber                 = require('common/platform/chamber/Chamber');

    var NowPlayingChamber = Class.create(
        Chamber,
        {
            init : function($super, screen){
                $super(screen);
                document.getElementById('chamber3-to-screen1').getControl().addClickListener(function(){
                    this.goto('screen1');
                }.bind(this));

                document.getElementById('chamber3-to-chamber1').getControl().addClickListener(function(){
                    this.goto('chamber1').done(function(){
                        Log.log("WENT TO CHAMBER 1");
                    });
                }.bind(this));

                document.getElementById('chamber3-to-screen2').getControl().addClickListener(function(){
                    this.goto('screen2');
                }.bind(this));

                document.getElementById('chamber3-to-chamber2a').getControl().addClickListener(function(){
                    this.goto('chamber2a');
                }.bind(this));

                document.getElementById('chamber3-to-chamber2b').getControl().addClickListener(function(){
                    this.goto('chamber2b');
                }.bind(this));
            }.override(),
            focusDefault : function($super){
                $super();
                document.getElementById('chamber3-to-screen1').getControl().requestFocus();
            }.override(),
            goto : function(id){
                return this.moduleView.goto(id);
            }
        });

    return NowPlayingChamber;
});
