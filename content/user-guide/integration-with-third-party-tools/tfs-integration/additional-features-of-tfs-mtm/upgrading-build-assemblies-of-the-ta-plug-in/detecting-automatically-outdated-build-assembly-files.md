--- 
title: "Detecting automatically outdated build assembly files"
linktitle: "Detecting automatically outdated build assembly files"
description: "Steps to automatically detect outdated build assembly files."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_auto_detection_assemblies.html
keywords: "integration, TFS, automatic detection outdated assemblies, automatic detection outdated assemblies, Team Foundation Server, automatic detection outdated assemblies"
---

Steps to automatically detect outdated build assembly files.

{{<remember>}}

-   Upgrading of outdated build assembly files is supported with TA-TFS plug-in versions \#3.0.14 or later. \(To check the current version of your TA-TFS plug-in: in Visual Studio, select the **Tools** \> **Extensions and Updates** menu, browse, and then click **TA-TFS Integration Plugin**\).
-   If your TA-TFS plug-in version is \#3.0.19 or earlier, an additional step is required after upgrading the build assembly files. TA-TFS integration projects created after \#3.0.19 have replaced Coded UI with Unit Tests; that is, they are no longer dependent on the Coded UI libraries. Therefore, you must reassociate your existing TFS tests cases \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases)\).

To turn on the automatic detection of obsolete TA-TFS projects, do the following:

1.  Launch Visual Studio.

2.  In the TestArchitect toolbar, click the **Preferences** ![](/images/TA_Help/Images/btn_Preferences.png) button.

    {{<note>}} If the **Preferences** button is not visible on the Visual Studio toolbar, enable the button by right-clicking on the toolbar and selecting **TestArchitect** from the context menu.

3.  In the Preferences dialog box, select the **On** option, and then click **OK**.

    ![](/images/TA_Help/Images/ug_MTM_Preferences_dlg.png)


Automatic detection is now turned on.

-   Subsequently, whenever you open a TA-TFS project, TestArchitect automatically scans the current build assembly files.
-   If obsolete projects are detected, the following notification dialog box appears.

    ![](/images/TA_Help/Images/ug_MTM_outdated_files.png)

    -   Click the **Update** button to upgrade the current projects. The Update TA-TFS Integration Project dialog box appears. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/upgrading-build-assemblies-of-the-ta-plug-in/upgrading-ta-tfs-integration-projects).\)

        ![](/images/TA_Help/Images/TA_TFS_projects_updating.png)




