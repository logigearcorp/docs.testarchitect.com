--- 
title: "**Configuring the ODBC Driver on macOS to connect to Microsoft SQL Server**"
linktitle: "**Configuring the ODBC Driver on macOS to connect to Microsoft SQL Server**"
description: "Explain additional configurations on macOS to connect to Microsoft SQL Server."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_testing_database_Mac_setup_MSSQL.html
keywords: "Microsoft SQL, configuring ODBC driver, macOS, configuration, Microsoft SQL, ODBC driver, macOS"
---

Explain additional configurations on macOS to connect to Microsoft SQL Server.

To set up macOS machines to connect to Microsoft SQL Server, do the following:

1.  On your macOS machine, install [Homebrew.](http://brew.sh/)

    Homebrew is a package manager for macOS.

2.  Install the ODBC driver, which is [FreeTDS](http://www.freetds.org/).

    FreeTDS is a set of libraries that allows your programs to natively talk to Microsoft SQL Server.

    -   On macOS 10.11, 10.10: At a Terminal prompt, execute the following command.

        ```
        brew install freetds --with-libiodbc
        ```

3.  Modify your odbcinst.ini file, located at /Users/test/Library/ODBC/, by adding the following line.

    ```
    [SQL Server]
    Driver = /usr/local/Cellar/freetds/1.00.21/lib/libtdsodbc.so
    ```



