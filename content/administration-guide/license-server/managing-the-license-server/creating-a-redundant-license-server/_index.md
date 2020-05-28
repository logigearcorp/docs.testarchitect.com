--- 
title: "Creating a redundant license server"
linktitle: "Creating a redundant license server"
weight: 3
aliases: 
    - TA_Administration/Topics/LS_TA_managing_creating_redundant_license.html
---

A redundant license server can be set up as a backup for an existing license server. When your primary license server goes down, the redundant license server is automatically and seamlessly activated.

You should create a redundant license server from a host machine on the network that is not already an active license server.

On the machine that is to host the redundant license server:

1.  If not already present on the machine, install the TestArchitect License Server application. \([Learn more](../../TA_InstallationGuide/DITA_source/Topics/inst_LS.md).\)

2.  Start the License Server Control Panel. \([Learn more](LS_TA_managing_start_stop.md).\)

3.  Click the **Serve as Redundant License Server** ![](/images/TA_Administration/Images/admin_icn_Redundant_License_server.png) button on the toolbar.

    **Note:** Alternatively, select **Tools** \> **Serve as Redundant License Server**.

4.  In the Register to Primary License Server dialog box, enter the full host name or IP address of the primary license server for which this license server will act as backup in the **IP** text box.

    **Note:** If you use the full host name of the machine, ensure that the machine is connected to your working domain.

5.  Use the default port number for the redundant license server, or overwrite the port value with a different value.

    ![](/images/TA_Administration/Images/adm_configure_RLS.png)

6.  Click **OK**.

    If successful, the status bar displays the name and IP address of the primary license server.

    ![](/images/TA_Administration/Images/Redundant_LS.png)


**Remember:**

-   A 72-hour continuous operation policy applies to the redundant license server. Once the redundant server is activated by the failure or absence of the primary license server, a 72-hour limit is imposed before the redundant server's operation is blocked. Hence it is important that the primary server be restored to operation within the 72-hour time limit.
-   Should you be unsuccessful in restoring your primary license server within the imposed time limit, you may contact LogiGear to request another 72-hour period of redundant license server operation. \([Learn more](adm_unblocking_redundant_license_server.md).\)

**Parent topic:**[Managing the license server](../../TA_Administration/Topics/LS_TA_managing_license_server.md)

**Previous topic:**[Changing the license server port number](../../TA_Administration/Topics/LS_TA_managing_changing_port.md)

**Next topic:**[Unblocking a redundant license server](../../TA_Administration/Topics/adm_unblocking_redundant_license_server.md)

**Related information**  


[Default port numbers and port ranges](../../TA_Administration/Topics/adm_port_number_port_ranges.md)

