--- 
title: "Running automated tests in Microsoft Test Manager"
linktitle: "Running automated tests in MTM"
weight: 8
aliases: 
    - /TA_Help/Topics/ug_MTM_run_automated_test.html
---

This topic describes the details of running automated tests in a lab environment using Microsoft Test Manager.

Ensure that you have already taken the following steps:

-   Deployed and configured:
    -   [build server](ug_MTM_config_build_server.html),
    -   [build controller](ug_MTM_config_build_controller.html), and
    -   [build agent](ug_MTM_build_agent.html)
-   Configured and registered:
    -   [test controller](Integrate_MTM_Config_TestController.html) and
    -   [test agent](Integrate_MTM_Config_TestAgent.html).
-   Created test suites and added test cases in MTM Testing Center. \([Learn more](Integration_MTM_creating_MTM_test_suite.html).\)
-   [Created](ug_MTM_test_methods.html) test methods and [associated](ug_MTM_codedUI_association.html) them to TFS test cases.
-   Created and configured a TFS build definition. \([Learn more](MTM_create_build_definition.html).\)
-   Queued the new build. \([Learn more](MTM_queue_XAML_build.html).\)
-   Created a new environment in MTM Lab Center. \([Learn more](ug_MTM_create_lab_environment.html).\)
-   Configured run settings. \([Learn more](MTM_create_run_settings.html).\)

To run automated tests in MTM, do the following:

1.  Run MTM and connect it to the team project from TFS where your project resides.

    -   Visual Studio 2017, 2015 \([learn more](https://docs.microsoft.com/id-id/vsts/manual-test/mtm/connect-microsoft-test-manager-to-your-team-project-and-test-plan?view=vsts)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380739(v=vs.120).aspx).
2.  In MTM Testing Center, switch to the **Test** tabbed page.

3.  On the Run Tests page, select a test suite or an individual test you want to run.

    ![](/images//Images/MTM_select_test_runs.png)

4.  Select **Run** from the **Run** menu.

    ![](/images//Images/run_MTM_test.png)

    **Tip:** If you wish to run a test in a different environment or with different test settings, choose **Run with options**.

    The **Analyze Test Runs** tab is displayed, showing the progress of the test run that contains this test.


After test completion, press the **Refresh** button to see the tests results. The result details include data collected for the test results and the test results history.

![](/images//Images/MTM_test_results.png)

Once you are able to run automated tests on Microsoft Test Manager successfully, it's time to move on to integration with TestArchitect.

**Parent topic:**[Automating a test case in Microsoft Test Manager](/TA_Help/Topics/ug_MTM_automating_TC.html)

**Previous topic:**[Configuring run settings](/TA_Help/Topics/MTM_create_run_settings.html)

