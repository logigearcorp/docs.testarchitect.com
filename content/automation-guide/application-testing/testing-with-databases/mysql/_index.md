--- 
title: "MySQL Server"
linktitle: "MySQL"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Database_MySQL_Server.html
---

Information specific to testing with MySQL Server

## Introduction

MySQL is a freely available open source Relational Database Management System \(RDBMS\) that uses Structured Query Language \(SQL\).

## Configuration

-   Supported Database Management Systems: MySQL 5.6.20.
-   Connecting to and querying a database from a test requires that the correct ODBC driver be used. The correct driver must be specific to both the database application and the architecture \(32-bit or 64-bit\) of the TestArchitect Controller application that uses it. The following utilities may be used to determine whether the correct driver is already installed:
    -   **Windows**: [Open](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/open-the-odbc-data-source-administrator) the ODBC Data Source Administrator dialog box. A list of installed ODBC drivers is available under the **Drivers** tab. \([Learn more](https://docs.microsoft.com/en-us/sql/odbc/admin/viewing-drivers).\)

        ![](/images//Images/ODBC_data_source_administration_dlg.png)

        **Note:** On the 64-bit version of Windows, only the 64-bit ODBC drivers are displayed in this tool. If your 64-bit Windows system should happen to be running a 32-bit version of the TestArchitect Controller software, you need to ensure that the 32-bit ODBC driver is installed. You can check this by directly running the 32-bit version of the Microsoft Open Database Connectivity \(ODBC\) Data Source Administrator tool, which is found at %systemdrive%\\Windows\\System32\\Odbcad32.exe. \([Learn more](https://support.microsoft.com/en-us/kb/942976).\)

    -   **macOS and Linux**: If you do not already have a utility that lists installed ODBC drivers, one good option is the open source project [unixODBC](http://www.unixodbc.org/).
-   Should you need to obtain the ODBC driver installer for your particular data source, following the appropriate link below:
    -   MySQL Server: [Read here](http://dev.mysql.com/downloads/connector/odbc/).

        **Note:** On macOS, additional configurations are required \([learn more](aut_testing_database_Mac_setup_MySQL.html)\).


## Actions

TestArchitect provides the following built-in actions for working with SQL-compliant databases. They are listed in the typical order of their workflow:

1.  [create connection string](create_connection_string.html): Generate a connection string for a specified database on a given host.
2.  [connect database](connect_database.html): Open a database connection using a connection string.
3.  [use database](use_database.html): Specify a database against which the ensuing SQL action lines are to be applied.
4.  [execute sql](execute_sql.html): Execute an SQL command against the currently in-use database; optionally, store returned data into one or more data sets.
5.  [disconnect database](disconnect_database.html): Close the database connection.

## Example

```
create connection string  
```

**Test Lines**

![](/images//Images/bia_database_MySQL_connection_string_pgm.png)

**Result**

![](/images//Images/bia_database_MySQL_connection_string_res.png)

1.  [Configuring the ODBC Driver on macOS to connect to MySQL Server](/TA_Automation/Topics/aut_testing_database_Mac_setup_MySQL.html)  
Explain additional configurations on macOS to connect to MySQL Server.

**Parent topic:**[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

**Previous topic:**[Microsoft SQL Server](/TA_Automation/Topics/aut_app_testing_Database_MSSQL_Server.html)

**Next topic:**[Microsoft Excel](/TA_Automation/Topics/aut_app_testing_Database_Excel_Server.html)

