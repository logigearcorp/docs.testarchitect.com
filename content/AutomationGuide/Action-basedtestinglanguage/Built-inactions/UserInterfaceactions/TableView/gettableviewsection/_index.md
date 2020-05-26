--- 
title: "get table view section"
linktitle: "get table view section"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_section.html
---
# get table view section {#bia_get_table_view_section .reference}

## Description { .section}

Retrieve both the header and footer text of a section of a table view control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table view control.

index
:   Table view section index.

section header
:   Variable to receive the returned table view section header text.

section footer
:   Variable to receive the returned table view section footer text.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   If the variables in argumentssection header and section footerhave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table view.

## Example { .section}

![](../Images/bia_get_table_view_section_aut.png)

**Action Lines**

![](../Images/bia_get_table_view_section_pgm.png)

**Result**

![](../Images/bia_get_table_view_section_res.png)

**Note:** In this example, the returned table view section footer text is null since that section has no footer.

**Parent topic:**[Table View](../../TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[get table view cell value](../../TA_Automation/Topics/bia_get_table_view_cell_value.html)

**Next topic:**[get table view section containing](../../TA_Automation/Topics/bia_get_table_view_section_containing.html)

