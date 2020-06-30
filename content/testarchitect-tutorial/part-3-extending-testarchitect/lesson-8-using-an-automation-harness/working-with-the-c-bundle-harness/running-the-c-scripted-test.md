--- 
title: "Running the C#-scripted test"
linktitle: "Running the C#-scripted test"
slug: "running-the-c-scripted-test"
description: "Execute the test that calls the hello action you implemented in the C# bundle harness."
weight: 4
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_running_test.html
keywords: "harness, bundle, C#, running harness test, bundle harness"
---

Execute the test that calls the hello action you implemented in the C\# bundle harness.

You have created a test case that calls the action hello, passing it an argument \(TestArchitect\). You have also implemented the user-scripted action in C\# to handle the execution of the hello action.

1.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

2.  Before clicking **Execute**, click **Automation Tools**.

    The Automation Tools dialog box appears.

3.  Select **CSharp\_Harness** from the **Playback Tool** options.

4.  In the **Executable\(s\)** text box, browse to \(![](/images/TA_Help/Images/btn.browse-ellipsis.02.png)\) the TestArchitect.Harness.Executor.exe file.

    By default, this file is located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

    ![](/images/TA_Tutorials/Images/dlg.Automation_Tools.CSharp_bundle_settings_harness.png)

5.  Click **OK** to return to the Execute Test dialog box.

6.  Click **Execute** to run the test.


Upon completion of execution, the **Result Details** tab of the test results displays the text hello, followed by the value you entered as an argument to the action:

![](/images/TA_Tutorials/Images/tut.Harness.Test02_Results.csharp.png)

So far, you have created your own user-scripted action along with a test that runs it, but they have no interaction with the outside world. In the next exercise, you will create a user-scripted action that communicates with a target application.




