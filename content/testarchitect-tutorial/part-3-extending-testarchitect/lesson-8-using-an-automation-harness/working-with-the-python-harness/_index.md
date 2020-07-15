--- 
title: "Working with the Python harness"
linktitle: "Working with the Python harness"
description: "How to implement TestArchitect actions using the Python programming language."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.html
keywords: "Python, working with harness, harnesses"
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

-   Linux: Linux machines come with Python 2.x pre-installed.
-   Windows: Windows does not, by default, include a Python interpreter. You may, however, easily obtain a free interpreter from the [Python Releases for Windows](https://www.python.org/downloads/windows/) page of [python.org](https://www.python.org/downloads/windows/).

In addition, please observe the following when installing an interpreter:

-   Use a Python interpreter that is no older than 3.x. \(TestArchitect has a set of import files that expose the automation library objects and functions to the interpreter. These files assume a Python version of 3.x.\).
-   Both TestArchitect and the Python interpreter must be for the same machine architecture \(32-bit or 64-bit\).

## Before proceeding...

Please ensure that you have Python installed before proceeding with the following examples. In addition, your system’s PATH variable must be set to include the path to the Python executable: for example, C:\\Python.

1.  [Developing your own User-scripted Python harness action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/developing-your-own-user-scripted-python-harness-action)  
To created a scripted Python action, you must define the action, and modify the existing harness files to implement it.
2.  [Scripting an action in Python](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/scripting-an-action-in-python)  
 Implement an action in Python, using the TestArchitect Python harness.
3.  [Creating the test case and stub action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/creating-the-test-case-and-stub-action)  
Create a stub action in TestArchitect as a placeholder for thescripted hello actionyou defined previously, then write a test to invoke the action.
4.  [Running a Python harness test](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/running-a-python-harness-test)  
Execute the test that calls the user-scripted action you implemented in thePython harness.
5.  [User-scripted Python harness action that interacts with GUI](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/)  
 In this exercise, we create a Python-scripted action that interacts with an AUT's user interface.



