--- 
title: "is process running"
linktitle: "is process running"
aliases: 
    - /TA_Automation/Topics/bia_is_process_running.html
---
# is process running {#bia_is_process_running .reference}

## Description { .section}

Return a Boolean value to indicate whether a process is running on the mobile test device.

## Arguments { .section}

process
:   The process id \(aka name, bundle ID or package name\) of the process to check. \(See Notes section for how to determine process id.\)

variable
:   \(Optional\) Variable to receive the returned Boolean value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This built-in action applies only to the Android operating system.
-   process argument:
    -   On an Android device, process is the package name of the running application. To retrieve the package name for an Android application:
        1.  Open the [Android Instrumentation Tool](../../reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](../../reuse/../Android/Images/Android_copy_package_name.png)

        3.  In the test editor, paste the copied value into the process argument of the built-in action.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

![](../Images/bia_is_process_running_aut.png)

**Action Lines**

![](../Images/bia_is_process_running_pgm.png)

**Result**

![](../Images/bia_is_process_running_res.png)

**Parent topic:**[Operating System](../../TA_Automation/Topics/bia_operating_system.html)

**Previous topic:**[get system performance information](../../TA_Automation/Topics/bia_get_system_performance_information.html)

**Next topic:**[shut down](../../TA_Automation/Topics/bia_shut_down.html)

**Related information**  


[check process not running](../../TA_Automation/Topics/bia_check_process_not_running.html)

[check process running](../../TA_Automation/Topics/bia_check_process_running.html)

[kill process](../../TA_Automation/Topics/bia_kill_process.html)

