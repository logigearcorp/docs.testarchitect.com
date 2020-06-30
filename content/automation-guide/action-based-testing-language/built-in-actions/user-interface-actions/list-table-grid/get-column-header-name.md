--- 
title: "get column header name"
linktitle: "get column header name"
description: "Description Retrieve the text of a header cell in a table. Arguments window TA name of the window. control TA name of the table. index Column number of the cell. (Column numbers start at 1.) variable ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_get_column_header_name.html
keywords: "built-in actions, get column header name, get column header name (action), get column header name, retrieve column header name, get column name, retrieve column name"
---

## Description

Retrieve the text of a header cell in a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **index**

    Column number of the cell. \(Column numbers start at 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-column-header-name) and [check column header name](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-column-header-name) built-in actions return an empty value.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table, list view, tree table, tree list.

## Example

![](/images/TA_Automation/Images/bia_get_column_header_name_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_column_header_name_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_column_header_name_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_column_header_name_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_column_header_name_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_column_header_name_ta4vs_res.png)




