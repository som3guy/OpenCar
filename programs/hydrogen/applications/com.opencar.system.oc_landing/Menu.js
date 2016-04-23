define(function (require) {
    'use strict';

    var Class                   = require('common/Class'),
        GridItemWithIconView    = require('common/ui/list-item-view/GridItemWithIconView'),
        ListChamber             = require('common/platform/chamber/ListChamberOld');

    var PlatformWorkerRequestCommand    = require('common/platform/PlatformWorkerRequestCommand'),
        WorkerRequest                   = require('common/worker/WorkerRequest'),
        Context                         = require('common/Context');


    var Menu = Class.create(
        ListChamber,
        {
            render: function ($super, data) {
                data.itemClick = function(lv, model){
                    if(!model.get('_data_tree_branch') && model.get('appId')){
                        this.moduleView.__ignoreKeys = true;
                        this.moduleView._focusController.setChildrenAsNotFocusable();
                        this.moduleView.getController().startApplication(model.get('appId'));
                    } else {
                        if(model.get('actionInfo')) {
                            Log.debug("Found action "+model.get('actionInfo').name);
                            this.moduleView.goto('settings');
                        }
                    }
                }.bind(this);

                data.listItemViewType = GridItemWithIconView;
                data.classNames = ['fancy'];
                data.showTitle = false;
                $super(data);
                this.lv.setItemsPerRow(3);
            }.override(),
            data: function () {
                return this.moduleView.data();
            }.override(),
            signalUpdate: function($super, descending, listItems, selectedIndex) {
                var rt = $super(descending, listItems, selectedIndex);
                var level = this.nestedListManager.getIndices().length;
                if( level > 0) {
                    var node = this.nestedListManager.getTreeNode(0);
                    var name = node.text;
                    var icon = node.icon;
                    setOpenBarTitle(name, icon);
                }else{
                    setOpenBarTitle('Home', ''/*this.moduleView._appIcon*/);
                }
                return rt;
            }.override(),
            resumed: function () {
                this.lv.requestFocus();
            }.override(),
            animateIn : function($super){
                return $super();
            }.override(),
            selectNamedItem: function(name) {
                var self = this, items = this.nestedListManager.getListItems();
                for(var i=0; i<items.length; i++) {
                    if(items[i].text === name) {
                        self.lv.set('selectedIndex', i);
                        break;
                    }
                }
            }

        });

    var setOpenBarTitle = function(title, icon) {

        // Show home always: Revised on review 5/30
        var showHome = true; //title && (title !== "Home");

        return new WorkerRequest({
            command : PlatformWorkerRequestCommand.CHANGE_OPENBAR_TITLE,
            data    : {
                title: title,
                icon: icon,
                showHome: showHome
            }
        }).send(Context.current().getConnection());
    };


    return Menu;
});
