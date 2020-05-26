--- 
title: "wait for control"
linktitle: "wait for control"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_wait_for_control.html
---
# wait for control {#bia_wait_for_control .reference}

## Description { .section}

Wait a specified amount of time for a given control to appear before executing the next action line.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

timeout\(second\)
:   \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [object wait](bis_object_wait.html) built-in setting – see note below\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   If the given control fails to appear before the specified timeout, a warning is generated. By default \(that is, unless the [notice level](bis_notice_level.html) setting has been modified in your test\) you are presented with a modal dialog box asking whether to continue the test.
-   If no value is specified for the timeout\(second\) argument, the current value of the built-in setting [object wait](bis_object_wait.html) is used. [object wait](bis_object_wait.html), if not otherwise set in a [setting](bia_setting.html) action line, defaults to a value of 20 seconds.
-   Whenever possible, it is recommended that you use the built-in [object wait](bis_object_wait.html) setting, along with the appropriate built-in action, in lieu of wait for control.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [window wait](bis_window_wait.html).

## Example { .section}

**Action Lines**

![](../Images/bia_wait_for_control_pgm.png)

**Result**

![](../Images/bia_wait_for_control_res.png)

**Parent topic:**[Timing](../../TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[start clock count](../../TA_Automation/Topics/bia_start_clock_count.html)

**Next topic:**[wait for control not exists](../../TA_Automation/Topics/bia_wait_for_control_not_exists.html)

