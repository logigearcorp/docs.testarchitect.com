--- 
title: "Adding new licenses"
linktitle: "Adding new licenses"
weight: 2
aliases: 
    - /TA_Administration/Topics/LS_TA_adding_new_license.html
---
# Adding new licenses {#TA_License_server_adding_new_license .task}

New license keys received from the LogiGear sales team may be added to your license server from the License Server Control Panel.

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

    **Note:**

    -   If the license server is stopped, click **Start** ![](../Images/licenseserver_12.png) on the toolbar to restart it.
    -   Repeat the procedures above when you change the current license server machine to another one. Ensure that your server's fully qualified domain name or IP address is static.
    **Remember:** If you are using license keys of [TestArchitect Team](TA_Editions.md#entry_ta.editions.universal), but now you'd like to add new license keys of [TestArchitect Enterprise](TA_Editions.md#entry_ta.editions.universal). Please first remove license keys of TestArchitect Team. \([Learn more](LS_TA_revoking.html).\)


**Parent topic:**[Obtaining a TestArchitect license](../../TA_Administration/Topics/LS_TA_obtaining_license.html)

**Previous topic:**[Requesting a license key](../../TA_Administration/Topics/LS_TA_requesting_key.html)

