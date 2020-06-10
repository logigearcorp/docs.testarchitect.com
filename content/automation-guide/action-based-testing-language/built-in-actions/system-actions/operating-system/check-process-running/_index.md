--- 
title: "check process running"
linktitle: "check process running"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_process_running.html
keywords: "check if process is running, check whether process is running, check that process is running"
---

## Description

Check that a specified process is running on a mobile device. Result is Passed ifthe specified process is running ; otherwise Failed.

## Arguments

-   **process**

    The process id \(aka name, bundle ID or package name\) of the process to check. \(See Notes section for how to determine process id.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the Android operating system.
-   process argument:
    -   On an Android device, process is the package name of the running application. To retrieve the package name for an Android application:
        1.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](/images/Android/Images/Android_copy_package_name.png)

        3.  In the test editor, paste the copied value into the process argument of the built-in action.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

![](/images//Images/bia_check_process_running_Android_aut.png)

**Action Lines**

![](/images//Images/bia_check_process_running_Android_pgm.png)

**Result**

![](/images//Images/bia_check_process_running_Android_res.png)

**Parent topic:**[Operating System](/TA_Automation/Topics/bia_operating_system.html)

**Previous topic:**[check process not running](/TA_Automation/Topics/bia_check_process_not_running.html)

**Next topic:**[get operating system name](/TA_Automation/Topics/bia_get_operating_system_name.html)

**Related information**  


[check process not running](/TA_Automation/Topics/bia_check_process_not_running.html)

[is process running](/TA_Automation/Topics/bia_is_process_running.html)

[kill process](/TA_Automation/Topics/bia_kill_process.html)

