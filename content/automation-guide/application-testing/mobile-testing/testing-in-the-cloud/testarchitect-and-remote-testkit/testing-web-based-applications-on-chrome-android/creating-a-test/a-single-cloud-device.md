--- 
title: "Selecting a single cloud device during execution"
linktitle: "A single cloud device"
description: "From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_RTK_Android_Chrome_automation.html
keywords: "cloud testing, Remote TestKit, single device, Chrome Android, Remote TestKit, single device, Chrome Android"
---

From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run.

{{<important>}} With this method, only a single cloud device is selected and run at a time. You are required to terminate the connection the current device-under-test, before executing the remaining tests on other cloud devices.

Ensure that the following requirements are met before implementing automated mobile web testing on a cloud device in the Remote TestKit cloud service:

-   [Set up](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/setting-up-android-development-environment) Android development environment.
-   In the Remote TestKit cloud service, [rent](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/renting-an-android-cloud-device) an Android device.
-   [Run](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/configuring-appium-server-locally#step_grn_3px_gy) Appium server locally.

1.  Use the [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) built-in action to define a list of [desired capabilities](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-appium/#section_p5f_qp3_gy), which are sets of keys and values sent to the Appium server in [JSON](http://www.w3schools.com/js/js_json_syntax.asp) format. You can define as many capabilities as you need \([learn more](http://appium.io/slate/en/master/?ruby#appium-server-capabilities)\). However, it is recommended that your JSON string contain the following basic capabilities including.

    -   deviceName,
    -   platformName, and
    -   browserName.
    For example: You rent a Galaxy S7 Edge in Remote TestKit to automate mobile web applications, your set of desired capabilities should be defined as follows.

    -   deviceName: Query for its value by using [`adb devices`](https://developer.android.com/studio/command-line/adb.html#howadbworks) command.

        ![](/images/TA_Help/Images/adb_devices.png)

    -   platformName: Android
    -   browserName: Chrome, which invokes Google Chrome browser during mobile web application testing.
    -   JSON string is as follows:
    -   ```
[{"deviceName" : "galaxy_s7_edge_sm-g935f.adb.appkitbox.com:58564", 
"platformName" : "Android", 
"browserName" : "Chrome"}]
```

    -   Specify local URL Appium server:

        -   The format is in the form of `http://<server_address>:<port_number>/wd/hub/`
        -   For example:   `http://127.0.0.1:4723/wd/hub/`
        ![](/images/TA_Automation/Images/Appium_URL.png)

    -   [assign device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) should resemble the following.

        ```
                             url                             capability                                                            name   
        assign cloud device    `http://127.0.0.1:4723/wd/hub/`   [{"deviceName" : "galaxy_s7_edge_sm-g935f.adb.appkitbox.com:58564",   S7 edge 
                                                             "platformName" : "Android", 
                                                             "browserName" : "Chrome"}]    
        ```

2.  Make a connection to the target cloud device via the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) built-in action, as specified by its logical name.

    {{<note>}} The name is established in advance by the [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) action, which assigns a logical name to a mobile cloud device.

    ```
                           name       session id
    connect cloud device   S7 edge    >>s7_edge_sessionID
    ```

3.  Employ the [use cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-cloud-device) built-in action to use the cloud device to initiate automated tests. The invoked cloud device is specified by its session ID.

    {{<note>}} The session ID specified in the session id argument is retrieved via the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) action.

    ```
                         session id
    use cloud device     #s7_edge_sessionID
    ```

4.  Now, you're ready to begin performing your automated web-based tests on the target cloud device.
5.  When you no longer need to continue the tests on the target cloud device, it is highly recommended that you terminate the connection with the target device by using the [disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device) built-in action.

    ```
                               session id
    disconnect cloud device    #s7_edge_sessionID
    ```

6.  When you'd like to switch back to the host machine to continue the remaining tests, use the [use host machine](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-host-machine) built-in action.
7.  Overall, your snippet of test should resemble the following.

    ```
    //Define desired capabilities
                            url                             capability                                                            name   
    assign cloud device       `http://127.0.0.1:4723/wd/hub/`   [{"deviceName" : "galaxy_s7_edge_sm-g935f.adb.appkitbox.com:58564",   S7 edge 
                                                            "platformName" : "Android", 
                                                            "browserName" : "Chrome"}]   
    
    //Connect to the target cloud device
                              name       session id
    connect cloud device      S7 edge    >>s7_edge_sessionID
    
    //Use the target cloud device
                              session id
    use cloud device          #s7_edge_sessionID
    
    //Implement action lines to perform automated mobile web-based testing
    
    //Disconnect the target device
                               session id
    disconnect cloud device    #s7_edge_sessionID
    ```



