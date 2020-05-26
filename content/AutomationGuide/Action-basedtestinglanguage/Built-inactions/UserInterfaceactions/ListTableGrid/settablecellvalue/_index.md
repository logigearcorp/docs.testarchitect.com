--- 
title: "set table cell value"
linktitle: "set table cell value"
weight: 31
aliases: 
    - /TA_Automation/Topics/bia_set_table_cell_value.html
---
# set table cell value {#bia_set_table_cell_value .reference}

## Description { .section}

Set the contents of a cell in a table.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

row
:   Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

column
:   Column number of the cell. \(Column numbers start at 1.\)

value
:   Value to which the cell contents are to be set.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table, list view.

## Example { .section}

**Action Lines**

![](../Images/bia_set_table_cell_value_pgm1.png)

**Result**

![](../Images/bia_set_table_cell_value_res1.png)

**Effect**

![](../Images/bia_set_table_cell_value_aut1.png)

## Example { .section}

**Action Lines**

![](../Images/bia_set_table_cell_value_ta4vs_pgm1.png)

**Result**

![](../Images/bia_set_table_cell_value_ta4vs_res1.png)

**Effect**

![](../Images/bia_set_table_cell_value_aut1.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[set list check](../../TA_Automation/Topics/bia_set_list_check.html)

**Related information**  


[check table cell value](../../TA_Automation/Topics/bia_check_table_cell_value.html)

[get table cell value](../../TA_Automation/Topics/bia_get_table_cell_value.html)

