--- 
title: "Testing with Oracle Database Enterprise in TestArchitect"
linktitle: "Testing with Oracle Database Enterprise"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Windows_Enterprise_TestAchitect.html
---
# Testing with Oracle Database Enterprise in TestArchitect {#task_jvp_j2c_5bb .task}

This topic describes the steps required for testing with Oracle Database Enterprise in TestArchitect.

Ensure that you installed and configured Oracle Database. \([Learn more](aut_app_testing_Oracle_Windows_Enterprise_installing_configuring_clients.html).\)

To test with Oracle Database XE in TestArchitect, do the following steps:

1.  In TestArchitect, in order to open an Oracle database connection, it is necessary to define an Oracle connection string.

    **Note:** The nature of a connection string – meaning, the parameters that apply to it – is specific to the type of data source that it targets. More information on connection strings is available from the website [https://www.connectionstrings.com/oracle/](https://www.connectionstrings.com/oracle/).

2.  A basic Oracle connection string should contain the following parameters.

    ```
    Driver={DriverName};Dbq=myTNSServiceName;Uid=myUsername;Pwd=myPassword;
    ```

    where:

    -   Driver: Name of the ODBC driver specified for the current connection. \([Learn more](https://docs.microsoft.com/en-us/sql/odbc/admin/viewing-drivers).\)

        ![](../Images/oracle_drivers.png)

    -   Dbq: The location of the Oracle database from which the ODBC driver will retrieve data.

        ![](../Images/oracle_dbq.png)

    -   Uid: Username with which to log on to database.
    -   Pwd: Password for database account specified by username.
3.  In TestArchitect, your action line might resemble the following.

    ![](../Images/oracle_connect_database_pgm_1.png)


When the connection to Oracle database succeeds, you will see the following message in a test result.

![](../Images/oracle_connect_database_res_1.png)

**Parent topic:**[Oracle Database Enterprise Edition](../../TA_Automation/Topics/aut_app_testing_Oracle_Windows_Enterprise.html)

**Previous topic:**[Installing and configuring Oracle Database Enterprise on client machines](../../TA_Automation/Topics/aut_app_testing_Oracle_Windows_Enterprise_installing_configuring_clients.html)

