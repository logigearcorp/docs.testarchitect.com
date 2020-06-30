--- 
title: "disconnect deputy"
linktitle: "disconnect deputy"
description: "Description Terminate the connection to the deputy controller machine. Arguments name Name of the deputy controller machine (previously established with the connect deputy action). Valid contexts This ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_disconnect_deputy.html
keywords: "built-in actions, disconnect deputy, disconnect deputy (action), disconnect deputy, terminate connection to deputy, disconnect deputy from lead"
---

## Description

Terminate the connection to the deputy controller machine.

## Arguments

-   **name**

    Name of the deputy controller machine \(previously established with the [connect deputy](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/connect-deputy) action\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is intended for execution only on lead controllers.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_disconnect_deputy_pgm.png)




**Related information**  


[Synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/)

