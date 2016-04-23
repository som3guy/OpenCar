define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        ListChamber             = require('common/platform/chamber/ListChamber');

    var tree=[];
    tree.push({
        text: 'Drill in',
        _data_tree_branch : [
            {
                text: 'go no where1'
            },
            {
                text: 'go no where2'
            }
        ]
    });
    tree.push({
        text: 'Screen 2',
        id:'screen2'
    });
    tree.push({
        text: 'Chamber 2a',
        id:'chamber2a'
    });
    tree.push({
        text: 'Chamber 2b',
        id:'chamber2b'
    });

    tree.push({
        text: 'Screen 3',
        id:'screen3'
    });
    tree.push({
        text: 'Chamber 3',
        id:'chamber3'
    });

    var MenuModule = Class.create(
        ListChamber,
        {
            init : function($super, api, container){
                this.api = api;
                this.container = container;
                $super(api, container);
            },
            beforeStart:function($super){
                return $super();
            }.override(),
            render : function($super, config){
                config.itemClick = function(lv, model){
                    if(!model.get('_data_tree_branch') && model.get('id')){
                        this.goto(model.get('id'),model);
                    }
                }.bind(this);
                $super(config);
            },
            data: function () {
                return tree;
            }.override()
        });

    return MenuModule;
});
