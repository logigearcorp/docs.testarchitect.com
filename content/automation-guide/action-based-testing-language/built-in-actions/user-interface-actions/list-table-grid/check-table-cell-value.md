--- 
title: "check table cell value"
linktitle: "check table cell value"
description: "Description Check the text content of a table cell against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the window. table TA name of the ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_check_table_cell_value.html
keywords: "built-in actions, check table cell value, check table cell value (action), iOS (action), check table cell value, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check cell contents against expected value, check if contents of cell match expected value, check whether cell contents match expected value, verify if contents of cell match expected value"
---

## {{< expand >}} Description

Check the text content of a table cell against an expected value. Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **table**

    TA name of the table.

-   **row**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **expected**

    The expected cell content.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:table, list view.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_table_cell_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_table_cell_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_table_cell_value_res.png)

**Related information**  


[get table cell value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-table-cell-value)

[set table cell value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/set-table-cell-value)

