--- 
title: "get table cell containing"
linktitle: "get table cell containing"
description: "Description Retrieve the position of the cell, within its table, containing the specified text value. Arguments window TA name of the window. table TA name of the table. text Text to be searched for. ..."
weight: 25
aliases: 
    - /TA_Automation/Topics/bia_get_table_cell_containing.html
keywords: "built-in actions, get table cell containing, get table cell containing (action), iOS (action), get table cell containing, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get position of cell containing specified value, retrieve position of cell containing specified value, get position of cell with specified value, retrieve position of cell with specified value"
---

## Description

Retrieve the position of the cell, within its table, containing the specified text value.

## Arguments

-   **window**

    TA name of the window.

-   **table**

    TA name of the table.

-   **text**

    Text to be searched for.

-   **row**

    Variable to receive the returned row number.

-   **column**

    Variable to receive the returned column number.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Search does not include the header row.
-   Row numbers start at 1 \(from top row, exclusive of any header row\); column numbers start at 1, from leftmost column.
-   A match is considered found when the contents of the examined cell exactly match the string in text. \(That is, it is not sufficient that the contents of text be a substring of the cell contents.\)
-   If no matching cell is found, the value of -1 is returned for both row and column numbers.
-   Search proceeds row by row from top to bottom; within each row, cells are searched from left to right. If multiple cells satisfy the search, TestArchitect returns the position of the first matching cell encountered.
-   If the variables in argumentsrow and columnhave not been declared, the action creates them as globals.
-   If either the row or column argument is left empty, a variable named row or col, respectively, is created to hold the return value.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table, list view.

## Example

![](/images/TA_Automation/Images/bia_get_table_cell_containing_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_cell_containing_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_cell_containing_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_table_cell_containing_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_cell_containing_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_cell_containing_ta4vs_res.png)




