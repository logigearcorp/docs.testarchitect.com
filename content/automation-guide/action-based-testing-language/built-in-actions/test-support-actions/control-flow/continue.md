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

-   Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.
-   The continue built-in action gives you the option to skip over the part of a loop where an external condition is triggered, but to go on to complete the rest of the loop. That is, the current iteration of the loop will be skipped, but the test run will return to the top of the loop.
-   continue will be within the block of code under a loop, usually after conditional if-actions.
-   continue supports the following types of loops:
    -   [while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/while)-[end while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-while)
    -   [repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat)-[until](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/until)
    -   [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set)-[repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set)
-   Flow diagram of continue is described as follows.

    ![](/images/TA_Automation/Images/bia_continue_workflow.png)

-   In case of nested loops, continue skips the current iteration of the innermost loop. For example:

    ![](/images/TA_Automation/Images/bia_continue_workflow_nested_loop.png)


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

Action Lines

![](/images/TA_Automation/Images/bia_continue_pgm.png)

When the value of tm count equals to 3, the continue built-in action is executed, which skips the execution of the [report](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report) built-in action.

Result

When you run the test, the output will be:

```
1
2
4
5
```

![](/images/TA_Automation/Images/bia_continue_res.png)


