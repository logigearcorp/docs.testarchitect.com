--- 
title: "check table cell value"
linktitle: "check table cell value"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_check_table_cell_value.html
---
# check table cell value {#bia_check_table_cell_value .reference}

## Description { .section}

Check the text content of a table cell against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

table
:   TA name of the table.

row
:   Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

column
:   Column number of the cell. \(Column numbers start at 1.\)

expected
:   The expected cell content.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table, list view.

## Example { .section}

![](../Images/bia_check_table_cell_value_aut.png)

**Action Lines**

![](../Images/bia_check_table_cell_value_pgm.png)

**Result**

![](../Images/bia_check_table_cell_value_res.png)

## Example { .section}

![](../Images/bia_check_table_cell_value_aut.png)

**Action Lines**

![](../Images/bia_check_table_cell_value_ta4vs_pgm.png)

**Result**

![](../Images/bia_check_table_cell_value_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check selected items](../../TA_Automation/Topics/bia_check_selected_items.html)

**Next topic:**[click list item](../../TA_Automation/Topics/bia_click_list_item.html)

**Related information**  


[get table cell value](../../TA_Automation/Topics/bia_get_table_cell_value.html)

[set table cell value](../../TA_Automation/Topics/bia_set_table_cell_value.html)

