--- 
title: "Running the C\\#-scripted test"
linktitle: "Running the C\\#-scripted test"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_running_test.html
---
# Running the C\#-scripted test {#task_y3g_p21_ky .task}

Execute the test that calls the hello action you implemented in the C\# bundle harness.

You have created a test case that calls the action hello, passing it an argument \(TestArchitect\). You have also implemented the user-scripted action in C\# to handle the execution of the hello action.

1.  With your test module displayed in the TestArchitect editor, click **Execute** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

2.  Before clicking **Execute**, click **Automation Tools**.

    The Automation Tools dialog box appears.

3.  Select **CSharp\_Harness** from the **Playback Tool** options.

4.  In the **Executable\(s\)** text box, browse to \(![](../../TA_Help/Images/btn.browse-ellipsis.02.png)\) the TestArchitect.Harness.Executor.exe file.

    By default, this file is located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

    ![](../Images/dlg.Automation_Tools.CSharp_bundle_settings_harness.png)

5.  Click **OK** to return to the Execute Test dialog box.

6.  Click **Execute** to run the test.


Upon completion of execution, the **Result Details** tab of the test results displays the text hello, followed by the value you entered as an argument to the action:

![](../Images/tut.Harness.Test02_Results.csharp.png)

So far, you have created your own user-scripted action along with a test that runs it, but they have no interaction with the outside world. In the next exercise, you will create a user-scripted action that communicates with a target application.

**Parent topic:**[Working with the C\# bundle harness](../../TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html)

**Previous topic:**[Creating test case and stub action for "hello" action](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_and_stub_action.html)

**Next topic:**[User-scripted C\# bundle harness action that interacts with GUI](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_action_that_interacts_with_GUI.html)

