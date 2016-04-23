define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        Dialog                  = require('common/ui/Dialog'),
        Button      = require('common/ui/Button'),
        MapDialogConfig         = require('common/ui/dialogs/MapDialogConfig'),
        ModuleView  = require('common/platform/ModuleView');

    require('async!http://maps.googleapis.com/maps/api/js?v=3&sensor=true&libraries=places,weather,panoramio!callback');

    var dialog;
    return Class.create(
        ModuleView,
        {
            started : function(){
                new Button({
                    text: 'Launch Map Dialog',
                    click: this.showDialog
                }).render(this.getView()).requestFocus();
            }.override(),
            showDialog : function(){
                if(!dialog) {
                    var cfg = new MapDialogConfig.MapDialog({
                        coords: [47.61357, -122.213516]
                    }).build();
                    dialog = new Dialog(cfg);
                    dialog.show();
                }else{
                    dialog.show();
                }
            }
        }
    );
});
