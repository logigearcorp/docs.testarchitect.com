--- 
title: "Check out"
linktitle: "Check out"
description: "Check-out is the process of creating a local working copy from the repository."
weight: 2
aliases: 
    - /TA_Help/Topics/Project_items_checkout.html
keywords: "check out, revision control, recursive"
---

Check-out is the process of creating a local working copy from the repository.When an item is checked out, a lock is placed on that item, preventing other users from modifying it.

Ensure that your TestArchitect Client is running and connected to the repository hosting your project.

1.  In the TestArchitect explorer tree, right-click the item that you want to check out.

2.  Select **Check Out** on the context menu.

    ![](/images/TA_Help/Images/ug_checkoutmenu_.png)

    **Fastpath:** Alternatively, use the keyboard shortcut F12.

    **Important:** Only one user can check out an item at a time.

    **Note:**

    -   When you check out a folder, you check out all items in that folder. Furthermore, you have the option to recursively check out all items within the entire subtree of the selected folder, by selecting the **Recursive** check box in the dialog box that appears.

        ![](/images/TA_Help/Images/Dialog_check_out_folder.png)

    -   If you have not checked out a file, you may still view it, but only in read-only mode, which prohibits you from making any changes to its contents.

A checked out items is marked with a green unlocked padlock symbol. You can freely edit any item that you have checked out.

![](/images/TA_Help/Images/ug_1_4.png)




**Related information**  


[Check in](/TA_Help/Topics/Project_items_checkin.html)

[Undo check out](/TA_Help/Topics/Project_items_undo_checkout.html)

[Revision history](/TA_Help/Topics/Project_items_history.html)

[Revision control](/TA_Help/Topics/Revision_control.html)

