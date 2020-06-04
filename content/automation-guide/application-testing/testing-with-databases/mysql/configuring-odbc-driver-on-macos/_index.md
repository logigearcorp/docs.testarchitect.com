--- 
title: "Configuring the ODBC Driver on macOS to connect to MySQL Server"
linktitle: "Configuring ODBC Driver on macOS"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_testing_database_Mac_setup_MySQL.html
---

Explain additional configurations on macOS to connect to MySQL Server.

To set up macOS machines to connect to MySQL Server, do the following:

1.  On your macOS machine, install [Homebrew.](http://brew.sh/)

    Homebrew is a package manager for macOS.

2.  Download and install Connector/ODBC at [here](http://dev.mysql.com/downloads/connector/odbc/).

3.  Modify your odbcinst.ini file, located at /Users/test/Library/ODBC/, by adding the following line.

    ```
    [MySQL ODBC 5.3 Unicode Driver]
    Driver = /usr/local/lib/libmyodbc5w.so
    ```


**Parent topic:**[MySQL Server](/TA_Automation/Topics/aut_app_testing_Database_MySQL_Server.html)

