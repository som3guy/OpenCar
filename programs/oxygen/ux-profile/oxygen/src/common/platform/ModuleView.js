/* OXYGEN */
define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        ModuleViewBase = require('common/platform/ModuleViewBase'),
        Control = require('common/ui/Control'),
        Breadcrumb = require('common/ui/Breadcrumb'),
        TextView = require('common/ui/TextView');

    // module-less
    // todo: need locale-smart version
    require('etc/moment');

    // TODO: Use localization and settings!!  But the same goes for OpenBar (Hydrogen, et al)
    var timeLocaleFormat = "h:mm",
        breadcrumbContainerClass = 'oc-breadcrumb-container',

        layoutClassificationMap = {};
    layoutClassificationMap [ModuleViewBase.BreadcrumbType.Overlay] = "oc-breadcrumb-overlay";
    layoutClassificationMap [ModuleViewBase.BreadcrumbType.Layout] = "oc-breadcrumb-layout";


    var ModuleView = Class.create(
        ModuleViewBase,
        {
            // Support the display of the breadcrumb in Oxygen modules
            _breadcrumbSupport: function () {
                // breadcrumb standard shows current time
                if ( this._breadcrumbType !== ModuleView.BreadcrumbType.None ) {

                    // clock view update
                    var lastMinute = null, setTime = function () {
                        var newMinute = new Date().getMinutes();
                        // compute and update view on the minute
                        if ( lastMinute != newMinute ) {
                            this._breadcrumb_clock.model.set('text', moment().format(timeLocaleFormat));
                        }
                        lastMinute = newMinute;
                    }.bind(this);


                    // +++++++++++++++++ Build Breadcrumb container element

                    // build DOM, retain reference, for corrections
                    this.breadcrumbDiv = document.createElement('DIV');

                    // annotate DIV with layout classes - a general and a customized breadcrumb type
                    this.breadcrumbDiv.classList.add(breadcrumbContainerClass, layoutClassificationMap[this._breadcrumbType]);

                    // layout container
                    document.body.insertBefore(this.breadcrumbDiv, document.body.firstChild);

                    if ( !this._breadcrumb ) {
                        this._breadcrumb = new Breadcrumb({
                            model: {
                                title: this._appName
                            }
                        }).render(this.breadcrumbDiv);
                        this.__fixBreadcrumb1();
                    }


                    // Clock routines
                    this._breadcrumb_clock = Control.getById('oxygen-breadcrumb-clock');
                    // build the clock DOM if needed
                    if ( !this._breadcrumb_clock ) {
                        this._breadcrumb_clock = new TextView({
                            id: 'oxygen-breadcrumb-clock'
                        });
                        this._breadcrumb_clock.render(this.breadcrumbDiv);
                    }

                    // clock starts ticking
                    setTime();
                    this._breadcrumb_clock_timer = setInterval(setTime, 1000);

                }
            },

            // invoked prior to the oc-screen-wrapper being rendered
            __fixBreadcrumb1: function () {
                // fixes obstructed "layout" breadcrumb
                if ( this._breadcrumbType === ModuleView.BreadcrumbType.Layout ) {
                    try {
                        this.breadcrumbDiv.classList.add("fix");
                    } catch(e) {}
                }

            },


            // invoked about the time screen goes into view, timing is critical
            __fixBreadcrumb2: function () {
                // fixes obstructed "layout" breadcrumb
                if ( this._breadcrumbType === ModuleView.BreadcrumbType.Layout ) {
                    try {
                        this.breadcrumbDiv.classList.remove("fix");
                    } catch(e) {}
                }
            },

            // ~~~~~~ lifecycle routines ~~~~~~~~~~
            //initScreens: function ($super, screens) {
            //    this._breadcrumbSupport();
            //    return $super(screens);
            //},
            beforeStart: function($super) {
                this._breadcrumbSupport();
                return $super();
            },

            started: function ($super) {
                var p = $super();
                this.__fixBreadcrumb2();
                return p;
            }.override(),

            beforeStop: function ($super) {
                clearInterval(this._breadcrumb_clock_timer);
                return $super();
            }.override()
        }
    );

    // Copy over all statics
    for (var p in ModuleViewBase) {
        if ( ModuleViewBase.hasOwnProperty(p) && !ModuleView[p] ) {
            ModuleView[p] = ModuleViewBase[p];
        }
    }

    return ModuleView;
});
