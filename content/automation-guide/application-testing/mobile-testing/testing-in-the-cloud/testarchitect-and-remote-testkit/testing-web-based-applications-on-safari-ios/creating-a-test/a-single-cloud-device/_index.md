--- 
title: "Selecting a single cloud device during execution"
linktitle: "Selecting a single cloud device during execution"
description: "From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS_workflow.html
keywords: "cloud testing, Remote TestKit, single device, Safari iOS, Remote TestKit, single device, Safari iOS"
---

From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run.

**Important:** With this method, only a single cloud device is selected and run at a time. You are required to terminate the connection the current device-under-test, before executing the remaining tests on other cloud devices.

Ensure that the following requirements are met before implementing automated mobile web testing on a cloud device in the Remote TestKit cloud service.

-   In the Remote TestKit cloud service, rent an iOS device and enable Xcode Connector. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_iOS_Xcode_connector.html).\)
-   [Run Appium](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS.html) server on your local host.
-   [Install](/TA_Automation/Topics/aut_app_cloud_testing_safarilauncher.html) the SafariLauncher application.

1.  Use the [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html) built-in action to define a list of [desired capabilities](/TA_Automation/Topics/aut_appium.html#section_p5f_qp3_gy), which are sets of keys and values sent to the Appium server in [JSON](http://www.w3schools.com/js/js_json_syntax.asp) format. You can define as many capabilities as you need \([learn more](http://appium.io/slate/en/master/?ruby#appium-server-capabilities)\). However, it is recommended that your JSON string contain the following basic capabilities including.

    -   deviceName,
    -   platformName, and
    -   browserName.
    For example: You rent an iPhone 6s in Remote TestKit to automate mobile web applications, your set of desired capabilities should be defined as follows.

    -   deviceName: UDID of the rented device \([learn more](/TA_Automation/Topics/aut_obtaining_UDID.html)\). For example: 002ebf12-a125-5ddf-a739-67c3c5d20177.
    -   platformName: iOS
    -   browserName: Safari, which invokes Safari browser during mobile web application testing.
    -   JSON string is as follows:

        ```
        {"deviceName" : "002ebf12-a125-5ddf-a739-67c3c5d20177", 
        "platformName" : "iOS", 
        "browserName" : "Safari"}
        ```

    -   Specify local URL Appium server:

        -   The format is in the form of `http://<server_address>:<port_number>/wd/hub/`
        -   For example: http://127.0.0.1:4723/wd/hub/
        ![](/images/TA_Automation/Images/general_settings_appium_server.png)

    -   [assign device](/TA_Automation/Topics/bia_assign_cloud_device.html) should resemble the following.

        ```
                             url                             capability                                                 name   
        assign cloud device  http://127.0.0.1:4723/wd/hub/   {"deviceName" : "002ebf12-a125-5ddf-a739-67c3c5d20177",   iPhone 6s 
                                                             "platformName" : "iOS", 
                                                             "browserName" : "Safari"}    
        ```

2.  Make a connection to the target cloud device via the [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html) built-in action, as specified by its logical name.

    **Note:** The name is established in advance by the [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html) action, which assigns a logical name to a mobile cloud device.

    ```
                           name         session id
    connect cloud device   iPhone 6s    >>iPhone6s_sessionID
    ```

3.  Employ the [use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html) built-in action to use the cloud device to initiate automated tests. The invoked cloud device is specified by its session ID.

    **Note:** The session ID specified in the session id argument is retrieved via the [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html) action.

    ```
                         session id
    use cloud device     #iPhone6s_sessionID
    ```

4.  Now, you're ready to begin performing your automated web-based tests on the target cloud device.
5.  When you no longer need to continue the tests on the target cloud device, it is highly recommended that you terminate the connection with the target device by using the [disconnect cloud device](/TA_Automation/Topics/bia_disconnect_cloud_device.html) built-in action.

    ```
                               session id
    disconnect cloud device    #iPhone6s_sessionID
    ```

6.  When you'd like to switch back to the host machine to continue the remaining tests, use the [use host machine](/TA_Automation/Topics/bia_use_host_machine.html) built-in action.
7.  Overall, your snippet of test should resemble the following.

    ```
    //Define desired capabilities
    
                           url                             capability                                                 name   
    assign cloud device    http://127.0.0.1:4723/wd/hub/   {"deviceName" : "002ebf12-a125-5ddf-a739-67c3c5d20177",    iPhone 6s 
                                                           "platformName" : "iOS", 
                                                           "browserName" : "Safari"}   
    
    //Connect to the target cloud device
                             name                           session id
    connect cloud device     iPhone 6s                      >>iPhone6s_sessionID
    
    //Use the target cloud device
                             session id
    use cloud device         #iPhone6s_sessionID
    
    //Implement action lines to perform automated mobile web-based testing
    
    //Disconnect the target device
                              session id
    disconnect cloud device   #iPhone6s_sessionID
    ```




