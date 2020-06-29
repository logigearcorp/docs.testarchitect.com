--- 
title: "User-scripted C# bundle harness action that interacts with GUI"
linktitle: "User-scripted C# bundle harness action that interacts with GUI"
slug: "user-scripted-c-bundle-harness-action-that-interacts-with-gui"
description: "In this exercise, we will create a user-scripted action that interacts with an application's user interface."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_action_that_interacts_with_GUI.html
keywords: "C# bundle harnesses, interacting with GUI, harnesses, bundle, C#, interacting with GUI"
---

In this exercise, we will create a user-scripted action that interacts with an application's user interface.

In the previous exercise, you created a simple action which wrote out the value of its argument to the results. While it served as a good introduction to writing user-scripted actions, it didn't demonstrate the true utility of the harness. In this exercise, you will create a much more practical user-scripted action.

The function of action get list view row value, as you will define it, is to interface with a specified list-view in a given application window, get the values from a row item which is selected based on a given row index number, and assign the returned values, separated with vertical bars \( \| \), to a given variable.

![](/images/TA_Tutorials/Images/tut_csharp_harness_get_selected_item_AUT.png)

1.  [Creating a new C\# bundle harness class](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/user-scripted-c-bundle-harness-action-that-interacts-with-gui/creating-a-new-c-bundle-harness-class)  
We will now create a C\# class to direct program flow to a function which handles the get list view row value action.
2.  [Implementing the C\# GUI-interfacing action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/user-scripted-c-bundle-harness-action-that-interacts-with-gui/implementing-the-c-gui-interfacing-action)  
We now implement the C\# method getListViewRowValue\(\) which will handle execution of the get list view row value action in TestArchitect.
3.  [Creating the GUI-interfacing test case for the user-scripted C\# bundle harness action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/user-scripted-c-bundle-harness-action-that-interacts-with-gui/creating-the-gui-interfacing-test-case-for-the-user-scripted-c-bundle-harness-action)  
Create a TestArchitect test case to invoke the custom scripted C\# action that handles the GUI-interfacing action.
4.  [Viewing the test results](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/user-scripted-c-bundle-harness-action-that-interacts-with-gui/viewing-the-test-results)  
 Run a test using yourC\#-coded action, and ensure that it properly interacts with the target application.




