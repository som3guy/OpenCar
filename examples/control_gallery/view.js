define(function(require) {
    'use strict';

    var ArrayList       = require('common/ArrayList'),
        Exception       = require('common/Exception'),
        Class           = require('common/Class'),
        ModuleView      = require('common/platform/ModuleView'),
        Control         = require('common/ui/Control'),
        ListView        = require('common/ui/ListView'),
        Pane            = require('common/ui/Pane');

    var controlNames = [
        'Button',
        'Checkbox',
        'RadioButton',
        'Dial',
        'Dialog',
        'ImageButton',
        'ImageView',
        'Indicator',
        'ListView',
        'Pane',
        'ProgressBar',
        'RadialGauge',
        'RadialProgressBar',
        'Keyboard',
        'Slider',
        'TextView',
        'Toast',
        'ToggleButton',
        'Tooltip'
    ];

    return Class.create(
        ModuleView,
        {
            init : function() {
                this._breadcrumbType = ModuleView.BreadcrumbType.None;
            },
            started : function(){
                var controls = [],
                    container;


                for (var i = 0, len = controlNames.length; i < len; i++) {
                    controls.push({ text: controlNames[i] });
                }

                container = new Pane({
                    id: 'controlListContainer'
                }).render(this._view);

                this.controlPreview = new Pane({
                    id: 'controlPreview'
                }).render(this._view);

                this.controlList = new ListView({
                    model : {
                        arrayList : new ArrayList(controls)
                    },
                    id: 'controlList',
                    app: this,
                    showTitle: false,
                    title: '',
                    itemChanged : this.getControl.bind(this)
                }).render(container);
                this.controlList.requestFocus();
                this.getControl(undefined, this.controlList, controls[0]);
            },
            getControl : function(e, listView, item) {
                Timer.create(function() {
                    if (this.controlList.getSelectedItem() === item) {
                        var controlName = item.get('text'),
                            controlPath = '$MODULE_PATH/controls/' + controlName;

                        require(
                            [controlPath],
                            function(control) {
                                this.controlPreview.element.innerHTML = '';
                                control.render(this.controlPreview);

                                if (!(control instanceof Control)) {
                                    // Have some code run after the control is rendered
                                    control.postRender();
                                }
                            }.bind(this),
                            function(e) {
                                Log.exception(Exception.buildRequiresException(e));
                                // If loading the control fails, we should still clear the control preview pane.
                                this.controlPreview.element.innerHTML = '';
                            }.bind(this)
                        );
                    }
                }.bind(this), 100);

            }
        }
    );
});
