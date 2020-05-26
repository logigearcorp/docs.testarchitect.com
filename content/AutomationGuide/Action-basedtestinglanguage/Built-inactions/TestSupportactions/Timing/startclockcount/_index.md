--- 
title: "start clock count"
linktitle: "start clock count"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_start_clock_count.html
---
# start clock count {#bia_start_clock_count .reference}

## Description { .section}

Start the TestArchitect performance timer.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action is paired along with [get clock count](bia_get_clock_count.html) for ascertaining the execution performance of a test or segment of a test. Bookend these two actions at whichever segments of your tests that you wish to time.
-   The TestArchitect timer runs continuously across action calls and test modules of the same test run \(whether in serial runs or [run test](bia_run_test.html) invocations\), with its value globally available to the get clock count action.
-   The TestArchitect timer runs continuously across action calls and test modules of the same test run with its value globally available to the get clock count action.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_get_clock_count_pgm.png)

**Result**

![](../Images/bia_get_clock_count_res.png)

**Parent topic:**[Timing](../../TA_Automation/Topics/bia_Timing.html)

**Previous topic:**[sleep](../../TA_Automation/Topics/bia_sleep.html)

**Next topic:**[wait for control](../../TA_Automation/Topics/bia_wait_for_control.html)

