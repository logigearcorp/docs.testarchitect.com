--- 
title: "check table view section exists"
linktitle: "check table view section exists"
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_section_exists.html
---
# check table view section exists {#bia_check_table_view_section_exists .reference}

## Description { .section}

Check for the existence of a table view section as identified by its header text. Result is Passed ifthe specified table view section is found; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table view control.

section header
:   Header text to search for.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section_tll_j2y_mk .section}

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table view.

## Example { .section}

![](../Images/bia_check_table_view_section_exists_aut.png)

**Action Lines**

![](../Images/bia_check_table_view_section_exists_pgm.png)

**Result**

![](../Images/bia_check_table_view_section_exists_res.png)

**Parent topic:**[Table View](../../TA_Automation/Topics/bia_table_view.html)

**Previous topic:**[check table view cell value](../../TA_Automation/Topics/bia_check_table_view_cell_value.html)

**Next topic:**[does table view cell exist](../../TA_Automation/Topics/bia_does_table_view_cell_exist.html)

