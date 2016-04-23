define(function(require) {
    'use strict';

    require('etc/moment');

    var addS = function(count) {
        var s = 's';

        if (count === 1) {
            s = '';
        }

        return s;
    };

    return {
        get: function(seconds) {
            var time = {
                    years : Math.round(moment.duration(seconds, 'seconds').years()),
                    months : Math.round(moment.duration(seconds, 'seconds').months()),
                    days : Math.round(moment.duration(seconds, 'seconds').days()),
                    hours : Math.round(moment.duration(seconds, 'seconds').hours()),
                    minutes : Math.round(moment.duration(seconds, 'seconds').minutes()),
                    seconds : Math.round(moment.duration(seconds, 'seconds').seconds())
                },
                str = 'a few seconds';

            if (time.years > 0) {
                str = time.years + ' year' + addS(time.years);

                if (time.months > 0) {
                    str += ' and '  + time.months + ' month' + addS(time.months);
                }

                return str;
            }
            if (time.months > 0) {
                str = time.months + ' month' + addS(time.months);

                if (time.days > 0) {
                    str += ' and ' + time.days + ' day' + addS(time.days);
                }

                return str;
            }
            if (time.days > 0) {
                str = time.days + ' day' + addS(time.days);

                if (time.hours > 0) {
                    str += ' and ' + time.hours + ' hour' + addS(time.hours);
                }

                return str;
            }
            if (time.hours > 0) {
                str = time.hours + ' hour' + addS(time.hours);

                if (time.minutes > 0) {
                    str += ' and ' + time.minutes + ' min' + addS(time.minutes);
                }

                return str;
            }
            if (time.minutes > 0) {
                str = time.minutes + ' min' + addS(time.minutes);

                return str;
            }

            return str;
        },

        getShort: function(seconds) {
            var time = {
                    years : Math.round(moment.duration(seconds, 'seconds').years()),
                    months : Math.round(moment.duration(seconds, 'seconds').months()),
                    days : Math.round(moment.duration(seconds, 'seconds').days()),
                    hours : Math.round(moment.duration(seconds, 'seconds').hours()),
                    minutes : Math.round(moment.duration(seconds, 'seconds').minutes()),
                    seconds : Math.round(moment.duration(seconds, 'seconds').seconds())
                },
                str = 'a few seconds';

            if (time.years > 0) {
                str = time.years + ' year' + addS(time.years);

                return str;
            }
            if (time.months > 0) {
                str = time.months + ' month' + addS(time.months);

                return str;
            }
            if (time.days > 0) {
                str = time.days + ' day' + addS(time.days);

                return str;
            }
            if (time.hours > 0) {
                str = time.hours + ' hour' + addS(time.hours);

                return str;
            }
            if (time.minutes > 0) {
                str = time.minutes + ' min' + addS(time.minutes);

                return str;
            }

            return str;
        }
    };
});
