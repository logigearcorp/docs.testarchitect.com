--- 
title: "connect deputy"
linktitle: "connect deputy"
description: "Description Create a connection from a lead controller to a deputy controller for remote test execution. Arguments machine IP address or name of the deputy controller machine. port The connection ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_connect_deputy.html
keywords: "built-in actions, connect deputy, connect deputy (action), connect deputy, connect lead to deputy, establish connection to deputy, estabish connection from lead to deputy"
---

## Description

Create a connection from a lead controller to a deputy controller for remote test execution.

## Arguments

-   **machine**

    IP address or name of the deputy controller machine.

-   **port**

    The connection port.

-   **timeout**

    \(Optional\) Maximum time to wait for response from deputy controller \(Units: seconds; default: 7200\).

-   **name**

    Set the deputy machine name \(see Notes below\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is intended for execution only on lead controllers.
-   Before running a remote test, this action must be invoked to initialize/check the connection.
-   The name defined by the name argument is used by the built-in [use deputy](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/use-deputy) and [disconnect deputy](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/disconnect-deputy) actions.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_connect_deputy_pgm.png)



**Related information**  


[Synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/)
