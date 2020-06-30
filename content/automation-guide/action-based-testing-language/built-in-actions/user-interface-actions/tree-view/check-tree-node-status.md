--- 
title: "check tree node status"
linktitle: "check tree node status"
description: "Description Check the current status of a tree node. Result is Passed if the actual status matches that which is expected ; otherwise Failed . Arguments window TA name of the window. control TA name ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_tree_node_status.html
keywords: "built-in actions, check tree node status, check tree node status (action), check tree node status, check if status of specified tree node matches expected value, check status of specified tree node against expected value, verify whether given tree node matches expected value"
---

## Description

Check the current status of a tree node. Result is Passed ifthe actual status matches that which is expected; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the tree control.

-   **node**

    Path to the node \(see Notes\).

-   **expected**

    Expected tree node status.

    Allowable values:

    -   **expanded**

        The tree node is in the expanded state.

    -   **collapsed**

        The tree node is in the collapsed state.

    -   **leaf**

        The tree node has zero child nodes, hence this node is not expandable.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node

![](/images/TA_Automation/Images/bia_check_tree_node_status_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_status_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tree_node_status_res.png)

## Example - Case 2: Using a numerical index for node

![](/images/TA_Automation/Images/bia_check_tree_node_status_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_status_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tree_node_status_index_res.png)

## Example

![](/images/TA_Automation/Images/bia_check_tree_node_status_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_status_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tree_node_status_ta4vs_res.png)




**Related information**  


[get tree node status](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/get-tree-node-status)

