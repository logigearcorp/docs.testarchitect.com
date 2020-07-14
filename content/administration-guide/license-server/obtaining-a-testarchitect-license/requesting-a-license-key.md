--- 
title: "Requesting a license key"
linktitle: "Requesting a license key"
description: "License keys may be requested from your TestArchitect or LogiGear sales representative using the Request TestArchitect Licenses dialog box."
weight: 1
aliases: 
    - /TA_Administration/Topics/LS_TA_requesting_key.html
keywords: "licenses, requesting license keys"
---

License keys may be requested from your TestArchitect or LogiGear sales representative using the Request TestArchitect Licenses dialog box.

1.  On the license server machine, launch the License Server Control Panel:

    -   Windows platform: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
        -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
    -   Linux platform: do one of the following:
        -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
        -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
    -   macOS: Note that the TestArchitect License Server is not currently supported on macOS.
2.  On the toolbar, select the **Request License** ![](/images/TA_Administration/Images/Request_license_btn.png) button to invoke the Request TestArchitect Licenses dialog box.

    {{<note>}}

    -   The Request TestArchitect Licenses dialog box appears automatically if you are starting the TestArchitect license server for the first time.
    -   TestArchitect automatically generates a host certificate \(which appears as a string of text in the **Host Certificate** text box on the **License Request Information** panel\) based on your machine's fully qualified domain name \(FQDN\) or its IP address. This host certificate is used by LogiGear to provide you with a license key specific to your machine. Since the host certificate is now generated based on either the FQDN or IP address, you may change the current license server machine to another one as long as its FQDN or IP address remains unchanged.
    ![](/images/TA_Administration/Images/licenseserver_9-1.png)

3.  In the **Edition** field, select a type of TestArchitect [edition](/administration-guide/license-server/managing-licenses/testarchitect-editions) that you want.

    -   Enterprise: TestArchitect Enterprise, or Premium edition, is suitable for enterprise teams. It includes all TestArchitect features, and has no time and usage limits.
    -   Team: TestArchitect Team, or Free edition, is prefect for small teams. It basically includes all TestArchitect features \(no feature limit\). There is also no time limit, that is, you can use TestArchitect for free, forever. However, there are other usage limits - number of repository server that can be connected simultaneously, number of created test cases/test modules, etc. Therefore, when you select TestArchitect Team, the License Request Information panel will be automatically filled in the following information; however, note that theses fields are not editable.

        -   Request mode: New License
        -   Number of Floating Licenses: 0
        -   Number of Node-Locked Licenses: 2
        -   Number of Agent Licenses: 0
        ![](/images/TA_Administration/Images/Team_License_request_information.png)

4.  On the Customer Information panel, enter your organization information into the text fields.

    {{<note>}} Asterisk \(\*\) indicates required fields.

5.  On the **License Request Information** panel, the information displayed is used to generate the host certificate. Depending on your machine configuration, either a host-based or IP address-based certificate is displayed.

    -   If your machine belongs to a working domain, the **License Server Machine Name \(FQDN\)** field is automatically displayed with your absolute machine name.
    -   If your machine is not part of a working domain, the **IP Address of License Server** field appears instead.

        {{<note>}} In the event that your machine has multiple IP addresses, select one address from the **IP Address of License Server** field.

6.  If you selected Enterprise in the previous step, in the **Request mode** field, select whether you would like to purchase or upgrade licenses.

    -   Select **New license** to purchase new licenses.

        ![](/images/TA_Administration/Images/request_LS_mode_new_purchase.png)

    -   Select **Upgrade license** to upgrade your existing node-locked licenses to floating licenses.

        ![](/images/TA_Administration/Images/request_LS_mode.png)

7.  Select the type of license and the number of licenses that you want to request or upgrade for the TestArchitect Enterprise edition.

    -   Number of Floating Licenses: \([Universal](/administration-guide/license-server/managing-licenses/testarchitect-editions#note_Universal.license) licenses\) A floating license is one that can be reused among members of an organization and is not tied to any one particular person or machine.
    -   Number of Node-Locked Licenses: \([Universal](/administration-guide/license-server/managing-licenses/testarchitect-editions#note_Universal.license) licenses\) A node-locked license is granted to a specific machine, and when that machine is not using the node-locked license, the license generally goes unused.
    -   Number of Agent Licenses: Only allows users to execute tests.
8.  To receive your TestArchitect licenses, the host certificate must be sent to TestArchitect Sales or to your LogiGear representative. You may choose to have the host certificate sent automatically, or you can email the information yourself to the TestArchitect sales team at [mailto:sales@logigear.com](mailto:sales@logigear.com). Use one of the two options presented to you at the bottom of the dialog box.

    ![](/images/TA_Administration/Images/licenseserver_10.png)

9.  Click **OK**.


A LogiGear representative will respond to your email with details regarding your personal license key.


