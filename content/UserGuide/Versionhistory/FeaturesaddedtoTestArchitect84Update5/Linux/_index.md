--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4_update_5.html
---
# What's new in TestArchitect for Linux {#Whats_New_Linux .concept}

The following new features and improvements are introduced in TestArchitect version 8.4 Update 5 running under Linux.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {#section.TAC .section}

**New features**

-   [Team Foundation Server bug tracker integration](../../TA_Help/Topics/ug_TFS_BugTracker_Registering_bugtracker.md#) - allows you and your team to easily keep track of bugs with TFS by associating them with TestArchitect bugs.
    -   You can collect bug isssues in TFS and track them in TestArchitect via the Track Known Bug feature.
    -   TestArchitect can also submit bugs directly to TFS.
    -   TFS support fields, including User Defined Fields, can be synced with TestArchitect.
    -   Based on test results, TestArchtiect will suggest status changes for TFS bugs.
    -   Additionally, it's possible to attach HTML test results from TestArchitect to TFS bugs.

**Enhancements to existing features**

-   [User-Defined Fields for Test Steps](../../TA_Administration/Topics/User_defined_fields_create.md#) - TestArchitect now allows you to create User Defined Fields \(UDFs\) for Test Steps. A UDF enables you to store additional information for project items. Test step UDFs will be displayed in the Steps List view as columns. You can easily upload these results to Zephyr when you use matching column names.
-   Distributed Result Storage now supports the Verify Picture Check feature.
-   Enhanced [Add Repository Connection](../../TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_connecting.md#) - In previous versions, TestArchitect could only connect to one repository at a time. Starting from 8.4 Update 5, TestArchitect has a new and improved Add Repository Connection form. Now you can simultaneously connect to multiple repositories. Additionally, TestArchitect will provide a Connection Progress dialog so that you may view the status of these connections.

## Known Issues { .section}

Due to changes in the Web Driver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

**Note:** These changes do not effect non-GWD mode.

**Parent topic:**[Features added to TestArchitect 8.4 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.4_update_5.html)

