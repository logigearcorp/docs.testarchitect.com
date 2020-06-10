--- 
title: "Microsoft Excel"
linktitle: "Microsoft Excel"
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Database_Excel_Server.html
---

Information specific to testing with Microsoft Excel

## Introduction

Microsoft Excel is a spreadsheet application developed by Microsoft for Microsoft Windows.

## Configuration

-   Supported Microsoft Excel versions: 2007, 2010 and 2013.
-   Microsoft Excel Supported Extensions: xls, xlsx, xlsm, xlsb.
-   Connecting to and querying a database from a test requires that the correct ODBC driver be used. The correct driver must be specific to both the DBMS and the architecture \(32-bit or 64-bit\) of the TestArchitect Controller application that uses it. The following utilities may be used to determine whether the correct driver is already installed:
    -   **Windows**: [Open](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/open-the-odbc-data-source-administrator) the ODBC Data Source Administrator dialog box. A list of installed ODBC drivers is available under the **Drivers** tab. \([Learn more](https://docs.microsoft.com/en-us/sql/odbc/admin/viewing-drivers).\)

        ![](/images//Images/ODBC_data_source_administration_dlg.png)

        **Note:** On the 64-bit version of Windows, only the 64-bit ODBC drivers are displayed in this tool. If your 64-bit Windows system should happen to be running a 32-bit version of the TestArchitect Controller software, you need to ensure that the 32-bit ODBC driver is installed. You can check this by directly running the 32-bit version of the Microsoft Open Database Connectivity \(ODBC\) Data Source Administrator tool, which is found at %systemdrive%\\Windows\\System32\\Odbcad32.exe. \([Learn more](https://support.microsoft.com/en-us/kb/942976).\)

-   Should you need to obtain the ODBC driver installer for your particular data source, following the appropriate link below:
    -   Excel: The ODBC driver for Microsoft Excel is automatically installed with Microsoft Office. If Microsoft Office is not currently installed on your test machine, you can download and install the correct driver from the appropriate link below:
        -   **ODBC driver for Excel 2007 \(32-bit\):** [http://www.microsoft.com/en-us/download/details.aspx?id=23734](http://www.microsoft.com/en-us/download/details.aspx?id=23734)
        -   **ODBC driver for Excel 2010 \(both 32 and 64-bit\):** [http://www.microsoft.com/en-us/download/details.aspx?id=13255](http://www.microsoft.com/en-us/download/details.aspx?id=13255)
        -   **ODBC driver Excel 2013 \(32-bit\):** [http://www.microsoft.com/en-us/download/details.aspx?id=39358](http://www.microsoft.com/en-us/download/details.aspx?id=39358)

## Actions

TestArchitect provides the following built-in actions for working with SQL-compliant databases. They are listed in the typical order of their workflow:

1.  [create connection string](/TA_Automation/Topics/bia_create_connection_string.html): Generate a connection string for a specified database on a given host.
2.  [connect database](/TA_Automation/Topics/bia_connect_database.html): Open a database connection using a connection string.
3.  [use database](/TA_Automation/Topics/bia_use_database.html): Specify a database against which the ensuing SQL action lines are to be applied.
4.  [execute sql](/TA_Automation/Topics/bia_execute_sql.html): Execute an SQL command against the currently in-use database; optionally, store returned data into one or more data sets.
5.  [disconnect database](/TA_Automation/Topics/bia_disconnect_database.html): Close the database connection.

## Connecting to Excel from your test

Use the action [create connection string](/TA_Automation/Topics/bia_create_connection_string.html) to establish an ODBC connection to the Excel file. Note that the action's driver argument should have one of the following values:

|||
|------|------|
|For Excel version 2007 and later|Microsoft Excel Driver \(\*.xls, \*.xlsx, \*.xlsm, \*.xlsb\)|
|For Excel 2.0 – 2003|Microsoft Excel Driver \(\*.xls\)|

Use the others argument to specify the path and name of the Excel file, using the key DBQ. For example, DBQ=C:\\Customers.xlsx.

## Querying Excel from your test

For the purpose of running an SQL query, Excel offers a few constructs that can act as tables:

-   **named range**

    Excel allows you to create a *defined name* for a given range of cells. To use this within an SQL query, simply treat it as a table name. For example, with a named range of customers, you could issue a query with:

    ```
                     command                       result
    execute sql      select * from customers       customers_ds
    ```

    **Note:** The query treats the last row of the named range as the last row of the table. Note that any empty rows at the end of the range are treated as table rows with NULL values in each cell.

-   **worksheet**

    An Excel spreadsheet file can consist of any number of worksheets, each of which must have a unique name. In your SQL query, you can use a worksheet name in place of a table by appending a $ to it and enclosing it in square brackets. For example, with a worksheet named customer\_sheet, you could issue a query in this manner:

    ```
                     command                             result
    execute sql      select * from [customer_sheet$]     customers_ds
    ```

    **Note:** For a query on a full worksheet, the last non-empty row is treated as the end of the table. Note that any empty rows preceding it are treated as table rows with NULL values in each cell.

-   **a specified range within a worksheet**

    You can also restrict the “table” to a range within a worksheet by following it with the columns and rows that define its edges. For example:

    ```
                     command                                    result
    execute sql      select * from [customer_sheet$C3:H320]     customers_ds
    ```

    **Note:** With a table defined by a specified range within a worksheet, the last row of the range, or the last non-empty row – whichever comes first – is treated as the end of the table. Note that any empty rows preceding the last non-empty row are treated as table rows with NULL values in each cell.


It's important to note that, for whichever type of table construct you use, TestArchitect treats the first row of the given range as one of column headers. The values in this row are used as the field names of the dynamic data set \(customer\_ds in all the above examples\) that is generated.

## Example

```
create connection string  
```

**Test Lines**

![](/images//Images/bia_database_Excel_connection_string_pgm.png)

**Result**

![](/images//Images/bia_database_Excel_connection_string_res.png)

## Notes

-   Note that ODBC Excel Driver also produces some limitations as long as benefits.\([Learn more](http://support.microsoft.com/kb/178717).\)

**Parent topic:**[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

**Previous topic:**[MySQL Server](/TA_Automation/Topics/aut_app_testing_Database_MySQL_Server.html)

**Next topic:**[Oracle Database](/TA_Automation/Topics/aut_app_testing_Oracle.html)

