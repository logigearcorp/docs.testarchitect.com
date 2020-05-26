--- 
title: "set trackbar value"
linktitle: "set trackbar value"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_set_trackbar_value.html
---
# set trackbar value {#bia_set_trackbar_value .reference}

## Description { .section}

Set a value \(and hence position\) on a trackbar\(slider\) control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the trackbar.

percentage
:   Value to which to set the trackbar.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action does not support setting the value of a slider control on iOS. In its place, use the [set](bia_set.html) action in iOS.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:trackbar.

## Example { .section}

![](../Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](../Images/bia_set_trackbar_value_pgm.png)

**Result**

![](../Images/bia_set_trackbar_value_res.png)

## Example { .section}

![](../Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](../Images/bia_set_trackbar_value_ta4vs_pgm.png)

**Result**

![](../Images/bia_set_trackbar_value_ta4vs_res.png)

**Parent topic:**[Slider](../../TA_Automation/Topics/bia_Slider.html)

**Previous topic:**[get trackbar value](../../TA_Automation/Topics/bia_get_trackbar_value.html)

