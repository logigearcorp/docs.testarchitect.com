--- 
title: "get trackbar value"
linktitle: "get trackbar value"
description: "Description Retrieve the current value of a trackbar (slider) control. Arguments window TA name of the window. control TA name of the trackbar. variable (Optional) Variable to receive the returned ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_trackbar_value.html
keywords: "built-in actions, get trackbar value, get trackbar value (action), get trackbar value, retrieve trackbar value, get current value of trackbar, retrieve current value of trackbar, get position of slider on trackbar"
---

## Description

Retrieve the current value of a trackbar\(slider\) control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the trackbar.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support retrieving the current value of a slider control in iOS. In its place, use the [get](/TA_Automation/Topics/bia_get.html) action in iOS.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images/TA_Automation/Images/bia_get_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_trackbar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_trackbar_value_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_trackbar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_trackbar_value_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_trackbar_value_ta4vs_res.png)




