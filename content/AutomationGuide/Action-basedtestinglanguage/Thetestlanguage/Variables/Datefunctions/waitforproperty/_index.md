--- 
title: "wait for property"
linktitle: "wait for property"
aliases: 
    - /TA_Automation/Topics/bia_wait_for_property.html
---
# wait for property {#bia_wait_for_property .reference}

## Description { .section}

Wait a specified amount of time for a given property value of a control or window to contain an expected value before proceeding to the next action line.

## Arguments { .section}

window
:   TA name of the window.

control
:   \(Optional\) TA name of the control.

property
:   TA property whose value is to be tested.

value
:   Expected value of the specified property. When this value is detected, execution proceeds to the next action line.

timeout
:   \(Optional\) Maximum time to wait \(units: seconds; default = 20\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Whenever possible, it is recommended that you use the built-in [property wait](bis_property_wait.html) setting, along with the appropriate built-in action, in lieu of wait for property. The property wait setting applies to three built-in actions: [check control property](bia_check_control_property.html), [check window property](bia_check_window_property.html), and [check](bia_check.html).
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Example { .section}

![](../Images/bia_wait_for_property_aut.png)

**Action Lines**

![](../Images/bia_wait_for_property_pgm.png)

**Result**

![](../Images/bia_wait_for_property_res.png)

**Parent topic:**[Timing](../../TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[wait for control not exists](../../TA_Automation/Topics/bia_wait_for_control_not_exists.html)

**Next topic:**[wait for window](../../TA_Automation/Topics/bia_wait_for_window.html)

