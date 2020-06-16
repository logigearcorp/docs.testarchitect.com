--- 
title: "continue"
linktitle: "continue"
description: "Description Skips the remaining action lines in the current iteration of a loop and proceeds to the next iteration. Arguments There are no arguments for this action. Valid contexts This action may be ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_continue.html
keywords: "built-in actions, continue, continue (action), continue, continue statement, next iteration, skip remaining lines"
---

## Description

Skips the remaining action lines in the current iteration of a loop and proceeds to the next iteration.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.
-   The continue built-in action gives you the option to skip over the part of a loop where an external condition is triggered, but to go on to complete the rest of the loop. That is, the current iteration of the loop will be skipped, but the test run will return to the top of the loop.
-   continue will be within the block of code under a loop, usually after conditional if-actions.
-   continue supports the following types of loops:
    -   [while](/TA_Automation/Topics/bia_while.html)-[end while](/TA_Automation/Topics/bia_end_while.html)
    -   [repeat](/TA_Automation/Topics/bia_repeat.html)-[until](/TA_Automation/Topics/bia_until.html)
    -   [use data set](/TA_Automation/Topics/bia_use_data_set.html)-[repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html)
-   Flow diagram of continue is described as follows.

    ![](/images/TA_Automation/Images/bia_continue_workflow.png)

-   In case of nested loops, continue skips the current iteration of the innermost loop. For example:

    ![](/images/TA_Automation/Images/bia_continue_workflow_nested_loop.png)


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_continue_pgm.png)

When the value of tm count equals to 3, the continue built-in action is executed, which skips the execution of the [report](/TA_Automation/Topics/bia_report.html) built-in action.

**Result**

When you run the test, the output will be:

```
1
2
4
5
```

![](/images/TA_Automation/Images/bia_continue_res.png)



