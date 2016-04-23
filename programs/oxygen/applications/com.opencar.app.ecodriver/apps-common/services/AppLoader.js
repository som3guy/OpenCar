define(function(require) {
    'use strict';

    var DOMHelper       = require('common/DOMHelper'),
        Timer           = require('common/lib/Timer'),
        Button          = require('common/ui/Button'),
        ProgressSpinner = require('common/ui/ProgressSpinner');

    return {
        /**
         * @param options - hash of parameters. Fields:
         *                  showExitButton - if "Applications" button should be shown. True by default.
         */
        show: function(options) {
            var me = this,
                text = 'Applications',
                css = 'oc-app-splash';

            if (options && options.text) {
                text = options.text;
            }

            me._splashContainer = document.createElement('div');
            me._splash = document.createElement('div');
            me._splash.className = css;
            me._splashContainer.className = 'oc-app-splash-container';
            me._splashContainer.style.background = 'url(/ui/vehicle-profiles/' + window.oc.states.systemState['vehicle-profile'] + '/res/themes/default/images/global-bkg.jpg) 0 -65px #000 no-repeat';
            me.getView().appendChild(me._splashContainer);
            me._splashContainer.appendChild(me._splash);
            me._spinner = new ProgressSpinner().render(me._splash);

            if (!options || options.showExitButton !== false) {
                new Button({
                    model: {
                        text: text
                    },
                    click: function() {
                        me.exit();
                    }
                }).render(me._splash);
            }
        },

        hide: function() {
            var me = this;

            // fake delay will be removed after solving problem with hiding platform loader
            setTimeout(function() {
                DOMHelper.hide(me._splashContainer);
            }, 3000);
        }
    };
});
