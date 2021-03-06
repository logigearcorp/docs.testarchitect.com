--- 
title: "Viewing the test results"
linktitle: "Viewing the test results"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Viewing_the_test_results_2_Java.html
---

Run a test using yourJava-coded action, and ensure that it properly interacts with the target application.

**Before proceeding, ensure that you have:**

-   [Created a test case](Creating_the_test_case_and_stub_action_1_Java.html) in TestArchitect which calls check row count, an action for counting selected rows of a table in an application,
-   [Created the Java method](Scripting_a_GUI-interfacing_action_Java.html) action\_CheckRowCount\(\) to implement the check row count action, and [written the essential code](Creating_a_new_code_script_module_Java.html) to ensure that the execution of check row count results in control being directed to that method.

You will run a test which executes the check row count action, which you have implemented in the TestArchitect harness as aJava method. Your action, as invoked, examines the **View Orders** table of the Car Rental application \(below\), counts the number of rows in which the contents of the **Car Type** column is "Ford Mustang Coupe", and compares that number to the expected count of 2.![](/images//Images/TA_Tutorials/Images/app.Car_Rental.View_Orders.unmodified.png)



1.  If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](/images//Images/TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

2.  Log in to the application, and navigate to the View Orders window.

3.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images//Images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

4.  Before clicking **Execute**, click **Automation Tools**.

    The Automation Tools dialog box appears.

5.  Select **TestArchitect Java Harness** from **Playback Tool** option.

6.  Click ![](/images//Images/TA_Help/Images/btn.browse-ellipsis.02.png) next to the **Script\(s\)** field to browse to the filejava\_harness.jar which, if you followed the instructions to create it \(that is, used Eclipse\), should be in your Eclipse workspace directory.

    ![](/images//Images/dlg.Automation_Tools.Java_settings_java_harness.png)

7.  Click **OK** to return to the Execute Test dialog box.

8.  In the **Test Modules** panel, expand the tree. If you so wish, ensure that the only test case selected for execution is the one hosting the check row count action \(`TC 02` in the example\).

9.  Click **Execute** to run the test.


Upon completion of the test, the results are displayed:

![](/images//Images/TA_Tutorials/Images/tut.Data_Sets.Test03_Results.png)

**Parent topic:**[User-scripted Java harness action that interacts with GUI](/TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI_Java.html)

**Previous topic:**[Creating the test case and stub action](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action_1_Java.html)

**Related information**  


[Running a test and viewing the results](/TA_Tutorials/Topics/Running_a_test.html)

