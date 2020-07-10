--- 
title: "Upgrading node-locked into floating license keys"
linktitle: "Upgrading node-locked into floating license keys"
description: "Node locked license keys by convention are not convertible into floating license keys. However, it is possible to upgrade node-locked into floating license keys, when you request a new upgrade key from LogiGear sales representative."
weight: 5
aliases: 
    - /TA_Administration/Topics/adm_upgrading_node_locked_to_floating_licenses.html
keywords: "licenses, upgrading node-locked to floating"
---

Node locked license keys by convention are not convertible into floating license keys. However, it is possible to upgrade node-locked into floating license keys, when you request a new upgrade key from LogiGear sales representative.

When you'd like to upgrade your node-locked license into floating license, you are at first required to contact LogiGear sales representative using the Request TestArchitect Licenses dialog box to obtain an upgrade key. \([Learn more](/administration-guide/license-server/obtaining-a-testarchitect-license/requesting-a-license-key#choice.upgrade_license).\)

An upgrade key received from the LogiGear sales team is added to your license server from the License Server Control Panel.

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  On the toolbar, click the **Add License** ![](/images/TA_Administration/Images/Add_license_btn.png) button.

3.  **License Key**: Open the email containing the license key you received from the LogiGear sales team, select all of the key text, and copy the key text to the clipboard \(press Ctrl+C\).

    -   On the Add License dialog box, select **Paste from Clipboard** to paste the key text from the clipboard into the **License Key** field, and then click **OK**.
    ![](/images/TA_Administration/Images/add_license_key.png)

    The licenses added by license key will be displayed as below:

    ![](/images/TA_Administration/Images/license_add_account_2.png)

    **Credential Information:**Open the email containing the account you received from the LogiGear sales team. Input that account information into the username and password fields in the **Add License** dialog. Finally, click **OK.**

    ![](/images/TA_Administration/Images/add_credential.png)

    The licenses added by credential information will be displayed as below:

    ![](/images/TA_Administration/Images/license_add_account_3.png)

    {{<note>}}

    -   If the license server is stopped, click **Start** ![](/images/TA_Administration/Images/licenseserver_12.png) on the toolbar to restart it.
    -   Repeat the procedures above when you change the current license server machine to another one. Ensure that your server's fully qualified domain name or IP address is static.
    -   With **license key** you can add multiple key. But with **credential information** you can only use one account for one License Server.
    {{<remember>}} If you are using license keys of [TestArchitect Team](/administration-guide/license-server/managing-licenses/testarchitect-editions#entry_ta.editions.universal), but now you'd like to add new license keys of [TestArchitect Enterprise](/administration-guide/license-server/managing-licenses/testarchitect-editions#entry_ta.editions.universal). Please first remove license keys of TestArchitect Team. \([Learn more](/administration-guide/license-server/managing-licenses/removing-licenses).\)

4.  ![](/images/TA_Administration/Images/licenseserver_11.png)

    The Upgrade Node-Locked to Floating license dialog box appears.

    ![](/images/TA_Administration/Images/upgrade_NL_to_FL_dlg.png)

5.  Depending on the number of upgraded node-locked licenses you purchased, in the dialog box, select the respective number of machines to perform the upgrade, and then click **Upgrade**.

    The confirmation dialog box appears.

    ![](/images/TA_Administration/Images/upgrade_NL_to_FL_confirmation_dlg.png)

6.  In the dialog box, click **OK**.


![](/images/TA_Administration/Images/upgrade_NL_to_FL.png)




