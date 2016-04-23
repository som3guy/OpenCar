define(function(require) {
    'use strict';

    var Class = require('common/Class');
    var Dialog = require('common/ui/Dialog');
    var Favorites = require('common/lib/Favorites');

    // Import the original controller file
    var View = require('/ui/apps/system/installed_applications/view.js');

    var cancelTimeout = 5000;

    View = Class.create(
        View,
        {
            init: function($super) {
                $super();

                this._favorites = new Favorites();
                this._favorites.setFavoritesPersistKey('hydrogen.app_favorites');
                return this._favorites.getFavorites();
            },

            started: function($super, dataToStartingChamber) {
                return $super(dataToStartingChamber).done(function() {
                    Log.log('register long click listener');
                    this.getChamber('menu').lv.addItemLongClickListener(function(lv, model) {
                        Log.log("ITEM LONG CLICK");
                        var content;
                        var appId = model.get('appId');

                        var buttons = {};
                        buttons[Dialog.Result.NEUTRAL] = 'Cancel';

                        if (appId) {
                            if (this._favorites.isFavorite(appId)) {
                                content = '<h1>Remove favorite?</h1>';
                                buttons[Dialog.Result.POSITIVE] = 'Remove Favorite';
                            } else {
                                content = '<h1>Add favorite?</h1>';
                                buttons[Dialog.Result.POSITIVE] = 'Add Favorite';
                            }

                            this._addFavoritesDialog = new Dialog({
                                model: {
                                    contents: content
                                },
                                buttons: buttons,
                                timeout: cancelTimeout,
                                autoActivateOnDriveMode: true,
                                hide: function(ev, control, status) {
                                    if (status === Dialog.Result.POSITIVE) {
                                        this._favorites.toggleFavorite(appId);
                                    }
                                }.bind(this)
                            });

                            this._addFavoritesDialog.setButtonOrder(
                                Dialog.Result.NEUTRAL,
                                Dialog.Result.POSITIVE
                            );

                            this._addFavoritesDialog.show();
                        }
                    }.bind(this));
                }.bind(this));
            }
        }
    );

    return View;
});
