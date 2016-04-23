define(function(require){
    'use strict';

    var Class                   = require('common/Class'),
        ObjectUtils             = require('common/ObjectUtils'),
        ButtonBarControlsBase   = require('common/ui/ButtonBarControlsBase');


    var ButtonBarControls = Class.create(
        ButtonBarControlsBase,
        {
            _addDefaultControls: function() {
                // profile adds its default controls here
                // This is done before sorting
            },

            _passesProfileRules : function($super, btnDef) {
				$super(btnDef);
				var c = btnDef['oc-control'];
				if (c) {
					if (c.indexOf('PlaylistButton') >= 0) {
                        return false;
                    }
				}
				return true;
			}
        }
    );

    /**
     * Defines the recognized type names for 'oc-control' named
     * buttons defined via a manifest declaration for standard controls.
     */
    ButtonBarControls.Type = ObjectUtils.clone(ButtonBarControlsBase.Type);
    ObjectUtils.secure(ButtonBarControls.Type);

    ButtonBarControlsBase.ProfileOrder = [
        //Navigation to other areas
        ButtonBarControlsBase.Type.ContentListButton,
        ButtonBarControlsBase.Type.PlaylistButton,

        //Actions taken based on current track.
        ButtonBarControlsBase.Type.CreateButton,
        ButtonBarControlsBase.Type.DiscoverButton,
        ButtonBarControlsBase.Type.TagButton,
        ButtonBarControlsBase.Type.BookmarkButton,
        ButtonBarControlsBase.Type.FavoriteButton,

        //Play head control.
        ButtonBarControlsBase.Type.RepeatButton,
        ButtonBarControlsBase.Type.ShuffleButton,
        ButtonBarControlsBase.Type.RewindButton,
        ButtonBarControlsBase.Type.PreviousTrackButton,
        ButtonBarControlsBase.Type.StopButton,
        ButtonBarControlsBase.Type.PlayPauseButton,
        ButtonBarControlsBase.Type.NextTrackButton,

        //Social/liking
        ButtonBarControlsBase.Type.DisapproveButton,
        ButtonBarControlsBase.Type.ApproveButton,

        //Insertion point for unknown buttons.
        ButtonBarControlsBase.Type.UnknownButton
    ];

    //
    // Note that we modified the *base* and then secure it.
    // It won't work to modify our copy version
    ObjectUtils.secure(ButtonBarControlsBase.ProfileOrder);

    return ButtonBarControls;
});
