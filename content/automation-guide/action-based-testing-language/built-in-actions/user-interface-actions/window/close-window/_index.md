--- 
title: "close window"
linktitle: "close window"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_close_window.html
keywords: "close window, close specified window"
---

## close window

Close a specified window.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images//Images/bia_close_window_aut.png)

**Action Lines**

![](/images//Images/bia_close_window_pgm.png)

**Result**

![](/images//Images/bia_close_window_res.png)

**Parent topic:**[Window](/TA_Automation/Topics/bia_Window.html)

**Previous topic:**[check window property](/TA_Automation/Topics/bia_check_window_property.html)

**Next topic:**[does window exist](/TA_Automation/Topics/bia_does_window_exist.html)

