--- 
title: "Configuring Appium server locally"
linktitle: "Configuring Appium server locally"
description: "Describes detailed steps to configure Appium server locally on Windows machines."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK.html
keywords: "cloud testing, Remote TestKit, local Appium, Chrome Android, Remote TestKit, local Appium, Chrome Android"
---

Describes detailed steps to configure Appium server locally on Windows machines.

Ensure that the following requirements are met:

-   [Set up](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/setting-up-android-development-environment) Android development environment.
-   [Download](https://appkitbox.com/en/testkit/download) and [install](https://appkitbox.com/en/testkit/support/signin/signin14) the Remote TestKit Client application. Note that you must also have an account to access and use the Remote TestKit Client service.
-   [Rent](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/renting-an-android-cloud-device) an Android cloud device in Remote TestKit.
-   [Download](https://appium.io/downloads.html) and install the Appium desktop application for Windows machine.

1.  Launch the Appium application.

2.  In the Appium dialog box, click the **Android Settings** ![](/images/TA_Automation/Images/appium_settings_btn.png) button.

    ![](/images/TA_Automation/Images/Appium_dlg.png)

3.  In the Android Settings dialog box, under Application panel, specify **Use Browser** as Chrome.

    ![](/images/TA_Automation/Images/Android_settings_dlg.png)

4.  Under Capabilities panel, specify the following information.

    -   **Platform Name**: Android
    -   **Automation Name**: Appium
    -   **PlatformVersion**: Android version of the cloud device rented on Remote TestKit. Note that, the SDK package of this Android version must also be available. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/setting-up-android-development-environment).\)
    ![](/images/TA_Automation/Images/Android_settings_2_dlg.png)

5.  In the Appium dialog box, click the **Developer Setting** ![](/images/TA_Automation/Images/user_settings_btn.png) button.

6.  In the Developer Settings dialog box, select the **Custom Server Flags** check box, and then input --log-level warn.

    This [flag](http://appium.io/slate/en/v1.2.0/?ruby#server-flags) suppresses debugging messages, including warning, error, and fatal messages, logging to the console to prevent the Appium server from crashing unexpectedly.

    ![](/images/TA_Automation/Images/Developer_settings_dlg.png)

7.  In the Appium dialog box, start the Appium server by clicking the **Launch the Appium Node Server** ![](/images/TA_Automation/Images/laucn_appium_server_btn.png) button.

    The Appium server is started successfully from your local host.

    ![](/images/TA_Automation/Images/Appium_dlg_1.png)





