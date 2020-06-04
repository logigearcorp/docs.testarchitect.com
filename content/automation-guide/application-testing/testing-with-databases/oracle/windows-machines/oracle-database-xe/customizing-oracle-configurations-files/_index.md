--- 
title: "Customizing Oracle configurations files"
linktitle: "Customizing Oracle configurations files"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_configurations_files.html
---

This topic describes the steps required for customizing Oracle configurations files.

1.  Configure the Oracle Net Listener configuration file \([listener.ora](https://docs.oracle.com/cd/B28359_01/network.111/b28317/listener.htm#NETRF008)\).

    1.  Open the listener.ora file.

        By default, listener.ora is located in the %ORACLE\_HOME%\\network\\admin directory.

    2.  Embed the following parameters under the SID\_LIST\_LISTENER parameter.

        ```
         (SID_DESC =
              (GLOBAL_DBNAME=XE)	
              (SID_NAME = XE)
              (ORACLE_HOME = (Oracle_binaries_path))
          )
        ```

        For example:

        ```
        (SID_DESC =
              (GLOBAL_DBNAME=XE)	
              (SID_NAME = XE)
              (ORACLE_HOME = C:\oraclexe\app\oracle\product\11.2.0\server)
        )
        ```

        ![](/images//Images/oracle_listener_ora.png)

2.  Configure Local Naming Parameters \([tnsnames.ora](https://docs.oracle.com/cd/B28359_01/network.111/b28317/tnsnames.htm#NETRF007)\).

    1.  Open the tnsnames.ora file.

        By default, tnsnames.ora is located in the %ORACLE\_HOME%\\network\\admin directory.

    2.  Add the following parameters.

        ```
        LISTENER_XE = 
           (ADDRESS = 
              (PROTOCOL =(protocol_address_information))
              (HOST = (host_information))
              (PORT = (port_information))
           ) 
        ```

        For example:

        ```
        LISTENER_XE = (ADDRESS = (PROTOCOL = TCP)(HOST = lgvn14740.logigear.com)(PORT = 1521))
        ```

        ![](/images//Images/oracle_tsname.ora.png)

3.  Restart all Oracle services related to the corresponding database by using [Windows Services Manager](http://www.thewindowsclub.com/open-windows-services).


**Parent topic:**[Oracle Database Express Edition](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE.html)

**Previous topic:**[Specifying system environment variables for ORACLE\_HOME and ORACLE\_SID](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_system_environment_variables.html)

**Next topic:**[Testing with Oracle Database XE in TA](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_TestAchitect.html)

