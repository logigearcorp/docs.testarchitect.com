--- 
title: "send command to browser"
linktitle: "send command to browser"
weight: 21
aliases: 
    - /TA_Automation/Topics/bia_send_command_to_browser.html
---
# send command to browser {#bia_send_command_to_browser .reference}

## Description { .section}

Send JSON string request to Google Chrome's Device Mode in order to invoke a new mobile browser emulator, or change environment for a given mobile browser emulator to customize its behaviors during the test run.

## Arguments { .section}

window
:   TA name of the window.

command
:   JSON string request sent to [Chrome DevTools](https://developer.chrome.com/devtools)'s [Device Mode](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/)

:   **Important:** Basic JSON syntax as required for creating profiles is as follows:

-   JSON data is written as name:value pairs. Example:

    ```
    "firstName" : "John"
    ```

-   A JSON object is written inside curly braces, and can contain multiple name:values pairs, delimited by commas. Example:

    ```
    { "firstName" : "John" , "lastName" : "Doe" }
    ```

-   JSON arrays \(arrays of JSON objects\) are written inside square brackets, and are delimited by commas. Example:

    ```
    "employees":[
        {"firstName":"John", "lastName":"Doe"}, 
        {"firstName":"Anna", "lastName":"Smith"}, 
        {"firstName":"Peter","lastName":"Jones"}
    ]
    ```


Note that you can learn more about JSON syntax [here](http://www.w3schools.com/js/js_json_syntax.asp).

variable
:   \(Optional\) Variable to return the JSON string received from Google DevTools in response to the submitted command.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms:Chrome DevTools's Device Mode on Windows.

## Applicable Built-In Settings { .section}

The following setting is applicable to this action: [window wait](bis_window_wait.html).

## Notes { .section}

-   You may want to validate your JSON string with the free resource [jsoneditoronline.org/](http://www.jsoneditoronline.org/), to ensure that its syntax and format are accurate.
-   You can change as many emulator behaviors as you want, as long as those behaviors are supported by [Chrome debugging protocol](https://chromedevtools.github.io/debugger-protocol-viewer/tot/). \([Learn more](aut_app_testing_responsive_web_Chrome_DevTools_launching_emulator.md#step_d2w_t3d_1w).\) For instance, you can update the following behaviors:
    -   Configure network:
        -   User agent \(UA\): Allows you to set a specific UA string override by using the [setUserAgentOverride](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Network/#method-setUserAgentOverride) method. The following JSON string overrides the current UA.

            ![](../Images/UA_override.png)

        -   Network throttling: Emulate network connectivity to test your site on a variety of network connections, including Edge, 3G, and even offline, through the [emulateNetworkConditions](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Network/#method-emulateNetworkConditions) method. The following JSON string defines a Regular 3G network, including:

            -   Additional latency \(ms\)
            -   Maximal aggregated download throughput
            -   Maximal aggregated upload throughput
            ![](../Images/Regular3G.png)

    -   Emulate geolocation data: Unlike desktops, mobile devices commonly use GPS hardware to detect location. You can simulate geolocation coordinates by using the [setGeolocationOverride](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Emulation/#method-setGeolocationOverride) method. The following JSON string enables the geolocation emulation including:
        -   Latitude
        -   Longitude
        -   Accuracy

            ![](../Images/geolocation.png)

    -   Emulate accelerometer \(device orientation\): To test accelerometer data, enable the accelerometer emulator by using the [setDeviceOrientationOverride](https://chromedevtools.github.io/debugger-protocol-viewer/tot/DeviceOrientation/#method-setDeviceOrientationOverride) method. The following JSON string manipulates the following orientation parameters:
        -   Alpha: Rotation around the z-axis.
        -   Beta: Left-to-right tilt.
        -   Gamma: Front-to-back tilt.

            ![](../Images/accelerometer.png)

-   Since this command is used to invoke a new emulator or change the emulator behavior on-the-fly, follow up by refreshing the current webpage by means of the [refresh](bia_refresh.html) built-in action, to ensure all new behaviors take effect. \(See example below.\)
-   It should be noted that, upon conclusion of an automated run on the emulator, the Chrome browser automatically switches out of Device Mode and returns to Desktop Mode.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example { .section}

Assume that you have set up a Chrome Device Mode mobile device emulator by means of writing a defined JSON profile to the action send command to browser.

During the test run, you'd like to customize certain aspects of the emulator's environment. You accomplish this with the send command to browser action, sending the appropriate JSON strings through its command argument. The features to be changed \(and their corresponding JSON command strings\) are:

-   Override user agent \("userAgent":"Mozilla/5.0 \(Linux; Android 5.0; SM-G900P Build/LRX21T\) AppleWebKit/537.36 \(KHTML, like Gecko\) Chrome/48.0.2564.23 Mobile Safari/537.36"\)
-   Emulate a regular 3G network \("offline":false,"latency":100,"downloadThroughput":750,"uploadThroughput":250\)
-   Emulate geolocation data \("latitude":16,"longitude":108,"accuracy":1\)
-   Emulate accelerometer \("alpha":32,"beta":26,"gamma":7\)

## Action Lines { .section}

```
//Launch Google Chrome   
                            setting                    value
setting                     use browser                Chrome

//Navigate to a URL in Chrome

                            location
navigate                    https://www.google.com/

//Invoke a specified emulator in Chrome's Device Mode

                            window                    command                                                                                                                                                                                                           variable             
send command to browser     google                    [{"method":"Network.setUserAgentOverride","params":{"userAgent":"Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36"}},    >>emulator
                                                      {"method":"Emulation.setDeviceMetricsOverride","params":{"mobile":true,"width":260,"height":640,"deviceScaleFactor":2,"fitWindow":false}},
                                                      {"method":"Emulation.setTouchEmulationEnabled","params":{"enabled":true}}]

//Refresh the page to ensure the emulator takes effect

                            window
refresh                     google

//Develop web automation here

//Change environment to customize emulator behaviors on-the-fly
                            
                            window                    command                                                                                                                                                                                                          variable
send command to browser     google                    [{"method":"Network.setUserAgentOverride","params":{"userAgent":"Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36"}},     >>new_behavior
                                                      {"method":"Network.emulateNetworkConditions","params":{"offline":false,"latency":100,"downloadThroughput":750,"uploadThroughput":250}},
                                                      {"method":"Emulation.setGeolocationOverride","params":{"latitude":16,"longitude":108,"accuracy":1}},
                                                      {"method":"DeviceOrientation.setDeviceOrientationOverride","params":{"alpha":32,"beta":26,"gamma":7}}]

//Refresh the page to ensure all new behaviors take effect

                            window
refresh                     google
```

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[refresh](../../TA_Automation/Topics/bia_refresh.html)

**Next topic:**[submit form](../../TA_Automation/Topics/bia_submit_form.html)

