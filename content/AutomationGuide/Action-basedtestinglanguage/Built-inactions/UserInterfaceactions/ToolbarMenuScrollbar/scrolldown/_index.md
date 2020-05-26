--- 
title: "scroll down"
linktitle: "scroll down"
weight: 24
aliases: 
    - /TA_Automation/Topics/bia_scroll_down.html
---
# scroll down {#bia_scroll_down .reference}

## Description { .section}

Decrement the value of a vertical scroll bar control \(that is, move slider down\) by a specified number of ticks.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the scroll bar control.

number
:   Number of ticks to decrement \(scroll down\) by.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:scroll bar.

## Example { .section}

![](../Images/bia_scroll_down_aut1.png)

**Action Lines**

![](../Images/bia_scroll_down_pgm.png)

**Result**

![](../Images/bia_scroll_down_res.png)

**Effect**

![](../Images/bia_scroll_down_aut2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[is toolbar button pressed](../../TA_Automation/Topics/bia_is_toolbar_button_pressed.html)

**Next topic:**[scroll left](../../TA_Automation/Topics/bia_scroll_left.html)

