--- 
title: "spin down"
linktitle: "spin down"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_spin_down.html
---
# spin down {#bia_spin_down .reference}

## Description { .section}

Decrement the value of a vertical spin control by a specified number of ticks.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the spin control.

number
:   Number of ticks to spin down \(decrease\) current value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:spin

## Example { .section}

**Action Lines**

![](../Images/bia_spin_down_pgm.png)

**Result**

![](../Images/bia_spin_down_res.png)

**Effect**

![](../Images/bia_spin_down_aut.png)

**Parent topic:**[Spin](../../TA_Automation/Topics/bia_Spinner.html)

**Next topic:**[spin up](../../TA_Automation/Topics/bia_spin_up.html)

