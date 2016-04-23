define(function(require) {
    'use strict';

    var OrbitalMenu = require('platform/presentation/OrbitalMenu');

    // Import the original controller file
    var PlatformViewport = require('/ui/platform/presentation/PlatformViewport.js');

    // Override the render function to include the orbital menu
    var originalRender = PlatformViewport.render;
    PlatformViewport.render = function(parent, cssIncludes) {
        return originalRender.call(this, parent, cssIncludes)
            .done(function() {
                this._orbitalMenu = new OrbitalMenu(document.getElementById('oc-wrapper'));
                this._orbitalMenu.changeProfile(this._currentProfileId);
            }.bind(this));
    };

    // Override change profile so the orbital menu gets updated
    PlatformViewport.changeProfile = function(profileId) {
        this._currentProfileId = profileId;
        if (this._orbitalMenu) {
            this._orbitalMenu.changeProfile(profileId);
        }
    };

    PlatformViewport.collapseOrbital = function() {
        if (this._orbitalMenu) {
            this._orbitalMenu.collapse();
        }
    };

    PlatformViewport.toggleOrbital = function() {
        if (this._orbitalMenu) {
            this._orbitalMenu.toggle();
        }
    };

    return PlatformViewport;
});
