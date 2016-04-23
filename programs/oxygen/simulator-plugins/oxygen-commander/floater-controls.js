/***************************************************
OPENCAR SIMULATOR FLOATER-CONTROL PLUGIN

Required files for a complete Floater-Control Simulator plugin:
floater-controls.html 
floater-controls.css
floater-controls.js
plugin.json
***************************************************/

define(function(require) {
    'use strict';

    var Utils = require('utils');

    var iviWindow;

    function load() {

        iviWindow = $('#screen')[0].contentWindow;

        var svgIcon = '<svg viewBox="0 0 44 44" x="0px" y="0px" width="44px" height="44px"><path class="icon-color" d="M 30\.25 26\.625 C 30\.25 31\.625 26\.25 35\.25 21\.75 35\.25 C 18\.625 35\.25 15\.5 34 13\.75 29\.625 C 13\.625 29\.125 13\.375 28\.25 13\.375 28 L 13\.375 25\.625 C 14\.125 20\.5 18\.25 18\.125 21\.75 18\.125 C 26\.625 18\.125 30\.25 22\.25 30\.25 26\.625 ZM 19\.22 8\.94 L 24\.3175 8\.9575 L 24\.3175 16\.9375 C 23\.5081 16\.7343 22\.6501 16\.625 21\.75 16\.625 C 20\.8815 16\.625 20\.0332 16\.7416 19\.22 16\.9625 L 19\.22 8\.94 ZM 13\.3149 21\.3525 L 13\.2616 10\.9915 C 13\.5681 9\.737 14\.335 8\.9435 15\.5632 8\.9239 L 18\.14 8\.935 L 18\.14 17\.325 C 16\.1604 18\.1176 14\.4623 19\.5391 13\.3149 21\.3525 ZM 12\.085 20\.885 L 12\.1 24\.1075 C 11\.8717 24\.9487 11\.75 25\.8346 11\.75 26\.75 C 11\.75 29\.7665 13\.0891 32\.5862 15\.2799 34\.48 C 14\.6556 34\.9902 13\.8751 35\.7499 13\.5696 35\.7501 C 13\.2631 35\.7503 10\.8141 35\.4398 9\.4392 35\.1292 C 8\.9814 32\.324 8\.2189 26\.8727 8\.2189 26\.4053 C 8\.2189 25\.3872 10\.7167 22\.6221 12\.085 20\.885 ZM 31\.39 23\.9175 L 31\.4625 20\.1675 C 31\.1141 19\.718 30\.894 19\.4102 30\.894 19\.344 C 30\.894 18\.8711 31\.0502 19\.1849 31\.0502 18\.8696 L 31\.3623 18\.8667 C 31\.4003 18\.8664 31\.4417 18\.8749 31\.4874 18\.89 L 31\.6499 10\.4905 C 31\.6499 9\.2288 29\.3094 7\.6906 28\.375 7\.7062 L 15\.1025 7\.6803 C 14\.0282 7\.3856 12\.0361 9\.4487 12\.0361 10\.5415 L 12\.0775 19\.1475 C 11\.2229 19\.9906 7 25\.2181 7 26\.1006 C 7 26\.412 7\.6093 32\.3274 8\.0664 35\.2863 C 8\.0664 35\.5979 8\.3712 36\.0651 8\.6763 36\.2208 C 10\.5084 36\.532 13\.7229 37 14\.0297 37 C 14\.2688 37 15\.6271 35\.9551 16\.215 35\.1975 C 17\.7748 36\.2507 19\.6641 36\.875 21\.75 36\.875 C 23\.8993 36\.875 25\.8651 36\.2005 27\.475 35\.0525 C 27\.9666 35\.8181 29\.4158 37 29\.8021 37 C 30\.114 37 33\.3944 36\.5265 35\.1172 36\.2101 C 35\.2739 36\.21 35\.5875 36\.0518 35\.5875 35\.8939 C 36\.2151 32\.5739 37 26\.4048 37 25\.9304 C 37 25\.6141 36\.6859 24\.9835 36\.3721 24\.6692 C 35\.7697 23\.7632 32\.5732 19\.2464 31\.4874 18\.89 C 31\.4417 18\.8749 31\.4003 18\.8664 31\.3623 18\.8667 L 31\.0502 18\.8696 C 31\.0502 19\.1849 30\.894 18\.8711 30\.894 19\.344 C 30\.894 19\.4102 31\.1141 19\.718 31\.4625 20\.1675 C 32\.7745 21\.8601 35\.9012 25\.5619 35\.9012 25\.9366 C 35\.9012 26\.2527 35\.1172 31\.3125 34\.8036 33\.9988 C 34\.8036 34\.4726 34\.6471 34\.9467 34\.4904 35\.1048 C 33\.0814 35\.4218 30\.5819 35\.7391 30\.27 35\.7393 C 29\.5317 35\.7397 29\.0725 35\.3175 28\.365 34\.3375 C 30\.4531 32\.4529 31\.75 29\.6865 31\.75 26\.625 C 31\.75 25\.693 31\.6255 24\.7839 31\.39 23\.9175 ZM 27\.9081 8\.9732 C 28\.8422 8\.8008 30\.401 10\.0366 30\.401 10\.9823 L 30\.475 21\.665 C 29\.3746 19\.6874 27\.6147 18\.1111 25\.4049 17\.2775 L 25\.4049 8\.9625 L 27\.9081 8\.9732 ZM 15\.1039 26\.7583 C 15\.1039 30\.558 18\.1334 33\.6329 21\.8837 33\.6264 C 25\.6487 33\.6198 28\.7114 30\.5125 28\.7114 26\.686 C 28\.7114 22\.8594 25\.6487 19\.7847 21\.8837 19\.8181 C 18\.1334 19\.8514 15\.1039 22\.9586 15\.1039 26\.7583 Z"\/><\/svg>';

        Utils.addFloaterControlIcon('icon-oxygen-commander','oxygen-commander','Show\/Hide Commander',svgIcon);

        // COMMANDER
        /*
        if (Utils.loadData("oxygen-commander-show") == 'true') {
            showCommander();
        }
        */
        //
        // COMMANDER BUTTONS
        //

        $("#oxygen-back-button").click(function() {
            Utils.sendKeyboardEventToPlatform(8); // BACKSPACE
        });
        $("#oxygen-nav-button").click(function() {
            $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.poi.dev.maps-example-with-plugins');
        });
        $("#oxygen-home-button").click(function() {
            Utils.sendKeyboardEventToPlatform(36); // HOME
        });
        $("#oxygen-music-button").click(function() {
            $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.system.installed-applications/category/media?t='+Date.now());//'#/app/com.opencar.audio.radioparadise1');
        });
        $("#oxygen-apps-button").click(function() {
            $('#screen').attr('src', iviWindow.location.origin + iviWindow.location.pathname + '#/app/com.opencar.system.installed-applications/?reset=true&t='+Date.now());
        });

        $("#oxygen-up-button").click(function() {
            Utils.sendKeyboardEventToPlatform(87);
        });

        $("#oxygen-left-button").click(function() {
            Utils.sendKeyboardEventToPlatform(65);
        });

        $("#oxygen-right-button").click(function() {
            Utils.sendKeyboardEventToPlatform(68);
        });

        $("#oxygen-down-button").click(function() {
            Utils.sendKeyboardEventToPlatform(83);
        });

        $("#oxygen-middle-button").click(function() {
            Utils.sendKeyboardEventToPlatform(13);
        });

        function pressDown () {
            $("#oxygen-down-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-down-button").css('opacity','');
            }, 300);
            $("#oxygen-commander-wheel").stop().animate({
                top: "133px"
            }, 100, function() {
                $('#oxygen-commander-wheel').animate({
                    top: "113px"
                }, 100);
            });
        }
        function pressUp () {
            $("#oxygen-up-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-up-button").css('opacity','');
            }, 300);
            $("#oxygen-commander-wheel").stop().animate({
                top: "93px"
            }, 100, function() {
                $('#oxygen-commander-wheel').animate({
                    top: "113px"
                }, 100);
            });
        }
        function pressLeft () {
            $("#oxygen-left-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-left-button").css('opacity','');
            }, 300);
            $("#oxygen-commander-wheel").stop().animate({
                left: "73px"
            }, 100, function() {
                $('#oxygen-commander-wheel').animate({
                    left: "93px"
                }, 100);
            });
        }
        function pressRight () {
            $("#oxygen-right-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-right-button").css('opacity','');
            }, 300);
            $("#oxygen-commander-wheel").stop().animate({
                left: "113px"
            }, 100, function() {
                $('#oxygen-commander-wheel').animate({
                    left: "93px"
                }, 100);
            });
        }
        function pressMiddle () {
            $("#oxygen-middle-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-middle-button").css('opacity','');
            }, 300);
            $("#oxygen-commander-wheel").css({'-webkit-transform': 'scale(.95,.95)'});
            setTimeout(function() {
                $("#oxygen-commander-wheel").css({'-webkit-transform': 'scale(1,1)'});
            }, 100);
        }
        function pressBack () {
            $("#oxygen-back-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-back-button").css('opacity','');
            }, 300);
        }
        function pressHome () {
            $("#oxygen-home-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-home-button").css('opacity','');
            }, 300);
        }
        function pressCounter () {
            $("#oxygen-counter-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-counter-button").css('opacity','');
            }, 300);
        }
        function pressClockwise () {
            $("#oxygen-clockwise-button").css('opacity','.8');
            setTimeout(function() {
                $("#oxygen-clockwise-button").css('opacity','');
            }, 300);
        }
        
        var rotation = 0;
        var x = 0;
        var y = 0;

        function rotateCounter() {
            rotation += -20;
            $("#oxygen-commander-rotate").css({'-webkit-transform': 'rotate(' + rotation + 'deg)'});
            x += 0.05;
            $("#oxygen-commander-lighting").css({'-webkit-transform': 'rotate(' + x + 'deg)'});
            setTimeout(function() {
                y += -0.05;
                $("#oxygen-commander-lighting").css({'-webkit-transform': 'rotate(' + y + 'deg)'});
            }, 100);
            pressCounter()
        }

        $("#oxygen-counter-button").click(function() {
            rotateCounter();
            Utils.sendKeyboardEventToPlatform(37);
        });

        function rotateClockwise() {
            rotation += 20;
            $("#oxygen-commander-rotate").css({'-webkit-transform': 'rotate(' + rotation + 'deg)'});
            x += -0.05;
            $("#oxygen-commander-lighting").css({'-webkit-transform': 'rotate(' + x + 'deg)'});
            setTimeout(function() {
                y += 0.05;
                $("#oxygen-commander-lighting").css({'-webkit-transform': 'rotate(' + y + 'deg)'});
            }, 100);
            pressClockwise ()
        }

        $("#oxygen-clockwise-button").click(function() {
            rotateClockwise();
            Utils.sendKeyboardEventToPlatform(39);
        });
        

        // KEYBOARD EVENTS
        var animateCommander = function(keyCode) {
            if      (keyCode === 40) rotateClockwise(); // arrow down
            else if (keyCode === 39) rotateClockwise(); // arrow right
            else if (keyCode === 38) rotateCounter();   // arrow up
            else if (keyCode === 37) rotateCounter();   // arrow left
            else if (keyCode === 13) pressMiddle(); // enter
            else if (keyCode === 87) pressUp(); // W
            else if (keyCode === 65) pressLeft(); // A
            else if (keyCode === 68) pressRight(); // D
            else if (keyCode === 83) pressDown(); // S
            else if (keyCode === 8) pressBack(); // delete
            else if (keyCode === 36) pressHome(); // home
            else return;
            $('#screen')[0].contentWindow.getFocusedItem().element.focus();
        };

        // Pass all keydown events to the platform and let it handle them
        $(document).unbind('keydown');
        $(document).bind('keydown', function(e) {
            Utils.sendKeyboardEventToPlatform(e.keyCode);
            if (e.keyCode === 8) { // delete, note we're not checking for input elements in case we ever need to support text entry
                event.preventDefault(); // prevent browser navigation hash changes
            }
        });

        // Commander only animates in response to key event messages dispatched from the platform
        window.addEventListener(
            "message",
            function(event) {
                try {
                    var data = JSON.parse(event.data);
                    if (data && data.type && data.type === 'keyEvent') {
                        animateCommander(data.keyCode);
                    }
                } catch(e) {
                    // no-op
                }
            },
            false
        );

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