--- 
title: "Uninstalling a Certificate Authority"
linktitle: "Uninstalling a Certificate Authority"
description: "If you no longer need to test Silverlight applications running over the HTTPS protocol, you may opt to uninstall the TestArchitect Certificate Authority (CA) which was previously installed."
weight: 6
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_uninstalling_CA.html
keywords: "Silverlight testing, uninstalling Certificate Authority"
---

If you no longer need to test Silverlight applications running over the HTTPS protocol, you may opt to uninstall the TestArchitect Certificate Authority \(CA\) which was previously installed.

{{<warning>}} Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

To uninstall a CA, do the following:

1.  Open Certificate Manager by clicking the **Start** button, typing certmgr.msc into the **Search** box, and then pressing ENTER. ‌

2.  In the certmgr dialog box, expand **Certificates - Current User** \> **Trusted Root Certification Authorities** \> **Certificates**.

    ![](/images/TA_Automation/Images/removing_CA.png)

3.  In the details panel, select the LogiGear Corporation certificate and all certificates issued by LogiGear.

4.  On the **Action** menu, click the **Delete** ![](/images/TA_Automation/Images/removing_CA_button.png) button.

5.  Click **Yes** if you are sure that you want to permanently delete the certificates.





