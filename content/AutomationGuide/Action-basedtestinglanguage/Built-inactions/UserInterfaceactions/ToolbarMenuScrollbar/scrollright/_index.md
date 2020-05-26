--- 
title: "scroll right"
linktitle: "scroll right"
weight: 26
aliases: 
    - /TA_Automation/Topics/bia_scroll_right.html
---
# scroll right {#bia_scroll_right .reference}

## Description { .section}

Increment the value of a horizontal scroll bar control \(that is, move slider right\) by a specified number of ticks.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the scroll bar control.

number
:   The number of ticks to increment \(scroll right\) by.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:scroll bar.

## Example { .section}

![](../Images/bia_scroll_right_aut1.png)

**Action Lines**

![](../Images/bia_scroll_right_pgm.png)

**Result**

![](../Images/bia_scroll_right_res.png)

**Effect**

![](../Images/bia_scroll_right_aut2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[scroll left](../../TA_Automation/Topics/bia_scroll_left.html)

**Next topic:**[scroll up](../../TA_Automation/Topics/bia_scroll_up.html)

