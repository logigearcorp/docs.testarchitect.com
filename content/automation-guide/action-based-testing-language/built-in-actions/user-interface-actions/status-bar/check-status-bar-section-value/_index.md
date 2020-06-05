--- 
title: "check status bar section value"
linktitle: "check status bar section value"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_status_bar_section_value.html
---
keyword: [check status bar section value, check value of status bar section against expected value, check if value of status bar section matches expected value, check whether value of status bar section matches expected value, verify if value of specific part of status bar matches expected value]
---

# check status bar section value

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
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images//Images/bia_check_status_bar_section_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_status_bar_section_value_pgm.png)

**Result**

![](/images//Images/bia_check_status_bar_section_value_res.png)

**Parent topic:**[Status bar](/TA_Automation/Topics/bia_Status_Bar.html)

**Previous topic:**[check status bar section state](/TA_Automation/Topics/bia_check_status_bar_section_state.html)

**Next topic:**[get status bar section state](/TA_Automation/Topics/bia_get_status_bar_section_state.html)

**Related information**  


[get status bar section value](/TA_Automation/Topics/bia_get_status_bar_section_value.html)

