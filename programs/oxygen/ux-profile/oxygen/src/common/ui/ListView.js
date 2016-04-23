define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListViewBase    = require('common/ui/ListViewBase');

    /**
     * A list view control powered by an array list. Focus travels to the item within the list view.
     * @exports common/ui/ListView
     * @extends module:common/ui/Control
     */
    var ListView = Class.create(
        ListViewBase,
        /** @lends module:common/ui/ListView.prototype */
        {
            getDefaultMode : function(){
                return ListViewBase.Mode.CENTERED_LIST;
            }.override(),
            isShowTitle : function(){
                return false;
            }.override()
        }
    );

    ListView.Mode = {
        LIST            : 'list',
        CENTERED_LIST   : 'centered-list',
        GRID            : 'grid'
    };
    ListView.Event = ListViewBase.Event;
    Object.freeze(ListView.Mode);

    return ListView;
});
