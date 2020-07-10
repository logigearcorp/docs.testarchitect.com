--- 
title: "wait for window"
linktitle: "wait for window"
description: "Description Wait a specified amount of time for a given window to open before executing the next action line. Arguments window TA name of the window. time out (Optional) Maximum time to wait (units: ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_wait_for_window.html
keywords: "built-in actions, wait for window, wait for window (action), Safari, macOS (action), wait for window, macOS, Safari (action), wait for window to open, timeout for window opening, wait for window opening"
---

## {{< expand >}} Description

Wait a specified amount of time for a given window to open before executing the next action line.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) built-in setting – see note below\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   If the given window fails to appear before the specified timeout, a warning is generated. By default \(that is, unless the [notice level](/automation-guide/action-based-testing-language/built-in-settings/other-settings/notice-level) setting has been modified in your test\) you are presented with a modal dialog box asking whether to continue the test.
-   If no value is specified for the time out argument, the current value of the built-in setting [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) is used. [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), if not otherwise set in a setting action line, defaults to a value of 20 seconds.
-   Whenever possible, it is recommended that you use the built-in [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) setting, along with the appropriate built-in action, in lieu of wait for window.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_wait_for_window_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_wait_for_window_res.png)




