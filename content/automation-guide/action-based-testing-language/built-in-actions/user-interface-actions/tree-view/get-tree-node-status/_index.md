--- 
title: "get tree node status"
linktitle: "get tree node status"
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_get_tree_node_status.html
keywords: "get tree node status, retrieve states of specified tree node, get states of given tree node"
---

## Description

Retrieve the state\(s\) of a specified tree node.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the tree control.

-   **node**

    Path to the node \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned value.

    Possible returned states:

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
-   variable argument:
    -   If multiple states are returned to the variable, they are delimited by commas \(,\).
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node

![](/images//Images/bia_get_tree_node_status_aut.png)

**Action Lines**

![](/images//Images/bia_get_tree_node_status_pgm.png)

**Result**

![](/images//Images/bia_get_tree_node_status_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_get_tree_node_status_index_aut.png)

**Action Lines**

![](/images//Images/bia_get_tree_node_status_index_pgm.png)

**Result**

![](/images//Images/bia_get_tree_node_status_index_res.png)

## Example

![](/images//Images/bia_get_tree_node_status_aut.png)

**Action Lines**

![](/images//Images/bia_get_tree_node_status_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_get_tree_node_status_ta4vs_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[get tree node menu state](/TA_Automation/Topics/bia_get_tree_node_menu_state.html)

**Next topic:**[select tree node menu](/TA_Automation/Topics/bia_select_tree_node_menu.html)

**Related information**  


[check tree node status](/TA_Automation/Topics/bia_check_tree_node_status.html)

