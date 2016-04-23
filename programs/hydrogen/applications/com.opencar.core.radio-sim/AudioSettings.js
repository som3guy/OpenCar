define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
    Chamber         = require('common/platform/chamber/Chamber'),
    Pane            = require('common/ui/Pane'),
    Slider          = require('common/ui/Slider'),
    Checkbox        = require('common/ui/Checkbox');

    return Class.create(
        Chamber,
        {
            init : function($super, container) {
                if (this.moduleView._breadcrumb) {
                    this.moduleView._breadcrumb.model.set('title', 'Audio Settings');
                }
                $super(container);
                var self = this;
                var containerMain = new Pane({
                    id: "audio-settings-container-main"
                }).render(this.screen);
                var containerVolume = new Pane({
                    id: "audio-settings-container-volume"
                }).render(containerMain);
                /* NOTE: Save this for possible later use.
                var textViewVolume = new TextView({
                    id: "text-view-volume",
                    text: "Volume"
                }).render(containerVolume);
                */
                this.sliderVolume = new Slider({
                    id: "slider-volume",
                    change: function(event, data) {
                        self.moduleView.getController().setVolume(data);
                    }
                }).render(containerVolume);
                var containerMute = new Pane({
                    id: "audio-settings-container-mute"
                }).render(containerMain);
                /* NOTE: Save this for possible later use.
                var textViewMute = new TextView({
                    id: "text-view-mute",
                    text: "Mute"
                }).render(containerMute);
                */
                this.checkboxMute = new Checkbox({
                    id: "checkbox-mute",
                    click: function() {
                        self.moduleView.getController().setMute(this.get("checked")).error(function(result) {
                            Log.debug(result);
                        });
                    }
                }).render(containerMute);
                /* NOTE: Save this for possible later use.
                var buttonBack = new Button({
                    id: "button-audio-settings-back",
                    text: "Back",
                    click: function() {
                        self.resume("now-playing-chamber");
                    }
                }).render(containerMain);
                */
            }.override(),

            beforeStart: function($super) {
                this.moduleView.getController().getPersistentValue("volume").done(function(data) {
                    this.sliderVolume.model.set("value", data);
                }.bind(this));
                this.moduleView.getController().getPersistentValue("mute").done(function(data) {
                    this.checkboxMute.set("checked", data);
                }.bind(this));
                return $super();
            }.override(),

            persistValue: function(key, value) {
                this.moduleView.getController().setPersistentValue(key, value);
            },

            sliderChanged: function(event, data) {
                this.moduleView.getController().setVolume(data);
            }

        }
    );
});
