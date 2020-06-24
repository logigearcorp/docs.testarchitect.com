--- 
title: "Importing a repository as a replication"
linktitle: "Importing a repository as a replication"
description: "An imported repository can also play the role of a replication repository."
weight: 3
aliases: 
    - /TA_Administration/Topics/Importing_repository_replication.html
keywords: "importing a repository, replication, Repository Server Control Panel, Import Repository command, replication"
---

An imported repository can also play the role of a replication repository.

Ensure that the following requirements are met:

-   The file to be imported into the replication server\(s\) must be one that was exported from a primary server. Additionally, there must not have been any changes to the primary repository during primary-replication setup.
-   The repository server on the remote host \(primary server\) is currently running, and is indeed currently hosting an instance of the repository you are now importing.

To import a repository as a [replication repository](/TA_Administration/Topics/Repo_server_management_replication_repo_intro.html):

1.  If not already running, [open](/TA_Administration/Topics/Repo_server_management_launching.html) the Repository Server Control Panel dialog box.

2.  Click **Import Repository** ![](/images/TA_Administration/Images/btn.RS_import_repo.png) on the toolbar, or select **Tools** \> **Import Repository**.

3.  In the Open dialog box, specify the path to the .dat file to be imported.

    {{<tip>}} You can select multiple repository files to import them in a single operation.

4.  Click the **Open** button.

    The Import Repository dialog box appears and displays information on the selected repository files in the **Import Information** list.

    {{<note>}} A repository exported from a pre-7.3 version of TestArchitect may have an issue when imported into TestArchitect 7.3 or later, if the original repository name contained any underscore \(\_\) characters. Please note that the suggested name in the **Repository Name** column may not accurately reflect the original name.

5.  Select the **Import as Replication Repository** check box.

    {{<restriction>}} Since you are importing the repository as a replication, you are not allowed to modify the default name in the **Repository Name** field.

    ![](/images/TA_Administration/Images/Import_repo_rep_dlg.png)

6.  Click **OK**.

    A status bar indicating the progress of the import is visible in the bottom left corner of the Import Repository dialog box.

    {{<note>}} If the status of the imported repository files is Error, please refer to [Troubleshooting repository import](/TA_Administration/Topics/adm_Importing_repository_troubleshooting.html).

    When the import process finishes, a successful notification message replaces the progress bar in the status area. The successfully imported repositories display a status of Done.

7.  Click **Close** to exit the Import Repository dialog box.

    The Repository Server - Control Panel dialog box appears:

    ![](/images/TA_Administration/Images/Import_repo_rep_config.png)

8.  Configure the imported repository to designate it as a replication repository.

    1.  In the Repository Server Control Panel dialog box, select the repository that you imported as a replication repository, then click the **Set Primary Repository** ![](/images/TA_Administration/Images/btn_set_primary_server.png) button on the toolbar.

        The Primary Repository Setup dialog box appears, requiring you to supply the connection information for the associated primary repository server.

        ![](/images/TA_Administration/Images/admin_RS_dlg_PrimaryRepo.png)

    2.  In the Local Repository panel, register your host machine with the replication network. Choose either of the following options:

        -   IP address: IP address of your host machine. The option is selected by default. You ought to select this option if your machine has a static IP address.
        -   Hostname: Name of your host machine. You ought to select this option if your machine has a dynamic IP address.
    3.  In the Primary Repository panel, in the **Address** box, type either the IP address or the hostname of the machine which hosts the primary repository.

        The default port for repository servers is 53400, and appears in the **Port** box. Leave this as is, unless a different port is used on the server to which you are referring.

    4.  Click **OK**.

        If the repository is successfully imported as a replication repository, the host and port of the associated primary repository are displayed in the **Primary Repository** field in the Repository List panel. Likewise, a check of the Repository Server Control Panel dialog box on the remote host reveals a complementary link in the **Replication Repository** field.

        ![](/images/TA_Administration/Images/Import_repo_replication_dlg.png)





**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

