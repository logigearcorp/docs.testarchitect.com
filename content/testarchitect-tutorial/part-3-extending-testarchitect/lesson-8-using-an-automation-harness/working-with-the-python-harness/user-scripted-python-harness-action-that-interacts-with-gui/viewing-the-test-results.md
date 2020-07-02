--- 
title: "Viewing the test results"
linktitle: "Viewing the test results"
description: "Run a test using your Python-coded action, and ensure that it properly interacts with the target application."
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Viewing_the_test_results_2.html
keywords: 
---

Run a test using yourPython-coded action, and ensure that it properly interacts with the target application.

**Before proceeding, ensure that you have:**

-   [Created a test case](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/creating-the-test-case-and-stub-action) in TestArchitect which calls check row count, an action for counting selected rows of a table in an application,
-   [Created the Python method](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/scripting-a-python-based-gui-interfacing-action) action\_CheckRowCount\(\) to implement the check row count action, and [written the essential code](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/creating-a-new-code-script-module) to ensure that the execution of check row count results in control being directed to that method.
-   

You will run a test which executes the check row count action, which you have implemented in the TestArchitect harness as aPython script. Your action, as invoked, examines the **View Orders** table of the Car Rental application \(below\), counts the number of rows in which the contents of the **Car Type** column is "Ford Mustang Coupe", and compares that number to the expected count of 2.![](/images/TA_Tutorials/Images/app.Car_Rental.View_Orders.unmodified.png)



1.  If you have not already done so, start the Car Rental application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.

    The login window appears.

    ![](/images/TA_Tutorials/Images/app.Car_Rental.Login.unmodified.png)

2.  Log in to the application, and navigate to the View Orders window.

3.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

4.  Before clicking **Execute**, click **Automation Tools**.

    The Automation Tools dialog box appears.

5.  Select **TestArchitect Python Harness** from **Playback Tool** option.

6.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.02.png) next to the **Script\(s\)** field to browse to the fileta\_main.py.

    ![](/images/TA_Tutorials/Images/dlg.Automation_Tools.Python_settings02.png)

    {{<note>}} The default location for the python executable\(s\) is c:\\Python\\python.exe. If you install Python in a different location, you'll need to set the location, then move to the next step.

    {{<tip>}} To save time, install Python to the default location C:\\Python\\.

    Additionally, from TestArchitect 8.5 onward, in the python\_harness.bat file located in the folder C:\\Program Files\\LogiGear\\TestArchitect\\harness samples\\python, the default value will be Python 3. If a user wants to use Python 2, they will need to modify the path in this file like below:![](/images/TA_Tutorials/Images/python_path.png)

7.  Click **OK** to return to the Execute Test dialog box.

8.  In the **Test Modules** panel, expand the tree. If you so wish, ensure that the only test case selected for execution is the one hosting the check row count action \(`TC 02` in the example\).

9.  Click **Execute** to run the test.


Upon completion of the test, the results are displayed:

![](/images/TA_Tutorials/Images/tut.Data_Sets.Test03_Results.png)



**Related information**  


[Running a test and viewing the results](/testarchitect-tutorial/part-1-getting-started-with-testarchitect/lesson-1-creating-a-simple-test/running-a-test-and-viewing-the-results)

