--- 
title: "Receiving test results of remote test execution"
linktitle: "Receiving test results of remote test execution"
weight: 12
aliases: 
    - /TA_Help/Topics/Test_result_remote.html
---

TestArchitect allows you to execute a test remotely and receive the test results from the remote machine, although TestArchitect Client is closed on the local machine, even before the remote execution is complete.

To retrieve test results returned from the [remote machine](Test_exec_remote_asynchronous.html) the next time you start TestArchitect Client, do the following:

1.  Start TestArchitect Client.

2.  In TestArchitect Client, at the bottom right corner, a message notifies that there are results returned from the remote execution.

    ![](/images//Images/pending_results.png)

3.  Click the message.

    The Result Delivery Pending notification dialog box appears, asking whether you want to receive the test results from the remote machine.

    ![](/images//Images/ug_test_result_1.png)

4.  In the dialog box, select Yes to receive the remote test results.


The test results are delivered and stored in the **Results** tree node of the TestArchitect explorer tree on your local machine.

**Parent topic:**[Working with test results](/TA_Help/Topics/Test_result.html)

**Previous topic:**[Opening baseline result](/TA_Help/Topics/Test_result_open_baseline_result.html)

**Next topic:**[Displaying test results in a browser](/TA_Help/Topics/ug_test_results_open_in_browser.html)

