--- 
title: "get tree table cell containing"
linktitle: "get tree table cell containing"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_tree_table_cell_containing.html
---
keyword: [get tree table cell containing, get position of cell containing specified value, retrieve position of cell containing specified value, get position of cell with specified value, retrieve position of cell with specified value]
---

# get tree table cell containing

## Description

Retrieve the position of the cell, within its tree table or tree list, containing the specified text value. The position returns are column and node path.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree list or tree table.

-   **node path**

    Path of the node. \(Support index\).

-   **text**

    Text to be searched for.

-   **recursive**

    \(Optional\) Search each level of the tree table. Default value is off.

-   **column**

    Variable to receive the returned column number.

-   **variable**

    Variable to receive the returned index node path.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Search does not include the header row.
-   Column numbers start at 1, from leftmost column.
-   A match is considered found when the contents of the examined cell exactly match the string in text. \(That is, it is not sufficient that the contents of text be a substring of the cell contents.\)
-   If no matching cell is found, the value of -1 is returned for column numbers. And empty for node path.
-   Search proceeds row by row from top to bottom; within each row, cells are searched from left to right. If multiple cells satisfy the search, TestArchitect returns the position of the first matching cell encountered.
-   If the variables in argumentsvariable and columnhave not been declared, the action creates them as globals.
-   If either the variable or column argument is left empty, a variable named var or col, respectively, is created to hold the return value.
-   If either the node path or recursive argument is left empty, TestArchitect will only search the tables in level 1 of the root node.
-   With **recursive** mode **on**TestArchitect will search in all the sub nodes. This will decrease test performance, especially with large tree tables.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [page wait](page_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version

TestArchitect version 8.5 onward.

## Example

![](/images//Images/bia_get_tree_table_cell_containing_1.png)

**Action Lines**

![](/images//Images/bia_get_tree_table_cell_containing_2.png)

**Result**

![](/images//Images/bia_get_tree_table_cell_containing_3.png)

## Example

![](/images//Images/bia_get_tree_table_cell_containing_4.png)

**Action Lines**

![](/images//Images/bia_get_tree_table_cell_containing_5.png)

**Result**

![](/images//Images/bia_get_tree_table_cell_containing_6.png)

**Parent topic:**[Tree table, Tree List](/TA_Automation/Topics/bia_Tree_table.html)

**Previous topic:**[set tree table cell value](/TA_Automation/Topics/bia_set_tree_table_cell_value.html)

