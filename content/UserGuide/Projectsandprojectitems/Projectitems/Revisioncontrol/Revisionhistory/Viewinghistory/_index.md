--- 
title: "Viewing history"
linktitle: "Viewing history"
weight: 2
aliases: 
    - /TA_Help/Topics/Project_items_view_history.html
---
# Viewing history {#Project_items_view_history .task}

You can select a checked in revision of any project item to view its history from the Revision History dialog box.

-   Ensure that your TestArchitect Client is running and connected to the repository containing the project item you wish to view the history of.
-   To access revision history, you must be a member of a group other than [guest](../../TA_Administration/Topics/User_administration.md#li_xxn_z22_ms) for the repository in which the project item is stored. In addition, you must be granted access to the desired projects and project items.

To view a previously checked in revision:

1.  In the TestArchitect explorer tree, right-click the item that you wish to view the revision history of, and click **Revision History**.

    ![](../Images/History_roll_back_dialog_box.png)

    In the Revision History of <project item\>:<item name\> dialog box, a revision history of the selected item is presented with each line item displaying the timestamp \(the date/time of check-in\), assigned version \(linked variation\), project name, item type, item name, who checked it in and check-in comments.

    **Tip:**

    -   While viewing the item's history, you can click **Refresh** to update the history list.
    -   Click the **Next 100** button: a list of the next 100 revisions is then added to the dialog box. This button is disabled if there are no further revisions.
2.  In the history list, select from the list the revision you want to view, then click the **View** button.

    **Fastpath:** Alternatively, double-click the revision.


The content of the specific revision of the selected project item is displayed as read-only in a new window.

**Tip:** If your test module contains marked [known bugs](Bugs_working_known_bug.html), hover your mouse over the yellow dot next to a given marked bug to see a screentip with information relating to that **Bug ID**.

![](../Images/History_dialog_box_view.png)

**Parent topic:**[Revision history](../../TA_Help/Topics/Project_items_history.html)

**Previous topic:**[Revision rollback](../../TA_Help/Topics/Project_items_revision_roll_back.html)

**Next topic:**[Comparing two revisions of a project item](../../TA_Help/Topics/ug_Project_items_comparing_revisions.html)

**Related information**  


[Revision history](../../TA_Help/Topics/Project_items_history.html)

[Revision control](../../TA_Help/Topics/Revision_control.html)

[Check out](../../TA_Help/Topics/Project_items_checkout.html)

[Revision rollback](../../TA_Help/Topics/Project_items_revision_roll_back.html)

