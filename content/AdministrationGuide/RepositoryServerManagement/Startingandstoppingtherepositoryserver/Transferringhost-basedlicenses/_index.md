--- 
title: "Transferring host-based licenses"
linktitle: "Transferring host-based licenses"
aliases: 
    - /TA_Administration/Topics/LS_TA_redirecting.html
---
# Transferring host-based licenses {#TA_transferring_host-based_licenses .task}

A license dedicated to a particular host can be reassigned to a different host as needed.

To transfer a host-based license to another machine:

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](../Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](../Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Right-click a node representing a dedicated host-based license.

    **Important:** This node is in either the **Universal License** or **Agent License** subtree of the **Host-based License** tree.

    ![](../Images/transfer_host_based_license.png)

3.  Select **Transfer Host License**.

4.  In the Change Host-Based License IP dialog box, enter the full host name or IP address of the new host to which you want to grant a dedicated license, then select **OK**.

    **Note:** If you use the full host name of the machine, ensure that the machine is connected to your working domain.

    ![](../Images/change_host_based_license.png)


The host-based license is rescinded from the original host and is now available for the new host to use.

**Parent topic:**[Managing licenses](../../TA_Administration/Topics/LS_TA_managing_licenses.html)

**Previous topic:**[Reclaiming a floating license from a host](../../TA_Administration/Topics/LS_TA_reclaiming.html)

**Next topic:**[Removing licenses](../../TA_Administration/Topics/LS_TA_revoking.html)

