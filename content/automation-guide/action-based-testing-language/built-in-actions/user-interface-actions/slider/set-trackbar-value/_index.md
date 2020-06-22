--- 
title: "set trackbar value"
linktitle: "set trackbar value"
description: "Description Set a value (and hence position) on a trackbar (slider) control. Arguments window TA name of the window. control TA name of the trackbar. percentage Value to which to set the trackbar. ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_set_trackbar_value.html
keywords: "built-in actions, set trackbar value, set trackbar value (action), set trackbar value, set value on trackbar, set the position of slider on trackbar, set trackbar current value"
---

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

-   This action does not support setting the value of a slider control on iOS. In its place, use the [set](/TA_Automation/Topics/bia_set.html) action in iOS.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images/TA_Automation/Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_trackbar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_trackbar_value_res.png)

## Example

![](/images/TA_Automation/Images/bia_set_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_trackbar_value_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_trackbar_value_ta4vs_res.png)



