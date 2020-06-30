--- 
title: "spin down"
linktitle: "spin down"
description: "Description Decrement the value of a vertical spin control by a specified number of ticks. Arguments window TA name of the window. control TA name of the spin control. number Number of ticks to spin ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_spin_down.html
keywords: "built-in actions, spin down, spin down (action), spin down, decrease value of spin button"
---

## Description

Decrement the value of a vertical spin control by a specified number of ticks.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the spin control.

-   **number**

    Number of ticks to spin down \(decrease\) current value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:spin

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_spin_down_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_spin_down_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_spin_down_aut.png)



