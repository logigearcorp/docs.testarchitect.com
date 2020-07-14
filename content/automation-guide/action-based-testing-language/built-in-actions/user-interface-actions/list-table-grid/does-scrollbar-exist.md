--- 
title: "does scrollbar exist"
linktitle: "does scrollbar exist"
description: "Description Return a Boolean value to indicate whether a specified scroll bar exists. Arguments window TA name of the window. control TA name of the control to be examined for the specified scroll ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_does_scrollbar_exist.html
keywords: "built-in actions, does scrollbar exist, does scrollbar exist (action), iOS (action), does scrollbar exist, check if scrollbar exists, check existence of scrollbar, check whether scrollbar exists, verify whether scrollbar exists"
---

## Description

Return a Boolean value to indicate whether a specified scroll bar exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control to be examined for the specified scroll bar.

-   **type**

    Type of scroll bar to check for.

    Allowable values:

    -   **horizontal**

        A horizontal scroll bar.

    -   **vertical**

        A vertical scroll bar.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Scroll bar found.

    -   **0**

        Scroll bar not found


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:checklist, list box, list view

-   For SAP BW application: table, frame

## Example

![](/images/TA_Automation/Images/bia_does_scrollbar_exist_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_does_scrollbar_exist_pgm.png)

Result

![](/images/TA_Automation/Images/bia_does_scrollbar_exist_res.png)




**Related information**  


[check scrollbar exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-scrollbar-exists)

[check scrollbar not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-scrollbar-not-exists)
