--- 
title: "get selected tree node path"
linktitle: "get selected tree node path"
description: "Description Retrieve the node path to the currently selected node in the specified tree. Arguments window TA name of the window. tree view TA name of the tree control. variable (Optional) Variable to ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_get_selected_tree_node_path.html
keywords: "built-in actions, get selected tree node path, get selected tree node path (action), get selected tree node path, get path to the selected tree node, get path from root to selected tree node, retrieve path to selected tree node, retrieve path from root to select tree node"
---

## Description

Retrieve the node path to the currently selected node in the specified tree.

## Arguments

-   **window**

    TA name of the window.

-   **tree view**

    TA name of the tree control.

-   **variable**

    \(Optional\) Variable to receive the returned node path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   The returned string consists of nodes in the path, delimited by forward slashes \( / \).
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:tree view, tree table, tree list.

## Example

![](/images/TA_Automation/Images/bia_get_selected_tree_node_path_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_selected_tree_node_path_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_selected_tree_node_path_res.png)
