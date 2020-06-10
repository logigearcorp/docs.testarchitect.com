--- 
title: "check trackbar value"
linktitle: "check trackbar value"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_trackbar_value.html
keywords: "check trackbar value, check trackbar value against expected value, check if trackbar value matches expected value, verify if trackbar value matches expected value, verify whether trackbar value matches expected value"
---

## Description

Check the value of a trackbar\(slider\) against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the trackbar.

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action does not support checking the value of a slider control on iOS. In its place, use the [check](/TA_Automation/Topics/bia_check.html) action in iOS.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:trackbar.

## Example

![](/images//Images/bia_check_trackbar_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_trackbar_value_pgm.png)

**Result**

![](/images//Images/bia_check_trackbar_value_res.png)

## Example

![](/images//Images/bia_check_trackbar_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_trackbar_value_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_trackbar_value_ta4vs_res.png)

**Parent topic:**[Slider](/TA_Automation/Topics/bia_Slider.html)

**Next topic:**[get trackbar value](/TA_Automation/Topics/bia_get_trackbar_value.html)

