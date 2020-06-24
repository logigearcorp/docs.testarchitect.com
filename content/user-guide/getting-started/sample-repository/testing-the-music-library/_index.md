--- 
title: "Testing the Music Library"
linktitle: "Testing the Music Library"
description: "The Music Library automated test project is provided in the Sample Repository to demonstrate automated testing of the Music Library application, which is based on Windows Presentation Foundation (WPF)."
weight: 5
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Executing_Music_Library.html
keywords: "testing, Music Library, samples, testing Music Library"
---

The Music Library automated test project is provided in the Sample Repository to demonstrate automated testing of the Music Library application, which is based on Windows Presentation Foundation \(WPF\).

To execute the Music Library automated test samples:

1.  With TestArchitect running, double-click the **SampleRepository** node on the TestArchitect explorer tree.

    ![](/images/TA_Tutorials/Images/tut.Login_Repository.png)

2.  In the Log In Repository dialog box, type administrator in the **User Name** box, leave the **Password** box blank, and click **OK**.

3.  In the TestArchitect explorer tree, expand the **Music Library** node and its **Tests** subnode.

4.  Select the particular Music Library test \(for example, UI functional tests\) you want to execute and click the **Execute** ![](/images/TA_Tutorials_Sample_App/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.

5.  In the Execute Test dialog box, click **Execute** to start the test.

    {{<important>}} Do not provide any user input while the test is being executed.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.


At the end of the test run, TestArchitect displays a summary and detailed results of the run. See [Working with test results](/reuse/../TA_Help/Topics/Test_result.html) for details regarding interpreting test results.



