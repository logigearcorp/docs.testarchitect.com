--- 
title: "Unblocking a redundant license server"
linktitle: "Unblocking a redundant license server"
weight: 4
aliases: 
    - /TA_Administration/Topics/adm_unblocking_redundant_license_server.html
---

After a 72-hour period of continuous operation following the failure or absence of a primary license server, a redundant license server blocks further requests for licenses. If your primary server remains unavailable, send an activation key request to LogiGear for an extension of the redundant server's operation.

A redundant license server acts as a fail-safe mechanism. It ensures that, should your primary license server become unavailable for any reason, your organization's ability to develop and conduct tests is not hindered in any way. However, the failure or removal of a primary license server should be treated as a short-term condition whose duration must be minimized, not least of all because no additional fail-safe exists when running on the redundant server.

Once failover occurs, a redundant license server allows itself to operate normally for a continuous period of up to 72 hours. Following that, it is blocked. As a general rule, this should be more than enough time to allow for the primary license server to be brought back online. However, LogiGear does recognize that, under some extraordinary circumstances, your organization may find itself dependant on failover for a longer period. Should your redundant license server reach its 72-hour time limit, you can unblock it for an additional 72-hour period by requesting an activation key from LogiGear:

1.  Start the License Server Control Panel. \([Learn more](/TA_Administration/Topics/LS_TA_managing_start_stop.html).\)

2.  From the toolbar, select **Tools** \> **Request activation key for RLS**.

    The Request Activation Key dialog box appears. TestArchitect automatically generates a request key \(which appears as a string of text underneath **This is your request key**\). This request key is used by LogiGear to provide you with an activation license key specific to your redundant license server.

    ![](/images//Images/adm_request_activation_key_dlg.png)

3.  To receive your activation key, the request key must be sent to TestArchitect Sales or to your LogiGear representative. You may choose to have the request key sent automatically, or you can email the information yourself to the TestArchitect sales team at [sales@logigear.com](mailto:sales@logigear.com). Use one of the two options presented to you at the bottom of the dialog box.

    ![](/images//Images/licenseserver_10.png)

4.  Click **OK**.

    A LogiGear representative will respond to your email with details regarding your personal activation key.

5.  Open the email containing the activation key you received from the LogiGear sales team. Select all of the key text, then copy the key text to the clipboard \(press Ctrl+C\).

6.  On the License Server Control Panel of the blocked redundant server, click the **Serve as Redundant License Server** ![](/images//Images/admin_icn_Redundant_License_server.png) button on the toolbar.

    The Input activation key dialog box appears.

    ![](/images//Images/adm_input_activation_key_dlg.png)

7.  In the dialog box, press Ctrl + V to paste the key text from the clipboard into the blank field, and then click **OK**.


Your redundant license sever is now unblocked for an additional 72-hour period.

**Parent topic:**[Managing the license server](/TA_Administration/Topics/LS_TA_managing_license_server.html)

**Previous topic:**[Creating a redundant license server](/TA_Administration/Topics/LS_TA_managing_creating_redundant_license.html)

