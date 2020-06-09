--- 
title: "exit loop"
linktitle: "exit loop"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_exit_loop.html
---
keyword: [exit loop, exit loop statement, break loop, terminate loop, loop break]
---

# exit loop

## Description

When the exit loop is encountered inside a loop, the loop is immediately terminated and the test run control resumes at the next action lines following the loop.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Premature termination of an iterative loop is usually only desired if, during the course of execution, some condition has changed. Hence exit loop is usually associated with one or more [if](if.html) conditions.
-   exit loop supports the following types of loops:
    -   [while](while.html)-[end while](end_while.html)
    -   [repeat](repeat.html)-[until](until.html)
    -   [use data set](use_data_set.html)-[repeat for data set](repeat_for_data_set.html)

        **Note:** The support for data set loops applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_exit_loop_pgm.png)

**Result**

![](/images//Images/bia_exit_loop_res.png)

## Example

**Action Lines**

![](/images//Images/bia_exit_loop_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_exit_loop_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[end while](/TA_Automation/Topics/bia_end_while.html)

**Next topic:**[exit test action](/TA_Automation/Topics/bia_exit_test_action.html)

