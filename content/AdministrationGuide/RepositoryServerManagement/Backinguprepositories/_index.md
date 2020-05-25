--- 
title: "Backing up repositories"
linktitle: "Backing up repositories"
aliases: 
    - /TA_Administration/Topics/Repo_server_management_bk.html
---
# Backing up repositories {#task_aq4_hlq_rl .task}

A TestArchitect repository is the central storage location for all your work on test modules, actions, interfaces, data, and test results. It is essential that you back up repositories in case of data loss or corruption.

The simplest means of backing up a repository is by exporting it to a file, which can later be imported when a repository needs to be restored. A more elegant and convenient solution, however, is to allow TestArchitect to back up your repositories automatically, on a periodic schedule.

Automatic backup can be set up or reconfigured at any time, with the repository server running or stopped. Similarly, backups themselves can take place while the server is running.

To set up or modify the auto-backup schedule, do the following:

1.  [Open the Repository Server Control Panel](Repo_server_management_launching.html) dialog box.

2.  Click the **Backup Schedule** ![](../Images/admin_RS_btn_BackupSched.png) button on the toolbar, or select **Tools** \> **Backup Schedule**.

    TheRepository Auto-Backup Schedule dialog box appears.

    ![](../Images/admin_RS_auto-backup_schedule.png)

3.  In the topmost panel, ensure that auto-backup is in the state that you want it to be:

    -   **Disable auto-backup function**: deactivates the auto-backup function.
    -   **Enable auto-backup function**: activates the auto-backup function.
    **Tip:** There may be instances when you want to suspend the backup of repositories for a period, say one or two days. In such cases, disabling auto-backup is a better option than modifying the schedule.

4.  In the **Select repositories for auto-backup** list, select which repositories are to be included in the backup schedule. Repositories in the leftmost list are not included in the schedule; those on the right are included.

    **Note:** Use the \>, \>\>, <, << buttons between the two lists to move repositories between them.

5.  The next panel allows you to specify when the auto-backup schedule, including times of day and days of weeks, takes place.

    **Note:** The schedule you select here applies to all repositories selected for auto-backup in your repository server. Schedules are not individually customizable by repository.

6.  Choose a location on your hard drive or network in which the automatic backup files are to be stored.

7.  The final panel asks you to decide what action should be taken if a repository is in use at the time of auto-backup. Choose one of the following:

    -   **Run backup without disconnecting the connection**: Backs up the selected repositories without stopping any client connections to those repositories.
    -   **Disconnect the connection and run backup**: Automatically stops all client connections to the selected repositories to allow the backup to proceed.
8.  Click **OK**.


The general state of auto-backup, including on/off status, schedule, and which repositories are covered, can be ascertained with a glance at the Repository Server Control Panel dialog box.

![](../Images/admin_RSCP_backup_info.png)

**Parent topic:**[Repository Server Management](../../TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Exporting/Importing repositories](../../TA_Administration/Topics/adm_Exporting_import_repository.html)

**Next topic:**[Changing repository server port number](../../TA_Administration/Topics/Repo_changing_port.html)

