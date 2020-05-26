--- 
title: "Removing a replication server"
linktitle: "Removing a replication server"
weight: 1
aliases: 
    - /TA_Administration/Topics/adm_Removing_primary_repication_repository.html
---
# Removing a replication server {#task_yfk_lcl_nm .task}

Procedures for removing a replication server from a primary-replication relationship.

![](../Images/Replication_primary_relationship_1.png)

To remove a replication server, follow these steps:

1.  On the host that acts as primary server, [start](Repo_server_management_launching.html) the Repository Server Control Panel dialog box.

2.  In the dialog box, select the replication repository which you want removed from the primary-replication relationship.

3.  Click **Disconnect from Replication Repository** ![](../Images/btn_break_primary_server.png) on the toolbar, or select **Tools** \> **Disconnect from Replication Repository**.

4.  Select the replication server to disconnect from, and click **OK**.

    ![](../Images/admin_RS_dlg_replication_8.png)

    **For example**: You disconnect from replication repository 192.168.168.96:53:53400

    A confirmation dialog box appears:

    ![](../Images/admin_RS_dlg_remove_ReplicaRepo_dlg.png)

5.  Click **Yes**.

    An information dialog box is displayed to indicate the successful disconnection from the replication repository\(ies\).

6.  Click **OK**


The selected replication repository is removed from the primary-replication relationship. The change is reflected in the **Replication Repository** field on the Repository List panel.

![](../Images/Replication_primary_relationship_2.png)

**Parent topic:**[Breaking primary-replication relationship](../../TA_Administration/Topics/adm_Removing_primary_repication_repository_main.html)

