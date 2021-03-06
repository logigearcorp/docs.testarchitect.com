--- 
title: "Revision rollback"
linktitle: "Revision rollback"
weight: 1
aliases: 
    - /TA_Help/Topics/Project_items_revision_roll_back.html
---

The rollback feature restores the status of an older checked in revision of any project item to the current working revision.

-   Ensure that your TestArchitect Client is running and connected to the repository containing the item to be rolled back.
-   The item to be rolled back must not be checked out.
-   To access revision history, you must be a member of a group other than [guest](/TA_Administration/Topics/User_administration.html#li_xxn_z22_ms) for the repository in which the project item is stored. In addition, you must be granted access to the desired projects and project items.

To roll back to a previous revision of an item:

1.  Right-click the item in the TestArchitect explorer tree that you wish to perform a revision rollback on, and click **Revision History**.

    ![](/images//Images/History_menu.png)

    **Tip:** Alternatively, you can select **Revision History** from the context menu at the level of a project. This method, however, displays all revisions of each available project item.

    In the Revision History of <project item\>:<item name\> dialog box, a revision history of the selected item is presented with each line item displaying the timestamp \(the date/time of check-in\), assigned version \(linked variation\), project name, item type, item name, who checked it in and check-in comments.

    ![](/images//Images/History_roll_back_dialog_box.png)

    **Tip:**

    -   Previewing a rollback allows you to see whether or not your rollback will do what you intended – because if not, you can cancel it without any impact on the current working item. To preview a rollback, in the Revision History of <project item\>:<item name\> dialog box, select a rollback, then click the **View** button.
    -   While viewing the item's history, you can click **Refresh** to update the history list.
    -   Click the **Next 100** button: a list of the next 100 revisions is then added to the dialog box. This button is disabled if there are no further revisions.
2.  In the dialog box, select a revision of the item to which you want it rolled back, and click the **Roll Back** button.

3.  In the Roll Back dialog box, enter a comment for the rollback revision and click **OK** to roll back to it.

    ![](/images//Images/History_roll_back_confirm_dialog_box.png)

    **Warning:** The rollback cannot be undone.


A copy of the rollback revision is checked in to the repository as the latest revision, with your new comments assigned to it.

**Parent topic:**[Revision history](/TA_Help/Topics/Project_items_history.html)

**Next topic:**[Viewing history](/TA_Help/Topics/Project_items_view_history.html)

**Related information**  


[Revision history](/TA_Help/Topics/Project_items_history.html)

[Viewing history](/TA_Help/Topics/Project_items_view_history.html)

[Revision control](/TA_Help/Topics/Revision_control.html)

[Check in](/TA_Help/Topics/Project_items_checkin.html)

