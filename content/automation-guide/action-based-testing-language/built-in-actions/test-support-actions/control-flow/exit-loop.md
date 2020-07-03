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

-   Premature termination of an iterative loop is usually only desired if, during the course of execution, some condition has changed. Hence exit loop is usually associated with one or more [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) conditions.
-   exit loop supports the following types of loops:
    -   [while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/while)-[end while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-while)
    -   [repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat)-[until](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/until)
    -   [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set)-[repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set)

        {{<note>}} The support for data set loops applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_exit_loop_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_exit_loop_res.png)

