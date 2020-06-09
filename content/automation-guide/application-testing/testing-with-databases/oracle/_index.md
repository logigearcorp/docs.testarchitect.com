--- 
title: "Oracle Database"
linktitle: "Oracle"
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle.html
---

Information specific to testing with Oracle Database.

## Introduction

Oracle Database is the database designed for enterprise grid computing, the most flexible and cost effective way to manage information and applications. Enterprise grid computing creates large pools of industry-standard, modular storage and servers. With this architecture, each new system can be rapidly provisioned from the pool of components. \([Learn more](https://docs.oracle.com/cd/B19306_01/server.102/b14220/intro.htm).\)

## Supported Oracle Database product family

-   Oracle Database Enterprise Edition
    -   12c Release 2
    -   11g Release 2
-   Oracle Database Express Edition
    -   11g Release 2

## Actions

TestArchitect provides the following built-in actions for working with SQL-compliant databases. They are listed in the typical order of their workflow:

1.  [create connection string](create_connection_string.html): Generate a connection string for a specified database on a given host.
2.  [connect database](connect_database.html): Open a database connection using a connection string.
3.  [use database](use_database.html): Specify a database against which the ensuing SQL action lines are to be applied.
4.  [execute sql](execute_sql.html): Execute an SQL command against the currently in-use database; optionally, store returned data into one or more data sets.
5.  [disconnect database](disconnect_database.html): Close the database connection.

## Example

```
connect database 
```

**Action Lines**

![](/images//Images/oracle_connect_database_pgm_1.png)

1.  [Testing with Oracle on Windows machines](/TA_Automation/Topics/aut_app_testing_Oracle_Windows.html)  
Information specific to testing with Oracle Database on Windows machines.

**Parent topic:**[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

**Previous topic:**[Microsoft Excel](/TA_Automation/Topics/aut_app_testing_Database_Excel_Server.html)

