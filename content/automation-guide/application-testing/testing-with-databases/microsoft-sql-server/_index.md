--- 
title: "Microsoft SQL Server"
linktitle: "Microsoft SQL Server"
description: "Information specific to testing with Microsoft SQL Server"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Database_MSSQL_Server.html
keywords: "Microsoft SQL testing, introduction, configuration, example"
---

Information specific to testing with Microsoft SQL Server

## Introduction

Microsoft SQL Server is a relational database management system developed by Microsoft.

## Configuration

-   Supported Database Management Systems: Microsoft SQL Server 2008 R2, Microsoft SQL Server 2012.
-   Connecting to and querying a database from a test requires that the correct ODBC driver be used. The correct driver must be specific to both the database application and the architecture \(32-bit or 64-bit\) of the TestArchitect Controller application that uses it. The following utilities may be used to determine whether the correct driver is already installed:
    -   **Windows**: [Open](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/open-the-odbc-data-source-administrator) the ODBC Data Source Administrator dialog box. A list of installed ODBC drivers is available under the **Drivers** tab. \([Learn more](https://docs.microsoft.com/en-us/sql/odbc/admin/viewing-drivers).\)

        ![](/images/TA_Automation/Images/ODBC_data_source_administration_dlg.png)

        {{<note>}} On the 64-bit version of Windows, only the 64-bit ODBC drivers are displayed in this tool. If your 64-bit Windows system should happen to be running a 32-bit version of the TestArchitect Controller software, you need to ensure that the 32-bit ODBC driver is installed. You can check this by directly running the 32-bit version of the Microsoft Open Database Connectivity \(ODBC\) Data Source Administrator tool, which is found at %systemdrive%\\Windows\\System32\\Odbcad32.exe. \([Learn more](https://support.microsoft.com/en-us/kb/942976).\)

    -   **macOS and Linux**: If you do not already have a utility that lists installed ODBC drivers, one good option is the open source project [unixODBC](http://www.unixodbc.org/).
-   Should you need to obtain the ODBC driver installer for your particular data source, following the appropriate link below:
    -   Microsoft SQL Server:
        -   **On Windows:** [Read here](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server).
        -   **On Linux:** [Read here](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server).
        -   **On macOS:** Microsoft does not provide a SQL Server ODBC driver for the macOS machine. However, a good open source alternative, [FreeTDS](http://www.freetds.org/), is available. Note that, additional configurations are also required \([learn more](/automation-guide/application-testing/testing-with-databases/microsoft-sql-server/configuring-odbc-driver-on-macos)\).

## Actions

TestArchitect provides the following built-in actions for working with SQL-compliant databases. They are listed in the typical order of their workflow:

1.  [create connection string](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/create-connection-string): Generate a connection string for a specified database on a given host.
2.  [connect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/connect-database): Open a database connection using a connection string.
3.  [use database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/use-database): Specify a database against which the ensuing SQL action lines are to be applied.
4.  [execute sql](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/execute-sql): Execute an SQL command against the currently in-use database; optionally, store returned data into one or more data sets.
5.  [disconnect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/disconnect-database): Close the database connection.

## Example

```
create connection string  
```

**Test Lines**

![](/images/TA_Automation/Images/bia_database_SQL_Server_connection_string_pgm.png)

1.  [Configuring the ODBC Driver on macOS to connect to Microsoft SQL Server](/automation-guide/application-testing/testing-with-databases/microsoft-sql-server/configuring-odbc-driver-on-macos)  
Explain additional configurations on macOS to connect to Microsoft SQL Server.




