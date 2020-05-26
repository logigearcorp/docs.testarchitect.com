--- 
title: "Setting up Android development environment"
linktitle: "Setting up Android development environment"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Android_configuration.html
---
# Setting up Android development environment {#task_sdc_dt3_gy .task}

Describes how to set up the Android development environment.

Before you can automate testing Chrome on Android cloud devices, you must install the Android SDK. Installing the Android SDK also installs the AVD Manager.

1.  From the [Android web site](https://developer.android.com/studio/index.html), download the Android SDK.

2.  Unzip the archive to a location of your choosing.

3.  Configure the ANDROID\_HOME environment variable based on the location of the Android SDK.

    For example:

    ```
    set ANDROID_HOME=D:\<SDK_INSTALL_DIR>\android-sdk-windows
    set PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools
    ```

    The Android SDK download does not include many specific SDK platforms. To automate web apps on Chrome on a specific Android cloud device, you need to download and install the correct SDK platform that matches with the Android version of the cloud device. You do this by using the Android SDK.

4.  To open the Android SDK Manager dialog box, type the following command into the command prompt window.

    ```
    android
    ```

    The Android SDK Manager dialog box appears.

    ![](../Images/Android_SDK_manager_dlg.png)

5.  From the **Packages** list, select an appropriate SDK platform.

    For example, if the platform version of your target Android cloud device is 5.1 \(API level 22\), install the respective SDK platform.

    ![](../Images/Android_SDK_manager_3_dlg.png)

6.  Click the **Install packages…​** button to complete the download and installation.

    **Note:** You might want to install all the available updates, but be aware it might take longer, as each API is a large download.


**Parent topic:**[Prerequisites](../../TA_Automation/Topics/aut_app_cloud_testing_RTK_Android_Chrome_prerequisites.html)

**Next topic:**[Renting an Android device in Remote TestKit](../../TA_Automation/Topics/aut_app_cloud_testing_RTK_renting.html)

