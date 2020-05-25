--- 
title: "check trackbar value"
linktitle: "check trackbar value"
aliases: 
    - /TA_Automation/Topics/bia_check_trackbar_value.html
---
# check trackbar value {#bia_check_trackbar_value .reference}

## Description { .section}

Check the value of a trackbar\(slider\) against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the trackbar.

expected
:   Expected value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action does not support checking the value of a slider control on iOS. In its place, use the [check](bia_check.html) action in iOS.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:trackbar.

## Example { .section}

![](../Images/bia_check_trackbar_value_aut.png)

**Action Lines**

![](../Images/bia_check_trackbar_value_pgm.png)

**Result**

![](../Images/bia_check_trackbar_value_res.png)

## Example { .section}

![](../Images/bia_check_trackbar_value_aut.png)

**Action Lines**

![](../Images/bia_check_trackbar_value_ta4vs_pgm.png)

**Result**

![](../Images/bia_check_trackbar_value_ta4vs_res.png)

**Parent topic:**[Slider](../../TA_Automation/Topics/bia_Slider.html)

**Next topic:**[get trackbar value](../../TA_Automation/Topics/bia_get_trackbar_value.html)

