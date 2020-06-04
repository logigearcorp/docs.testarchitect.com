--- 
title: "-"
linktitle: "get device log file"
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_get_device_log_file.html
---
keyword: [Android log file, Android logcat, logcat command, get device log file, Mobile log file]
---

# get device log file

## Description

Capture the Android system log file associated with the Android [logcat](https://developer.android.com/studio/command-line/logcat.html) command, and save it as a file to the test controller.

## Arguments

-   **path**

    Location \(absolute path\) to which to save the log file on the test controller.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Android.

## Notes

-   This action is not currently supported on Linux controllers.
-   path argument:
    -   The argument may specify a file, or a path without a file.
    -   If a file name is specified, it must have an extension of .txt, .log, .dat.
    -   If no file name is specified, the file is given a unique name derived from its device name and device ID.
    -   For a Windows-based test controller, use backward slashes as separators for the path location.
-   If the log file already exists at the specified location on the test controller, it is overwritten.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example

Suppose that after launching a given AUT on the target device, you want your test to inspect something in the device's Android system log file. In this procedure, you issue a get device log file action to write the log to the file device.log on the test controller. You then follow up by disconnecting from the device, which is necessary to allow you to access the file on the host controller. You check that the file exists, and if it does, write out its contents to a variable as a single string. You can then follow up by inspecting the variable's string for whatever information your test requires..

**Action Lines**

![](/images//Images/bia_get_device_log_file_pgm.r02.png)

**Result**

A typical device log file:

![](/images//Images/bia_get_device_log_file_aut.r02.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[get device information](/TA_Automation/Topics/bia_get_device_information.html)

**Next topic:**[get device screen size](/TA_Automation/Topics/bia_get_device_screen_size.html)

