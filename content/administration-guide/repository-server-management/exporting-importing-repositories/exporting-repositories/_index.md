--- 
title: "Exporting repositories"
linktitle: "Exporting repositories"
description: "How to export repositories."
weight: 1
aliases: 
    - /TA_Administration/Topics/Repo_server_management_exporting.html
keywords: "repositories, exporting, Repository Server Control Panel, exporting repositories"
---

How to export repositories.

In your host file system, ensure that you have write permission on the folder to which you want to save the exported repository files.

To export repositories, perform the following:

1.  If not already running, [start](/TA_Administration/Topics/Repo_server_management_launching.html) the Repository Server Control Panel dialog box.

2.  Select a repository from the Repository List panel.

    {{<tip>}} You may select multiple repositories to export them in a single operation.

3.  Click **Export Repository** ![](/images/TA_Administration/Images/btn.RS_export_repo.png) on the toolbar, or select **Tools** \> **Export Repository**.

4.  In the Open dialog box, navigate to the folder in which you would like to save the exported repository files, then click **Open**.

    The Export Repository dialog box appears and displays information on the selected repositories in the **Export Information** list.

    ![](/images/TA_Administration/Images/export_repo_dlg.png)

5.  In the Export Repository dialog box, you have the following options:

    -   Click the **Change** button to switch to a different destination folder for your exported repository files, or enter a folder location directly into the **Export To** box.
    -   Select multiple repository files by pressing your keyboard's Shift or Control key
    -   Use the **Remove** button to remove selected files from the **Export Information** list.
6.  Click **OK**.

    A status bar indicating the progress of the export is visible in the bottom left corner of the Export Repository dialog box.

    {{<note>}} If the status of the exported repository files is Error, please refer to [Troubleshooting repository export](/TA_Administration/Topics/adm_Exporting_repository_troubleshooting.html).

    When the export process completes, a successful notification message replaces the progress bar in the status area. The successfully exported repositories display a status of Done.

    ![](/images/TA_Administration/Images/export_repo_after_dlg.png)

7.  Click **Close** to exit the Export Repository dialog box.




