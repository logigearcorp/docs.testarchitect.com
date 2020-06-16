--- 
title: "tap table view cell"
linktitle: "tap table view cell"
description: "Description Tap a specified table view cell. Arguments window TA name of the window. control TA name of the table view control. section header (Optional) Identifying header text of table view cell ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_tap_table_view_cell.html
keywords: "built-in actions, tap table view cell, tap table view cell (action), iOS (action), tap table view cell, tap specified cell in table view"
---

## Description

Tap a specified table view cell.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    \(Optional\) Identifying header text of table view cell section. \(See index argument.\)

-   **index**

    Identifying index of table view cell:

    -   If section header is non-empty, index must be a single integral value specifying the cardinal position of the cell within the section.
    -   If section header is blank, index must specify an index path of the form: `section index.cell index`. \(Example: `2.5`\).
-   **x**

    \(Optional\) Horizontal position of effective tap, specified as distance in points from left edge of the cell. \(Defaults to horizontal center of cell.\)

-   **y**

    \(Optional\) Vertical position of effective tap, specified as distance in points from top edge of the cell. \(Defaults to vertical center of cell.\)

-   **hold duration**

    \(Optional\) Duration of the tap, in milliseconds.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example - Case 1: section header and index arguments both provided

![](/images/TA_Automation/Images/bia_tap_table_view_cell_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_tap_table_view_cell_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_tap_table_view_cell_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_tap_table_view_cell_effect.png)

## Example - Case 2: section header argument is empty

![](/images/TA_Automation/Images/bia_tap_table_view_cell_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_tap_table_view_cell_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_tap_table_view_cell_2_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_tap_table_view_cell_effect.png)



