--- 
title: "Testing with Oracle Database XE in TA"
linktitle: "Testing with Oracle Database XE"
description: "This topic describes the steps required for testing with Oracle Database XE in TestArchitect."
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_TestAchitect.html
keywords: "Oracle testing, Windows, Express, testing, TestArchitect, Oracle, Oracle testing, Express, testing, TestArchitect, Oracle, Express, database testing, Oracle, Windows, testing, TestArchitect, XE, Oracle testing, XE, Oracle, XE"
---

This topic describes the steps required for testing with Oracle Database XE in TestArchitect.

Ensure that the following requirements are met:

-   Installing and configuring Oracle Database XE. \([Learn more](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_installation_configurations.html).\)
-   Specifying system environment variables. \([Learn more](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_system_environment_variables.html).\)
-   Customizing Oracle configurations files. \([Learn more](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_configurations_files.html).\)

To test with Oracle Database XE in TestArchitect, do the following steps:

1.  In TestArchitect, in order to open an Oracle Database XE connection, it is necessary to define an Oracle connection string.

    **Note:** The nature of a connection string – meaning, the parameters that apply to it – is specific to the type of data source that it targets. More information on connection strings is available from the website [https://www.connectionstrings.com/oracle/](https://www.connectionstrings.com/oracle/).

2.  An Oracle Database XE connection string might contain the following parameters.

    ```
    Driver={DriverName}; DBQ=<host>:<port>/<ORACLE_SID>;Uid=myUsername;Pwd=myPassword;
    ```

    where:

    -   Driver: Name of the ODBC driver specified for the current connection. \([Learn more](https://docs.microsoft.com/en-us/sql/odbc/admin/viewing-drivers).\)

        ![](/images/TA_Automation/Images/OracleXEdriver.png)

    -   Dbq: Host and port information, and the value of ORACLE\_SID that you previously [defined](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_system_environment_variables.html).
    -   Uid: SYSTEM administrative user account.
    -   Pwd: Password for database account specified by username.
3.  In TestArchitect, your action line might resemble the following.

    ![](/images/TA_Automation/Images/oracle_connect_database_pgm_2.png)


When the connection to Oracle database succeeds, you will see the following message in a test result.

![](/images/TA_Automation/Images/oracle_connect_database_res_2.png)



