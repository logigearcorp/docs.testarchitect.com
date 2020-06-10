--- 
title: "Changing repository server port number"
linktitle: "Changing repository server port number"
weight: 10
aliases: 
    - /TA_Administration/Topics/Repo_changing_port.html
---

Rather than accept the default, you can manually change the port number of a repository server if necessary.

Ensure that the port number you want to change to is available.

To change the repository server port:

1.  [Open the Repository Server Control Panel](/TA_Administration/Topics/Repo_server_management_launching.html).

2.  In the TestArchitect Repository Server - Control Panel dialog box, [stop the repository service](/TA_Administration/Topics/Stopping_repository_server.html) if it is running.

3.  Click **Change port** to change the repository server port number.

4.  In the Change Repository Server port dialog box, enter a valid port number and click **OK**.

    A message box appears to indicate whether the change was successful.


After changing the repository server port number, all clients connected to the repository server must be updated accordingly.

**Note:** This also includes replication networks \([learn more](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository.html)\):

-   Primary replication repositories
-   Secondary replication repositories

**Parent topic:**[Repository Server Management](/TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Backing up repositories](/TA_Administration/Topics/Repo_server_management_bk.html)

**Next topic:**[Configuring connection backlog size for a repository server](/TA_Administration/Topics/Repo_connection_backlog.html)

**Related information**  


[Launching the Repository Server Control Panel](/TA_Administration/Topics/Repo_server_management_launching.html)

[Setting up primary/replication repositories](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository.html)

[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

