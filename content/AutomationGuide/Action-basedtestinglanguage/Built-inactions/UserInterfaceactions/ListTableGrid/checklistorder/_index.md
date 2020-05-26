--- 
title: "check list order"
linktitle: "check list order"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_list_order.html
---
# check list order {#bia_check_list_order .reference}

## Description { .section}

Check that all the items of a control are sorted in either ascending or descending order. Result is Passed ifthe items are fully ordered; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

list
:   TA name of the control.

case sensitive
:   \(Optional\) Specify whether case is to be considered in establishing whether or not the contents are in order.

:   Allowable values:

    1
    :   Case-sensitive.

    0
    :   \(Default\) Case-insensitive.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:combo box, list box, select-multiple, select-one.

## Example { .section}

![](../Images/bia_check_list_order_aut_2.png)

**Action Lines**

![](../Images/bia_check_list_order_2_pgm.png)

**Result**

![](../Images/bia_check_list_order_2_res.png)

## Example { .section}

![](../Images/bia_check_list_order_aut.png)

**Action Lines**

![](../Images/bia_check_list_order_ta4vs_pgm.png)

**Result**

![](../Images/bia_check_list_order_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check list item order](../../TA_Automation/Topics/bia_check_list_item_order.html)

**Next topic:**[check listbox checked](../../TA_Automation/Topics/bia_check_listbox_checked.html)

