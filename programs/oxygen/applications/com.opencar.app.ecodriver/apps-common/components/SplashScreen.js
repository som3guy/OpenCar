// (C) 2013-2014 OpenCar Inc.
// All Rights Reserved.

define(function(require) {
    'use strict';

    var ProgressSpinner     = require('common/ui/ProgressSpinner'),
        Pane                = require('common/ui/Pane');

    var lv;

    var show =  function(chamberName) {
        var styles;

        lv = this.getChamber(chamberName).lv;
        lv.disabled = true;
        this.splash  = new Pane({id: 'wait_indicator'}).render(this.getView());
        this.spinner = new ProgressSpinner().render(this.splash.element);

        styles = this.splash.element.style;

        styles.position = 'absolute';
        styles.width = '100%';
        styles.height = '100%';
        styles.zIndex = 100;

        return this;
    };

    var hide = function() {
        lv.disabled = false;
        this.spinner.remove();
        this.splash.remove();

        return this;
    };

    return {
        show: show,
        hide: hide
    };
});
