--- 
title: "start clock count"
linktitle: "start clock count"
description: "Description Start the TestArchitect performance timer. Valid contexts This action may be used within the following project items: test modules and user-defined actions. Notes This action is paired ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_start_clock_count.html
keywords: "built-in actions, start clock count, start clock count (action), start clock count, start count up timer, start time counter"
---

## Description

Start the TestArchitect performance timer.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is paired along with [get clock count](/TA_Automation/Topics/bia_get_clock_count.html) for ascertaining the execution performance of a test or segment of a test. Bookend these two actions at whichever segments of your tests that you wish to time.
-   The TestArchitect timer runs continuously across action calls and test modules of the same test run \(whether in serial runs or [run test](/TA_Automation/Topics/bia_run_test.html) invocations\), with its value globally available to the get clock count action.
-   The TestArchitect timer runs continuously across action calls and test modules of the same test run with its value globally available to the get clock count action.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_get_clock_count_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_clock_count_res.png)




