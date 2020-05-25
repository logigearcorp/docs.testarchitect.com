--- 
title: "Executing tests from Zephyr"
linktitle: "Executing tests from Zephyr"
aliases: 
    - /TA_Help/Topics/ug_Zephyr_executing_tests.html
---
# Executing tests from Zephyr {#task_dgc_ysv_jp .task}

As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules may be executed from Zephyr.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](ug_Zephyr_registering_server.html).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](ug_Zephyr_mapping_projects.html).
-   [Installed the ZBot agent and launched it](ug_Zephyr_ZBot.html).

To run automated tests from Zephyr, do as follows:

1.  Start [Zbot](ug_Zephyr_ZBot.html).

2.  In Zephyr's left tool dock, click **Test Execution**.

3.  In the **Test Execution** tree, select the folder containing the test cases to be executed.

4.  In the list view of test cases, select the check boxes corresponding to the desired test cases. Next, click the ![](../Images/Zephyr_e_btn_6.1.png) button next to **Execution**.

    ![](../Images/Zephyr_execution_6.1.png)

5.  In the Execute Automation Scripts dialog box, from the **Select ZBot** dropdown list select the machine whose ZBot will run the automation scripts. Next, click the **Run** button.

    ![](../Images/Zephyr_execute_automation_scripts_6.1.png)

    Zephyr connects to the TestArchitect engine in order to carry out the tests. Then the TestArchitect Execution dialog box is launched.

    ![](../Images/TA_Execution_dlg.png)

6.  In the dialog box, enter the requested information as described below:

    1.  TestArchitect Information panel:

        ![](../Images/TA_Execution_dlg_TA_info_panel.png)

        -   Repository Server: Name or IP address of TestArchitect Repository Server holding the repository of the tests.
        -   Port: Port number of the TestArchitect Repository Server host.
        -   Repository Name: Name of TestArchitect repository hosting the tests.
        -   User Name: TestArchitect user name whose account has permission to access and execute tests on the host.
        -   Password: Password for the above user account.
    2.  **General** tab:

        ![](../Images/Scheduler_Zephyr_general.png)

        1.  Automation Tools panel:

            ![](../Images/TFS_TAScheduler_Automation_Tools_panel.png)

            Click the **Automation Tools** button to set the automation tools \(see [Lesson \#8: Using an automation harness](../../TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html)\).

            ![](../Images/TFS_Automation_tools_dlg.png)

            The following settings are available for automation tools:

            -   **Playback Tool**: Select the automation playback tool.
            -   **Executable\(s\)**: Path to the automation playback tool executable file.
            -   **Script\(s\)**: Path to the automation script folder.
            -   **Command Line**: Add any command line switches you may wish to include to control the third-party tool.
        2.  Controllers/Devices panel:

            ![](../Images/TA_Execution_dlg_controllers_devices_panel.png)

            -   Select Controllers/Devices: Click this button to designate which controller and device the test will execute on.

                ![](../Images/TFS_Select_controllers_devices_dlg.png)

                1.  Lab Manager Server panel: \(Display only\) IP and port number of the Lab Manager Server to which the test controllers and devices are registered.
                2.  Controllers/Devices panel: Lists all available controllers and cloud/physical mobile devices on which the test can be executed. The list consists of those controllers and devices that are either registered with the Lab Manager Server or have been manually added with the **Add Controller** or **Add desired capabilities files** button.

                    **Tip:** To select multiple cloud devices to be executed at launch time, see the following topics.

                    -   [WebDriver based cloud services](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_automation_json.html) \(Appium enabled\).
                    -   In [Remote TestKit](https://appkitbox.com/en/testkit/) service
                        -   [Chrome Android](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_multiple_Android_cloud_devices.html)
                        -   [Safari iOS](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_multiple_iOS_cloud_devices.html)
                3.  Controller Port Configuration: Use this panel to specify to TestArchitect the port number that the remote machine is using for its TestArchitect Controller, if not using the default.
                    -   **IP/Server Name**: \(Display only\) IP address of remote machine currently selected in the Controllers/Devices panel.
                    -   **Port**: Port number through which TestArchitect will attempt to communicate with the controller on the host specified in the **IP/Server Name** field. If this is not the port on which the controller is known to be listening, change this value and then click **Save** ![](../Images/btn.TAC_toolbar.SaveFile.png).
            **Restriction:** Only one controller or one physical mobile device may be selected to run tests at a time. In other words, multiple controller/physical mobile device execution is prohibited.

        3.  Variation Specification panel:

            ![](../Images/TA_Execution_dlg_variation_specification_panel.png)

            1.  **Keyword**: Keyword, or comma-delimited list of keywords, specifying the test variation to be executed, if any. \(See [Creating keyword variations](Variations_create_keyword.html).\)
            2.  **AUT Version**: Enter a value or click the **Select Version** button to specify a variation tailored to an AUT version or platform \(See [Creating linked variations](Variations_create_linked.html).\)
            3.  **Time Traveling**: To opt for time traveling execution, which selects a historical “snapshot” of the test's project items for execution during the test run, select the check box and provide an appropriate timestamp. \(See [Time Traveling](ug_time_traveling.html) for details.\)
    3.  **Advanced** tab:

        ![](../Images/Scheduler_Zephyr_advanced.png)

        1.  **Export Result\(s\) to TARESULT**: Select this check box to export TA results as .TARESULT files.

            **Note:** .TARESULT is an archive extension, developed by LogiGear.

            ![](../Images/MTM_export_TARESULT_file.png)

            -   **Include screenshots**: Include all captured [screenshots](ug_Screenshot_recording.html) in the exported test result.
            -   **Include all sub test results**: If the exported test result is a master result, meaning it is a [test suite result](ug_test_results_introduction.md#section.TS_results), or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.
        2.  **Export Result\(s\) to HTML**: Export test results to HTML file automatically once the text execution is complete \([learn more](Test_result_export_HTML.html)\).

            ![](../Images/Advanced_tab_Export_HMTL.png)

            -   Create folder structure: Select whether the folder structure or flat structure directory is created to store HTML results.
                -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
                -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
            -   Include all sub test results: If the exported test result is a master result, that is, it is a [test suite result](ug_test_results_introduction.md#section.TS_results) or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.
            -   Apply customized XSLT template: Export HTML results with your own view layout.
            -   **Include screenshots**: Retain all [captured screenshots](ug_Screenshot_recording.html) in the exported HTML test result.
                -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
                -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
        3.  **Export result\(s\) to xUnit**: Export test results to a XML file automatically in xUnit-format for integrating into the [continuous integration tools](Integration_xUnit.html) once the text execution is complete.

            ![](../Images/Advanced_tab_Export_xUnit.png)

        4.  **Export result\(s\) to XML detail**: Export test results to XML file automatically once the text execution is complete \(see [Exporting test results to XML](Test_result_export_XML.html) for more details\).

            ![](../Images/Advanced_tab_Export_XML.png)

        5.  **Automatically add result\(s\) to repository**: Select this check box if you want to add test results automatically to the repository once the test concludes.

            ![](../Images/TA_Execution_dlg_add_results_repo_panel.png)

            -   Repository destination: Add test results to the repository at the specified location.
            -   **By result**: Limit the results stored to the repository in accordance with the following check box selections:
                -   [**Passed**](ug_test_results_status.html): Passed test results are stored.
                -   [**Passed with Warnings/Errors**](ug_test_results_status.html): Passed test results with warnings/errors status are stored.
                -   [**Passed with known bug**](ug_test_results_status.html): Test results that passed, but are marked [known bugs](Bugs_working_known_bug.html) whose outcomes have been ignored, are stored.
                -   [**Failed**](ug_test_results_status.html): Failed test results are stored.
                -   [**Not Finished**](ug_test_results_status.html): Incomplete test results.
    4.  **Startup Settings** tab:

        ![](../Images/Scheduler_Zephyr_startup_settings.png)

        -   **Startup Settings**: Select this check box to enable [user-defined settings](../../TA_Automation/Topics/aut_defining_user_defined_settings.html) and/or [reconfigured built-in settings](../../TA_Automation/Topics/aut_configuring_built_in_settings.html) to be loaded at the startup of test automation.
7.  Click **Run** to execute the tests.

    **Note:** On each subsequent test run, the information you provide is retained and automatically populates the TestArchitect Execution dialog box.

    **Important:** If you are executing tests for the first time, you are prompted to enter your TestArchitect license server information. Enter the required information in the dialog box. If the specified license server is reached successfully, or the trial key is validated, the provided license information is stored. From then on, you will be able to execute tests without being prompted for this information again.

    ![](../Images/Licensing_run_external_tools.png)


TestArchitect executes the test, and the test results are uploaded to Zephyr as ZIP files for the associated Zephyr test cases.

**Important:**

-   When running an automated test, the execution of every single Zephyr test case entails the execution of the [INITIAL](../../TA_Automation/Topics/bia_initial.html) section, if any. However, the execution of the last Zephyr test case entails the execution of both the INITIAL and [FINAL](../../TA_Automation/Topics/bia_final.html) sections. For example, execution of test case 01 \(the first in the sequence\) starts off with execution of the INITIAL section; the same is true for each subsequent test case, including test case 05, the last one. Note, however, that only test case 05 concludes with execution of the FINAL section.
-   If, in the TestArchitect Execution dialog box, you specify a non-default test variation \(using the **Keyword** and/or **AUT version** boxes\), the results of the variation's test run are uploaded as follows:
    -   *if the variation has been mapped with Zephyr:* the results are uploaded to the correct mapped variation.
    -   *if the variation has not been mapped with Zephyr:* the results are uploaded to the default test.

**Parent topic:**[Features of TestArchitect-Zephyr integration](../../TA_Help/Topics/ug_Zephyr_features.html)

**Previous topic:**[Uploading TestArchitect test results to Zephyr](../../TA_Help/Topics/ug_Zephyr_uploading_results.html)

**Next topic:**[Creating matching custom fields in TestArchitect and Zephyr](../../TA_Help/Topics/ug_Zephyr_creating_custom_fields.html)

