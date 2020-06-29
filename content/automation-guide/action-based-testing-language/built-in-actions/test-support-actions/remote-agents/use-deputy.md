--- 
title: "use deputy"
linktitle: "use deputy"
description: "Description Direct the execution of the following block of action lines to a specified deputy controller. Arguments name Name of the deputy controller machine (previously established via the connect ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_use_deputy.html
keywords: "built-in actions, use deputy, use deputy (action), use deputy, execute action lines on specified deputy, exection test lines on specified deputy, run action lines on specfied deputy"
---

## Description

Direct the execution of the following block of action lines to a specified deputy controller.

## Arguments

-   **name**

    Name of the deputy controller machine \(previously established via the [connect deputy](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/connect-deputy) action\).

-   **parallel**

    \(Optional\) Mode in which the deputy is to run.

    Allowable values:

    -   **yes**

        Parallel execution mode.

    -   **no**

        \(Default\) Serial execution mode.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The block of action lines following use deputy is lower-bounded by the next use lead or use deputy action. The block is executed exclusively on the machine specified in the name argument.
-   Parallel execution \(parallel = yes\) allows the lead controller to continue executing lines \(below the block of action lines associated with the use deputy action\) concurrently with the deputy. Serial execution \(parallel = no\) forces the lead controller to wait for the deputy to complete its execution of the block of action lines submitted to it.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   Note that [database actions](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/) are not supported on machines operating as deputies.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_use_deputy_pgm.png)




**Related information**  


[Synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/)

