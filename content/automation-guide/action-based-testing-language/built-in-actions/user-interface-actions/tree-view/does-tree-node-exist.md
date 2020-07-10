--- 
title: "does tree node exist"
linktitle: "does tree node exist"
description: "Description Return a Boolean value to indicate whether a specified tree node exists. Arguments window TA name of the window. tree TA name of the tree control. node path Path to the node (see Notes ). ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_does_tree_node_exist.html
keywords: "built-in actions, does tree node exist, does tree node exist (action), check if specific tree node exists, check for existence of specified tree node, check whether tree node exists, verify if tree node exists, verify existence of specified tree node"
---

## {{< expand >}} Description

Return a Boolean value to indicate whether a specified tree node exists.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Node found.

    -   **0**

        Node not found.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## {{< expand >}} Example - Case 1: Using a text value for node path

![](/images/TA_Automation/Images/bia_does_tree_node_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_tree_node_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_tree_node_exist_res.png)

## {{< expand >}} Example - Case 2: Using a numerical index for node path

![](/images/TA_Automation/Images/bia_does_tree_node_exist_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_tree_node_exist_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_tree_node_exist_index_res.png)

**Related information**  


[check tree node exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-exists)

[check tree node not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-not-exists)

