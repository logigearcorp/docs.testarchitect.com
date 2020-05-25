--- 
title: "Installing and configuring Oracle Database Enterprise on client machines"
linktitle: "Installing and configuring Oracle Database Enterprise"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Windows_Enterprise_installing_configuring_clients.html
---
# Installing and configuring Oracle Database Enterprise on client machines {#task_cd4_h2c_5bb .task}

This topic describes the steps required for installing and configuring Oracle Database Enterprise on client machines.

1.  On your local client machines, download and [install](https://docs.oracle.com/cd/E11882_01/install.112/e47959/install.htm#NTCLI1302) Oracle Database Client.

    1.  You can download Oracle Database Client at [http://www.oracle.com/technetwork/database/enterprise-edition/downloads/index.html](http://www.oracle.com/technetwork/database/enterprise-edition/downloads/index.html)

    2.  During installation, it is highly recommended that you do the installation type of Administrator, which enables applications to connect to an Oracle database on the local system or on a remote system. It also provides tools that let you administer an Oracle database.

    -   Oracle 11g Release 2: [Learn more](http://docs.oracle.com/cd/E11882_01/install.112/e47959/overview.htm#NTCLI1241).

        ![](../Images/oracle_admin_11.png)

    -   Oracle 12c Release 2: [Learn more](https://docs.oracle.com/database/122/NTCLI/oracle-database-client-installation-types.htm#NTCLI-GUID-C8EE50B6-CD75-44C7-90C5-5D3105EBCECE).

        ![](../Images/oracle_admin_12.png)

2.  After Oracle Database Client’s installation, configure the following network components via Oracle Net Configuration Assistant.

    1.  Open Oracle Net Configuration Assistant.

        -   Oracle 11g Release 2: [Learn more](https://docs.oracle.com/cd/B28359_01/network.111/b28316/admintools.htm#NETAG218).
        -   Oracle 12c Release 2: [Learn more](https://docs.oracle.com/database/122/NTCLI/using-oracle-net-configuration-assistant.htm#NTCLI-GUID-3BC7445B-A8B7-4248-84F1-60D9FBACF460).
    2.  Configure the following network components.

        |Option|Description|
        |------|-----------|
        |Listener configuration|Click to create modify, delete, or rename a listener.|
        |Local Net Service Name configuration|Click to create, modify, delete, rename, or test connectivity of a connect descriptor stored in a local tnsnames.ora file.|
        | | |

        For detailed instructions:

        -   Oracle 11g Release 2: Please read the [Using Oracle Net Configuration Assistant](https://docs.oracle.com/cd/E11882_01/install.112/e47959/install.htm#NTCLI1281) section.
        -   Oracle 12c Release 2: Read [here](https://docs.oracle.com/database/122/NTCLI/using-oracle-net-configuration-assistant.htm#NTCLI-GUID-3BC7445B-A8B7-4248-84F1-60D9FBACF460)
        1.  Listener configuration:

            ![](../Images/oracle_listener_config.png)

        2.  Local Net Service Name configuration:

            ![](../Images/Oracle_local_Net_Service_Name_configuration.png)

3.  Add an Oracle data source via ODBC Data Source Administrator.

    1.  On your local machines, [open](https://msdn.microsoft.com/en-us/eea94d94-f53b-4289-ae75-9ccccde15333) the ODBC Data Source Administrator dialog box.

    2.  In the ODBC Data Source Administrator dialog box, select the **System DSN** tab, and then click the **Add** button to add an Oracle data source.

        For detailed instructions, read **Configuring the Data Source** \> **To configure or add an Oracle data source** at [here](https://docs.oracle.com/database/122/ADFNS/odbc-driver.htm#ADFNS1163).

        ![](../Images/oracle_data_source_add.png)

        **Note:** If there are no options in the **TNS Service Name** drop-down, you can add a system environment variable with following value.

        ```
        set TNS_ADMIN=%ORACLE HOME%\network\admin
        ```

    The new Oracle data source now appears in the ODBC Data Source Administrator dialog box, under the **System DSN** tab.

    ![](../Images/oracle_systemDSN.png)


**Parent topic:**[Oracle Database Enterprise Edition](../../TA_Automation/Topics/aut_app_testing_Oracle_Windows_Enterprise.html)

**Next topic:**[Testing with Oracle Database Enterprise in TestArchitect](../../TA_Automation/Topics/aut_app_testing_Oracle_Windows_Enterprise_TestAchitect.html)

