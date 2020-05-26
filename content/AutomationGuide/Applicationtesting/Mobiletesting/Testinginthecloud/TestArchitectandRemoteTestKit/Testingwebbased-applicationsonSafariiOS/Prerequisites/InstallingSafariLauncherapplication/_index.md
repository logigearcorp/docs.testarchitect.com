--- 
title: "Installing SafariLauncher application"
linktitle: "Installing SafariLauncher application"
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_safarilauncher.html
---
# Installing SafariLauncher application {#task_bgg_mqn_3y .task}

The SafariLauncher application is used to launch Safari and run tests against mobile Safari. This application is required to be used with Appium for running mobile web application testing on iOS cloud devices rented in the Remote TestKit service.

To build and deploy SafariLauncher on iOS devices, rented in the Remote TestKit cloud service, for mobile web application testing, perform the following steps:

1.  Use Xcode to open the SafariLauncher project by doing the following:

    1.  Right-click the Appium application.

    2.  Click **Show Package Contents**, and navigate to Contents/Resources/node\_modules/appium/node\_modules/appium-ios-driver/node\_modules/safari-launcher/.

    3.  Double-click SafariLauncher.xcodeproj.

2.  In **Targets**, select **SafariLauncher**.

3.  In **General** \> **Identify** \> **Bundle ID**, type com.bytearc.SafariLauncher, and in the **Team** drop-down list, select your Apple developers ID.

4.  Select the target iOS device to deploy the SafariLauncher application, and then run the project.

5.  When the build is successful, copy it to the following location Contents/Resources/node\_modules/appium/node\_modules/appium-ios-driver/build/SafariLauncher.


**Parent topic:**[Prerequisites](../../TA_Automation/Topics/aut_app_cloud_testing_iOS_prerequisites.html)

**Previous topic:**[Configuring Appium server locally](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS.html)

