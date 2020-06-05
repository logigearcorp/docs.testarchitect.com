--- 
title: "set trackbar value"
linktitle: "set trackbar value"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_set_trackbar_value.html
---
keyword: [set trackbar value, set value on trackbar, set the position of slider on trackbar, set trackbar current value]
---

# set trackbar value

## Description

Set a value \(and hence position\) on a trackbar\(slider\) control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the trackbar.

-   **percentage**

    Value to which to set the trackbar.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support setting the value of a slider control on iOS. In its place, use the [set](bia_set.html) action in iOS.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images//Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](/images//Images/bia_set_trackbar_value_pgm.png)

**Result**

![](/images//Images/bia_set_trackbar_value_res.png)

## Example

![](/images//Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](/images//Images/bia_set_trackbar_value_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_set_trackbar_value_ta4vs_res.png)

**Parent topic:**[Slider](/TA_Automation/Topics/bia_Slider.html)

**Previous topic:**[get trackbar value](/TA_Automation/Topics/bia_get_trackbar_value.html)

