--- 
title: "get device log file"
linktitle: "get device log file"
description: "Description Capture the Android system log file associated with the Android logcat command, and save it as a file to the test controller. Arguments path Location (absolute path) to which to save the ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_get_device_log_file.html
keywords: "built-in actions, get device log file, get device log file (action), Android (action), get device log file, Android log file, Android logcat, logcat command, Mobile log file"
---

## {{< expand >}} Description

Capture the Android system log file associated with the Android [logcat](https://developer.android.com/studio/command-line/logcat.html) command, and save it as a file to the test controller.

## {{< expand >}} Arguments

-   **path**

    Location \(absolute path\) to which to save the log file on the test controller.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms {{< permerlink >}} {#bia_get_device_log_file__section_r3t_wbl_zcb} 

Use of this action is supported on the following systems/platforms: Android.

## {{< expand >}} Notes

-   This action is not currently supported on Linux controllers.
-   path argument:
    -   The argument may specify a file, or a path without a file.
    -   If a file name is specified, it must have an extension of .txt, .log, .dat.
    -   If no file name is specified, the file is given a unique name derived from its device name and device ID.
    -   For a Windows-based test controller, use backward slashes as separators for the path location.
-   If the log file already exists at the specified location on the test controller, it is overwritten.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

Suppose that after launching a given AUT on the target device, you want your test to inspect something in the device's Android system log file. In this procedure, you issue a get device log file action to write the log to the file device.log on the test controller. You then follow up by disconnecting from the device, which is necessary to allow you to access the file on the host controller. You check that the file exists, and if it does, write out its contents to a variable as a single string. You can then follow up by inspecting the variable's string for whatever information your test requires..

**Action Lines**

![](/images/TA_Automation/Images/bia_get_device_log_file_pgm.r02.png)

**Result**

A typical device log file:

![](/images/TA_Automation/Images/bia_get_device_log_file_aut.r02.png)




