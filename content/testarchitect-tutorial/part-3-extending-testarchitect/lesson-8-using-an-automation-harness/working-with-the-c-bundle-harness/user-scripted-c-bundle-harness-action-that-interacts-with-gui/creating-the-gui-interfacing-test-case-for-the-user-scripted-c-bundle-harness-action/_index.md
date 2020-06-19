--- 
title: 'Creating the GUI-interfacing test case for the user-scripted C# bundle harness action'
linktitle: 'Creating the GUI-interfacing test case for the user-scripted C# bundle harness action'
slug: 'creating-the-gui-interfacing-test-case-for-the-user-scripted-c-bundle-harness-action'
description: "Create a TestArchitect test case to invoke the custom scripted C# action that handles the GUI-interfacing action."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_for_get_list_row_value.html
keywords: "harness, bundle, C#, creating GUI-interfacing test case, bundle harness"
---

Create a TestArchitect test case to invoke the custom scripted C\# action that handles the GUI-interfacing action.

To invoke the get list view row value in TestArchitect:

Begin by opening TestArchitect Client, then expand a specific project of the TestArchitect explorer tree.

1.  In the TestArchitect explorer tree, right-click the **Action** node, and then select **Create User-Scripted Actions**.

    The Create User-Scripted Actions dialog box appears.

2.  In the dialog box, click **Browse** to locate the generated TestAchitect.Harness.Bundle.Sample.dll library.

    The DLL is loaded with all defined C\# user-scripted actions.

    ![](/images/TA_Tutorials/Images/Create_user_scripted_action_dlg.png)

3.  Select the **get list row value** checkbox.

    ![](/images/TA_Tutorials/Images/Create_user_scripted_action_dlg_get_list_view_row_value.png)

4.  Click **Create**.

    If the creation is successful, a dialog box appears.

    ![](/images/TA_Tutorials/Images/action_created_successfully.png)

5.  Click **OK** to dismiss the dialog box.

6.  Close the Create User-Scripted Actions dialog box.

    In the TestArchitect explorer tree, under the **Actions** node, a new stub action of get list row value and its arguments are created successfully.

    ![](/images/TA_Tutorials/Images/user_defined_action_get_list_view_row_value.png)

7.  Assuming you performed the last exercise, you should have a test module named My scripted tests. If not, go ahead and[create it](/TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_and_stub_action.html).
8.  Add a new test case to test module My scripted tests. Title this new test case Test user-scripted action interacting with aut. Optionally, add a test objective action beneath it, referencing objective TO 01, since we're still testing the C\# bundle harness.

9.  You will be testing the songs list control of the Music Player application. You will select an item based on a given row index number, get the combined values of the selected item \(separated by vertical bars as delimiters\), and assign the retrieved value to a specified returned variable.

    ![](/images/TA_Tutorials/Images/tut_csharp_harness_get_selected_item_AUT.png)

10. Add the following action line for the get list view row value action. Its job is to retrieve the contents row \#7 of the songs list control in the **Search** tab, and assign that string to the specified returned variable \(song details\), with the contents of the fields of the row separated by vertical bar \( \| \) delimiters.

    ![](/images/TA_Tutorials/Images/tut_csharp_get_selected_list_item_action.201407.png)

11. Save your work.


You now have the test case needed to invoke your C\#-coded function for the action get list view row value.

Next, you will run the test module and verify that it invokes your C\#-coded function, and that the function works properly.




