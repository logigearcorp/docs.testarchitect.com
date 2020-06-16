--- 
title: "Undo check out"
linktitle: "Undo check out"
description: "Undoing checkout allows you discard any changes you have made to local copies of project items and check them back in to the repository."
weight: 3
aliases: 
    - /TA_Help/Topics/Project_items_undo_checkout.html
keywords: "undo checkout, revision control, undo check out"
---

Undoing checkout allows you discard any changes you have made to local copies of project items and check them back in to the repository.

-   Ensure that your TestArchitect Client is running and connected to the repository hosting the checked out item.
-   Ensure that you are the user who currently has the item\(s\) checked out.

Checkout undo can be applied to a single project item or to a folder. In the latter case, you have the option of applying the checkout recursively or non-recursively. A recursive checkout undo affects all checked out project items anywhere within the given folder's hierarchy. A non-recursive checkout applies only to those checked out items residing immediately below the folder \(that is, not within any subfolders\).

To undo a checked out item:

1.  In the TestArchitect explorer tree, right-click the item, and then click **Undo Check Out**.

    ![](/images/TA_Help/Images/ug_undocheckoutmenu.png)

2.  Do one of the following: .

    -   If you right-clicked a project item in the previous step, click **Yes** on the dialog box to confirm that you want to undo the checkout of that item.

        ![](/images/TA_Help/Images/Undo_checkout_confirm.png)

    -   If you right-clicked a folder in the previous step, you have an additional option to undo the checkout recursively or not. After making your choice, click **OK** to confirm the checkout.

        ![](/images/TA_Help/Images/Undo_checkout_recursive.png)

    **Warning:**

    When you undo a checkout, all changes made to the item\(s\), including the local copies, are lost. The checkout undo process cannot be reversed.


Any changes made since the last checkout are discarded. The item\(s\) are checked back in, and are now available to any authorized users to check out and modify.




**Related information**  


[Check in](/TA_Help/Topics/Project_items_checkin.html)

[Check out](/TA_Help/Topics/Project_items_checkout.html)

[Revision history](/TA_Help/Topics/Project_items_history.html)

[Revision control](/TA_Help/Topics/Revision_control.html)

