--- 
title: "Performing repository database upgrade"
linktitle: "Performing repository database upgrade"
description: "Upgrading a repository database, which needs to be performed only once, adds necessary referencing information to the database to allow for name change propagation to function."
weight: 1
aliases: 
    - /TA_Administration/Topics/Repo_upgrading_database.html
keywords: "repositories, performing database upgrade, upgrades, performing repository databases"
---

Upgrading a repository database, which needs to be performed only once, adds necessary referencing information to the database to allow for name change propagation to function.If you update TestArchitect Client to version 7.1 or newer from a version older than 7.1, TestArchitect will automatically detect, at first run after the install, whether or not a repository database upgrade is required to enable name change propagation functions. If TestArchitect asks you to upgrade the repository database and you want to upgrade the database, be sure the database upgrade prerequisites mentioned below are met.

Ensure the following requirements are met before upgrading a database.

-   The repository database you want to upgrade is a legacy database created prior to TestArchitect version 7.1.
-   The repository in which you want to perform the upgrade is not in use.
-   All database operations \(such as modifying, synchronizing, backing-up, and so on\) are stopped.
-   All subscribed projects used in the database are available before performing the upgrade.
-   You have the built-in user account administrator login privileges for the database you want to upgrade.

1.  After TestArchitect has been installed, open the [Repository Server Control Panel](/TA_Administration/Topics/Repo_server_management_launching.html).

    A dialog box appears to inform you that all databases will be upgraded. This dialog box only appears one time after TestArchitect has been installed.

    ![](/images/TA_Administration/Images/upgrade_database_dialog.png)

2.  In the dialog box, you have the following options:

    -   Click **OK**, if you want all databases to be upgraded automatically.
    -   Click **Cancel**, if you do not want the upgrading process to take place immediately.

        {{<note>}} If you click **Cancel**, proceed to step [3](/TA_Administration/Topics/Repo_upgrading_database.html#step_login) to manually run the upgrade process for specific repositories.

3.  From TestArchitect Client, log in to the repository that you want to upgrade using the built-in user account, **administrator**.

4.  In the TestArchitect explorer tree, right-click on the repository and select **Upgrade Database** on the context menu.

    {{<note>}} The **Upgrade Database** option will no longer appear in the context menu once the repository's database has been upgraded.

5.  Confirm that you want to upgrade the database.

    {{<caution>}}

    There is no way for TestArchitect to undo the changes made to the database after it has been upgraded.

6.  TestArchitect may present additional Specify Interface dialog boxes for you to map [ambiguous entities](/TA_Administration/Topics/Repo_mapping_ambiguous_entities.html), depending on whether or not the database has any such ambiguities which need to be resolved.


Depending on the size of the database, it may take some time to complete the upgrade. An Upgrade Database Tool dialog box appears showing the status of the upgrade and the upgrade results for each project in the database. Successfully upgraded projects are marked with check icons ![](/images/TA_Administration/Images/Repo_upgrade_pass.png). Projects that fail to upgrade are marked with 'X' ![](/images/TA_Administration/Images/Repo_upgrade_fail.png) icons. Click **View upgrade log** next to a project's name to view the upgrade log for that project.



