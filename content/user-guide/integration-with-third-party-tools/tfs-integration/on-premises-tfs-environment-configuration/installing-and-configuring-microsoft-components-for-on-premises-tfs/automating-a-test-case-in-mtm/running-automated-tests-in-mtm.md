--- 
title: "Running automated tests in Microsoft Test Manager"
linktitle: "Running automated tests in MTM"
description: "This topic describes the details of running automated tests in a lab environment using Microsoft Test Manager."
weight: 8
aliases: 
    - /TA_Help/Topics/ug_MTM_run_automated_test.html
keywords: "Microsoft Test Manager, running automated tests, MTM, running automated tests, Team Foundation Server, integration, running automated tests"
---

This topic describes the details of running automated tests in a lab environment using Microsoft Test Manager.

Ensure that you have already taken the following steps:

-   Deployed and configured:
    -   [build server](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-server),
    -   [build controller](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-controller), and
    -   [build agent](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-a-build-agent/)
-   Configured and registered:
    -   [test controller](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-the-mtm-test-controller) and
    -   [test agent](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/setting-up-the-mtm-test-agent).
-   Created test suites and added test cases in MTM Testing Center. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-tfs-test-suites-and-test-cases).\)
-   [Created](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-a-test-method) test methods and [associated](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/associating-a-tfs-test-case-with-a-test-method) them to TFS test cases.
-   Created and configured a TFS build definition. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-and-configuring-a-build-definition/creating-xaml-build).\)
-   Queued the new build. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/queuing-a-new-build/queueing-a-new-xaml-build).\)
-   Created a new environment in MTM Lab Center. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-new-environment-in-mtm-lab-center).\)
-   Configured run settings. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/configuring-run-settings).\)

To run automated tests in MTM, do the following:

1.  Run MTM and connect it to the team project from TFS where your project resides.

    -   Visual Studio 2017, 2015 \([learn more](https://docs.microsoft.com/id-id/vsts/manual-test/mtm/connect-microsoft-test-manager-to-your-team-project-and-test-plan?view=vsts)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380739(v=vs.120).aspx).
2.  In MTM Testing Center, switch to the **Test** tabbed page.

3.  On the Run Tests page, select a test suite or an individual test you want to run.

    ![](/images/TA_Help/Images/MTM_select_test_runs.png)

4.  Select **Run** from the **Run** menu.

    ![](/images/TA_Help/Images/run_MTM_test.png)

    {{<tip>}} If you wish to run a test in a different environment or with different test settings, choose **Run with options**.

    The **Analyze Test Runs** tab is displayed, showing the progress of the test run that contains this test.


After test completion, press the **Refresh** button to see the tests results. The result details include data collected for the test results and the test results history.

![](/images/TA_Help/Images/MTM_test_results.png)

Once you are able to run automated tests on Microsoft Test Manager successfully, it's time to move on to integration with TestArchitect.



