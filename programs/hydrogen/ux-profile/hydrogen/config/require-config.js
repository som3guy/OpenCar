// Returns the RequireJS configuration object for the vehicle profile
define(function () {
    'use strict';

    return {
        "paths": {
            "common/ui/VerticalListView": "common/ui/ListView",
            // favoriting
            "apps/system/installed_applications/view": "vehicle-profiles/hydrogen/src/apps/system/installed_applications/view",

            // ButtonBar defaults and rules
            "common/ui/ButtonBarControls": "vehicle-profiles/hydrogen/src/common/ui/ButtonBarControls",
            "common/ui/ButtonBarControlsBase": "common/ui/ButtonBarControls",


// Extensions of various Chambers for application use


            // 20150320 - Map Details - offers a Map widget in combination with scrollable text. platform alias scheme
            "common/platform/chamber/MapDetailChamber": "vehicle-profiles/hydrogen/src/common/platform/chamber/MapDetailChamber",
            "common/platform/chamber/MapDetailChamberBase": "common/platform/chamber/MapDetailChamber",

            // Calculates dimensions for scrollable text
            "common/platform/chamber/TextChamber": "vehicle-profiles/hydrogen/src/common/platform/chamber/TextChamber",
            "common/platform/chamber/TextChamberBase": "common/platform/chamber/TextChamber",

			// Radio Dialer
            "common/ui/radio/RadioDialer": "vehicle-profiles/hydrogen/src/common/ui/radio/RadioDialer",

            // Now Playing
            "common/platform/chamber/NowPlayingChamber": "vehicle-profiles/hydrogen/src/common/platform/chamber/NowPlayingChamber",
            "common/platform/chamber/NowPlayingChamberBase": "common/platform/chamber/NowPlayingChamber",

            // Telematics
            "common/platform/TelematicsAPI": "vehicle-profiles/hydrogen/src/common/platform/TelematicsAPI",
            "common/platform/TelematicsAPI2": "vehicle-profiles/hydrogen/src/common/platform/TelematicsAPI2",
            "vehicle-profile": "vehicle-profiles/hydrogen"
        }
    };
});
