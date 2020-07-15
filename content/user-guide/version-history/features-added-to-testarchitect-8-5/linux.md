--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.5 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.5.html
keywords: "Release Notes 8.5, Linux, What is new, Linux, TestArchitect 8.5, TestArchitect 8.5, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.5 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {{< permerlink >}} {#Whats_New_Linux__section.TAC} 

Enhancements to existing features

-   [**Delete a TestArchitect repository**](/administration-guide/repository-server-management/deleting-a-repository#): Now when you delete a repository using the TestArchitect Repository Server Control Panel, you no longer have to stop the repository first, you can delete it immediately.

## TestArchitect Automation {{< permerlink >}} {#Whats_New_Linux__section_inb_1gn_gkb} 

Enhancements to existing features

-   [**Python 3**](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/#): TestArchitect now supports using Python 3 to implement TestArchitect actions.

## Known issues {{< permerlink >}} {#Whats_New_Linux__section_jgb_x1v_4jb} 

-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

{{<note>}} These changes do not effect non-GWD mode.

