--- 
title: "click table cell"
linktitle: "click table cell"
aliases: 
    - /TA_Automation/Topics/bia_click_table_cell.html
---
# click table cell {#bia_click_table_cell .reference}

## Description { .section}

Click a specific cell in a table.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table.

row
:   Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

column
:   Column number of the cell. \(Column numbers start at 1.\)

click type
:   \(Optional\) Type of mouse click.

:   Allowable values:

    left
    :   \(Default\) Single left-click.

    right
    :   Single right-click.

    double
    :   Double left-click.

x
:   \(Optional\) Horizontal position of effective click, specified as distance in pixels from left edge of cell. \(Defaults to horizontal center of cell.\)

y
:   \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of cell. \(Defaults to vertical center of cell.\)

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   x and yare unsupported arguments and hence invisible. To use them, you must specify both their values and the headers x and y, respectively, in the cells to the right of the last visible argument.
-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](../../reuse/../TA_Automation/Topics/bia_get_screen_resolution.md#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table, list view.

## Example { .section}

![](../Images/bia_click_table_cell_aut.png)

**Action Lines**

![](../Images/bia_click_table_cell_pgm.png)

**Result**

![](../Images/bia_click_table_cell_res.png)

## Example { .section}

![](../Images/bia_click_table_cell_aut.png)

**Action Lines**

![](../Images/bia_click_table_cell_ta4vs_pgm.png)

**Result**

![](../Images/bia_click_table_cell_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[click list item](../../TA_Automation/Topics/bia_click_list_item.html)

**Next topic:**[does item exist](../../TA_Automation/Topics/bia_does_item_exist.html)

**Related information**  


[is cell selected](../../TA_Automation/Topics/bia_is_cell_selected.html)

