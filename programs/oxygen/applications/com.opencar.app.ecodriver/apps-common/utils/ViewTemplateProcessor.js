/**
 * encapsulates access to handlebars routines and hierarchical raw object->OC data model flattening
 */
define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        Control = require('common/ui/Control'),
        Handlebars = require('etc/handlebars');


    return Class.create({


        // handlebars util
        initialize: function (baseLayoutDOM) {

            // point of reference for where all the layout and template referencing might take place
            // current station item of interest
            this.baseLayoutDOM = baseLayoutDOM;
            // basically the document to the viewport
            this.ownerDocument = baseLayoutDOM.ownerDocument;

            // retains compiled templates
            this.generatedTemplateMap = [];
        },

        /**
         * given a DOM ID - to a script tag usually, compile the handlebars template
         * @param fragmentIdentifier
         * @returns {*}
         */
        compileTemplateById: function (fragmentIdentifier) {
            return this.compileTemplateByDOM(this.ownerDocument.getElementById(fragmentIdentifier), fragmentIdentifier);
        },

        /**
         *
         * @param d - live DOM holding the template
         * @param id - a unique identifier for this template
         */

        compileTemplateByDOM: function (d, id) {
            return this.compileTemplateByString(d.innerText, id);
        },


        /**
         * transpile process of a string template into Handlebars object
         * @param code
         * @param id
         */
        compileTemplateByString: function (code, id) {
            var tmpl = Handlebars.compile(code);

            if ( tmpl ) {
                // store cache
                this.generatedTemplateMap[id] = tmpl;
            }

            return tmpl;
        },


        // reuse
        getCompileTemplate: function (fragmentIdentifier) {
            return this.generatedTemplateMap[fragmentIdentifier];
        },


        // UTILS

        /**
         * @example
         bindControlModelByAttribute(stationData.data, "text",
         [
         ['detailStation_name', "station"],

         ["detailStation_address1", "address1"],
         ["detailStation_address2", "address2"],

         ["detailStation_city", "city"],
         ["detailStation_state", "state"],

         ["detailStation_phone", "phone"]

         ]);

         * @param dataModelSource
         * @param controlModelAttribute
         * @param processingRules
         * @returns {Array}
         */
        // make it easy to bind a set of variables onto live HTML page
        bindControlModelByAttribute: function (dataModelSource, controlModelAttribute, processingRules) {
            return this._bindControlModelByResolvableDiscriminator(dataModelSource, controlModelAttribute, processingRules, false);
        },


        /**
         *
         *  bind control value by renderable function ( evaluated at processing time)
         * @param dataModelSource
         * @param controlModelAttribute
         * @param processingRules
         * @returns {*}
         */
        bindControlModelByRenderable: function (dataModelSource, controlModelAttribute, processingRules) {
            return this._bindControlModelByResolvableDiscriminator(dataModelSource, controlModelAttribute, processingRules, true);
        },


        /**
         *  private function.
         *  handles the actual conversion, binding, value resolution
         * @param dataModelSource
         * @param controlModelAttribute
         * @param processingRules
         * @private
         */
        _bindControlModelByResolvableDiscriminator: function (dataModelSource, controlModelAttribute, processingRules, isResolvedByFunctionFlag) {
            var results = [];

            // iterate over all the simple text strings to display
            processingRules.forEach(function (rule) {
                var c = Control.getById(rule[0]);
                // resolve the renderable function
                var renderableFn = rule[1];

                /* ---------- important ------------------- */
                var actualValue = isResolvedByFunctionFlag ?
                    // by resolved function or..
                    renderableFn(dataModelSource) :
                    // bound to model property ( simple )
                    dataModelSource[rule[1]];

                if ( c ) {
                    // HTML binding from rule[1] ( the real property ) on the live data
                    c.model.set(controlModelAttribute || "text", actualValue);
                    results.push(c);
                }
                else {
                    // nada
                }
            });


            // return list of actual bound controls for this operation - in case client needs validation
            return results;
        },


        /**
         * convert JS object to flattened series of entries in the common/lib/Model
         */
        transformObjectToModel: function (transformRules, model, sourceObject) {

            // util
            function getPropertyChain (_valuePathDef) {
                var propertyChainDef = sourceObject[_valuePathDef[0]];

                if ( _valuePathDef.length > 1 ) {
                    // build up property chains upto 2nd to last
                    for (var i = 0; i < _valuePathDef.length-1; i++) {

                        // exit this process ( if on the first prop )
                        if ( i === 0 && propertyChainDef === undefined ) {
                            return;
                        }

                        // next step
                        if ( i > 0 ) {
                            propertyChainDef = propertyChainDef[_valuePathDef[i]];
                        }

                        // short-circuit this process
                        if ( propertyChainDef === undefined ) {
                            return;
                        }

                        //Log.log("check", i, propertyChainDef, _valuePathDef[i]);
                    }

                    // basic case
                } else {
                    propertyChainDef = sourceObject;
                }

                return propertyChainDef;
            }

            // ======================

            transformRules.forEach(function (record) {

                var field = record[0],
                // cast simple string ( if not array ) path to array
                    valuePath = Array.isArray(record[1]) ? record[1] : [record[1]],
                // nested properties
                    propertyChain = getPropertyChain(valuePath);

                if ( propertyChain !== undefined ) {
                    // use value resolved on last path entry of chain
                    var resolvedValue = propertyChain[valuePath[valuePath.length-1]];
                    // bind if value
                    if ( resolvedValue !== undefined ) {
                        model.set(field, resolvedValue);
                    }

                }


            });
        }

    });
});
