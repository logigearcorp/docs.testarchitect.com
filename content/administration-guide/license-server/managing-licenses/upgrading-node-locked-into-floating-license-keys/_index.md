--- 
title: "Upgrading node-locked into floating license keys"
linktitle: "Upgrading node-locked into floating license keys"
weight: 5
aliases: 
    - /TA_Administration/Topics/adm_upgrading_node_locked_to_floating_licenses.html
---

Node locked license keys by convention are not convertible into floating license keys. However, it is possible to upgrade node-locked into floating license keys, when you request a new upgrade key from LogiGear sales representative.

When you'd like to upgrade your node-locked license into floating license, you are at first required to contact LogiGear sales representative using the Request TestArchitect Licenses dialog box to obtain an upgrade key. \([Learn more](/TA_Administration/Topics/LS_TA_requesting_key.html#choice.upgrade_license).\)

An upgrade key received from the LogiGear sales team is added to your license server from the License Server Control Panel.

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images//Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images//Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  On the toolbar, click the **Add License** ![](/images//Images/Add_license_btn.png) button.

3.  **License Key**: Open the email containing the license key you received from the LogiGear sales team, select all of the key text, and copy the key text to the clipboard \(press Ctrl+C\).

    -   On the Add License dialog box, select **Paste from Clipboard** to paste the key text from the clipboard into the **License Key** field, and then click **OK**.
    ![](/images//Images/add_license_key.png)

    The licenses added by license key will be displayed as below:

    ![](/images//Images/license_add_account_2.png)

    **Credential Information:**Open the email containing the account you received from the LogiGear sales team. Input that account information into the username and password fields in the **Add License** dialog. Finally, click **OK.**

    ![](/images//Images/add_credential.png)

    The licenses added by credential information will be displayed as below:

    ![](/images//Images/license_add_account_3.png)

    **Note:**

    -   If the license server is stopped, click **Start** ![](/images//Images/licenseserver_12.png) on the toolbar to restart it.
    -   Repeat the procedures above when you change the current license server machine to another one. Ensure that your server's fully qualified domain name or IP address is static.
    -   With **license key** you can add multiple key. But with **credential information** you can only use one account for one License Server.
    **Remember:** If you are using license keys of [TestArchitect Team](/TA_Administration/Topics/TA_Editions.html#entry_ta.editions.universal), but now you'd like to add new license keys of [TestArchitect Enterprise](/TA_Administration/Topics/TA_Editions.html#entry_ta.editions.universal). Please first remove license keys of TestArchitect Team. \([Learn more](/TA_Administration/Topics/LS_TA_revoking.html).\)

4.  ![](/images//Images/licenseserver_11.png)

    The Upgrade Node-Locked to Floating license dialog box appears.

    ![](/images//Images/upgrade_NL_to_FL_dlg.png)

5.  Depending on the number of upgraded node-locked licenses you purchased, in the dialog box, select the respective number of machines to perform the upgrade, and then click **Upgrade**.

    The confirmation dialog box appears.

    ![](/images//Images/upgrade_NL_to_FL_confirmation_dlg.png)

6.  In the dialog box, click **OK**.


![](/images//Images/upgrade_NL_to_FL.png)

**Parent topic:**[Managing licenses](/TA_Administration/Topics/LS_TA_managing_licenses.html)

**Previous topic:**[Node-locked licenses](/TA_Administration/Topics/LS_TA_node-locked_licenses.html)

**Next topic:**[Reclaiming a floating license from a host](/TA_Administration/Topics/LS_TA_reclaiming.html)

