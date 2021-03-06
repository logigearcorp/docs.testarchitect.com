--- 
title: "get table view cell value"
linktitle: "get table view cell value"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_cell_value.html
keywords: "get table view cell value, retrieve value of specific table view cell, obtain value of specified table view cell"
---

## Description

Retrieve the text content of a table view cell.

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
-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [ignore blank space](ignore_blank_space.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [value changed wait](value_changed_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images//Images/bia_bia_get_table_view_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_table_view_cell_value_pgm.png)

**Result**

![](/images//Images/bia_get_table_view_cell_value_res.png)

## Example - Case 2: section header argument is empty

![](/images//Images/bia_bia_get_table_view_cell_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_table_view_cell_value_2_pgm.png)

**Result**

![](/images//Images/bia_get_table_view_cell_value_2_res.png)

**Parent topic:**[Table View](/TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[get table view cell containing](/TA_Automation/Topics/bia_get_table_view_cell_containing.html)

**Next topic:**[get table view section](/TA_Automation/Topics/bia_get_table_view_section.html)

