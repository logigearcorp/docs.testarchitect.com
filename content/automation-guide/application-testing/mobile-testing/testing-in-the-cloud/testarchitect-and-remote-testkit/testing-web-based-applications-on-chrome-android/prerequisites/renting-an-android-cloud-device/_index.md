--- 
title: "Renting an Android cloud device"
linktitle: "Renting an Android device in Remote TestKit"
description: "Describes how to rent an Android cloud device and enable the Android adb command."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_RTK_renting.html
keywords: "cloud testing, Remote TestKit, rent Android device, Remote TestKit, rent Android device"
---

Describes how to rent an Android cloud device and enable the Android adb command.

Ensure that the following requirements are met:

-   [Set up](/TA_Automation/Topics/aut_app_cloud_testing_Android_configuration.html) Android development environment.
-   [Download](https://appkitbox.com/en/testkit/download) and [install](https://appkitbox.com/en/testkit/support/signin/signin14) the Remote TestKit Client application. Note that you must also have an account to access and use the Remote TestKit Client service.

1.  Launch the Remote TestKit Client application, and then log in with your username and password.

2.  In the Device list - Remote TestKit dialog box, rent and launch a device.

    ![](/images/TA_Automation/Images/Device_list_RTK_dialog.png)

    **Remember:** Note down the Android version of the rented device. This information is necessary while [configuring](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK.html) Appium in your local host.

3.  When your device appears, enable the use of the adb command by clicking the **ADT/DDMS/adb** ![](/images/TA_Automation/Images/RTK_adb_btn.png) button. A grey icon indicates that adb is not activated yet.

    **Fastpath:** Alternatively, click **Settings** \> **ADT/DDMS/adb** from the main menu.

    ![](/images/TA_Automation/Images/RTK_device.png)

4.  On your first use of Remote TestKit Client, you are asked to provide the location the adb command. Browser to the location of adb based on the location of the Android SDK, <SDK\_INSTALL\_DIR\>\\android-sdk-windows\\platform-tools\\adb.exe, and then click **Apply**.

    ![](/images/TA_Automation/Images/RTK_select_adb.png)

    Upon successful adb activation, the formerly grey ADB icon becomes green ![](/images/TA_Automation/Images/RTK_adb_activated.png).

5.  If your Google Chrome's version on the rented Android cloud device is 53 or later, [update](/TA_Automation/Topics/aut_ChromeDriver.html) the version of ChromeDriver. Otherwise, skip this step.





