--- 
title: "check tree node exists"
linktitle: "check tree node exists"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_tree_node_exists.html
keywords: "check tree node exists, check for existence of specified tree node, check if specific tree node exist, check whether given tree node is found, verify existence of specified tree node"
---

## Description

Check for the existence of a specified tree node. Result is Passed ifthe node is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images//Images/bia_check_tree_node_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_tree_node_exists_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_exists_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_check_tree_node_exists_index_aut.png)

**Action Lines**

![](/images//Images/bia_check_tree_node_exists_index_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_exists_index_res.png)

## Example

![](/images//Images/bia_check_tree_node_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_tree_node_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_exists_ta4vs_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Next topic:**[check tree node menu state](/TA_Automation/Topics/bia_check_tree_node_menu_state.html)

**Related information**  


[check tree node not exists](/TA_Automation/Topics/bia_check_tree_node_not_exists.html)

[does tree node exist](/TA_Automation/Topics/bia_does_tree_node_exist.html)

