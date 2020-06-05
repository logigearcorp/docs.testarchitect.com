--- 
title: "get list cell value"
linktitle: "get list cell value"
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_get_list_cell_value.html
---
keyword: [get cell contents in list view, retrieve cell contents in list view]
---

# get list cell value

## Description

Retrieve the text content of a cell in a list view.

## Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the control.

-   **item**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list view.

## Example

![](/images//Images/bia_get_list_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_list_cell_value_pgm.png)

**Result**

![](/images//Images/bia_get_list_cell_value_res.png)

## Example

![](/images//Images/bia_get_list_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_list_cell_value_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_get_list_cell_value_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[get column number](/TA_Automation/Topics/bia_get_column_number.html)

**Next topic:**[get list check](/TA_Automation/Topics/bia_get_list_check.html)

