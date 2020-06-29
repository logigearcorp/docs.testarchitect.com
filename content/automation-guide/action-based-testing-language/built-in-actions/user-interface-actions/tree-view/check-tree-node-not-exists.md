--- 
title: "check tree node not exists"
linktitle: "check tree node not exists"
description: "Description Check for the nonexistence of a specified tree node. Result is Passed if the node is not found ; otherwise Failed . Arguments window TA name of the window. tree TA name of the tree ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_tree_node_not_exists.html
keywords: "built-in actions, check tree node not exists, check tree node not exists (action), check tree node not exists, check if specified tree node does not exist, check whether specified tree node is not found, check for nonexistence of specific tree node, verify nonexistence of specific tree node"
---

## Description

Check for the nonexistence of a specified tree node. Result is Passed ifthe node is not found; otherwise Failed.

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Example - Case 1: Using a text value for node path

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_index_res.png)

## Example

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tree_node_not_exists_ta4vs_res.png)




**Related information**  


[check tree node exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-exists)

[does tree node exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/does-tree-node-exist)

