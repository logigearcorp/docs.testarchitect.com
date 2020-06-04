--- 
title: "-"
linktitle: "does picker view item exist"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_does_picker_view_item_exist.html
---
keyword: [does picker view item exist, check whether specified item in component of picker view exist or not, verify whether or not specified item is found in component of picker view, check for existence of specific item in component of picker view]
---

# does picker view item exist

## Description

Return a Boolean value to indicate whether an item, as specified by its displayed text, within a specified component of a picker view control, exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text**

    Text content of the item to be searched for.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait probe](bis_object_wait_probe.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images//Images/bia_does_picker_view_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_picker_view_item_exist_pgm.png)

**Result**

![](/images//Images/bia_does_picker_view_item_exist_res.png)

**Parent topic:**[Picker View](/TA_Automation/Topics/bia_Picker_view.html)

**Previous topic:**[check selected picker view item](/TA_Automation/Topics/bia_check_selected_picker_view_item.html)

**Next topic:**[get picker view component item count](/TA_Automation/Topics/bia_get_picker_view_component_item_count.html)

