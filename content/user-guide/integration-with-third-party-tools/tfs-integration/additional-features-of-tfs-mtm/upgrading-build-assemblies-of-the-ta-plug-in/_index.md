--- 
title: "Upgrading build assemblies of the TestArchitect plug-in"
linktitle: "Upgrading build assemblies of the TA plug-in"
description: "When the TA-TFS plug-in is installed, its information is stored in build assembly files. Whenever you upgrade the plug-in to a newer version, the assembly files also need to be upgraded, by either manual or automatic means."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_upgrading_assemblies.html
keywords: 
---

When the TA-TFS plug-in is installed, its information is stored in build assembly files. Whenever you upgrade the plug-in to a newer version, the assembly files also need to be upgraded, by either manual or automatic means.

{{<remember>}}

-   Upgrading of outdated build assembly files is supported with TA-TFS plug-in versions \#3.0.14 or later. \(To check the current version of your TA-TFS plug-in: in Visual Studio, select the **Tools** \> **Extensions and Updates** menu, browse, and then click **TA-TFS Integration Plugin**\).
-   If your TA-TFS plug-in version is \#3.0.19 or earlier, an additional step is required after upgrading the build assembly files. TA-TFS integration projects created after \#3.0.19 have replaced Coded UI with Unit Tests; that is, they are no longer dependent on the Coded UI libraries. Therefore, you must reassociate your existing TFS tests cases \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases)\).

1.  [Detecting automatically outdated build assembly files](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/upgrading-build-assemblies-of-the-ta-plug-in/detecting-automatically-outdated-build-assembly-files)  
Steps to automatically detect outdated build assembly files.
2.  [Upgrading TestArchitect-Team Foundation Server integration projects](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/upgrading-build-assemblies-of-the-ta-plug-in/upgrading-ta-tfs-integration-projects)  
Steps to upgrade TA-TFS integration projects.




