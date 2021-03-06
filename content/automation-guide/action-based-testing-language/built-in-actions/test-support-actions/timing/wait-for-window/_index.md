--- 
title: "wait for window"
linktitle: "wait for window"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_wait_for_window.html
keywords: "wait for window to open, timeout for window opening, wait for window opening"
---

## Description

Wait a specified amount of time for a given window to open before executing the next action line.

## Arguments

-   **window**

    TA name of the window.

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [window wait](window_wait.html) built-in setting – see note below\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the given window fails to appear before the specified timeout, a warning is generated. By default \(that is, unless the [notice level](notice_level.html) setting has been modified in your test\) you are presented with a modal dialog box asking whether to continue the test.
-   If no value is specified for the time out argument, the current value of the built-in setting [window wait](window_wait.html) is used. [window wait](window_wait.html), if not otherwise set in a setting action line, defaults to a value of 20 seconds.
-   Whenever possible, it is recommended that you use the built-in [window wait](window_wait.html) setting, along with the appropriate built-in action, in lieu of wait for window.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [window wait](window_wait.html).

## Example

**Action Lines**

![](/images//Images/bia_wait_for_window_pgm.png)

**Result**

![](/images//Images/bia_wait_for_window_res.png)

**Parent topic:**[Timing](/TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[wait for property](/TA_Automation/Topics/bia_wait_for_property.html)

**Next topic:**[wait for window close](/TA_Automation/Topics/bia_wait_for_window_close.html)

