--- 
title: "Configuring WebDriver server"
linktitle: "Configuring WebDriver server"
description: "WebDriver allows you to create automated tests that simulate user interaction. For security purposes, WebDriver is disabled by default. In order to use WebDriver, you will need to download and install the Microsoft WebDriver."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_webdriver_ME.html
keywords: "Microsoft Edge, Edge, WebDriver"
---

WebDriver allows you to create automated tests that simulate user interaction. For security purposes, WebDriver is disabled by default. In order to use WebDriver, you will need to download and install the Microsoft WebDriver.

1.  If Microsoft Edge is open, close it, and terminate all running Microsoft Edge-related background processes, if any.

2.  Download and install WebDriver into the test machine.

    {{<note>}} Ensure that you download the version supported by TestArchitect. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/#li.Edge).\)

    -   If you download the .msi file, proceed to step \#3.
    -   If you download the .exe file, proceed to step \#4.
3.  For the .msi file, double-click the file.

    WebDriver is installed on your machine. Note that, no matter where you install WebDriver, TestArchitect is always able to detect it.

4.  For the .exe file, you are required to specify WebDriver's location, so that TestArchitect is able to detect it.

    1.  In TestArchitect, launch the [TestArchitect Automation Agent Manager](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/automation-agent-manager) dialog box.

        The TestArchitect Automation Agent Manager dialog box appears.

        ![](/images/TA_Help/Images/automation_extension_manager_dialog_2.png)

    2.  Click the **Configure** button.

    3.  In the Edge WebDriver Configuration dialog box, specify the path to the executable \(\*.exe\) file of WebDriver.

        ![](/images/TA_Automation/Images/configure_web_driver.png)

    4.  Click **Save** to save changes and close the dialog box.

5.  In your test procedure, use the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action to launch the Edge browser, and navigate to a specified web site.




**Related information**  


[Microsoft Edge: Unable to launch the browser or run automated tests](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/troubleshooting-web-automation/microsoft-edge-unable-to-launch-the-browser-or-run-automated-tests)

