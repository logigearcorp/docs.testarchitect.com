--- 
title: "Repository Server Control Panel user interface"
linktitle: "Repository Server Control Panel user interface"
description: "The Repository Server Control Panel provides you with repository server information and repository lists; it is the &#34;central command&#34; from which you control the repository and the repository services."
weight: 2
aliases: 
    - /TA_Administration/Topics/Repo_server_management_control_panel.html
keywords: "Repository Server Control Panel, control panel, repository server, primary repository, replication repository, repositories, commands, user interface"
---

The Repository Server Control Panel provides you with repository server information and repository lists; it is the "central command" from which you control the repository and the repository services.

![](/images/TA_Administration/Images/admin_RSCP.png)

Information on the server and repositories is displayed in the two main panels of the dialog box. Additionally, a status message concerning the state of the repository service is displayed in the lower left of the dialog box.

The Repository Server Information panel provides the local host name and its IP address, the port on which it listens for requests, the Java heap size, and repository backup information.

The panel Repository List specifies all the TestArchitect repositories residing on the local host \(and thus managed by this TA Repository Server service\). The **Auto-backup** column indicates whether periodic backups are scheduled to run regularly for each respective repository.

**Primary Repository** and **Replication Repository** columns indicate the *companion* repositories involved in a primary-replication configuration, where such a relationship exists. \(See [Replication repositories](/administration-guide/repository-server-management/replication-repositories/) for more information.\)A repository can be primary, replication, or standalone, and you can determine its type from these two fields. A replication repository always has a master primary associated with it, and the `<host:port>` identifier of that primary will be present in its **Primary Repository** field. Similarly, a primary will have one or more replication repositories, and they will be listed in its **Replication Repository** field. Repositories with blank fields in both the **Primary Repository** and **Replication Repository** columns are standalone: that is, they are not involved in a Primary-Replication arrangement.

## Commands

The toolbar of the Repository Server Control Panel displays most of the commands available through the control panel. Additional commands are available through the menus.

![](/images/TA_Administration/Images/admin_RSCP_toolbar.png)

Buttons on the toolbar, as well as menu items in the menus, are enabled or disabled based largely on the state of the repository service \(started or stopped\), as well as your current selection in the Repository List. Certain actions performed on repositories require that the repository service be shut down. These include the import and export of repositories, as well as their deletion. Other actions, such as adding a new repository and setting a password requirement, need the service to be running.

|Command|Description|
|-------|-----------|
|[Start](/administration-guide/repository-server-management/starting-and-stopping-the-repository-server/starting-the-repository-server) Repository Server|Make repositories on this host accessible to applications|
|[Stop](/administration-guide/repository-server-management/starting-and-stopping-the-repository-server/stopping-the-repository-server) Repository Server|Turn off accessibility of repositories|
|[Close](/administration-guide/repository-server-management/closing-the-repository-server-control-panel)|Close the Repository Server Control Panel|
|[Terminate](/administration-guide/repository-server-management/terminating-the-repository-server-service)|Stop the Repository Server Service/Demon|
|[Add repository](/administration-guide/repository-server-management/adding-a-repository)|Create a new repository|
|[Delete repository](/administration-guide/repository-server-management/deleting-a-repository#)|Delete a repository|
|[Import repository](/administration-guide/repository-server-management/exporting-importing-repositories/importing-repositories)|Import a repository from a file|
|[Export repository](/administration-guide/repository-server-management/exporting-importing-repositories/exporting-repositories)|Export a specified repository to a file|
|[Set primary repository](/administration-guide/repository-server-management/replication-repositories/setting-up-primary-replication-repositories)|Specify another host as the primary repository for a given imported repository. This action establishes imported repository as a replication repository.|
|[Disconnect from primary repository](/administration-guide/repository-server-management/replication-repositories/breaking-primary-replication-relationship/removing-primary-server)|Dis-establish a specified repository as replication|
|[Back-up schedule](/administration-guide/repository-server-management/backing-up-repositories)|-   Enable/Disable automatic backup<br>-   Specify an auto-backup schedule<br>-   Designate repositories to be auto-backup up<br>-   Specify location of backup archives<br><br>|<br>
|[TestArchitect Utility Server](/administration-guide/repository-server-management/testarchitect-utility-server) Information|-   Display URL, IP address and port for associated web server<br>-   Start/Stop web server<br><br>|<br>
|[Require password](/administration-guide/repository-server-management/setting-a-password-requirement)|Specify a password which will be required for all future creation of new repositories on this host|
|[Options](/administration-guide/repository-server-management/setting-java-heap-size)|Set the amount of memory for Java Virtual Machine|
|[Upgrade repositories](/administration-guide/repository-server-management/upgrading-the-repository-database-for-time-traveling-execution)|Upgrade the specified repositories for compatibility with [Time-traveling execution](/user-guide/test-execution/time-traveling-execution/).|
|Clean up|Collect garbage in repositories to optimize their performance.|




**Related information**  


[Default port numbers and port ranges](/administration-guide/default-port-numbers-and-port-ranges)

