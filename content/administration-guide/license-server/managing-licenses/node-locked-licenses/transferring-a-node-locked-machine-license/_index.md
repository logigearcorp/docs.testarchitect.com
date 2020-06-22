--- 
title: "Transferring a node-locked machine license"
linktitle: "Transferring a node-locked machine license"
description: "Within certain limits, you are free to transfer a node-locked license from one machine to another, as you might wish to do when upgrading to a new test machine."
weight: 2
aliases: 
    - /TA_Administration/Topics/LS_TA_changing_node-locked_machine.html
keywords: "licenses, node-locked, transferring to another machine, node-locked, changing machines"
---

Within certain limits, you are free to transfer a node-locked license from one machine to another, as you might wish to do when upgrading to a new test machine.

Ensure the following conditions are met before transferring a node-locked machine license:

-   The node-locked license you want to transfer to another machine has not expired.
-   The node-locked license is not within the lock-in period.
-   The machine you want to transfer the node-locked license to must not be on any assigned-license list.

To transfer a node-locked license to another machine:

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Right-click a node-locked machine that you want to change and select **Change Machine** on the context menu.

    ![](/images/TA_Administration/Images/LS_TA_Change_machine_context.png)

3.  On the Change Machine dialog box, enter the full host name or IP address of the machine to which you want to transfer the license, and select **Add**.

{{<note>}} If you use the full host name of the machine, ensure that the machine is connected to your working domain.

    ![](/images/TA_Administration/Images/Change_machine_dlg.png)


{{<important>}} Once you have successfully assigned or reassigned a node-locked license to a new machine, you are granted a 24-hour “grace” period, during which you are free to re-transfer the license to another machine. After the 24-hour grace period, a 72-hour lock-in period kicks in. For the duration of the lock-in period, you are restricted from transferring the node-locked license. Upon expiration of the lock-in period, you are once again free to transfer the license. This 24/72-hour policy applies on every subsequent occasion that the node-locked license is transferred.



