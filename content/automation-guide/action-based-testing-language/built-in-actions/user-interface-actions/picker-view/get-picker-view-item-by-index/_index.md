--- 
title: "get picker view item by index"
linktitle: "get picker view item by index"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_picker_view_item_by_index.html
keywords: "get picker view item by index, get item from component of picker view by index, retrieve item from component of picker view by index, get retrieve item from"
---

## Description

Retrieve the displayed text content of an item in a component of a picker view control, based on the item's index number.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **index**

    Numeric index ofthe item within the component. \(Note that index numbering begins with 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned item text.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images//Images/bia_get_picker_view_item_by_index_aut.png)

**Action Lines**

![](/images//Images/bia_get_picker_view_item_by_index_pgm.png)

**Result**

![](/images//Images/bia_get_picker_view_item_by_index_res.png)

**Parent topic:**[Picker View](/TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[get picker view component item count](/TA_Automation/Topics/bia_get_picker_view_component_item_count.html)

**Next topic:**[get selected picker view item](/TA_Automation/Topics/bia_get_selected_picker_view_item.html)

