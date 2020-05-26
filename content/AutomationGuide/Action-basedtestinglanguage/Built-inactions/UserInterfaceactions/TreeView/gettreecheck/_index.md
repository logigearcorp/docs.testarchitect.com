--- 
title: "get tree check"
linktitle: "get tree check"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_get_tree_check.html
---
# get tree check {#bia_get_tree_check .reference}

## Description { .section}

Retrieve the status of a specified check box control on a tree node.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the tree control.

node
:   Path to the node \(see Notes\).

variable
:   \(Optional\) Variable to receive the returned value.

:   Possible returned values:

    on
    :   Check box state is selected.

    off
    :   Check box state is cleared.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   node argument:
    -   The node path may be specified by its display textor by a numerical index representing its cardinal placement in its branch, with index values starting at 1.
    -   If a node path of more than one item must be specified, use forward slashes \( / \) as delimiters between node levels.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:tree view, tree table, tree list.

## Example - Case 1: Using a text value for node { .section}

![](../Images/bia_get_tree_check_aut.png)

**Test Lines**

![](../Images/bia_get_tree_check_pgm.png)

**Result**

![](../Images/bia_get_tree_check_res.png)

## Example - Case 2: Using a numerical index for node { .section}

![](../Images/bia_get_tree_check_index_aut.png)

**Test Lines**

![](../Images/bia_get_tree_check_index_pgm.png)

**Result**

![](../Images/bia_get_tree_check_index_res.png)

## Example { .section}

![](../Images/bia_get_tree_check_aut.png)

**Test Lines**

![](../Images/bia_get_tree_check_ta4vs_pgm.png)

**Result**

![](../Images/bia_get_tree_check_ta4vs_res.png)

**Parent topic:**[Tree View](../../TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[get selected tree node path](../../TA_Automation/Topics/bia_get_selected_tree_node_path.html)

**Next topic:**[get tree node menu state](../../TA_Automation/Topics/bia_get_tree_node_menu_state.html)

**Related information**  


[set tree check](../../TA_Automation/Topics/bia_set_tree_check.html)

