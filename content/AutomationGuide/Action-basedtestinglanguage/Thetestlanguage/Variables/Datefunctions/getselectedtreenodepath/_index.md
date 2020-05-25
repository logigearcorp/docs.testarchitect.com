--- 
title: "get selected tree node path"
linktitle: "get selected tree node path"
aliases: 
    - /TA_Automation/Topics/bia_get_selected_tree_node_path.html
---
# get selected tree node path {#bia_get_selected_tree_node_path .reference}

## Description { .section}

Retrieve the node path to the currently selected node in the specified tree.

## Arguments { .section}

window
:   TA name of the window.

tree view
:   TA name of the tree control.

variable
:   \(Optional\) Variable to receive the returned node path \(see Notes\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   The returned string consists of nodes in the path, delimited by forward slashes \( / \).
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:tree view, tree table, tree list.

## Example { .section}

![](../Images/bia_get_selected_tree_node_path_aut.png)

**Action Lines**

![](../Images/bia_get_selected_tree_node_path_pgm.png)

**Result**

![](../Images/bia_get_selected_tree_node_path_res.png)

## Example { .section}

![](../Images/bia_get_selected_tree_node_path_aut.png)

**Action Lines**

![](../Images/bia_get_selected_tree_node_path_ta4vs_pgm.png)

**Result**

![](../Images/bia_get_selected_tree_node_path_ta4vs_res.png)

**Parent topic:**[Tree View](../../TA_Automation/Topics/bia_Tree_view.html)

**Previous topic:**[expand tree node](../../TA_Automation/Topics/bia_expand_tree_node.html)

**Next topic:**[get tree check](../../TA_Automation/Topics/bia_get_tree_check.html)

