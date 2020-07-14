--- 
title: "get tree table cell containing"
linktitle: "get tree table cell containing"
description: "Description Retrieve the position of the cell, within its tree table or tree list, containing the specified text value. The position returns are column and node path. Arguments window TA name of the ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_tree_table_cell_containing.html
keywords: "built-in actions, get tree table cell containing, get tree table cell containing (action), iOS (action), get tree table cell containing, Safari, iOS (action), get tree table cell containing, iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get tree table cell containing, get position of cell containing specified value, retrieve position of cell containing specified value, get position of cell with specified value, retrieve position of cell with specified value"
---

## Description

Retrieve the position of the cell, within its tree table or tree list, containing the specified text value. The position returns are column and node path.

## Arguments

-   **window**

    TA name of the window.

-   **tree**

    TA name of the tree list or tree table.

-   **node path**

    Path of the node. \(Support index\).

-   **text**

    Text to be searched for.

-   **recursive**

    \(Optional\) Search each level of the tree table. Default value is off.

-   **column**

    Variable to receive the returned column number.

-   **variable**

    Variable to receive the returned index node path.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Search does not include the header row.
-   Column numbers start at 1, from leftmost column.
-   A match is considered found when the contents of the examined cell exactly match the string in text. \(That is, it is not sufficient that the contents of text be a substring of the cell contents.\)
-   If no matching cell is found, the value of -1 is returned for column numbers. And empty for node path.
-   Search proceeds row by row from top to bottom; within each row, cells are searched from left to right. If multiple cells satisfy the search, TestArchitect returns the position of the first matching cell encountered.
-   If the variables in argumentsvariable and columnhave not been declared, the action creates them as globals.
-   If either the variable or column argument is left empty, a variable named var or col, respectively, is created to hold the return value.
-   If either the node path or recursive argument is left empty, TestArchitect will only search the tables in level 1 of the root node.
-   With **recursive** mode **on**TestArchitect will search in all the sub nodes. This will decrease test performance, especially with large tree tables.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:Tree table, tree list.

## Applicable Platform {{< permerlink >}} {#bia_get_table_cell_containing__section_pvr_hfr_dkb} 

Systems Applications and Products in Data Processing \(SAP\).

## Applicable Version {{< permerlink >}} {#bia_get_table_cell_containing__section_fwl_2jr_dkb} 

TestArchitect version 8.5 onward.

## Example

![](/images/TA_Automation/Images/bia_get_tree_table_cell_containing_1.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_tree_table_cell_containing_2.png)

Result

![](/images/TA_Automation/Images/bia_get_tree_table_cell_containing_3.png)

## Example

![](/images/TA_Automation/Images/bia_get_tree_table_cell_containing_4.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_tree_table_cell_containing_5.png)

Result

![](/images/TA_Automation/Images/bia_get_tree_table_cell_containing_6.png)


