--- 
title: "check table view cell value"
linktitle: "check table view cell value"
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_cell_value.html
---
# check table view cell value {#bia_check_table_view_cell_value .reference}

## Description { .section}

Check the contents of a table view cell against an expected text string. Result is Passed ifthe two strings match; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table view control.

section header
:   \(Optional\) Identifying header text of table view cell section. \(See index argument.\)

index
:   Identifying index of table view cell:

:   -   If section header is non-empty, index must be a single integral value specifying the cardinal position of the cell within the section.
-   If section header is blank, index must specify an index path of the form: `section index.cell index`. \(Example: `2.5`\).

expected
:   The expected text content of the table view cell.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided { .section}

![](../Images/bia_check_table_view_cell_value_aut.png)

**Action Lines**

![](../Images/bia_check_table_view_cell_value_pgm.png)

**Result**

![](../Images/bia_check_table_view_cell_value_res.png)

## Example - Case 2: The section header argument is blank { .section}

![](../Images/bia_check_table_view_cell_value_2_aut.png)

**Action Lines**

![](../Images/bia_check_table_view_cell_value_2_pgm.png)

**Result**

![](../Images/bia_check_table_view_cell_value_2_res.png)

**Parent topic:**[Table View](../../TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[check table view cell not exists](../../TA_Automation/Topics/bia_check_table_view_cell_not_exists.html)

**Next topic:**[check table view section exists](../../TA_Automation/Topics/bia_check_table_view_section_exists.html)

