--- 
title: "Parallel synchronous remote execution"
linktitle: "Parallel synchronous remote execution"
description: "In some cases it is necessary to test applications, or multiple instances of an application, for their interactions with each other, or for their joint effect on some shared resource such as a database."
weight: 2
aliases: 
    - /TA_Help/Topics/Test_exec_remote_synchronous_parallel.html
keywords: "synchronous remote execution, parallel synchronous remote execution, parallel synchronous remote execution"
---

In some cases it is necessary to test applications, or multiple instances of an application, for their interactions with each other, or for their joint effect on some shared resource such as a database. Such interactivity may be time sensitive and hence it is essential that the various test sequences running on each controller not be conducted in a simple one-after-the-other fashion.

{{<important>}}

-   Before terminating the connection from the lead machine to a deputy machine with the disconnect deputyaction, a wait for deputy or wait for all deputies action should be invoked to ensure that the deputy machine has finished its tasks.
-   In additional, before declaring wait for deputy/wait for all deputies and disconnect deputy, declare use lead to indicate that those actions are performed on the lead machine.

By setting the parallel argument of the [use deputy](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/use-deputy) action to yes, you direct the automation to allow the test sequence assigned to the deputy to run concurrently with a sequence designated to the lead. For that matter, any number of deputies may be launched, each with its own test sequence, each running in parallel with the lead. A typical example may have the following form:

![](/images/TA_Help/Images/ug_remote_xqt_sync_parallel_code.png)

Here, unlike the previous case of serial execution, the test sequence designated for the lead controller \(that is, following the [use lead](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/use-lead) action\) executes in parallel with the sequence following the use deputy action. The [wait for deputy](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/remote-agents/wait-for-deputy) action tells the lead to hold off on executing any further action lines until Deputy 1 has completed its sequence.

As mentioned, parallel and serial execution modes are controlled by the parallel argument of the use deputy action, not through any flag that is set for the test module or for the execution run. Hence any given test case may incorporate, with multiple use deputy actions, both parallel and serial modes of synchronous remote execution.



