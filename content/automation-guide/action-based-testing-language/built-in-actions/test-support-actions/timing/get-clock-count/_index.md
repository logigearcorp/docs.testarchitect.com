--- 
title: "get clock count"
linktitle: "get clock count"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_get_clock_count.html
---
keyword: [get clock count, get timer value, get time counter value, retrieve timer value, get elapsed time]
---

# get clock count

## Description

Retrieve the elapsed time since the most recent execution of a [start clock count](start_clock_count.html) action.

## Arguments

-   **variable**

    Variable to receive the elapsed time \(units: milliseconds\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Use this action, paired with start clock count to ascertain the performance of your test, or a segment of it.
-   The TestArchitect timer runs continuously across action calls and test modules of the same test run \(whether in serial runs or [run test](run_test.html) invocations\), with its value globally available to the get clock count action.
-   Execution of get clock count only samples the TestArchitect performance timer, it does not stop or reset it. Hence, multiple invocations of get clock count following a single start clock count may be used as multiple timing “checkpoints”.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_get_clock_count_pgm.png)

**Result**

![](/images//Images/bia_get_clock_count_res.png)

**Parent topic:**[Timing](/TA_Automation/Topics/bia_Timing.html)

**Next topic:**[sleep](/TA_Automation/Topics/bia_sleep.html)

