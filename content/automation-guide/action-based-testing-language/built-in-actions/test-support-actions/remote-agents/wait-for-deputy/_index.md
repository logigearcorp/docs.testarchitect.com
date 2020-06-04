--- 
title: "-"
linktitle: "wait for deputy"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_wait_for_deputy.html
---
keyword: [wait for sepecified deputy to complete, wait for completion of specified deputy, wait until deputy completes, wait until deputy finishes]
---

# wait for deputy

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
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

**Parent topic:**[Remote Agents](/TA_Automation/Topics/bia_Remote_agents.html)

**Previous topic:**[wait for all deputies](/TA_Automation/Topics/bia_wait_for_all_deputies.html)

**Related information**  


[Synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous.html)

