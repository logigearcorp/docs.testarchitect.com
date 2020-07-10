--- 
title: "get status bar value"
linktitle: "get status bar value"
description: "Description Retrieve the text content of the first panel of a browser's status bar. Arguments window TA name of the window. variable (Optional) Variable to receive the returned value . Valid contexts ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_get_status_bar_value.html
keywords: "built-in actions, get status bar value, get status bar value (action)"
---

## {{< expand >}} Description

Retrieve the text content of the first panel of a browser's status bar.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

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

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:status bar

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_status_bar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_status_bar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_status_bar_value_res.png)




**Related information**  


[check status bar value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-status-bar-value)

