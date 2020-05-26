--- 
title: "Remote test execution"
linktitle: "Remote test execution"
weight: 5
aliases: 
    - /TA_Help/Topics/Test_exec_remote.html
---
# Remote test execution {#Test_exec_remote .concept}

The TestArchitect system allows you to launch a test on remote hosts and/or devices attached to the hosts, provided that each host has a TestArchitect Controller installed.

This capability has a number of benefits, including:

-   Running tests side-by-side, using same or different data sets, on multiple platforms and hardware configurations.
-   Testing applications involving communication between two or more machines.
-   Concurrency testing involving applications accessing the same shared resources.

The initiation of a remote execution run takes place in one of two ways:

-   Asynchronous: the operator simply redirecting a test run onto one or more remote controllers and/or devices at runtime.
-   Synchronous: remote execution directed from within the test module.

1.  [Asynchronous remote execution](../../TA_Help/Topics/Test_exec_remote_asynchronous.html)  
Asynchronous testing allows you to run a test on multiple remote controllers.
2.  [Synchronous remote execution](../../TA_Help/Topics/Test_exec_remote_synchronous.html)  
In synchronous remote execution, tests are run that typically involve multiple machines interacting with each other, or accessing the same resource.

**Parent topic:**[Methods of test execution](../../TA_Help/Topics/Test_exec_methods.html)

**Previous topic:**[Executing tests from the command line interface](../../TA_Help/Topics/Test_exec_cmd.html)

**Next topic:**[Multiple device execution](../../TA_Help/Topics/Test_exec_multiple_device_execution.html)

