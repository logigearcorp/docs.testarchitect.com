--- 
title: "Configuring WebDriver server"
linktitle: "Configuring WebDriver server"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_webdriver_ME.html
---
# Configuring WebDriver server {#task_g3p_lcy_sw .task}

WebDriver allows you to create automated tests that simulate user interaction. For security purposes, WebDriver is disabled by default. In order to use WebDriver, you will need to download and install the Microsoft WebDriver.

1.  If Microsoft Edge is open, close it, and terminate all running Microsoft Edge-related background processes, if any.

2.  Download and install WebDriver into the test machine.

    **Note:** Ensure that you download the version supported by TestArchitect. \([Learn more](Web_automation.md#li.Edge).\)

    -   If you download the .msi file, proceed to step \#3.
    -   If you download the .exe file, proceed to step \#4.
3.  For the .msi file, double-click the file.

    WebDriver is installed on your machine. Note that, no matter where you install WebDriver, TestArchitect is always able to detect it.

4.  For the .exe file, you are required to specify WebDriver's location, so that TestArchitect is able to detect it.

    1.  In TestArchitect, launch the [TestArchitect Automation Agent Manager](../../TA_Help/Topics/Test_exec_automation_agent_manager.html) dialog box.

        The TestArchitect Automation Agent Manager dialog box appears.

        ![](../../TA_Help/Images/automation_extension_manager_dialog_2.png)

    2.  Click the **Configure** button.

    3.  In the Edge WebDriver Configuration dialog box, specify the path to the executable \(\*.exe\) file of WebDriver.

        ![](../Images/configure_web_driver.png)

    4.  Click **Save** to save changes and close the dialog box.

5.  In your test procedure, use the [navigate](bia_navigate.html) built-in action to launch the Edge browser, and navigate to a specified web site.


**Parent topic:**[Preparing Microsoft Edge for web testing](../../TA_Help/Topics/ug_preparing_Edge.html)

**Next topic:**[Setting 100% zoom](../../TA_Automation/Topics/aut_app_testing_setting_zoom_ME.html)

**Related information**  


[Microsoft Edge: Unable to launch the browser or run automated tests](../../TA_FAQ/Topics/faq.tshoot.edge.automation_not_run.html)

