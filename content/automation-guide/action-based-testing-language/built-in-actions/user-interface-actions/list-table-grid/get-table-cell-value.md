--- 
title: "get table cell value"
linktitle: "get table cell value"
description: "Description Retrieve the contents of a cell in a table. Arguments window TA name of the window. table TA name of the table. row Row number of the cell. (Row numbers start at 1, exclusive of any header ..."
weight: 26
aliases: 
    - /TA_Automation/Topics/bia_get_table_cell_value.html
keywords: "built-in actions, get table cell value, get table cell value (action), iOS (action), get table cell value, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), get cell contents, retrieve cell contents"
---

## {{< expand >}} Description

Retrieve the contents of a cell in a table.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **table**

    TA name of the table.

-   **row**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:table, list view.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_table_cell_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_cell_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_cell_value_res.png)

**Related information**  


[check table cell value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-table-cell-value)

[set table cell value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/set-table-cell-value)

