--- 
title: "Android command line tool"
linktitle: "Android command line tool"
description: "Rather than re-signing, installing, and then launching an Android AUT via the Android Instrumentation Tool, you can perform these operations in the command line of both Windows and Linux."
weight: 5
aliases: 
    - /Android/Topics/Android_command_line_tool.html
keywords: "Android, command line tool"
---

Rather than re-signing, installing, and then launching an Android AUT via the Android Instrumentation Tool, you can perform these operations in the command line of both Windows and Linux.This feature is useful for continuous integration \(CI\) development. Specifically, the Android command line tool allows you to create batch files containing action lines that automate the installation, launching, and uninstallation of applications on Android devices.

**Important:** The Android command line tool is only supported on Windows.

**Note:**

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.

The Android command line tool ast.exe \(Windows\) can be found at the following locations when TestArchitect is installed:

-   Windows platform: TA\_INSTALL\_DIR/device/android.

The Android command line tool allows you to perform the following operations on an Android device:

-   Install an application
-   Launch an installed application
-   Uninstall a re-signed application

    **Remember:**

    The Android command line tool does not have sufficient privileges to remove a device admin application. It is recommended that you deactivate the device admin rights of the application to allow the tool to remove it. To deactivate device admin rights, carry out the following procedure:

    1.  On the Android device, select **Settings** \> **Security**.
    2.  Select the **Device administrators** option.
    3.  Tap the application you want to disable device admin rights of, then click **Deactivate**.

**Note:** It is highly recommended that you do not combine Android commands with the pipe operator \( \| \) to pass the output of one Android command to another for further processing.

1.  [Installing the Android command line tool](/Android/Topics/Android_command_line_tool_install.html)  
The Install command is used to re-sign an Android application, and then to install it.
2.  [Start command of the Android command line tool](/Android/Topics/Android_command_line_tool_start.html)  
The Start command is used to launch an Android application from an Android device.
3.  [Uninstall command of the Android command line tool](/Android/Topics/Android_command_line_tool_uninstall.html)  
The Uninstall command is used to uninstall an application from an Android device.
4.  [Help command of the Android command line tool](/Android/Topics/Android_command_line_tool_help.html)  
The Help command, used from a Windows command prompt or a Linux terminal, can be used to retrieve descriptive information on the functionality and options of the Android command line tool.




**Related information**  


[execute command](/TA_Automation/Topics/bia_execute_command.html)

