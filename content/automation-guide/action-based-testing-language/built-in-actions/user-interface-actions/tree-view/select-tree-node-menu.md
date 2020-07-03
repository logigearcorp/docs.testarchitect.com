--- 
title: "select tree node menu"
linktitle: "select tree node menu"
description: "Description Right-click a tree node, then select an item from the context menu. Arguments window TA name of the window. tree TA name of the tree control. node path Path to the node (see Notes ). menu ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_select_tree_node_menu.html
keywords: "built-in actions, select tree node menu, select tree node menu (action), select tree node menu item, select specified item from context menu on tree node"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images/TA_Automation/Images/bia_select_tree_node_menu_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_tree_node_menu_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_tree_node_menu_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images/TA_Automation/Images/bia_select_tree_node_menu_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_tree_node_menu_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_tree_node_menu_index_res.png)

