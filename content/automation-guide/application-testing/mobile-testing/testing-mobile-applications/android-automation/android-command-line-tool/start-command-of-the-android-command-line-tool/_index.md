--- 
title: "Start command of the Android command line tool"
linktitle: "Start command of the Android command line tool"
weight: 2
aliases: 
    - /Android/Topics/Android_command_line_tool_start.html
---

The Start command is used to launch an Android application from an Android device.

**Important:** The Android command line tool is only supported on Windows.

**Note:**

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.
-   It is highly recommended that you do not combine Android commands with the pipe operator \( \| \) to pass the output of one Android command to another for further processing.

The syntax of the Start command is as follows:

-   Windows platform: `ast.exe start "Package Name" [-s "Unique ID of the Target Device"]`

**Tip:** The start "Package Name" and \[-s "Unique ID of the Target Device"\] parameters can be placed in any order.

The meaning of the parameters is as follows:

-   **"Package Name"**

    Package name of an AUT.

    To obtain the package name of an Android application:

    1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

        ![](/images//Images/Android/Images/Android_copy_package_name.png)

    3.  Paste the copied value into the Package Name parameter in the Start command.
-   **\[-s "Unique ID of Target Device"\]**

    Unique ID of the target Android device. This parameter is mandatory if multiple Android devices are connected to the host PC via USB cable. Conversely, it is optional if only one Android device is connected to the host PC via USB.

    To obtain the unique ID of an Android device:

    1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    2.  Select the device whose unique ID you wish to obtain.
    3.  Click ![](/images//Images/Android/Images/android_copy_ID.png) on the Android Instrumentation Tool's toolbar to copy the unique ID to the clipboard.
    4.  Paste the copied content into the unique ID parameter in the Start command.

The following table describes output messages you may encounter while using the Start command.

|Message|Description|
|-------|-----------|
|App <Package Name\> is started successfully.|The specified package name of an AUT has been launched successfully.|
|App <Package Name\> cannot be started.|Commonly caused when the Android command line tool cannot launch the specified package name of an AUT.|
|Cannot connect to the device.|This error occurs when the Android command line tool cannot connect to the targeted Android device.|
|Cannot find the device.|This error occurs when the Android command line tool cannot find the targeted Android device.|
|Unknown error.|An unknown error has occurred that is not recognized by the Android command line tool.|
|There are multiple Android devices connected to the tool. You must specify the exact Unique ID of the target device.|This error is commonly encountered when there are multiple Android devices connected to the host PC via USB cable, but the unique ID parameter is omitted.|
|<Package Name\> cannot be found.|The Android command line tool cannot locate the specified package name of an AUT.|

-   **[Starting an Android application from the command line tool](/Android/Topics/Android_command_line_tool_start_step.html)**  
This example demonstrates the steps involved in launching an Android application using the Android command line tool with the Start command

**Parent topic:**[Android command line tool](/Android/Topics/Android_command_line_tool.html)

**Previous topic:**[Installing the Android command line tool](/Android/Topics/Android_command_line_tool_install.html)

**Next topic:**[Uninstall command of the Android command line tool](/Android/Topics/Android_command_line_tool_uninstall.html)

**Related information**  


[Launching an Android AUT](/Android/Topics/Launching_an_AUT.html)

[execute command](/TA_Automation/Topics/bia_execute_command.html)

