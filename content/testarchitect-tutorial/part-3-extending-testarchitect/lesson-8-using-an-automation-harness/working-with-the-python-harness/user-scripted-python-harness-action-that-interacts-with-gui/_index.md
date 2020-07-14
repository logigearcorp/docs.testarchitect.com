--- 
title: "User-scripted Python harness action that interacts with GUI"
linktitle: "User-scripted Python harness action that interacts with GUI"
description: "In this exercise, we create a Python-scripted action that interacts with an AUT's user interface."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI.html
keywords: "check row count, Python harness action, reusability (Python), of actions, script modules, Python, refactoring (Python), modularity (Python), SetActions() Python harness function"
---

In this exercise, we create a Python-scripted action that interacts with an AUT's user interface.

In the previous exercise, you created a simple action which wrote out the value of its argument to the results. While it served as a good introduction to writing user-scripted actions, it didn't demonstrate the true utility of the harness. In this exercise, you will create a much more practical user-scripted action.

The function of action check row count, as you will define it, is to interface with a specified table in a given application window, count the number of rows for which a specified field matches a given value, and to check that count against a given expected count.

{{<tip>}} To promote reusability, keep user-scripted actions as neutral and generic as possible. That is, avoid making them specific to a particular use in a particular application. Your new check row count action is a good model of reusability, as is suggested by the number of times the words *given* and *specified* appear in its description above. One can surmise from the description alone that it accepts a number of arguments: one to specify the application window, one to give the table control, one to specify a column of the table, one for a search value, and one to provide an expected matching row count. As a rule, the more arguments to a given action, the more versatile, and hence reusable, it is \(as long as you don't create frivolous arguments!\) As an exercise, you might even put check row count to use in the Car Rental sample project: you could create a user-defined action named, perhaps, check cars. The action would verify that the current inventory of a given model of car is what the test expects it to be. It would apply check row count to the table in the View Orders window, searching on the Car Type column.

The last exercise also demonstrated how code for a new action \(hello\) can be added to an existing code script module. It is good practice, however, to group actions of similar functionality into their own modules, and you will observe that practice in this exercise.The action check row count operates on tables, hence you will create a new module entitled table support, effectively a place to house all of your table-relatedPython-codedactions. check row count will be implemented in the filemod\_TableSupport.py, which embodies the table support module.

{{<note>}} mod\_Example.py contains two action implementations in Python, one of which is check sort order, which, like check row count, operates on tables. Hence, if you plan to actually make use of this example action in your future tests, consider moving it over to your new file \(and more appropriate home\),mod\_TableSupport.py.

1.  [Creating a new code script module](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/creating-a-new-code-script-module)  
Create a new Python module, and provide the code overhead required to access your new user-scripted action.
2.  [Scripting a Python-based GUI-interfacing action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/scripting-a-python-based-gui-interfacing-action)  
In Python code, implement the action that will interface with a target application.
3.  [Creating the test case and stub action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/creating-the-test-case-and-stub-action)  
After implementing the scripted code that interacts with the target application, set up a stub action for the editor, and create the action lines to set up and call the associated action.
4.  [Viewing the test results](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/user-scripted-python-harness-action-that-interacts-with-gui/viewing-the-test-results)  
Run a test using yourPython-coded action, and ensure that it properly interacts with the target application.



