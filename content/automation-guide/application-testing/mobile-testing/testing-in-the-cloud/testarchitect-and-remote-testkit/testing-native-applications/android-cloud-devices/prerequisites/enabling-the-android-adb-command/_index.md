--- 
title: "Enabling the Android adb command"
linktitle: "Enabling the Android adb command"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Android_adb.html
---

Remote TestKit provides standard adb \(Android Debug Bridge\) functionality to enable the use of adb commands to access remote devices. This is the equivalent of having a smartphone device connected directly to your computer via USB.

Ensure that the following requirements are met:

-   [Download](https://appkitbox.com/en/testkit/download) and [install](https://appkitbox.com/en/testkit/support/signin/signin14) the Remote TestKit Client application. Note that you must also have an account to access and use the Remote TestKit Client service.
-   From the [Android web site](https://developer.android.com/studio/index.html), download the Android SDK, and then unzip the archive to a location of your choosing.

1.  Launch the Remote TestKit Client application, and then log in with your username and password.

2.  In the Device list - Remote TestKit dialog box, rent and launch a device.

    ![](/images//Images/Device_list_RTK_dialog.png)

3.  When your device appears, enable the use of the adb command by clicking the **ADT/DDMS/adb** ![](/images//Images/RTK_adb_btn.png) button. A grey icon indicates that adb is not activated yet.

    **Fastpath:** Alternatively, click **Settings** \> **ADT/DDMS/adb** from the main menu.

    ![](/images//Images/RTK_device.png)

4.  On your first use of Remote TestKit Client, you are asked to provide the location the adb command. Browser to the location of adb based on the location of the Android SDK, <SDK\_INSTALL\_DIR\>\\android-sdk-windows\\platform-tools\\adb.exe, and then click **Apply**.

    ![](/images//Images/RTK_select_adb.png)

    Upon successful adb activation, the formerly grey ADB icon becomes green ![](/images//Images/RTK_adb_activated.png).


**Parent topic:**[Prerequisites](/TA_Automation/Topics/aut_app_cloud_testing_Android_prerequisites.html)

**Next topic:**[Installing TestArchitect Agent](/TA_Automation/Topics/aut_app_cloud_testing_Android_agent.html)

