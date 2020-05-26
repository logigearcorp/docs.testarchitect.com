--- 
title: "Upgrading build assemblies of the TestArchitect plug-in"
linktitle: "Upgrading build assemblies of the TA plug-in"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_upgrading_assemblies.html
---
# Upgrading build assemblies of the TestArchitect plug-in {#concept_nnw_g5h_sq .concept}

When the TA-TFS plug-in is installed, its information is stored in build assembly files. Whenever you upgrade the plug-in to a newer version, the assembly files also need to be upgraded, by either manual or automatic means.

**Remember:**

-   Upgrading of outdated build assembly files is supported with TA-TFS plug-in versions \#3.0.14 or later. \(To check the current version of your TA-TFS plug-in: in Visual Studio, select the **Tools** \> **Extensions and Updates** menu, browse, and then click **TA-TFS Integration Plugin**\).
-   If your TA-TFS plug-in version is \#3.0.19 or earlier, an additional step is required after upgrading the build assembly files. TA-TFS integration projects created after \#3.0.19 have replaced Coded UI with Unit Tests; that is, they are no longer dependent on the Coded UI libraries. Therefore, you must reassociate your existing TFS tests cases \([Learn more](ug_MTM_associate.html)\).

1.  [Detecting automatically outdated build assembly files](../../TA_Help/Topics/ug_MTM_auto_detection_assemblies.html)  
Steps to automatically detect outdated build assembly files.
2.  [Upgrading TestArchitect-Team Foundation Server integration projects](../../TA_Help/Topics/ug_MTM_upgrading_assemblies_single_project.html)  
Steps to upgrade TA-TFS integration projects.

**Parent topic:**[Additional features of TFS-MTM](../../TA_Help/Topics/ug_MTM_features.html)

**Previous topic:**[Creating matching custom fields in TestArchitect and Team Foundation Server](../../TA_Help/Topics/ug_MTM_matching_custom_fields.html)

**Next topic:**[Switching to a different Team Foundation Server account](../../TA_Help/Topics/ug_MTM_switching_TFS_account.html)

