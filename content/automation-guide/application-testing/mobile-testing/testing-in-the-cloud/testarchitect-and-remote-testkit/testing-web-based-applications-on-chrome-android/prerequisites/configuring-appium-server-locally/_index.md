--- 
title: "Configuring Appium server locally"
linktitle: "Configuring Appium server locally"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK.html
---

Describes detailed steps to configure Appium server locally on Windows machines.

Ensure that the following requirements are met:

-   [Set up](/TA_Automation/Topics/aut_app_cloud_testing_Android_configuration.html) Android development environment.
-   [Download](https://appkitbox.com/en/testkit/download) and [install](https://appkitbox.com/en/testkit/support/signin/signin14) the Remote TestKit Client application. Note that you must also have an account to access and use the Remote TestKit Client service.
-   [Rent](/TA_Automation/Topics/aut_app_cloud_testing_RTK_renting.html) an Android cloud device in Remote TestKit.
-   [Download](https://appium.io/downloads.html) and install the Appium desktop application for Windows machine.

1.  Launch the Appium application.

2.  In the Appium dialog box, click the **Android Settings** ![](/images//Images/appium_settings_btn.png) button.

    ![](/images//Images/Appium_dlg.png)

3.  In the Android Settings dialog box, under Application panel, specify **Use Browser** as Chrome.

    ![](/images//Images/Android_settings_dlg.png)

4.  Under Capabilities panel, specify the following information.

    -   **Platform Name**: Android
    -   **Automation Name**: Appium
    -   **PlatformVersion**: Android version of the cloud device rented on Remote TestKit. Note that, the SDK package of this Android version must also be available. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_Android_configuration.html).\)
    ![](/images//Images/Android_settings_2_dlg.png)

5.  In the Appium dialog box, click the **Developer Setting** ![](/images//Images/user_settings_btn.png) button.

6.  In the Developer Settings dialog box, select the **Custom Server Flags** check box, and then input --log-level warn.

    This [flag](http://appium.io/slate/en/v1.2.0/?ruby#server-flags) suppresses debugging messages, including warning, error, and fatal messages, logging to the console to prevent the Appium server from crashing unexpectedly.

    ![](/images//Images/Developer_settings_dlg.png)

7.  In the Appium dialog box, start the Appium server by clicking the **Launch the Appium Node Server** ![](/images//Images/laucn_appium_server_btn.png) button.

    The Appium server is started successfully from your local host.

    ![](/images//Images/Appium_dlg_1.png)


**Parent topic:**[Prerequisites](/TA_Automation/Topics/aut_app_cloud_testing_RTK_Android_Chrome_prerequisites.html)

**Previous topic:**[Renting an Android device in Remote TestKit](/TA_Automation/Topics/aut_app_cloud_testing_RTK_renting.html)

**Next topic:**[Updating ChromeDriver for Google Chrome on Android cloud devices](/TA_Automation/Topics/aut_ChromeDriver.html)

