--- 
title: "Running a Java harness test"
linktitle: "Running a Java harness test"
description: "Execute the test that calls the hello action you implemented in the Java harness."
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Running_the_test_4_Java.html
keywords: "Automation Tools (Java), Automation Tools dialog (Java), java_harness.jar, harness startup script"
---

Execute the test that calls the hello action you implemented in the Java harness.

You have created a test case that calls the action hello, passing it an argument \(Earth, in this example\). Prior to that you implemented the action inJava , and created the necessary harness code to direct execution of action hello to your implemented definition of it.

1.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

2.  Before clicking **Execute**, click **Automation Tools**.

    The Automation Tools dialog box appears.

3.  Select **TestArchitect Java Harness** from **Playback Tool** option.

4.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.02.png) next to the **Script\(s\)** field to browse to the filejava\_harness.jar which, if you followed the instructions to create it \(that is, used Eclipse\), should be in your Eclipse workspace directory.

    ![](/images/TA_Tutorials/Images/dlg.Automation_Tools.Java_settings_java_harness.png)

5.  Click **OK** to return to the Execute Test dialog box.

6.  Click **Execute** to run the test.


Upon completion of execution, the **Result Details** tab of the test results displays the text hello, followed by the value you entered as an argument to the action:

![](/images/TA_Tutorials/Images/tut.Harness.Test02_Results.Java.png)

So far, you have created your own user-scripted action along with a test that runs it, but they have no interaction with the outside world. In the next exercise, you will create a user-scripted action that communicates with a target application.




