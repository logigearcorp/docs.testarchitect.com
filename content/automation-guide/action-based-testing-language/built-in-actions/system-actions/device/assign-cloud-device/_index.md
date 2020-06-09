--- 
title: "assign cloud device"
linktitle: "assign cloud device"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_assign_cloud_device.html
---
keyword: [assign a mobile cloud device, name a mobile cloud device]
---

# assign cloud device

## Description

Assign a logical name for a given capability of a target cloud device. This name may then be used in the action [connect cloud device](connect_cloud_device.html).

## Arguments

-   **url**

    URL Appium server

-   **capability**

    Set of keys and values, in JSON format, sent to the Appium server to define what kind of automation session to be launched

-   **name**

    User-assigned, "friendly" name of the capability


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to WebDriver based cloud services. \([Learn more](aut_app_cloud_testing.html).\)
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

Suppose that you'd like to automate mobile web application testing on Chrome in an Android cloud device in [Testdroid](http://docs.testdroid.com/appium/testdroid-desired-caps/), a WebDriver based cloud service.

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

**Action Lines**

```
                       url                                  capability                                        name   
assign cloud device    http://appium.testdroid.com/wd/hub   {"deviceName":"Android Device",                   Xperia Z
                                                            "platformName":"Android",
                                                            "browserName":"chrome",
                                                            "testdroid_username": "username@domain.com",
                                                            "testdroid_password": "p4s$w0rd", 
                                                            "testdroid_target": "chrome",
                                                            "testdroid_project": "Chrome Android Project", 
                                                            "testdroid_testrun": "Test Run 1",
                                                            "testdroid_device": "Sony Xperia Z C6603"}]    
```

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Next topic:**[assign device](/TA_Automation/Topics/bia_assign_device.html)

**Related information**  


[connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html)

[use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html)

[get cloud device session id](/TA_Automation/Topics/bia_get_cloud_device_session_id.html)

[disconnect cloud device](/TA_Automation/Topics/bia_disconnect_cloud_device.html)

[use host machine](/TA_Automation/Topics/bia_use_host_machine.html)

[disconnect all cloud devices](/TA_Automation/Topics/bia_disconnect_all_cloud_devices.html)

