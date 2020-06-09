--- 
title: "Configuring GeckoDriver"
linktitle: "Configuring GeckoDriver"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_geckodriver_FF_COPY.html
---

On Windows machines only, automating tests on Mozilla Firefox requires GeckoDriver to be configured.

1.  If Mozilla Firefox is open, close it, and terminate all running Mozilla Firefox-related background processes, if any.

2.  Download the GeckoDriver executable file into the test machine.

    **Remember:** Ensure that you download the right version supported by TestArchitect. \([Learn more](Web_automation.html#li.FF).\)

3.  Specify GeckoDriver's path, so that TestArchitect is able to detect it.

    1.  In TestArchitect, launch the [TestArchitect Automation Agent Manager](/TA_Help/Topics/Test_exec_automation_agent_manager.html) dialog box.

        The TestArchitect Automation Agent Manager dialog box appears.

        ![](/TA_Help/Images/automation_extension_manager_dialog_2.png)

    2.  For Mozilla Firefox, click the **Configure** button.

    3.  In the Firefox WebDriver Configuration dialog box, specify the path to the executable file \(geckodriver.exe\) of GeckoDriver.

        ![](/images//Images/configure_web_driver_FF.png)

    4.  Click **Save** to save changes and close the dialog box.

4.  In your test procedure, use the [navigate](navigate.html) built-in action to launch the Mozilla Firefox browser, and navigate to a specified web site.


**Parent topic:**[Preparing Mozilla Firefox for web testing](/TA_Tutorials_Sample_App/Topics/SR_Enabling_TA_agent_firefox.html)

**Previous topic:**[Enabling the TAWebPlugin plug-in](/TA_Automation/Topics/aut_enabling_TAWebPlugin_FF_COPY.html)

**Next topic:**[Setting 100% zoom](/TA_Automation/Topics/aut_app_testing_setting_zoom_FF_COPY.html)

