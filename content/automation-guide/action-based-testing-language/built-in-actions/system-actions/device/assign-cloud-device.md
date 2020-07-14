--- 
title: "assign cloud device"
linktitle: "assign cloud device"
description: "Description Assign a logical name for a given capability of a target cloud device. This name may then be used in the action connect cloud device . Arguments url URL Appium server capability Set of ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_assign_cloud_device.html
keywords: "built-in actions, assign cloud device, assign cloud device (action), iOS (action), assign cloud device, Android (action), assign a mobile cloud device, name a mobile cloud device"
---

## Description {{< permerlink >}} {#bia_assign_cloud_device__section_nkt_zth_gy} 

Assign a logical name for a given capability of a target cloud device. This name may then be used in the action [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device).

## Arguments {{< permerlink >}} {#bia_assign_cloud_device__section_okt_zth_gy} 

-   **url**

    URL Appium server

-   **capability**

    Set of keys and values, in JSON format, sent to the Appium server to define what kind of automation session to be launched

-   **name**

    User-assigned, "friendly" name of the capability


## Valid contexts {{< permerlink >}} {#bia_assign_cloud_device__section_pkt_zth_gy} 

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_assign_cloud_device__section_qkt_zth_gy} 

-   This built-in action applies only to WebDriver based cloud services. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/).\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example {{< permerlink >}} {#bia_assign_cloud_device__section_wkt_zth_gy} 

Suppose that you'd like to automate mobile web application testing on Chrome in an Android cloud device in [Testdroid](http://docs.testdroid.com/appium/testdroid-desired-caps/), a WebDriver based cloud service.

-   Your set of desired capabilities should be defined as follows.
    -   For specific Testdroid capabilities:
        -   testdroid\_username: Email registered at Testdroid Cloud. Example: username@domain.com.
        -   testdroid\_password: Password for your Testdroid Cloud account. Example: p4s$w0rd
        -   testdroid\_target: Target test type. Example: chrome, which invokes Google Chrome browser during mobile web application testing.
        -   testdroid\_project: Project name that will be displayed on Web UI. Example:   `Chrome Android Project`.
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
        "testdroid_project": "  `Chrome Android Project`", 
        "testdroid_testrun": "Test Run 1",
        "testdroid_device": "Sony Xperia Z C6603"}
        ```

-   Specify URL Appium server of the given WebDriver based cloud service. For example: Testdroid, the URL Appium server is http://appium.testdroid.com/wd/hub

Action Lines

```
                       url                                  capability                                        name   
assign cloud device    http://appium.testdroid.com/wd/hub   {"deviceName":"Android Device",                   Xperia Z
                                                            "platformName":"Android",
                                                            "browserName":"chrome",
                                                            "testdroid_username": "username@domain.com",
                                                            "testdroid_password": "p4s$w0rd", 
                                                            "testdroid_target": "chrome",
                                                            "testdroid_project": "  `Chrome Android Project`", 
                                                            "testdroid_testrun": "Test Run 1",
                                                            "testdroid_device": "Sony Xperia Z C6603"}]    
```



**Related information**  


[connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device)

[use cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-cloud-device)

[get cloud device session id](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-cloud-device-session-id)

[disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device)

[use host machine](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-host-machine)

[disconnect all cloud devices](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-all-cloud-devices)
