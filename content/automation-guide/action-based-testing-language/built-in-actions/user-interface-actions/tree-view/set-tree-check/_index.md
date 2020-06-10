--- 
title: "set tree check"
linktitle: "set tree check"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_set_tree_check.html
keywords: "set tree check, select checkbox on tree node, clear check box on tree node"
---

## Description

Select or clear a check box on a tree node.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the tree control.

-   **node**

    Path to the node \(see Notes\).

-   **value**

    The status to set.

    Allowable values:

    -   **on, yes, y, true, t, 1 or checked**

        Select the check box.

    -   **off, no, n, false, f, 0 or unchecked**

        Clear the check box.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node

![](/images//Images/bia_set_tree_check_aut1.png)

**Test Lines**

![](/images//Images/bia_set_tree_check_pgm.png)

**Result**

![](/images//Images/bia_set_tree_check_res.png)

**Effect**

![](/images//Images/bia_set_tree_check_aut2.png)

## Example - Case 2: Using a numerical index for node

![](/images//Images/bia_set_tree_check_index_aut1.png)

**Test Lines**

![](/images//Images/bia_set_tree_check_index_pgm.png)

**Result**

![](/images//Images/bia_set_tree_check_index_res.png)

**Effect**

![](/images//Images/bia_set_tree_check_index_effect2.png)

## Example

![](/images//Images/bia_set_tree_check_aut1.png)

**Test Lines**

![](/images//Images/bia_set_tree_check_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_set_tree_check_ta4vs_res.png)

**Effect**

![](/images//Images/bia_set_tree_check_aut2.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[select tree node menu](/TA_Automation/Topics/bia_select_tree_node_menu.html)

**Related information**  


[get tree check](/TA_Automation/Topics/bia_get_tree_check.html)

