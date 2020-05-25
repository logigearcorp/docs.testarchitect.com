--- 
title: "get list item count"
linktitle: "get list item count"
aliases: 
    - /TA_Automation/Topics/bia_get_list_item_count.html
---
# get list item count {#bia_get_list_item_count .reference}

## Description { .section}

Retrieve a count of the total number of items that reside in a specified list view, list box or combo box.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

variable
:   \(Optional\) Variable to receive the returned value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:combo box, list box, list view

## Example { .section}

![](../Images/bia_get_list_item_count_aut.png)

**Action Lines**

![](../Images/bia_get_list_item_count_pgm.png)

**Result**

![](../Images/bia_get_list_item_count_res.png)

## Example { .section}

![](../Images/bia_get_list_item_count_aut.png)

**Action Lines**

![](../Images/bia_get_list_item_count_ta4vs_pgm.png)

**Result**

![](../Images/bia_get_list_item_count_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[get list check](../../TA_Automation/Topics/bia_get_list_check.html)

**Next topic:**[get selected count](../../TA_Automation/Topics/bia_get_selected_count.html)

