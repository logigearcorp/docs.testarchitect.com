--- 
title: "exit loop"
linktitle: "exit loop"
description: "Description When the exit loop is encountered inside a loop, the loop is immediately terminated and the test run control resumes at the next action lines following the loop. Arguments There are no ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_exit_loop.html
keywords: "built-in actions, exit loop, exit loop (action), exit loop, exit loop statement, break loop, terminate loop, loop break"
---

## Description

When the exit loop is encountered inside a loop, the loop is immediately terminated and the test run control resumes at the next action lines following the loop.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Premature termination of an iterative loop is usually only desired if, during the course of execution, some condition has changed. Hence exit loop is usually associated with one or more [if](/TA_Automation/Topics/bia_if.html) conditions.
-   exit loop supports the following types of loops:
    -   [while](/TA_Automation/Topics/bia_while.html)-[end while](/TA_Automation/Topics/bia_end_while.html)
    -   [repeat](/TA_Automation/Topics/bia_repeat.html)-[until](/TA_Automation/Topics/bia_until.html)
    -   [use data set](/TA_Automation/Topics/bia_use_data_set.html)-[repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html)

{{<note>}} The support for data set loops applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_exit_loop_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_exit_loop_res.png)

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_exit_loop_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_exit_loop_ta4vs_res.png)




