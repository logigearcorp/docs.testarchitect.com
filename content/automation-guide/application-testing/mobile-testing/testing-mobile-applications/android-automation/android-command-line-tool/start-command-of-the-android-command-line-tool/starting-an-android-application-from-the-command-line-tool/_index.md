--- 
title: "Starting an Android application from the command line tool"
linktitle: "Starting an Android application from the command line tool"
description: "This example demonstrates the steps involved in launching an Android application using the Android command line tool with the Start command"
weight: 1
aliases: 
    - /Android/Topics/Android_command_line_tool_start_step.html
keywords: "Android, command line tool, launching app, steps, command line tool, Android, launching app, steps, launching, Android command line tool, steps, starting"
---

This example demonstrates the steps involved in launching an Android application using the Android command line tool with the Start command

{{<important>}} The Android command line tool is only supported on Windows.

{{<note>}}

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.

Ensure that the following requirements are met:

-   TestArchitect Agent is installed on the targeted Android device \(refer to [Installing TestArchitect Agent](/Android/Topics/Installing_TA_agent.html) \).
-   The Android command line tool \(ast.exe in Windows can be found at the following location when TestArchitect is installed:

    -   Windows: TA\_INSTALL\_DIR/LogiGear/TestArchitect/device/android.

1.  At the host PC's command prompt window, change the current working directory to TA\_INSTALL\_DIR/device/android.

2.  Type ast.exe start "com.logigear" -s "2c4401c15d52" to start the Car Rental application installed on the targeted Android device whose unique ID is 2c4401c15d52.

    Review [Start command](/Android/Topics/Android_command_line_tool_start.html#p_n3t_vr2_5l) to understand the Start command's syntax.

{{<tip>}}

    -   If there is only one Android device connected to the host PC via USB cable, the unique ID parameter is optional.
    -   To obtain the package name of an Android application:

        1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](/images/Android/Images/Android_copy_package_name.png)

        3.  Paste the copied value into the Package Name parameter in the Start command.
    -   To obtain the unique ID of an Android device:

        1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
        2.  Select the device whose unique ID you wish to obtain.
        3.  Click ![](/images/Android/Images/android_copy_ID.png) on the Android Instrumentation Tool's toolbar to copy the unique ID to the clipboard.
        4.  Paste the copied content into the unique ID parameter in the Start command.
3.  Press Enter on your keyboard to execute the Start command.


The selected application is launched on your targeted Android device, and the <Package Name\> is started successfully message appears in the command line window.


