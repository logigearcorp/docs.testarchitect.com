--- 
title: "check tree node menu state"
linktitle: "check tree node menu state"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_tree_node_menu_state.html
keywords: "check tree node menu state, check state of specified item on menu time of tree node against expected value, check if state of specified item on menu time of tree node matches expected value, verify if state of specified item on menu time of tree node matches expected value, verify whether state of specified item on menu time of tree node matches expected value"
---

## Description

Check the state of a specified menu item on a context menu of a tree node against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).

-   **menu item**

    Menu item or menu item path \(see Notes\).

-   **expected**

    Expected value\(s\) of the menu item.

    Possible values:

    -   **disabled**

        The menu item is unavailable or disabled.

    -   **enabled**

        The menu item is enabled or available.

    -   **checked**

        The menu item is selected.

    **Tip:** Use commas \(,\) as delimiters between expected values of the state property.

-   **x**

    \(Optional\) Horizontal position of effective click on tree node , specified as distance in pixels from left edge of tree node. \(Defaults to horizontal center of tree node.\)

-   **y**

    \(Optional\) Vertical position of effective click on tree node , specified as distance in pixels from top edge of tree node. \(Defaults to vertical center of tree node.\)


**expected**

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
-   menu item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images//Images/bia_check_tree_node_menu_state_aut.png)

**Test Lines**

![](/images//Images/bia_check_tree_node_menu_state_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_menu_state_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_check_tree_node_menu_state_aut.png)

**Test Lines**

![](/images//Images/bia_check_tree_node_menu_state_index_pgm.png)

**Result**

![](/images//Images/bia_check_tree_node_menu_state_index_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[check tree node exists](/TA_Automation/Topics/bia_check_tree_node_exists.html)

**Next topic:**[check tree node not exists](/TA_Automation/Topics/bia_check_tree_node_not_exists.html)

