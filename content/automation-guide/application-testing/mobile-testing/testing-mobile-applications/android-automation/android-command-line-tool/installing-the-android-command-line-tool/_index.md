--- 
title: "Installing the Android command line tool"
linktitle: "Installing the Android command line tool"
weight: 1
aliases: 
    - /Android/Topics/Android_command_line_tool_install.html
---

The Install command is used to re-sign an Android application, and then to install it.

**Important:** The Android command line tool is only supported on Windows.

**Note:**

-   The Android command line tool is only applicable when one or more devices are connected to the host PC via USB cable.
-   It is highly recommended that you do not combine Android commands with the pipe operator \( \| \) to pass the output of one Android command to another for further processing.

The syntax of the Install command are as follows:

-   Windows: `ast.exe install "Path to APK" [-s "Unique ID of the Target Device"] -f`

**Tip:**

-   The install "Path to APK" and \[-s "Unique ID of the Target Device"\] parameters can be placed in any order.
-   The -f flag, if used, must appear at the end of the command.

Parameters are as follows:.

-   **"Path to APK"**

    Full path to the file to be installed on the Android device.

-   **\[-s "Unique ID of Target Device"\]**

    Unique ID of the targeted Android device. This parameter is required if multiple Android devices are connected to the host PC via USB cable. Conversely, this parameter is optional if only one Android device is connected to the host PC via USB cable.

    To obtain the unique ID of an Android device:

    1.  Open the [Android Instrumentation Tool](/images//Images/Android/Topics/Android_Instrumentation_tool.html) dialog box.
    2.  Select the device whose unique ID you wish to obtain.
    3.  Click ![](/images//Images/Android/Images/android_copy_ID.png) on the Android Instrumentation Tool's toolbar to copy the unique ID to the clipboard.
    4.  Paste the copied content into the unique ID parameter in the Install command.
-   **-f**

    \(Optional\) Force the AUT to be installed in the following cases:

    -   If an existing AUT has the same certificate as LogiGear, the Install command removes that AUT but keeps its data before installing the new AUT.
    -   If an existing AUT does not have the same certificate as LogiGear, the Install command removes that AUT and clears its data before installing the new AUT.

**Note:**

-   One Install command line is limited to installing only one AUT to one Android device at a time.
-   The Android command line tool automatically saves a file of the re-signed AUT at the same location with the source .apk file. The new name of the re-signed file has the suffix \_signed appended to the original .apk file name. For example, CarRental\_signed.apk.
-   If the new re-signed file name is the same as an existing file name, the new file overwrites the existing file.
-   If the AUT you would like to install on an Android device has been installed earlier, the Android command line tool uninstalls and then reinstalls that AUT.

The following table describes the output messages you may encounter while using the Install command.

|Message|Description|
|-------|-----------|
|The file at location <File Location\> cannot be found.|This error is commonly encountered when attempting to re-sign or install a specified .apk file, but the file cannot be found.|
|<File Name\> is signed successfully.|The specified .apk file has been signed or re-signed successfully.|
|<File Name\> cannot be signed.

|An attempt to sign or re-sign a specified .apk file could not be completed.

|
|Cannot save the file after resigning.|Often caused when the directory in which you want to save the re-signed .apk file has the read-only attribute set.|
|Cannot connect to the device.|This error occurs when the Android command line tool cannot connect to the targeted Android device.|
|Cannot find the device.|This error occurs when the Android command line tool cannot find the targeted Android device.|
|<File Name\> is installed successfully.|The specified .apk file has been installed successfully.|
|<File Name\> cannot be installed.|An attempt to install a specified .apk file could not be completed.|
|There are multiple Android devices connected to the tool. You must specify the exact Unique ID of the target device.|This error is commonly encountered when there are multiple Android devices connected to the host PC via USB cable, but the unique ID parameter is omitted.|
|Unknown error.|An unknown error has occurred that is not recognized by the Android command line tool.|

-   **[Installing an application with the Android command line tool](/Android/Topics/Android_command_line_tool_install_step.html)**  
This example demonstrates the steps involved in running the Android command line tool with the Install command.

**Parent topic:**[Android command line tool](/Android/Topics/Android_command_line_tool.html)

**Next topic:**[Start command of the Android command line tool](/Android/Topics/Android_command_line_tool_start.html)

**Related information**  


[Installing a testable Android application](/Android/Topics/Installing_applications.html)

[Re-signing the Android application](/Android/Topics/Installing_applications_resigning.html)

[Installing the re-signed Android application onto a target device](/Android/Topics/Installing_applications_to_a_target_device.html)

[execute command](/TA_Automation/Topics/bia_execute_command.html)

