--- 
title: "Configuring GeckoDriver"
linktitle: "Configuring GeckoDriver"
description: "On Windows machines only, automating tests on Mozilla Firefox requires GeckoDriver to be configured."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_geckodriver_FF.html
keywords: "Mozilla Firefox, Firefox, GeckoDriver"
---

On Windows machines only, automating tests on Mozilla Firefox requires GeckoDriver to be configured.

1.  If Mozilla Firefox is open, close it, and terminate all running Mozilla Firefox-related background processes, if any.

2.  Download the GeckoDriver executable file into the test machine.

    {{<remember>}} Ensure that you download the right version supported by TestArchitect. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/#li.FF).\)

3.  Specify GeckoDriver's path, so that TestArchitect is able to detect it.

    1.  In TestArchitect, launch the [TestArchitect Automation Agent Manager](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/automation-agent-manager) dialog box.

        The TestArchitect Automation Agent Manager dialog box appears.

        ![](/images/TA_Help/Images/automation_extension_manager_dialog_2.png)

    2.  For Mozilla Firefox, click the **Configure** button.

    3.  In the Firefox WebDriver Configuration dialog box, specify the path to the executable file \(geckodriver.exe\) of GeckoDriver.

        ![](/images/TA_Automation/Images/configure_web_driver_FF.png)

    4.  Click **Save** to save changes and close the dialog box.

4.  In your test procedure, use the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action to launch the Mozilla Firefox browser, and navigate to a specified web site.





