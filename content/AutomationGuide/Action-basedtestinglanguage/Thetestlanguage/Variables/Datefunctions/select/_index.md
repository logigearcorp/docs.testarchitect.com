--- 
title: "select"
linktitle: "select"
aliases: 
    - /TA_Automation/Topics/bia_select.html
---
# select {#bia_select .reference}

## Description { .section}

Select an item in a combo box control or one or more items of a list box control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the list box or the combo box control.

value
:   Identifying text of the item\(s\) to be selected, or the item's or items' index value\(s\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   value argument:
    -   The value argumentmay be specified by either of two means:the displayed text of the item, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   In the case of a list box control, more than one item may be selected. Do this by providing additional value arguments in the cells to the right of the first value argument, along with arbitrary argument header names of your own choosing. \(See example below\). Note, however, that it is not possible to mix data types \(index and text\) of multiple value arguments in a single action line.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:combo box, list box.

## Example - Case 1: Using a text value to select an item { .section}

![](../Images/bia_select_aut.png)

**Action Lines**

![](../Images/bia_select_pgm.png)

**Result**

![](../Images/bia_select_res.png)

## Example - Case 2: Using numerical index to select an item { .section}

![](../Images/bia_select_index_aut.png)

**Action Lines**

![](../Images/bia_select_index_pgm.png)

**Result**

![](../Images/bia_select_index_res.png)

## Example - Case 3: Using text values to select multiple items in a list box control { .section}

![](../Images/bia_select_multiple_aut.png)

**Action Lines**

![](../Images/bia_select_multiple_pgm.png)

**Result**

![](../Images/bia_select_multiple_res.png)

## Example - Case 4: Using numerical index values to select multiple items in a list box control { .section}

![](../Images/bia_select_multiple_index_aut.png)

**Action Lines**

![](../Images/bia_select_multiple_index_pgm.png)

**Result**

![](../Images/bia_select_multiple_index_res.png)

## Example { .section}

**Action Lines**

![](../Images/bia_select_ta4vs_pgm.png)

**Result**

![](../Images/bia_select_ta4vs_res.png)

**Effect**

![](../Images/bia_select_aut.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[is cell selected](../../TA_Automation/Topics/bia_is_cell_selected.html)

**Next topic:**[select column](../../TA_Automation/Topics/bia_select_column.html)

