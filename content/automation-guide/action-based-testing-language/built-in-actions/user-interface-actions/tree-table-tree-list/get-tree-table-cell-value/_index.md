--- 
title: "-"
linktitle: "get tree table cell value"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_get_tree_table_cell_value.html
---
keyword: [get tree table cell value, get cell contents, retrieve cell contents]
---

# get tree table cell value

## Description

Retrieve the contents of a cell in a tree table or tree list.

## Arguments

-   **window:**

    TA name of the window.

-   **tree**

    TA name of the tree list or tree table.

-   **node path**

    Path of the node. \(Support index\).

-   **column**

    column number of the cell. \(Column numbers start at 1\).

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

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version

TestArchitect version 8.5 onward.

## Example

![](/images//Images/bia_get_tree_table_cell_value_1.png)

**Action Lines**

![](/images//Images/bia_get_tree_table_cell_value_2.png)

**Result**

![](/images//Images/bia_get_tree_table_cell_value_3.png)

## Example

![](/images//Images/bia_get_tree_table_cell_value_4.png)

**Action Lines**

![](/images//Images/bia_get_tree_table_cell_value_5.png)

**Result**

![](/images//Images/bia_get_tree_table_cell_value_6.png)

**Parent topic:**[Tree table, Tree List](/TA_Automation/Topics/bia_Tree_table.html)

**Previous topic:**[check tree table cell value](/TA_Automation/Topics/bia_check_tree_table_cell_value.html)

**Next topic:**[is tree table cell selected](/TA_Automation/Topics/bia_is_tree_table_cell_selected.html)

