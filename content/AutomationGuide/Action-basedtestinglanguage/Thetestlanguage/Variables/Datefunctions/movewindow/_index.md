--- 
title: "move window"
linktitle: "move window"
aliases: 
    - /TA_Automation/Topics/bia_move_window.html
---
# move window {#bia_move_window .reference}

## Description { .section}

Move a specified window to a new position.

## Arguments { .section}

window
:   TA name of the window.

top
:   \(Optional\) New vertical position of top edge of window, in relation to top of screen \(units: pixels; default=0\).

left
:   \(Optional\) New horizontal position of left edge of window, in relation to left side of screen \(units: pixels; default=0\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This is an exception to the general rule for built-in actions that, if a window is supplied as an argument, x,y \(or, in this case, top, left\) coordinate arguments specify positions relative to the window borders. In this case, while a window must be specified, the top and left values specify a position relative to the screen.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_move_windows_aut.png)

**Action Lines**

![](../Images/bia_move_windows_pgm.png)

**Result**

![](../Images/bia_move_windows_res.png)

## Example { .section}

![](../Images/bia_move_windows_ta4vs_aut.png)

**Action Lines**

![](../Images/bia_move_windows_ta4vs_pgm.png)

**Result**

![](../Images/bia_move_windows_ta4vs_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[minimize](../../TA_Automation/Topics/bia_minimize.html)

**Next topic:**[resize window](../../TA_Automation/Topics/bia_resize_window.html)

**Related information**  


[restore window](../../TA_Automation/Topics/bia_restore_window.html)

