--- 
title: "on error action"
linktitle: "on error action"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_on_error_action.html
---
keyword: [error handler, handle error]
---

# on error action

## Description

Specify the action to be invoked in the event of an error.

## Arguments

-   **action**

    Name of the action to be executed upon the occurrence of an error or warning.

    Name of the action to be executed upon the occurrence of an error.

-   **argument 1, argument 2,…, argument N**

    \(Optional\) Arguments to be passed to the action specified in the action argument.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The number of optional arguments depends on the requirements of the action specified in action.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example - Case 1: The error handler action has no arguments

**Action Lines**

![](/images//Images/bia_on_error_action_pgm.png)

**Result**

![](/images//Images/bia_on_error_action_res.png)

## Example - Case 2: The error handler action has arguments

**Test Lines**

![](/images//Images/bia_on_error_action_3_res.png)

**Result**

![](/images//Images/bia_on_error_action_3_pgm.png)

## Example

**Action Lines**

![](/images//Images/bia_on_error_action_ta4vs.png)

**Parent topic:**[Error Handling](/TA_Automation/Topics/bia_Error_handling.html)

**Previous topic:**[on error](/TA_Automation/Topics/bia_on_error.html)

**Next topic:**[on failure action](/TA_Automation/Topics/bia_on_failure_action.html)

