--- 
title: "connect database"
linktitle: "connect database"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_connect_database.html
---
keyword: [connect a database, attach a database]
---

# connect database

## Description

Open a database connection.

## Arguments

-   **connection string**

    String used to open a database connection.

-   **name**

    Connection name \(see Notes below\).


## Notes

-   This action is generally invoked as part of a sequence of actions to allow the test to access a data source. \(See [Testing with databases](aut_app_testing_Database_apps.html) for more information.\)
-   The value for connection string may be derived by invoking the action [create connection string](connect_database.html). The nature of a connection string – that is, the parameters that apply to it – is specific to the type of data source that it targets. More information on connection strings is available from the website [www.connectionstrings.com/](http://www.connectionstrings.com/).
-   You may establish multiple concurrent connections to different databases using separate invocations of this action. However, only one database connection may be [in use](use_database.html) at any given time.
-   If connecting to a MySQL database:
    -   If any of the associated [execute sql](execute_sql.html) calls are to contain multiple queries in their command arguments, the setting `Option=67108864;` must be included in connection string.
    -   If creating a Unicode-supported connection with the FreeTDS ODBC driver, the setting `ClientCharset=UTF-8;` must be present in connection string.
-   The name that you specify in argument name is assigned to the database connection and is available globally throughout your test run set, to be used by the built-in actions [use database](use_database.html) and [disconnect database](disconnect_database.html).
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](remove_double_quotes_from_cells.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example:

The following example illustrates the process of connecting to, and using, a database from within a test. After creating a named connection string with the action [create connection string](connect_database.html), the string is used by this action to connect to the database.

**Action Lines**

![](/images//Images/bia_connect_database_pgm.png)

**Result**

![](/images//Images/bia_connect_database_res.png)

**Parent topic:**[Database](/TA_Automation/Topics/bia_Database.html)

**Previous topic:**[create connection string](/TA_Automation/Topics/bia_create_connection_string.html)

**Next topic:**[use database](/TA_Automation/Topics/bia_use_database.html)

**Related information**  


[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

