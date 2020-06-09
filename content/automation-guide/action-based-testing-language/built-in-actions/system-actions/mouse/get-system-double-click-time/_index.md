--- 
title: "get system double click time"
linktitle: "get system double click time"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_get_system_double_click_time.html
---
keyword: [get double click time, retrieve double click time]
---

# get system double click time

## Description

Retrieve the test system's current setting for maximum double-click interval.

## Arguments

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Built-In Settings

The following settings are applicable to this action: [remove double quotes from cells](remove_double_quotes_from_cells.html).

## Applicable Systems/Platforms

Use of this action is supported on the following system\(s\)/platform\(s\): Windows

## Notes

-   This built-in action returns an integer value specifying, in milliseconds, the upper limit of time between mouse clicks that the system still registers as a double-click \(as opposed to two single clicks\).
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name resultdoubleclicktime.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example

![](/images//Images/bia_get_system_double_click_time_aut.png)

**Action Lines**

![](/images//Images/bia_get_system_double_click_time_pgm.png)

**Result**

![](/images//Images/bia_get_system_double_click_time_res.png)

**Parent topic:**[Mouse](/TA_Automation/Topics/bia_mouse_events.html)

**Previous topic:**[get mouse position](/TA_Automation/Topics/bia_get_mouse_position.html)

**Next topic:**[move mouse](/TA_Automation/Topics/bia_move_mouse.html)

**Related information**  


[double click time](/TA_Automation/Topics/bis_double_click_time.html)

