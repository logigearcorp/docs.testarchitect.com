--- 
title: "check picker view item not exists"
linktitle: "check picker view item not exists"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_picker_view_item_not_exists.html
keywords: "check picker view item not exists, check if specific item is not found in component of picker view, check for nonexistence of specified item in component of picker view, verify whether specified item is not found in compnent of picker view"
---

## Description

Check, based on the displayed text content, for the nonexistence of an item in a component of a picker view control. Result is Passed ifthe specified item is not found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text**

    Text content of the item to be searched for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images//Images/bia_check_picker_view_item_not_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_picker_view_item_not_exists_pgm.png)

**Result**

![](/images//Images/bia_check_picker_view_item_not_exists_res.png)

**Parent topic:**[Picker View](/TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[check picker view item exists](/TA_Automation/Topics/bia_check_picker_view_item_exists.html)

**Next topic:**[check selected picker view item](/TA_Automation/Topics/bia_check_selected_picker_view_item.html)

