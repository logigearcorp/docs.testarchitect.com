--- 
title: "scroll up"
linktitle: "scroll up"
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_scroll_up.html
keywords: "scroll up, scroll up a specified number of ticks, move scroll bar slider up, move scroll box up, move slider of vertical scroll bar up a specified number of ticks"
---

## Description

Increment the value of a vertical scroll bar control \(that is, move slider up\) by a specified number of ticks.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the scroll bar control.

-   **number**

    The number of ticks to increment \(scroll up\) by.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:scroll bar

-   For SAP BW application: table, frame

## Example

![](/images//Images/bia_scroll_up_aut1.png)

**Action Lines**

![](/images//Images/bia_scroll_up_pgm.png)

**Result**

![](/images//Images/bia_scroll_up_res.png)

**Effect**

![](/images//Images/bia_scroll_up_aut2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[scroll right](/TA_Automation/Topics/bia_scroll_right.html)

**Next topic:**[select button menu](/TA_Automation/Topics/bia_select_button_menu.html)

