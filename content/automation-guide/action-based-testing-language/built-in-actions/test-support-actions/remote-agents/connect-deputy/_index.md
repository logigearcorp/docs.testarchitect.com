--- 
title: "connect deputy"
linktitle: "connect deputy"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_connect_deputy.html
---
keyword: [connect deputy, connect lead to deputy, establish connection to deputy, estabish connection from lead to deputy]
---

# connect deputy

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
-   The name defined by the name argument is used by the built-in [use deputy](use_deputy.html) and [disconnect deputy](disconnect_deputy.html) actions.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_connect_deputy_pgm.png)

**Parent topic:**[Remote Agents](/TA_Automation/Topics/bia_Remote_agents.html)

**Next topic:**[disconnect deputy](/TA_Automation/Topics/bia_disconnect_deputy.html)

**Related information**  


[Synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous.html)

