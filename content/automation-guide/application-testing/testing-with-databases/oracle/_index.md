--- 
title: "Oracle Database"
linktitle: "Oracle"
description: "Information specific to testing with Oracle Database."
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle.html
keywords: "Oracle testing, Oracle, database testing, supported Oracle editions, versions"
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

1.  [create connection string](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/create-connection-string): Generate a connection string for a specified database on a given host.
2.  [connect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/connect-database): Open a database connection using a connection string.
3.  [use database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/use-database): Specify a database against which the ensuing SQL action lines are to be applied.
4.  [execute sql](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/execute-sql): Execute an SQL command against the currently in-use database; optionally, store returned data into one or more data sets.
5.  [disconnect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/disconnect-database): Close the database connection.

## Example

```
connect database 
```

**Action Lines**

![](/images/TA_Automation/Images/oracle_connect_database_pgm_1.png)

1.  [Testing with Oracle on Windows machines](/automation-guide/application-testing/testing-with-databases/oracle/windows-machines/)  
Information specific to testing with Oracle Database on Windows machines.



