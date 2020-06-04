--- 
title: "-"
linktitle: "scroll left"
weight: 25
aliases: 
    - /TA_Automation/Topics/bia_scroll_left.html
---
keyword: [scroll left, scroll left a specified number of ticks, move scroll bar slider left, move scroll box left, move slider of horizontal scroll bar left a specified number of ticks]
---

# scroll left

## Description

Decrement the value of a horizontal scroll bar control \(that is, move slider left\) by a specified number of ticks.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the scroll bar control.

-   **number**

    Number of ticks to decrement \(scroll left\) by.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:scroll bar

-   For SAP BW application: table, frame

## Example

![](/images//Images/bia_scroll_left_aut1.png)

**Action Lines**

![](/images//Images/bia_scroll_left_pgm.png)

**Result**

![](/images//Images/bia_scroll_left_res.png)

**Effect**

![](/images//Images/bia_scroll_left_aut2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[scroll down](/TA_Automation/Topics/bia_scroll_down.html)

**Next topic:**[scroll right](/TA_Automation/Topics/bia_scroll_right.html)

