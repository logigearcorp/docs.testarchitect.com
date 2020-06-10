--- 
title: "get tree node menu state"
linktitle: "get tree node menu state"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_get_tree_node_menu_state.html
keywords: "get tree node menu state, retrieve state of specified menu item on context menu of tree node, get state of specific menu on context menu of tree node"
---

## Description

Retrieve the state of a specified menu item on a context menu of a tree node.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).

-   **menu item**

    Menu item or menu item path \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned value.

-   **x**

    \(Optional\) Horizontal position of effective click on tree node , specified as distance in pixels from left edge of tree node. \(Defaults to horizontal center of tree node.\)

-   **y**

    \(Optional\) Vertical position of effective click on tree node , specified as distance in pixels from top edge of tree node. \(Defaults to vertical center of tree node.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
-   menu item argument:
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images//Images/bia_get_tree_node_menu_state_aut.png)

**Test Lines**

![](/images//Images/bia_get_tree_node_menu_state_pgm.png)

**Result**

![](/images//Images/bia_get_tree_node_menu_state_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_get_tree_node_menu_state_aut.png)

**Test Lines**

![](/images//Images/bia_get_tree_node_menu_state_index_pgm.png)

**Result**

![](/images//Images/bia_get_tree_node_menu_state_index_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[get tree check](/TA_Automation/Topics/bia_get_tree_check.html)

**Next topic:**[get tree node status](/TA_Automation/Topics/bia_get_tree_node_status.html)

