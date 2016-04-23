/***************************************************
OPENCAR SIMULATOR BEZEL-CONTROL PLUGIN

Required files for a complete Bezel-Control Simulator plugin:
bezel-controls.html 
bezel-controls.css
bezel-controls.js
plugin.json
***************************************************/

define(function(require) {
    'use strict';

    var Utils = require('utils');

    var iviWindow;

    function load() {
        iviWindow = $('#screen')[0].contentWindow;

/*
        if (Utils.loadData("oxygen-blue-side-buttons") == 'false') {
            hideSideButtons();
        }
        if (Utils.loadData("oxygen-blue-bottom-buttons") == 'false') {
            hideBottomButtons();
*/

        // SIDE BUTTONS
        var svgIcon = '<svg viewBox="0 0 44 44" x="0px" y="0px" width="44px" height="44px"><path d="M 10 14 L 35 14 L 35 30 L 10 30 L 10 14 ZM 11 12 C 9\.3431 12 8 13\.3431 8 15 L 8 16 L 4 16 L 4 17 L 8 17 L 8 19 L 4 19 L 4 20 L 8 20 L 8 22 L 4 22 L 4 23 L 8 23 L 8 29 C 8 30\.6569 9\.3431 32 11 32 L 34 32 C 35\.6569 32 37 30\.6569 37 29 L 37 23 L 41 23 L 41 22 L 37 22 L 37 20 L 41 20 L 41 19 L 37 19 L 37 17 L 41 17 L 41 16 L 37 16 L 37 15 C 37 13\.3431 35\.6569 12 34 12 L 11 12 Z"\/><\/svg>';

        Utils.addBezelControlIcon('icon-side-buttons','oxygen-blue-side-buttons','Show\/Hide Bezel Buttons',svgIcon);

        // BOTTOM BUTTONS (1-6)
        var svgIcon = '<svg viewBox="0 0 44 44" x="0px" y="0px" width="44px" height="44px"><path d="M 10 11 L 35 11 L 35 27 L 10 27 L 10 11 ZM 11 9 C 9\.3431 9 8 10\.3431 8 12 L 8 26 C 8 27\.6569 9\.3431 29 11 29 L 34 29 C 35\.6569 29 37 27.6569 37 26 L 37 12 C 37 10.3431 35.6569 9 34 9 L 11 9 ZM 30 36 L 35 36 C 36.1046 36 37 35.1046 37 34 C 37 32.8954 36.1046 32 35 32 L 30 32 L 30 36 ZM 23 36 L 29 36 L 29 32 L 23 32 L 23 36 ZM 16 36 L 22 36 L 22 32 L 16 32 L 16 36 ZM 10 32 C 8.8954 32 8 32.8954 8 34 C 8 35.1046 8.8954 36 10 36 L 15 36 L 15 32 L 10 32 Z"\/><\/svg>';

        Utils.addBezelControlIcon('icon-bottom-buttons','oxygen-blue-bottom-buttons','Show\/Hide Bottom Buttons',svgIcon);

        // BEZEL SIDE BUTTONS

        //SIDE BUTTONS
        if (!$('#side-button-1').hasClass('ui-widget')) { // Add click handlers first time only
            $('#side-button-1').button()
                .click(function() {
//                    $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.system.installed-applications/?reset=true&t='+Date.now());
                    $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.app.ecodriver');
                });
            $('#side-button-2').button()
                .click(function() {
                    $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.poi.dev.maps-example-with-plugins');
                });
            $('#side-button-3').button()
                .click(function() {
                    Utils.sendKeyboardEventToPlatform(8); // BACKSPACE
                });
            $('#side-button-4').button()
                .click(function() {
                    Utils.sendKeyboardEventToPlatform(36); // HOME
                });
            $('#side-button-5').button()
                .click(function() {
                    $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.core.radio-sim');
                });
            $('#side-button-6').button()
                .click(function() {
                    $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.core.phone');
                });
        }

         // Bottom Buttons
         if (!$('#bottom-button-1').hasClass('ui-widget')) { // Add click handlers first time only
             $('#bottom-button-1').button()
                 .click(function() {
                     $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.audio.radioparadise1');
                 });

             $('#bottom-button-2').button()
                 .click(function() {
                     $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.audio.kexpradio');
             });
             $('#bottom-button-3').button()
                 .click(function() {
                     $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.audio.kqedradio');
             });
             $('#bottom-button-4').button()
                 .click(function() {
                     $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.audio.kuowradio');
             });
             $('#bottom-button-5').button()
                 .click(function() {
                     $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.audio.whyyradio');
             });
             $('#bottom-button-6').button()
                 .click(function() {
                     $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.audio.wtopradio');
             });
         }

    }

    return {
        load: load
    };
});
/**************************************************
THE OPENCAR SIMULATOR:
This will help you to understand how the OpenCar Simulator is constructed and where Simulator plugins are loaded.
---------------------------------------------------------------------------------------------
|  OpenCar                                           |  Launch App  |  Program Picker   |   |
---------------------------------------------------------------------------------------------
|                                                                   |                   |   |
|                                                                   |                   |   |
|         -------------------------------------------------         |                   |   |
|         |                                               |         |                   |   |
|         |                                               |         |  Vehicle Data     |   |
|         |                                               |         |  plugin type      |   |
|         |                                               |         |  defines what     |   |
|         |                                               |         |  loads here       |   |
|         |                                               |         |                   |   |
|         |                     #screen                   |         |                   |   |
|         |                                               |         |     TMX icons --\>|   |
|         |                                               |         |                   |   |
|         |                                               |         |                   |   |
|         |                                               |         |                   |   |
|         |                                     ------------------  |                   |   |
|         |                                     |                |  |                   |   |
|         |                                     |                |  |                   |   |
|         --------------------------------------|     Floater    |  |                   |---|
|                                               |     Control    |  |  Bezel & Floater  |   |
|                                               |                |  |  control icons    |   |
|    #bezel                                     |                |  |     load here --\>|   |
|    Bezel Controls                             |                |  |                   |   |
|                                               ------------------  |                   |   |
|                                                                   |                   |   |
---------------------------------------------------------------------------------------------
|    Drive Play files load here                                     |         Legal         |
---------------------------------------------------------------------------------------------

SIMULATOR PLUGIN TYPES:

Bezel-Art
A bezel-art plugin defines the art surrounding the IVI #screen.

Vehicle-Data
Telematics data that defines what events load in the Simulators telematics sidebar.

Bezel-Controls
Your playground for adding emulated hardware controls/buttons that surround the screen.

Floater-Controls
Floating dialogs that contain emulated hardware controls/buttons.  

Drive-Play
Real-world data captured (telematics and video) and played back to simulate real-time telematics events.
***************************************************/