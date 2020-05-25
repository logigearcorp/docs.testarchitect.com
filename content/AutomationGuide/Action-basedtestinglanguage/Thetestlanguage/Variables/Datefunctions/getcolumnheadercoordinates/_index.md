--- 
title: "get column header coordinates"
linktitle: "get column header coordinates"
aliases: 
    - /TA_Automation/Topics/bia_get_column_header_coordinates.html
---
# get column header coordinates {#bia_get_column_header_coordinates .reference}

## Description { .section}

Retrieve the physical position and size of a specified column header of a table.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table.

column
:   Column number of the cell. \(Column numbers start at 1.\)

left
:   Variable to receive the returned horizontal position of the left edge of the cell relative to left edge of table \(units: pixels\).

top
:   Variable to receive the returned vertical position of the top edge of the cell relative to top of table \(units: pixels\).

width
:   Variable to receive the returned cell width value \(units: pixels\).

height
:   Variable to receive the returned cell height value \(units: pixels\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   All returned values are in units of pixels.
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    **Note:** As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    **Restriction:** This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   If the variables in argumentsleft, top, width and heighthave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:table, list view, tree table, tree list.

## Example { .section}

![](../Images/bia_get_column_header_coordinates_aut.png)

**Action Lines**

![](../Images/bia_get_column_header_coordinates_pgm.png)

**Result**

![](../Images/bia_get_column_header_coordinates_res.png)

## Example { .section}

![](../Images/bia_get_column_header_coordinates_aut.png)

**Action Lines**

![](../Images/bia_get_column_header_coordinates_ta4vs_pgm.png)

**Result**

![](../Images/bia_get_column_header_coordinates_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[does scrollbar exist](../../TA_Automation/Topics/bia_does_scrollbar_exist.html)

**Next topic:**[get column header name](../../TA_Automation/Topics/bia_get_column_header_name.html)

