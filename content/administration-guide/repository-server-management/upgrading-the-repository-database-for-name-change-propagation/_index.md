--- 
title: "Upgrading the repository database for name change propagation"
linktitle: "Upgrading the repository database for name change propagation"
description: "Legacy databases must be upgraded so that necessary referencing information can be generated to enable name change propagation."
weight: 16
aliases: 
    - /TA_Administration/Topics/Repo_database_upgrade.html
keywords: "repositories, database upgrade, name change propagation., upgrades, repository databases, name change propagation."
---

Legacy databases must be upgraded so that necessary referencing information can be generated to enable name change propagation.

Upgrading of legacy databases is required to enable [name change propagation](/user-guide/projects-and-project-items/project-items/name-change-propagation) to function correctly. Ensure that the following requirements are met before you upgrade your database.

-   The repository database you want to upgrade is a legacy database created prior to TestArchitect version 7.1.
-   The repository you want to upgrade is not in use.
-   All operations on the database \(for example, modify, synchronize, and auto-backup\) have been stopped.
-   All [subscribed projects](/user-guide/projects-and-project-items/projects-in-testarchitect/project-subscription/subscribing-to-projects) used in the database are available.
-   You have the built-in **administrator** user account login privileges for the database you want to upgrade.

The database upgrade process can be initiated either automatically or manually. When the repository server starts up for the first time after installing TestArchitect version 7.1 or higher, TestArchitect checks automatically to see if the repository database needs to be upgraded. You are prompted if an upgrade is required \(See [Performing repository database upgrade](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/performing-repository-database-upgrade)\). If you decline the request to upgrade the database at that time, you can manually invoke the request to upgrade the repository database at a later time by right-clicking the legacy repository you want to upgrade on the TestArchitect explorer tree, selecting **Upgrade Database**, and following the instructions in [Performing repository database upgrade](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/performing-repository-database-upgrade).

The repository database upgrade scans each entity in the database and adds referencing information that is required for name change propagation. If any test module or action contains an entity that belongs to more than one interface, these entities are known as ambiguous entities. TestArchitect cannot automatically create unique one-to-one references for ambiguous entities. TestArchitect displays a dialog box that contains the list of all ambiguous entities along with the interfaces that are candidates for the each ambiguous entity to be mapped to. See [Ambiguous entities](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/ambiguous-entities) for more details.

After all ambiguous entities have been defined, TestArchitect upgrades the database. Depending on the size of the database, it may take some time to complete the upgrade. An Upgrade Database Tool dialog box appears showing the status of the upgrade and the upgrade results for each project in the database. Successfully upgraded projects are marked with check icons ![](/images/TA_Administration/Images/Repo_upgrade_pass.png). Projects that fail to upgrade are marked with 'X' ![](/images/TA_Administration/Images/Repo_upgrade_fail.png) icons. Click **View upgrade log** next to a project's name to view the upgrade log for that project.

1.  [Performing repository database upgrade](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/performing-repository-database-upgrade)  
Upgrading a repository database, which needs to be performed only once, adds necessary referencing information to the database to allow for name change propagation to function.
2.  [Ambiguous entities](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/ambiguous-entities)  
Ambiguous entities require user intervention to map them to defined interfaces or, alternatively, to keep them as text form.




