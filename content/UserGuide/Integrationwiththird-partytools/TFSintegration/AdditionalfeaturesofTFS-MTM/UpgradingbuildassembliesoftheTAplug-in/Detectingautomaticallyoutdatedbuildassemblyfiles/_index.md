--- 
title: "Detecting automatically outdated build assembly files"
linktitle: "Detecting automatically outdated build assembly files"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_auto_detection_assemblies.html
---
# Detecting automatically outdated build assembly files {#task_sqg_gvh_sq .task}

Steps to automatically detect outdated build assembly files.

**Remember:**

-   Upgrading of outdated build assembly files is supported with TA-TFS plug-in versions \#3.0.14 or later. \(To check the current version of your TA-TFS plug-in: in Visual Studio, select the **Tools** \> **Extensions and Updates** menu, browse, and then click **TA-TFS Integration Plugin**\).
-   If your TA-TFS plug-in version is \#3.0.19 or earlier, an additional step is required after upgrading the build assembly files. TA-TFS integration projects created after \#3.0.19 have replaced Coded UI with Unit Tests; that is, they are no longer dependent on the Coded UI libraries. Therefore, you must reassociate your existing TFS tests cases \([Learn more](ug_MTM_associate.html)\).

To turn on the automatic detection of obsolete TA-TFS projects, do the following:

1.  Launch Visual Studio.

2.  In the TestArchitect toolbar, click the **Preferences** ![](../Images/btn_Preferences.png) button.

    **Note:** If the **Preferences** button is not visible on the Visual Studio toolbar, enable the button by right-clicking on the toolbar and selecting **TestArchitect** from the context menu.

3.  In the Preferences dialog box, select the **On** option, and then click **OK**.

    ![](../Images/ug_MTM_Preferences_dlg.png)


Automatic detection is now turned on.

-   Subsequently, whenever you open a TA-TFS project, TestArchitect automatically scans the current build assembly files.
-   If obsolete projects are detected, the following notification dialog box appears.

    ![](../Images/ug_MTM_outdated_files.png)

    -   Click the **Update** button to upgrade the current projects. The Update TA-TFS Integration Project dialog box appears. \([Learn more](ug_MTM_upgrading_assemblies_single_project.html).\)

        ![](../Images/TA_TFS_projects_updating.png)


**Parent topic:**[Upgrading build assemblies of the TestArchitect plug-in](../../TA_Help/Topics/ug_MTM_upgrading_assemblies.html)

**Next topic:**[Upgrading TestArchitect-Team Foundation Server integration projects](../../TA_Help/Topics/ug_MTM_upgrading_assemblies_single_project.html)

