--- 
title: "scroll right"
linktitle: "scroll right"
description: "Description Increment the value of a horizontal scroll bar control (that is, move slider right) by a specified number of ticks. Arguments window TA name of the window. control TA name of the scroll ..."
weight: 26
aliases: 
    - /TA_Automation/Topics/bia_scroll_right.html
keywords: "built-in actions, scroll right, scroll right (action), scroll right, scroll right a specified number of ticks, move scroll bar slider right, move scroll box right, move slider of horizontal scroll bar right a specified number of ticks"
---

## {{< expand >}} Description

Increment the value of a horizontal scroll bar control \(that is, move slider right\) by a specified number of ticks.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the scroll bar control.

-   **number**

    The number of ticks to increment \(scroll right\) by.


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

![](/images/TA_Automation/Images/bia_scroll_right_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_scroll_right_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_scroll_right_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_scroll_right_aut2.png)




