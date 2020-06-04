--- 
title: "-"
linktitle: "is cell selected"
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_is_cell_selected.html
---
keyword: [is cell selected, check if specified cell is selected, check whether specified cell is selected, verify if specified cell is selected]
---

# is cell selected

## Description

Return a Boolean value to indicate whether a specified cell in a table is selected.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **row**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Cell is selected.

    -   **0**

        Cell is not selected.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table, list view.

## Example

![](/images//Images/bia_is_cell_selected_aut.png)

**Action Lines**

![](/images//Images/bia_is_cell_selected_pgm.png)

**Result**

![](/images//Images/bia_is_cell_selected_res.png)

## Example

![](/images//Images/bia_is_cell_selected_aut.png)

**Action Lines**

![](/images//Images/bia_is_cell_selected_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_is_cell_selected_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[get table cell value](/TA_Automation/Topics/bia_get_table_cell_value.html)

**Next topic:**[select](/TA_Automation/Topics/bia_select.html)

**Related information**  


[click table cell](/TA_Automation/Topics/bia_click_table_cell.html)

