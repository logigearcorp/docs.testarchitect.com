--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
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

-   [Database support](/automation-guide/application-testing/testing-with-databases/): With this update, TestArchitect allows you to interface with a variety of standardized database systems. A set of new built-in actions and harness methods allows your tests to [connect to, and run queries](/automation-guide/application-testing/testing-with-databases/) against, Microsoft SQL Server, MySQL, and MS Excel data sources.

    |Action|Harness method|Description|
    |------|--------------|-----------|
    |[create connection string](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/create-connection-string)| |Generate a connection string to a specified database.|
    |[connect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/connect-database)|[Connect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatabase/connect)|Open a database connection.|
    |[use database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/use-database)| |Specify a database against which the ensuing SQL action lines are to be applied.|
    |[execute sql](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/execute-sql)|[ExecSqlCommand](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatabase/execsqlcommand)|Execute an SQL command against the database currently in use.|
    |[disconnect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/disconnect-database)|[Disconnect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatabase/disconnect)|Close a database connection.|

-   A new mouse-related built-in action:

    |Action|Harness method|Description|
    |------|--------------|-----------|
    |[get mouse position](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/get-mouse-position)|[GetMousePosition](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/getmouseposition)|Retrieve the coordinates of the current mouse pointer position.|


