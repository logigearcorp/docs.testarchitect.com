--- 
title: "Testing Scrum Board"
linktitle: "Testing Scrum Board"
description: "TestArchitect provides sample test modules that demonstrate automated testing of the Scrum Board web application."
weight: 2
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Scrum_Board_testing.html
keywords: "testing, Scrum Board, samples, testing Scrum Board"
---

TestArchitect provides sample test modules that demonstrate automated testing of the Scrum Board web application.

Ensure that the TestArchitect Automation Agent is installed and enabled in whichever browser \(Google Chrome, Mozilla Firefox, or Internet Explorer\) you plan to host the Scrum Board sample application. See [Automation Agent Manager](/TA_Help/Topics/Test_exec_automation_agent_manager.html) and [Preparing web browsers](/TA_Tutorials_Sample_App/Topics/SR_Enabling_TA_automation_agent_def.html) for details on how to install the TestArchitect Automation Agent and enable the agent in a browser.

To execute the Scrum Board sample:

1.  With TestArchitect running, double-click the **SampleRepository** node on the TestArchitect explorer tree.

    ![](/images/TA_Tutorials/Images/tut.Login_Repository.png)

2.  In the Log In Repository dialog box, type administrator in the **User Name** box, leave the **Password** box blank, and click **OK**.

3.  In the TestArchitect explorer tree, expand the **Scrum Board** node and then its **Tests** subnode.

4.  Select the particular Scrum Board test \(for example, **Input Validation**\) you want to execute and click **Execute** ![](/images/TA_Tutorials_Sample_App/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

5.  In the Execute Test dialog box, click the **Select Version** button in the Variation Specification panel.

    The Select Version dialog box appears:

    ![](/images/TA_Tutorials_Sample_App/Images/Scrumboard_Select_Version.png)

6.  Select an appropriate browser type or OS platform to run the automated test:

    -   Windows platform: select the browser type in the dialog box by doing one of the following:
        -   Clear all check boxes to have the sample application run under Internet Explorer \(the default browser\).
        -   Select the **Chrome** check box to have the sample application run under Google Chrome.
        -   Select the **Firefox** check box to have the sample application run under Mozilla Firefox.
    -   Linux platform: select the **Linux** check box.
7.  Click **OK**.

8.  In the Execute Test dialog box, fill-in the language type variation **Keyword** in the Variation Specification frame. To test Scrum Board in English, clear the **Keyword** text box. To test in Spanish \(only for the Scrum Board's Multi-language Test module\) set the variation keyword to spanish.

    **Note:** The variation keyword spanish is applicable only for the Scrum Board's Multi-language Test module.

9.  In the Execute Test dialog box, click **Execute** to start the test.

    **Important:** Do not provide any user input while the test is being executed.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.


At the end of the test run, TestArchitect displays a summary and detailed results of the run. See [Working with test results](/reuse/../TA_Help/Topics/Test_result.html) for details regarding interpreting test results.



