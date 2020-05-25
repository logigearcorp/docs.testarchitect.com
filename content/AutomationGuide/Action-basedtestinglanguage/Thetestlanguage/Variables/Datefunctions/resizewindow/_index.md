--- 
title: "resize window"
linktitle: "resize window"
aliases: 
    - /TA_Automation/Topics/bia_resize_window.html
---
# resize window {#bia_resize_window .reference}

## Description { .section}

Change the size of a window.

## Arguments { .section}

window
:   TA name of the window.

width
:   \(Optional\) New window width \(units: pixels; default=0\).

height
:   \(Optional\) New window height \(units: pixels; default=0\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Resizing of the window is performed with the top-left corner remaining stationary.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_resize_window_aut.png)

**Action Lines**

![](../Images/bia_resize_window_pgm.png)

**Result**

![](../Images/bia_resize_window_res.png)

## Example { .section}

![](../Images/bia_resize_window_ta4vs_aut.png)

**Action Lines**

![](../Images/bia_resize_window_ta4vs_pgm.png)

**Result**

![](../Images/bia_resize_window_ta4vs_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[move window](../../TA_Automation/Topics/bia_move_window.html)

**Next topic:**[restore window](../../TA_Automation/Topics/bia_restore_window.html)

**Related information**  


[maximize](../../TA_Automation/Topics/bia_maximize.html)

[minimize](../../TA_Automation/Topics/bia_minimize.html)

