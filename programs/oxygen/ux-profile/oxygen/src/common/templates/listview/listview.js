define(function(require, exports, module) {
    "use strict";

    var html = require('html!common/templates/listview/listview-template'),
        MCDEvent                = require('common/MCDEvent'),
        listview                = require('view!vertical-listview'),
        DOMHelper = require('common/DOMHelper');

    var View = function(model){
        var fragment = DOMHelper.createDomFragment(html);
        var listWrapper = fragment.querySelector('.default-list-wrapper');
        var listView;

        /*
        listView = new ListView({
            classNames: ['default-list-view'],
            model : {
                arrayList: model.list
            },
            itemClick : model.itemClick
        });
        */
        listView = listview({
            //itemsPerPage: model.itemsPerPage,
            //initialIndex: model.initialIndex,
            list: model.list,
            //title : model.title,
            itemClick : model.itemClick,
            // TODO: remove this hack later when this control is fixed
            initialOffset: 166
        });
        listView.render(listWrapper);

        listView.addMCDEventListener(
            MCDEvent.EventType.BACK,
            model.onBackEvent
        );

        return {
            element : fragment,
            focus : function(parent){
                listView.setParentFocusTarget(parent);
                listView.requestFocus();
            }
        };
    };


    return View;
});
