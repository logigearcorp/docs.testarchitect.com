--- 
title: "Assigning a node-locked license"
linktitle: "Assigning a node-locked license"
weight: 1
aliases: 
    - TA_Administration/Topics/LS_TA_assigning_node-locked_license.html
---

Assigning a node-locked license binds that license to a machine for a given period of time.

Ensure that you have an unallocated node-locked license available to assign to a machine and that the machine to which you want to assign the node-locked license is not on any assigned-license list.

To assign a node-locked license to a machine:

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Right-click an available node-locked key beneath the **Node-Locked License** node and select **Add Machine**.

    ![](/images/TA_Administration/Images/LS_TA_Add_machine_context.png)

3.  On the Add Machine dialog box, enter the full host name or IP address of the machine you want to assign the node-locked license to and select **Add**.

    ![](/images/TA_Administration/Images/LS_TA_Add_machine.png)

    **Note:** If you use the full host name of the machine, ensure that the machine is connected to your working domain.

    **Note:** **Using host name vs. IP address:** The means of identification \(host name or IP address\) used to assign a node-locked license to a machine is used in all future license validations for that machine. \(Hence, for example, in an environment in which IP addresses are assigned to machines dynamically, using the machine’s host name when assigning it a node-locked license avoids future validation issues.\)

    The Add Machine dialog box has two panels, the License Information panel and the License Assignment panel.

    -   The License Information panel displays detailed information about the active key.
    -   The License Assignment panel shows which machine the license has been issued to and any open slots for additional licenses, if available.
    **Important:** A node-locked license assigned to a machine cannot be removed. The license can only be transferred to another machine after the lock-in period has expired.

    **Important:** Once you have successfully assigned or reassigned a node-locked license to a new machine, you are granted a 24-hour “grace” period, during which you are free to re-transfer the license to another machine. After the 24-hour grace period, a 72-hour lock-in period kicks in. For the duration of the lock-in period, you are restricted from transferring the node-locked license. Upon expiration of the lock-in period, you are once again free to transfer the license. This 24/72-hour policy applies on every subsequent occasion that the node-locked license is transferred.


If the machine that you are requesting the node-locked license for is not on any assigned-license list, the license server issues a node-locked license to it, and the number of available licenses decreases accordingly.

**Parent topic:**[Node-locked licenses](../../TA_Administration/Topics/LS_TA_node-locked_licenses.md)

**Next topic:**[Transferring a node-locked machine license](../../TA_Administration/Topics/LS_TA_changing_node-locked_machine.md)

