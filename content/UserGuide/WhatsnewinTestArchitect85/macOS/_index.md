--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac.html
---
# What's new in TestArchitect for macOS {#concept_what_new_8.3_macOS_update_3 .concept}

The following new features and improvements are introduced in the latest version of TestArchitect running on macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {#section.TAC .section}

**Enhancements to existing features**

[**Delete a TestArchitect repository**](../../TA_Administration/Topics/adm_delete_repo.md#): Now when you delete a repository using the TestArchitect Repository Server Control Panel, you no longer have to stop the repository first, you can delete it immediately.

## Known issues { .section}

-   While uploading results to TFS when successfully authenticating with a local domain using RESTAPI mode, you may experience inconsistencies.
-   Hold key and release key may not work as expected when using the key combination alt + f4
-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

**Note:** These changes do not effect non-GWD mode.

**Parent topic:**[What's new in TestArchitect 8.5](../../TA_ReleaseNotes/DITA_source/Whats_New.html)

