--- 
title: "Adding new licenses"
linktitle: "Adding new licenses"
weight: 2
aliases: 
    - /TA_Administration/Topics/LS_TA_adding_new_license.html
---

New license keys or credential information received from the LogiGear sales team may be added to your license server from the License Server Control Panel.

-   Add license with license key:

1.  On the license server machine, launch the License Server Control Panel:

    -   **Windows platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images//Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   **Linux platform**: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images//Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.
2.  On the toolbar, click the **Add License** ![](/images//Images/Add_license_btn.png) button.

3.  Select which type of license you want to input.

    ![](/images//Images/Add_license.png)

4.  **License Key**: Open the email containing the license key you received from the LogiGear sales team, select all of the key text, and copy the key text to the clipboard \(press Ctrl+C\).

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


**Parent topic:**[Obtaining a TestArchitect license](/TA_Administration/Topics/LS_TA_obtaining_license.html)

**Previous topic:**[Requesting a license key](/TA_Administration/Topics/LS_TA_requesting_key.html)

