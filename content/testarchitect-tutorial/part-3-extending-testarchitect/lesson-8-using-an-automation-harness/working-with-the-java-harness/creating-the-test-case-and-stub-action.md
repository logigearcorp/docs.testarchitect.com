--- 
title: "Creating the test case and stub action"
linktitle: "Creating the test case and stub action"
description: "Create a stub action in TestArchitect as a placeholder for the scripted hello action you defined previously, then write a test to invoke the action."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Creating_the_test_case_and_stub_action_Java.html
keywords: "action (Java), stub"
---

Create a stub action in TestArchitect as a placeholder for thescripted hello actionyou defined previously, then write a test to invoke the action.

Note that, while it is necessary that you[implement the hello action in Java](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-java-harness/scripting-an-action-in-java)before you can actually use it in your test, it is not a prerequisite for the following steps, which involve setting up the test that calls hello, and making the editor aware of the action.

1.  Begin by opening TestArchitect Client, then expand the Car Rental project of the TestArchitect explorer tree.
2.  In the TestArchitect explorer tree, right-click the **Action** node and select **New Action**.

    The New Action dialog box appears.

3.  Enter hello as the action name, and who as the name of its sole argument:

    ![](/images/TA_Tutorials/Images/tut.Harness.New_Action_dlg.who.png)

    Click **Create**.

    The new action appears in your test editor, displaying a line declaring your who argument to be of type STRING.

    {{<note>}} This action serves as your stub action. It will now appear in the action autocomplete list in the test editor, and its argument name will appear as a header for the action.

4.  Now, create a test module, which you will use to call your action.
5.  In the TestArchitect explorer tree, select any item within the current project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

6.  In the New Test Module dialog box, enter a name of My scripted tests in the **Name** box, along with an optional description in **Description**.

7.  **Optional:** Enter some descriptive information:

    1.  In the `OBJECTIVES` section, for test objective `T0 01`, enter the title test TestArchitect's Java harness in the third column.

        Note that the new description is reflected in the test objective action several lines lower, which specifies the same test objective \(`TO 01`\).

    2.  In the section for test case `TC 01`, enter test method for adding a user-scripted action to a module as the title in the third column.

8.  Now you can begin to write an action line to call your new user-scripted action:

    1.  Position the cell pointer to the leftmost column a few lines into the test case. Enter the action hello, and press Enter.

        The who header, which you specified as the name of the action's argument in Step 2, appears over the adjacent cell. Note also that your action's appeared in the pop-up list as you typed it, also a result of your having created the stub action earlier.

    2.  Type a value into the next cell to serve as the who argument.

        For example, enter the string Earth.

    Your test case should now look similar to this:

    ![](/images/TA_Tutorials/Images/tut.Harness.Test02.java.png)

9.  Click **Save** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.SaveFile.png) on the toolbar.


You now have the test module needed to call your user-scripted action hello.

Next, you will run the test module and verify that it invokes yourJava-codedimplementation of the action.




