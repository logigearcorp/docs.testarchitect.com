--- 
title: "Testing the Car Rental application on Java"
linktitle: "Testing the Car Rental application on Java"
description: "The Car Rental project in the TestArchitect Sample Repository includes test modules and other project items for demonstrating automated testing of the Car Rental application on the Java platform."
weight: 1
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Car_Rental_TA_client.html
keywords: "sample scripting techniques, scripting, sample techniques"
---

The Car Rental project in the TestArchitect Sample Repository includes test modules and other project items for demonstrating automated testing of the Car Rental application on the Java platform.

Ensure that TestArchitect Client is installed on your system.

1.  With TestArchitect running, double-click the **SampleRepository** node on the TestArchitect explorer tree.

    ![](/images/TA_Tutorials/Images/tut.Login_Repository.png)

2.  In the Log In Repository dialog box, type administrator in the **User Name** box, leave the **Password** box blank, and click **OK**.

3.  Expand the **Car Rental** project and its **Tests** node in the TestArchitect explorer tree.

4.  Select a sample test module \(for example, **Action Based Testing**\) inside the Car Rental **Test** node that you want to execute.

5.  Click **Execute** ![](/images/TA_Tutorials_Sample_App/Images/btn.TAC_toolbar.Execute.png) on the toolbar to execute the test.

6.  In the Execute Test dialog box, click **Execute** to start the test.

    {{<important>}} Do not provide any user input while the test is being executed.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.


At the end of the test run, TestArchitect displays a summary and detailed results of the run. See [Working with test results](/user-guide/working-with-test-results/) for details regarding interpreting test results.



