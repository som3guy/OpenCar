/**
 * Extended from ListChamber component, that allows to set icons, disable mode,
 * right arrow and right text info block
 * @return {Chamber}
 */

define(function(require) {
    'use strict';
    var Class       = require('common/Class'),
        DOMHelper   = require('common/DOMHelper'),
        ListChamber = require('common/platform/chamber/ListChamber');

    /**
    * Insert symbol in string according to index
    * @param {number} index
    * @param {string} str
    * @param {string} symbol
    */
    var insertInString = function (index, str, symbol) {
        if (index > 0) {
            str = str.substring(0, index) + symbol + str.substring(index, str.length);
        }
        else {
            str = symbol + str;
        }

        return str;
    };

    var hasClass = function(el, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(el.className);
    };

    /**
    * Remove no needed aditional html elements, that were added previously
    * @param {OCBase} item
    */
    var resetItem = function(item) {
            var cssAttr = item.parentNode.getAttribute('data-custom-css');

            if (item.querySelector('.item-text-arrow')) {
                item.removeChild(item.querySelector('.item-text-arrow'));
            }

            if (item.querySelector('.item-text-sub')) {
                item.removeChild(item.querySelector('.item-text-sub'));
            }

            if (item.querySelector('.fa')) {
                item.removeChild(item.querySelector('.fa'));
            }

            if (cssAttr !== null) {
                DOMHelper.removeClasses(item.parentNode, cssAttr);
                item.parentNode.removeAttribute('data-custom-css');
            }
        },
        initItem = function(item, data) {
            var itemHtml,
                parent = item.parentNode;

            resetItem(item);

            itemHtml = item.innerHTML;

            item.innerHTML = '';

            // set icon
            if (data.icon) {
                if (data.disabled) {
                    item.style.backgroundImage = 'url(' + insertInString(data.icon.length - 4, data.icon, '-disabled') + ')';
                }
                else {
                    item.style.backgroundImage = 'url(' + data.icon + ')';
                }
            }

            if (data.iconElement) {
                item.innerHTML += data.iconElement;
            }

            // set right arrow
            if (data.arrow) {
                item.innerHTML += '<span class="item-text-arrow">&gt;</span>';
            }

            // set right text
            if (data.sub) {
                item.innerHTML += '<span class="item-text-sub">' + data.sub + '</span>';
            }

            // set css class
            if (data.css && !hasClass(parent, data.css)) {
                DOMHelper.addClasses(parent, data.css);
                parent.setAttribute('data-custom-css', data.css);
            }

            // set disabled
            if (data.disabled) {
                DOMHelper.addClasses(parent, 'disabled');
            } else {
                DOMHelper.removeClasses(parent, 'disabled');
            }

            item.innerHTML += data.text;
        };

    var IconsListChamber = Class.create(ListChamber, {
        activate : function($super, needRender) {
            var me = this;

            $super();

            if (needRender) {
                this.renderIconsList();
            }
        },

        /**
        * Speed of rendering becomes faster after overriding
        */
        beforeResume: function($super) {
            $super();
        },

        /**
        * Render list with additional elements
        */
        renderIconsList: function() {
            var lv, data = this.data(),
                item,
                title = this.screen.element.querySelector('.oc-textview-title');

            // render list with updated data
            this.reset(data);

            lv = this.lv;

            // set title if needed
            if (data.title) {
                lv.setTitle(data.title);
            }

            // set subtitle if needed
            if (title.querySelector('.subtitle')) {
                title.removeChild(title.querySelector('.subtitle'));
            }

            if (data.subtitle) {
                var subtitle = document.createElement('span');
                subtitle.className = 'subtitle';
                subtitle.innerHTML = data.subtitle;

                title.appendChild(subtitle);
            }


            lv.setClasses('list-icons-view');

            for (var i = 0; i < lv.listItems.length; i++) {
                if (lv.listItems[i].element) {
                    initItem(lv.listItems[i].element.querySelector('.item-text'), data[i]);
                }
            }

        },

        updateRenderedItems : function(data) {
            var lv = this.lv;

            for (var i = 0; i < lv.listItems.length; i++) {
                if (data[i]) {
                    if (lv.listItems[i].element) {
                        initItem(lv.listItems[i].element.querySelector('.item-text'), data[i]);
                    }
                }
            }
        },

        /**
        * Store as previouse chamber after it has been hidden
        */
        paused: function($super) {
            $super();

            this.moduleView.prevScreen = this.config.id;
        }

    });

    return IconsListChamber;
});
