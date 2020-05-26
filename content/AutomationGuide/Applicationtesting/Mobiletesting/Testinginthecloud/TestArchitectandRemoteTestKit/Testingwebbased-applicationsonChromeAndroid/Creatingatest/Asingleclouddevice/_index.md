--- 
title: "Selecting a single cloud device during execution"
linktitle: "A single cloud device"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_RTK_Android_Chrome_automation.html
---
# Selecting a single cloud device during execution {#concept_n42_rhx_gy .concept}

From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run.

**Important:** With this method, only a single cloud device is selected and run at a time. You are required to terminate the connection the current device-under-test, before executing the remaining tests on other cloud devices.

Ensure that the following requirements are met before implementing automated mobile web testing on a cloud device in the Remote TestKit cloud service:

-   [Set up](aut_app_cloud_testing_Android_configuration.html) Android development environment.
-   In the Remote TestKit cloud service, [rent](aut_app_cloud_testing_RTK_renting.html) an Android device.
-   [Run](aut_app_cloud_testing_Appium_RTK.md#step_grn_3px_gy) Appium server locally.

1.  Use the [assign cloud device](bia_assign_cloud_device.html) built-in action to define a list of [desired capabilities](aut_appium.md#section_p5f_qp3_gy), which are sets of keys and values sent to the Appium server in [JSON](http://www.w3schools.com/js/js_json_syntax.asp) format. You can define as many capabilities as you need \([learn more](http://appium.io/slate/en/master/?ruby#appium-server-capabilities)\). However, it is recommended that your JSON string contain the following basic capabilities including.

    -   deviceName,
    -   platformName, and
    -   browserName.
    For example: You rent a Galaxy S7 Edge in Remote TestKit to automate mobile web applications, your set of desired capabilities should be defined as follows.

    -   deviceName: Query for its value by using [`adb devices`](https://developer.android.com/studio/command-line/adb.html#howadbworks) command.

        ![](../../TA_Help/Images/adb_devices.png)

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
        -   For example: http://127.0.0.1:4723/wd/hub/
        ![](../Images/Appium_URL.png)

    -   [assign device](bia_assign_cloud_device.html) should resemble the following.

        ```
                             url                             capability                                                            name   
        assign cloud device  http://127.0.0.1:4723/wd/hub/   [{"deviceName" : "galaxy_s7_edge_sm-g935f.adb.appkitbox.com:58564",   S7 edge 
                                                             "platformName" : "Android", 
                                                             "browserName" : "Chrome"}]    
        ```

2.  Make a connection to the target cloud device via the [connect cloud device](bia_connect_cloud_device.html) built-in action, as specified by its logical name.

    **Note:** The name is established in advance by the [assign cloud device](bia_assign_cloud_device.html) action, which assigns a logical name to a mobile cloud device.

    ```
                           name       session id
    connect cloud device   S7 edge    >>s7_edge_sessionID
    ```

3.  Employ the [use cloud device](bia_use_cloud_device.html) built-in action to use the cloud device to initiate automated tests. The invoked cloud device is specified by its session ID.

    **Note:** The session ID specified in the session id argument is retrieved via the [connect cloud device](bia_connect_cloud_device.html) action.

    ```
                         session id
    use cloud device     #s7_edge_sessionID
    ```

4.  Now, you're ready to begin performing your automated web-based tests on the target cloud device.
5.  When you no longer need to continue the tests on the target cloud device, it is highly recommended that you terminate the connection with the target device by using the [disconnect cloud device](bia_disconnect_cloud_device.html) built-in action.

    ```
                               session id
    disconnect cloud device    #s7_edge_sessionID
    ```

6.  When you'd like to switch back to the host machine to continue the remaining tests, use the [use host machine](bia_use_host_machine.html) built-in action.
7.  Overall, your snippet of test should resemble the following.

    ```
    //Define desired capabilities
                            url                             capability                                                            name   
    assign cloud device     http://127.0.0.1:4723/wd/hub/   [{"deviceName" : "galaxy_s7_edge_sm-g935f.adb.appkitbox.com:58564",   S7 edge 
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


**Parent topic:**[Creating mobile web application test](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_Android.html)

**Next topic:**[Selecting multiple cloud devices at launch time](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_multiple_Android_cloud_devices.html)

