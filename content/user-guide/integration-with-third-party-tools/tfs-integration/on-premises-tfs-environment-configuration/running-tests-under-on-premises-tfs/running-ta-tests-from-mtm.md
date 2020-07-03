--- 
title: "Running TestArchitect tests from Microsoft Test Manager"
linktitle: "Running TA tests from MTM"
description: "After creating a TA-TFS integration project in Visual Studio that contains test cases, you can plan your tests, execute test cases, and view test results in MTM."
weight: 9
aliases: 
    - /TA_Help/Topics/Integration_MTM_running_test_cases.html
keywords: "projects, Microsoft Test Manager, executing, running, Microsoft Test Manager, test cases, MTM, executing test cases, running test cases, test cases, Microsoft Test Manager, integration, executing test cases, running test cases"
---

After creating a TA-TFS integration project in Visual Studio that contains test cases, you can plan your tests, execute test cases, and view test results in MTM.

Ensure that you have already taken the following steps:

-   Deployed and configured:
    -   [build server](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-server),
    -   [build controller](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-controller), and
    -   [build agent](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-agent/)
-   Configured and registered:
    -   [test controller](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-the-mtm-test-controller) and
    -   [test agent](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-the-mtm-test-agent).
-   Established a connection between TA and TFS. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/configuring-ta-for-a-tfs-connection).\)
-   Mapped the TA project containing the test cases of interest to a TFS project. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-a-ta-project-to-a-tfs-project).\)
-   Mapped TA test cases to TFS test cases. This can be achieved by any of the following means:
    -   importing TFS [test suites](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/importing-tfs-test-suites) or [test cases](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/importing-tfs-test-cases) into TA,
    -   uploading TA [test modules/tests cases](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/uploading-ta-test-modules-test-cases-to-tfs) to TFS,
    -   performing [manual mapping](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-ta-test-cases-to-tfs-test-cases) between TA test cases and TFS test cases.
-   Created a TA/MTM integration project. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/creating-ta-tfs-projects).\)
-   Associated TA test cases with TFS test cases. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases).\)
-   Created and queued TFS team builds. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/creating-and-queueing-team-builds-in-tfs-mtm).\)
-   Created and configured test plans. [\(Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/creating-and-configuring-test-plans).\)

{{<important>}} When running an automated test, the execution of every single TFS test case entails the execution of both the [INITIAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/initial) and [FINAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final) sections, if any. For example, the execution of test case \#01 is preceded by the execution of the INITIAL section, and followed by the FINAL section; the same is true for test case \#02, and each subsequent test case.

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

4.  In the dialog box, enter the requested information, as described [here](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/testarchitect-execution-dialog-box).

    {{<remember>}}

    -   To save all defined configurations, click the **Save** button in the TestArchitect Execution dialog box.
    -   By default, the TestArchitect Execution dialog box only appears on the first run. If and when the configurations saved from the previous run are no longer valid, the dialog box reappears on the subsequent run.
5.  In the TestArchitect Execution dialog box, click **Run** to execute the tests.

    {{<important>}} If you are executing tests for the first time, you are prompted to enter your TestArchitect license server information. Enter the required information in the dialog box. If the specified license server is reached successfully, or the trial key is validated, the provided license information is stored. From then on, you will be able to execute tests without again being prompted for this information.

    ![](/images/TA_Help/Images/Licensing_run_external_tools.png)

    {{<caution>}}

    MTM's automated tests settings include two timeout settings for imposing limits on automated test times. If these settings are enabled, you must ensure that they meet or exceed the maximum expected test times for your tests. These settings are available under MTM's Lab Center, under **Test Settings** \> **Timeouts**:

    ![](/images/TA_Help/Images/MTM_lab_center.timeouts.png)

    -   The first setting, **Abort a test run if the total time exceeds:**, when enabled via the check box, attempts to enforce a ceiling on the total run time of your test run. Should you set a value here and your test run exceeds it, your test is not aborted or directly affected in any way. However, your test results will not be uploaded to TFS.
    -   The setting **Mark an individual test as failed if its execution time exceeds:** is applied to each individual test of your test run. Hence, if it is used \(which we advise against\), you should ensure that it exceeds the maximum possible test time of your longest test of the test run set.

        {{<caution>}}

        If this setting is enabled and any one of your tests does exceed its value, it may have the effect of corrupting the transferred results of other tests in the set.


A test run panel appears showing the status of the running test. Initially, the **Result Overview** section displays the current state of the tests as pending while the test cases are run. After the selected test cases finish their runs, the **Result Overview** section is updated to show the status of the test runs.

![](/images/TA_Help/Images/MTM_results.png)

{{<important>}} When running an automated test, the execution of every single TFS test case entails the execution of both the [INITIAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/initial) and [FINAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final) sections, if any. For example, the execution of test case \#01 is preceded by the execution of the INITIAL section, and followed by the FINAL section; the same is true for test case \#02, and each subsequent test case.

Additionally, the test run results are generated, and then uploaded into the **Attachment** sections as HTML attachment file\(s\).

![](/images/TA_Help/Images/MTM_Attachement.png)

{{<tip>}}

-   Right-click the attachment file and select **Open** to view the test results in a browser.
-   The layout of the generated test results when test cases are executed in MTM is similar to the layout displayed when the same test cases are executed in TestArchitect.




**Related information**  


[Default port numbers and port ranges](/administration-guide/default-port-numbers-and-port-ranges)

