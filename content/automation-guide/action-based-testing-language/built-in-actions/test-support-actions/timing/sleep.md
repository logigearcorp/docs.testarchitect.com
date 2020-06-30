--- 
title: "sleep"
linktitle: "sleep"
description: "Description Suspend execution for a specified period of time. Arguments milliseconds Time to sleep (in milliseconds). Valid contexts This action may be used within the following project items: test ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_sleep.html
keywords: "built-in actions, sleep, sleep (action), sleep, suspend execution, suspend execution for specified period, pause exection, pause execution for specified period"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_sleep_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_sleep_res.png)




