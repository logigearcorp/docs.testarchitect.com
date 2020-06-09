--- 
title: "check selected picker view item"
linktitle: "check selected picker view item"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_selected_picker_view_item.html
---
keyword: [check selected picker view item, check if value of selected item in component of picker view matches expected value, check value of selected item in component of picker view against expected value, verify whether selected item in component of picker view matches expected value]
---

# check selected picker view item

## Description

Check whether the display text of the currently selected item of a specified picker view component matches an expected text string. Result is Passed ifthe two strings match ; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **expected**

    The expected text content of the selected item.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images//Images/bia_check_selected_picker_view_item_aut.png)

**Action Lines**

![](/images//Images/bia_check_selected_picker_view_item_pgm.png)

**Result**

![](/images//Images/bia_check_selected_picker_view_item_res.png)

**Parent topic:**[Picker View](/TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[check picker view item not exists](/TA_Automation/Topics/bia_check_picker_view_item_not_exists.html)

**Next topic:**[does picker view item exist](/TA_Automation/Topics/bia_does_picker_view_item_exist.html)

