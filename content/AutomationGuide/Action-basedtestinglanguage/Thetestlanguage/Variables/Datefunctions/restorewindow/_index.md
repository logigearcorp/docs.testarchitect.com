--- 
title: "restore window"
linktitle: "restore window"
aliases: 
    - /TA_Automation/Topics/bia_restore_window.html
---
# restore window {#bia_restore_window .reference}

## Description { .section}

Restore the specified window from its minimized or maximized state.

## Arguments { .section}

window
:   TA name of the window.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action has no effect if the specified window is already in its restored state.
-   For testing in Safari on macOS machines, this action is only able to restore a window currently in the minimized state. It does not currently support restoring a window that is maximized.
-   This action is not supported in the [WebDriver](Generic_WebDriver.html) mode.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_restore_window_aut.png)

**Action Lines**

![](../Images/bia_restore_window_pgm.png)

**Result**

![](../Images/bia_restore_window_res.png)

## Example { .section}

![](../Images/bia_restore_window_ta4vs_aut.png)

**Action Lines**

![](../Images/bia_restore_window_ta4vs_pgm.png)

**Result**

![](../Images/bia_restore_window_ta4vs_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[resize window](../../TA_Automation/Topics/bia_resize_window.html)

**Related information**  


[move window](../../TA_Automation/Topics/bia_move_window.html)

