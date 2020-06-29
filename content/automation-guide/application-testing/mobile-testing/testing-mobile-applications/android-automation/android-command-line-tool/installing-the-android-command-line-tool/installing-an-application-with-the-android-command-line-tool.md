--- 
title: "Installing an application with the Android command line tool"
linktitle: "Installing an application with the Android command line tool"
description: "This example demonstrates the steps involved in running the Android command line tool with the Install command."
weight: 1
aliases: 
    - /Android/Topics/Android_command_line_tool_install_step.html
keywords: "Android, command line tool, installing app, steps, command line tool, Android, installing app, steps, installation, Android command line tool, steps, installing"
---

This example demonstrates the steps involved in running the Android command line tool with the Install command.

{{<important>}} The Android command line tool is only supported on Windows.

{{<note>}}

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.

Ensure that the following requirements are met:

-   TestArchitect Agent is installed on the targeted Android device \(refer to [Installing TestArchitect Agent](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/installing-testarchitect-agent)\).
-   The Android command line tool ast.exe \(Windows\) can be found at the following location when TestArchitect is installed:

    -   Windows platform: TA\_INSTALL\_DIR/device/android.
-   The source .apk file which you would like to install on the Android device is available on the host PC.

1.  At the host PC's command prompt, change the current working directory to TA\_INSTALL\_DIR/device/android.

2.  Type ast.exe install "D:\\APK files\\CarRental.apk" -s "2c4401c15d52" to install the Car Rental.apk file residing under D:\\APK files into the targeted Android device whose unique ID is 2c4401c15d52.

    Review [Install command](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-command-line-tool/installing-the-android-command-line-tool/#p_jfs_j42_5l) to understand the Install command's syntax.

    {{<tip>}}

    -   If there is only one Android device connected to the host PC via USB cable, the unique ID parameter is optional.
    -   To obtain the unique ID of an Android device:

        1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
        2.  Select the device whose unique ID you wish to obtain.
        3.  Click ![](/images/Android/Images/android_copy_ID.png) on the Android Instrumentation Tool's toolbar to copy the unique ID to the clipboard.
        4.  Paste the copied content into the unique ID parameter in the Install command.
3.  Press Enter on your keyboard to execute the Install command.


The selected application is installed on the target Android device, and the <Application Name\> is installed successfully message appears in the command line window.


