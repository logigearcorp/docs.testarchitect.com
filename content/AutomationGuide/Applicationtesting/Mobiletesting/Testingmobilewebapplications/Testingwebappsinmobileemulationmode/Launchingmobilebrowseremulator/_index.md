--- 
title: "Launching mobile browser emulator"
linktitle: "Launching mobile browser emulator"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_launching_emulator.html
---
# Launching mobile browser emulator {#task_ujr_nrv_zv .task}

How to start a mobile browser emulator to allow TestArchitect to open and interact with mobile web applications.

To start an emulator, do the following in your test:

1.  Close all Google Chrome instances, if running.

2.  Use the [use browser](bis_use_browser.html) built-in setting to launch Google Chrome, since Chrome's Device Mode is an integral part of DevTools.

    ```
                 setting          value
    setting      use browser      Chrome
    ```

3.  Use the [navigate](bia_navigate.html) built-in action to navigate to a web page.

    ```
                 location
    navigate     https://www.google.com/
    
    ```

4.  Use the [send command to browser](bia_send_command_to_browser.html) built-in action to invoke your selected emulator in Chrome's Device Mode \([learn more](aut_app_testing_responsive_web_Chrome_DevTools_creating_profiles.html)\). For example, the following JSON string defines:

    -   the user agent,
    -   whether to emulate a mobile device,
    -   screen width,
    -   screen height,
    -   device pixel ratio,
    -   whether a view that exceeds the available browser window area should be scaled down to fit,
    -   enabling of touch event emulation
    ```
                               window      command                                                                                                                                                                                                                  variable            
    send command to browser    google      [{"method":"Network.setUserAgentOverride","params":{"userAgent":"Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36"}},       >>emulator
                                           {"method":"Emulation.setDeviceMetricsOverride","params":{"mobile":true,"width":260,"height":640,"deviceScaleFactor":2,"fitWindow":false}},
                                           {"method":"Emulation.setTouchEmulationEnabled","params":{"enabled":true}}]
    ```

5.  Refresh the page by using the [refresh](bia_refresh.html) built-in action to ensure the newly-invoked emulator take effect properly.

    **Important:** It should be noted that, upon conclusion of an automated run on the emulator, the Chrome browser automatically switches out of Device Mode and returns to Desktop Mode.

6.  Now you're ready to begin performing your automated web-based tests on the emulator.

    Your snippet of test should resemble the following.

    ``` {#codeblock_q1t_rj2_1w}
    //Launch Google Chrome   
                                setting                    value
    setting                     use browser                Chrome
    
    //Navigate to a URL in Chrome
    
                                location
    navigate                    https://www.google.com/
    
    //Invoke a specified emulator in Chrome's Device Mode
    
                                window                    command                                                                                                                                                                                                              variable            
    send command to browser     google                    [{"method":"Network.setUserAgentOverride","params":{"userAgent":"Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36"}},       >>emulator
                                                          {"method":"Emulation.setDeviceMetricsOverride","params":{"mobile":true,"width":260,"height":640,"deviceScaleFactor":2,"fitWindow":false}},
                                                          {"method":"Emulation.setTouchEmulationEnabled","params":{"enabled":true}}]
    
    //Refresh the page to ensure the emulator takes effect
    
                                window
    refresh                     google
    
    //Do something
    ```

7.  You may wish to change the environment for the emulator to customize its behaviors. When the mobile browser emulator has been invoked, use the [send command to browser](bia_send_command_to_browser.html) built-in action again.

    Technically, send command to browser sends a JSON string request to Google Chrome to customize the emulator behaviors on-the-fly. Note that you can change as many behaviors as you want, as long as those behaviors are supported by [Chrome debugging protocol](https://chromedevtools.github.io/debugger-protocol-viewer/tot/).

    **Tip:** You may want to validate your JSON string with the free resource [jsoneditoronline.org/](http://www.jsoneditoronline.org/), to ensure that its syntax and format are accurate.

    Suppose that you'd like to change the following behaviors:

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

8.  Since you change the emulator behaviors on-the-fly, it is highly recommended that you refresh the page by using the [refresh](bia_refresh.html) built-in action to ensure all new behaviors take effect properly.

    Your snippet of test should resemble the following.

    ``` {#codeblock_yyf_nyn_ky}
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

    **Important:** It should be noted that, upon conclusion of an automated run on the emulator, the Chrome browser automatically switches out of Device Mode and returns to Desktop Mode.


**Parent topic:**[Testing web apps in mobile emulation mode](../../TA_Automation/Topics/aut_app_testing_responsive_web.html)

**Previous topic:**[Creating mobile browser profiles](../../TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_creating_profiles.html)

**Next topic:**[Best practices to define mobile device profiles](../../TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_best_practices.html)

