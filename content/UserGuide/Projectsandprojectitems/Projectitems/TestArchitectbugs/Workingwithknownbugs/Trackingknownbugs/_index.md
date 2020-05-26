--- 
title: "Tracking known bugs"
linktitle: "Tracking known bugs"
weight: 1
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug_marking.html
---
# Tracking known bugs {#task_ed2_sht_bm .task}

Known bugs in a test may be flagged, or marked. Marking known bugs allows the fails associated with the bugs to be ignored, so that they are not counted in test results.

**Note:**

-   Known bugs can be marked only within test modules. The **Mark As Known Bug** menu option is not available in user-defined actions.
-   A TA bug can be associated with multiple action lines in a test module; however, a given action line may only be associated with a single TA bug at a time.

Ensure that the following requirements are met:

-   You have sufficient privilege to mark known bugs. \(Note that members of all administration groups except [guest group](../../TA_Administration/Topics/User_administration.html) do have this privilege.\)
-   Test modules to be edited or marked with known bugs are [checked out](Project_items_checkout.html).
-   If the marked bug is to be associated with a JIRA bug or TFS bug, ensure that your TestArchitect test machine has [registered the JIRA server](JIRA_registering.html) or [actived TFS bug tracker.](ug_TFS_BugTracker_Registering_bugtracker.md#)

1.  In the TestArchitect explorer tree, double-click a test module node to open it.

2.  In the test module editor, do one of the following:

    -   Select an action line at which you want to mark a known bug, then click the **Mark As Known Bug** ![](../Images/btn_mark_as_known_bug.png) button on the toolbar.
    -   Right-click the action line to be marked, then select **Bug** \> **Mark As Known Bug**
3.  In the **Specify bug** dialog box, enter the following information:

    -   **Bug Tracker**: Select one of the following types:
        -   TestArchitect: Select this option if you want to mark the action line with a TA bug, which can be either a registered or unregistered bug.
        -   JIRA: Select this option to mark the action line with a JIRA bug.
        -   Team Foundation Server: Select this option to mark the action line with a TFS bug.
    -   **Bug ID**: Depending on what type of bug you selected in the **Bug Tracker** drop-down list, enter the bug ID of a TA bug or a JIRA bug or a TFS bug, respectively.

        **Note:** It should be understood that you cannot create a new bug from this dialog box. The bug ID must already exist in the system specified in the **Bug Tracker** field.

    -   **Summary**: \(Optional\) Briefly describe the bug.
    ![](../Images/Specify_bug_dialog_box.png)

4.  Click the **Preview** button to load basic information of the bug into the **Summary** and **Status** fields.

    **Note:** If you selected the JIRA or TFS bug type, an additional field, **Linked to**, in the dialog box is displayed. This field displays the TA bug associated with the selected JIRA bug or TFS bug. However, if that bug is not associated with a TA bug, this field is empty as in the figure below.

    ![](../Images/Specify_bug_JIRA_dlg.png)

5.  Click **OK**.

    **Note:** If the JIRA or TFS bug type was selected, and that bug is not associated with any TA bug, you are presented with the option to create a new TA bug and import its data from the new JIRA or TFS bug:

    ![](../Images/Marking_new_JIRA_known_bug.png)

    Click **Yes** to create a new registered TA bug associated with that JIRA or TFS bug.

    A message appears to inform you that the selected action line has been associated with a bug successfully.

    ![](../Images/Marking_known_bug_succesful_message.png)

6.  Click **OK**.

    A yellow dot appears next to the newly marked line of the test:

    ![](../Images/Marking_known_bug_yellow_dot.png)

    **Tip:** Hover your mouse over the yellow dot to see the screentip of the known bug. The displayed information includes **Bug ID**, **Source**, **Marked By**, **Summary** and **Status**.


[Execute](Test_exec.html) your tests, then proceed to [Reviewing test result results with known bugs](Bugs_working_known_bug_reviewing_test_results.html) to verify your test results and keep track of progress on the known bugs.

**Parent topic:**[Working with known bugs](../../TA_Help/Topics/Bugs_working_known_bug.html)

**Next topic:**[Reviewing test results with known bugs](../../TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html)

