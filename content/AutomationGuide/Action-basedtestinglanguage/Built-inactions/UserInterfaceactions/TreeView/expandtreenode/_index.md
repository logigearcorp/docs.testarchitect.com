--- 
title: "expand tree node"
linktitle: "expand tree node"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_expand_tree_node.html
---
# expand tree node {#bia_expand_tree_node .reference}

## Description { .section}

Expand a tree node.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the tree control.

node
:   Path to the node \(see Notes\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node { .section}

**Action Lines**

![](../Images/bia_expand_tree_node_pgm.png)

**Result**

![](../Images/bia_expand_tree_node_res.png)

**Effect**

![](../Images/bia_expand_tree_node_aut2.png)

## Example - Case 2: Using a numerical index for node { .section}

![](../Images/bia_expand_tree_node_index_aut2.png)

**Action Lines**

![](../Images/bia_expand_tree_node_index_pgm.png)

**Result**

![](../Images/bia_expand_tree_node_index_res.png)

**Effect**

![](../Images/bia_expand_tree_node_index_effect.png)

## Example { .section}

**Action Lines**

![](../Images/bia_expand_tree_node_ta4vs_pgm.png)

**Result**

![](../Images/bia_expand_tree_node_ta4vs_res.png)

**Effect**

![](../Images/bia_expand_tree_node_aut2.png)

**Parent topic:**[Tree View](../../TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[does tree node exist](../../TA_Automation/Topics/bia_does_tree_node_exist.html)

**Next topic:**[get selected tree node path](../../TA_Automation/Topics/bia_get_selected_tree_node_path.html)

**Related information**  


[collapse tree node](../../TA_Automation/Topics/bia_collapse_tree_node.html)

