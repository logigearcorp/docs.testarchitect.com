--- 
title: "does table view cell exist"
linktitle: "does table view cell exist"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_does_table_view_cell_exist.html
---
keyword: [does table view cell exist, check if specified table view cell is found, check if table view cell matches expected value]
---

# does table view cell exist

## Description

Return a Boolean value to indicate whether the specified table view cell is found to exist.

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

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Table view cell found

    -   **0**

        Table view cell not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images//Images/bia_does_table_view_cell_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_table_view_cell_exist_pgm.png)

**Result**

![](/images//Images/bia_does_table_view_cell_exist_res.png)

## Example - Case 2: argument is blank

![](/images//Images/bia_does_table_view_cell_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_table_view_cell_exist_2_pgm.png)

**Result**

![](/images//Images/bia_does_table_view_cell_exist_2_res.png)

**Parent topic:**[Table View](/TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[check table view section exists](/TA_Automation/Topics/bia_check_table_view_section_exists.html)

**Next topic:**[get table view cell containing](/TA_Automation/Topics/bia_get_table_view_cell_containing.html)

