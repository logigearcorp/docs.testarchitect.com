--- 
title: "Creating test case and stub action for 'hello' action"
linktitle: "Creating test case and stub action for 'hello' action"
description: "Create a stub action in TestArchitect as a placeholder for the C#-coded hello action you defined previously, then write a test to invoke the action."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_and_stub_action.html
keywords: "harness, bundle, C#, creating test case and stub action, hello, creating action, bundle harness"
---

Create a stub action in TestArchitect as a placeholder for theC\#-coded hello actionyou defined previously, then write a test to invoke the action.

Note that, while it is necessary that you [implement the “hello” action in C\#](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/scripting-hello-c-harness-action) before you can actually use it in your test, it is not a prerequisite for the following steps, which involve setting up the test that calls hello, and making the editor aware of the action.

Begin by opening TestArchitect Client, then expand a specific project of the TestArchitect explorer tree.

1.  In the TestArchitect explorer tree, right-click the **Action** node, and then select **Create User-Scripted Actions**.

    The Create User-Scripted Actions dialog box appears.

2.  In the dialog box, click **Browse** to locate the generated TestAchitect.Harness.Bundle.Sample.dll library.

    The DLL is loaded with all defined C\# user-scripted actions.

    ![](/images/TA_Tutorials/Images/Create_user_scripted_action_dlg.png)

3.  Select the **hello** checkbox.

    ![](/images/TA_Tutorials/Images/Create_user_scripted_action_dlg_2.png)

4.  Click **Create**.

    If the creation is successful, a dialog box appears.

    ![](/images/TA_Tutorials/Images/action_created_successfully.png)

5.  Click **OK** to dismiss the dialog box.

6.  Close the Create User-Scripted Actions dialog box.

    In the TestArchitect explorer tree, under the **Actions** node, a new stub action of hello and its argument are created successfully.

    ![](/images/TA_Tutorials/Images/user_defined_action.png)

7.  Now, create a test module, which you will use to call your action.
8.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

9.  In the New Test Module dialog box, enter a name of My scripted tests in the **Name** box, along with an optional description in **Description**.

10. Enter some descriptive information:

    1.  In the `OBJECTIVES` section, for test objective `T0 01`, enter the title test TestArchitect's C\# harness in the third column.

        Note that the new description is reflected in the test objective action several lines lower, which specifies the same test objective \(`TO 01`\).

    2.  In the section for test case `TC 01`, enter test method for adding a user-scripted action to a module as the title in the third column.

11. Now you can begin to write an action line to call your new user-scripted action:

    1.  Position the cell pointer to the leftmost column a few lines into the test case. Enter the action hello, and press Enter.

    2.  Type a value into the next cell to serve as the who argument.

        For example, enter the string Earth.

    Your test case should now look similar to this:

    ![](/images/TA_Tutorials/Images/tut.Harness.Test02.csharp.png)

12. Click **Save** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.SaveFile.png) on the toolbar.


You now have the test module needed to call your user-scripted action hello.

Next, you will run the test module and verify that it invokes yourC\#-codedimplementation of the action.




