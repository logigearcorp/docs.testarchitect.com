--- 
title: "set notice level"
linktitle: "set notice level"
description: "Description Set the severity level of runtime problem that will result in execution being interrupted to await user intervention. Arguments level The notice level. Allowable values: 0 Do not interrupt ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_set_notice_level.html
keywords: "built-in actions, set notice level, set notice level (action), set notice level, notice level settings, set error notice level"
---

## Description

Set the severity level of runtime problem that will result in execution being interrupted to await user intervention.

## Arguments

-   **level**

    The notice level.

    Allowable values:

    -   **0**

        Do not interrupt test run, regardless of problem severity.

    -   **1**

        Interrupt test run for fatal problems only.

    -   **2**

        Interrupt test run for fatal problems and regular errors.

    -   **3**

        \(Default\) Interrupt test run for *any* error or warning.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action sets the value of the [notice level](/TA_Automation/Topics/bis_notice_level.html) built-in setting. Note that the same effect can be achieved by using the [setting](/TA_Automation/Topics/bia_setting.html) action with notice level.
-   When a problem with a high enough severity causes the test to pause, the user is presented with a message box indicating the nature of the problem, and is offered the choices of stopping the test, continuing with the remainder of the test, or debugging the problem.
-   All problem events, whether or not of sufficient severity to trigger a pause in the test run, are logged to the test results.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_notice_level_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_notice_level_res.png)



