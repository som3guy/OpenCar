define(function(require) {
    'use strict';

    var Class           = require('common/Class'),
        ListChamber     = require('common/platform/chamber/ListChamber');

    return Class.create(
        ListChamber,
        {
            render : function($super, config){
                var self = this;
                config.itemClick = function(lv, item, element, isSelected){
                    self.resume("now-playing-chamber", item);
                }.bind(this);
                if (this.moduleView._breadcrumb) {
                    this.moduleView._breadcrumb.model.set('title', 'Radio Tuner - Channels');
                }
                $super(config);
            },
            
            beforeResume: function($super) {
                var self = this;
                if (this.moduleView._breadcrumb) {
                    this.moduleView._breadcrumb.model.set('title', 'Radio Tuner - Channels');
                }
                this.moduleView.getController().getChannels().done(function(aChannels) {
                    self.reset(aChannels);
                });
                return $super();
            }.override(),

            data: function () {
                return this.moduleView.getController().getChannels();
            }.override()
             
        }
    );
});
