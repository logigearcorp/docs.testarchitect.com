--- 
title: "check picker view component item count"
linktitle: "check picker view component item count"
description: "Description Check the number of items in a component of a picker view control against an expected value. Result is Passed if the item count matches the expected number ; otherwise Failed . Arguments ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_picker_view_component_item_count.html
keywords: "built-in actions, check picker view component item count, check picker view component item count (action), iOS (action), check number of items in component of picker view against expected value, check if item count in component of picker view matches expected value, verify whether item count in component of picker view matches expected value"
---

## Description

Check the number of items in a component of a picker view control against an expected value. Result is Passed ifthe item count matches the expected number; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **expected**

    The expected number of items in the specified component.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_check_picker_view_component_item_count_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_picker_view_component_item_count_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_picker_view_component_item_count_res.png)



