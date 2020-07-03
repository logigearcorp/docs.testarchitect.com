--- 
title: "is cell selected"
linktitle: "is cell selected"
description: "Description Return a Boolean value to indicate whether a specified cell in a table is selected. Arguments window TA name of the window. control TA name of the table. row Row number of the cell. (Row ..."
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_is_cell_selected.html
keywords: "built-in actions, is cell selected, is cell selected (action), is cell selected, check if specified cell is selected, check whether specified cell is selected, verify if specified cell is selected"
---

## Description

Return a Boolean value to indicate whether a specified cell in a table is selected.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **row**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Cell is selected.

    -   **0**

        Cell is not selected.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table, list view.

## Example

![](/images/TA_Automation/Images/bia_is_cell_selected_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_is_cell_selected_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_is_cell_selected_res.png)

**Related information**  


[click table cell](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-table-cell)

