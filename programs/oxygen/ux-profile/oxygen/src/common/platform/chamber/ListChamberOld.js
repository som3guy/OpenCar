define(function(require){
    'use strict';

    var Class             = require('common/Class'),
        Button                  = require('common/ui/Button'),
        ListChamberBase   = require('common/platform/chamber/ListChamberBaseOld');


    var ListChamber = Class.create(
        ListChamberBase,
        {
            signalUpdate: function($super, descending, listItems, selectedIndex) {
                this._handleBreadcrumb(descending);
                return $super(descending, listItems, selectedIndex);
            }.override(),

            render : function($super, config){
                config.onRight = null;
                var that = this;
                config.onLeft = function(){
                    return that.screen.element.querySelector('.back-button');
                };
                return $super(config);
            }.override(),

            /** BACK BUTTON HACK **/
            handleBackButton : function(){
                var backButtonElement = document.querySelector('.back-button');
                if(backButtonElement) {
                    // TODO: remove this hack and implement event.stopImmediatePropagation()
                    var backButton = backButtonElement.getControl();
                    var callbacks = backButton.callbacks[Button.Event.CLICKED];
                    var callback = callbacks[0];
                    callbacks.saved = callback;
                    var that = this;
                    callbacks[0] = function(){
                        var ret = that.onBackAction.call(that);
                        if(!ret){
                            callbacks.saved.call();
                        }
                    };
                }
            }.override(),
            paused : function($super){
                var backButtonElement = document.querySelector('.back-button');
                if(backButtonElement) {
                    var backButton = backButtonElement.getControl();
                    var callbacks = backButton.callbacks[Button.Event.CLICKED];
                    callbacks[0] = callbacks.saved;
                    delete callbacks.saved;
                }
                return $super();
            }.override(),
            resumed : function($super){
                this.handleBackButton();
                return $super();
            }.override(),
            /** END BACK BUTTON HACK */


            onBackAction : function(){
                if(this.nestedListManager.getIndices().length > 0) {
                    this.back();
                    return true;
                }
                return false;
            }.override(),

            // Handles the treatment of "list hierarchy display" using breadcrumbs in Oxygen
            _handleBreadcrumb: function(descending) {
                if(this.moduleView._breadcrumb) {
                    var t;

                    if(!this._previousBreadcrumbSubtitle) {
                        this._previousBreadcrumbSubtitle = [];
                    }

                    if(descending) {
                        t = this.lv.getSelectedItem();
                        if(t) {
                            t = t.get('text');
                        }
                    }
                    if(descending !== undefined) {
                        if(descending === false) {
                            if(this._previousBreadcrumbSubtitle.length > 0) {
                                this._previousBreadcrumbSubtitle.pop();
                            }
                            t = this._previousBreadcrumbSubtitle.pop();
                        } else {
                            this._previousBreadcrumbSubtitle.push(t);
                        }
                        this.moduleView._breadcrumb.model.set('subtitle', t);
                    }
                }
            },
            setTitle : function(title){
            },
            /**
             * Updates the list title
             */
            updateListTitle: function() {
            },
            /**
             * Returns promise with the text of the parent node branch as the title to use for this list.
             */
            getListTitle: function() {
                return '';
            },
            prepareScrollBar : function(){
                this.showScrollBar();
            }.override(),
            updateScrollBar : function(){
            }
        }
    );

    // Copy over all statics
    for(var p in ListChamberBase) {
        if(ListChamberBase.hasOwnProperty(p) && !ListChamber[p]) {
            ListChamber[p] = ListChamberBase[p];
        }
    }

    return ListChamber;
});
