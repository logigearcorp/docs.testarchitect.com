--- 
title: "scroll up"
linktitle: "scroll up"
description: "Description Increment the value of a vertical scroll bar control (that is, move slider up) by a specified number of ticks. Arguments window TA name of the window. control TA name of the scroll bar ..."
weight: 27
aliases: 
    - /TA_Automation/Topics/bia_scroll_up.html
keywords: "built-in actions, scroll up, scroll up (action), scroll up, scroll up a specified number of ticks, move scroll bar slider up, move scroll box up, move slider of vertical scroll bar up a specified number of ticks"
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

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:scroll bar

-   For SAP BW application: table, frame

## Example

![](/images/TA_Automation/Images/bia_scroll_up_aut1.png)

Action Lines

![](/images/TA_Automation/Images/bia_scroll_up_pgm.png)

Result

![](/images/TA_Automation/Images/bia_scroll_up_res.png)

Effect

![](/images/TA_Automation/Images/bia_scroll_up_aut2.png)



