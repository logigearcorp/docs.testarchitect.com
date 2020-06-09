--- 
title: "get system performance information"
linktitle: "get system performance information"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_system_performance_information.html
keywords: "get system performance information, get system performance info, get system performance status, get system resource usage, get"
---

## Description

Return the current system performance information of the test machine or device.

## Arguments

-   **cpu usage**

    Variable to hold the returned current CPU usage.

-   **memory usage**

    Variable to hold the returned current memory usage.

-   **running apps**

    \(Mobile systems only\) Variable to hold the returned list of currently running applications.

-   **battery capacity**

    \(Mobile systems only\) Variable to hold the returned current battery capacity.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   For Windows/Linux operating systems:
    -   The only two returned values are those for cpu usage and memory usage.
-   For mobile operating systems:
    -   All four values \(cpu usage, memory usage, running apps and battery capacity\) are returned.
-   If the variables in argumentscpu usage, memory usage, running apps or battery capacityhave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example - Case 1: On Windows operating system

**Action Lines**

![](/images//Images/bia_get_system_performance_information_desktop_OS_pgm.png)

**Result**

![](/images//Images/bia_get_system_performance_information_desktop_OS_res.png)

## Example - Case 2: On mobile operating systems

**Action Lines**

![](/images//Images/bia_get_system_performance_information_pgm.png)

**Result**

![](/images//Images/bia_get_system_performance_information_res.png)

**Parent topic:**[Operating System](/TA_Automation/Topics/bia_operating_system.html)

**Previous topic:**[get system time](/TA_Automation/Topics/bia_get_system_time.html)

**Next topic:**[is process running](/TA_Automation/Topics/bia_is_process_running.html)

