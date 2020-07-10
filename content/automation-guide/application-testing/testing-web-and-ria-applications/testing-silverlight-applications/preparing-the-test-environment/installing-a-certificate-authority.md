--- 
title: "Installing a Certificate Authority"
linktitle: "Installing a Certificate Authority"
description: "In order to test Silverlight applications running over the HTTPS protocol, installing a TestArchitect Certificate Authority (CA) on your test machine is required."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_installing_CA.html
keywords: "Silverlight testing, installing Certificate Authority"
---

In order to test Silverlight applications running over the HTTPS protocol, installing a TestArchitect Certificate Authority \(CA\) on your test machine is required.

{{<warning>}} Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

To install a CA, do the following:

1.  Go to TA\_INSTALL\_DIR\\binclient\\agents\\Silverlight\\Proxy.

2.  Double-click the TACertificateAuthority.crt file.

3.  In the Certificate dialog box, click **Install Certificate**.

    ![](/images/TA_Automation/Images/install_CA.png)

4.  In the Certificate Import Wizard dialog box, click **Next**.

    ![](/images/TA_Automation/Images/CA_Import_Wizard_dlg.png)

5.  Choose the **Place all certificates in the following store** option and click **Browse**.

    ![](/images/TA_Automation/Images/CA_Import_Wizard_dlg_1.png)

6.  Select **Trusted Root Certification Authorities** and click **OK**.

    ![](/images/TA_Automation/Images/Select_certificate_store_dlg.png)

7.  Click **Next**.

    ![](/images/TA_Automation/Images/CA_Import_Wizard_dlg_3.png)

8.  Click **Finish**.

    ![](/images/TA_Automation/Images/CA_Import_Wizard_dlg_4.png)

9.  Click **Yes** in response to the security warning to install the certificate.

    A confirmation dialog box appears indicating that the installation was successful.

    ![](/images/TA_Automation/Images/install_CA_confirmation.png)

10. Click **OK** to close the Certificate Import Wizard dialog box and complete the CA installation process.





