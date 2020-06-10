--- 
title: "on error"
linktitle: "on error"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_on_error.html
keywords: "stop action on error, continue action on error, terminate test case, terminate test module"
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

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_on_error_pgm.png)

**Result**

![](/images//Images/bia_on_error_res.png)

**Parent topic:**[Error Handling](/TA_Automation/Topics/bia_Error_handling.html)

**Next topic:**[on error action](/TA_Automation/Topics/bia_on_error_action.html)

