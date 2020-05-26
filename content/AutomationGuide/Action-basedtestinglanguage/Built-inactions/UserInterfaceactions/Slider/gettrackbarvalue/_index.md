--- 
title: "get trackbar value"
linktitle: "get trackbar value"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_trackbar_value.html
---
# get trackbar value {#bia_get_trackbar_value .reference}

## Description { .section}

Retrieve the current value of a trackbar\(slider\) control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the trackbar.

variable
:   \(Optional\) Variable to receive the returned value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action does not support retrieving the current value of a slider control in iOS. In its place, use the [get](bia_get.html) action in iOS.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:trackbar.

## Example { .section}

![](../Images/bia_get_trackbar_value_aut.png)

**Action Lines**

![](../Images/bia_get_trackbar_value_pgm.png)

**Result**

![](../Images/bia_get_trackbar_value_res.png)

## Example { .section}

![](../Images/bia_get_trackbar_value_aut.png)

**Action Lines**

![](../Images/bia_get_trackbar_value_ta4vs_pgm.png)

**Result**

![](../Images/bia_get_trackbar_value_ta4vs_res.png)

**Parent topic:**[Slider](../../TA_Automation/Topics/bia_Slider.html)

**Previous topic:**[check trackbar value](../../TA_Automation/Topics/bia_check_trackbar_value.html)

**Next topic:**[set trackbar value](../../TA_Automation/Topics/bia_set_trackbar_value.html)

