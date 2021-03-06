--- 
title: "Removing primary server"
linktitle: "Removing primary server"
weight: 2
aliases: 
    - /TA_Administration/Topics/adm_Setting_up_primary_replication_repository_2.html
---

Procedures for removing the primary server from a primary-replication relationship.

![](/images//Images/Replication_primary_relationship_3.png)

To remove the primary server, follow these steps:

1.  On the host that acts as replication server, [start](Repo_server_management_launching.html) the Repository Server Control Panel dialog box.

2.  In the dialog box, select the primary repository which is to be removed from the primary-replication relationship.

3.  Click **Disconnect from Primary Repository** ![](/images//Images/btn_break_primary_server.png) on the toolbar, or select **Tools** \> **Disconnect from Primary Repository**.

    The confirmation dialog box appears:

    ![](/images//Images/admin_RS_dlg_remove_PrimaryRepo.png)

4.  Click **Yes**.

    An information dialog box is displayed to indicate the successful disconnection from the primary repository.

5.  Click **OK**


The selected primary server is removed from the primary-replication relationship. The change is reflected in the **Primary Repository** field on the Repository List panel.

![](/images//Images/Replication_primary_relationship_4.png)

**Parent topic:**[Breaking primary-replication relationship](/TA_Administration/Topics/adm_Removing_primary_repication_repository_main.html)

