--- 
title: "-"
linktitle: "sleep"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_sleep.html
---
keyword: [sleep, suspend execution, suspend execution for specified period, pause exection, pause execution for specified period, ]
---

# sleep

## Description

Suspend execution for a specified period of time.

## Arguments

-   **milliseconds**

    Time to sleep \(in milliseconds\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   During the sleep period, the processor is released to other processes running on the system.
-   This action is particularly useful in allowing the application under test time to perform any necessary actions.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_sleep_pgm.png)

**Result**

![](/images//Images/bia_sleep_res.png)

**Parent topic:**[Timing](/TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[get clock count](/TA_Automation/Topics/bia_get_clock_count.html)

**Next topic:**[start clock count](/TA_Automation/Topics/bia_start_clock_count.html)

