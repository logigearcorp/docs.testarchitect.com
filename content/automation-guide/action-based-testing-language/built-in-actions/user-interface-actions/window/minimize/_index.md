--- 
title: "-"
linktitle: "minimize"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_minimize.html
---
keyword: minimize window
---

# minimize

## Description

Minimize a window.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is not supported in the [WebDriver](Generic_WebDriver.html) mode.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images//Images/bia_minimize_aut.png)

**Action Lines**

![](/images//Images/bia_minimize_pgm.png)

**Result**

![](/images//Images/bia_minimize_res.png)

## Example

![](/images//Images/bia_minimize_ta4vs_aut.png)

**Action Lines**

![](/images//Images/bia_minimize_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_minimize_ta4vs_res.png)

**Parent topic:**[Window](/TA_Automation/Topics/bia_Window.html)

**Previous topic:**[maximize](/TA_Automation/Topics/bia_maximize.html)

**Next topic:**[move window](/TA_Automation/Topics/bia_move_window.html)

**Related information**  


[maximize](/TA_Automation/Topics/bia_maximize.html)

[resize window](/TA_Automation/Topics/bia_resize_window.html)

