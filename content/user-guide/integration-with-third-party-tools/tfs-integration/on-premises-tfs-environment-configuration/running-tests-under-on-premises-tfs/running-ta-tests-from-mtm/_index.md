--- 
title: "Running TestArchitect tests from Microsoft Test Manager"
linktitle: "Running TestArchitect tests from Microsoft Test Manager"
description: "After creating a TA-TFS integration project in Visual Studio that contains test cases, you can plan your tests, execute test cases, and view test results in MTM."
weight: 9
aliases: 
    - /TA_Help/Topics/Integration_MTM_running_test_cases.html
keywords: "projects, Microsoft Test Manager, executing, running, Microsoft Test Manager, test cases, MTM, executing test cases, running test cases, test cases, Microsoft Test Manager, integration, executing test cases, running test cases"
---

After creating a TA-TFS integration project in Visual Studio that contains test cases, you can plan your tests, execute test cases, and view test results in MTM.

Ensure that you have already taken the following steps:

-   Deployed and configured:
    -   [build server](/TA_Help/Topics/ug_MTM_config_build_server.html),
    -   [build controller](/TA_Help/Topics/ug_MTM_config_build_controller.html), and
    -   [build agent](/TA_Help/Topics/ug_MTM_build_agent.html)
-   Configured and registered:
    -   [test controller](/TA_Help/Topics/Integrate_MTM_Config_TestController.html) and
    -   [test agent](/TA_Help/Topics/Integrate_MTM_Config_TestAgent.html).
-   Established a connection between TA and TFS. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS_COPY.html).\)
-   Mapped the TA project containing the test cases of interest to a TFS project. \([Learn more](/TA_Help/Topics/Integration_MTM_map_proj_COPY.html).\)
-   Mapped TA test cases to TFS test cases. This can be achieved by any of the following means:
    -   importing TFS [test suites](/TA_Help/Topics/ug_MTM_import_TS.html) or [test cases](/TA_Help/Topics/ug_MTM_import_TC.html) into TA,
    -   uploading TA [test modules/tests cases](/TA_Help/Topics/ug_upload_TAtest_MTM.html) to TFS,
    -   performing [manual mapping](/TA_Help/Topics/Integration_MTM_mapping_TA_MTM_IDs.html) between TA test cases and TFS test cases.
-   Created a TA/MTM integration project. \([Learn more](/TA_Help/Topics/Integration_MTM_creating_vs_project.html).\)
-   Associated TA test cases with TFS test cases. \([Learn more](/TA_Help/Topics/ug_MTM_associate.html).\)
-   Created and queued TFS team builds. \([Learn more](/TA_Help/Topics/ug_MTM_test_execution_creating_team_builds.html).\)
-   Created and configured test plans. [\(Learn more](/TA_Help/Topics/ug_MTM_test_execution_configuring_test_plans.html).\)

{{<important>}} When running an automated test, the execution of every single TFS test case entails the execution of both the [INITIAL](/TA_Automation/Topics/bia_initial.html) and [FINAL](/TA_Automation/Topics/bia_final.html) sections, if any. For example, the execution of test case \#01 is preceded by the execution of the INITIAL section, and followed by the FINAL section; the same is true for test case \#02, and each subsequent test case.

1.  Run MTM and connect it to the team project from TFS where your project resides.

    -   Visual Studio 2017, 2015 \([learn more](https://docs.microsoft.com/id-id/vsts/manual-test/mtm/connect-microsoft-test-manager-to-your-team-project-and-test-plan?view=vsts)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380739(v=vs.120).aspx).
2.  In MTM Testing Center, click **Test** on the ribbon. Then click the **Run Tests** tab. Double-click your TFS project in the project explorer tree.

    ![](/images/TA_Help/Images/MTM_select_project.png)

    Your selected project appears in the MTM main window panel showing the test cases that are linked with TestArchitect test cases.

3.  In the MTM main window panel, right-click a test case that you want to run and choose **Run**.

    The selected test case must be of the automated type. \(That is, the value of **Automated** must be Yes.\)

    {{<note>}} If you want to run a test in a different environment or with different test settings, choose **Run with options**.

    The TestArchitect Execution dialog box appears.

    ![](/images/TA_Help/Images/TA_Execution_dlg_TFS.png)

4.  In the dialog box, enter the requested information, as described [here](/TA_Help/Topics/ug_TestArchitect_execution_dialog.html).

    {{<remember>}}

    -   To save all defined configurations, click the **Save** button in the TestArchitect Execution dialog box.
    -   By default, the TestArchitect Execution dialog box only appears on the first run. If and when the configurations saved from the previous run are no longer valid, the dialog box reappears on the subsequent run.
5.  In the TestArchitect Execution dialog box, click **Run** to execute the tests.

    {{<important>}} If you are executing tests for the first time, you are prompted to enter your TestArchitect license server information. Enter the required information in the dialog box. If the specified license server is reached successfully, or the trial key is validated, the provided license information is stored. From then on, you will be able to execute tests without again being prompted for this information.

    ![](/images/TA_Help/Images/Licensing_run_external_tools.png)

    {{<{{<caution>}}>}}

    MTM's automated tests settings include two timeout settings for imposing limits on automated test times. If these settings are enabled, you must ensure that they meet or exceed the maximum expected test times for your tests. These settings are available under MTM's Lab Center, under **Test Settings** \> **Timeouts**:

    ![](/images/TA_Help/Images/MTM_lab_center.timeouts.png)

    -   The first setting, **Abort a test run if the total time exceeds:**, when enabled via the check box, attempts to enforce a ceiling on the total run time of your test run. Should you set a value here and your test run exceeds it, your test is not aborted or directly affected in any way. However, your test results will not be uploaded to TFS.
    -   The setting **Mark an individual test as failed if its execution time exceeds:** is applied to each individual test of your test run. Hence, if it is used \(which we advise against\), you should ensure that it exceeds the maximum possible test time of your longest test of the test run set.

        {{<{{<caution>}}>}}

        If this setting is enabled and any one of your tests does exceed its value, it may have the effect of corrupting the transferred results of other tests in the set.


A test run panel appears showing the status of the running test. Initially, the **Result Overview** section displays the current state of the tests as pending while the test cases are run. After the selected test cases finish their runs, the **Result Overview** section is updated to show the status of the test runs.

![](/images/TA_Help/Images/MTM_results.png)

{{<important>}} When running an automated test, the execution of every single TFS test case entails the execution of both the [INITIAL](/TA_Automation/Topics/bia_initial.html) and [FINAL](/TA_Automation/Topics/bia_final.html) sections, if any. For example, the execution of test case \#01 is preceded by the execution of the INITIAL section, and followed by the FINAL section; the same is true for test case \#02, and each subsequent test case.

Additionally, the test run results are generated, and then uploaded into the **Attachment** sections as HTML attachment file\(s\).

![](/images/TA_Help/Images/MTM_Attachement.png)

{{<tip>}}

-   Right-click the attachment file and select **Open** to view the test results in a browser.
-   The layout of the generated test results when test cases are executed in MTM is similar to the layout displayed when the same test cases are executed in TestArchitect.




**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

