--- 
title: "go back"
linktitle: "go back"
aliases: 
    - /TA_Automation/Topics/bia_go_back.html
---
# go back {#bia_go_back .reference}

## Description { .section}

Go back in the browser navigation history to the previous page.

## Arguments { .section}

window
:   TA name of the window.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action is functionally equivalent to clicking the browser's **Back** button.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Example { .section}

![](../Images/bia_go_back_aut.png)

**Action Lines**

![](../Images/bia_go_back_pgm.png)

**Result**

![](../Images/bia_go_back_res.png)

**Effect**

![](../Images/bia_go_back_effect.png)

## Example { .section}

![](../Images/bia_go_back_aut.png)

**Action Lines**

![](../Images/bia_go_back_ta4vs_pgm.png)

**Result**

![](../Images/bia_go_back_ta4vs_res.png)

**Effect**

![](../Images/bia_go_back_effect.png)

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[get status bar value](../../TA_Automation/Topics/bia_get_status_bar_value.html)

**Next topic:**[go forward](../../TA_Automation/Topics/bia_go_forward.html)

**Related information**  


[go forward](../../TA_Automation/Topics/bia_go_forward.html)

[go home](../../TA_Automation/Topics/bia_go_home.html)

[navigate](../../TA_Automation/Topics/bia_navigate.html)

[refresh](../../TA_Automation/Topics/bia_refresh.html)

