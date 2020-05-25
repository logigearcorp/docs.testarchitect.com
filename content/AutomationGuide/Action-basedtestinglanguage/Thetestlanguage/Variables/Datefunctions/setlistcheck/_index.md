--- 
title: "set list check"
linktitle: "set list check"
aliases: 
    - /TA_Automation/Topics/bia_set_list_check.html
---
# set list check {#bia_set_list_check .reference}

## Description { .section}

Set the state of a check box item in a list box control.

## Arguments { .section}

window
:   TA name of the window.

list
:   TA name of the list box.

item
:   Identifying text content of the check box item, or the item's index value within the list box.

value
:   State to which to set the check box.

:   Allowable values:

    on, 1, or true
    :   Select the check box.

    off, 0, or false
    :   Clear the check box.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   item argument:
    -   The item argumentmay be specified by either of two means:the check box item's displayed text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:list box.

## Example - Case 1: Use text value { .section}

**Action Lines**

![](../Images/bia_set_list_check_pgm.png)

**Result**

![](../Images/bia_set_list_check_res.png)

**Effect**

![](../Images/bia_set_list_check_aut.png)

## Example - Case 2: Use numerical index value { .section}

**Action Lines**

![](../Images/bia_set_list_check_index_pgm.png)

**Result**

![](../Images/bia_set_list_check_index_res.png)

**Effect**

![](../Images/bia_set_list_check_index_aut.png)

## Example { .section}

**Action Lines**

![](../Images/bia_set_list_check_ta4vs_pgm.png)

**Result**

![](../Images/bia_set_list_check_ta4vs_res.png)

**Effect**

![](../Images/bia_set_list_check_aut.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[select column](../../TA_Automation/Topics/bia_select_column.html)

**Next topic:**[set table cell value](../../TA_Automation/Topics/bia_set_table_cell_value.html)

