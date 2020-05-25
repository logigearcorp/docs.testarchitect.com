--- 
title: "Upgrading node-locked into floating license keys"
linktitle: "Upgrading node-locked into floating license keys"
aliases: 
    - /TA_Administration/Topics/adm_upgrading_node_locked_to_floating_licenses.html
---
# Upgrading node-locked into floating license keys {#task_ezv_hbm_4z .task}

Node locked license keys by convention are not convertible into floating license keys. However, it is possible to upgrade node-locked into floating license keys, when you request a new upgrade key from LogiGear sales representative.

When you'd like to upgrade your node-locked license into floating license, you are at first required to contact LogiGear sales representative using the Request TestArchitect Licenses dialog box to obtain an upgrade key. \([Learn more](LS_TA_requesting_key.md#choice.upgrade_license).\)

An upgrade key received from the LogiGear sales team is added to your license server from the License Server Control Panel.

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](../Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](../Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  On the toolbar, click the **Add License** ![](../Images/Add_license_btn.png) button.

3.  Open the email containing the license key you received from the LogiGear sales team, select all of the key text, and copy the key text to the clipboard \(press Ctrl+C\).

4.  On the Add License dialog box, select **Paste from Clipboard** to paste the key text from the clipboard into the **License Key** field, and then click **OK**.

    ![](../Images/licenseserver_11.png)

    The Upgrade Node-Locked to Floating license dialog box appears.

    ![](../Images/upgrade_NL_to_FL_dlg.png)

5.  Depending on the number of upgraded node-locked licenses you purchased, in the dialog box, select the respective number of machines to perform the upgrade, and then click **Upgrade**.

    The confirmation dialog box appears.

    ![](../Images/upgrade_NL_to_FL_confirmation_dlg.png)

6.  In the dialog box, click **OK**.


![](../Images/upgrade_NL_to_FL.png)

**Parent topic:**[Managing licenses](../../TA_Administration/Topics/LS_TA_managing_licenses.html)

**Previous topic:**[Node-locked licenses](../../TA_Administration/Topics/LS_TA_node-locked_licenses.html)

**Next topic:**[Reclaiming a floating license from a host](../../TA_Administration/Topics/LS_TA_reclaiming.html)

