--- 
title: "Executing tests from Zephyr"
linktitle: "Executing tests from Zephyr"
description: "As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules may be executed from Zephyr."
weight: 6
aliases: 
    - /TA_Help/Topics/ug_Zephyr_executing_tests.html
keywords: "integration, Zephyr, executing tests from Zephyr"
---

As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules may be executed from Zephyr.

{{<important>}} TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](/user-guide/integration-with-third-party-tools/zephyr-integration/configuring-integration-with-zephyr/setting-up-the-connection-with-zephyr/registering-the-zephyr-server).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](/user-guide/integration-with-third-party-tools/zephyr-integration/configuring-integration-with-zephyr/setting-up-the-connection-with-zephyr/mapping-a-testarchitect-project-to-a-zephyr-project).
-   [Installed the ZBot agent and launched it](/user-guide/integration-with-third-party-tools/zephyr-integration/configuring-integration-with-zephyr/setting-up-the-connection-with-zephyr/configuring-zbots-and-installing-zips).

To run automated tests from Zephyr, do as follows:

1.  Start [Zbot](/user-guide/integration-with-third-party-tools/zephyr-integration/configuring-integration-with-zephyr/setting-up-the-connection-with-zephyr/configuring-zbots-and-installing-zips).

2.  In Zephyr's left tool dock, click **Test Execution**.

3.  In the **Test Execution** tree, select the folder containing the test cases to be executed.

4.  In the list view of test cases, select the check boxes corresponding to the desired test cases. Next, click the ![](/images/TA_Help/Images/Zephyr_e_btn_6.1.png) button next to **Execution**.

    ![](/images/TA_Help/Images/Zephyr_execution_6.1.png)

5.  In the Execute Automation Scripts dialog box, from the **Select ZBot** dropdown list select the machine whose ZBot will run the automation scripts. Next, click the **Run** button.

    ![](/images/TA_Help/Images/Zephyr_execute_automation_scripts_6.1.png)

    Zephyr connects to the TestArchitect engine in order to carry out the tests. Then the TestArchitect Execution dialog box is launched.

    ![](/images/TA_Help/Images/TA_Execution_dlg.png)

6.  In the dialog box, enter the requested information as described below:

    1.  TestArchitect Information panel:

        ![](/images/TA_Help/Images/TA_Execution_dlg_TA_info_panel.png)

        -   Repository Server: Name or IP address of TestArchitect Repository Server holding the repository of the tests.
        -   Port: Port number of the TestArchitect Repository Server host.
        -   Repository Name: Name of TestArchitect repository hosting the tests.
        -   User Name: TestArchitect user name whose account has permission to access and execute tests on the host.
        -   Password: Password for the above user account.
    2.  **General** tab:

        ![](/images/TA_Help/Images/Scheduler_Zephyr_general.png)

        1.  Automation Tools panel:

            ![](/images/TA_Help/Images/TFS_TAScheduler_Automation_Tools_panel.png)

            Click the **Automation Tools** button to set the automation tools \(see [Lesson \#8: Using an automation harness](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/)\).

            ![](/images/TA_Help/Images/TFS_Automation_tools_dlg.png)

            The following settings are available for automation tools:

            -   **Playback Tool**: Select the automation playback tool.
            -   **Executable\(s\)**: Path to the automation playback tool executable file.
            -   **Script\(s\)**: Path to the automation script folder.
            -   **Command Line**: Add any command line switches you may wish to include to control the third-party tool.
        2.  Controllers/Devices panel:

            ![](/images/TA_Help/Images/TA_Execution_dlg_controllers_devices_panel.png)

            -   Select Controllers/Devices: Click this button to designate which controller and device the test will execute on.

                ![](/images/TA_Help/Images/TFS_Select_controllers_devices_dlg.png)

                1.  Lab Manager Server panel: \(Display only\) IP and port number of the Lab Manager Server to which the test controllers and devices are registered.
                2.  Controllers/Devices panel: Lists all available controllers and cloud/physical mobile devices on which the test can be executed. The list consists of those controllers and devices that are either registered with the Lab Manager Server or have been manually added with the **Add Controller** or **Add desired capabilities files** button.

                    {{<tip>}} To select multiple cloud devices to be executed at launch time, see the following topics.

                    -   [WebDriver based cloud services](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-appium/creating-a-test/multiple-cloud-devices) \(Appium enabled\).
                    -   In [Remote TestKit](https://appkitbox.com/en/testkit/) service
                        -   [Chrome Android](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/creating-a-test/multiple-cloud-devices)
                        -   [Safari iOS](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-safari-ios/creating-a-test/multiple-cloud-devices)
                3.  Controller Port Configuration: Use this panel to specify to TestArchitect the port number that the remote machine is using for its TestArchitect Controller, if not using the default.
                    -   **IP/Server Name**: \(Display only\) IP address of remote machine currently selected in the Controllers/Devices panel.
                    -   **Port**: Port number through which TestArchitect will attempt to communicate with the controller on the host specified in the **IP/Server Name** field. If this is not the port on which the controller is known to be listening, change this value and then click **Save** ![](/images/TA_Help/Images/btn.TAC_toolbar.SaveFile.png).
            {{<restriction>}} Only one controller or one physical mobile device may be selected to run tests at a time. In other words, multiple controller/physical mobile device execution is prohibited.

        3.  Variation Specification panel:

            ![](/images/TA_Help/Images/TA_Execution_dlg_variation_specification_panel.png)

            1.  **Keyword**: Keyword, or comma-delimited list of keywords, specifying the test variation to be executed, if any. \(See [Creating keyword variations](/user-guide/variations/creating-keyword-variations).\)
            2.  **AUT Version**: Enter a value or click the **Select Version** button to specify a variation tailored to an AUT version or platform \(See [Creating linked variations](/user-guide/variations/creating-linked-variations/).\)
            3.  **Time Traveling**: To opt for time traveling execution, which selects a historical “snapshot” of the test's project items for execution during the test run, select the check box and provide an appropriate timestamp. \(See [Time Traveling](/user-guide/test-execution/time-traveling-execution/) for details.\)
    3.  **Advanced** tab:

        ![](/images/TA_Help/Images/Scheduler_Zephyr_advanced.png)

        1.  **Export Result\(s\) to TARESULT**: Select this check box to export TA results as .TARESULT files.

            {{<note>}} .TARESULT is an archive extension, developed by LogiGear.

            ![](/images/TA_Help/Images/MTM_export_TARESULT_file.png)

            -   **Include screenshots**: Include all captured [screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the exported test result.
            -   **Include all sub test results**: If the exported test result is a master result, meaning it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results), or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.
        2.  **Export Result\(s\) to HTML**: Export test results to HTML file automatically once the text execution is complete \([learn more](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file)\).

            ![](/images/TA_Help/Images/Advanced_tab_Export_HMTL.png)

            -   Create folder structure: Select whether the folder structure or flat structure directory is created to store HTML results.
                -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
                -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
            -   Include all sub test results: If the exported test result is a master result, that is, it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results) or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.
            -   Apply customized XSLT template: Export HTML results with your own view layout.
            -   **Include screenshots**: Retain all [captured screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the exported HTML test result.
                -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
                -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
        3.  **Export result\(s\) to xUnit**: Export test results to a XML file automatically in xUnit-format for integrating into the [continuous integration tools](/user-guide/integration-with-third-party-tools/continuous-integration-ci-tools/) once the text execution is complete.

            ![](/images/TA_Help/Images/Advanced_tab_Export_xUnit.png)

        4.  **Export result\(s\) to XML detail**: Export test results to XML file automatically once the text execution is complete \(see [Exporting test results to XML](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-xml) for more details\).

            ![](/images/TA_Help/Images/Advanced_tab_Export_XML.png)

        5.  **Automatically add result\(s\) to repository**: Select this check box if you want to add test results automatically to the repository once the test concludes.

            ![](/images/TA_Help/Images/TA_Execution_dlg_add_results_repo_panel.png)

            -   Repository destination: Add test results to the repository at the specified location.
            -   **By result**: Limit the results stored to the repository in accordance with the following check box selections:
                -   [**Passed**](/user-guide/working-with-test-results/overview/test-result-status): Passed test results are stored.
                -   [**Passed with Warnings/Errors**](/user-guide/working-with-test-results/overview/test-result-status): Passed test results with warnings/errors status are stored.
                -   [**Passed with known bug**](/user-guide/working-with-test-results/overview/test-result-status): Test results that passed, but are marked [known bugs](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/) whose outcomes have been ignored, are stored.
                -   [**Failed**](/user-guide/working-with-test-results/overview/test-result-status): Failed test results are stored.
                -   [**Not Finished**](/user-guide/working-with-test-results/overview/test-result-status): Incomplete test results.
    4.  **Startup Settings** tab:

        ![](/images/TA_Help/Images/Scheduler_Zephyr_startup_settings.png)

        -   **Startup Settings**: Select this check box to enable [user-defined settings](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting) and/or [reconfigured built-in settings](/user-guide/test-execution/startup-settings/creating-a-startup-setting-for-a-built-in-setting) to be loaded at the startup of test automation.
7.  Click **Run** to execute the tests.

    {{<note>}} On each subsequent test run, the information you provide is retained and automatically populates the TestArchitect Execution dialog box.

    {{<important>}} If you are executing tests for the first time, you are prompted to enter your TestArchitect license server information. Enter the required information in the dialog box. If the specified license server is reached successfully, or the trial key is validated, the provided license information is stored. From then on, you will be able to execute tests without being prompted for this information again.

    ![](/images/TA_Help/Images/Licensing_run_external_tools.png)


TestArchitect executes the test, and the test results are uploaded to Zephyr as ZIP files for the associated Zephyr test cases.

{{<important>}}

-   When running an automated test, the execution of every single Zephyr test case entails the execution of the [INITIAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/initial) section, if any. However, the execution of the last Zephyr test case entails the execution of both the INITIAL and [FINAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final) sections. For example, execution of test case 01 \(the first in the sequence\) starts off with execution of the INITIAL section; the same is true for each subsequent test case, including test case 05, the last one. Note, however, that only test case 05 concludes with execution of the FINAL section.
-   If, in the TestArchitect Execution dialog box, you specify a non-default test variation \(using the **Keyword** and/or **AUT version** boxes\), the results of the variation's test run are uploaded as follows:
    -   *if the variation has been mapped with Zephyr:* the results are uploaded to the correct mapped variation.
    -   *if the variation has not been mapped with Zephyr:* the results are uploaded to the default test.




