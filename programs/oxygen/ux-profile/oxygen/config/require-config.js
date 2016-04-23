// Returns the RequireJS configuration object for the vehicle profile
define(function() {
    'use strict';

    return {
        "paths": {
            "common/ui/VerticalListView": "common/ui/ListView",
            // Config
            "common/PlatformConfigBase": "common/PlatformConfig",
            "common/PlatformConfig" : "vehicle-profiles/oxygen/src/common/PlatformConfig",

            // Oxygen uses the orbital menu scheme
            "platform/presentation/PlatformPresentationController": "vehicle-profiles/oxygen/src/platform/presentation/PlatformPresentationController",
            "platform/presentation/PlatformViewport": "vehicle-profiles/oxygen/src/platform/presentation/PlatformViewport",
            "common/ui/ListView":"vehicle-profiles/oxygen/src/common/ui/ListView",
            "common/ui/ListViewBase":"common/ui/ListView",
            "common/ui/ListView_15":"vehicle-profiles/oxygen/src/common/ui/ListView_15",
            "common/ui/ListViewBase_15":"common/ui/ListView_15",

            // ButtonBar defaults and rules
            "common/ui/ButtonBarControls": "vehicle-profiles/oxygen/src/common/ui/ButtonBarControls",
            "common/ui/ButtonBarControlsBase": "common/ui/ButtonBarControls",

            // ModuleView (breadcrumb support)
            "common/platform/ModuleView" : "vehicle-profiles/oxygen/src/common/platform/ModuleView",
            "common/platform/ModuleViewBase" : "common/platform/ModuleView",

            // Now Playing
            "common/platform/chamber/NowPlayingChamber": "vehicle-profiles/oxygen/src/common/platform/chamber/NowPlayingChamber",
            "common/platform/chamber/NowPlayingChamberBase": "common/platform/chamber/NowPlayingChamber",

			// Radio Dialer
            "common/ui/radio/RadioDialer": "vehicle-profiles/oxygen/src/common/ui/radio/RadioDialer",
            
            // ListChamber (breadcrumb support)
            "common/platform/chamber/ListChamber": "vehicle-profiles/oxygen/src/common/platform/chamber/ListChamber",
            "common/platform/chamber/ListChamberBase": "common/platform/chamber/ListChamber",


            // Extensions of various Chambers for application use

            // 20150320 - Map Details - offers a Map widget in combination with scrollable text. platform alias scheme
            "common/platform/chamber/MapDetailChamber": "vehicle-profiles/oxygen/src/common/platform/chamber/MapDetailChamber",
            "common/platform/chamber/MapDetailChamberBase": "common/platform/chamber/MapDetailChamber",

            // Calculates dimensions for scrollable text
            "common/platform/chamber/TextChamber": "vehicle-profiles/oxygen/src/common/platform/chamber/TextChamber",
            "common/platform/chamber/TextChamberBase": "common/platform/chamber/TextChamber",

            "common/platform/chamber/ListChamberOld": "vehicle-profiles/oxygen/src/common/platform/chamber/ListChamberOld",
            "common/platform/chamber/ListChamberBaseOld": "common/platform/chamber/ListChamberOld",

            // Telematics
            "common/platform/TelematicsAPI": "vehicle-profiles/oxygen/src/common/platform/TelematicsAPI",
            "common/platform/TelematicsAPI2": "vehicle-profiles/oxygen/src/common/platform/TelematicsAPI2",
            "vehicle-profile": "vehicle-profiles/oxygen",

            // layout templates
            "common/layout/header-main-footer": "vehicle-profiles/oxygen/src/common/layout/header-main-footer",

            "common/templates/listview/listview-template": "vehicle-profiles/oxygen/src/common/templates/listview/listview-template",
            "common/templates/listview/listview": "vehicle-profiles/oxygen/src/common/templates/listview/listview"
        }
    };
});
