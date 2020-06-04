--- 
title: "Specifying system environment variables for ORACLE\\_HOME and ORACLE\\_SID"
linktitle: "Specifying system environment variables"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_system_environment_variables.html
---

This topic describes the steps required for specifying system environment variables.

1.  On the Desktop or Start menu \(depending on the Windows version\), right-click **My Computer**, and then select **Properties**.

2.  In Properties, click the **Advanced** tab.

3.  Click **Environment Variables**.

4.  Under **System Variables**, click **New**.

5.  For **Variable name**, type ORACLE\_HOME.

6.  For **Variable value**, type the path to the Oracle binaries.

    For example: C:\\oraclexe\\app\\oracle\\product\\11.2.0\\server

    ![](/images//Images/oracleHome_var.png)

7.  Click **OK**.

8.  Click **New** again.

9.  For **Variable name**, type ORACLE\_SID.

10. For **Variable value**, type the instance name.

    For example: XE

    ![](/images//Images/oracleSID_var.png)

11. Click **OK**.


**Parent topic:**[Oracle Database Express Edition](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE.html)

**Previous topic:**[Installing and configuring Oracle Database XE](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_installation_configurations.html)

**Next topic:**[Customizing Oracle configurations files](/TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_configurations_files.html)

