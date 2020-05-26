--- 
title: "Check in"
linktitle: "Check in"
weight: 1
aliases: 
    - /TA_Help/Topics/Project_items_checkin.html
---
# Check in {#Project_items_check_in .task}

Check-in is a process of writing the changes made to the local working copy of a file back into the repository.Checking in an item releases the lock on it, allowing other authorized users to check it out and modify it as needed.

Before checking in an item, ensure that:

-   Your TestArchitect Client is running and connected to the repository to which you want to check in the item;
-   You are the user to whom the item is currently checked out.

To check in an item:

1.  In the TestArchitect explorer tree, right-click the item, and then click **Check In**.

    **Fastpath:** F11.

    ![](../Images/ug_checkinmenu.png)

2.  In the Check In dialog box, make the following selections, and then click **OK**:

    -   **Keep Checked Out**: The checked in item is immediately checked out again to the current user. Useful if you simply want to save the working copy to the repository and continue working with it.
    -   **Recursive**: This option is available when you check in a folder node that you had previously checked out recursively. Selecting this option causes all checked out items within the folder and all subfolders to be recursively checked back in.
    -   **Comment**: \(Optional\) It is highly recommended that you add a brief note explaining the changes that you made to the item before checking it in. This comment can be helpful when querying changes made at each check-in, or to view a general history of changes to the item.
    ![](../Images/ug_checkin_dialog_box.png)

3.  When test modules or actions are checked in, TestArchitect checks for references to ambiguous entities. Ambiguous entities are named references to interface entities that exist in more than one interface. If any such ambiguous entities are found to exist during check-in, the Select Interface dialog box appears, allowing you to specify the correct interface for each ambiguous interface entity reference \(see [ambiguous entities](../../TA_Administration/Topics/Repo_mapping_ambiguous_entities.html) for more details\).

    The purpose of this mapping is to ensure that each named interface entity in the action lines of a file references a unique, unambiguous interface. This, in turn, ensures that [name change propagation](Project_and_project_items_rename_refactoring.html) can take place unimpeded, if and when required.

    For example, your action line within a test module verifies the existence of an interface entity named welcome. But interface entities by that name exist in both of two interfaces: Car Rental and House Rental. When checking in, TestArchitect prompts you to create a one-to-one reference between welcome and one of the two interfaces.


Locked items \(ones not immediately modifiable by you\) take two forms:

![](../Images/checked_in_items.png)

-   an item that has a **WRITE-LOCK** \(black, closed padlock\) is read-only, and is available for checking out;
-   an item with a **CHECKOUT-LOCK** \(red, closed padlock\) is also read-only, but not available for checking out, as it is currently checked out to another user.

**Parent topic:**[Revision control](../../TA_Help/Topics/Revision_control.html)

**Next topic:**[Check out](../../TA_Help/Topics/Project_items_checkout.html)

**Related information**  


[Check out](../../TA_Help/Topics/Project_items_checkout.html)

[Undo check out](../../TA_Help/Topics/Project_items_undo_checkout.html)

[Revision history](../../TA_Help/Topics/Project_items_history.html)

[Revision control](../../TA_Help/Topics/Revision_control.html)

