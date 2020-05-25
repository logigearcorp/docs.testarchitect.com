--- 
title: "Upgrading TestArchitect-Team Foundation Server integration projects"
linktitle: "Upgrading TA-TFS integration projects"
aliases: 
    - /TA_Help/Topics/ug_MTM_upgrading_assemblies_single_project.html
---
# Upgrading TestArchitect-Team Foundation Server integration projects {#task_nnm_jzh_sq .task}

Steps to upgrade TA-TFS integration projects.

**Remember:**

-   Upgrading of outdated build assembly files is supported with TA-TFS plug-in versions \#3.0.14 or later. \(To check the current version of your TA-TFS plug-in: in Visual Studio, select the **Tools** \> **Extensions and Updates** menu, browse, and then click **TA-TFS Integration Plugin**\).
-   If your TA-TFS plug-in version is \#3.0.19 or earlier, an additional step is required after upgrading the build assembly files. TA-TFS integration projects created after \#3.0.19 have replaced Coded UI with Unit Tests; that is, they are no longer dependent on the Coded UI libraries. Therefore, you must reassociate your existing TFS tests cases \([Learn more](ug_MTM_associate.html)\).

To upgrade TA-TFS projects, do the following:

1.  Start Visual Studio.

2.  Open a TA-TFS Integration project.

3.  In the Solution Explorer tree, right-click the solution or specific projects, and then select **Update TA-TFS Integration Project**.

    If outdated projects are detected, the following dialog box appears.

    ![](../Images/TA_TFS_projects_updating.png)

    **Note:** The upgrade process, in general, performs the following actions:

    1.  Update the TestArchitect BuildAssemblies files, which store information of the TA-TFS plug-in when it is installed.
    2.  Structure folder in your projects as follows:
        -   Create a new class file called TAIntegrationExtensibility.cs, which is used to develop [TFS-MTM Extensibility](ug_MTM_Extensibility.html)
        -   Move C\# test method files, generated during [test association](ug_MTM_associate.html), into a new subfolder called TestArchitect\_Generated.
        -   Move assembly methods into the TAIntegrationAssembly.cs file.
4.  If you want Visual Studio to back up your projects before upgrading them, select the **Auto back-up updating project\(s\)** check box.

5.  Click **Update** to begin the upgrade process.

    When the upgrade process finishes, the successfully upgraded projects display a status of Done. You can also view the log file in case of troubleshooting by clicking **View Log**.

    ![](../Images/TA_TFS_projects_updating_done.png)

    **Note:**

    -   If you previously selected to back up your projects, the backup copy of your projects are located under a folder named Backup\_<oldPluginVersion\>.
    -   For example, if your obsolete version of TA-TFS plug-in is 3.1.0, the folder's name is Backup\_3.1.0.

        ![](../Images/TA_TFS_projects_updating_backup.png)

6.  Click **Close** to exit the dialog box.

7.  Check in the solution to apply all changes.


**Parent topic:**[Upgrading build assemblies of the TestArchitect plug-in](../../TA_Help/Topics/ug_MTM_upgrading_assemblies.html)

**Previous topic:**[Detecting automatically outdated build assembly files](../../TA_Help/Topics/ug_MTM_auto_detection_assemblies.html)

