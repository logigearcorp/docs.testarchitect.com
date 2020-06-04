--- 
title: "-"
linktitle: "set tree table cell value"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_set_tree_table_cell_value.html
---
keyword: [set tree table cell value, set contents of tree table cell, assign tree table cell value, assign value to tree table cell, assign value to cell in tree table]
---

# set tree table cell value

## Description

Set the contents of a cell in a tree table or tree list.

## Arguments

-   **window**

    TA name of the window

-   **tree**

    TA name of the tree table or tree list

-   **node path**

    Path of the node. \(Support index\).

-   **column**

    column number of the cell. \(Column numbers start at 1\).

-   **value**

    Value to which the cell contents are to be set. Additionally, if the cell is check-box or radio button user could input **yes** or **no**into this argument for check and uncheck.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version

TestArchitect version 8.5 onward.

## Example

**Action Lines**

![](/images//Images/bia_set_tree_table_cell_value_1.png)

**Result**

![](/images//Images/bia_set_tree_table_cell_value_2.png)

**Effect**

![](/images//Images/bia_set_tree_table_cell_value_3.png)

**Parent topic:**[Tree table, Tree List](/TA_Automation/Topics/bia_Tree_table.html)

**Previous topic:**[is tree table cell selected](/TA_Automation/Topics/bia_is_tree_table_cell_selected.html)

**Next topic:**[get tree table cell containing](/TA_Automation/Topics/bia_get_tree_table_cell_containing.html)

