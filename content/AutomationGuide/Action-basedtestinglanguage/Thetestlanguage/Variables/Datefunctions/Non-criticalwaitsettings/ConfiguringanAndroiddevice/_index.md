--- 
title: "Configuring an Android device for testing Google Chrome"
linktitle: "Configuring an Android device"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android_configurations.html
---
# Configuring an Android device for testing Google Chrome {#task_cdj_fc4_gq .task}

This section describes the essential configurations needed to ensure that automated tests on Chrome Android run successfully and stably.

The following configurations must be set up on your Android test device prior to automating with TestArchitect:

-   Enable the Unknown sources option: This allows Android to install applications that originate from sources other than the Google Play.

    -   On Android 4.0 and higher:
        1.  Select **Settings** \> **Security**.
        2.  Enable the **Unknown sources** option.
    -   On Android version lower than 4.0:
        1.  Select **Settings** \> **Applications**.
        2.  Enable the **Unknown sources** option.
-   Enable the USB debugging option:

    -   On Android 4.0 and higher, enable this option in **Settings** \> **Developer options**.

        **Note:** On Android 4.2 and higher, the **Developer options** screen is hidden by default. To make it visible, go to **Settings** \> **About phone** and tap **Build number** seven times.

    -   On Android version lower than 4.0, enable this option in **Settings** \> **Applications** \> **Development**.
    **Remember:**

    -   When you connect a device running Android 4.2.2 or higher to your computer, the system displays a dialog box asking whether to accept an RSA key that allows debugging through this computer. Click **OK**.

        **Note:**

        -   To skip this dialog box in the future, select the **Always allow from this computer** check box.
        -   This security mechanism protects user devices because it ensures that USB debugging and other adb commands cannot be executed unless you are able to unlock the device and acknowledge the dialog box.
    -   For HTC smart phones running Android 2.3 or later, when you plug in the USB cable, a pop-up window appears offering two options: **HTC synchronize** and **Charge only**. Select the **Charge only** option.
-   Grant permissions at run time: Beginning with Android 6.0 \(API level 23\), users are no longer asked to grant permissions to apps during installation. Instead, by default, users are asked to grant permissions to an app while it is running \([learn more](http://developer.android.com/intl/vi/training/permissions/requesting.html)\). This entails a system dialog box that appears at runtime and prompts the user to grant or deny permissions. This dialog box can potentially cause ongoing automated tests to hang unexpectedly.

    ![](../../Android/Images/Run_time_permission_Android.png)

    An alternative to granting or denying permissions of a given app is to establish such permissions in Android settings. Hence, to avoid the appearance of this system dialog box, do the following:

    1.  Go to **Settings** \> **Apps** \> **"name of the AUT"**.

    2.  Tap **Permissions**.

    3.  Grant all necessary permissions.


**Parent topic:**[Google Chrome Android testing prerequisites](../../TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_prerequesites.html)

**Next topic:**[Installing TestArchitect Agent onto Android devices](../../TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_installing_TA_Agent.html)

