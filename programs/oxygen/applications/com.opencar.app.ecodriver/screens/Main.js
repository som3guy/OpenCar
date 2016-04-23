define(function(require) {
    'use strict';

    var Class                   = require('common/Class'),
        TextView                = require('common/ui/TextView'),
        Chamber                 = require('common/platform/chamber/Chamber'),
        Button                  = require('common/ui/Button'),
        Pane                    = require('common/ui/Pane'),
        ButtonBarChamber        = require('common/platform/chamber/ButtonBarChamber'),
        Timer                   = require('common/lib/Timer'),
        FocusController         = require('common/FocusController');

    var Main = Class.create(
        ButtonBarChamber,
        {
            started: function() {
                this.detailInfo = new TextView({
                    tagName: 'div',
                    classNames:['detail-block']
                });

                this.setCustomButtonHandler(this);
                this.detailInfo.render(this.screen.element);
                this.detailInfo.element.innerHTML = this.moduleView.renderScreens();
                this.moduleView.updateDataView();
                this.timer = new Timer(function() {
                    this.moduleView.updateDataView();
                }.bind(this), 1000, true); // TODO: 1 second - is this interval good for refreshing data?

                this.barRestorePane = new Pane();
                this.barRestorePane.element.className += ' restore-bar-pane';

                if (this.moduleView.skin !== 'oxygen') {
                    this.barRestoreButton = new Button({
                        model : {
                            text: ' '
                        }
                    });
                    this.barRestoreButton.addClickListener(this.showButtonBar.bind(this));
                    this.barRestoreButton.element.className += ' restore-bar-button';
                    this.barRestorePane.addChild(this.barRestoreButton);
                    this.barRestorePane.render(this.screen.element);
                    this.barRestoreButton.set('disabled', true);
                    this.buttonBar.requestFocus();
                }
            }.override(),

            toggleInfoScreen: function() {
                var index = this.buttonBar.selectedButton,
                    button = this.buttonBar.buttons[index];
                if (button['info-screen']) {
                    this.hideInfoScreens();
                    this.showInfoScreen(button['info-screen']);
                }
            },

            showButtonBar: function(el) {
                if (this.moduleView.skin === 'oxygen') return;
                this.buttonBar.show();
                this.barRestorePane.element.classList.remove('active');
                this.barRestoreButton.set('disabled', true);
                this.buttonBar.requestFocus();
            },

            hideButtonBar: function(el) {
                this.toggleInfoScreen();
                if (this.moduleView.skin === 'oxygen') return;
                this.barRestorePane.element.classList.add('active');
                this.barRestoreButton.set('disabled', false);
                this.barRestoreButton.requestFocus();

                // should be last. it prevents from race condition and 100% loading CPU
                this.buttonBar.hide();
            },

            hideInfoScreens: function(arg) {
                var elements = this.detailInfo.element.querySelectorAll('.info-screen');
                for(var i=0; i<elements.length; i++) {
                    elements[i].style.display = 'none';
                };
            },

            showInfoScreen: function(className) {
                var el = this.detailInfo.element.querySelector('.info-screen.' + className);
                if (el) {
                    el.style.display = 'block';
                }
            },

            doSettings: function() {

            }
        }
    );


    return Main;
});
