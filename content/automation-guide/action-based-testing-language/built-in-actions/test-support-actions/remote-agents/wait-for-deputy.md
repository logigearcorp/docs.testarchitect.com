--- 
title: "wait for deputy"
linktitle: "wait for deputy"
description: "Description Wait until a specified deputy completes its task. (Or, alternatively, wait for a specified set of deputies.) Arguments deputy name Deputy (or deputies) to wait for. Valid contexts This ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_wait_for_deputy.html
keywords: "built-in actions, wait for deputy, wait for deputy (action), wait for sepecified deputy to complete, wait for completion of specified deputy, wait until deputy completes, wait until deputy finishes"
---

## Description

Wait until a specified deputy completes its task. \(Or, alternatively, wait for a specified set of deputies.\)

## Arguments

-   **deputy name**

    Deputy \(or deputies\) to wait for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Use wait for deputy to pause lead controller when deputy is executing in parallel mode \(that is, the parallel argument of the use deputy action that launched this deputy's run was set to yes.\)
-   The number of arguments – that is, deputy names – is unlimited. Specify additional deputies in columns adjacent to deputy name. Note that they do not require argument headers.
-   This action is intended for execution only on lead controllers, and applies only to deputies running in parallel mode \(that is, invoked with the parallel argument of use deputy set to yes\).
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).



**Related information**  


[Synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/)

