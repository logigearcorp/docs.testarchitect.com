--- 
title: "Adding a repository"
linktitle: "Adding a repository"
weight: 6
aliases: 
    - TA_Administration/Topics/Repo_server_management_adding.html
---

A new repository can be added from the Repository Server Control Panel or from within TestArchitect Client.

Ensure that the repository service is [running](Starting_repository_server.md).

**Note:**

-   The Repository Server Control Panel can be used to add a new repository to the local host.
-   TestArchitect Client, on the other hand, can be used to add a new repository to any available host. To create a repository from TestArchitect Client, refer to [Creating a repository](../../TA_Help/Topics/Repository_creating.md).

To add a new repository from the Repository Server Control Panel:

1.  If not already running, start the [Repository Server Control Panel](Repo_server_management_launching.md).

2.  Click **Add Repository** ![](/images/TA_Administration/Images/btn.RS_add_repo.png) on the toolbar.

    If a password requirement has been set on this repository server for the creation of new repositories, the Repository Authentication dialog box appears.

    ![](/images/TA_Administration/Images/admin_RS_dlg_Repo_Authentication.png)

3.  If so required, enter a password and click **OK**.

    The New Repository dialog box appears.

    ![](/images/TA_Administration/Images/admin_RS_dlg_New_Repo.png)

4.  Enter the name for your new repository, and click **OK**.

    A progress bar appears in the lower left of the dialog box, with the message Adding repository…


After a short time, the repository is created and appears in the Repository List panel.

**Parent topic:**[Repository Server Management](../../TA_Administration/Topics/Repo_server_management.md)

**Previous topic:**[Terminating the Repository Server service](../../TA_Administration/Topics/Repo_server_management_terminating.md)

**Next topic:**[Setting a password requirement](../../TA_Administration/Topics/Repo_server_management_setting_pw.md)

