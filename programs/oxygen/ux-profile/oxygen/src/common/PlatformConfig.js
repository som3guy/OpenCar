define(function(require) {
    'use strict';

    var ObjectUtils = require('common/ObjectUtils'),
        CommonPlatformConfig = require('/ui/common/PlatformConfig.js');

    var PlatformConfig = {};

    ObjectUtils.merge(PlatformConfig, CommonPlatformConfig);
    ObjectUtils.merge(PlatformConfig, {
        /**
         * The id of the application to launch by default when the system starts the FIRST TIME.
         *
         * @type {string}
         */
        firstStartAppId : 'com.opencar.system.installed-applications',
        homeScreenApplicationId: 'com.opencar.system.installed-applications',
        backDestinationApplicationId : 'com.opencar.system.installed-applications',
        prohibitAudioAppBackground : false,


        // basic single press on display is supported
        TouchEventsSupport: {
            PRESS: true,
            SLIDE: false,
            PINCH: false
        },


        /**
         * Disable the mouse on the MCD
         * NO! This sucks! (12-31-14)
        disableMCDMouse : true,
        disableMCDTouch : true
         */
    });
    ObjectUtils.secure(PlatformConfig);

    return PlatformConfig;
});
