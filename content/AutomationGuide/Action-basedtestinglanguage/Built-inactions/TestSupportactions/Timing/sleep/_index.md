--- 
title: "sleep"
linktitle: "sleep"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_sleep.html
---
# sleep {#bia_sleep .reference}

## Description { .section}

Suspend execution for a specified period of time.

## Arguments { .section}

milliseconds
:   Time to sleep \(in milliseconds\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   During the sleep period, the processor is released to other processes running on the system.
-   This action is particularly useful in allowing the application under test time to perform any necessary actions.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_sleep_pgm.png)

**Result**

![](../Images/bia_sleep_res.png)

**Parent topic:**[Timing](../../TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[get clock count](../../TA_Automation/Topics/bia_get_clock_count.html)

**Next topic:**[start clock count](../../TA_Automation/Topics/bia_start_clock_count.html)

