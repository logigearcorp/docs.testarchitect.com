--- 
title: "get table cell value"
linktitle: "get table cell value"
weight: 26
aliases: 
    - /TA_Automation/Topics/bia_get_table_cell_value.html
keywords: "get table cell value, get cell contents, retrieve cell contents"
---

## Description

Retrieve the contents of a cell in a table.

## Arguments

-   **window**

    TA name of the window.

-   **table**

    TA name of the table.

-   **row**

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
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table, list view.

## Example

![](/images//Images/bia_get_table_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_table_cell_value_pgm.png)

**Result**

![](/images//Images/bia_get_table_cell_value_res.png)

## Example

![](/images//Images/bia_get_table_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_table_cell_value_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_get_table_cell_value_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[get table cell containing](/TA_Automation/Topics/bia_get_table_cell_containing.html)

**Next topic:**[is cell selected](/TA_Automation/Topics/bia_is_cell_selected.html)

**Related information**  


[check table cell value](/TA_Automation/Topics/bia_check_table_cell_value.html)

[set table cell value](/TA_Automation/Topics/bia_set_table_cell_value.html)

