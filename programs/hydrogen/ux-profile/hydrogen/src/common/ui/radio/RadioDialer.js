define(function (require) {
    'use strict';

    var Class = require('common/Class'),
        RadioDialerBase = require('common/ui/radio/RadioDialerBase');

    var ADJUST_HEIGHT = 40;
    /**
     * An interface to tune the radio.
     * @exports common/ui/radio/RadioDialer
     * @extends module:common/ui/radio/RadioDialerBase
     */
    return Class.create(
        RadioDialerBase,
        /** @lends module:common/ui/radio/RadioDialer.prototype */
        {
            initialize: function ($super, attrs, autoRender) {
                this._configs = attrs || {};
                this.set('focusable', !!this.get('focusable'));
                $super(this._configs, autoRender);
                this.primaryColor = "#298eff"; // Blue to match hydrogen theme.
            },

            baseline: 250,

            draw: function () {
                var ctx = this.canvas.getContext("2d");
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                var mid = parseInt(this.canvas.width / 2); // Determine the middle of the canvas. This is where our current frequency indicator will show.
                // Draw the tick marks below the current frequency tick mark.
                ctx.save();
                ctx.strokeStyle = this.primaryColor;
                ctx.fillStyle = this.primaryColor;
                ctx.lineWidth = this.tickWidth;
                ctx.font = "25px Corbel, Helvetica, Arial, sans-serif";
                ctx.textAlign = "center";
                ctx.beginPath();
                // Draw tick marks on the left of the selected frequency.
                var currentFrequency = this.selectedFrequency * 10;
                while (currentFrequency >= (this.minFrequency * 10)) {
                    if ( currentFrequency == (this.selectedFrequency * 10) ) {
                        // Draw current frequency tick in the middle of the screen.
                        ctx.save();
                        ctx.strokeStyle = "white";
                        ctx.fillStyle = "white";
                        ctx.lineWidth = this.selectedFrequencyTickWidth;
                        //ctx.font = "85px Corbel, Helvetica, Arial, sans-serif";
                        ctx.font = "70px Corbel, Helvetica, Arial, sans-serif";
                        ctx.textAlign = "center";
                        ctx.beginPath();
                        ctx.translate(mid, 0);
                        ctx.moveTo(0, this.baseline);
                        ctx.lineTo(0, this.baseline-this.selectedFrequencyTickHeight);
                        ctx.fillText(this.selectedFrequency.toFixed(1), 0, this.baseline-this.selectedFrequencyTickHeight-20);
                        ctx.stroke();
                        ctx.restore();
                        ctx.translate((mid-this.selectedFrequencyTickWidth / 2)-(this.tickWidth / 2), 0);
                    } else {
                        if ( currentFrequency % (this.frequencyInterval * 10) !== 0 ) {
                            currentFrequency--;
                            continue;
                        }
                        ctx.beginPath();
                        ctx.moveTo(0, this.baseline);
                        if ( currentFrequency % 10 === 0 ) {
                            ctx.lineTo(0, this.baseline-this.largeTickHeight);
                            ctx.fillText(currentFrequency / 10, 0, this.baseline+25);
                        } else {
                            ctx.lineTo(0, this.baseline-this.smallTickHeight);
                        }
                        ctx.stroke();
                        ctx.translate(-(this.tickWidth+this.tickSpace), 0);
                    }
                    currentFrequency--;
                }
                // Draws tick marks on the right of the selected frequency.
                ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity transformation matrix.
                currentFrequency = this.selectedFrequency * 10;
                while (currentFrequency <= (this.maxFrequency * 10)) {
                    if ( currentFrequency == (this.selectedFrequency * 10) ) {
                        // Draw current frequency tick in the middle of the screen.
                        ctx.save();
                        ctx.strokeStyle = "white";
                        ctx.fillStyle = "white";
                        ctx.lineWidth = this.selectedFrequencyTickWidth;
                        //ctx.font = "85px Corbel, Helvetica, Arial, sans-serif";
                        ctx.font = "70px Corbel, Helvetica, Arial, sans-serif";
                        ctx.textAlign = "center";
                        ctx.beginPath();
                        ctx.translate(mid, 0);
                        ctx.moveTo(0, this.baseline);
                        ctx.lineTo(0, this.baseline-this.selectedFrequencyTickHeight);
                        ctx.fillText(this.selectedFrequency.toFixed(1), 0, this.baseline-this.selectedFrequencyTickHeight-20);

                        // Workaround for dialer rendering issue when in EU mode
                        if ( currentFrequency % 10 === 0 ) {
                            ctx.font = "25px Corbel, Helvetica, Arial, sans-serif";
                            ctx.strokeStyle = this.primaryColor;
                            ctx.fillStyle = this.primaryColor;
                            ctx.fillText(currentFrequency / 10, 0, this.baseline+25);
                            ctx.font = "70px Corbel, Helvetica, Arial, sans-serif";
                            ctx.strokeStyle = "white";
                            ctx.fillStyle = "white";
                        }
                        // End workaround

                        ctx.stroke();
                        ctx.restore();
                        ctx.translate((mid+this.selectedFrequencyTickWidth / 2)+(this.tickWidth / 2), 0);
                    } else {
                        if ( currentFrequency % (this.frequencyInterval * 10) !== 0 ) {
                            currentFrequency++;
                            continue;
                        }
                        ctx.beginPath();
                        ctx.moveTo(0, this.baseline);
                        if ( currentFrequency % 10 === 0 ) {
                            ctx.lineTo(0, this.baseline-this.largeTickHeight);
                            ctx.fillText(currentFrequency / 10, 0, this.baseline+25);
                        } else {
                            ctx.lineTo(0, this.baseline-this.smallTickHeight);
                        }
                        ctx.stroke();
                        ctx.translate(this.tickWidth+this.tickSpace, 0);
                    }
                    currentFrequency++;
                }
                ctx.restore();
            },

            // set correct size of <CANVAS> for profile, compensates for the back button
            initializeCanvasSize: function () {
                this.canvas.width = document.getElementById("container-dialer").getBoundingClientRect().width;
                this.canvas.height = this.baseline+ADJUST_HEIGHT;
            }

        });
});
