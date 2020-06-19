--- 
title: "Specifying system environment variables"
linktitle: "Specifying system environment variables for ORACLE\\_HOME and ORACLE\\_SID"
description: "This topic describes the steps required for specifying system environment variables."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Windows_XE_system_environment_variables.html
keywords: "Oracle testing, Windows, Express, system environment variables, Oracle, system environment variables, Oracle testing, Express, system environment variables, Oracle, Express, database testing, Oracle, Windows, XE, Oracle testing, XE, Oracle, XE, Oracle, Windows, system environment variables"
---

This topic describes the steps required for specifying system environment variables.

1.  On the Desktop or Start menu \(depending on the Windows version\), right-click **My Computer**, and then select **Properties**.

2.  In Properties, click the **Advanced** tab.

3.  Click **Environment Variables**.

4.  Under **System Variables**, click **New**.

5.  For **Variable name**, type ORACLE\_HOME.

6.  For **Variable value**, type the path to the Oracle binaries.

    For example: C:\\oraclexe\\app\\oracle\\product\\11.2.0\\server

    ![](/images/TA_Automation/Images/oracleHome_var.png)

7.  Click **OK**.

8.  Click **New** again.

9.  For **Variable name**, type ORACLE\_SID.

10. For **Variable value**, type the instance name.

    For example: XE

    ![](/images/TA_Automation/Images/oracleSID_var.png)

11. Click **OK**.





