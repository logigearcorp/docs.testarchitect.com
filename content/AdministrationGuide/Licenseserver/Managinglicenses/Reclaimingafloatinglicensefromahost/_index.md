--- 
title: "Reclaiming a floating license from a host"
linktitle: "Reclaiming a floating license from a host"
weight: 6
aliases: 
    - /TA_Administration/Topics/LS_TA_reclaiming.html
---
# Reclaiming a floating license from a host {#TA_reclaiming_host-based_licenses .task}

It may sometimes be necessary to reclaim a floating license from a host and return the license to the license pool.This situation can arise when a floating license is not available for request and a host holding a floating license is inactive.

To reclaim a license and return it to the license pool:

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](../Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](../Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Right-click the node representing the machine whose license is to be reclaimed, and select **Rescind License**.

    **Important:** This option is only available for nodes in the **Floating License** and **Floating Agent License** trees.

    ![](../Images/Revoke_license.png)

3.  On the Rescind License dialog box, select **Yes**.

    ![](../Images/Revoke_license_confirmation.png)


The floating license is reclaimed and the corresponding **Issued** and **Available** license counts are increased by one.

**Parent topic:**[Managing licenses](../../TA_Administration/Topics/LS_TA_managing_licenses.html)

**Previous topic:**[Upgrading node-locked into floating license keys](../../TA_Administration/Topics/adm_upgrading_node_locked_to_floating_licenses.html)

**Next topic:**[Transferring host-based licenses](../../TA_Administration/Topics/LS_TA_redirecting.html)

