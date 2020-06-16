--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.5 running on macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.5.html
keywords: "Release Notes 8.5, macOS, What is new, macOS, TestArchitect 8.5, TestArchitect 8.5, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.5 running on macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**Enhancements to existing features**

[**Delete a TestArchitect repository**](/TA_Administration/Topics/adm_delete_repo.html#): Now when you delete a repository using the TestArchitect Repository Server Control Panel, you no longer have to stop the repository first, you can delete it immediately.

## Known issues

-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

**Note:** These changes do not effect non-GWD mode.


