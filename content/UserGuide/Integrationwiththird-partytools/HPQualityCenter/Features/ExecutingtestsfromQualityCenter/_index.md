--- 
title: "Executing tests from Quality Center"
linktitle: "Executing tests from Quality Center"
weight: 5
aliases: 
    - /TA_Help/Topics/Integration_QC_executing_from_QC.html
---
# Executing tests from Quality Center {#QC_executing_test .task}

As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules can be executed from Quality Center.

Ensure that the machine hosting the TestArchitect repository server has the **HP ALM Connectivity Add-in** installed, to allow for integration and synchronization between TestArchitect and HP Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   [Mapped the TestArchitect project](Integration_QC_connecting_repo_to_QC_server_step_2.html) containing the test cases of interest to the Quality Center project.

1.  In Quality Center's ALM sidebar, navigate to **Testing** \> **Test Lab**.

    The Test Lab module appears.

2.  In the test plan tree of the **Test Sets** tab, right-click the folder in which you want to create a new test set, and then select **New Test Set**.

    ![](../Images/QC_new_test_set_1.png)

3.  On the New Test Set dialog box, enter the name of the new test set in the **Name** text box, and then click **OK**.

    ![](../Images/QC_new_test_set_2.png)

4.  Select the **Execution Grid** tab, and then click **Select Tests**.

    The **Test Plan Tree** window opens and displays tests that were created in the Test Plan module.

    ![](../Images/QC_new_test_set_3.png)

5.  Select the test cases and/or test modules to add to the test set, and drag them to the **Execution Grid** tab.

    **Tip:** You can distinguish a test module by the pound sign \(\#\) as the first character in its name.

6.  Select the test cases and/or test modules in the **Execution Grid** tab and click **Run**.

    Selected items are added to the Automatic Runner dialog box.

    ![](../Images/QC_automatic_runner_dialog.png)

7.  In the Automatic Runner dialog box, specify the host machine \(in the **Run on Host** column\) where each selected test will run. If you want to run all tests on the local host machine, select the check box **Run All Tests Locally**.

    **Restriction:** Due to Quality Center limitations, execution of tests on a Linux host from Quality Center is not supported.

8.  Select a test on the test list you want to execute and click **Run** to execute the selected test case, or click **Run All** to run all test cases on the list.

    The TestArchitect Execution dialog box appears.

    ![](../Images/TA_Execution_dlg.png)

9.  In the dialog box, enter the requested information as described below:

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
    **Tip:** To save the configurations, click the **Save** button.

    **Note:** The list of remote machines is added using the **Available Options** field in the New External Tool dialog box \(see [Configuring the Quality Center connection](Integration_QC_connecting_repo_to_QC_server_step_1.html)\). For an existing tool profile, the field is available on the tool profile’s information screen.

10. Click **Run** to execute the tests.

    **Important:** If you are executing tests for the first time, you are prompted to enter your TestArchitect license server information. Enter the required information in the dialog box. If the specified license server is reached successfully, or the trial key is validated, the provided license information is stored. From then on, you will be able to execute tests without being prompted for this information again.

    ![](../Images/Licensing_run_external_tools.png)


TestArchitect executes the test, and the test results are uploaded to Quality Center.

**Important:**

-   When running an automated test, the execution of every single Quality Center test entails the execution of the [INITIAL](../../TA_Automation/Topics/bia_initial.html) section, if any. However, the execution of the last Quality Center test entails the execution of both the INITIAL and [FINAL](../../TA_Automation/Topics/bia_final.html) sections. For example, execution of test 01 \(the first in the sequence\) starts off with execution of the INITIAL section; the same is true for each subsequent test, including test 05, the last one. Note, however, that only test 05 concludes with execution of the FINAL section.
-   If, in the TestArchitect Execution dialog box, you specify a non-default test variation \(using the **Keyword** and/or **AUT version** boxes\), the results of the variation's test run are uploaded as follows:
    -   *if the variation has been mapped with Quality Center:* the results are uploaded to the correct mapped variation.
    -   *if the variation has not been mapped with Quality Center:* the results are uploaded to the default test.

You can view the execution results in Quality Center from Test Lab's **Last Run Report** tab. Click an action on the report to view the detailed steps for that action.

![](../Images/Integration_QC_result_.png)

**Note:** The **Actual** fields on the **Steps Details** frame show the actual argument values, if any, for the selected action immediately after that action line finishes execution.

A detailed test report is also stored in the **Local Results** folder of the TestArchitect project, and is available on the TestArchitect explorer tree.

**Note:**

-   If your test includes action lines occurring before the first test case in the TestArchitect test module \(an area commonly referred to as the `INITIAL` section of the test module\) and you start a test case in Quality Center, TestArchitect executes the initial action lines before executing the test case. Typically, such action lines are used to have TestArchitect start the system under test, or to initialize some variables.
-   Ensure that the TestArchitect **Data** folder can write files with UAC enabled. To do this you must run Internet Explorer or Quality Center Explorer using the Run as administrator option.

**Parent topic:**[Features](../../TA_Help/Topics/Integration_QC_test_development.html)

**Previous topic:**[Uploading test results to Quality Center](../../TA_Help/Topics/Integration_QC_Uploading_test_results_to_QC.html)

**Next topic:**[Creating matching custom fields](../../TA_Help/Topics/Integration_QC_creating_mapping_custom_field.html)

**Related information**  


[Default port numbers and port ranges](../../TA_Administration/Topics/adm_port_number_port_ranges.html)

