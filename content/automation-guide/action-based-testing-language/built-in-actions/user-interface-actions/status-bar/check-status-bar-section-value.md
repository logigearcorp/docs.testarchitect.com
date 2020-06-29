--- 
title: "check status bar section value"
linktitle: "check status bar section value"
description: "Description Check the caption of a specified section of the status bar against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the window. ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_status_bar_section_value.html
keywords: "built-in actions, check status bar section value, check status bar section value (action), check status bar section value, check value of status bar section against expected value, check if value of status bar section matches expected value, check whether value of status bar section matches expected value, verify if value of specific part of status bar matches expected value"
---

## Description

Check the caption of a specified section of the status bar against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the status bar.

-   **section**

    Integer index specifying the status bar section.

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports .NET \(not including WPF\), Win32 tested applications.
-   In the case of the section argument, note that index numbering begins with 1, and proceeds from left to right.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images/TA_Automation/Images/bia_check_status_bar_section_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_status_bar_section_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_status_bar_section_value_res.png)




**Related information**  


[get status bar section value](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/status-bar/get-status-bar-section-value)

