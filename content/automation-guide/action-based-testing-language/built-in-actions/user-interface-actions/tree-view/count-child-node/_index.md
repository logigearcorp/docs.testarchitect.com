--- 
title: "count child node"
linktitle: "count child node"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_count_child_node.html
keywords: "count child node, obtain number of given tree node's children, count how many child nodes a parent node contains, count how many children a parent node has, get count of"
---

## Description

Return a count of the direct descendants of a given node in a tree.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the tree control.

-   **parent node**

    Path to the node whose immediate children \(the nodes residing beneath it on the next lower level\) are to be counted \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   parent node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for parent node

![](/images//Images/bia_count_child_node_aut.png)

**Action Lines**

![](/images//Images/bia_count_child_node_pgm.png)

**Result**

![](/images//Images/bia_count_child_node_res.png)

## Example - Case 2: Using a numerical index for parent node

![](/images//Images/bia_count_child_node_index_aut.png)

**Test Lines**

![](/images//Images/bia_count_child_node_index_pgm.png)

**Result**

![](/images//Images/bia_count_child_node_index_res.png)

## Example

![](/images//Images/bia_count_child_node_aut.png)

**Test Lines**

![](/images//Images/bia_count_child_node_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_count_child_node_ta4vs_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[collapse tree node](/TA_Automation/Topics/bia_collapse_tree_node.html)

**Next topic:**[does tree node exist](/TA_Automation/Topics/bia_does_tree_node_exist.html)

