--- 
title: "-"
linktitle: "spin up"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_spin_up.html
---
keyword: [spin up, increase value of spin button]
---

# spin up

## Description

Increment the value of a vertical spin control by a specified number of ticks.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the spin control.

-   **number**

    Number of ticks to spin up \(increase\) current value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:spin.

## Example

**Action Lines**

![](/images//Images/bia_spin_up_pgm.png)

**Result**

![](/images//Images/bia_spin_up_res.png)

**Effect**

![](/images//Images/bia_spin_up_aut.png)

**Parent topic:**[Spin](/TA_Automation/Topics/bia_Spinner.html)

**Previous topic:**[spin down](/TA_Automation/Topics/bia_spin_down.html)

