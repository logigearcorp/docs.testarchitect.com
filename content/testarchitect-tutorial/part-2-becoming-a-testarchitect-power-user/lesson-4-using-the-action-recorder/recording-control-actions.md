--- 
title: "Recording control actions"
linktitle: "Recording control actions"
description: "How to use the Action Recorder to record interactions with UI controls in the sample application."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Recording_control_actions.html
keywords: "Action Recorder, recording actions"
---

How to use the Action Recorder to record interactions with UI controls in the sample application.

**Before proceeding:**

-   If the Car Rental application is running, return to the Login window; otherwise, start the application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Car Rental Application**.
-   In TestArchitect, select **Tools** \> **Action Recorder Settings…** and ensure that the settings are set as follows:

    ![](/images/TA_Tutorials/Images/tut.ActionRecorder_1.png)

    Then click **OK**.

    {{<note>}} The **Generate "navigate" action for web browser**, Highlight element on hover, and Ignore formatting tags settings only apply to browser-based recording \([learn more](/user-guide/actions/action-recorder/action-recorder-settings#li_e2h_yrc_vs)\), and may be ignored for purposes of this tutorial.


1.  In the TestArchitect explorer tree, select any item within the Car Rental project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

2.  EnterRecording Lesson as the name, then click **Create**.

    A new test module appears in the main panel, ready for editing.

3.  In the editor, in column **C** of the TEST CASE line, enter a description such as Recording an action

4.  Return to TestArchitect, and in test case `TC 01` of the editor, select an empty cell in the first column \(for example, **A16**\).

    {{<attention>}} Once the Action Recorder starts, it records *all* actions, including any actions you take with this tutorial. For that reason, it is recommended that you pre-read this exercise up to **Step 8** to ensure that the actions you record with Action Recorder are only those that relate to this exercise.

5.  Click **Record** on the toolbar:

    ![](/images/TA_Tutorials/Images/tutActionRecorder_2.png)

    The Action Recorder panel appears in the lower right corner of the screen, indicating recording mode is now in effect:

    ![](/images/TA_Tutorials/Images/tutActionRecorder_3.png)

6.  Within the Car Rental sample application, click **Login** to log in using the **User name**Johnand an empty **Password** field.

7.  In the Welcome window of the Car Rental application, click **New Order**.

    The Select Date and Location dialog box appears.

8.  Select Florida in the **Pick Up State** list box.

9.  Clear the contents \(if any\) of the **Pick Up City** text box, replacing them with Miami.

    ![](/images/TA_Tutorials/Images/tutActionRecorder_16.png)

10. Click **Stop** on the recording panel.

    Because the controls you clicked were already defined in the interface definitions for the sample application, nothing new was detected by the recorder. Had the recording involved previously unrecorded screens or controls, you would now be given the opportunity to review and edit the auto-generated TA names that TestArchitect created for them.

    The actions representing the operations you performed on the dialog box have been generated and inserted into the test module, which should now resemble the following:

    ![](/images/TA_Tutorials/Images/tutActionRecorder_17.png)

11. Now, to examine the results of your work, return to the Car Rental Login window: In the sample application's Car Rental-Select Date and Location window, click a different state \(for example, Alabama\).

    1.  In the Car Rental-Select Date and Location window, click **Home**.

    2.  Click **Yes** when asked for confirmation.

    3.  In the Car Rental-Welcome window, select **File** \> **Logout**.

        You are now returned to the application's Login window

12. With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

13. Click **Execute** in the Execute Test dialog box.

    A *replay*of your recorded actions should now be displayed in the application window, repeating the steps of logging into the application, navigating to the Select Date and Location window, selecting a **Pickup state** of Florida and entering a **City** of Miami.





