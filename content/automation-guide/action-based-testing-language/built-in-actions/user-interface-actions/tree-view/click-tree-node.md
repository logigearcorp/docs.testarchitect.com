--- 
title: "click tree node"
linktitle: "click tree node"
description: "Description Click a specified tree node. Arguments window TA name of the window. tree TA name of the tree control. node path Path to the node (see Notes ). click type (Optional) Type of mouse click. ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_click_tree_node.html
keywords: "built-in actions, click tree node, click tree node (action), click tree node"
---

## {{< expand >}} Description

Click a specified tree node.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree control.

-   **node path**

    Path to the node \(see Notes\).

-   **click type**

    \(Optional\) Type of mouse click.

    Allowable values:

    -   **left**

        \(Default\) Single left-click.

    -   **right**

        Single right-click.

    -   **double**

        Double left-click.

-   **x**

    \(Optional\) Horizontal position of effective click on tree node , specified as distance in pixels from left edge of tree node. \(Defaults to horizontal center of tree node.\)

-   **y**

    \(Optional\) Vertical position of effective click on tree node , specified as distance in pixels from top edge of tree node. \(Defaults to vertical center of tree node.\)


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   node path argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node path

**Action Lines**

![](/images/TA_Automation/Images/bia_click_tree_node_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_click_tree_node_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_click_tree_node_aut.png)

## Example - Case 2: Using a numerical index for node path

![](/images/TA_Automation/Images/bia_click_tree_node_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_click_tree_node_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_click_tree_node_index_res.png)

