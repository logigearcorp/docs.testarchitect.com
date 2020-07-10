--- 
title: "get tree check"
linktitle: "get tree check"
description: "Description Retrieve the status of a specified check box control on a tree node. Arguments window TA name of the window. control TA name of the tree control. node Path to the node (see Notes ). ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_get_tree_check.html
keywords: "built-in actions, get tree check, get tree check (action), get tree check, get status of specified check box for tree node, retrieve status of given check box on tree node"
---

## {{< expand >}} Description

Retrieve the status of a specified check box control on a tree node.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the tree control.

-   **node**

    Path to the node \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned value.

    Possible returned values:

    -   **on**

        Check box state is selected.

    -   **off**

        Check box state is cleared.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## {{< expand >}} Example - Case 1: Using a text value for node

![](/images/TA_Automation/Images/bia_get_tree_check_aut.png)

**Test Lines**

![](/images/TA_Automation/Images/bia_get_tree_check_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_tree_check_res.png)

## {{< expand >}} Example - Case 2: Using a numerical index for node

![](/images/TA_Automation/Images/bia_get_tree_check_index_aut.png)

**Test Lines**

![](/images/TA_Automation/Images/bia_get_tree_check_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_tree_check_index_res.png)

**Related information**  


[set tree check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/set-tree-check)

