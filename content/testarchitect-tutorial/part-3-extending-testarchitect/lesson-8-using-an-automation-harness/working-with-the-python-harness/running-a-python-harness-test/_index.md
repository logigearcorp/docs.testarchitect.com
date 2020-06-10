--- 
title: "Running a Python harness test"
linktitle: "Running a Python harness test"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Running_the_test_4.html
---

Execute the test that calls the user-scripted action you implemented in thePython harness.

**Note:** 

You have created a test case that calls the action hello, passing it an argument \(Earth, in this example\). Prior to that you implemented the action inPython, and created the necessary harness code to direct execution of action hello to your implemented definition of it.

1.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

2.  Before clicking **Execute**, click **Automation Tools**.

    The Automation Tools dialog box appears.

3.  Select **TestArchitect Python Harness** from **Playback Tool** option.

4.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.02.png) next to the **Script\(s\)** field to browse to the fileta\_main.py.

    ![](/images/TA_Tutorials/Images/dlg.Automation_Tools.Python_settings02.png)

    **Note:** The default location for the python executable\(s\) is c:\\Python\\python.exe. If you install Python in a different location, you'll need to set the location, then move to the next step.

    **Tip:** To save time, install Python to the default location C:\\Python\\.

    Additionally, from TestArchitect 8.5 onward, in the python\_harness.bat file located in the folder C:\\Program Files\\LogiGear\\TestArchitect\\harness samples\\python, the default value will be Python 3. If a user wants to use Python 2, they will need to modify the path in this file like below:![](/images/TA_Tutorials/Images/python_path.PNG)

5.  Click **OK** to return to the Execute Test dialog box.

6.  Click **Execute** to run the test.


Upon completion of execution, the **Result Details** tab of the test results displays the text hello, followed by the value you entered as an argument to the action:

![](/images/TA_Tutorials/Images/tut.Harness.Test02_Results.Python.png)

**Tip:** **IDE Users:** It is generally recommended that you try out your automation in your IDE \(Integrated Development Environment\), such as Eclipse. Use the **Compile** button in TestArchitect’s **Execution** dialog to set up the necessary information for the test to run. Afterwards, launch the test directly from the IDE. Be sure to set the PYTHONPATH environment variable to the lib/python directory in the **TestArchitect** program folder. Under Windows, if TestArchitect is installed in the default folder, this would typically be: C:\\Program Files\\LogiGear\\TestArchitect\\lib\\python

**Tip:** **Developers**: Eclipse with PyDev is a good solution for Python. In Eclipse with PyDev, this setting is best set in the project properties. Right click the **project** node in the Package Explorer, then select **Properties**. In the Properties dialog select **Python - PYTHONPATH**. Select the **External Libraries** tab, and click the **Add source folder** button.

So far, you have created your own user-scripted action along with a test that runs it, but they have no interaction with the outside world. In the next exercise, you will create a user-scripted action that communicates with a target application.

**Parent topic:**[Working with the Python harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.html)

**Previous topic:**[Creating the test case and stub action](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action.html)

**Next topic:**[User-scripted Python harness action that interacts with GUI](/TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI.html)

