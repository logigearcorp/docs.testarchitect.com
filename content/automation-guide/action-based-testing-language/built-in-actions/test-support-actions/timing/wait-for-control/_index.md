--- 
title: "wait for control"
linktitle: "wait for control"
description: "Description Wait a specified amount of time for a given control to appear before executing the next action line. Arguments window TA name of the window. control TA name of the control. timeout(second) ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_wait_for_control.html
keywords: "built-in actions, wait for control, wait for control (action), iOS (action), wait for control, Safari, iOS, Android (action), Android, Google Chrome, Safari, macOS (action), macOS, Safari (action)"
---

## Description

Wait a specified amount of time for a given control to appear before executing the next action line.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **timeout\(second\)**

    \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [object wait](/TA_Automation/Topics/bis_object_wait.html) built-in setting – see note below\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the given control fails to appear before the specified timeout, a warning is generated. By default \(that is, unless the [notice level](/TA_Automation/Topics/bis_notice_level.html) setting has been modified in your test\) you are presented with a modal dialog box asking whether to continue the test.
-   If no value is specified for the timeout\(second\) argument, the current value of the built-in setting [object wait](/TA_Automation/Topics/bis_object_wait.html) is used. [object wait](/TA_Automation/Topics/bis_object_wait.html), if not otherwise set in a [setting](/TA_Automation/Topics/bia_setting.html) action line, defaults to a value of 20 seconds.
-   Whenever possible, it is recommended that you use the built-in [object wait](/TA_Automation/Topics/bis_object_wait.html) setting, along with the appropriate built-in action, in lieu of wait for control.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_wait_for_control_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_wait_for_control_res.png)




