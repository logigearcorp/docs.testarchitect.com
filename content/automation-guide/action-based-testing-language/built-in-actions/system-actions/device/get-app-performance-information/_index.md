--- 
title: "get app performance information"
linktitle: "get app performance information"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_get_app_performance_information.html
keywords: "mobile performance monitoring, monitor mobile performance, diagnose mobile performance, manage mobile performance, mobile performance management"
---

## Description

Return the current performance information of an application running on the test device.

## Arguments

-   **package name**

    APK name of the application of interest.

-   **cpu usage**

    Variable to hold returned current CPU usage of the application process.

-   **memory**

    Variable to hold returned current memory usage of the application process.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Android.

## Notes

-   If the variables in argumentscpu usage and memoryhave not been declared, the action creates them as globals.
-   On an Android device, to retrieve the package name for an application, do the following:
    1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

        ![](/images//Images/Android/Images/Android_copy_package_name.png)

    3.  In the test editor, paste the copied value into the package name argument of the built-in action.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html).

## Example

Let's say you wish to obtain the current performance information of two applications running on the test device:

**Action Lines**

![](/images//Images/bia_get_app_performance_information_pgm.png)

**Result**

![](/images//Images/bia_get_app_performance_information_res.png)

**Parent topic:**[Device](/TA_Automation/Topics/bia_device.html)

**Previous topic:**[drag](/TA_Automation/Topics/bia_drag.html)

**Next topic:**[get cloud device session id](/TA_Automation/Topics/bia_get_cloud_device_session_id.html)

