--- 
title: "kill process"
linktitle: "kill process"
aliases: 
    - /TA_Automation/Topics/bia_kill_process.html
---
# kill process {#bia_kill_process .reference}

## Description { .section}

Terminate a running process on a mobile device.

## Arguments { .section}

process name
:   The process id \(aka name, bundle ID or package name\) of the running process. \(See Notes section for how to determine process id.\)

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_ndc_dcl_zcb .section}

Use of this action is supported on the following systems/platforms: Android.

## Notes { .section}

-   process name argument:
    -   On an Android device, process name is the package name of the running application. To retrieve the package name for an Android application:
        1.  Open the [Android Instrumentation Tool](../../reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](../../reuse/../Android/Images/Android_copy_package_name.png)

        3.  In the test editor, paste the copied value into the process name argument of the built-in action.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

![](../Images/bia_kill_process_aut.jpg)

**Action Lines**

![](../Images/bia_kill_process_pgm.png)

**Result**

![](../Images/bia_kill_process_res.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[get screen orientation](../../TA_Automation/Topics/bia_get_screen_orientation.html)

**Next topic:**[multi touch slide](../../TA_Automation/Topics/bia_multi_touch_slide.html)

**Related information**  


[check process not running](../../TA_Automation/Topics/bia_check_process_not_running.html)

[check process running](../../TA_Automation/Topics/bia_check_process_running.html)

[is process running](../../TA_Automation/Topics/bia_is_process_running.html)

