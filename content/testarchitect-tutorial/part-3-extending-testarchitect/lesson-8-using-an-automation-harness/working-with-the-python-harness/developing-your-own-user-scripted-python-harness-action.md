--- 
title: "Developing your own User-scripted Python harness action"
linktitle: "Developing your own User-scripted Python harness action"
description: "To created a scripted Python action, you must define the action, and modify the existing harness files to implement it."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Developing_your_own_harness_action.html
keywords: "Python, scripted sample files, harness (Python), startup script (Python), Python modules, automation library (Python), Python implementation, script modules (Python), harness files (Python), LIBRARY, TestArchitect object, SetActionScript() function (Python), mod_Example.py Python harness examples, ta_main.py, Python script file, run.bat, Python harness startup script, PYTHONPATH variable, DivertToModule() Python harness function, check sort order, sample scripted Python action, SetActionScript() library function (Python), Divert() harness function (Python)"
---

To created a scripted Python action, you must define the action, and modify the existing harness files to implement it.

The folder C:\\Program Files\\LogiGear\\TestArchitect\\harness samples\\python \(Windows\), or /usr/local/testarchitect/harness\_samples/python \(Linux\), in the TestArchitect program folder, holds files that act as the entry point for the Python harness. It also has one file, mod\_Example.py, that includes two example user-scripted actions.

The directory looks something like this:

![](/images/TA_Tutorials/Images/tut.Harness.Python_files.png)

The file python\_harness.bat \(Windows\), python\_harness.sh \(Linux\) is a simple startup script. It first sets the PYTHONPATH variable to the lib/python subfolder in TestArchitect's program folder; this tells the harness code where to find the Python implementation of the automation library. The files in this folder must be imported by your Python scripts to allow them to access the library's classes and functions.

ta\_main.py is the startup Python script. Running this file executes the main\(\) function, which sets the actions and starts the interpretation.

Your action definitions in Python may be grouped into separate modules, each of which is a .py file; it is in ta\_main.py that the appropriate module for a given action is invoked. When a given action definition is requested by the interpreter, ta\_main’s DivertToModule\(\) function passes execution to the module in which that definition exists.

At present, only a single module, mod\_Example.py, exists in your harness samples/python directory \(assuming you have a fresh installation of TestArchitect\). It contains the Python code to define two actions:

-   hello world, which writes the text string hello world to the results.
-   check sort order, which checks that the order of rows in a table is ascending, using a specified column for the key values.

The convention is to organize user-scripted functions into multiplescript module files, with the name of each such file prefixed with the string"mod\_". If you add new actions, you may want to do so in new script files, depending on whether or not the actions logically fit within an existing module.

In this lesson you will write an action and add it tomodule mod\_Example.py. In the subsequent lesson, you will write another action, but will create an entirely newscript module to hold it.

As a rule, adding a new action to an existingmodule in the Pythonharness involves these steps:

1.  Add a line to the list ofSetActions\(\)function calls, declaring the action for the TestArchitect interpreter.
2.  Add an `else-if` clause to the divert\(\) function, directing control to a function written to handle the new action. \(In the next exercise, you will divert the hello action to aPython function called action\_hello.\)
3.  Create a function definition that provides the actual action-specific logic. \(You will write thePython code for action\_hello\(\), which will do the actual work for the hello action.\)



