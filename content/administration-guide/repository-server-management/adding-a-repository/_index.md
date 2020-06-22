--- 
title: "Adding a repository"
linktitle: "Adding a repository"
description: "A new repository can be added from the Repository Server Control Panel or from within TestArchitect Client."
weight: 6
aliases: 
    - /TA_Administration/Topics/Repo_server_management_adding.html
keywords: "Repository Server Control Panel, Add repository command, adding a repository, repositories, adding a"
---

A new repository can be added from the Repository Server Control Panel or from within TestArchitect Client.

Ensure that the repository service is [running](/TA_Administration/Topics/Starting_repository_server.html).

{{<note>}}

-   The Repository Server Control Panel can be used to add a new repository to the local host.
-   TestArchitect Client, on the other hand, can be used to add a new repository to any available host. To create a repository from TestArchitect Client, refer to [Creating a repository](/TA_Help/Topics/Repository_creating.html).

To add a new repository from the Repository Server Control Panel:

1.  If not already running, start the [Repository Server Control Panel](/TA_Administration/Topics/Repo_server_management_launching.html).

2.  Click **Add Repository** ![](/images/TA_Administration/Images/btn.RS_add_repo.png) on the toolbar.

    If a password requirement has been set on this repository server for the creation of new repositories, the Repository Authentication dialog box appears.

    ![](/images/TA_Administration/Images/admin_RS_dlg_Repo_Authentication.png)

3.  If so required, enter a password and click **OK**.

    The New Repository dialog box appears.

    ![](/images/TA_Administration/Images/admin_RS_dlg_New_Repo.png)

4.  Enter the name for your new repository, and click **OK**.

    A progress bar appears in the lower left of the dialog box, with the message Adding repository…


After a short time, the repository is created and appears in the Repository List panel.




