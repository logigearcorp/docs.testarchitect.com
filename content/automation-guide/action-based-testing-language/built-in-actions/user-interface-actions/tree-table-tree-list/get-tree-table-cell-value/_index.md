--- 
title: "get tree table cell value"
linktitle: "get tree table cell value"
description: "Description Retrieve the contents of a cell in a tree table or tree list. Arguments window: TA name of the window. tree TA name of the tree list or tree table. node path Path of the node. (Support ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_get_tree_table_cell_value.html
keywords: "built-in actions, get tree table cell value, get tree table cell value (action), iOS (action), get tree table cell value, Safari, iOS (action), get tree table cell value, iOS, Safari (action), Android (action), Android, Google Chrome (action), get tree table cell value, Google Chrome, Android (action), get cell contents, retrieve cell contents"
---

## Description

Retrieve the contents of a cell in a tree table or tree list.

## Arguments

-   **window:**

    TA name of the window.

-   **tree**

    TA name of the tree list or tree table.

-   **node path**

    Path of the node. \(Support index\).

-   **column**

    column number of the cell. \(Column numbers start at 1\).

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version

TestArchitect version 8.5 onward.

## Example

![](/images/TA_Automation/Images/bia_get_tree_table_cell_value_1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_tree_table_cell_value_2.png)

**Result**

![](/images/TA_Automation/Images/bia_get_tree_table_cell_value_3.png)

## Example

![](/images/TA_Automation/Images/bia_get_tree_table_cell_value_4.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_tree_table_cell_value_5.png)

**Result**

![](/images/TA_Automation/Images/bia_get_tree_table_cell_value_6.png)




