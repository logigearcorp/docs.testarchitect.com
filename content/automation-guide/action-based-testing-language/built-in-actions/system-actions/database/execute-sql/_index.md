--- 
title: "execute sql"
linktitle: "execute sql"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_execute_sql.html
---
keyword: [execute SQL operations, perform SQL operations, run SQL operations]
---

# execute sql

## Description

Execute an SQL command against the database currently in use.

## Arguments

-   **command**

    SQL query or queries.

-   **result, result2, result3,…, resultN \(not necessarily sequential\)**

    \(Optional\) Names to be assigned to data sets that will hold the results of the query or queries. \(Note: There is no limit to the number of allowed result arguments that may be specified.\)


## Notes

-   The command argument may contain multiple SQL queries, delimited by semicolons.
-   Note that different SQL commands can generate different types of results. \(For instance, an SQL Select query returns a table; row-based commands, such as Insert, Update, and Delete return scalar values; while commands such as Create and Use return null values.\) In each case, however, as long as a corresponding resultN argument is specified, the result is stored to a TestArchitect data set.
-   Execution of this action may result in the return of multiple tables, due either to the presence of multiple queries in the command string, or to the invoking of stored procedures, or both.
-   In the case of multiple queries, each result table is numbered according to the order of execution, and returned to the corresponding result argument, beginning with result, followed by result2, result3, and so on. For example, the first query in the command string, a select query returning two tables, returns its results to the datasets in result and result2, while the next query, an insert query, returns its results to the dataset in result3.
-   In addition to the result, result2, result3, etc., arguments listed above, you can opt to use argument names result0 and result1 to specify data sets. However, data sets specified under these headers, like that of result, receive the first returned table of the query string. \(Hence, if your action line happens to use all three of the argument headers result, result0 and result1, each specifying a different data set name, execution of the action produces three data sets with identical contents.\)
-   Within the returned data sets, the column header names are derived from the column names of the corresponding result tables. \(Refer to [Data sets](bia_Data_set.html) for more information on working with data sets and data set values.\)
-   In general, the creation of a data sets requires that column headers be specified for each column of data. It is possible, however, for an SQL query to return a result table that lacks column names. In such a case, TestArchitect automatically assigns the column headers column 1 , column 2, etc., to the receiving data set.
-   In order to gain access to a value from an output parameter of a stored procedure, select it in the command string. The value may then be obtained from the data set specified by the corresponding result argument.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: Running an SQL command to get a single result

The following example retrieves the `CName` field from the `CTable` table of the `CustDB` database for a `CID` of 102 , then checks the returned value against the expected value, Roberto Dylando.

![](/images//Images/db_CTable.01.png)

**Action Lines**

![](/images//Images/bia_execute_sql_1_pgm.r02.png)

**Result**

![](/images//Images/bia_execute_sql_1_res.r01.png)

## Example - Case 2: Running an SQL command to get multiple results

In this example, the execute sql action is used to execute a stored procedure, rather than a direct SQL query. The stored procedure then executes two SQL queries, returning two result tables, each of which is capture to a data set. The contents of the data sets are then written out to two text files.

The stored procedure looks like this:

![](/images//Images/bia_execute_sql_aut.r01.png)

**Action Lines**

![](/images//Images/bia_execute_sql_2_pgm.r01.png)

**Result**

The resulting text files appear as follows:

July\_shipments.txt

![](/images//Images/bia_execute_sql.July_Shipments.png)

1998\_Beverage\_sales.txt

![](/images//Images/bia_execute_sql.1998_Beverage_sales.png)

**Parent topic:**[Database](/TA_Automation/Topics/bia_Database.html)

**Previous topic:**[use database](/TA_Automation/Topics/bia_use_database.html)

**Next topic:**[disconnect database](/TA_Automation/Topics/bia_disconnect_database.html)

**Related information**  


[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

