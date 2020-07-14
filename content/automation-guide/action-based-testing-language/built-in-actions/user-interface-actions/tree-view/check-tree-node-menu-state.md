--- 
title: "check tree node menu state"
linktitle: "check tree node menu state"
description: "Description Check the state of a specified menu item on a context menu of a tree node against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_tree_node_menu_state.html
keywords: "built-in actions, check tree node menu state, check tree node menu state (action), check tree node menu state, check state of specified item on menu time of tree node against expected value, check if state of specified item on menu time of tree node matches expected value, verify if state of specified item on menu time of tree node matches expected value, verify whether state of specified item on menu time of tree node matches expected value"
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

-   expected

    Expected value\(s\) of the menu item.

    Possible values:

    -   **disabled**

        The menu item is unavailable or disabled.

    -   **enabled**

        The menu item is enabled or available.

    -   **checked**

        The menu item is selected.

    {{<tip>}} Use commas \(,\) as delimiters between expected values of the state property.

-   **x**

    \(Optional\) Horizontal position of effective click on tree node , specified as distance in pixels from left edge of tree node. \(Defaults to horizontal center of tree node.\)

-   **y**

    \(Optional\) Vertical position of effective click on tree node , specified as distance in pixels from top edge of tree node. \(Defaults to vertical center of tree node.\)


expected

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

![](/images/TA_Automation/Images/bia_check_tree_node_menu_state_aut.png)

**Test Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_menu_state_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_tree_node_menu_state_res.png)

## Example - Case 2: Using a numerical index for node path

![](/images/TA_Automation/Images/bia_check_tree_node_menu_state_aut.png)

**Test Lines**

![](/images/TA_Automation/Images/bia_check_tree_node_menu_state_index_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_tree_node_menu_state_index_res.png)



