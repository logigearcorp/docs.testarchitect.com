--- 
title: "go back"
linktitle: "go back"
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_go_back.html
---
keyword: [go back, history back in browser, go back to previous page, navigate back in browser history, return to previous page]
---

# go back

## Description

Go back in the browser navigation history to the previous page.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is functionally equivalent to clicking the browser's **Back** button.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Example

![](/images//Images/bia_go_back_aut.png)

**Action Lines**

![](/images//Images/bia_go_back_pgm.png)

**Result**

![](/images//Images/bia_go_back_res.png)

**Effect**

![](/images//Images/bia_go_back_effect.png)

## Example

![](/images//Images/bia_go_back_aut.png)

**Action Lines**

![](/images//Images/bia_go_back_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_go_back_ta4vs_res.png)

**Effect**

![](/images//Images/bia_go_back_effect.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[get status bar value](/TA_Automation/Topics/bia_get_status_bar_value.html)

**Next topic:**[go forward](/TA_Automation/Topics/bia_go_forward.html)

**Related information**  


[go forward](/TA_Automation/Topics/bia_go_forward.html)

[go home](/TA_Automation/Topics/bia_go_home.html)

[navigate](/TA_Automation/Topics/bia_navigate.html)

[refresh](/TA_Automation/Topics/bia_refresh.html)

