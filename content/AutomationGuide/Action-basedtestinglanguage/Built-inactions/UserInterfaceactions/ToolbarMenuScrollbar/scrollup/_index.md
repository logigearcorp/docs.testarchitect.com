--- 
title: "scroll up"
linktitle: "scroll up"
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_scroll_up.html
---
# scroll up {#bia_scroll_up .reference}

## Description { .section}

Increment the value of a vertical scroll bar control \(that is, move slider up\) by a specified number of ticks.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the scroll bar control.

number
:   The number of ticks to increment \(scroll up\) by.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:scroll bar.

## Example { .section}

![](../Images/bia_scroll_up_aut1.png)

**Action Lines**

![](../Images/bia_scroll_up_pgm.png)

**Result**

![](../Images/bia_scroll_up_res.png)

**Effect**

![](../Images/bia_scroll_up_aut2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[scroll right](../../TA_Automation/Topics/bia_scroll_right.html)

**Next topic:**[select button menu](../../TA_Automation/Topics/bia_select_button_menu.html)

