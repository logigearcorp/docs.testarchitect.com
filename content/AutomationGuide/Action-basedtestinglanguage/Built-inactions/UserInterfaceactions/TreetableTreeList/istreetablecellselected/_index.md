--- 
title: "is tree table cell selected"
linktitle: "is tree table cell selected"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_is_tree_table_cell_selected.html
---
# is tree table cell selected {#bia_is_cell_selected .reference}

## Description { .section}

Return a Boolean value to indicate whether a specified cell in a tree table or tree list is selected..

## Arguments { .section}

window
:   TA name of the window.

tree
:   TA name of the tree table or tree list.

node path
:   Path of the node. \(Support index\).

column
:   column number of the cell. \(Column numbers start at 1\).

variable
:   \(Optional\) Variable to receive the returned Boolean value.

:   Possible returned values:

    1
    :   Cell is selected.

    0
    :   Cell is not selected.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform {#section_pvr_hfr_dkb .section}

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version {#section_fwl_2jr_dkb .section}

TestArchitect version 8.5 onward.

## Example { .section}

![](../Images/bia_is_tree_table_cell_selected_1.png)

**Action Lines**

![](../Images/bia_is_tree_table_cell_selected_2.png)

**Result**

![](../Images/bia_is_tree_table_cell_selected_3.png)

## Example { .section}

![](../Images/bia_is_tree_table_cell_selected_4.png)

**Action Lines**

![](../Images/bia_is_tree_table_cell_selected_5.png)

**Result**

![](../Images/bia_is_tree_table_cell_selected_6.png)

**Parent topic:**[Tree table, Tree List](../../TA_Automation/Topics/bia_Tree_table.html)

**Previous topic:**[get tree table cell value](../../TA_Automation/Topics/bia_get_tree_table_cell_value.html)

**Next topic:**[set tree table cell value](../../TA_Automation/Topics/bia_set_tree_table_cell_value.html)

