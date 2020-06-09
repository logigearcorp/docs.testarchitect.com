--- 
title: "check tree node status"
linktitle: "check tree node status"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_tree_node_status.html
---
keyword: [check tree node status, check if status of specified tree node matches expected value, check status of specified tree node against expected value, verify whether given tree node matches expected value]
---

# check tree node status

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
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node

![](/images//Images/bia_check_tree_node_status_aut.png)

**Action Lines**

![](/images//Images/bia_check_tree_node_status_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_status_res.png)

## Example - Case 2: Using a numerical index for node

![](/images//Images/bia_check_tree_node_status_index_aut.png)

**Action Lines**

![](/images//Images/bia_check_tree_node_status_index_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_status_index_res.png)

## Example

![](/images//Images/bia_check_tree_node_status_aut.png)

**Action Lines**

![](/images//Images/bia_check_tree_node_status_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_status_ta4vs_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[check tree node not exists](/TA_Automation/Topics/bia_check_tree_node_not_exists.html)

**Next topic:**[click tree node](/TA_Automation/Topics/bia_click_tree_node.html)

**Related information**  


[get tree node status](/TA_Automation/Topics/bia_get_tree_node_status.html)

