--- 
title: "Setting a password requirement"
linktitle: "Setting a password requirement"
weight: 7
aliases: 
    - TA_Administration/Topics/Repo_server_management_setting_pw.html
---

Setting a password requirement limits the ability of users, remote or local, to create repositories on your local machine. Only authenticated users are allowed to add or modify repositories.

On repository servers that are shared among multiple users, it is recommended that you require authentication. To require a password, or to remove a password requirement, for the creation of new repositories, perform the following steps:

1.  If not already running, start the [Repository Server Control Panel](Repo_server_management_launching.md).

2.  Click **Require Password** ![](/images/TA_Administration/Images/btn.RS_require_pw.png) on the toolbar.

    The Require Password dialog box appears.

    ![](/images/TA_Administration/Images/admin_RS_dlg_RequirePwd.png)

3.  To require authentication for repository creation, select the **Require a password to create a repository** check box.

4.  Enter the same password in both **Password** and **Confirm Password** boxes.

    **Tip:** To remove an existing authentication requirement, clear the **Require a password to create a repository** check box.

5.  Click **OK**.


**Parent topic:**[Repository Server Management](../../TA_Administration/Topics/Repo_server_management.md)

**Previous topic:**[Adding a repository](../../TA_Administration/Topics/Repo_server_management_adding.md)

**Next topic:**[Exporting/Importing repositories](../../TA_Administration/Topics/adm_Exporting_import_repository.md)

