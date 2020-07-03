--- 
title: "wait for window close"
linktitle: "wait for window close"
description: "Description Wait a specified amount of time for a given window to close before executing the next action line. Arguments window TA name of the window. time out (Optional) Maximum time to wait (units: ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_wait_for_window_close.html
keywords: "built-in actions, wait for window close, wait for window close (action), Safari, macOS (action), wait for window close, macOS, Safari, wait for window to close, timeout for window closing, wait for window closing"
---

## Description

Wait a specified amount of time for a given window to close before executing the next action line.

## Arguments

-   **window**

    TA name of the window.

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) built-in setting – see note below\).

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the given window does not close before the specified timeout, a warning is generated. By default \(that is, unless the [notice level](/automation-guide/action-based-testing-language/built-in-settings/other-settings/notice-level) setting has been modified in your test\) you are presented with a modal dialog box asking whether to continue the test.
-   If the given window does not close before the specified timeout, a warning is generated. You are presented with a modal dialog box asking whether to continue the test.
-   If no value is specified for the time out argument, the current value of the built-in setting [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) is used. [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), if not otherwise set in a setting action line, defaults to a value of 20 seconds.
-   Whenever possible, it is recommended that you use the built-in [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) setting, along with the appropriate built-in action, in lieu of wait for window close.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

Suppose that while testing a multi-window application, you have a window that pops up and you want to wait for that window to disappear, before the next action line in the test is executed.

**Action Lines**

![](/images/TA_Automation/Images/bia_wait_for_window_close_pgm.png)

