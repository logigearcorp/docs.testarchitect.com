--- 
title: "-"
linktitle: "select column"
weight: 29
aliases: 
    - /TA_Automation/Topics/bia_select_column.html
---
keyword: [select column, select column in table, select a range of columns from table]
---

# select column

## Description

Select a column, or a range of columns, in a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **column1, column2, … columnN**

    Columns to be selected. \(Column numbers start at 1\).

    Arguments column2 through columnN are optional.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   There is no practical limit to the number ofcolumnarguments that may be specified. In the action line, you may continue listing them in consecutive columns beyond those that have column headers.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:table, tree table, tree list.

## Example

![](/images//Images/bia_select_column_aut.png)

**Action Lines**

![](/images//Images/bia_select_column_pgm.png)

**Result**

![](/images//Images/bia_select_column_res.png)

## Example

![](/images//Images/bia_select_column_aut.png)

**Action Lines**

![](/images//Images/bia_select_column_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_select_column_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[select](/TA_Automation/Topics/bia_select.html)

**Next topic:**[set list check](/TA_Automation/Topics/bia_set_list_check.html)

