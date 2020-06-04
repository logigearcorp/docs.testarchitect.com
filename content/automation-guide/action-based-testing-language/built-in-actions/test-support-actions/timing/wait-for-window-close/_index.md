--- 
title: "-"
linktitle: "wait for window close"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_wait_for_window_close.html
---
keyword: [wait for window to close, timeout for window closing, wait for window closing]
---

# wait for window close

## Description

Wait a specified amount of time for a given window to close before executing the next action line.

## Arguments

-   **window**

    TA name of the window.

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [window wait](bis_window_wait.html) built-in setting – see note below\).

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the given window does not close before the specified timeout, a warning is generated. By default \(that is, unless the [notice level](bis_notice_level.html) setting has been modified in your test\) you are presented with a modal dialog box asking whether to continue the test.
-   If the given window does not close before the specified timeout, a warning is generated. You are presented with a modal dialog box asking whether to continue the test.
-   If no value is specified for the time out argument, the current value of the built-in setting [window wait](bis_window_wait.html) is used. [window wait](bis_window_wait.html), if not otherwise set in a setting action line, defaults to a value of 20 seconds.
-   Whenever possible, it is recommended that you use the built-in [window wait](bis_window_wait.html) setting, along with the appropriate built-in action, in lieu of wait for window close.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Example

Suppose that while testing a multi-window application, you have a window that pops up and you want to wait for that window to disappear, before the next action line in the test is executed.

**Action Lines**

![](/images//Images/bia_wait_for_window_close_pgm.png)

## Example

![](/images//Images/bia_wait_for_window_close_ta4vs_aut.png)

**Action Lines**

![](/images//Images/bia_wait_for_window_close_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_wait_for_window_close_ta4vs_res.png)

**Parent topic:**[Timing](/TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[wait for window](/TA_Automation/Topics/bia_wait_for_window.html)

