--- 
title: "get clock count"
linktitle: "get clock count"
description: "Description Retrieve the elapsed time since the most recent execution of a start clock count action. Arguments variable Variable to receive the elapsed time (units: milliseconds). Valid contexts This ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_get_clock_count.html
keywords: "built-in actions, get clock count, get clock count (action), get clock count, get timer value, get time counter value, retrieve timer value, get elapsed time"
---

## Description

Retrieve the elapsed time since the most recent execution of a [start clock count](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/start-clock-count) action.

## Arguments

-   **variable**

    Variable to receive the elapsed time \(units: milliseconds\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Use this action, paired with start clock count to ascertain the performance of your test, or a segment of it.
-   The TestArchitect timer runs continuously across action calls and test modules of the same test run \(whether in serial runs or [run test](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/run-test) invocations\), with its value globally available to the get clock count action.
-   Execution of get clock count only samples the TestArchitect performance timer, it does not stop or reset it. Hence, multiple invocations of get clock count following a single start clock count may be used as multiple timing “checkpoints”.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_get_clock_count_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_clock_count_res.png)



