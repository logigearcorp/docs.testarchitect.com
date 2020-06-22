--- 
title: "User-scripted Java harness action that interacts with GUI"
linktitle: "User-scripted Java harness action that interacts with GUI"
description: "In this exercise, we will create a Java-scripted action that interacts with an application's user interface. We will also create a new Java class to house the new scripted function implementing the action."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI_Java.html
keywords: "check row count, Java harness action, reusability (Java), of actions, script modules, Java, refactoring (Java), modularity (java), SetActions() Java harness function"
---

In this exercise, we will create a Java-scripted action that interacts with an application's user interface. We will also create a new Java class to house the new scripted function implementing the action.

In the previous exercise, you created a simple action which wrote out the value of its argument to the results. While it served as a good introduction to writing user-scripted actions, it didn't demonstrate the true utility of the harness. In this exercise, you will create a much more practical user-scripted action.

The function of action check row count, as you will define it, is to interface with a specified table in a given application window, count the number of rows for which a specified field matches a given value, and to check that count against a given expected count.

{{<tip>}} To promote reusability, keep user-scripted actions as neutral and generic as possible. That is, avoid making them specific to a particular use in a particular application. Your new check row count action is a good model of reusability, as is suggested by the number of times the words *given* and *specified* appear in its description above. One can surmise from the description alone that it accepts a number of arguments: one to specify the application window, one to give the table control, one to specify a column of the table, one for a search value, and one to provide an expected matching row count. As a rule, the more arguments to a given action, the more versatile, and hence reusable, it is \(as long as you don't create frivolous arguments!\) As an exercise, you might even put check row count to use in the Car Rental sample project: you could create a user-defined action named, perhaps, check cars. The action would verify that the current inventory of a given model of car is what the test expects it to be. It would apply check row count to the table in the View Orders window, searching on the Car Type column.

The last exercise also demonstrated how code for a new action \(hello\) can be added to an existing code script module. It is good practice, however, to group actions of similar functionality into their own modules, and you will observe that practice in this exercise.The action check row count operates on tables, hence you will create a new module entitled table support, effectively a place to house all of your table-relatedJava-coded actions. check row count will be implemented in the fileMod\_Table.java , which embodies the table support module.

1.  [Creating a new Java code script module](/TA_Tutorials/Topics/Creating_a_new_code_script_module_Java.html)  
Create a new Java module, and provide the code overhead required to access your new user-scripted action.
2.  [Scripting a Java-based GUI-interfacing action](/TA_Tutorials/Topics/Scripting_a_GUI-interfacing_action_Java.html)  
In Java code, implement the action that will interface with a target application.
3.  [Creating the test case and stub action](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action_1_Java.html)  
After implementing the scripted code that interacts with the target application, set up a stub action for the editor, and create the action lines to set up and call the associated action.
4.  [Viewing the test results](/TA_Tutorials/Topics/Viewing_the_test_results_2_Java.html)  
 Run a test using yourJava-coded action, and ensure that it properly interacts with the target application.



