--- 
title: "check table view cell exists"
linktitle: "check table view cell exists"
description: "Description Check for the existence of a specified table view cell. Result is Passed if the specified table view cell is found ; otherwise Failed . Arguments window TA name of the window. control TA ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_cell_exists.html
keywords: "built-in actions, check table view cell exists, check table view cell exists (action), iOS (action), check table view cell exists, check if specified table view cell exists, check for existence of specific table view cell, verify existence of specified table view cell, verify whether specific cell is found in table view"
---

## Description

Check for the existence of a specified table view cell. Result is Passed ifthe specified table view cell is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    \(Optional\) Identifying header text of table view cell section. \(See index argument.\)

-   **index**

    Identifying index of table view cell:

    -   If section header is non-empty, index must be a single integral value specifying the cardinal position of the cell within the section.
    -   If section header is blank, index must specify an index path of the form: `section index.cell index`. \(Example: `2.5`\).

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images/TA_Automation/Images/bia_check_table_view_cell_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_table_view_cell_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_table_view_cell_exists_res.png)

## Example - Case 2: section header argument empty

![](/images/TA_Automation/Images/bia_check_table_view_cell_exists_aut2.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_table_view_cell_exists_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_table_view_cell_exists_2_res.png)



