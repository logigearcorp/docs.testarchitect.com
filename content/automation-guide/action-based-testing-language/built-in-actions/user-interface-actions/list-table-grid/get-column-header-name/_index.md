--- 
title: "-"
linktitle: "get column header name"
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_get_column_header_name.html
---
keyword: [get column header name, retrieve column header name, get column name, retrieve column name]
---

# get column header name

## Description

Retrieve the text of a header cell in a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **index**

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
-   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](bia_get_column_header_name.html) and [check column header name](bia_check_column_header_name.html) built-in actions return an empty value.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table, list view, tree table, tree list.

## Example

![](/images//Images/bia_get_column_header_name_aut.png)

**Action Lines**

![](/images//Images/bia_get_column_header_name_pgm.png)

**Result**

![](/images//Images/bia_get_column_header_name_res.png)

## Example

![](/images//Images/bia_get_column_header_name_aut.png)

**Action Lines**

![](/images//Images/bia_get_column_header_name_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_get_column_header_name_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[get column header coordinates](/TA_Automation/Topics/bia_get_column_header_coordinates.html)

**Next topic:**[get column number](/TA_Automation/Topics/bia_get_column_number.html)

