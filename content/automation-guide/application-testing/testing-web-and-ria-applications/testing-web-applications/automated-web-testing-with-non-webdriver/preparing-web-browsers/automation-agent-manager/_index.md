--- 
title: "Automation Agent Manager"
linktitle: "Automation Agent Manager"
weight: 5
aliases: 
    - /TA_Help/Topics/Test_exec_automation_agent_manager.html
---

Use the Automation Agent Manager tool to add the necessary add-ons to installed web browser \(Internet Explorer and Mozilla Firefox\) to allow them to be used for automated testing.

Automation Agent Manager is used to install the TestArchitect Automation Agent extension to Internet Explorer. These browser add-ons are normally added to any installed browsers during TestArchitect installation. Automation Agent Manager is useful when an installed browser lacks the add-ons, which is typically the case when the browser has been installed after TestArchitect installation.

Also, Automation Agent Manager is used to specify WebDriver or GeckoDriver's location for Microsoft Edge, or Mozilla Firefox, respectively.

**Important:**

-   Automation Agent Manager is supported only on the Windows platform.
-   On the Linux and macOS platforms, if you install a browser after installing TestArchitect Client, and intend to test on that browser, please uninstall and reinstall TestArchitect Client, as that is the only means by which the TestArchitect add-ons can be installed on the browser.

1.  In TestArchitect Client, select **Tools** \> **Automation Agent Manager**.

    The TestArchitect Automation Agent Manager dialog box appears.

    ![](/images//Images/automation_extension_manager_dialog_2.png)

2.  For each installed browser, the TestArchitect Automation Agent Manager dialog box offers one of the following options, based on the browser's current state:

    -   Internet Explorer:
        -   **Install**: Install TestArchitect Automation Agent on the listed web browser.
        -   **Re-install**: Updates the installation of TestArchitect Automation Agent on the listed web browser.
    -   Microsoft Edge :
        -   **Configure**: In the Edge WebDriver Configuration dialog box, where WebDriver is installed, and then click **Save**.

            ![](/images/TA_Automation/Images/configure_web_driver.png)

    -   Mozilla Firefox:
        -   **Configure**: In the Firefox WebDriver Configuration dialog box, where the GeckoDriver executable file is located, and then click **Save**.

            ![](/images/TA_Automation/Images/configure_web_driver_FF.png)


**Parent topic:**[Preparing web browsers](/TA_Help/Topics/Test_exec_extension.html)

