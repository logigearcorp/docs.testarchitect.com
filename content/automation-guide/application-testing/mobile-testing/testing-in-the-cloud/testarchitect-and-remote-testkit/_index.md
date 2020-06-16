--- 
title: "TestArchitect and Remote TestKit"
linktitle: "TestArchitect and Remote TestKit"
description: "You can use Remote TestKit to remotely rent a wide variety of Android and iOS smartphones, with over 350 popular models to choose from, situated in locations around the world."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_RTK.html
keywords: "cloud testing, Remote TestKit"
---

You can use Remote TestKit to remotely rent a wide variety of Android and iOS smartphones, with over 350 popular models to choose from, situated in locations around the world.

We use the Remote TestKit cloud service, provided by NTT Resonant, to test mobile applications \([Learn more](https://appkitbox.com/en/testkit/)\). The test procedures and test results when using TestArchitect in a cloud do not differ from using it inside a regular local network.

The makers of Remote TestKit offer their service as either a web application, accessible immediately from a web browser, or by means of a client software application. For automating with TestArchitect, however, it is necessary that you [download](https://appkitbox.com/en/testkit/download) and [install](https://appkitbox.com/en/testkit/support/signin/signin13) the Remote TestKit Client application.

## Supported technical approach

TestArchitect supports testing on the following platforms on Remote TestKit:

-   WebKit:
    -   WebView, a software component used to embed web content in a mobile application, and native applications on [Android devices](/TA_Automation/Topics/aut_app_cloud_testing_RTK_Android.html).
-   WebDriver, or in particular [Appium](/TA_Automation/Topics/aut_appium.html):
    -   Supported Appium versions:
        -   Windows: Appium version [1.7.2](https://github.com/appium/appium/releases/)
        -   macOS: Appium version [1.7.2](https://github.com/appium/appium/releases/)
    -   Supported platforms:
        -   Google Chrome on Android devices. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_RTK_Chrome.html).\)
        -   Safari on iOS devices. \([Learn more](/TA_Automation/Topics/aut_app_testing_RTK_Safari.html).\)

1.  [Testing native applications](/TA_Automation/Topics/aut_app_cloud_testing_RTK_native_apps.html)  
Using TestArchitect, you can create and run automated tests for native applications on Android cloud devices rented in the Remote TestKit service.
2.  [Testing web based-applications on Chrome Android](/TA_Automation/Topics/aut_app_cloud_testing_RTK_Chrome.html)  
Using TestArchitect, you can create and run automated tests for mobile web applications \(Google Chrome\) on Android cloud devices rented in the Remote TestKit service.
3.  [Testing web based-applications on Safari iOS](/TA_Automation/Topics/aut_app_testing_RTK_Safari.html)  
Using TestArchitect, you can create and run automated tests for mobile web applications \(Safari\) on iOS cloud devices rented in the Remote TestKit service.



