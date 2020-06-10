--- 
title: "does tree node exist"
linktitle: "does tree node exist"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_does_tree_node_exist.html
keywords: "check if specific tree node exists, check for existence of specified tree node, check whether tree node exists, verify if tree node exists, verify existence of specified tree node"
---

## Description

Return a Boolean value to indicate whether a specified tree node exists.

## Arguments

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


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images//Images/bia_does_tree_node_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_tree_node_exist_pgm.png)

**Result**

![](/images//Images/bia_does_tree_node_exist_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_does_tree_node_exist_index_aut.png)

**Action Lines**

![](/images//Images/bia_does_tree_node_exist_index_pgm.png)

**Result**

![](/images//Images/bia_does_tree_node_exist_index_res.png)

## Example

![](/images//Images/bia_does_tree_node_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_tree_node_exist_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_does_tree_node_exist_ta4vs_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[count child node](/TA_Automation/Topics/bia_count_child_node.html)

**Next topic:**[expand tree node](/TA_Automation/Topics/bia_expand_tree_node.html)

**Related information**  


[check tree node exists](/TA_Automation/Topics/bia_check_tree_node_exists.html)

[check tree node not exists](/TA_Automation/Topics/bia_check_tree_node_not_exists.html)

