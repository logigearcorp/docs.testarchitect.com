--- 
title: "click tree node"
linktitle: "click tree node"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_click_tree_node.html
---
keyword: click tree node
---

# click tree node

## Description

Click a specified tree node.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).

-   **click type**

    \(Optional\) Type of mouse click.

    Allowable values:

    -   **left**

        \(Default\) Single left-click.

    -   **right**

        Single right-click.

    -   **double**

        Double left-click.

-   **x**

    \(Optional\) Horizontal position of effective click on tree node , specified as distance in pixels from left edge of tree node. \(Defaults to horizontal center of tree node.\)

-   **y**

    \(Optional\) Vertical position of effective click on tree node , specified as distance in pixels from top edge of tree node. \(Defaults to vertical center of tree node.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

**Action Lines**

![](/images//Images/bia_click_tree_node_pgm.png)

**Result**

![](/images//Images/bia_click_tree_node_res.png)

**Effect**

![](/images//Images/bia_click_tree_node_aut.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_click_tree_node_index_aut.png)

**Action Lines**

![](/images//Images/bia_click_tree_node_index_pgm.png)

**Result**

![](/images//Images/bia_click_tree_node_index_res.png)

## Example

**Action Lines**

![](/images//Images/bia_click_tree_node_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_click_tree_node_ta4vs_res.png)

**Effect**

![](/images//Images/bia_click_tree_node_aut.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[check tree node status](/TA_Automation/Topics/bia_check_tree_node_status.html)

**Next topic:**[collapse tree node](/TA_Automation/Topics/bia_collapse_tree_node.html)

