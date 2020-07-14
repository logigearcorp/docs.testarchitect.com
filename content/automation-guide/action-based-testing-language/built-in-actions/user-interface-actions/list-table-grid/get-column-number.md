--- 
title: "get column number"
linktitle: "get column number"
description: "Description Retrieve the number of columns in a table. Arguments window TA name of the window. control TA name of the table. variable (Optional) Variable to receive the returned value . Valid contexts ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_get_column_number.html
keywords: "built-in actions, get column number, get column number (action), iOS (action), get column number, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get column count of table, get number of columns in table, retrieve column count of table, retrieve number of columns in table"
---

## Description

Retrieve the number of columns in a table.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table, tree table, tree list.

## Example

![](/images/TA_Automation/Images/bia_get_column_number_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_column_number_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_column_number_res.png)
