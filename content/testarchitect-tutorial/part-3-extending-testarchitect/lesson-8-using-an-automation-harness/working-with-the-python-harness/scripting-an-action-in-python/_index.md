--- 
title: "Scripting an action in Python"
linktitle: "Scripting an action in Python"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Scripting_an_action.html
---

Implement an action in Python, using the TestArchitect Python harness.

**Before proceeding:** Copy the files from the harness samples/python folder to a work folder of your own choosing.  This is an important first step when creating user-scripted actions.

**Important:** It is generally recommended that you do not modify the files in harness samples/python.  For one thing, your next upgrade of TestArchitect will cause these files to be overwritten, which may not be to your liking. Secondly, it is just not good practice \(and in many organizations not even permitted\) to modify files in your **Programs** folder. So create a new folder on your hard drive \(for this example, we’ll assume it is D:/harness/python\) and copy to it the files from harness samples/python. From here on, all work will be performed on these files, and in this folder.

You are going to implement an action named hello in thePythonharness. It will accept one argument, who, and write out the word hello, followed by the value specified for who: ![](/images/TA_Tutorials/Images/Python_hello_demo.png)



As outlined in the three-step procedure described earlier, \(in[Developing your own User-scripted Python harness action](/reuse/../TA_Tutorials/Topics/Developing_your_own_harness_action.html)\), this entails making the following modifications to module mod\_Example.py:

-   adding a line to the list of SetActions\(\) function calls, declaring the hello action to have its implementation in the example module;
-   adding an `else-if` clause to the Divert\(\) function, specifying the handling function action\_hello\(\) for the hello action;
-   Creating an implementation for the method action\_hello\(\). This method will do the actual work for the hello action.

These steps are implemented in the following procedure:

1.  Open an editor or development environment for Python.

    For example, use the Eclipse software development environment, with the PyDev plug-in.

2.  **Note:** As discussed earlier, the new action definition will be added to the file mod\_Example.py.

    Open mod\_Example.py in the editor.

3.  Add an additional SetActionScript\(\) line to the SetActions\(\) function of mod\_Example.py, as shown:

    ![](/images//Images/tut.Harness.mod_py_file.SetActionScript01.png)

    This registers that the action hello needs to be interpreted by this module \(or, more specifically, by the module with a moduleName of example\)\).

    **Note:** SetActionScript\(\) is a member function of an object called LIBRARY. This object represents the core interpreter library of TestArchitect, which has functions for common tasks like registering actions, getting arguments and reporting results of checks.

4.  At this point, we've told TestArchitect which module will handle the hello action; now let's tell it which specific function in the module it needs to call.
5.  Add an else-if \(`elif`\) clause to the `if`-statement in the module’s Divert\(\) function:

    ![](/images//Images/tut.Harness.mod_py_file.Add_elif01.png)

    You have now specified that the hello action is implemented by the Python function action\_hello\(\)

6.  **Note:** The real work, the implementation of the action itself, is performed by the action\_hello\(\) function.

    Add this function to the end of your file with the following code:

    ![](/images//Images/tut.Harness.mod_py_file.action_hello01.png)

    **Note:**

    If you prefer to use Python’s documentation conventions, you may want to place the comment below the definition header:

    ![](/images//Images/tut.Harness.mod_py_file.action_hello02.png)

    It is recommended that your comment specify that this is an action implementation, as depicted above.

7.  Save your work.


You have now completed the implementation of a TestArchitect user-scripted action written in Python. The action hello, realized in the coding of Python function action\_hello\(\), accepts a single argument, and writes that value to the TestArchitect output, using functions of TestArchitect's Automation LIBRARY object.

**Note:** Note the similarity of the code here to that of method action\_helloWorld\(\), which implements the hello world action included in the example code. The principal difference is that, whereas the pre-existing action simply writes out the string hello world, your new one accepts an argument, one which replaces “world” as the recipient of the hello greeting. The difference in code is that a library function called NamedArgument\(\) is now used to get the value of the who argument of the hello action. The code first assigns this to a variable named whovar, then uses it to create the text for the report. You may also have noticed the use of the Report\(\) function of the LIBRARY object to write the string to the output. Report\(\) is a wrapper that calls up TestArchitect’s implementation of the report action. Similarly, ReportError\(\), seen in the above step, calls up the implementation of TestArchitect's report error action.

Your scripted hello action is now ready to be run, but while the runtime system will have no problem recognizing it, the same is not yet true of the editor. You may want to take the interim, and optional, step of allowing the test editor to handle the new action gracefully.

**Parent topic:**[Working with the Python harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.html)

**Previous topic:**[Developing your own User-scripted Python harness action](/TA_Tutorials/Topics/Developing_your_own_harness_action.html)

**Next topic:**[Creating the test case and stub action](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action.html)

**Related information**  


[Action basics](/TA_Tutorials/Topics/Action_basics.html)

