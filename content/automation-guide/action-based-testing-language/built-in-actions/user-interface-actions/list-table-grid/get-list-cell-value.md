--- 
title: "get list cell value"
linktitle: "get list cell value"
description: "Description Retrieve the text content of a cell in a list view. Arguments window TA name of the window. list TA name of the control. item Row number of the cell. (Row numbers start at 1, exclusive of ..."
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_get_list_cell_value.html
keywords: "built-in actions, get list cell value, get list cell value (action), get cell contents in list view, retrieve cell contents in list view"
---

## Description

Retrieve the text content of a cell in a list view.

## Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the control.

-   **item**

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

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

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:list view.

## Example

![](/images/TA_Automation/Images/bia_get_list_cell_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_list_cell_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_list_cell_value_res.png)

