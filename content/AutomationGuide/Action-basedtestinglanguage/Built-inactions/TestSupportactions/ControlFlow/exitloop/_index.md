--- 
title: "exit loop"
linktitle: "exit loop"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_exit_loop.html
---
# exit loop {#bia_exit_loop .reference}

## Description { .section}

When the exit loop is encountered inside a loop, the loop is immediately terminated and the test run control resumes at the next action lines following the loop.

## Arguments { .section}

There are no arguments for this action.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Premature termination of an iterative loop is usually only desired if, during the course of execution, some condition has changed. Hence exit loop is usually associated with one or more [if](bia_if.html) conditions.
-   exit loop supports the following types of loops:
    -   [while](bia_while.html)-[end while](bia_end_while.html)
    -   [repeat](bia_repeat.html)-[until](bia_until.html)
    -   [use data set](bia_use_data_set.html)-[repeat for data set](bia_repeat_for_data_set.html)

        **Note:** The support for data set loops applies to TestArchitect [8.3 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.


## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_exit_loop_pgm.png)

**Result**

![](../Images/bia_exit_loop_res.png)

## Example { .section}

**Action Lines**

![](../Images/bia_exit_loop_ta4vs_pgm.png)

**Result**

![](../Images/bia_exit_loop_ta4vs_res.png)

**Parent topic:**[Control Flow](../../TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[end while](../../TA_Automation/Topics/bia_end_while.html)

**Next topic:**[exit test action](../../TA_Automation/Topics/bia_exit_test_action.html)

