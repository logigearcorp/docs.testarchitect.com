--- 
title: "Upgrading the repository database for time-traveling execution"
linktitle: "Upgrading the repository database for time-traveling execution"
weight: 17
aliases: 
    - /TA_Administration/Topics/adm_database_upgrade_time_traveling.html
---

Upgrading of legacy databases is required to enable time-traveling execution to function correctly.

-   Note that this upgrade is required only for legacy repository databases created prior to TestArchitect version 8.2, and only if you expect to have a need to invoke time travelling for those databases.
-   Note also that if you attempt to use time travelling with a database that has not yet been upgraded, once you select the [**Time Traveling**](/TA_Help/Topics/ug_time_traveling_execution.md#cmd_ihj_gjf_5s) check box in the Execute Test dialog box,TestArchitect prompts you to run the upgrade with the message: This repository has not yet been upgraded for time travel functionality. Please contact your administrator to upgrade it before using it with time traveling.

The database upgrade process can be initiated by doing the following:

1.  [Open the Repository Server Control Panel](Repo_server_management_launching.html).

2.  In the TestArchitect Repository Server - Control Panel dialog box, click the **Upgrade Repository** ![](/images//Images/upgrade_database_btn.png) button on the toolbar.

    The Upgrade Repositories for Time Traveling dialog box appears and displays those legacy repositories on that server that have not yet been upgraded.

    ![](/images//Images/upgrade_database_time_traveling_dialog.png)

3.  In the dialog box, select one or more repositories.

    **Fastpath:** To select all repositories, click the **Repository Name** check box.

    -   The **Ready** text in the **Status** column indicates that a given repository is ready to be upgraded.
    -   The **Warning...** text in the **Status** column indicates that the given repository is a supplier repository to subscribers that have not yet been upgraded \([learn more](/TA_Help/Topics/Project_subscription.html)\). In order for a supplier repository to be upgraded, all its subscriber repositories must first be time travel-ready.

        **Tip:** To see the full list of subscriber repositories, click the **Warning...** text.

    -   The **Subscriber List** column allows you to modify the list of subscriber repositories to be upgraded. Clicking the **Edit...** text invokes the Subscriber List dialog box. Specify your own list in this dialog box, then click **OK**.

        ![](/images//Images/adm_subcriber_list_dlg.png)

4.  In the Upgrade Repositories for Time Traveling dialog box, click **OK**.

    **Note:**

    -   While the repositories are being upgraded, they can not be connected to. If you attempt a connection, you'll receive the warning message The repository <repository name\> is being upgraded. Please try again later.
    -   While a primary repository is upgrading in a replication network, any attempt to connect to a secondary repository results in the warning message The repository <repository name\> is being upgraded. During this process, neither it nor any of its replication repositories may be used. Please try again later.
    A status bar indicating the progress of the upgrade is visible in the bottom left corner of the dialog box.

    -   If the status of the upgraded repository files is Error..., click the **Error...** link to see the details.
    -   If you click the Cancel button to abort an ongoing upgrade process, the status of the repository is displayed as Cancelled..., and the repository restored to its pre-converted state. Click the **Cancelled...** link to view details of the problem.
    -   When the upgrade process finishes, a notification to that effect replaces the progress bar in the status area. Successfully upgraded repositories display a status of Done.

Those repositories that are successfully upgraded are now time travel-ready. [Time-traveling](/TA_Help/Topics/ug_time_traveling.html) can now be invoked at runtime for any test modules belonging to these upgraded repositories.

**Parent topic:**[Repository Server Management](/TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Upgrading the repository database for name change propagation](/TA_Administration/Topics/Repo_database_upgrade.html)

**Next topic:**[Clearing hit list periodically](/TA_Administration/Topics/adm_clear_hitlist.html)

