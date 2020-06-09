--- 
title: "Testing with databases"
linktitle: "Testing with databases"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Database_apps.html
---

Using SQL-conversant external data sources in your tests.

## Overview

Many applications today, whether desktop, mobile or web-based, involve the storage and retrieval of structured data. And an ever-growing number of applications rely on external database management systems \(DBMSs\) to manage that data. Most of these DBMSs “speak” Structured Query Language \(SQL\), and are supported by a wide range of drivers, known as ODBC drivers, available across platforms. This allows the host applications to take advantage of a standard language and interface for storing and retrieving records, running queries for various sorts of information, and manipulating the stored data.

While applications can be tested through their GUI front ends, it is often important, for purposes of efficiency and well as test coverage, for an automated test system to be able to directly interface with an AUT's database. Data records can be retrieved by the test system for inspection, added to the database to ensure that the AUT responds correctly, or manipulated in various ways.

TestArchitect offers a set of actions that allow your tests to connect to and interact with databases of SQL-conversant DBMS systems.

An additional benefit of these actions is that your test can use a database to supply its test data, rather than relying on internal data sets or external text files. Databases are often a preferable choice for the storage and generation of test data.

**Note:** In order to query a database, you must be familiar with SQL commands. A variety of good references and tutorials on SQL are available, including this [SQL Tutorial](http://www.w3schools.com/sql/) from W3Schools.

## Prerequisites

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

1.  [Database use cases](/TA_Automation/Topics/aut_app_testing_Database_use_cases.html)  
TestArchitect offers a number of built-in actions and automation methods that allow for tests to connect to, and query, SQL-compliant databases. This allows for an expanded form of data-driven testing beyond that which relies on TestArchitect's proprietary data sets. It also expands the possibilities for performing tests on database-dependent applications. This topic presents a few of the typical test configurations involving SQL-based databases, along with specific examples.
2.  [Microsoft SQL Server](/TA_Automation/Topics/aut_app_testing_Database_MSSQL_Server.html)  
Information specific to testing with Microsoft SQL Server
3.  [MySQL Server](/TA_Automation/Topics/aut_app_testing_Database_MySQL_Server.html)  
Information specific to testing with MySQL Server
4.  [Microsoft Excel](/TA_Automation/Topics/aut_app_testing_Database_Excel_Server.html)  
Information specific to testing with Microsoft Excel
5.  [Oracle Database](/TA_Automation/Topics/aut_app_testing_Oracle.html)  
Information specific to testing with Oracle Database.

**Parent topic:**[Application testing](/TA_Automation/Topics/aut_app_testing.html)

**Next topic:**[Testing desktop applications](/TA_Automation/Topics/aut_app_testing_desktop.html)

