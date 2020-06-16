--- 
title: "Serial synchronous remote execution"
linktitle: "Serial synchronous remote execution"
description: "Under serial synchronous remote execution, control is initiated with the lead controller."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_exec_remote_synchronous_serial.html
keywords: "synchronous remote execution, serial synchronous remote execution"
---

Under serial synchronous remote execution, control is initiated with the lead controller.

The lead eventually passes control off to a deputy, which continues to execute compiled action lines fed to it by the lead until the lead takes back control, or perhaps passes control to a different deputy. This continues under the direction of the [use lead](/TA_Automation/Topics/bia_use_lead.html) and [use deputy](/TA_Automation/Topics/bia_use_deputy.html) actions. What should be noted is that, at any given point in time, execution takes place on one, and only one machine.

A typical test case employing serial synchronous execution might look something like this:

![](/images/TA_Help/Images/ug_remote_sync_serial_code.png)

In the above action lines sequence, each connect deputy action \(lines 17 and 18\) creates a connection between a lead controller machine and deputy controller machine for remote test execution. The initial [use deputy](/TA_Automation/Topics/bia_use_deputy.html) action \(line 21\) informs the lead controller that the subsequent lines are to be fed to Deputy 1 for execution. This continues until the use deputy \(26\) action is encountered, whereupon the lines following it are executed on Deputy 2. Subsequently, [use lead](/TA_Automation/Topics/bia_use_lead.html) \(30\) is invoked so that all remaining action lines are run on the lead controller. Finally, since all deputy machines are no longer needed, they are disconnected with [disconnect deputy](/TA_Automation/Topics/bia_disconnect_deputy.html) actions.



