--- 
title: "does item exist"
linktitle: "does item exist"
description: "Description Return a Boolean value to indicate whether a specified item within a list box, list view, or combo box control exists. Arguments window TA name of the window. control TA name of the list ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_does_item_exist.html
keywords: "built-in actions, does item exist, does item exist (action), iOS (action), does item exist, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if specified item is found in list box or combo box, check whether specified item is found in list view, verify if specified item exist in list control, verify existence of specified item in list control"
---

## Description

Return a Boolean value to indicate whether a specified item within a list box, list view, or combo box control exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the list box, list view, or combo box control.

-   **item**

    The item caption.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   For list view controls only, to specify an item argument by its text content, enter the combined values of every cell, from left to right, with vertical bars \( \| \) as delimiters.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:list box, list view, combo box.

## Example - Case 1: List box control

![](/images/TA_Automation/Images/bia_does_item_exist_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_does_item_exist_pgm.png)

Result

![](/images/TA_Automation/Images/bia_does_item_exist_res.png)

## Example - Case 2: List view control

![](/images/TA_Automation/Images/bia_does_item_exist_2_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_does_item_exist_2_pgm.png)

Result

![](/images/TA_Automation/Images/bia_does_item_exist_2_res.png)

**Related information**  


[check item exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-item-exists)

[check item not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-item-not-exists)
