--- 
title: "Working with the Python harness"
linktitle: "Working with the Python harness"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.html
---

How to implement TestArchitect actions using the Python programming language.

This subsection contains two exercises that demonstrate how to create user-scripted actions implemented in the Python programming language, and how to access such actions in your tests.

## Supported OS environments

-   Windows
-   Linux

## Supported Python version

-   Python 2
-   Python 3

## Installing a Python interpreter

TestArchitect installation does *not* include a Python interpreter, which is a requirement for running Python scripts.

-   **Linux**: Linux machines come with Python 2.x pre-installed.
-   **Windows**: Windows does not, by default, include a Python interpreter. You may, however, easily obtain a free interpreter from the [Python Releases for Windows](https://www.python.org/downloads/windows/) page of [python.org](https://www.python.org/downloads/windows/).

In addition, please observe the following when installing an interpreter:

-   Use a Python interpreter that is no older than 3.x. \(TestArchitect has a set of import files that expose the automation library objects and functions to the interpreter. These files assume a Python version of 3.x.\).
-   Both TestArchitect and the Python interpreter must be for the same machine architecture \(32-bit or 64-bit\).

## Before proceeding...

Please ensure that you have Python installed before proceeding with the following examples. In addition, your system’s PATH variable must be set to include the path to the Python executable: for example, C:\\Python.

1.  [Developing your own User-scripted Python harness action](/TA_Tutorials/Topics/Developing_your_own_harness_action.html)  
To created a scripted Python action, you must define the action, and modify the existing harness files to implement it.
2.  [Scripting an action in Python](/TA_Tutorials/Topics/Scripting_an_action.html)  
 Implement an action in Python, using the TestArchitect Python harness.
3.  [Creating the test case and stub action](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action.html)  
Create a stub action in TestArchitect as a placeholder for thescripted hello actionyou defined previously, then write a test to invoke the action.
4.  [Running a Python harness test](/TA_Tutorials/Topics/Running_the_test_4.html)  
Execute the test that calls the user-scripted action you implemented in thePython harness.
5.  [User-scripted Python harness action that interacts with GUI](/TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI.html)  
 In this exercise, we create a Python-scripted action that interacts with an AUT's user interface.

**Parent topic:**[Lesson \#8: Using an automation harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html)

**Previous topic:**[Invoking a user-scripted action](/TA_Tutorials/Topics/Invoking_a_harness_action.html)

**Next topic:**[Working with the Java harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_java.html)

