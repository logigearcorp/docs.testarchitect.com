--- 
title: "configure webdriver"
linktitle: "configure webdriver"
description: "Description Set up an advanced test environment where you are going to run tests with WebDriver. (Learn more about Webdriver ) Important: This action is dedicated to Generic WebDriver. Valid contexts ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_configure_webdriver.html
keywords: "built-in actions, configure webdriver, configure webdriver (action), configure webdriver"
---

## Description {{< permerlink >}} {#reference_vk2_yzk_zdb__section_ofx_fbl_zdb} 

Set up an advanced test environment where you are going to run tests with WebDriver. \(Learn more about [Webdriver](https://www.w3.org/TR/webdriver/)\)

{{<important>}} This action is dedicated to Generic WebDriver.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Arguments {{< permerlink >}} {#reference_vk2_yzk_zdb__section_uqp_4bl_zdb} 

-   **values**

    Set of keys and values, in JSON format, sent by the client to describe the capabilities that a new session created by the server should possess


## Example {{< permerlink >}} {#reference_vk2_yzk_zdb__section_zt3_12l_zdb} 

Suppose that we 'd like to launch Chrome in headless and webdriver mode. The desired capabilities should resemble the following:

```
{"capabilities":{"browserName":"chrome"},"options":{"args":["--headless"]}}
```

-   capabilities: desired capabilities. \([Learn more](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities)\)
    -   browserName: The name of the browser being used.
-   options: A list of all the specific desired capabilities.
    -   args: list of command-line arguments to use when starting Chrome.
        -   --headless: Run in headless mode, i.e., without a UI or display server dependencies.

Action lines

![](/images/TA_Automation/Images/bia_configure_webdriver.png)

Besides, in GWD mode, you can decide whether or not to keep the browser open after test execution by using the **clean up**key. . See the example below for more information:

![](/images/TA_Automation/Images/cleanup-key.jpg)

```
{"cleanup":"no"}
```

-   yes \(Default\): close browser after test execution.
-   no: keep the browser open after test execution.

Additionally, you can use the Start-up settings to configure the cleanup. Click [here](/automation-guide/diagnosing-and-resolving-automation-errors/using-start-up-setting-for-configure-cleanup-key#) for more information.

{{<important>}} The purpose of keeping the browser open is to help you to debug your test. Using it may cause some problems related to headless mode, multi-execution, un-rent devices, etc. Please be aware of this before using this setting.


