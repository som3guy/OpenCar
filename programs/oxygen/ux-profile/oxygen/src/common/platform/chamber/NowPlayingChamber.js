define(function(require){
    'use strict';

    var Class                   = require('common/Class'),
        NowPlayingChamberBase   = require('common/platform/chamber/NowPlayingChamberBase'),
        ThreeDFaker             = require('common/ui/ThreeDFaker');


    var NowPlayingChamber = Class.create(
        NowPlayingChamberBase,
        {
            init : function($super, screen, showTooltip){
                if(this.config.buttons && this.config.buttons.length == 1) {
                    this.config.buttons.unshift({
                        from : "common/platform/chamber/NowPlayingChamber",
                        "oc-control": "PreviousTrackButton",
                        classNames : ['bb-spacer'],
                        focusable : false
                    });
                    this.config.buttons.unshift({
                        from : "common/platform/chamber/NowPlayingChamber",
                        "oc-control": "PlaylistButton",
                        classNames : ['bb-spacer'],
                        focusable : false
                    });
                }
                return $super(screen, showTooltip);
            }.override(),
            // Creates the image view.  Profile override.
            _createImageView: function() {
                // do nothing here
            }.override(),

            // Updates the image view. Profile override
            _updateImageView: function() {
                var element = document.getElementById("np-content-image");
                element.innerHTML = '';
                var width = element.offsetWidth;
                var height = element.offsetHeight;
                new ThreeDFaker(this.displayData.contentImgUrl, document.getElementById("np-content-image"), width, height);

            }.override(),

            // set top title (if it exists as a real string) as the breadcrumb subtitle
            _displayTopTitle : function($super, data) {
                if(data) {
                    if(data.topTitle && data.topTitle.length > 0) {
                        if(this.moduleView._breadcrumb) {
                            this.moduleView._breadcrumb.model.set('subtitle', data.topTitle);
                        }
                    }
                    data.topTitle = '';
                }
                return $super(data);
            }.override()
        }
    );

    // Copy over all statics
    for(var p in NowPlayingChamberBase) {
        if(NowPlayingChamberBase.hasOwnProperty(p) && !NowPlayingChamber[p]) {
            NowPlayingChamber[p] = NowPlayingChamberBase[p];
        }
    }

    return NowPlayingChamber;
});
