--- 
title: "-"
linktitle: "check status bar value"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_status_bar_value.html
---
keyword: [check status bar value, check status bar contents against expected values, check if status bar contents match expected values, verify if status bar contents match expected values]
---

# check status bar value

## Description

Check the text content of the first panel of a browser's status bar against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **expected**

    Expected text.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images//Images/bia_check_status_bar_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_status_bar_value_pgm.png)

**Result**

![](/images//Images/bia_check_status_bar_value_res.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)

**Next topic:**[clear popup queue](/TA_Automation/Topics/bia_clear_popup_queue.html)

**Related information**  


[get status bar value](/TA_Automation/Topics/bia_get_status_bar_value.html)

