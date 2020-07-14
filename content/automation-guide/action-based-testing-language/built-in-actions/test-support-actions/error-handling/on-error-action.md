--- 
title: "on error action"
linktitle: "on error action"
description: "Description Specify the action to be invoked in the event of an error. Arguments action Name of the action to be executed upon the occurrence of an error or warning. argument 1, argument 2,…, argument ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_on_error_action.html
keywords: "built-in actions, on error action, on error action (action), error handler, handle error"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example - Case 1: The error handler action has no arguments

Action Lines

![](/images/TA_Automation/Images/bia_on_error_action_pgm.png)

Result

![](/images/TA_Automation/Images/bia_on_error_action_res.png)

## Example - Case 2: The error handler action has arguments

**Test Lines**

![](/images/TA_Automation/Images/bia_on_error_action_3_res.png)

Result

![](/images/TA_Automation/Images/bia_on_error_action_3_pgm.png)
