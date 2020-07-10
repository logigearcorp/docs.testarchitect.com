--- 
title: "Selecting a single cloud device during execution"
linktitle: "A single cloud device"
description: "From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_automation.html
keywords: "cloud testing, WebDriver, single device, Appium, cloud services, WebDriver, workflow, single device"
---

From within your action lines, you can control which cloud device your test is to execute on. The built-in assign cloud device action is used to specify a target cloud device upon which the subsequent action lines are to be run.

{{<important>}} With this method, only a single cloud device is selected and run at a time. You are required to terminate the connection the current device-under-test, before executing the remaining tests on other cloud devices.

To start automated mobile web testing on a cloud device in a given WebDriver based cloud service, declare the following action lines in your test:

1.  Use the [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) built-in action to define a list of [desired capabilities](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-appium/#section_p5f_qp3_gy), which are sets of keys and values sent to the Appium server in [JSON](http://www.w3schools.com/js/js_json_syntax.asp) format.

    {{<note>}}

    -   See the [Desired Capabilities documentation](http://appium.io/slate/en/master/?ruby#appium-server-capabilities) for the list of capabilities available for Appium.
    -   Along with the capabilities of Appium, some WebDriver based cloud services might have their own set of capabilities. For example, [Testdroid](https://cloud.testdroid.com/), several additional Testdroid Desired Capabilities are also provided \([learn more](http://docs.testdroid.com/appium/testdroid-desired-caps/)\). Also ensure that your [Testdroid Cloud project's type](http://docs.testdroid.com/user-manuals/testdroid-cloud/projects/) must be either Appium Android client side or Appium iOS client side
    For example: You'd like to automate mobile web application testing on Chrome in Testdroid.

    -   Your set of desired capabilities should be defined as follows.
        -   For specific Testdroid capabilities:
            -   testdroid\_username: Email registered at Testdroid Cloud. Example: username@domain.com.
            -   testdroid\_password: Password for your Testdroid Cloud account. Example: p4s$w0rd
            -   testdroid\_target: Target test type. Example: chrome, which invokes Google Chrome browser during mobile web application testing.
            -   testdroid\_project: Project name that will be displayed on Web UI. Example: Chrome Android Project.
            -   testdroid\_testrun: Name given to each Test Run under a Project. Example: Test Run 1.
            -   **testdroid\_device**: The device name that uniquely identifies a device on Testdroid Cloud. Example: Sony Xperia Z C6603.
        -   For Appium server capabilities:
            -   deviceName: The kind of mobile device to use. For example: Android Device
            -   platformName: Which mobile OS platform to use. For example: Android
            -   browserName: Name of mobile web browser to automate. For example: chrome
        -   Your JSON string is as follows:

            ```
            {"deviceName":"Android Device",
            "platformName":"Android",
            "browserName":"chrome",
            "testdroid_username": "username@domain.com", 
            "testdroid_password": "p4s$w0rd", 
            "testdroid_target": "chrome",
            "testdroid_project": "Chrome Android Project", 
            "testdroid_testrun": "Test Run 1",
            "testdroid_device": "Sony Xperia Z C6603"}
            ```

    -   Specify URL Appium server of the given WebDriver based cloud service. For example: Testdroid, the URL Appium server is http://appium.testdroid.com/wd/hub
    -   [assign device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) should resemble the following.

        ```
                              url                                   capability                                        name   
        assign cloud device   http://appium.testdroid.com/wd/hub    {"deviceName":"Android Device",                   Xperia Z
                                                                     "platformName":"Android",
                                                                     "browserName":"chrome",
                                                                     "testdroid_username": "username@domain.com",
                                                                     "testdroid_password": "p4s$w0rd", 
                                                                     "testdroid_target": "chrome",
                                                                     "testdroid_project": "Chrome Android Project", 
                                                                     "testdroid_testrun": "Test Run 1",
                                                                     "testdroid_device": "Sony Xperia Z C6603"}    
        ```

2.  Make a connection to the target cloud device via the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) built-in action, as specified by its logical name.

    {{<note>}} The name is established in advance by the [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) action, which assigns a logical name to a mobile cloud device.

    ```
                           name         session id
    connect cloud device   Xperia Z     >>Xperia_Z_sessionID
    ```

3.  Employ the [use cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-cloud-device) built-in action to use the cloud device to initiate automated tests. The invoked cloud device is specified by its session ID.

    {{<note>}} The session ID specified in the session id argument is retrieved via the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) action.

    ```
                         session id
    use cloud device     #Xperia_Z_sessionID
    ```

4.  Now, you're ready to begin performing your automated web-based tests on the target cloud device.
5.  When you no longer need to continue the tests on the target cloud device, it is highly recommended that you terminate the connection with the target device by using the [disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device) built-in action.

    ```
                               session id
    disconnect cloud device    #Xperia_Z_sessionID
    ```

6.  When you'd like to switch back to the host machine to continue the remaining tests, use the [use host machine](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-host-machine) built-in action.
7.  Overall, your snippet of test should resemble the following.

    ```
    //Define desired capabilities
                  
                            url                                 capability                                         name   
    assign cloud device     http://appium.testdroid.com/wd/hub  {"deviceName":"Android Device",                    Xperia Z
                                                                 "platformName":"Android",
                                                                 "browserName":"chrome",
                                                                 "testdroid_username": "username@domain.com",
                                                                 "testdroid_password": "p4s$w0rd", 
                                                                 "testdroid_target": "chrome",
                                                                 "testdroid_project": "Chrome Android Project", 
                                                                 "testdroid_testrun": "Test Run 1",
                                                                 "testdroid_device": "Sony Xperia Z C6603"}   
                  
    //Connect to the target cloud device
                             name                                session id
    connect cloud device     Xperia Z                            >>Xperia_Z_sessionID
                  
    //Use the target cloud device
                             session id
    use cloud device         #Xperia_Z_sessionID
                  
    //Implement action lines to perform automated mobile web-based testing
                  
    //Disconnect the target device
                              session id
    disconnect cloud device   #Xperia_Z_sessionID
    ```




