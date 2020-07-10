--- 
title: "connect database"
linktitle: "connect database"
description: "Description Open a database connection. Arguments connection string String used to open a database connection. name Connection name (see Notes below). Notes This action is generally invoked as part of ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_connect_database.html
keywords: "built-in actions, connect database, connect database (action), connect a database, attach a database"
---

## {{< expand >}} Description

Open a database connection.

## {{< expand >}} Arguments

-   **connection string**

    String used to open a database connection.

-   **name**

    Connection name \(see Notes below\).


## {{< expand >}} Notes

-   This action is generally invoked as part of a sequence of actions to allow the test to access a data source. \(See [Testing with databases](/automation-guide/application-testing/testing-with-databases/) for more information.\)
-   The value for connection string may be derived by invoking the action [create connection string](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/connect-database). The nature of a connection string – that is, the parameters that apply to it – is specific to the type of data source that it targets. More information on connection strings is available from the website [www.connectionstrings.com/](http://www.connectionstrings.com/).
-   You may establish multiple concurrent connections to different databases using separate invocations of this action. However, only one database connection may be [in use](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/use-database) at any given time.
-   If connecting to a MySQL database:
    -   If any of the associated [execute sql](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/execute-sql) calls are to contain multiple queries in their command arguments, the setting `Option=67108864;` must be included in connection string.
    -   If creating a Unicode-supported connection with the FreeTDS ODBC driver, the setting `ClientCharset=UTF-8;` must be present in connection string.
-   The name that you specify in argument name is assigned to the database connection and is available globally throughout your test run set, to be used by the built-in actions [use database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/use-database) and [disconnect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/disconnect-database).
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:none.

## Example:

The following example illustrates the process of connecting to, and using, a database from within a test. After creating a named connection string with the action [create connection string](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/connect-database), the string is used by this action to connect to the database.

**Action Lines**

![](/images/TA_Automation/Images/bia_connect_database_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_connect_database_res.png)




**Related information**  


[Testing with databases](/automation-guide/application-testing/testing-with-databases/)

