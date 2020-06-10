--- 
title: "disconnect deputy"
linktitle: "disconnect deputy"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_disconnect_deputy.html
keywords: "disconnect deputy, terminate connection to deputy, disconnect deputy from lead"
---

## Description

Terminate the connection to the deputy controller machine.

## Arguments

-   **name**

    Name of the deputy controller machine \(previously established with the [connect deputy](/TA_Automation/Topics/bia_connect_deputy.html) action\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is intended for execution only on lead controllers.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_disconnect_deputy_pgm.png)

**Parent topic:**[Remote Agents](/TA_Automation/Topics/bia_Remote_agents.html)

**Previous topic:**[connect deputy](/TA_Automation/Topics/bia_connect_deputy.html)

**Next topic:**[use deputy](/TA_Automation/Topics/bia_use_deputy.html)

**Related information**  


[Synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous.html)

