define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        ModuleView  = require('common/platform/ModuleView'),
        AppLoader   = require('$MODULE_PATH/apps-common/services/AppLoader'),
        Promise     = require('common/lib/Promise'),
        Timer       = require('common/lib/Timer');

    /*
    This is the application "view" module.

    The app "view" module is used for any UI control creation and handling.

    You may choose to use layout from your appLayout.html file (as noted in your app.manifest)
    Please see the SDK documentation for how to declare elements in markup and/or in code.

    You may create an application with or without use of a controller.
    Use of a controller is recommended. See the SDK documentation.

    Note that functions defined in the controller may be called via this.getController()
    Functions declared in this view class may also be called from the controller.

    Functions designed to be called from the controller must return a Promise.
     */

    var constants = {
        FuelPrice: 2.4, // usd -- For CES, will come from a constant. Value is USD price per gallon.
        MPGConvert: 282.4811, // mpg --- (Constant for converting fuel economy from L/100KM to MPG)
        GallonConvert: 0.264172, // gallons --- (Constant for converting liters to gallons)
        MilesConvert: 0.621371, // miles --- (Constant for converting KM to miles)
        CarbonFootprintConvert: 2.3, // kg --- (multiplied by liters to get kilograms of carbon emissions)
        SimulatedTotalFuelUsage: 1087, // liters
        SimulatedBestFuelEconomy: 7.8, // l/100km
        SimulatedWorstFuelEconomy: 19.6, // l/100km
        SimulatedOverallFuelEconomy: 9.4, // l/100km
        SimulatedLastDriveFuelUsage: 1.1, // liters
        SimulatedPerDriveFuelUsage: .8, // liters

        fuelEconomyUnit: 'mpg',
        fuelUsageUnit: 'gallons',
        co2Unit: 'CO<sub>2</sub> Kgs',
        moneyUnit: '',
        moneyPreffix: '$'
    };

    var tmxData = {
            DistanceTravelledTotal: null,
            TotalFuelConsumptionDrive: null,
            MeanFuelEfficiencyDrive: null,
            FuelEfficiencyInstant: null
        };

    function wrapColumn(html, separated) {
        return '<div class="half-width' + (separated ? ' separated' : '') + '">' + html + '</div>';
    }

    // TODO: move the HTML to template files
    function renderTextItem(label, unit, className, preffix) {
        return '<div class="info-block ' + (className || '') + '">' +
            '<div class="info-block-data">' +
                '<span class="info-block-preffix">' + (preffix || '') + '</span>' +
                '<span class="info-block-value">---</span> ' +
                '<span class="info-block-unit">' + (unit || '') + '</span>' +
            '</div>' +
            '<div class="info-block-label">' + (label || '') + '</div>' +
        '</div>';
    }

    function renderInfoScreen(title, html, className) {
        return '<div class="info-screen ' + (className || '') + '">' +
            '<div class="title">' + title + '</div>' +
            '<div class="np-horiz-rule"></div>' +
            '<div class="data">' + html + '</div>' +
            '</div>';
    }

    function renderScaleBar(label, className, currenValName, bestValName, worstValName) {
        var unit = constants.fuelEconomyUnit;
        return '<div class="scale-bar-vertical ' + className + '">' +
            '<div class="label">' + label + '</div>' +
            '<div class="current-result">' +
                '<div class="current-result-progress"></div>' +
                '<div class="worst-result"></div>' +
                '<div class="best-result"></div>' +
                '<div class="best-result-data data-' + bestValName + '">' +
                    '<div class="info-block-value">---</div>' +
                    '<div class="info-block-unit">' + unit + '</div>' +
                '</div>' +
                '<div class="worst-result-data data-' + worstValName + '">' +
                    '<div class="info-block-value"></div>' +
                    '<div class="info-block-unit">' + unit + '</div>' +
                '</div>' +
            '</div>' +
            '<div class="current-result-data data-' + currenValName + '">' +
                '<div class="info-block-value">---</div>' +
                '<div class="info-block-unit">' + unit + '</div>' +
            '</div>' +
        '</div>';

    }

    function renderScaleBarHor() {
        return '<div class="scale-bar-horizontal">' +
            '<div class="current-result">' +
                '<div class="current-result-progress"></div>' +
            '</div>' +
            '<div class="best-result"></div>' +
        '</div>';

    }

    return Class.create(
        ModuleView,
        {
            ///////////////////////////////////
            //
            // Note the lifecycle methods of the
            // ModuleView class listed below.
            //
            // You may remove these commented guides
            // if you prefer.
            //
            // Uncomment them to enable and modify.
            //
            // Note the use of $super() used to reference
            // the built-in functionality.
            ///////////////////////////////////

            /*
             Called prior to the application being displayed.
             Executes in parallel to the module controller's init().
             Controller and View are not yet linked
             Return void, or a Promise to resolve for deferred completion.
             */
            init: function($super) {
                Log.debug("view init()");
                var promise = new Promise();

                this.skin = "oxygen"; // This is an oxygen-only app as packaged // window.oc.states.systemState['vehicle-profile'];

                this.convertedData = this.calculatedData = {
                    fuelEconomy: null,
                    fuelUsage: null,
                    carbonFootprint: null,
                    fuelCost: null,

                    lastFuelEconomy: null,
                    avgFuelEconomy: null,
                    bestFuelEconomy: null,
                    worstFuelEconomy: null,

                    lastFuelUsage: null,
                    avgFuelUsage: null,
                    totalFuelUsage: null,

                    lastCarbonFootprint: null,
                    avgCarbonFootprint: null,
                    totalCarbonFootprint: null,

                    lastFuelCost: null,
                    avgFuelCost: null,
                    totalFuelCost: null
                }; 

                new Timer(function() {
                    promise.resolve($super());
                }.bind(this), 2000);

                return promise;
            }.override(),

            setTmxData: function(key, val) {
                tmxData[key] = val;
                this.convertData();
            },

            /*
             View is transitioned in and elements are visible.
             */
            started: function($super) {
                $super();
                document.body.classList.add(this.skin); // TODO: it would be good to have this built-in in the platform
                this.getChamber('main-chamber').showInfoScreen('this-drive-screen');
            }.override(),

            convertData: function() {
                var CurrentDriveDistance = tmxData.DistanceTravelledTotal,
                    CurrentDriveFuelUsage = tmxData.TotalFuelConsumptionDrive,
                    CurrentDriveFuelEconomy = tmxData.MeanFuelEfficiencyDrive,
                    InstantFuelEconomy = tmxData.FuelEfficiencyInstant,
                    BestFuelEconomy = this.calculatedData.bestFuelEconomy,
                    WorstFuelEconomy = this.calculatedData.worstFuelEconomy;

                if (typeof CurrentDriveFuelEconomy === 'number' && CurrentDriveFuelEconomy > 0) {
                    if (BestFuelEconomy === null || CurrentDriveFuelEconomy < BestFuelEconomy) {
                        BestFuelEconomy =  CurrentDriveFuelEconomy;
                    }
                    if (WorstFuelEconomy === null || CurrentDriveFuelEconomy > WorstFuelEconomy) {
                        WorstFuelEconomy = CurrentDriveFuelEconomy;
                    }
                }

                this.calculatedData = {
                    fuelEconomy:            CurrentDriveFuelEconomy,
                    fuelUsage:              CurrentDriveFuelUsage,
                    carbonFootprint:        CurrentDriveFuelUsage * constants.CarbonFootprintConvert,
                    fuelCost:               CurrentDriveFuelUsage * constants.FuelPrice,

                    avgFuelEconomy:         constants.SimulatedOverallFuelEconomy,
                    bestFuelEconomy:        BestFuelEconomy,
                    worstFuelEconomy:       WorstFuelEconomy,
                    totalBestFuelEconomy:   constants.SimulatedBestFuelEconomy,
                    totalWorstFuelEconomy:  constants.SimulatedWorstFuelEconomy,

                    lastFuelUsage:          constants.SimulatedLastDriveFuelUsage,
                    avgFuelUsage:           constants.SimulatedPerDriveFuelUsage,
                    totalFuelUsage:         constants.SimulatedTotalFuelUsage + CurrentDriveFuelUsage,

                    lastCarbonFootprint:    constants.SimulatedLastDriveFuelUsage * constants.CarbonFootprintConvert,
                    avgCarbonFootprint:     constants.SimulatedPerDriveFuelUsage * constants.CarbonFootprintConvert,
                    totalCarbonFootprint:   (constants.SimulatedTotalFuelUsage + CurrentDriveFuelUsage) * constants.CarbonFootprintConvert,

                    lastFuelCost:           constants.SimulatedLastDriveFuelUsage * constants.FuelPrice,
                    avgFuelCost:            constants.SimulatedPerDriveFuelUsage * constants.FuelPrice,
                    totalFuelCost:          constants.SimulatedTotalFuelUsage * constants.FuelPrice
                }; 


                function convVal(val, mul) {
                    if (typeof val !=='number') return '---';

                    var res = val * mul;
                    if (res < 100) {
                        return (Math.round(res * 100) / 100).toFixed(2);
                    }
                    return Math.round(res).toFixed(2);
                }

                function mpgConvert(val) {
                    if (typeof val !=='number' || val === 0) {
                        return '---';
                    }

                    var res = constants.MPGConvert / val;
                    if (res < 100) {
                        return Math.round(res * 100) / 100;
                    }
                    return Math.round(res);
                }

                this.convertedData = {
                    fuelEconomy:            mpgConvert(this.calculatedData.fuelEconomy),
                    fuelUsage:              convVal(this.calculatedData.fuelUsage, constants.GallonConvert),
                    carbonFootprint:        convVal(this.calculatedData.carbonFootprint, 1),
                    fuelCost:               convVal(this.calculatedData.fuelCost, constants.GallonConvert),

                    avgFuelEconomy:         mpgConvert(this.calculatedData.avgFuelEconomy),
                    bestFuelEconomy:        mpgConvert(this.calculatedData.bestFuelEconomy),
                    worstFuelEconomy:       mpgConvert(this.calculatedData.worstFuelEconomy),
                    totalBestFuelEconomy:   mpgConvert(this.calculatedData.totalBestFuelEconomy),
                    totalWorstFuelEconomy:  mpgConvert(this.calculatedData.totalWorstFuelEconomy),

                    lastFuelUsage:          convVal(this.calculatedData.lastFuelUsage, constants.GallonConvert),
                    avgFuelUsage:           convVal(this.calculatedData.avgFuelUsage, constants.GallonConvert),
                    totalFuelUsage:         convVal(this.calculatedData.totalFuelUsage, constants.GallonConvert),

                    lastCarbonFootprint:    convVal(this.calculatedData.lastCarbonFootprint, 1),
                    avgCarbonFootprint:     convVal(this.calculatedData.avgCarbonFootprint, 1),
                    totalCarbonFootprint:   convVal(this.calculatedData.totalCarbonFootprint, 1),

                    lastFuelCost:           convVal(this.calculatedData.lastFuelCost, constants.GallonConvert),
                    avgFuelCost:            convVal(this.calculatedData.avgFuelCost, constants.GallonConvert),
                    totalFuelCost:          convVal(this.calculatedData.totalFuelCost, constants.GallonConvert)
                };

                this.isRecentInfo = false;
            },

            updateDataView: function() {
                if (this.isRecentInfo) return;
                this.isRecentInfo = true;

                this.updateDataViewValues();
                if (this.skin === 'oxygen') {
                    return this.updateDataViewEconomyBar();
                } else {
                    this.updateDataViewEconomy2Bars();
                }
            },

            updateDataViewValues: function() {
                var data = this.convertedData,
                    element = this.getChamber('main-chamber').screen.element;

                Object.keys(data).forEach(function (key) {
                    var elements = element.querySelectorAll('.data-' + key + ' .info-block-value') || [];
                    Array.prototype.forEach.call(elements, function(el) {
                        el.innerHTML = data[key];
                    });
                });
            },

            updateDataViewEconomyBar: function() {
                var data = this.convertedData,
                    element = this.getChamber('main-chamber').screen.element,
                    fuelEconomyElement = element.querySelector('.fuel-economy-screen'),
                    bar         = fuelEconomyElement.querySelector('.scale-bar-horizontal'),
                    barVal      = bar.querySelector('.current-result-progress'),
                    bestEl      = bar.querySelector('.best-result');

                function xCoord(val) {
                    if (val === '---') return 0;
                    var res = val * 95 / 20 + 4;
                    if (res < 0) res = 0;
                    if (res > 285) res = 286;
                    return res;
                }

                barVal.style.width = xCoord(data.fuelEconomy) + 'px';

                if (data.bestFuelEconomy !== '---') {
                    bestEl.style.left = xCoord(data.bestFuelEconomy) + 'px';
                    bestEl.style.display = 'block';
                } else {
                    // bestEl.style.display = 'none';
                }
            },

            updateDataViewEconomy2Bars: function() {
                var data = this.convertedData,
                    element = this.getChamber('main-chamber').screen.element,
                    fuelEconomyElement = element.querySelector('.fuel-economy-info'),
                    leftBar         = fuelEconomyElement.querySelector('.scale-bar-vertical.left'),
                    rightBar        = fuelEconomyElement.querySelector('.scale-bar-vertical.right'),
                    leftBarVal      = leftBar.querySelector('.current-result-progress'),
                    rightBarVal     = rightBar.querySelector('.current-result-progress'),
                    leftBest        = leftBar.querySelector('.best-result'),
                    leftWorst       = leftBar.querySelector('.worst-result'),
                    rightBest       = rightBar.querySelector('.best-result'),
                    rightWorst      = rightBar.querySelector('.worst-result'),
                    leftBestData    = leftBar.querySelector('.best-result-data'),
                    leftWorstData   = leftBar.querySelector('.worst-result-data'),
                    rightBestData   = rightBar.querySelector('.best-result-data'),
                    rightWorstData  = rightBar.querySelector('.worst-result-data'),
                    leftBestY, leftWorstY, rightBestY, rightWorstY, tmp;

                function yCoord(val) {
                    if (val === '---') return 0;
                    var res = val * 2.7 - 5;
                    if (res < 0) res = 0;
                    if (res > 163) res = 163;
                    return res;
                }

                function positionBarElements(val, bestVal, worstVal, el, bestEl, worstEl, bestDataEl, worstDataEl) {
                    var bestY = yCoord(bestVal),
                        worstY = yCoord(worstVal),
                        bestY2 = bestY,
                        worstY2 = worstY;

                    el.style.height = yCoord(val) + 'px';

                    if (bestY - worstY < 70 && bestVal !== '---' && worstVal !== '---') {
                        tmp = (worstY + bestY) /2;
                        worstY2 = tmp - 35;
                        bestY2 = tmp + 35;
                    }

                    if (bestVal !== '---') {
                        bestEl.style.bottom = bestY + 'px';
                        bestDataEl.style.bottom = bestY2 + 'px';
                        bestEl.style.display = 'block';
                        bestDataEl.style.display = 'block';
                    } else {
                        bestEl.style.display = 'none';
                        bestDataEl.style.display = 'none';
                    }

                    if (worstVal !== '---') {
                        worstY = yCoord(worstVal);
                        worstEl.style.bottom = worstY + 'px';
                        worstDataEl.style.bottom = worstY2 + 'px';
                        worstEl.style.display = 'block';
                        worstDataEl.style.display = 'block';
                    } else {
                        worstEl.style.display = 'none';
                        worstDataEl.style.display = 'none';
                    }
                }

                positionBarElements(data.fuelEconomy, data.bestFuelEconomy, data.worstFuelEconomy,
                    leftBarVal, leftBest, leftWorst, leftBestData, leftWorstData);
                positionBarElements(data.avgFuelEconomy, data.totalBestFuelEconomy, data.totalWorstFuelEconomy,
                    rightBarVal, rightBest, rightWorst, rightBestData, rightWorstData);
            },

            renderScreens: function() {
                return renderInfoScreen('This Drive', this.renderThisDrive(), 'this-drive-screen hidden') +
                       renderInfoScreen('Fuel Economy', this.renderFuelEconomy(), 'fuel-economy-screen hidden') +
                       renderInfoScreen('Fuel Usage', this.renderFuelUsage(), 'fuel-usage-screen hidden') +
                       renderInfoScreen('Carbon Footprint', this.renderCarbonFootprint(), 'co2-screen hidden') +
                       renderInfoScreen('Fuel Cost', this.renderFuelCost(), 'fuel-cost-screen hidden');
            },

            renderThisDrive: function() {
                return wrapColumn(renderTextItem('Fuel Economy', constants.fuelEconomyUnit, 'data-fuelEconomy') +
                        renderTextItem('Carbon Footprint', constants.co2Unit, 'data-carbonFootprint')) +
                        wrapColumn(renderTextItem('Fuel Usage', constants.fuelUsageUnit, 'data-fuelUsage') +
                        renderTextItem('Fuel Cost', constants.moneyUnit, 'data-fuelCost', constants.moneyPreffix), this.skin === 'oxygen');
            },

            renderFuelEconomy: function() {
                if (this.skin === 'oxygen') {
                    return this.renderFuelEconomy1Bar();
                }
                return this.renderFuelEconomy2Bars();
            },

            renderFuelEconomy1Bar: function() {
                var unit = constants.fuelEconomyUnit;
                return wrapColumn(renderTextItem('This Drive', unit, 'large data-fuelEconomy') +
                    renderScaleBarHor()) +
                    wrapColumn(
                        renderTextItem('Last Drive', unit, 'small data-fuelEconomy') +
                        renderTextItem('Per Drive (avg)', unit, 'small data-avgFuelUsage'),
                        true);
            },

            renderFuelEconomy2Bars: function() {
                return '<div class="fuel-economy-info">' +
                        renderScaleBar('This Drive', 'left', 'fuelEconomy', 'bestFuelEconomy', 'worstFuelEconomy') +
                        '<div class="scale-bar-vertical-numbers"></div>' +
                        renderScaleBar('Overall', 'right', 'avgFuelEconomy', 'totalBestFuelEconomy', 'totalWorstFuelEconomy') +
                    '</div>';
            },

            renderFuelUsage: function() {
                var unit = constants.fuelUsageUnit;
                return wrapColumn(renderTextItem('This Drive', unit, 'large data-fuelUsage') +
                    renderTextItem('Last Drive', unit, 'small data-lastFuelUsage')) +
                    wrapColumn(
                        renderTextItem('Per Drive (avg)', unit, 'small data-avgFuelUsage') +
                        renderTextItem('All Drives', unit, 'small data-totalFuelUsage'),
                        true);
            },

            renderCarbonFootprint: function() {
                var unit = constants.co2Unit;
                return wrapColumn(renderTextItem('This Drive', unit, 'large data-carbonFootprint') +
                    renderTextItem('Last Drive', unit, 'small data-lastCarbonFootprint')) +
                    wrapColumn(
                        renderTextItem('Per Drive (avg)', unit, 'small data-avgCarbonFootprint') +
                        renderTextItem('All Drives', unit, 'small data-totalCarbonFootprint'),
                        true);
            },

            renderFuelCost: function() {
                var unit = constants.moneyUnit,
                    preffix = constants.moneyPreffix;
                return wrapColumn(renderTextItem('This Drive', unit, 'large data-fuelCost', preffix) +
                    renderTextItem('Last Drive', unit, 'small data-lastFuelCost', preffix)) +
                    wrapColumn(
                        renderTextItem('Per Drive (avg)', unit, 'small data-avgFuelCost', preffix) +
                        renderTextItem('All Drives', unit, 'small data-totalFuelCost', preffix),
                        true);
            },

            /*
             Called prior to pausing the application and placing in background
             */
            beforePause: function($super) {
                Log.debug("view beforePause()");
                this.getChamber('main-chamber').timer.pause();
                return $super();
            }.override(),

            /*
             Called prior to being reactivated from being paused in background
             */
            beforeResume: function($super) {
                Log.debug("view beforeResume()");
                this.getChamber('main-chamber').timer.resume();
                return $super();
            }.override()
        }
    );
});
