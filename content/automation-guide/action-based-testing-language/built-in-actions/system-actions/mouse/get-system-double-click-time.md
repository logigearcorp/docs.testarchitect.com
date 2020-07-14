--- 
title: "get system double click time"
linktitle: "get system double click time"
description: "Description Retrieve the test system's current setting for maximum double-click interval. Arguments variable (Optional) Variable to receive the returned value. Valid contexts This action may be used ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_get_system_double_click_time.html
keywords: "built-in actions, get system double click time, get system double click time (action), get double click time, retrieve double click time"
---

## Description

Retrieve the test system's current setting for maximum double-click interval.

## Arguments

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Built-In Settings

The following settings are applicable to this action: [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Applicable Systems/Platforms

Use of this action is supported on the following system\(s\)/platform\(s\): Windows

## Notes

-   This built-in action returns an integer value specifying, in milliseconds, the upper limit of time between mouse clicks that the system still registers as a double-click \(as opposed to two single clicks\).
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name resultdoubleclicktime.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example

![](/images/TA_Automation/Images/bia_get_system_double_click_time_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_system_double_click_time_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_system_double_click_time_res.png)




**Related information**  


[double click time](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/double-click-time)
