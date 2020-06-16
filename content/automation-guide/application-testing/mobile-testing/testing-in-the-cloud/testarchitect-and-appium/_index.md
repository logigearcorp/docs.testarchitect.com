--- 
title: "TestArchitect and Appium"
linktitle: "TestArchitect and Appium"
description: "TestArchitect allows you to run automated tests on real devices in WebDriver based cloud services (Appium enabled)."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_appium.html
keywords: "cloud testing, WebDriver, Appium"
---

TestArchitect allows you to run automated tests on real devices in **WebDriver based cloud services** \(Appium enabled\).

**Restriction:** [Screenshot Recording](/TA_Help/Topics/ug_Screenshot_recording.html) is currently not supported on automated tests in mobile cloud environment. \(See [here](/TA_FAQ/Topics/faq.howto.screenshot_recording_mobile_cloud.html) for a detour solution.\)

## Supported platforms

TestArchitect supports testing mobile web applications on the following platforms:

-   Safari on iOS devices
-   Google Chrome on Android devices

**Note:** You can run your automated tests on the supported platforms either remotely from your local host or in a specific cloud service. \(See below for details.\)

## Supported Appium versions

-   Windows: Appium version [1.7.2](https://github.com/appium/appium/releases/)
-   macOS: Appium version [1.7.2](https://github.com/appium/appium/releases/)

## **Running Appium locally**

You can run your automated tests as Appium client on your local computer. This is the approach supported by TestArchitect, when you typically would automate mobile web applications on cloud devices in the specific Remote TestKit cloud service. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_RTK.html).\)

## **Running Appium in cloud**

Your automated tests can also be run in cloud. Tests are run against the rented devices as soon as they become available. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_Appium_automation.html).\)

**Attention:**

-   On [Sauce Labs](https://saucelabs.com/), [Appium iOS Driver](https://github.com/appium/appium-ios-driver), a test automation tool, does not support iOS 10.

## Session

Automation in Appium is performed in the context of a [session](http://appium.io/slate/en/master/?ruby#appium-concepts). Clients initiate a session with a server in ways specific to each library, but they all end up sending a POST /session request to the server, with a JSON object called the desired capabilities object. At this point the server will start up the automation session and respond with a session ID which is used for sending further commands.

**Note:** In TestArchitect, session ID of the rented mobile cloud device can be retrieved through the [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html) and [get cloud device session id](/TA_Automation/Topics/bia_get_cloud_device_session_id.html) built-in actions.

## Desired capabilities

Desired capabilities are a set of keys and values sent to the Appium server to tell the server what kind of automation session should be starting up \([learn more](http://appium.io/slate/en/master/?ruby#appium-concepts)\). There are also various capabilities which can modify the behavior of the server during automation.

For example:

-   We might set the platformName capability to iOS to tell Appium that we want an iOS session.
-   Or we might set the browserName capability to Chrome in order to ensure that Google Chrome will be invoked to run automated tests.

**Note:** See the [Desired Capabilities documentation](http://appium.io/slate/en/master/?ruby#appium-server-capabilities) for the list of capabilities available for Appium.

Along with the capabilities of Appium, some WebDriver based cloud services might have their own set of capabilities. For example, [Testdroid](https://cloud.testdroid.com/), several additional Testdroid Desired Capabilities are also provided \([learn more](http://docs.testdroid.com/appium/testdroid-desired-caps/)\).

In TestArchitect, desired capabilities are defined through the [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html) built-in action \([learn more](/TA_Automation/Topics/aut_app_cloud_testing_Appium_automation.html)\), or in a JSON file \([learn more](/TA_Automation/Topics/aut_app_cloud_testing_Appium_automation_json.html)\).

-   **[Creating mobile web application test](/TA_Automation/Topics/aut_app_cloud_testing_creating_tests.html)**  
Explains general workflow to test mobile web applications on iOS and Android cloud devices in WebDriver cloud based services.



