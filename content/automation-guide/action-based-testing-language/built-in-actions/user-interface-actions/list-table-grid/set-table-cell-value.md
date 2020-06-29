--- 
title: "set table cell value"
linktitle: "set table cell value"
description: "Description Set the contents of a cell in a table. Arguments window TA name of the window. control TA name of the control. row Row number of the cell. (Row numbers start at 1, exclusive of any header ..."
weight: 31
aliases: 
    - /TA_Automation/Topics/bia_set_table_cell_value.html
keywords: "built-in actions, set table cell value, set table cell value (action), Android (action), set table cell value, set contents of table cell, assign table cell value, assign value to table cell, assign value to cell in table"
---

## Description

Set the contents of a cell in a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **row**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **value**

    Value to which the cell contents are to be set.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:table, list view.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_table_cell_value_pgm1.png)

**Result**

![](/images/TA_Automation/Images/bia_set_table_cell_value_res1.png)

**Effect**

![](/images/TA_Automation/Images/bia_set_table_cell_value_aut1.png)

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_table_cell_value_ta4vs_pgm1.png)

**Result**

![](/images/TA_Automation/Images/bia_set_table_cell_value_ta4vs_res1.png)

**Effect**

![](/images/TA_Automation/Images/bia_set_table_cell_value_aut1.png)



**Related information**  


[check table cell value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-table-cell-value)

[get table cell value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-table-cell-value)

