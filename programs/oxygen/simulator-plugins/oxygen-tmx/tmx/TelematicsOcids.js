//
// THIS IS A GENERATED FILE - DO NOT EDIT
//

/**
* Telematics Ocids
* @module vehicle-profile/tmx/TelematicsOcids
*/
define(function() {
    'use strict';

    return [
{
    "ocid": 906,
    "name": "LateralAcceleration",
    "label": "Acceleration - Lateral",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 41.91,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Meters Per Second Squared",
        "symbol": "m/s²"
    }
},
{
    "ocid": 907,
    "name": "LongitudinalAcceleration",
    "label": "Acceleration - Longitudinal",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 41.91,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Meters Per Second Squared",
        "symbol": "m/s²"
    }
},
{
    "ocid": 821,
    "name": "VerticalAcceleration",
    "label": "Acceleration - Vertical",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 40,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Meters Per Second Squared",
        "symbol": "m/s²"
    }
},
{
    "ocid": 900,
    "name": "AccelPedalPosition",
    "label": "Accelerator Pedal Position",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 102.5,
        "resolution": 0.1,
        "precision": 2,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 675,
    "name": "AccumulatedEngineRunTime",
    "label": "Accumulated Engine Run Time",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 4294967295,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 844,
    "name": "ActiveNoiseControlMode",
    "label": "Active Noise Control Mode",
    "category": "Personalization",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 678,
    "name": "AdaptiveCruiseControlActive",
    "label": "Adaptive Cruise Control Active",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 601,
    "name": "AirConditionerOn",
    "label": "Air Conditioner On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 794,
    "name": "AirRecirculationOn",
    "label": "Air Recirculation On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 602,
    "name": "AirbagDeployed",
    "label": "Airbag Deployed",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 747,
    "name": "AirbagStatusLeft",
    "label": "Airbag Status Left",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NOT_ACTIVE": 1,
        "ACTIVE": 2,
        "DEPLOYED": 3
    },
    "valueLabels": {
        "1": "Not Active",
        "2": "Active ",
        "3": "Deployed"
    }
},
{
    "ocid": 748,
    "name": "AirbagStatusRight",
    "label": "Airbag Status Right",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NOT_ACTIVE": 1,
        "ACTIVE": 2,
        "DEPLOYED": 3
    },
    "valueLabels": {
        "1": "Not Active",
        "2": "Active ",
        "3": "Deployed"
    }
},
{
    "ocid": 890,
    "name": "AlarmStatus",
    "label": "Alarm Status",
    "category": "Parking",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "DISARMED": 0,
        "PREARMED": 1,
        "ARMED": 2,
        "ALARMED": 3
    },
    "valueLabels": {
        "0": "Disarmed",
        "1": "Pre-armed",
        "2": "Armed",
        "3": "Alarmed"
    }
},
{
    "ocid": 742,
    "name": "AntilockBrakingSystemEnabled",
    "label": "Antilock Braking System Enabled",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 743,
    "name": "AntilockBrakingSystemEngaged",
    "label": "Antilock Braking System Engaged",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 326,
    "name": "AtmosphericPressure",
    "label": "Atmospheric Pressure",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 1,
        "precision": 0,
        "unit": "Kilopascal",
        "symbol": "kPa"
    }
},
{
    "ocid": 692,
    "name": "AutomaticHeadlightActive",
    "label": "Automatic Headlight Active",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 649,
    "name": "AutomaticTransmissionShiftPosition",
    "label": "Automatic Transmission Shift Position",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "BETWEEN_2_POSITIONS": 0,
        "PARK": 1,
        "REVERSE": 2,
        "NEUTRAL": 3,
        "DRIVE": 4,
        "POSITION_2": 5,
        "POSITION_1": 6,
        "INVALID": 16
    },
    "valueLabels": {
        "0": "Between 2 Positions",
        "1": "Park",
        "2": "Reverse",
        "3": "Neutral",
        "4": "Drive",
        "5": "Shift Position S(2)",
        "6": "Shift Position L(1)",
        "16": "Invalid"
    }
},
{
    "ocid": 812,
    "name": "BatteryChargeCordConnected",
    "label": "Battery Charge Cord Connected",
    "category": "Electric Vehicle",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 603,
    "name": "BatteryCurrentConsumption",
    "label": "Battery Current Consumption",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 1,
        "precision": 0,
        "unit": "Ampere",
        "symbol": "A"
    }
},
{
    "ocid": 714,
    "name": "BatteryVoltage",
    "label": "Battery Voltage",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 0,
        "unit": "Volt",
        "symbol": "V"
    }
},
{
    "ocid": 604,
    "name": "BlowerFanSpeed",
    "label": "Blower Fan Speed",
    "category": "Climate",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "SPEED_1": 1,
        "SPEED_2": 2,
        "SPEED_3": 3,
        "SPEED_4": 4,
        "SPEED_5": 5,
        "SPEED_6": 6,
        "SPEED_7": 7,
        "SPEED_8": 8,
        "SPEED_9": 9,
        "SPEED_10": 10
    },
    "valueLabels": {
        "0": "Inactive",
        "1": "Speed 1",
        "2": "Speed 2",
        "3": "Speed 3",
        "4": "Speed 4",
        "5": "Speed 5",
        "6": "Speed 6",
        "7": "Speed 7",
        "8": "Speed 8",
        "9": "Speed 9",
        "10": "Speed 10"
    }
},
{
    "ocid": 901,
    "name": "BrakeFluidHydraulicPressure",
    "label": "Brake Fluid Hydraulic Pressure",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -5,
        "max": 19.969216,
        "resolution": 0.032768,
        "precision": 6,
        "unit": "Megapascal",
        "symbol": "MPa"
    }
},
{
    "ocid": 872,
    "name": "BrakeFluidLevel",
    "label": "Brake Fluid Level",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 605,
    "name": "BrakeFluidLevelLow",
    "label": "Brake Fluid Level Low",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "NOT_LOW": 0,
        "LOW": 1,
        "ERROR": 2
    },
    "valueLabels": {
        "0": "Not Low",
        "1": "Low",
        "2": "Error"
    }
},
{
    "ocid": 686,
    "name": "BrakeLightOn",
    "label": "Brake Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 708,
    "name": "BrakePadWearFrontLeft",
    "label": "Brake Pad Wear Front Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 709,
    "name": "BrakePadWearFrontRight",
    "label": "Brake Pad Wear Front Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 710,
    "name": "BrakePadWearRearLeft",
    "label": "Brake Pad Wear Rear Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 711,
    "name": "BrakePadWearRearRight",
    "label": "Brake Pad Wear Rear Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 606,
    "name": "BrakePedalDepressed",
    "label": "Brake Pedal Depressed",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 871,
    "name": "BrakesWorn",
    "label": "Brakes Worn",
    "category": "Maintenance",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 691,
    "name": "CenterLightOn",
    "label": "Center Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 700,
    "name": "ChangeEngineOil",
    "label": "Change Engine Oil",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 810,
    "name": "ChargingStatusOn",
    "label": "Charging Status On",
    "category": "Electric Vehicle",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 765,
    "name": "ChildSafetyLockOn",
    "label": "Child Safety Lock On",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 695,
    "name": "ChimeOn",
    "label": "Chime On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 707,
    "name": "ClutchWearLevel",
    "label": "Clutch Wear Level",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 808,
    "name": "ConvertibleRoofOn",
    "label": "Convertible Roof On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 677,
    "name": "CruiseControlActive",
    "label": "Cruise Control Active",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 636,
    "name": "CruiseControlSettingSpeed",
    "label": "Cruise Control Speed Setting",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 1,
        "precision": 0,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 843,
    "name": "DashboardIllumination",
    "label": "Dashboard Illumination",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 796,
    "name": "DefrostRearWindshieldOn",
    "label": "Defrost Rear Windshield On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 797,
    "name": "DefrostSideMirrorsOn",
    "label": "Defrost Side Mirrors On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 9,
    "name": "DistanceTravelledTotal",
    "label": "Distance Travelled - Total",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 15000,
        "resolution": 0.0002,
        "precision": 4,
        "unit": "Kilometer",
        "symbol": "km"
    }
},
{
    "ocid": 355,
    "name": "DistanceTravelledSinceCodesCleared",
    "label": "Distance Travelled Since Codes Cleared",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65535000,
        "resolution": 1,
        "precision": 0,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 352,
    "name": "DistanceTravelledWithMilOn",
    "label": "Distance Travelled With Malfunction Indicator Light On",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65535000,
        "resolution": 1,
        "precision": 0,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 758,
    "name": "DoorLockedDriver",
    "label": "Door Locked Driver",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 759,
    "name": "DoorLockedPassenger",
    "label": "Door Locked Passenger",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 760,
    "name": "DoorLockedRearLeft",
    "label": "Door Locked Rear Left",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 761,
    "name": "DoorLockedRearRight",
    "label": "Door Locked Rear Right",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 750,
    "name": "DoorOpenStatusDriver",
    "label": "Door Open Status Driver",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 755,
    "name": "DoorOpenStatusFuelFillerCap",
    "label": "Door Open Status Fuel Filler Cap",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 756,
    "name": "DoorOpenStatusHood",
    "label": "Door Open Status Hood",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 751,
    "name": "DoorOpenStatusPassenger",
    "label": "Door Open Status Passenger",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 752,
    "name": "DoorOpenStatusRearLeft",
    "label": "Door Open Status Rear Left",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 753,
    "name": "DoorOpenStatusRearRight",
    "label": "Door Open Status Rear Right",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 754,
    "name": "DoorOpenStatusTrunk",
    "label": "Door Open Status Trunk",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 689,
    "name": "DriverLightOn",
    "label": "Driver Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 739,
    "name": "DrivingMode",
    "label": "Driving Mode",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "COMFORT": 1,
        "AUTO": 2,
        "SPORT": 3,
        "ECO": 4,
        "MANUAL": 5
    },
    "valueLabels": {
        "1": "Comfort",
        "2": "Auto",
        "3": "Sport",
        "4": "Eco",
        "5": "Manual"
    }
},
{
    "ocid": 693,
    "name": "DynamicHighBeamActive",
    "label": "Dynamic High Beam Active",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 745,
    "name": "ElectronicStabilityControlEnabled",
    "label": "Electronic Stability Control Enabled",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 875,
    "name": "ElectronicStabilityControlEngaged",
    "label": "Electronic Stability Control Engaged",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 702,
    "name": "EngineCoolantLevel",
    "label": "Engine Coolant Level",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 703,
    "name": "EngineCoolantLevelLow",
    "label": "Engine Coolant Level Low",
    "category": "Maintenance",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 902,
    "name": "EngineCoolantTemp",
    "label": "Engine Coolant Temp",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 214,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 699,
    "name": "EngineOilLifeRemaining",
    "label": "Engine Oil Life Remaining",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 701,
    "name": "EngineOilPressure",
    "label": "Engine Oil Pressure",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 765,
        "resolution": 3,
        "precision": 0,
        "unit": "Kilopascal",
        "symbol": "kPa"
    }
},
{
    "ocid": 345,
    "name": "EngineOilTemp",
    "label": "Engine Oil Temperature",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 903,
    "name": "EngineSpeed",
    "label": "Engine Speed",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 16380,
        "resolution": 2,
        "precision": 0,
        "unit": "Rotations Per Minute",
        "symbol": "rpm"
    }
},
{
    "ocid": 697,
    "name": "EstimatedRangeRemaining",
    "label": "Estimated Range Remaining",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 655.35,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometer",
        "symbol": "km"
    }
},
{
    "ocid": 789,
    "name": "ExteriorBrightness",
    "label": "Exterior Brightness",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 167772.15,
        "resolution": 0.01,
        "precision": 0,
        "unit": "Lux",
        "symbol": "lx"
    }
},
{
    "ocid": 788,
    "name": "ExteriorTemperature",
    "label": "Exterior Temperature",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 779,
    "name": "FrontCollisionDetectionActive",
    "label": "Front Collision Detection Active",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 780,
    "name": "FrontCollisionDetectionDistance",
    "label": "Front Collision Detection Distance",
    "category": "Driver Safety",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 25.5,
        "resolution": 0.1,
        "precision": 1,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 781,
    "name": "FrontCollisionDetectionTime",
    "label": "Front Collision Detection Time",
    "category": "Driver Safety",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 3,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 617,
    "name": "FrontDefroster",
    "label": "Front Defroster On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 618,
    "name": "FrontFogLightOn",
    "label": "Front Fog Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 662,
    "name": "FrontWheelRadius",
    "label": "Front Wheel Radius",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 3,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 619,
    "name": "FrontWiperStatus",
    "label": "Front Wiper Status",
    "category": "Climate",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "SLOW_SPEED": 1,
        "FAST_SPEED": 2
    },
    "valueLabels": {
        "0": "Off",
        "1": "Slow Speed",
        "2": "Fast Speed"
    }
},
{
    "ocid": 763,
    "name": "FuelCapLocked",
    "label": "Fuel Cap Locked",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 868,
    "name": "FuelConfiguration",
    "label": "Fuel Configuration",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "NOT_AVAILABLE": 0,
        "GASOLINE": 1,
        "METHANOL": 2,
        "ETHANOL": 3,
        "DIESEL": 4,
        "LIQUEFIED_PETROLEUM_GAS": 5,
        "COMPRESSED_NATURAL_GAS": 6,
        "PROPANE": 7,
        "BATTERY_ELECTRIC": 8
    },
    "valueLabels": {
        "0": "Not Available",
        "1": "Gasoline/Petrol",
        "2": "Methanol",
        "3": "Ethanol",
        "4": "Diesel",
        "5": "Liquefied Petroleum Gas (LPG)",
        "6": "Compressed Natural Gas (CNG)",
        "7": "Propane",
        "8": "Battery Electric"
    }
},
{
    "ocid": 375,
    "name": "TotalFuelConsumptionDrive",
    "label": "Fuel Consumption - Drive - Total",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 1000,
        "resolution": 0.005,
        "precision": 3,
        "unit": "Liter",
        "symbol": "l"
    }
},
{
    "ocid": 854,
    "name": "MeanFuelEfficiencyDrive",
    "label": "Fuel Efficiency - Drive - Mean",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 500,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Liters Per One Hundred Kilometers",
        "symbol": "l/100km"
    }
},
{
    "ocid": 850,
    "name": "FuelEfficiencyInstant",
    "label": "Fuel Efficiency Instant",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 500,
        "resolution": 0.0002,
        "precision": 4,
        "unit": "Liters Per One Hundred Kilometers",
        "symbol": "l/100km"
    }
},
{
    "ocid": 904,
    "name": "FuelLevel",
    "label": "Fuel Level",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 0.5,
        "precision": 1,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 620,
    "name": "GearPosition",
    "label": "Gear Position",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "PARK_OR_NEUTRAL": 0,
        "GEAR_1ST": 1,
        "GEAR_2ND": 2,
        "GEAR_3RD": 3,
        "GEAR_4TH": 4,
        "GEAR_5TH": 5,
        "GEAR_6TH": 6,
        "GEAR_7TH": 7,
        "GEAR_8TH": 8,
        "REVERSE": 15,
        "UNKNOWN": 16
    },
    "valueLabels": {
        "0": "Park or Neutral",
        "1": "1st Gear",
        "2": "2nd Gear",
        "3": "3rd Gear",
        "4": "4th Gear",
        "5": "5th Gear",
        "6": "6th Gear",
        "7": "7th Gear",
        "8": "8th Gear",
        "15": "Reverse",
        "16": "Unknown"
    }
},
{
    "ocid": 741,
    "name": "GeneratedVehicleSoundMode",
    "label": "Generated Vehicle Sound Mode",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NORMAL": 1,
        "QUIET": 2,
        "SPORT": 3
    },
    "valueLabels": {
        "1": "Normal",
        "2": "Quiet",
        "3": "Sport"
    }
},
{
    "ocid": 621,
    "name": "GpsAltitude",
    "label": "GPS - Altitude",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -1024,
        "max": 7168,
        "resolution": 1,
        "precision": 0,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 613,
    "name": "GpsHeading",
    "label": "GPS - Heading",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 360,
        "resolution": 0.000001,
        "precision": 6,
        "unit": "Angular Degrees",
        "symbol": "°"
    }
},
{
    "ocid": 3,
    "name": "GpsLatitude",
    "label": "GPS - Latitude",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -90,
        "max": 90,
        "resolution": 0.000001,
        "precision": 6,
        "unit": "Angular Degrees",
        "symbol": "°"
    }
},
{
    "ocid": 4,
    "name": "GpsLongitude",
    "label": "GPS - Longitude",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -180,
        "max": 180,
        "resolution": 0.000001,
        "precision": 6,
        "unit": "Angular Degrees",
        "symbol": "°"
    }
},
{
    "ocid": 914,
    "name": "GpsAccuracy",
    "label": "GPS Accuracy",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 1,
        "precision": 0,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 915,
    "name": "GpsAltitudeAccuracy",
    "label": "GPS Altitude Accuracy",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 1,
        "precision": 0,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 916,
    "name": "GpsFixStatus",
    "label": "GPS Fix Status",
    "category": "Location",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "NONE": 0,
        "FIX": 1,
        "ESTIMATED": 2
    },
    "valueLabels": {
        "0": "None",
        "1": "Fix",
        "2": "Estimated"
    }
},
{
    "ocid": 917,
    "name": "GpsTimestamp",
    "label": "GPS Timestamp",
    "category": "Location",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 240000,
        "resolution": 1,
        "precision": 0,
        "unit": "Count",
        "symbol": ""
    }
},
{
    "ocid": 687,
    "name": "HazardLightOn",
    "label": "Hazard Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 681,
    "name": "HeadlightOn",
    "label": "Headlight On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 631,
    "name": "LightStatus",
    "label": "Headlight Status",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "DAYTIME_RUNNING_LIGHTS_ON": 1,
        "TNS_ON": 2,
        "HEADLIGHT_LOW": 3,
        "HEADLIGHT_HIGH": 4
    },
    "valueLabels": {
        "0": "Light Off",
        "1": "Daytime Running Lights On",
        "2": "TNS On",
        "3": "Headlight Low",
        "4": "Headlight High"
    }
},
{
    "ocid": 795,
    "name": "HeaterOn",
    "label": "Heater On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 683,
    "name": "HighbeamOn",
    "label": "Highbeam On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 764,
    "name": "HoodLocked",
    "label": "Hood Locked",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 694,
    "name": "HornOn",
    "label": "Horn On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 792,
    "name": "HVACFanDirection",
    "label": "HVAC Fan Direction",
    "category": "Climate",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "FRONT_PANEL": 1,
        "FLOOR_DUCT": 2,
        "FRONT_AND_FLOOR": 3,
        "DEFROSTER_AND_FLOOR": 4
    },
    "valueLabels": {
        "1": "Front Panel",
        "2": "Floor Duct",
        "3": "Front + Floor",
        "4": "Defroster + Floor"
    }
},
{
    "ocid": 793,
    "name": "HVACFanTargetTemp",
    "label": "HVAC Fan Target Temperature",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 30,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 809,
    "name": "HybridPowerStatus",
    "label": "Hybrid Power Status",
    "category": "Electric Vehicle",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "IDLE": 1,
        "BATTERY_MODE": 2,
        "ENGINE_MODE": 3,
        "HYBRID_MODE": 4
    },
    "valueLabels": {
        "1": "Idle",
        "2": "Battery Mode",
        "3": "Engine Mode",
        "4": "Hybrid Mode"
    }
},
{
    "ocid": 667,
    "name": "HybridType",
    "label": "Hybrid Type",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NONE": 1,
        "MILD": 2,
        "FULL": 3
    },
    "valueLabels": {
        "1": "None",
        "2": "Mild",
        "3": "Full"
    }
},
{
    "ocid": 628,
    "name": "IgnitionOffTime",
    "label": "Ignition Off Time (IgOff)",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 429496730,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 629,
    "name": "IgnitionOnTime",
    "label": "Ignition On Time (IgOn)",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 429496730,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 738,
    "name": "InsideMirrorAutomaticTintingStatus",
    "label": "Inside Mirror Automatic Tinting Status",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "INACTIVE": 1,
        "ACTIVE": 2,
        "ERROR": 3
    },
    "valueLabels": {
        "1": "Inactive",
        "2": "Active",
        "3": "Error"
    }
},
{
    "ocid": 787,
    "name": "InteriorTemperature",
    "label": "Interior Temperature",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 783,
    "name": "LaneDeparted",
    "label": "Lane Departed",
    "category": "Vision System",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 782,
    "name": "LaneDepartureDetectionActive",
    "label": "Lane Departure Detection Active",
    "category": "Vision System",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 732,
    "name": "Language",
    "label": "Language",
    "category": "Personalization",
    "type": "String"
},
{
    "ocid": 685,
    "name": "LeftTurnSignalOn",
    "label": "Left Turn Signal On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 811,
    "name": "LevelOfCharge",
    "label": "Level of Charge",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 127.5,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 713,
    "name": "MalfunctionIndicatorLampOn",
    "label": "Malfunction Indicator Lamp On",
    "category": "Maintenance",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 727,
    "name": "MaxWheelSpeedExceeded",
    "label": "Max Wheel Speed Exceeded",
    "category": "Maintenance",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 733,
    "name": "MeasurementSystem",
    "label": "Measurement System",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "METRIC": 1,
        "ENGLISH": 2
    },
    "valueLabels": {
        "1": "Metric",
        "2": "English"
    }
},
{
    "ocid": 734,
    "name": "MeasurementSystemFuel",
    "label": "Measurement System Fuel",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "LITER": 1,
        "GALLON": 2
    },
    "valueLabels": {
        "1": "Liter",
        "2": "Gallon"
    }
},
{
    "ocid": 737,
    "name": "MeasurementSystemStringConsumption",
    "label": "Measurement System String Consumption",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "L_PER_100KM": 1,
        "KM_PER_L": 2,
        "MPG": 3
    },
    "valueLabels": {
        "1": "l/100km",
        "2": "km/l",
        "3": "mpg"
    }
},
{
    "ocid": 735,
    "name": "MeasurementSystemStringDistance",
    "label": "Measurement System String Distance",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "KILOMETER": 1,
        "MILE": 2
    },
    "valueLabels": {
        "1": "Kilometer",
        "2": "Mile"
    }
},
{
    "ocid": 736,
    "name": "MeasurementSystemStringSpeed",
    "label": "Measurement System String Speed",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "KM_PER_H": 1,
        "MPH": 2
    },
    "valueLabels": {
        "1": "km/h",
        "2": "mph"
    }
},
{
    "ocid": 824,
    "name": "MirrorPanCenter",
    "label": "Mirror Pan Center",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 823,
    "name": "MirrorPanLeft",
    "label": "Mirror Pan Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 825,
    "name": "MirrorPanRight",
    "label": "Mirror Pan Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 827,
    "name": "MirrorTiltCenter",
    "label": "Mirror Tilt Center",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 826,
    "name": "MirrorTiltLeft",
    "label": "Mirror Tilt Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 828,
    "name": "MirrorTiltRight",
    "label": "Mirror Tilt Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 656,
    "name": "NumberofDoors1stRow",
    "label": "Number Of Doors 1st Row",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "DOOR_COUNT_0": 0,
        "DOOR_COUNT_1": 1,
        "DOOR_COUNT_2": 2,
        "DOOR_COUNT_3": 3
    },
    "valueLabels": {
        "0": "0 Doors",
        "1": "1 Door",
        "2": "2 Doors",
        "3": "3 Doors"
    }
},
{
    "ocid": 657,
    "name": "NumberofDoors2ndRow",
    "label": "Number Of Doors 2nd Row",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "DOOR_COUNT_0": 0,
        "DOOR_COUNT_1": 1,
        "DOOR_COUNT_2": 2,
        "DOOR_COUNT_3": 3
    },
    "valueLabels": {
        "0": "0 Doors",
        "1": "1 Door",
        "2": "2 Doors",
        "3": "3 Doors"
    }
},
{
    "ocid": 658,
    "name": "NumberofDoorsin3rdRow",
    "label": "Number Of Doors in 3rd Row",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "DOOR_COUNT_0": 0,
        "DOOR_COUNT_1": 1,
        "DOOR_COUNT_2": 2,
        "DOOR_COUNT_3": 3
    },
    "valueLabels": {
        "0": "0 Doors",
        "1": "1 Door",
        "2": "2 Doors",
        "3": "3 Doors"
    }
},
{
    "ocid": 848,
    "name": "NumberOfDoorsTotal",
    "label": "Number of Doors Total",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 1,
        "precision": 0,
        "unit": "Count",
        "symbol": ""
    }
},
{
    "ocid": 778,
    "name": "ObstacleDistanceSensorActive",
    "label": "Obstacle Distance Sensor Active",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 766,
    "name": "OccupantsStatusDriver",
    "label": "Occupants Status Driver",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "ADULT": 1,
        "CHILD": 2,
        "VACANT": 3
    },
    "valueLabels": {
        "1": "Adult",
        "2": "Child",
        "3": "Vacant"
    }
},
{
    "ocid": 767,
    "name": "OccupantsStatusPassenger",
    "label": "Occupants Status Passenger",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "ADULT": 1,
        "CHILD": 2,
        "VACANT": 3
    },
    "valueLabels": {
        "1": "Adult",
        "2": "Child",
        "3": "Vacant"
    }
},
{
    "ocid": 768,
    "name": "OccupantsStatusRearLeft",
    "label": "Occupants Status Rear Left",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "ADULT": 1,
        "CHILD": 2,
        "VACANT": 3
    },
    "valueLabels": {
        "1": "Adult",
        "2": "Child",
        "3": "Vacant"
    }
},
{
    "ocid": 769,
    "name": "OccupantsStatusRearRight",
    "label": "Occupants Status Rear Right",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "ADULT": 1,
        "CHILD": 2,
        "VACANT": 3
    },
    "valueLabels": {
        "1": "Adult",
        "2": "Child",
        "3": "Vacant"
    }
},
{
    "ocid": 633,
    "name": "Odometer",
    "label": "Odometer",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 16777215,
        "resolution": 1,
        "precision": 1,
        "unit": "Kilometer",
        "symbol": "km"
    }
},
{
    "ocid": 704,
    "name": "OdometerSinceRestart",
    "label": "Odometer Since Restart",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 6553.5,
        "resolution": 0.1,
        "precision": 1,
        "unit": "Kilometer",
        "symbol": "km"
    }
},
{
    "ocid": 705,
    "name": "OilLevelLow",
    "label": "Oil Level Low",
    "category": "Maintenance",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 634,
    "name": "ParkingBrakeOn",
    "label": "Parking Brake On",
    "category": "Parking",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "ON": 1,
        "ERROR": 2
    },
    "valueLabels": {
        "0": "Off",
        "1": "On",
        "2": "Error"
    }
},
{
    "ocid": 688,
    "name": "ParkingLightOn",
    "label": "Parking Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 785,
    "name": "ParkingLightsOn",
    "label": "Parking Lights On",
    "category": "Parking",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 690,
    "name": "PassengerLightOn",
    "label": "Passenger Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 668,
    "name": "PowertrainTorque",
    "label": "Powertrain Torque",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -500,
        "max": 1500,
        "resolution": 1,
        "precision": 0,
        "unit": "Newton Meter",
        "symbol": "Nm"
    }
},
{
    "ocid": 790,
    "name": "RainSensor",
    "label": "Rain Sensor",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 635,
    "name": "RearFogLightOn",
    "label": "Rear Fog Light On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 663,
    "name": "RearWheelRadius",
    "label": "Rear Wheel Radius",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 3,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 805,
    "name": "RearWindow",
    "label": "Rear Window",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 791,
    "name": "RearWiperStatus",
    "label": "Rear Wiper Status",
    "category": "Climate",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OFF": 1,
        "SLOWEST": 2,
        "FASTEST": 3,
        "AUTO": 4
    },
    "valueLabels": {
        "1": "Off",
        "2": "Slowest",
        "3": "Fastest",
        "4": "Auto"
    }
},
{
    "ocid": 819,
    "name": "RefuelPosition",
    "label": "Refuel Position",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "REAR_LEFT": 1,
        "REAR_RIGHT": 2,
        "REAR_CENTER": 3,
        "FRONT_LEFT": 4,
        "FRONT_RIGHT": 5,
        "FRONT_CENTER": 6
    },
    "valueLabels": {
        "1": "Rear Left",
        "2": "Rear Right",
        "3": "Rear Center",
        "4": "Front Left",
        "5": "Front Right",
        "6": "Front Center"
    }
},
{
    "ocid": 684,
    "name": "RightTurnSignalOn",
    "label": "Right Turn Signal On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 837,
    "name": "SeatBackCushionFrontLeft",
    "label": "Seat Back Cushion Front Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 838,
    "name": "SeatBackCushionFrontRight",
    "label": "Seat Back Cushion Front Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 832,
    "name": "SeatBackReclineFrontRight",
    "label": "Seat Back Recline Front Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -100,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 770,
    "name": "SeatBeltDriverFastened",
    "label": "Seat Belt Driver Fastened",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 771,
    "name": "SeatBeltPassengerFastened",
    "label": "Seat Belt Passenger Fastened",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 772,
    "name": "SeatBeltRearLeftFastened",
    "label": "Seat Belt Rear Left Fastened",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 773,
    "name": "SeatBeltRearRightFastened",
    "label": "Seat Belt Rear Right Fastened",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 881,
    "name": "SeatCoolerLevelDriver",
    "label": "Seat Cooler Level Driver",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 884,
    "name": "SeatCoolerLevelLeftRear",
    "label": "Seat Cooler Level Left Rear",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 882,
    "name": "SeatCoolerLevelPassenger",
    "label": "Seat Cooler Level Passenger",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 883,
    "name": "SeatCoolerLevelRightRear",
    "label": "Seat Cooler Level Right Rear",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 800,
    "name": "SeatCoolerOn",
    "label": "Seat Cooler On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 835,
    "name": "SeatCushionHeightFrontLeft",
    "label": "Seat Cushion Height Front Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 836,
    "name": "SeatCushionHeightFrontRight",
    "label": "Seat Cushion Height Front Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 841,
    "name": "SeatHeadrestFrontLeft",
    "label": "Seat Headrest Front Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 842,
    "name": "SeatHeadrestFrontRight",
    "label": "Seat Headrest Front Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 885,
    "name": "SeatHeaterLevelDriver",
    "label": "Seat Heater Level Driver",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 888,
    "name": "SeatHeaterLevelLeftRear",
    "label": "Seat Heater Level Left Rear",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 886,
    "name": "SeatHeaterLevelPassenger",
    "label": "Seat Heater Level Passenger",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 887,
    "name": "SeatHeaterLevelRightRear",
    "label": "Seat Heater Level Right Rear",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 799,
    "name": "SeatHeaterOn",
    "label": "Seat Heater On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 740,
    "name": "SeatPositionPresetRecall",
    "label": "Seat Position Preset Recall",
    "category": "Personalization",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "POSITION_0": 1,
        "POSITION_1": 2,
        "POSITION_2": 3,
        "POSITION_3": 4,
        "POSITION_4": 5,
        "POSITION_5": 6
    },
    "valueLabels": {
        "1": "Position 0",
        "2": "Position 1",
        "3": "Position 2",
        "4": "Position 3",
        "5": "Position 4",
        "6": "Position 5"
    }
},
{
    "ocid": 839,
    "name": "SeatSideCushionFrontLeft",
    "label": "Seat Side Cushion Front Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 840,
    "name": "SeatSideCushionFrontRight",
    "label": "Seat Side Cushion Front Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 833,
    "name": "SeatSlideFrontLeft",
    "label": "Seat Slide Front Left",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 834,
    "name": "SeatSlideFrontRight",
    "label": "Seat Slide Front Right",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 784,
    "name": "SecurityAlert",
    "label": "Security Alert",
    "category": "Parking",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "IDLE": 1,
        "ACTIVATED": 2,
        "ALARM_DETECTED": 3
    },
    "valueLabels": {
        "1": "Idle",
        "2": "Activated",
        "3": "Alarm Detected"
    }
},
{
    "ocid": 876,
    "name": "SideWindowDriveLocked",
    "label": "Side Window Driver Locked",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 801,
    "name": "SideWindowDriverOpenness",
    "label": "Side Window Driver Openness",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 877,
    "name": "SideWindowPassengerLocked",
    "label": "Side Window Passenger Locked",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 802,
    "name": "SideWindowPassengerOpenness",
    "label": "Side Window Passenger Openness",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 878,
    "name": "SideWindowRearLeftLocked",
    "label": "Side Window Rear Left Locked",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 803,
    "name": "SideWindowRearLeftOpenness",
    "label": "Side Window Rear Left Openness",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 879,
    "name": "SideWindowRearRightLocked",
    "label": "Side Window Rear Right Locked",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 804,
    "name": "SideWindowRearRightOpenness",
    "label": "Side Window Rear Right Openness",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 637,
    "name": "SteeringWheelAngle",
    "label": "Steering Angle",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -1600,
        "max": 1600,
        "resolution": 0.1,
        "precision": 1,
        "unit": "Angular Degrees",
        "symbol": "°"
    }
},
{
    "ocid": 638,
    "name": "SteeringWheelRotationDirection",
    "label": "Steering Rotation Direction",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "STRAIGHT": 0,
        "LEFT": 1,
        "RIGHT": 2
    },
    "valueLabels": {
        "0": "Straight",
        "1": "Turn Left",
        "2": "Turn Right"
    }
},
{
    "ocid": 889,
    "name": "SteeringWheelHeaterLevel",
    "label": "Steering Wheel Heater Level",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 10,
        "resolution": 1,
        "precision": 0,
        "unit": "Level",
        "symbol": ""
    }
},
{
    "ocid": 798,
    "name": "SteeringWheelHeaterOn",
    "label": "Steering Wheel Heater On",
    "category": "Climate",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 820,
    "name": "SteeringWheelPosition",
    "label": "Steering Wheel Position",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "LEFT": 1,
        "RIGHT": 2
    },
    "valueLabels": {
        "1": "Left",
        "2": "Right"
    }
},
{
    "ocid": 829,
    "name": "SteeringWheelPositionTelescoping",
    "label": "Steering Wheel Position Telescoping",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 830,
    "name": "SteeringWheelPositionTilt",
    "label": "Steering Wheel Position Tilt",
    "category": "Personalization",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 806,
    "name": "SunroofOpenness",
    "label": "Sunroof Openness",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 807,
    "name": "SunroofTilt",
    "label": "Sunroof Tilt",
    "category": "Climate",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 682,
    "name": "TaillightOn",
    "label": "Taillight On",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 813,
    "name": "TargetChargeLevel",
    "label": "Target Charge Level",
    "category": "Electric Vehicle",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 679,
    "name": "TargetVehicleDetected",
    "label": "Target Vehicle Detected",
    "category": "Running Status",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 529,
    "name": "ThrottlePosition",
    "label": "Throttle Position",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 0.392157,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 353,
    "name": "TimeRunWithMilOn",
    "label": "Time Run With Malfunction Indicator Light On",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 3932100,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 356,
    "name": "TimeSinceCodesCleared",
    "label": "Time Since Diagnostic Trouble Codes Cleared",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 3932100,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 616,
    "name": "DrivingTime",
    "label": "Time Spent Driving",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 429496730,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 814,
    "name": "TimetoFullCharge",
    "label": "Time to Full Charge",
    "category": "Electric Vehicle",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65535,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 815,
    "name": "TimetoTargetCharge",
    "label": "Time to Target Charge",
    "category": "Electric Vehicle",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65535,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 715,
    "name": "TirePressureFrontLeft",
    "label": "Tire Pressure Front Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 765,
        "resolution": 3,
        "precision": 0,
        "unit": "Kilopascal",
        "symbol": "kPa"
    }
},
{
    "ocid": 716,
    "name": "TirePressureFrontRight",
    "label": "Tire Pressure Front Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 765,
        "resolution": 3,
        "precision": 0,
        "unit": "Kilopascal",
        "symbol": "kPa"
    }
},
{
    "ocid": 640,
    "name": "TirePressureLow",
    "label": "Tire Pressure Low",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "NOT_LOW": 0,
        "LOW": 1,
        "ERROR": 2
    },
    "valueLabels": {
        "0": "Not Low",
        "1": "Low",
        "2": "Error"
    }
},
{
    "ocid": 717,
    "name": "TirePressureRearLeft",
    "label": "Tire Pressure Rear Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 765,
        "resolution": 3,
        "precision": 0,
        "unit": "Kilopascal",
        "symbol": "kPa"
    }
},
{
    "ocid": 718,
    "name": "TirePressureRearRight",
    "label": "Tire Pressure Rear Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 765,
        "resolution": 3,
        "precision": 0,
        "unit": "Kilopascal",
        "symbol": "kPa"
    }
},
{
    "ocid": 719,
    "name": "TirePressureStatusFrontLeft",
    "label": "Tire Pressure Status Front Left",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NORMAL": 1,
        "LOW": 2,
        "HIGH": 3
    },
    "valueLabels": {
        "1": "Normal",
        "2": "Low",
        "3": "High"
    }
},
{
    "ocid": 720,
    "name": "TirePressureStatusFrontRight",
    "label": "Tire Pressure Status Front Right",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NORMAL": 1,
        "LOW": 2,
        "HIGH": 3
    },
    "valueLabels": {
        "1": "Normal",
        "2": "Low",
        "3": "High"
    }
},
{
    "ocid": 721,
    "name": "TirePressureStatusRearLeft",
    "label": "Tire Pressure Status Rear Left",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NORMAL": 1,
        "LOW": 2,
        "HIGH": 3
    },
    "valueLabels": {
        "1": "Normal",
        "2": "Low",
        "3": "High"
    }
},
{
    "ocid": 722,
    "name": "TirePressureStatusRearRight",
    "label": "Tire Pressure Status Rear Right",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "NORMAL": 1,
        "LOW": 2,
        "HIGH": 3
    },
    "valueLabels": {
        "1": "Normal",
        "2": "Low",
        "3": "High"
    }
},
{
    "ocid": 728,
    "name": "TireTemperatureFrontLeft",
    "label": "Tire Temperature Front Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 729,
    "name": "TireTemperatureFrontRight",
    "label": "Tire Temperature Front Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 730,
    "name": "TireTemperatureRearLeft",
    "label": "Tire Temperature Rear Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 731,
    "name": "TireTemperatureRearRight",
    "label": "Tire Temperature Rear Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 723,
    "name": "TireWearFrontLeft",
    "label": "Tire Wear Front Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 724,
    "name": "TireWearFrontRight",
    "label": "Tire Wear Front Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 725,
    "name": "TireWearRearLeft",
    "label": "Tire Wear Rear Left",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 726,
    "name": "TireWearRearRight",
    "label": "Tire Wear Rear Right",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 744,
    "name": "TractionControlSystemEnabled",
    "label": "Traction Control System Enabled",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 874,
    "name": "TractionControlSystemEngaged",
    "label": "Traction Control System Engaged",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 660,
    "name": "TransmissionGearType",
    "label": "Transmission Gear Type",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "AUTO": 0,
        "MANUAL": 1
    },
    "valueLabels": {
        "0": "Auto",
        "1": "Manual"
    }
},
{
    "ocid": 676,
    "name": "TransmissionMode",
    "label": "Transmission Mode",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "PARK": 1,
        "REVERSE": 2,
        "NEUTRAL": 3,
        "LOW": 4,
        "DRIVE": 5,
        "OVERDRIVE": 6
    },
    "valueLabels": {
        "1": "Park",
        "2": "Reverse",
        "3": "Neutral",
        "4": "Low",
        "5": "Drive",
        "6": "Overdrive"
    }
},
{
    "ocid": 706,
    "name": "TransmissionOilTemperature",
    "label": "Transmission Oil Temperature",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -40,
        "max": 215,
        "resolution": 1,
        "precision": 0,
        "unit": "Degrees Celsius",
        "symbol": "℃"
    }
},
{
    "ocid": 822,
    "name": "TransmissionOilWear",
    "label": "Transmission Oil Wear",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 671,
    "name": "TripMeter1AverageSpeed",
    "label": "Trip Meter 1 Average Speed",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 669,
    "name": "TripMeter1Distance",
    "label": "Trip Meter 1 Distance",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 429496729.5,
        "resolution": 0.1,
        "precision": 1,
        "unit": "Kilometer",
        "symbol": "km"
    }
},
{
    "ocid": 673,
    "name": "TripMeter1FuelConsumption",
    "label": "Trip Meter 1 Fuel Consumption",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 655.35,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometers Per Liter",
        "symbol": "km/l"
    }
},
{
    "ocid": 672,
    "name": "TripMeter2AverageSpeed",
    "label": "Trip Meter 2 Average Speed",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 670,
    "name": "TripMeter2Distance",
    "label": "Trip Meter 2 Distance",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 429496729.5,
        "resolution": 0.1,
        "precision": 1,
        "unit": "Kilometer",
        "symbol": "km"
    }
},
{
    "ocid": 674,
    "name": "TripMeter2FuelConsumption",
    "label": "Trip Meter 2 Fuel Consumption",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 655.35,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometers Per Liter",
        "symbol": "km/l"
    }
},
{
    "ocid": 757,
    "name": "TrunkDeck",
    "label": "Trunk Deck",
    "category": "Driver Safety",
    "type": "Bytes",
    "defaultValue": 1,
    "valueNames": {
        "OPEN": 1,
        "CLOSED": 2,
        "AJAR": 3
    },
    "valueLabels": {
        "1": "Open",
        "2": "Closed ",
        "3": "Ajar"
    }
},
{
    "ocid": 762,
    "name": "TrunkLocked",
    "label": "Trunk Locked",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 641,
    "name": "TurnIndicatorStatus",
    "label": "Turn Indicator Status",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "RIGHT": 1,
        "LEFT": 2,
        "HAZARD_ON": 3
    },
    "valueLabels": {
        "0": "Off",
        "1": "Right",
        "2": "Left",
        "3": "Hazard On"
    }
},
{
    "ocid": 866,
    "name": "VehicleBrandOrMake",
    "label": "Vehicle Brand or Make",
    "category": "Configuration and Identification",
    "type": "String"
},
{
    "ocid": 654,
    "name": "VehicleHeight",
    "label": "Vehicle Height",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 2,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 651,
    "name": "VehicleIdentificationNumber",
    "label": "Vehicle Identification Number",
    "category": "Configuration and Identification",
    "type": "String",
    "defaultValue": "0000000000000000"
},
{
    "ocid": 642,
    "name": "VehicleKeyPosition",
    "label": "Vehicle Key Position (Power Status)",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "ACCESSORY": 1,
        "ON": 2,
        "CRANKING": 3,
        "ERROR": 4
    },
    "valueLabels": {
        "0": "Off",
        "1": "Accessory (ACC)",
        "2": "On",
        "3": "Cranking",
        "4": "Error"
    }
},
{
    "ocid": 655,
    "name": "VehicleLength",
    "label": "Vehicle Length",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 2,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 867,
    "name": "VehicleModel",
    "label": "Vehicle Model",
    "category": "Configuration and Identification",
    "type": "String"
},
{
    "ocid": 666,
    "name": "VehicleModelYear",
    "label": "Vehicle Model Year",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 2000,
        "max": 2100,
        "resolution": 1,
        "precision": 0,
        "unit": "Year",
        "symbol": "Y"
    }
},
{
    "ocid": 849,
    "name": "VehiclePowerMode",
    "label": "Vehicle Power Mode",
    "category": "Running Status",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "OFF": 0,
        "ACCESSORY_1": 1,
        "ACCESSORY_2": 2,
        "RUNNING": 3
    },
    "valueLabels": {
        "0": "Off",
        "1": "Accessory 1",
        "2": "Accessory 2",
        "3": "Running"
    }
},
{
    "ocid": 908,
    "name": "VehicleSpeed",
    "label": "Vehicle Speed",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 655.35,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 698,
    "name": "VehicleTimeSinceRestart",
    "label": "Vehicle Time Since Restart",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65535,
        "resolution": 1,
        "precision": 0,
        "unit": "Second",
        "symbol": "s"
    }
},
{
    "ocid": 746,
    "name": "VehicleTopSpeedLimit",
    "label": "Vehicle Top Speed Limit",
    "category": "Driver Safety",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 655.35,
        "resolution": 0.01,
        "precision": 2,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 652,
    "name": "VehicleType",
    "label": "Vehicle Type",
    "category": "Configuration and Identification",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "PASSENGER_CAR_MINI": 0,
        "PASSENGER_CAR_LIGHT": 1,
        "PASSENGER_CAR_COMPACT": 2,
        "PASSENGER_CAR_MEDIUM": 3,
        "PASSENGER_CAR_HEAVY": 4,
        "SPORT_UTILITY_VEHICLE": 5,
        "PICKUP_TRUCK": 6,
        "VAN": 7
    },
    "valueLabels": {
        "0": "Passenger cars: mini",
        "1": "Passenger cars: light",
        "2": "Passenger cars: compact",
        "3": "Passenger cars: medium",
        "4": "Passenger cars: heavy",
        "5": "Sport Utility Vehicle",
        "6": "Pickup Truck",
        "7": "Van"
    }
},
{
    "ocid": 653,
    "name": "VehicleWidth",
    "label": "Vehicle Width",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 2,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 712,
    "name": "WasherFluidLevel",
    "label": "Washer Fluid Level",
    "category": "Maintenance",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 100,
        "resolution": 1,
        "precision": 0,
        "unit": "Percentage",
        "symbol": "%"
    }
},
{
    "ocid": 873,
    "name": "WasherFluidLevelLow",
    "label": "Washer Fluid Level Low",
    "category": "Maintenance",
    "type": "Bytes",
    "defaultValue": 0,
    "valueNames": {
        "NOT_LOW": 0,
        "LOW": 1,
        "ERROR": 2
    },
    "valueLabels": {
        "0": "Not Low",
        "1": "Low",
        "2": "Error"
    }
},
{
    "ocid": 661,
    "name": "WheelRadius",
    "label": "Wheel Radius",
    "category": "Configuration and Identification",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 65.535,
        "resolution": 0.001,
        "precision": 3,
        "unit": "Meter",
        "symbol": "m"
    }
},
{
    "ocid": 910,
    "name": "FrontLeftWheelSpeed",
    "label": "Wheel Speed - Front Left",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 0.01,
        "precision": 3,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 911,
    "name": "FrontRightWheelSpeed",
    "label": "Wheel Speed - Front Right",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 0.01,
        "precision": 3,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 912,
    "name": "RearLeftWheelSpeed",
    "label": "Wheel Speed - Rear Left",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 0.01,
        "precision": 3,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 913,
    "name": "RearRightWheelSpeed",
    "label": "Wheel Speed - Rear Right",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 255,
        "resolution": 0.01,
        "precision": 3,
        "unit": "Kilometers Per Hour",
        "symbol": "km/h"
    }
},
{
    "ocid": 870,
    "name": "WheelTick",
    "label": "Wheel Tick",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": 0,
        "max": 4294967295,
        "resolution": 1,
        "precision": 0,
        "unit": "Count",
        "symbol": ""
    }
},
{
    "ocid": 774,
    "name": "WindowLockedDriver",
    "label": "Window Locked Driver",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 775,
    "name": "WindowLockedPassenger",
    "label": "Window Locked Passenger",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 776,
    "name": "WindowLockedRearLeft",
    "label": "Window Locked Rear Left",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 777,
    "name": "WindowLockedRearRight",
    "label": "Window Locked Rear Right",
    "category": "Driver Safety",
    "type": "Boolean",
    "defaultValue": false
},
{
    "ocid": 650,
    "name": "WorldManufacturerIdentifier",
    "label": "World Manufacturer Identifier",
    "category": "Configuration and Identification",
    "type": "String",
    "defaultValue": "000"
},
{
    "ocid": 909,
    "name": "Yawrate",
    "label": "Yaw Rate",
    "category": "Running Status",
    "type": "Number",
    "defaultValue": 0,
    "value": {
        "min": -74.98161,
        "max": 75.01824,
        "resolution": 0.03663,
        "precision": 2,
        "unit": "Angular Degrees Per Second",
        "symbol": "deg/s"
    }
}
    ];
});
