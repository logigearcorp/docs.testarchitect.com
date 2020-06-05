--- 
title: "ExecSqlCommand"
linktitle: "ExecSqlCommand"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_Execute_Sql_Command.html
---
keyword: [execsqlcommand, abtdatabase execsqlcommand, execute sql commands, sql statement execution, run sql query]
---

# ExecSqlCommand

## Syntax

`TADBResult ExecSqlCommand(string command, int index)`

## Description

Execute one or more SQL commands against the AbtDatabase object.

## Parameters

-   **command**

    SQL query string.

-   **index**

    Index specifying query result to be returned. \(See Notes.\)


## Return Value

A [TADBResult](abt_TADBResult.html) object representing a table or scalar value; or null, if no result is returned or execution is unsuccessful.

## Notes

-   This method is currently supported only by the C\# harness.
-   It is possible for multiple tables and or single scalar values to be produced as results of the SQL query \(or queries\) of the command string. However, ExecSQLCommand\(\) is limited to returning only one such query result. Use the index parameter to specify the result to be returned. Results are indexed starting at 1, in the order in which they are produced by the command string.

**Parent topic:**[AbtDatabase](/TA_Automation/Topics/abt_Database.html)

**Previous topic:**[Disconnect](/TA_Automation/Topics/abt_Disconnect.html)

