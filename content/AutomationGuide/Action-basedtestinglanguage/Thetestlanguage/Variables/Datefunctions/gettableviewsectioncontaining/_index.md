--- 
title: "get table view section containing"
linktitle: "get table view section containing"
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_section_containing.html
---
# get table view section containing {#bia_get_table_view_section_containing .reference}

## Description { .section}

Retrieve the index of a table view section identified by its header text.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table view control.

section header
:   Text of section header to be searched for.

variable
:   \(Optional\) Variable to receive the returned section index.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   Note that index numbering begins with 1.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table view.

## Example { .section}

![](../Images/bia_get_table_view_section_containing_aut.png)

**Action Lines**

![](../Images/bia_get_table_view_section_containing_pgm.png)

**Result**

![](../Images/bia_get_table_view_section_containing_res.png)

**Parent topic:**[Table View](../../TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[get table view section](../../TA_Automation/Topics/bia_get_table_view_section.html)

**Next topic:**[tap table view cell](../../TA_Automation/Topics/bia_tap_table_view_cell.html)

