--- 
title: "create connection string"
linktitle: "create connection string"
description: "Description Generate a connection string to a specified database . Arguments variable (Optional) Name of variable to receive the returned connection string. driver (Optional) Name of the ODBC driver ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_create_connection_string.html
keywords: "built-in actions, create connection string, create connection string (action), create a connection string"
---

## Description

Generate a connection string to a specified database.

## Arguments

-   **variable**

    \(Optional\) Name of variable to receive the returned connection string.

-   **driver**

    \(Optional\) Name of the ODBC driver specified for the current connection.

-   **host**

    \(Use only for DBMS sources, not Excel\) DBMS server hostname or IP address. \(Optionally, an instance name may also be appended, preceded with a backslash. Example: myhost\\myinstance.\)

-   **port**

    \(Optional for DBMS sources; not used for Excel\) Port of DBMS server. \(Defaults: MSSQL use port 1433; MySQL uses port 3306.\)

-   **database name**

    \(Optional\) Name of database to be connected to.

-   **username**

    \(Optional\) Username with which to log on to database.

-   **password**

    \(Optional\) Password for database account specified by username.

-   **others**

    \(Optional\) Other connection string parameter\(s\) applicable to the host DBMS, in the form of key-value pairs separated by semicolons.


## Notes

-   This action is generally invoked as part of a sequence of actions to allow the test to access a data source. \(See [Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html) for more information.\)
-   The nature of a connection string – that is, the parameters that apply to it – is specific to the type of data source that it targets. More information on connection strings is available from the website [www.connectionstrings.com/](http://www.connectionstrings.com/).
-   If connecting to a MySQL database:
    -   If any of the associated [execute sql](/TA_Automation/Topics/bia_execute_sql.html) calls are to contain multiple queries in their command arguments, the others argument must include the setting `Option=67108864;`.
    -   If creating a Unicode-supported connection with the FreeTDS ODBC driver, others must contain `ClientCharset=UTF-8;`.
-   Use of a data source name \(DSN\) is supported. DSNs may be specified in the others argument with the following formats:

    -   **User and System DSNs:** `DSN=myDsn;`
    -   **File DSNs:** `FILEDSN=c:\myDsnFile.dsn;`
    \(Refer to [Creating a Data Source Name \(DSN\) in Windows](https://www.websense.com/content/support/library/data/v80/help/windows%20dsn.aspx) for further details.\)

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example

The following example illustrates the process of connecting to, and using, a database from within a test, of which creating a connection string is the first step.

**Action Lines**

![](/images/TA_Automation/Images/bia_create_connection_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_create_connection_res.png)



**Related information**  


[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

