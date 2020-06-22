--- 
title: "What's new in TestArchitect for Linux"
linktitle: "What's new in TestArchitect for Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8 update 4 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8_update_4_Linux.html
keywords: "Release Notes 8 Update 4, Linux, What is new, Linux, TestArchitect 8 Update 4, TestArchitect 8 Update 4, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8 update 4 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation

-   [**Database support**](/TA_Automation/Topics/aut_app_testing_Database_apps.html): With this update, TestArchitect allows you to interface with a variety of standardized database systems. A set of new built-in actions and harness methods allows your tests to [connect to, and run queries](/TA_Automation/Topics/aut_app_testing_Database_apps.html) against, Microsoft SQL Server, MySQL, and MS Excel data sources.

    |Action|Harness method|Description|
    |------|--------------|-----------|
    |[create connection string](/TA_Automation/Topics/bia_create_connection_string.html)| |Generate a connection string to a specified database.|
    |[connect database](/TA_Automation/Topics/bia_connect_database.html)|[Connect](/TA_Automation/Topics/abt_Connect.html)|Open a database connection.|
    |[use database](/TA_Automation/Topics/bia_use_database.html)| |Specify a database against which the ensuing SQL action lines are to be applied.|
    |[execute sql](/TA_Automation/Topics/bia_execute_sql.html)|[ExecSqlCommand](/TA_Automation/Topics/abt_Execute_Sql_Command.html)|Execute an SQL command against the database currently in use.|
    |[disconnect database](/TA_Automation/Topics/bia_disconnect_database.html)|[Disconnect](/TA_Automation/Topics/abt_Disconnect.html)|Close a database connection.|

-   **A new mouse-related built-in action:**

    |Action|Harness method|Description|
    |------|--------------|-----------|
    |[get mouse position](/TA_Automation/Topics/bia_get_mouse_position.html)|[GetMousePosition](/TA_Automation/Topics/abt_GetMousePosition.html)|Retrieve the coordinates of the current mouse pointer position.|



