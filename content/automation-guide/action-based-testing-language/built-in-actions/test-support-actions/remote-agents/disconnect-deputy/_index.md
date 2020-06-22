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

![](/images/TA_Automation/Images/bia_disconnect_deputy_pgm.png)




**Related information**  


[Synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous.html)

