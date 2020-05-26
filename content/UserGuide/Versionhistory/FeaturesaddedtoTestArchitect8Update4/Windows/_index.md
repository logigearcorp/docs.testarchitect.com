--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8_update_4_Windows.html
---
# What's new in TestArchitect for Windows {#concept_what_new_8_U4_Wins .concept}

The following new features and improvements are introduced in TestArchitect version 8 update 4 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation {#section_jqm_z13_nh .section}

-   **Support for test automation on iOS 8.1.x and iOS 8.0.x**: TestArchitect extends mobile testing and introduces support for testing iOS 8 applications. \(See [iOS Automation](../../iOS/Topics/iOS_automation_def.html) for more information.\)
    -   You can now create automated tests for iOS applications running on the latest versions of Apple smartphones, including iPhone 6 and iPhone 6 Plus.
    -   TestArchitect recognizes iOS controls in tested iOS applications. It also provides specific built-in actions for each control class for simulating user actions on the controls and for retrieving data from them.
-   [**Database support**](../../TA_Automation/Topics/aut_app_testing_Database_apps.html): With this update, TestArchitect allows you to interface with a variety of standardized database systems. A set of new built-in actions and harness methods allows your tests to [connect to, and run queries](../../TA_Automation/Topics/aut_app_testing_Database_apps.html) against, Microsoft SQL Server, MySQL, and MS Excel data sources.

    |Action|Harness method|Description|
    |------|--------------|-----------|
    |[create connection string](../../TA_Automation/Topics/bia_create_connection_string.html)| |Generate a connection string to a specified database.|
    |[connect database](../../TA_Automation/Topics/bia_connect_database.html)|[Connect](../../TA_Automation/Topics/abt_Connect.html)|Open a database connection.|
    |[use database](../../TA_Automation/Topics/bia_use_database.html)| |Specify a database against which the ensuing SQL action lines are to be applied.|
    |[execute sql](../../TA_Automation/Topics/bia_execute_sql.html)|[ExecSqlCommand](../../TA_Automation/Topics/abt_Execute_Sql_Command.html)|Execute an SQL command against the database currently in use.|
    |[disconnect database](../../TA_Automation/Topics/bia_disconnect_database.html)|[Disconnect](../../TA_Automation/Topics/abt_Disconnect.html)|Close a database connection.|

-   **A new mouse-related built-in action:**

    |Action|Harness method|Description|
    |------|--------------|-----------|
    |[get mouse position](../../TA_Automation/Topics/bia_get_mouse_position.html)|[GetMousePosition](../../TA_Automation/Topics/abt_GetMousePosition.html)|Retrieve the coordinates of the current mouse pointer position.|


**Enhancements to existing features**

-   item wait built-in setting in [**Silverlight**](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps.html): The [item wait](../../TA_Automation/Topics/bis_item_wait.html) built-in setting is now applicable to actions operating on **tree** and **listbox** controls.


**Parent topic:**[Features added to TestArchitect 8 Update 4](../../TA_ReleaseNotes/DITA_source/Whats_New_8_update_4.html)

