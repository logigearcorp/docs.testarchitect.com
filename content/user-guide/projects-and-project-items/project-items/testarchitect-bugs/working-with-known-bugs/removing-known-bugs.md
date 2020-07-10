--- 
title: "Removing known bugs"
linktitle: "Removing known bugs"
description: "Removed known bug marks from action lines when they are no longer needed."
weight: 3
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug_removing.html
keywords: "known bugs, removal, bugs, removing known bugs"
---

Removed known bug marks from action lines when they are no longer needed.

Ensure that the following requirements are met:

-   You have sufficient privilege to remove known bug mark. \(Note that members of all administration groups except [guest group](/administration-guide/users-and-passwords/user-administration/) do have this privilege.\)
-   Test modules to be edited or removed known bug mark are [checked out](/user-guide/projects-and-project-items/project-items/revision-control/check-out).

To remove the known bug designation from a given action line:

1.  In the TestArchitect explorer tree, double-click a test module node to open it.

2.  In the test module editor, select an action line that contains a known bug \(that is, a yellow dot\).

3.  Do one of the following:

    -   Click the **Remove Known Bug** ![](/images/TA_Help/Images/btn_unmark_known_bug.png) button on the toolbar.
    -   Right-click the selected action line, then select **Bug** \> **Remove Known Bug**
    -   Double-click the row header.

After you have removed the known bug mark, the yellow point in the left margin next to the row number you had selected previously disappears.

{{<note>}} Note that this procedure has no effect on the bug itself, only on a line that is marked with it.




