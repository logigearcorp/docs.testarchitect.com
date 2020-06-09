--- 
title: "Creating mobile browser profiles"
linktitle: "Creating mobile browser profiles"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_creating_profiles.html
---

How to create mobile browser profiles with different user agents and screen sizes.

The built-in action [send command to browser](send_command_to_browser.html) is used within your TestArchitect test to specify a mobile browser profile to be invoked during testing, or even to change the environment for the currently invoked emulator to customize its behaviors. Naturally, within a test, you can call this built-in action any number of times to repeat testing with a variety of profiles for different mobile devices. The profiles are coded in JavaScript Object Notation \([JSON](http://www.w3schools.com/js/js_json_intro.asp)\), and with [Chrome debugging protocol](https://chromedevtools.github.io/debugger-protocol-viewer/).

**Important:** Basic JSON syntax as required for creating profiles is as follows:

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

**Tip:** You can define as many parameters as you need for a mobile browser profile. However, it is recommended that your JSON string contain the following basic information.

1.  User Agent \(UA\): The browser’s UA string. It identifies the browser and contains information about the browser version, operating system and its version, and specific browser enhancements. For example, Galaxy S5 has this UA:

    ```
    Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36
    ```

    **Tip:** You can find various mobile UA strings from the following links:

    -   [http://www.zytrax.com/tech/web/mobile\_ids.html](http://www.zytrax.com/tech/web/mobile_ids.html)
    -   [http://www.useragentstring.com/pages/useragentstring.php?typ=Mobile%20Browser](http://www.useragentstring.com/pages/useragentstring.php?typ=Mobile%20Browser)
    -   Alternatively, if you have the device in hand, visit [useragentstring.com](http://www.useragentstring.com/) from the browser on the device, and copy the UA string from there.

        ![](/images//Images/user_agent_string_Nexus.png)

    **Remember:** To define a UA string, use the [setUserAgentOverride](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Network/#method-setUserAgentOverride) method with the userAgent parameter. For example: The following JSON string defines a given UA string.

    ```
    { "method" : "Network.setUserAgentOverride",
    "params" : { "userAgent" : "Mozilla/5.0(Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/38.0.2125.114 Mobile Safari/537.36" } }
    ```

2.  Screen Width/Screen Height: Specify the browser screen size, including width and height, in CSS pixels. Note that this is not necessarily the same as the device’s physical screen size. For example, the iPhone 5 uses 2×2 physical pixels to display 1 CSS pixel, so the browser screen dimensions are half the physical screen dimensions.

    **Tip:** You can find various mobile browser screen sizes here:

    -   [http://viewportsizes.com](http://viewportsizes.com/)
    -   [http://mydevice.io/devices/](http://mydevice.io/devices/)
    -   Or if you have the device, visit [mydevice.io](http://mydevice.io/) from the browser on the device:

        ![](/images//Images/screen_size.png)

    **Remember:** To define screen size, use the [setDeviceMetricsOverride](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Emulation/#method-setDeviceMetricsOverride) method with the width and height parameters. For example: The following JSON string defines the browser screen size.

    ```
    { "method" : "Emulation.setDeviceMetricsOverride", "params" : { "width": 260, "height": 640 } }
    ```

3.  Device Pixel Ratio \(DPR\): Specify DPR, the number of physical pixels per CSS pixels. For example, iPhone 5 has DPR=2, meaning it uses 2×2 physical pixels to show 1 CSS pixel. Web applications can use the device pixel ratio to conditionally load different CSS or images.

    **Tip:** You can find DPR values for various devices here:

    -   [http://mydevice.io/devices/](http://mydevice.io/devices/)
    -   [http://www.canbike.org/CSSpixels/](http://www.canbike.org/CSSpixels/)
    -   Or if you have the device, visit [mydevice.io](http://mydevice.io/) from the browser on the device:

        ![](/images//Images/DPR.png)

    **Remember:** To define DPR, use the [setDeviceMetricsOverride](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Emulation/#method-setDeviceMetricsOverride) method with the deviceScaleFactor parameter.

4.  Trigger touch events: Toggles mouse event-based touch event emulation. This touch screen emulator lets you accurately test touch events and sequences as if you were using a touch-enabled device.

    **Remember:** To simulate touch events, use the [setTouchEmulationEnabled](https://chromedevtools.github.io/debugger-protocol-viewer/tot/Emulation/#method-setTouchEmulationEnabled) method with the enabled parameter. For example:

    ```
    { "method" : "Emulation.setTouchEmulationEnabled", "params" : { "enabled" : true } }
    ```


In summary, the below JSON string defines the following parameters for a given mobile browser profile:

-   UA \(userAgent parameter\),
-   whether to emulate a mobile device \(mobile parameter\),
-   screen width \(width parameter\),
-   screen height \(height parameter\),
-   DPR \(deviceScaleFactor parameter\),
-   whether a view that exceeds the available browser window area should be scaled down to fit \(fitWindow parameter\), and
-   enable touch event emulation \(enabled parameter\).

    ![](/images//Images/JSON_Chrome.png)


**Tip:** You may want to validate your JSON string with the free resource [jsoneditoronline.org/](http://www.jsoneditoronline.org/), to ensure that its syntax and format are accurate.

Copy the JSON string into the command argument of the [send command to browser](send_command_to_browser.html) built-in action.

```
                            window            command                                                                                                                                                                                                             variable                        
send command to browser     google            [{"method":"Network.setUserAgentOverride","params":{"userAgent":"Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36"}},      >>emulator
                                              {"method":"Emulation.setDeviceMetricsOverride","params":{"mobile":true,"width":260,"height":640,"deviceScaleFactor":2,"fitWindow":false}},
                                              {"method":"Emulation.setTouchEmulationEnabled","params":{"enabled":true}}]
```

**Parent topic:**[Testing web apps in mobile emulation mode](/TA_Automation/Topics/aut_app_testing_responsive_web.html)

**Previous topic:**[Testing web apps in mobile emulation mode - Overview](/TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools.html)

**Next topic:**[Launching mobile browser emulator](/TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_launching_emulator.html)

