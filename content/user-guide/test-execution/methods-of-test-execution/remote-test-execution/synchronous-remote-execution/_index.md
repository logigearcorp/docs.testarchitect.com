--- 
title: "Synchronous remote execution"
linktitle: "Synchronous remote execution"
weight: 2
aliases: 
    - /TA_Help/Topics/Test_exec_remote_synchronous.html
---

In synchronous remote execution, tests are run that typically involve multiple machines interacting with each other, or accessing the same resource.

As an example of a scenario requiring synchronization, hypothetically you wish to set up a test wherein Machine A sends a message in which Machine B then receives and checks. Under this scenario, the executions of Machines A and B must be synchronized so that B checks the message only after A has sent it out.

**Note:** A synchronous remote execution scenario must be explicitly defined as part of the test case itself – that is, written up as action line sequences. Special lead-deputy built-in actions dedicated to synchronous remote execution are employed. This is very different from the case of asynchronous execution, in which the remote machine\(s\) are specified at runtime, and the remote execution is unrelated to the content of the test cases.

In TestArchitect synchronous execution, the machine that initiates execution is called the lead, while other involved test machines are the deputies. Switching control from lead to deputy, deputy to lead, or between deputies is directed by the six lead-deputy actions:

-   [connect deputy \[machine\] \[port\] \[time out\] \[name\]](/TA_Automation/Topics/bia_connect_deputy.html)
-   [use deputy \[name\] \[parallel\]](/TA_Automation/Topics/bia_use_deputy.html)
-   [use lead](/TA_Automation/Topics/bia_use_lead.html)
-   [wait for deputy \[name\]](/TA_Automation/Topics/bia_wait_for_deputy.html)
-   [wait for all deputies](/TA_Automation/Topics/bia_wait_for_all_deputies.html)
-   [disconnect deputy \[name\]](/TA_Automation/Topics/bia_disconnect_deputy.html)

Under synchronous remote execution, control is passed to a deputy in one of two modes, serial or parallel. \(This is governed by the parallel argument of the use deputy action, in which `yes = parallel` and `no = serial`.\)

**Attention:**

-   TestArchitect automatically adds controllers executing tests to the controller list in [Lab Manager](Lab_manager.html), and you can monitor the test progress there.
-   Note that, while synchronous \(lead/deputy\) remote execution applies specifically to execution on TestArchitect controller hosts, it can be used in mobile testing when those hosts are controlling mobile devices.
-   Note that [database actions](/TA_Automation/Topics/bia_Database.html) are not supported on machines operating as deputies.
-   While Machine A is utilizing Machine B as a deputy, it is impossible for Machine B to utilize Machine A as a deputy.

## Variables

-   If the deputies are running in parallel mode, each thread has its own local/global variables. You cannot refer to a variable declared in another thread no matter whether the variable is local or global.
-   If the deputies are running in serial mode, the scoping rules are the same as for executing normal tests procedures \(see [Variables](/TA_Automation/Topics/The_test_language_variables.html) for details\).
-   If a test case variable is declared before both of the [use deputy](/TA_Automation/Topics/bia_use_deputy.html) actions, the deputies can retrieve the value of that local variable regardless of whether the deputies are running in parallel or serial mode.
-   However, if the deputies write values to an existing local/global variable, the new value takes effect only if the deputies are running in serial mode. Otherwise, the new value is discarded.

## Harness termination on a deputy

Assuming that a lead connects a deputy, running two harnesses - temporarily called testOne and testTwo - on a deputy. You want to terminate testOne.

-   If you terminate it on the lead, testOne will be terminated not only on the lead as but also on the deputy.
-   If you terminate it on the deputy,
    -   In case of serial mode, testOne will be terminated on both the deputy and lead.
    -   In case of parallel mode, testOne will be terminated on the deputy. However, testOne will continue running on the lead until it completes.

**Note:** Regardless of whether you terminate TestOne on the lead or deputy, testTwo is not affected.

1.  [Serial synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous_serial.html)  
Under serial synchronous remote execution, control is initiated with the lead controller.
2.  [Parallel synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous_parallel.html)  
In some cases it is necessary to test applications, or multiple instances of an application, for their interactions with each other, or for their joint effect on some shared resource such as a database.

**Parent topic:**[Remote test execution](/TA_Help/Topics/Test_exec_remote.html)

**Previous topic:**[Asynchronous remote execution](/TA_Help/Topics/Test_exec_remote_asynchronous.html)

