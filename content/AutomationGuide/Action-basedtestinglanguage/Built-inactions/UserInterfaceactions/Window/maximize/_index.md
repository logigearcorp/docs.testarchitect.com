--- 
title: "maximize"
linktitle: "maximize"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_maximize.html
---
# maximize {#bia_maximize .reference}

## Description { .section}

Maximize a window.

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

![](../Images/bia_maximize_aut.png)

**Action Lines**

![](../Images/bia_maximize_pgm.png)

**Result**

![](../Images/bia_maximize_res.png)

## Example { .section}

![](../Images/bia_maximize_ta4vs_aut.png)

**Action Lines**

![](../Images/bia_maximize_ta4vs_pgm.png)

**Result**

![](../Images/bia_maximize_ta4vs_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[identify windows](../../TA_Automation/Topics/bia_identify_windows.html)

**Next topic:**[minimize](../../TA_Automation/Topics/bia_minimize.html)

**Related information**  


[minimize](../../TA_Automation/Topics/bia_minimize.html)

[resize window](../../TA_Automation/Topics/bia_resize_window.html)

