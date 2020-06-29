--- 
title: "Deleting a repository user"
linktitle: "Deleting a repository user"
description: "As an administrator, you can delete a TestArchitect user if that user is no longer required."
weight: 3
aliases: 
    - /TA_Administration/Topics/adm_users_deleting.html
keywords: "user administration, deleting a user"
---

As an administrator, you can delete a TestArchitect user if that user is no longer required.

To delete an existing TestArchitect user, do the following:

1.  Invoke the [Manage Users](/administration-guide/users-and-passwords/user-administration/invoking-the-manage-users-dialog-box) Manager Users dialog box for a given repository. \(You can do this by right-clicking the **Administration** node and then selecting **Manage Users**.\)

2.  In the Users panel, select a user to be deleted.

    {{<restriction>}} You are not allowed to delete the administrator user name, since it is a super administrator and a built-in account in TestArchitect.

3.  Click the **Delete user** button.

    A confirmation dialog box appears.

    ![](/images/TA_Help/Images/Delete_user_dlg.png)

4.  In the dialog box, click **Yes** to confirm the deletion.

    {{<note>}} If this TestArchitect user name has been mapped to a LDAP user name, the linkage between the two names is also removed.


The selected user is removed.




