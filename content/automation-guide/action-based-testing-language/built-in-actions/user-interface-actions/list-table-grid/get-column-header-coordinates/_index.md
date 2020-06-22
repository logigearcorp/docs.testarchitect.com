--- 
title: "get column header coordinates"
linktitle: "get column header coordinates"
description: "Description Retrieve the physical position and size of a specified column header of a table. Arguments window TA name of the window. control TA name of the table. column Column number of the cell. ..."
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_get_column_header_coordinates.html
keywords: "built-in actions, get column header coordinates, get column header coordinates (action), get column header coordinates, retrieve column header coordinates, get position of column header, retrieve position of column header"
---

## Description

Retrieve the physical position and size of a specified column header of a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **left**

    Variable to receive the returned horizontal position of the left edge of the cell relative to left edge of table \(units: pixels\).

-   **top**

    Variable to receive the returned vertical position of the top edge of the cell relative to top of table \(units: pixels\).

-   **width**

    Variable to receive the returned cell width value \(units: pixels\).

-   **height**

    Variable to receive the returned cell height value \(units: pixels\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   All returned values are in units of pixels.
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
{{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

{{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   If the variables in argumentsleft, top, width and heighthave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:table, list view, tree table, tree list.

## Example

![](/images/TA_Automation/Images/bia_get_column_header_coordinates_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_column_header_coordinates_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_column_header_coordinates_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_column_header_coordinates_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_column_header_coordinates_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_column_header_coordinates_ta4vs_res.png)




