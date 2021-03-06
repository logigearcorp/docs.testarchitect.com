--- 
title: "get status bar value"
linktitle: "get status bar value"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_get_status_bar_value.html
---

## Description

Retrieve the text content of the first panel of a browser's status bar.

## Arguments

-   **window**

    TA name of the window.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images//Images/bia_get_status_bar_value_aut.png)

**Action Lines**

![](/images//Images/bia_get_status_bar_value_pgm.png)

**Result**

![](/images//Images/bia_get_status_bar_value_res.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[get popup message](/TA_Automation/Topics/bia_get_popup_message.html)

**Next topic:**[go back](/TA_Automation/Topics/bia_go_back.html)

**Related information**  


[check status bar value](/TA_Automation/Topics/bia_check_status_bar_value.html)

