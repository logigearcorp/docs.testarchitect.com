--- 
title: "Uninstall command of the Android command line tool"
linktitle: "Uninstall command of the Android command line tool"
weight: 3
aliases: 
    - /Android/Topics/Android_command_line_tool_uninstall.html
---

The Uninstall command is used to uninstall an application from an Android device.

**Important:** The Android command line tool is only supported on Windows.

**Note:**

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.
-   It is highly recommended that you do not combine Android commands with the pipe operator \( \| \) to pass the output of one Android command to another for further processing.

**Remember:**

The Android command line tool does not have sufficient privileges to remove a device admin application. It is recommended that you deactivate the device admin rights of the application to allow the tool to remove it. To deactivate device admin rights, carry out the following procedure:

1.  On the Android device, select **Settings** \> **Security**.
2.  Select the **Device administrators** option.
3.  Tap the application you want to disable device admin rights of, then click **Deactivate**.

The syntax of the Uninstall command is as follows:

-   Windows platform: `ast.exe uninstall "Package Name" [-s "Unique ID of the Target Device"] [Options]`

**Tip:**

-   The uninstall "Package Name" and \[-s "Unique ID of the Target Device"\] parameters can be placed in any order.
-   \[Options\], if included, must appear at the end of the command.

The meaning of the parameters is explained below.

-   **"Package Name"**

    The package name of the AUT.

    To obtain the package name of an Android application:

    1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

        ![](/images/Android/Images/Android_copy_package_name.png)

    3.  Paste the copied value into the Package Name parameter in the Start command.
-   **\[-s "Unique ID of Target Device"\]**

    The unique ID of the targeted Android device. This parameter is mandatory if multiple Android devices are connected to the host PC via USB cable. Conversely, it is optional if only one Android device is connected to the host PC via USB.

    To obtain the unique ID of an Android device:

    1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    2.  Select the device whose unique ID you wish to obtain.
    3.  Click ![](/images/Android/Images/android_copy_ID.png) on the Android Instrumentation Tool's toolbar to copy the unique ID to the clipboard.
    4.  Paste the copied content into the unique ID parameter in the Start command.
-   **\[Options\]**

    \(Optional\) Two possible options for this argument are:

    -   -k: Keep the data and cache directories after uninstalling the package.
    -   -c: \(Default option\) Delete all data associated and uninstall the package.

**Note:**

-   You can only uninstall an AUT from one Android device per execution.
-   If the AUT to be uninstalled is running on the targeted Android device, the Android command line tool terminates that AUT's process and then uninstalls it.

The following table describes output messages you may encounter while using the Uninstall command.

|Message|Description|
|-------|-----------|
|<Package Name\> is uninstalled successfully.|The specified AUT has been uninstalled successfully.|
|<Package Name\> cannot be uninstalled.|An attempt to uninstall a specified AUT could not be completed.|
|Cannot connect to the device.|This error occurs when the Android command line tool cannot connect to the targeted Android device.|
|Cannot find the device.|This error occurs when the Android command line tool cannot find the targeted Android device.|
|Unknown error.|An unknown error has occurred that is not recognized by the Android command line tool.|
|There are multiple Android devices connected to the tool. You must specify the exact Unique ID of the target device.|This error is commonly encountered when there are multiple Android devices connected to the host PC via USB cable, but the unique ID parameter is omitted.|
|<Package Name\> cannot be found.|Commonly caused when the Android command line tool cannot find the package name of the selected AUT.|

-   **[Uninstalling an Android application from the command line tool](/Android/Topics/Android_command_line_tool_uninstall_step.html)**  
This example demonstrates the steps involved in using the Uninstall command with the Android command line tool.

**Parent topic:**[Android command line tool](/Android/Topics/Android_command_line_tool.html)

**Previous topic:**[Start command of the Android command line tool](/Android/Topics/Android_command_line_tool_start.html)

**Next topic:**[Help command of the Android command line tool](/Android/Topics/Android_command_line_tool_help.html)

**Related information**  


[execute command](/TA_Automation/Topics/bia_execute_command.html)

