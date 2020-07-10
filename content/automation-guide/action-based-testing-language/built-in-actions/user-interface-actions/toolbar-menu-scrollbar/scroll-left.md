--- 
title: "scroll left"
linktitle: "scroll left"
description: "Description Decrement the value of a horizontal scroll bar control (that is, move slider left) by a specified number of ticks. Arguments window TA name of the window. control TA name of the scroll bar ..."
weight: 25
aliases: 
    - /TA_Automation/Topics/bia_scroll_left.html
keywords: "built-in actions, scroll left, scroll left (action), scroll left, scroll left a specified number of ticks, move scroll bar slider left, move scroll box left, move slider of horizontal scroll bar left a specified number of ticks"
---

## {{< expand >}} Description

Decrement the value of a horizontal scroll bar control \(that is, move slider left\) by a specified number of ticks.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the scroll bar control.

-   **number**

    Number of ticks to decrement \(scroll left\) by.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:scroll bar

-   For SAP BW application: table, frame

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_scroll_left_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_scroll_left_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_scroll_left_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_scroll_left_aut2.png)




