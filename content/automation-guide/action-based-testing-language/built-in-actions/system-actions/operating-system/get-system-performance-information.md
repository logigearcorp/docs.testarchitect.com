--- 
title: "get system performance information"
linktitle: "get system performance information"
description: "Description Return the current system performance information of the test machine or device. Arguments cpu usage Variable to hold the returned current CPU usage. memory usage Variable to hold the ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_system_performance_information.html
keywords: "built-in actions, get system performance information, get system performance information (action), get system performance information, get system performance info, get system performance status, get system resource usage, Android (action), get system performance information, get"
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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example - Case 1: On Windows operating system

**Action Lines**

![](/images/TA_Automation/Images/bia_get_system_performance_information_desktop_OS_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_system_performance_information_desktop_OS_res.png)

## Example - Case 2: On mobile operating systems

**Action Lines**

![](/images/TA_Automation/Images/bia_get_system_performance_information_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_system_performance_information_res.png)




