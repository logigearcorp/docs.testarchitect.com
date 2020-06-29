--- 
title: "on error"
linktitle: "on error"
description: "Description Specify the execution path to take in the event of an error. Arguments behavior Action to be taken when an error or warning occurs. Allowable values: continue Continue running the ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_on_error.html
keywords: "built-in actions, on error, on error (action), stop action on error, continue action on error, terminate test case, terminate test module"
---

## Description

Specify the execution path to take in the event of an error.

## Arguments

-   **behavior**

    Action to be taken when an error or warning occurs.

    Action to be taken when an error occurs.

    Allowable values:

    -   **continue**

        Continue running the remaining action lines.

    -   **exit action**

        Exit the current action and continue from the calling entity with normal execution flow.

    -   **exit test case**

        Exit the current test case \(skip all remaining action lines in the current test case\) and continue from there with normal execution flow.

    -   **exit test module**

        Exit the current test module \(skip all remaining action lines\) and, if applicable, continue execution with subsequent modules of the test run.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_on_error_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_on_error_res.png)



