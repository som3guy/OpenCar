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
