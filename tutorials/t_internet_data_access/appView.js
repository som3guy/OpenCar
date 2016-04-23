define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        TextView    = require('common/ui/TextView'),
        Http        = require('common/Http'),

        InternetDataAccessAPI = require('common/InternetDataAccessAPI'),
        Promise      = require('common/lib/Promise'),

        Control     = require('common/ui/Control'),
        ModuleView  = require('common/platform/ModuleView');


    /*
     To use the weather example, you must obtain a developer or example key from openweathermap.org
     Please visit www.openweathermap.org/API for more information.
     */
    var weathermapAppId = ""; //"2de143494c0b295cca9337e1e96b00e0";

    /*
    To use the Authentication Scenario Example functions, one must first obtain a developer key from ATT.
    Please visit http://developer.att.com for more information.
    */
    var attKey = "", //'s86qolrdqhw2infnuidwdtpud8w12yjm',
        attSecret = ""; // 'eshfwnea5extyrqqhyiyvu8evctezzgf';

    /*
    The following functions illustrate the examples discussed in the accompanying tutorial documentation.

    Each of these may be executed through use of the UI.
    Modify this application for your own experimentation and learning of the InternetDataAccessAPI.
     */

    //
    // This is a very basic example of a service call
    //
    var simpleExample = function() {

        var info = 'Fetching time from timeapi.org...';
        statusDisplay.setText(info);
        Log.log(info);

        InternetDataAccessAPI.fetch('www.timeapi.org/utc/now').then(
            function(response) {
                Log.log(' -- The time is', response.data)
                statusDisplay.setText(response.data);
            },
            function(response) {
                Log.log('ERROR', response);
                statusDisplay.setText("ERROR (see console)");
            });
    };

    //
    // This example sends parameters to a service, and handles a more structured response.
    // Note you must visit openweathermap.org/API to obtain a valid app id to use.
    //
    var weatherMapExample = function() {

        var info = 'Accessing openweathermap.org...';
        statusDisplay.setText(info);
        Log.log(info);

        var url = 'http://api.openweathermap.org/data/2.5/weather';

        InternetDataAccessAPI.fetch(url, {
            data: {
                q: "seattle.us",
                units: "imperial",
                appId: weathermapAppId   // see above.  Must obtain separately.
            }
        }).then(
            function(response) {
                var data = response.data;
                Log.log(' -- The weather is', data);

                Log.log('Longitude', data.coord.lon);
                Log.log('Latitude', data.coord.lat);
                Log.log('Weather id', data.weather[0].id);
                Log.log('Weather main', data.weather[0].main);
                Log.log('Weather description', data.weather[0].description);
                Log.log('Weather icon', data.weather[0].icon);

                Log.log('Wind speed', data.wind.speed);
                Log.log('Wind direction', data.wind.deg);
                Log.log('Clouds', data.clouds.all);
                if(data.rain) {
                    Log.log('Rain', data.rain['3h']);
                }

                statusDisplay.setText(data.weather[0].description+", "+data.main.temp+"°F, Humidity: "+data.main.humidity+"%");
            },
            function(response) {
                Log.log('ERROR', response);
                var info = response.status == 401 ? "Key required. See documentation" : "ERROR: "+response.statusText;
                statusDisplay.setText(info);
            }
        );
    };

    //
    // This is equivalent to the example above, but it chooses to send the parameters as
    // a pre-formatted query URL string rather than in the object property/value form.
    //
    var weatherMapExample2 = function() {

        var info = 'Accessing openweathermap.org...';
        statusDisplay.setText(info);
        Log.log(info);

        var city = 'miami,us',
            appId = '&appid='+weathermapAppId,
            units = '&units=imperial',
            url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + appId + units;

        InternetDataAccessAPI.fetch(url).then(
            function(response) {
                var data = response.data;
                Log.log(' -- The weather is', data);

                Log.log('Longitude', data.coord.lon);
                Log.log('Latitude', data.coord.lat);
                Log.log('Weather id', data.weather[0].id);
                Log.log('Weather main', data.weather[0].main);
                Log.log('Weather description', data.weather[0].description);
                Log.log('Weather icon', data.weather[0].icon);

                Log.log('Wind speed', data.wind.speed);
                Log.log('Wind direction', data.wind.deg);
                Log.log('Clouds', data.clouds.all);
                if(data.rain) {
                    Log.log('Rain', data.rain['3h']);
                }

                statusDisplay.setText(data.weather[0].description+", "+data.main.temp+"°F, Humidity: "+data.main.humidity+"%");
            },
            function(response) {
                Log.log('ERROR', response);
                var info = response.status == 401 ? "Key required. See documentation" : "ERROR: "+response.statusText;
                statusDisplay.setText(info);
            }
        );
    };

    //
    // This calls the ATT Text-To-Speech API to produce audio data for a line of text.
    // If authentication has not already been obtained or has expired, the authentication service is called first.
    //
    // This example does not actually use the returned audio data.  This is merely used as an example of how
    // an oAuth-style authentication mechanism may be used by a service to grant access to a trusted client
    // for privileged data access.
    //
    // For more information on ATT developer APIs, visit http://developer.att.com
    //
    var attTextToSpeechExample = function() {

        var info = 'Accessing ATT api service...';
        statusDisplay.setText(info);
        Log.log(info);

        attGetAuthTokens().then(
            function() {
                var httpConfiguration = {
                    method: 'post',
                    data: 'This is a test message',
                    headers: {
                        'Authorization': 'Bearer ' + att_access_token,
                        'Accept': 'audio/x-wav',
                        'X-Arg': 'VoiceName=crystal,Volume=100'
                    },
                    postMimeType: 'text/plain'
                };

                InternetDataAccessAPI.fetch('https://api.att.com/speech/v3/textToSpeech', httpConfiguration).then(
                    function(response) {
                        Log.log('SUCCESS', response);
                        statusDisplay.setText("Service data received successfully");
                        //makeDataUrl(response.data);
                    },
                    function(response) {
                        Log.log('ERROR', response);
                        statusDisplay.setText("ERROR (see console)");
                    }
                );
                // give the result to the media player to hear it
            },
            function() {
                // an error occurred
            }
        )
    };

    // Used for authentication
    var att_access_scope = "SPEECH,TTS";
    var att_access_token;
    var att_access_expires;
    var att_refresh_token;

    //
    // In the first part of the authentication process, we use our developer credentials to request
    // access to the ATT Text To Speech service.
    // If successful, the service will give us an access token we can use to access the service.
    //
    var attGetAuthTokens = function() {
        var ourPromise = new Promise();
        var postInfo = {
            client_id       : attKey,
            client_secret   : attSecret,
            grant_type      : "client_credentials",
            scope           : att_access_scope
        };

        var info = 'Authorizing ATT access...';
        statusDisplay.setText(info);
        Log.log(info);

        // Check existing credentials from previous request
        if(att_access_token) {
            // If we  have credentials, but they have expired, use the refresh token to update
            if(Date.now() >= att_access_expires) {
                statusDisplay.setText("Token expired, fetching new one...");
                postInfo.refresh_token = att_refresh_token;
            }
            else {
                // we are all set with existing access token, so resolve the promise and exit
                ourPromise.resolve();
                return ourPromise;
            }
        }

        // Fetch new tokens
        var httpConfiguration = {
            method: 'post',
            data: postInfo,
            headers: {
                'Accept': 'application/json'
            }
        };

        InternetDataAccessAPI.fetch('https://api.att.com/oauth/v4/token', httpConfiguration).then(
            function(response) {
                Log.log(response);
                // Record our access tokens for future use
                att_access_token = response.data.access_token;
                att_refresh_token = response.data.refresh_token;
                att_access_expires = Date.now() + response.data.expires_in * 1000;
                statusDisplay.setText("Authorization obtained...");
                ourPromise.resolve();
            },
            function(errResp) {
                // request failed!
                Log.log('ERROR', errResp);
                statusDisplay.setText("Key required. See documentation");
                ourPromise.reject();
            }
        );

        return ourPromise;
    };

    // Functions report brief status output to this display (and write details to console log)
    var statusDisplay;

    //
    // -----------------------------------------------------
    // The rest of this code concerns UI handling for the app and is not a part of the tutorial content
    //

    return Class.create(
        ModuleView,
        {

            beforeStart: function ($super) {

                var timeBtn = Control.getById("time"),
                    weather1Btn = Control.getById("weather1"),
                    weather2Btn = Control.getById("weather2"),
                    attApiBtn = Control.getById("attApi");

                // status is module-scope so functions can use it
                statusDisplay = Control.getById("status");

                timeBtn.setText("Get Current Time");
                timeBtn.addClickListener(simpleExample);
                weather1Btn.setText("Weather Seattle");
                weather1Btn.addClickListener(weatherMapExample);
                weather2Btn.setText("Weather Miami");
                weather2Btn.addClickListener(weatherMapExample2);
                attApiBtn.setText("ATT Authenticated Request Example");
                attApiBtn.addClickListener(attTextToSpeechExample);

                statusDisplay.setText("Ready");

                return $super();

            }.override()
        }
    );
});
