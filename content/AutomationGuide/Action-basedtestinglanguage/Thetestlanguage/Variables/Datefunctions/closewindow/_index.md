--- 
title: "close window"
linktitle: "close window"
aliases: 
    - /TA_Automation/Topics/bia_close_window.html
---
# close window {#bia_close_window .reference}

## close window { .section}

Close a specified window.

## Arguments { .section}

window
:   TA name of the window.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_close_window_aut.png)

**Action Lines**

![](../Images/bia_close_window_pgm.png)

**Result**

![](../Images/bia_close_window_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[check window property](../../TA_Automation/Topics/bia_check_window_property.html)

**Next topic:**[does window exist](../../TA_Automation/Topics/bia_does_window_exist.html)

