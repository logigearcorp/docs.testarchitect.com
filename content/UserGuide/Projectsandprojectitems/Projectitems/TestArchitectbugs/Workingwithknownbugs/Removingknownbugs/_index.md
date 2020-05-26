--- 
title: "Removing known bugs"
linktitle: "Removing known bugs"
weight: 3
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug_removing.html
---
# Removing known bugs {#task_qtr_5pv_2m .task}

Removed known bug marks from action lines when they are no longer needed.

Ensure that the following requirements are met:

-   You have sufficient privilege to remove known bug mark. \(Note that members of all administration groups except [guest group](../../TA_Administration/Topics/User_administration.html) do have this privilege.\)
-   Test modules to be edited or removed known bug mark are [checked out](Project_items_checkout.html).

To remove the known bug designation from a given action line:

1.  In the TestArchitect explorer tree, double-click a test module node to open it.

2.  In the test module editor, select an action line that contains a known bug \(that is, a yellow dot\).

3.  Do one of the following:

    -   Click the **Remove Known Bug** ![](../Images/btn_unmark_known_bug.png) button on the toolbar.
    -   Right-click the selected action line, then select **Bug** \> **Remove Known Bug**
    -   Double-click the row header.

After you have removed the known bug mark, the yellow point in the left margin next to the row number you had selected previously disappears.

**Note:** Note that this procedure has no effect on the bug itself, only on a line that is marked with it.

**Parent topic:**[Working with known bugs](../../TA_Help/Topics/Bugs_working_known_bug.html)

**Previous topic:**[Reviewing test results with known bugs](../../TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html)

**Next topic:**[Viewing bugs related to a test module or test case](../../TA_Help/Topics/Bugs_viewing_related_bugs.html)

