--- 
title: "scroll right"
linktitle: "scroll right"
description: "Description Increment the value of a horizontal scroll bar control (that is, move slider right) by a specified number of ticks. Arguments window TA name of the window. control TA name of the scroll ..."
weight: 26
aliases: 
    - /TA_Automation/Topics/bia_scroll_right.html
keywords: "built-in actions, scroll right, scroll right (action), scroll right, scroll right a specified number of ticks, move scroll bar slider right, move scroll box right, move slider of horizontal scroll bar right a specified number of ticks"
---

## Description

Increment the value of a horizontal scroll bar control \(that is, move slider right\) by a specified number of ticks.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the scroll bar control.

-   **number**

    The number of ticks to increment \(scroll right\) by.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:scroll bar

-   For SAP BW application: table, frame

## Example

![](/images/TA_Automation/Images/bia_scroll_right_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_scroll_right_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_scroll_right_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_scroll_right_aut2.png)




