--- 
title: "Uninstalling an Android application from the command line tool"
linktitle: "Uninstalling an Android application from the command line tool"
description: "This example demonstrates the steps involved in using the Uninstall command with the Android command line tool."
weight: 1
aliases: 
    - /Android/Topics/Android_command_line_tool_uninstall_step.html
keywords: "Android, command line tool, uninstalling app, steps, command line tool, Android, uninstalling app, steps, uninstalling, Android command line tool, steps"
---

This example demonstrates the steps involved in using the Uninstall command with the Android command line tool.

{{<important>}} The Android command line tool is only supported on Windows.

{{<note>}}

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.

Ensure that the following requirements are met:

-   TestArchitect Agent is installed on the targeted Android device \(refer to [Installing TestArchitect Agent](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/installing-testarchitect-agent)\).
-   The Android command line tool does not have sufficient privileges to remove a device admin application. It is recommended that you deactivate the device admin rights of the application to allow the tool to remove it. To deactivate device admin rights, carry out the following procedure:

    1.  On the Android device, select **Settings** \> **Security**.
    2.  Select the **Device administrators** option.
    3.  Tap the application you want to disable device admin rights of, then click **Deactivate**.
-   The Android command line tool, ast.exe \(Windows\), can be found at the following location when TestArchitect is installed:

    -   Windows platform: TA\_INSTALL\_DIR/device/android.

1.  At the host PC's command prompt window, change the current working directory to TA\_INSTALL\_DIR/device/android.

2.  Type ast.exe uninstall "com.logigear" -s "2c4401c15d52" -k to uninstall the Car Rental application on the targeted Android device whose unique ID is 2c4401c15d52, but to keep the data and cache directories after uninstalling the package.

    Review [Uninstall command](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-command-line-tool/uninstall-command-of-the-android-command-line-tool/#p_sxr_4t2_5l) to understand the Uninstall command's syntax.

    {{<tip>}}

    -   If there is only one Android device connected to the host PC via USB cable, the unique ID parameter is optional.
    -   To obtain the package name of an Android application:
        1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](/images/Android/Images/Android_copy_package_name.png)

        3.  Paste the copied value into the Package Name parameter in the Uninstall command.
    -   To obtain the unique ID of an Android device:
        1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
        2.  Select the device whose unique ID you wish to obtain.
        3.  Click ![](/images/Android/Images/android_copy_ID.png) on the Android Instrumentation Tool's toolbar to copy the unique ID to the clipboard.
        4.  Paste the copied content into the unique ID parameter in the Uninstall command.
3.  Press Enter on your keyboard to execute the Uninstall command.


The selected application is uninstalled from the target Android device, and the <Package Name\> is uninstalled successfully message appears in the command line window.


