--- 
title: "check status bar value"
linktitle: "check status bar value"
description: "Description Check the text content of the first panel of a browser's status bar against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_status_bar_value.html
keywords: "built-in actions, check status bar value, check status bar value (action), check status bar value, check status bar contents against expected values, check if status bar contents match expected values, verify if status bar contents match expected values"
---

## {{< expand >}} Description

Check the text content of the first panel of a browser's status bar against an expected value. Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **expected**

    Expected text.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:status bar

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_status_bar_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_status_bar_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_status_bar_value_res.png)




**Related information**  


[get status bar value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-status-bar-value)

