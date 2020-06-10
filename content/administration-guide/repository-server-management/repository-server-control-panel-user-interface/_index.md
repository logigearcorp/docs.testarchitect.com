--- 
title: "Repository Server Control Panel user interface"
linktitle: "Repository Server Control Panel user interface"
weight: 2
aliases: 
    - /TA_Administration/Topics/Repo_server_management_control_panel.html
---

The Repository Server Control Panel provides you with repository server information and repository lists; it is the "central command" from which you control the repository and the repository services.

![](/images//Images/admin_RSCP.png)

Information on the server and repositories is displayed in the two main panels of the dialog box. Additionally, a status message concerning the state of the repository service is displayed in the lower left of the dialog box.

The Repository Server Information panel provides the local host name and its IP address, the port on which it listens for requests, the Java heap size, and repository backup information.

The panel Repository List specifies all the TestArchitect repositories residing on the local host \(and thus managed by this TA Repository Server service\). The **Auto-backup** column indicates whether periodic backups are scheduled to run regularly for each respective repository.

**Primary Repository** and **Replication Repository** columns indicate the *companion* repositories involved in a primary-replication configuration, where such a relationship exists. \(See [Replication repositories](/TA_Administration/Topics/Repo_server_management_replication_repo.html) for more information.\)A repository can be primary, replication, or standalone, and you can determine its type from these two fields. A replication repository always has a master primary associated with it, and the `<host:port>` identifier of that primary will be present in its **Primary Repository** field. Similarly, a primary will have one or more replication repositories, and they will be listed in its **Replication Repository** field. Repositories with blank fields in both the **Primary Repository** and **Replication Repository** columns are standalone: that is, they are not involved in a Primary-Replication arrangement.

## Commands

The toolbar of the Repository Server Control Panel displays most of the commands available through the control panel. Additional commands are available through the menus.

![](/images//Images/admin_RSCP_toolbar.png)

Buttons on the toolbar, as well as menu items in the menus, are enabled or disabled based largely on the state of the repository service \(started or stopped\), as well as your current selection in the Repository List. Certain actions performed on repositories require that the repository service be shut down. These include the import and export of repositories, as well as their deletion. Other actions, such as adding a new repository and setting a password requirement, need the service to be running.

|Command|Description|
|-------|-----------|
|[Start](/TA_Administration/Topics/Starting_repository_server.html) Repository Server|Make repositories on this host accessible to applications|
|[Stop](/TA_Administration/Topics/Stopping_repository_server.html) Repository Server|Turn off accessibility of repositories|
|[Close](/TA_Administration/Topics/Repo_server_management_closing.html)|Close the Repository Server Control Panel|
|[Terminate](/TA_Administration/Topics/Repo_server_management_terminating.html)|Stop the Repository Server Service/Demon|
|[Add repository](/TA_Administration/Topics/Repo_server_management_adding.html)|Create a new repository|
|[Delete repository](/TA_Administration/Topics/adm_delete_repo.html#)|Delete a repository|
|[Import repository](/TA_Administration/Topics/Repo_server_management_importing.html)|Import a repository from a file|
|[Export repository](/TA_Administration/Topics/Repo_server_management_exporting.html)|Export a specified repository to a file|
|[Set primary repository](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository.html)|Specify another host as the primary repository for a given imported repository. This action establishes imported repository as a replication repository.|
|[Disconnect from primary repository](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository_2.html)|Dis-establish a specified repository as replication|
|[Back-up schedule](/TA_Administration/Topics/Repo_server_management_bk.html)|-   Enable/Disable automatic backup<br>-   Specify an auto-backup schedule<br>-   Designate repositories to be auto-backup up<br>-   Specify location of backup archives<br><br>|<br>
|[TestArchitect Utility Server](/TA_Administration/Topics/TA_Utility_Server.html) Information|-   Display URL, IP address and port for associated web server<br>-   Start/Stop web server<br><br>|<br>
|[Require password](/TA_Administration/Topics/Repo_server_management_setting_pw.html)|Specify a password which will be required for all future creation of new repositories on this host|
|[Options](/TA_Administration/Topics/Repo_setting_heap_size.html)|Set the amount of memory for Java Virtual Machine|
|[Upgrade repositories](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html)|Upgrade the specified repositories for compatibility with [Time-traveling execution](/TA_Help/Topics/ug_time_traveling.html).|
|Clean up|Collect garbage in repositories to optimize their performance.|

**Parent topic:**[Repository Server Management](/TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Launching the Repository Server Control Panel](/TA_Administration/Topics/Repo_server_management_launching.html)

**Next topic:**[Starting and stopping the repository server](/TA_Administration/Topics/Repo_server_management_starting_stopping.html)

**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

