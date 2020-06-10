--- 
title: "click tree table cell"
linktitle: "click tree table cell"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_click_tree_table_cell.html
keywords: "click tree table cell, click specified cell in tree table, mouse click on cell in tree table"
---

## Description

Click a specific cell in a tree table or tree list.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree table or tree list

-   **node path**

    Path to the node. \(Support index\)

-   **column**

    column number of the cell. \(Column numbers start at 1.\)

-   **click type**

    \(Optional\) Type of mouse click.

    -   Allowable value:
        -   **left**:\(Default\) Single left-click.
        -   **right**: Single right-click.
        -   **double**: Double left-click.
-   **x**

    \(Optional\) Horizontal position of effective click, specified as distance in pixels from left edge of cell. \(Defaults to horizontal center of cell.\).

-   **y**

    \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of cell. \(Defaults to vertical center of cell.\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   x and yare unsupported arguments and hence invisible. To use them, you must specify both their values and the headers x and y, respectively, in the cells to the right of the last visible argument.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version

TestArchitect version 8.5 onward.

## Example

![](/images//Images/bia_click_tree_table_cell_1.png)

**Action Lines**

![](/images//Images/bia_click_tree_talbe_cell_2.png)

**Result**

![](/images//Images/bia_click_tree_table_cell_3.png)

## Example

![](/images//Images/bia_click_tree_table_cell_4.png)

**Action Lines**

![](/images//Images/bia_click_tree_table_cell_5.png)

**Result**

![](/images//Images/bia_click_tree_table_cell_6.png)

**Parent topic:**[Tree table, Tree List](/TA_Automation/Topics/bia_Tree_table.html)

**Next topic:**[check tree table cell value](/TA_Automation/Topics/bia_check_tree_table_cell_value.html)

