--- 
title: "Connect"
linktitle: "Connect"
aliases: 
    - /TA_Automation/Topics/abt_Connect.html
---
# Connect {#abt_Connect .reference}

## Syntax

`int Connect(string connectionString)`

## Description {#section.desc .section}

Open a connection to a database.

## Parameters {#section.params .section}

connectionString
:   ODBC database connection string.

## Return Value {#section.return .section}

Return 0 if theconnectionis successful; otherwise, -1.

## Notes { .section}

-   Supported databases:

    -   Microsoft SQL Server 2008 R2
    -   Microsoft SQL Server 2012
    -   MySQL 5.6.20
    -   Microsoft Excel 2007, 2010, and 2013
    -   Oracle Database:
        -   Oracle Database Enterprise Edition
            -   12c Release 2
            -   11g Release 2
        -   Oracle Database Express Edition
            -   11g Release 2
    **Note:**

    -   SQL Server and MySQL are standard relational database management systems \(DBMSs\) that enjoy widespread use. While MS Excel is not a DBMS per se, its data is also structured in a relational \(table\) form, allowing for it to also be queried by means of SQL commands.
    -   In principle, while only the DBMSs listed are explicitly supported, any SQL-conversant DBMS with ODBC-compliant drivers for the platform of the given test system should also behave well with TestArchitect. For assistance, contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com).
-   Connecting to and querying a database from a test requires that the correct ODBC driver be used. The correct driver must be specific to both the database application and the architecture \(32-bit or 64-bit\) of the TestArchitect Controller application that uses it. The following utilities may be used to determine whether the correct driver is already installed:
    -   **Windows**: [Open](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/open-the-odbc-data-source-administrator) the ODBC Data Source Administrator dialog box. A list of installed ODBC drivers is available under the **Drivers** tab. \([Learn more](https://docs.microsoft.com/en-us/sql/odbc/admin/viewing-drivers).\)

        ![](../Images/ODBC_data_source_administration_dlg.png)

        **Note:** On the 64-bit version of Windows, only the 64-bit ODBC drivers are displayed in this tool. If your 64-bit Windows system should happen to be running a 32-bit version of the TestArchitect Controller software, you need to ensure that the 32-bit ODBC driver is installed. You can check this by directly running the 32-bit version of the Microsoft Open Database Connectivity \(ODBC\) Data Source Administrator tool, which is found at %systemdrive%\\Windows\\System32\\Odbcad32.exe. \([Learn more](https://support.microsoft.com/en-us/kb/942976).\)

    -   **macOS and Linux**: If you do not already have a utility that lists installed ODBC drivers, one good option is the open source project [unixODBC](http://www.unixodbc.org/).
-   Should you need to obtain the ODBC driver installer for your particular data source, following the appropriate link below:
    -   Microsoft SQL Server:
        -   **On Windows:** [Read here](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server).
        -   **On Linux:** [Read here](https://docs.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server).
        -   **On macOS:** Microsoft does not provide a SQL Server ODBC driver for the macOS machine. However, a good open source alternative, [FreeTDS](http://www.freetds.org/), is available. Note that, additional configurations are also required \([learn more](aut_testing_database_Mac_setup_MSSQL.html)\).
    -   MySQL Server: [Read here](http://dev.mysql.com/downloads/connector/odbc/).

        **Note:** On macOS, additional configurations are required \([learn more](aut_testing_database_Mac_setup_MySQL.html)\).

    -   Excel: The ODBC driver for Microsoft Excel is automatically installed with Microsoft Office. If Microsoft Office is not currently installed on your test machine, you can download and install the correct driver from the appropriate link below:
        -   **ODBC driver for Excel 2007 \(32-bit\):** [http://www.microsoft.com/en-us/download/details.aspx?id=23734](http://www.microsoft.com/en-us/download/details.aspx?id=23734)
        -   **ODBC driver for Excel 2010 \(both 32 and 64-bit\):** [http://www.microsoft.com/en-us/download/details.aspx?id=13255](http://www.microsoft.com/en-us/download/details.aspx?id=13255)
        -   **ODBC driver Excel 2013 \(32-bit\):** [http://www.microsoft.com/en-us/download/details.aspx?id=39358](http://www.microsoft.com/en-us/download/details.aspx?id=39358)
-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtDatabase](../../TA_Automation/Topics/abt_Database.html)

**Next topic:**[Disconnect](../../TA_Automation/Topics/abt_Disconnect.html)

