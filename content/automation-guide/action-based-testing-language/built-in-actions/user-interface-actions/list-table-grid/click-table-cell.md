--- 
title: "click table cell"
linktitle: "click table cell"
description: "Description Click a specific cell in a table. Arguments window TA name of the window. control TA name of the table. row Row number of the cell. (Row numbers start at 1, exclusive of any header row.) ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_click_table_cell.html
keywords: "built-in actions, click table cell, click table cell (action), iOS (action), click table cell, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), click specified cell in table, mouse click on cell in table"
---

## {{< expand >}} Description

Click a specific cell in a table.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **row**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **click type**

    \(Optional\) Type of mouse click.

    Allowable values:

    -   **left**

        \(Default\) Single left-click.

    -   **right**

        Single right-click.

    -   **double**

        Double left-click.

-   **x**

    \(Optional\) Horizontal position of effective click, specified as distance in pixels from left edge of cell. \(Defaults to horizontal center of cell.\)

-   **y**

    \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of cell. \(Defaults to vertical center of cell.\)


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   x and yare unsupported arguments and hence invisible. To use them, you must specify both their values and the headers x and y, respectively, in the cells to the right of the last visible argument.
-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-screen-resolution#li.ios.get_screen_resolution).\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:table, list view.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_click_table_cell_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_click_table_cell_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_click_table_cell_res.png)

**Related information**  


[is cell selected](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/is-cell-selected)

