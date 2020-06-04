--- 
title: "-"
linktitle: "select tree node menu"
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_select_tree_node_menu.html
---
keyword: [select tree node menu item, select specified item from context menu on tree node]
---

# select tree node menu

## Description

Right-click a tree node, then select an item from the context menu.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).

-   **menu item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
-   menu item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images//Images/bia_select_tree_node_menu_aut.png)

**Action Lines**

![](/images//Images/bia_select_tree_node_menu_pgm.png)

**Result**

![](/images//Images/bia_select_tree_node_menu_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images//Images/bia_select_tree_node_menu_index_aut.png)

**Action Lines**

![](/images//Images/bia_select_tree_node_menu_index_pgm.png)

**Result**

![](/images//Images/bia_select_tree_node_menu_index_res.png)

## Example

![](/images//Images/bia_select_tree_node_menu_aut.png)

**Action Lines**

![](/images//Images/bia_select_tree_node_menu_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_select_tree_node_menu_ta4vs_res.png)

**Parent topic:**[Tree View](/TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[get tree node status](/TA_Automation/Topics/bia_get_tree_node_status.html)

**Next topic:**[set tree check](/TA_Automation/Topics/bia_set_tree_check.html)

