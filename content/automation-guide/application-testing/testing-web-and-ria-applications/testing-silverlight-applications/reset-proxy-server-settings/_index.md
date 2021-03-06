--- 
title: "Reset proxy server settings"
linktitle: "Reset proxy server settings"
weight: 7
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_reset_proxy_settings.html
---

If and when you no longer need to test Silverlight applications, it is highly recommended that you reset your machine's proxy server settings to make your web browsers work properly under normal conditions.

**Warning:** Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

Carry out the following procedures for whichever browsers you need reconfigured:

**Note:** Please note, however, that Internet Explorer and Google Chrome use the same facility to configure the LAN settings. Hence, if you have both browsers on your system, it is only necessary to reconfigure the settings on one.

-   Internet Explorer:

    1.  Start Internet Explorer, then select **Tools** \> **Internet Options**.

    2.  In the Internet Options dialog box, click the **Connections** tab, and then click **LAN settings**.

    3.  In the Local Area Network \(LAN\) Settings dialog box, select the **Automatically detect settings** check box.

    4.  In the same dialog box, clear the **Use a proxy server for your LAN** check box.

        ![](/images//Images/IE_reset_proxy_settings.png)

    5.  Click **OK** repeatedly until you are returned to the browser window.

-   Google Chrome:

    1.  Start Google Chrome, then click the **Customize and control Google Chrome** ![](/images//Images/Chrome_btn.png) button. From the drop-down menu, select **Settings**.

    2.  Click **Show advanced settings…** at the bottom of the page.

    3.  Click the **Change proxy settings...** button, located under the **Network** heading.

    4.  In the Internet Options dialog box, click the **Connections** tab, and then click **LAN settings**.

    5.  In the Local Area Network \(LAN\) Settings dialog box, select the **Automatically detect settings** check box.

    6.  In the same dialog box, clear the **Use a proxy server for your LAN** check box.

        ![](/images//Images/IE_reset_proxy_settings.png)

    7.  Click **OK** repeatedly until you are returned to the browser window.

-   Mozilla Firefox:

    1.  Start Mozilla Firefox, click the **Menu** ![](/images//Images/btn.Firefox_Australis.menu.png) button, then select **Options**.

    2.  In the Options dialog box, select the **Advanced** option.

    3.  Select the **Network** tab, then click the **Settings** button in the Connections panel.

    4.  In the Connection Settings dialog box, select **No proxy**.

        ![](/images//Images/FF_reset_proxy_settings.png)

    5.  Click **OK**.


**Parent topic:**[Testing Silverlight applications](/TA_Automation/Topics/aut_app_testing_Silverlight_apps.html)

**Previous topic:**[Uninstalling a Certificate Authority](/TA_Automation/Topics/aut_app_testing_Silverlight_apps_uninstalling_CA.html)

