--- 
title: "Testing sample scripting techniques"
linktitle: "Testing sample scripting techniques"
description: "TestArchitect provides various testing samples to illustrate additional techniques in comparing pictures, obtaining controls, using wildcards, and using inline data sets."
weight: 3
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_sample_scripting_techniques.html
keywords: "sample scripting techniques, scripting, sample techniques, data sets, wildcards"
---

TestArchitect provides various testing samples to illustrate additional techniques in comparing pictures, obtaining controls, using wildcards, and using inline data sets.

Ensure that the TestArchitect Client is installed.

1.  With TestArchitect running, double-click the **SampleRepository** node on the TestArchitect explorer tree.

    ![](/images/TA_Tutorials/Images/tut.Login_Repository.png)

2.  In the Log In Repository dialog box, type administrator in the **User Name** box, leave the **Password** box blank, and click **OK**.

3.  Expand the **Sample scripting techniques** project and its **Tests** node in the TestArchitect explorer tree.

4.  Select a provided sample test module \(for example, Picture verification\) inside the **Sample scripting techniques** test node you want to execute.

5.  Click **Execute** ![](/images/TA_Tutorials_Sample_App/Images/btn.TAC_toolbar.Execute.png) on the toolbar to execute the test.

6.  In the Execute Test dialog box, click **Execute** to start the test.

    {{<important>}} Do not provide any user input while the test is being executed.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.


At the end of the test run, TestArchitect displays a summary and detailed results of the run. See [Working with test results](/user-guide/working-with-test-results/) for details regarding interpreting test results.



