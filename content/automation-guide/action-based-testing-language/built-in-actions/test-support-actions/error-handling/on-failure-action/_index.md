--- 
title: "on failure action"
linktitle: "on failure action"
description: "Description Specify the action to be invoked in the event of a check failure from any check -type action. Arguments action Name of the action to be executed upon a check failure. argument 1, argument ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_on_failure_action.html
keywords: "built-in actions, on failure action, on failure action (action), on failure, failure handler, handle failure"
---

## Description

Specify the action to be invoked in the event of a check failure from any check-type action.

## Arguments

-   **action**

    Name of the action to be executed upon a check failure.

-   **argument 1, argument 2,..., argument N**

    \(Optional\) Arguments to be passed to the action specified in the action argument.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The number of optional arguments depends on the requirements of the action specified in action.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example - Case 1: Failure handler with no arguments

**Action Lines**

![](/images/TA_Automation/Images/bia_on_failure_action_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_on_failure_action_res.png)

## Example - Case 2: Failure handler with arguments

**Action Lines**

![](/images/TA_Automation/Images/bia_on_failure_action_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_on_failure_action_2_res.png)




