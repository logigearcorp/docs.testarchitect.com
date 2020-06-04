--- 
title: "User-scripted C\\# bundle harness action that interacts with GUI"
linktitle: "User-scripted C\\# bundle harness action that interacts with GUI"
weight: 5
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_action_that_interacts_with_GUI.html
---

In this exercise, we will create a user-scripted action that interacts with an application's user interface.

In the previous exercise, you created a simple action which wrote out the value of its argument to the results. While it served as a good introduction to writing user-scripted actions, it didn't demonstrate the true utility of the harness. In this exercise, you will create a much more practical user-scripted action.

The function of action get list view row value, as you will define it, is to interface with a specified list-view in a given application window, get the values from a row item which is selected based on a given row index number, and assign the returned values, separated with vertical bars \( \| \), to a given variable.

![](/images//Images/tut_csharp_harness_get_selected_item_AUT.png)

1.  [Creating a new C\# bundle harness class](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_new_code_script_module.html)  
We will now create a C\# class to direct program flow to a function which handles the get list view row value action.
2.  [Implementing the C\# GUI-interfacing action](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_scripting_GUI-interfacing_action.html)  
We now implement the C\# method getListViewRowValue\(\) which will handle execution of the get list view row value action in TestArchitect.
3.  [Creating the GUI-interfacing test case for the user-scripted C\# bundle harness action](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_for_get_list_row_value.html)  
Create a TestArchitect test case to invoke the custom scripted C\# action that handles the GUI-interfacing action.
4.  [Viewing the test results](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_running_get_list_row_value.html)  
 Run a test using yourC\#-coded action, and ensure that it properly interacts with the target application.

**Parent topic:**[Working with the C\# bundle harness](/TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html)

**Previous topic:**[Running the C\#-scripted test](/TA_Tutorials/Topics/tut_Harness_CSharp_running_test.html)

**Next topic:**[Migrating C\# user-scripted actions created in earlier versions to TestArchitect 8.3](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_migration.html)

