--- 
title: "Removing licenses"
linktitle: "Removing licenses"
description: "Floating (Universal), Node-Locked, and Floating Agent licenses can be removed from the license server. This is useful for clearing out expired licenses key or remove all the licenses added by credential information."
weight: 8
aliases: 
    - /TA_Administration/Topics/LS_TA_revoking.html
keywords: "removing licenses, licenses, removing"
---

Floating \(Universal\), Node-Locked, and Floating Agent licenses can be removed from the license server. This is useful for clearing out expired licenses key or remove all the licenses added by credential information.

License add by key

You cannot use the **Remove License** command as a first step in transferring the administration of licenses to a different license server. The license key that you use to install a license is specific to one machine. Therefore, it is not possible to transfer licenses to another machine.

License add by credential information

You can use the **Remove License** command as a first step in transferring the administration of licenses to a different license server.

To remove a set of licenses:

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  Select the node that represents the license set.

3.  Right-click the node, then select **Remove License**.

    **Fastpath:** Alternatively, click the **Remove License\(s\)** ![](/images/TA_Administration/Images/remove_license_btn.png) button on the toolbar.

    ![](/images/TA_Administration/Images/remove_license_context_menu.png)

{{<restriction>}} License removal does not apply to host-based licenses.

    To remove all the key added by credential information:

    -   Right-click the node, then select **Remove License**.

        **Fastpath:** Alternatively, click the **Remove License\(s\)** ![](/images/TA_Administration/Images/remove_license_btn.png) button on the toolbar.

    ![](/images/TA_Administration/Images/remove_license_account.png)

    -   Re-input your password to **Remove License**.

        ![](/images/TA_Administration/Images/confirm_pwd.png)


.

-   **License add by key:**

    The set of licenses within the node, and the node itself, is removed from the license server.

-   License add by credential information

    The entire license keys relate to the account will be removed.


{{<tip>}} This operation is reversible. If the set of licenses has not yet expired, you can reuse and reinstall the same licenses that you had previously. However, you may only reinstall those licenses to the same license server.



