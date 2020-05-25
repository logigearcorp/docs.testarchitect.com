--- 
title: "get table view cell containing"
linktitle: "get table view cell containing"
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_cell_containing.html
---
# get table view cell containing {#bia_get_table_view_cell_containing .reference}

## Description { .section}

Retrieve the position, within its table, of the cell containing a specified text value.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table view control.

text
:   Text to be searched for.

variable
:   \(Optional\) Variable to receive the position of the specified cell, in the form of an index path \(`section index.cell index`\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   In the event that the target text exists in more than one cell, it is the position of the first one encountered that is returned.
-   variable argument:
    -   Note that index numbering begins with 1.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table view.

## Example { .section}

![](../Images/bia_get_table_view_cell_containing_aut.png)

**Action Lines**

![](../Images/bia_get_table_view_cell_containing_pgm.png)

**Result**

![](../Images/bia_get_table_view_cell_containing_res.png)

**Parent topic:**[Table View](../../TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[does table view cell exist](../../TA_Automation/Topics/bia_does_table_view_cell_exist.html)

**Next topic:**[get table view cell value](../../TA_Automation/Topics/bia_get_table_view_cell_value.html)

