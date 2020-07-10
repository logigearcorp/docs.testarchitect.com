--- 
title: "collapse tree node"
linktitle: "collapse tree node"
description: "Description Collapse a tree node, hiding all its child nodes. Arguments window TA name of the window. control TA name of the tree control. node Path to the node (see Notes ). Valid contexts This ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_collapse_tree_node.html
keywords: "built-in actions, collapse tree node, collapse tree node (action), collapse tree node"
---

## {{< expand >}} Description

Collapse a tree node, hiding all its child nodes.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the tree control.

-   **node**

    Path to the node \(see Notes\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node

**Action Lines**

![](/images/TA_Automation/Images/bia_collapse_tree_node_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_collapse_tree_node_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_collapse_tree_node_aut2.png)

## {{< expand >}} Example - Case 2: Using a numerical index for node

![](/images/TA_Automation/Images/bia_collapse_tree_node_index_aut2.png)

**Test Lines**

![](/images/TA_Automation/Images/bia_collapse_tree_node_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_collapse_tree_node_index_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_collapse_tree_node_aut2.png)

**Related information**  


[expand tree node](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/expand-tree-node)

