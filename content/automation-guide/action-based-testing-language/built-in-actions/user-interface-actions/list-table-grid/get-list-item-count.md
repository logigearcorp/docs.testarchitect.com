--- 
title: "get list item count"
linktitle: "get list item count"
description: "Description Retrieve a count of the total number of items that reside in a specified list view, list box or combo box. Arguments window TA name of the window. control TA name of the control. variable ..."
weight: 22
aliases: 
    - /TA_Automation/Topics/bia_get_list_item_count.html
keywords: "built-in actions, get list item count, get list item count (action), iOS (action), get list item count, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get number of total items in list view, get number of total items in list box or combo box, count items in list view, count items in list box or combo box"
---

## Description

Retrieve a count of the total number of items that reside in a specified list view, list box or combo box.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

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

This action is applicable to the following controls:combo box, list box, list view

## Example

![](/images/TA_Automation/Images/bia_get_list_item_count_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_list_item_count_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_list_item_count_res.png)
