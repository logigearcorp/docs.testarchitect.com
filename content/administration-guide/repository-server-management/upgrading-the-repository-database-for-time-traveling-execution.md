--- 
title: "Upgrading the repository database for time-traveling execution"
linktitle: "Upgrading the repository database for time-traveling execution"
description: "Upgrading of legacy databases is required to enable time-traveling execution to function correctly."
weight: 17
aliases: 
    - /TA_Administration/Topics/adm_database_upgrade_time_traveling.html
keywords: "repositories, database upgrade, time traveling, upgrades, repository databases, time traveling, time traveling, database upgrade, test execution, backward, database upgrade, execution, backward, database upgrade, running, executing"
---

Upgrading of legacy databases is required to enable time-traveling execution to function correctly.

-   Note that this upgrade is required only for legacy repository databases created prior to TestArchitect version 8.2, and only if you expect to have a need to invoke time travelling for those databases.
-   Note also that if you attempt to use time travelling with a database that has not yet been upgraded, once you select the [**Time Traveling**](/user-guide/test-execution/time-traveling-execution/executing-retroactively-with-time-travel#cmd_ihj_gjf_5s) check box in the Execute Test dialog box,TestArchitect prompts you to run the upgrade with the message: This repository has not yet been upgraded for time travel functionality. Please contact your administrator to upgrade it before using it with time traveling.

The database upgrade process can be initiated by doing the following:

1.  [Open the Repository Server Control Panel](/administration-guide/repository-server-management/launching-the-repository-server-control-panel).

2.  In the TestArchitect Repository Server - Control Panel dialog box, click the **Upgrade Repository** ![](/images/TA_Administration/Images/upgrade_database_btn.png) button on the toolbar.

    The Upgrade Repositories for Time Traveling dialog box appears and displays those legacy repositories on that server that have not yet been upgraded.

    ![](/images/TA_Administration/Images/upgrade_database_time_traveling_dialog.png)

3.  In the dialog box, select one or more repositories.

    **Fastpath:** To select all repositories, click the **Repository Name** check box.

    -   The **Ready** text in the **Status** column indicates that a given repository is ready to be upgraded.
    -   The **Warning...** text in the **Status** column indicates that the given repository is a supplier repository to subscribers that have not yet been upgraded \([learn more](/user-guide/projects-and-project-items/projects-in-testarchitect/project-subscription/)\). In order for a supplier repository to be upgraded, all its subscriber repositories must first be time travel-ready.

        {{<tip>}} To see the full list of subscriber repositories, click the **Warning...** text.

    -   The **Subscriber List** column allows you to modify the list of subscriber repositories to be upgraded. Clicking the **Edit...** text invokes the Subscriber List dialog box. Specify your own list in this dialog box, then click **OK**.

        ![](/images/TA_Administration/Images/adm_subcriber_list_dlg.png)

4.  In the Upgrade Repositories for Time Traveling dialog box, click **OK**.

    {{<note>}}

    -   While the repositories are being upgraded, they can not be connected to. If you attempt a connection, you'll receive the warning message The repository <repository name\> is being upgraded. Please try again later.
    -   While a primary repository is upgrading in a replication network, any attempt to connect to a secondary repository results in the warning message The repository <repository name\> is being upgraded. During this process, neither it nor any of its replication repositories may be used. Please try again later.
    A status bar indicating the progress of the upgrade is visible in the bottom left corner of the dialog box.

    -   If the status of the upgraded repository files is Error..., click the **Error...** link to see the details.
    -   If you click the Cancel button to abort an ongoing upgrade process, the status of the repository is displayed as Cancelled..., and the repository restored to its pre-converted state. Click the **Cancelled...** link to view details of the problem.
    -   When the upgrade process finishes, a notification to that effect replaces the progress bar in the status area. Successfully upgraded repositories display a status of Done.

Those repositories that are successfully upgraded are now time travel-ready. [Time-traveling](/user-guide/test-execution/time-traveling-execution/) can now be invoked at runtime for any test modules belonging to these upgraded repositories.




