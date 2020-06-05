--- 
title: "set selected picker view item"
linktitle: "set selected picker view item"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_set_selected_picker_view_item.html
---
keyword: [set selected picker view item, set item in component of picker view as selected based on its content, select item in component of picker view based on its value]
---

# set selected picker view item

## Description

Select an item in a component of a picker view control based on its text content.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text**

    Identifying display text of item to select.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images//Images/bia_set_selected_picker_view_item_aut.png)

**Action Lines**

![](/images//Images/bia_set_selected_picker_view_item_pgm.png)

**Result**

![](/images//Images/bia_set_selected_picker_view_item_res.png)

**Effect**

![](/images//Images/bia_set_selected_picker_view_item_effect.png)

**Parent topic:**[Picker View](/TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[get selected picker view item](/TA_Automation/Topics/bia_get_selected_picker_view_item.html)

**Next topic:**[set selected picker view item by index](/TA_Automation/Topics/bia_set_selected_picker_view_item_by_index.html)

