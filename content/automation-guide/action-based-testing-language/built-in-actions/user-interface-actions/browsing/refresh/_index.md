--- 
title: "refresh"
linktitle: "refresh"
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_refresh.html
keywords: "refresh, refesh web page"
---

## Description

Refresh the web page.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is functionally equivalent to clicking the browser's **Refresh** button, or \(in most cases\) pressing the F5 key.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [window wait](window_wait.html).

## Example

**Action Lines**

![](/images//Images/bia_refresh_pgm.png)

**Result**

![](/images//Images/bia_refresh_res.png)

**Effect**

![](/images//Images/bia_refresh_effect.png)

## Example

**Action Lines**

![](/images//Images/bia_refresh_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_refresh_ta4vs_res.png)

**Effect**

![](/images//Images/bia_refresh_effect.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[navigate](/TA_Automation/Topics/bia_navigate.html)

**Next topic:**[send command to browser](/TA_Automation/Topics/bia_send_command_to_browser.html)

**Related information**  


[go back](/TA_Automation/Topics/bia_go_back.html)

[go forward](/TA_Automation/Topics/bia_go_forward.html)

[go home](/TA_Automation/Topics/bia_go_home.html)

[navigate](/TA_Automation/Topics/bia_navigate.html)

