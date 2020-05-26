--- 
title: "Recording check actions on controls"
linktitle: "Recording check actions on controls"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Defining_Check_Action_on_Control.html
---
# Recording check actions on controls {#Recording_checks .task}

Insert validity checks during your recording sessions to generate action lines that check the output of the AUT during automated testing.

-   If the Car Rental application is running, return to the Login window; otherwise, start the application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.
-   In TestArchitect, if you haven't already done so, select **Tools** \> **Action Recorder Settings…** and ensure that the settings are set as follows:

    ![](../Images/tut.ActionRecorder_1.png)

    Then click **OK**.

    **Note:** The **Generate "navigate" action for web browser**, Highlight element on hover, and Ignore formatting tags settings only apply to browser-based recording \([learn more](../../TA_Help/Topics/ug_AR_settings.md#li_e2h_yrc_vs)\), and may be ignored for purposes of this tutorial.


The Car Rental Login window should be displaying john as the **User name** \(the default value\). You will now define a check action for this value, and validate that the **Password** text box is enabled.

1.  In theRecording Lesson test module you created previously, create a new test case:

    1.  Place your cell pointer on a line somewhere below the existing set of action lines \(but before the `FINAL` section, if any\).

    2.  Click **Create New Test Case** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.CreateTestCase.png) on the toolbar.

        A test case line similar to the following is inserted.

        ![](../../reuse/../TA_Tutorials/Images/misc.TAC.Test_case_02_line.png)

    3.  In the second column of the new line, assign the test case an ID ofTC 02\(if not already set to that value\).

    4.  Press Tab to advance to the next column, and provide a description for your test case, such asRecording control checks.

2.  Select an empty cell within test case `TC 02`.

3.  Start the Action Recorder by clicking **Record** on the toolbar.

    ![](../Images/tutActionRecorder_2.png)

    The Action Recorder panel appears in the lower right corner of the screen, , indicating recording mode is now in effect.

4.  Use your mouse to drag the Action Recorder's **Check** button ![](../Images/btn.TAC_toolbar_Check.png) to the **User name** text box in the **Login** window.

    Your check action for verifying that **User Name** text box control has a value of john has now been recorded. \(Note that no explicit confirmation of this is provided.\)

5.  Click **Stop** ![](../Images/btn.TAC_toolbar.Stop.png) on the recording panel.

    **Note:** If you have been practicing these tutorial lessons in sequence, your project should now have more than one interface entity defined for the Login dialog box. If that is indeed the case, you are presented with a dialog box informing you that More than one interface entity matches the dialog. To continue, select one of the interface entities – either should suffice.

    A check action such as shown below should now appear in your test case:

    ![](../Images/tutActionRecorder_6a.png)

    The action checks the contents of the value property of the **User name** control, which is the value displayed by the control.

    **Note:** Performing a check action on the value property is TestArchitect's default check action for controls of type textbox, such as this one.

6.  Now return again to the Action Recorder Settings \(select **Tools** \> **Action Recorder Settings…**\), and clear the **Always use the default action when I define a control check** check box:

    ![](../Images/tutActionRecorder_7.png)

7.  In the editor, select an empty cell below the new action line, and again start the Action Recorder by clicking **Record** on the toolbar.

    **Note:** Generally, we don't start and stop the recording process when recording a sequence of action lines. We're only doing that here in order to demonstrate the effect of changing the **default check action** setting.

8.  Use your mouse to drag the **Check** button ![](../Images/btn.TAC_toolbar_Check.png) to the **Password** text box in the **Login** window.

    **Note:** Because of our change in the settings, the Check Action dialog box appears, enabling you to choose the property to be checked in the action you are about to create. In our case, we want to verify that this control is enabled, so select a **Control property** of enabled, with an **Expected value** of true. Click **Use**.

    ![](../Images/tutActionRecorder_8.png)

9.  Click **Stop** ![](../Images/btn.TAC_toolbar.Stop.png) on the recording panel.

    **Note:** As before, you may be presented with a dialog box asking you to select an interface entity. And again, choose either one.

    Rather than a regular check action, the Action Recorder has created a check control property action. The property to be checked is the enabled property of the **Password** control of the Car Rental-Login window, and its expected value is true.


Your complete test case should now look something like this:

![](../Images/tutActionRecorder_6b.png)

When executed, this test case can only pass if the value John is displayed in the **User name** field, and the **Password** field is enabled.

**Parent topic:**[Lesson \#4: Using the Action Recorder](../../TA_Tutorials/Topics/Tutorial_Using_the_Action_Recorder.html)

**Previous topic:**[Recording control actions](../../TA_Tutorials/Topics/Recording_control_actions.html)

**Next topic:**[Updating interface definitions](../../TA_Tutorials/Topics/Updating_interface_definitions.html)

