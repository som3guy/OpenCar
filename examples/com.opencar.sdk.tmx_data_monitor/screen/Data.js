define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ListChamber         = require('common/platform/chamber/ListChamberOld'),
        TelematicsAPI       = require('common/platform/TelematicsAPI'),
        TelematicsOcids     = require('vehicle-profile/tmx/TelematicsOcids'),
        TextAndDescriptionAndStatusView   = require('$MODULE_PATH/list-item-view/TextAndDescriptionAndStatusView');

    var telematics,
        telChamber,
        telIteration = 0,
        data = TelematicsOcids.map(function(ocid) {
            var byteNumbers = [];

            if (ocid.type == 'Bytes') {
                for (var key in ocid.valueNames) {
                    byteNumbers.push(ocid.valueNames[key]);
                }
            }

            return {
                text: ocid.label,
                ocid: ocid,
                quantity: '',
                percentage: '',
                units: (ocid.hasOwnProperty('value') && ocid.value.hasOwnProperty('symbol')) ? ocid.value.symbol : '',
                max: (ocid.hasOwnProperty('value') && ocid.value.hasOwnProperty('max')) ? ocid.value.max : Math.max.apply(Math, byteNumbers),
                min: (ocid.hasOwnProperty('value') && ocid.value.hasOwnProperty('min')) ? ocid.value.min : Math.min.apply(Math, byteNumbers),
                valueLabels: ocid.valueLabels,
                type: ocid.type
            };
        });

    return Class.create(
        ListChamber,
        {
            init : function($super, screen){
                $super(screen);
                telematics = new TelematicsAPI();
            }.override(),

            data: function () {
                return data;
            }.override(),

            render: function ($super, config) {
                config.itemsPerPage=1000;
                var onTelematicsEvent = function(ocid, val) {
                    // On first file play, set all values to zero
                    if (telIteration === 0) {
                        console.log('set all values to zero');
                        telIteration++;
                    }

                    Log.log("Update " + ocid + " = " + val);

                    for (var key in data) {
                        if (data[key].ocid.name == ocid) {
                            var thisQuantity = document.getElementById("item-quantity-" + ocid),
                                thisProgress = document.getElementById("item-progress-" + ocid),
                                percentage;

                            if (data[key].type == 'Boolean' && val === false) {
                                thisProgress.style.width = '0';
                                thisQuantity.innerHTML = 'False';
                            }
                            else if (data[key].type == 'Boolean' && val === true) {
                                thisProgress.style.width = '100%';
                                thisQuantity.innerHTML = 'True';
                            }
                            else if (data[key].type == 'Bytes') {
                                percentage = Math.round(((val - data[key].min)/(data[key].max-data[key].min)) * 100);

                                if (!isNaN(percentage) && percentage != 'Infinity') {
                                    thisProgress.style.width = percentage + '%';
                                    thisQuantity.innerHTML = data[key].valueLabels[val];
                                }

                                if (data[key].valueLabels[val] == 'Error') {
                                    thisProgress.className += ' error';
                                }
                                else {
                                    thisProgress.className = thisProgress.className.replace(/(?:^|\s)error(?!\S)/g, '');
                                }
                            }
                            else if (data[key].type == 'Number') {
                                percentage = Math.round(((val - data[key].min)/(data[key].max-data[key].min)) * 100);

                                if (!isNaN(percentage) && percentage != 'Infinity') {
                                    thisProgress.style.width = percentage + '%';
                                    thisQuantity.innerHTML = val + ' ' + data[key].units;
                                }
                            }

                            break;
                        }
                    }
                },
                telematics = new TelematicsAPI();

                function subtmx(ocid, stringName) {
                    (function() {
                        var thisOcid = ocid,
                            thisStringName = stringName;

                        telematics.subscribe(TelematicsAPI.Event[thisOcid], function(val) {
                            onTelematicsEvent(thisStringName, val);
                        });
                    })(ocid, stringName, telematics, onTelematicsEvent, TelematicsAPI);
                }

                // Set subscribe for each telematic event
                for (var key in TelematicsAPI.Event) {
                    var ocid = key,
                        stringName = TelematicsAPI.Event[key].split('Telematics.')[1];
                    subtmx(ocid, stringName);
                }

                config.listItemViewType = TextAndDescriptionAndStatusView;
                $super(config);

                telChamber = this.getChamber('telematics-chamber');
                telChamber.lv.element.style.display = 'block';
            }.override()

        }
    );

});
