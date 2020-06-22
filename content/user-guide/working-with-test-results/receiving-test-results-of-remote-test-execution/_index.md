--- 
title: "Receiving test results of remote test execution"
linktitle: "Receiving test results of remote test execution"
description: "TestArchitect allows you to execute a test remotely and receive the test results from the remote machine, although TestArchitect Client is closed on the local machine, even before the remote execution is complete."
weight: 12
aliases: 
    - /TA_Help/Topics/Test_result_remote.html
keywords: "test results, remote test execution, remote execution, receiving test results, remote machines"
---

TestArchitect allows you to execute a test remotely and receive the test results from the remote machine, although TestArchitect Client is closed on the local machine, even before the remote execution is complete.

To retrieve test results returned from the [remote machine](/TA_Help/Topics/Test_exec_remote_asynchronous.html) the next time you start TestArchitect Client, do the following:

1.  Start TestArchitect Client.

2.  In TestArchitect Client, at the bottom right corner, a message notifies that there are results returned from the remote execution.

    ![](/images/TA_Help/Images/pending_results.png)

3.  Click the message.

    The Result Delivery Pending notification dialog box appears, asking whether you want to receive the test results from the remote machine.

    ![](/images/TA_Help/Images/ug_test_result_1.png)

4.  In the dialog box, select Yes to receive the remote test results.


The test results are delivered and stored in the **Results** tree node of the TestArchitect explorer tree on your local machine.




