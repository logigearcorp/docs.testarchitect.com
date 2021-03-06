--- 
title: "spin down"
linktitle: "spin down"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_spin_down.html
keywords: "spin down, decrease value of spin button"
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

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:spin

## Example

**Action Lines**

![](/images//Images/bia_spin_down_pgm.png)

**Result**

![](/images//Images/bia_spin_down_res.png)

**Effect**

![](/images//Images/bia_spin_down_aut.png)

**Parent topic:**[Spin](/TA_Automation/Topics/bia_Spinner.html)

**Next topic:**[spin up](/TA_Automation/Topics/bia_spin_up.html)

