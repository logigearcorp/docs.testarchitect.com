--- 
title: "Uninstalling a Certificate Authority"
linktitle: "Uninstalling a Certificate Authority"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_uninstalling_CA.html
---
# Uninstalling a Certificate Authority {#task_wq2_r54_lp .task}

If you no longer need to test Silverlight applications running over the HTTPS protocol, you may opt to uninstall the TestArchitect Certificate Authority \(CA\) which was previously installed.

**Warning:** Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

To uninstall a CA, do the following:

1.  Open Certificate Manager by clicking the **Start** button, typing certmgr.msc into the **Search** box, and then pressing ENTER. ‌

2.  In the certmgr dialog box, expand **Certificates - Current User** \> **Trusted Root Certification Authorities** \> **Certificates**.

    ![](../Images/removing_CA.png)

3.  In the details panel, select the LogiGear Corporation certificate and all certificates issued by LogiGear.

4.  On the **Action** menu, click the **Delete** ![](../Images/removing_CA_button.png) button.

5.  Click **Yes** if you are sure that you want to permanently delete the certificates.


**Parent topic:**[Testing Silverlight applications](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps.html)

**Previous topic:**[List of supported Silverlight controls](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps_supported_controls.html)

**Next topic:**[Reset proxy server settings](../../TA_Automation/Topics/aut_app_testing_Silverlight_reset_proxy_settings.html)

