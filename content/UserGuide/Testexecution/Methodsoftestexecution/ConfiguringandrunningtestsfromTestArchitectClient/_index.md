--- 
title: "Configuring and running tests from TestArchitect Client"
linktitle: "Configuring and running tests from TestArchitect Client"
weight: 1
aliases: 
    - /TA_Help/Topics/Test_exec_test_execution.html
---
# Configuring and running tests from TestArchitect Client {#Test_exec_test_exec .reference}

From a TestArchitect Client session, tests can be configured with the Execute Test dialog box.Options include selecting which tests to run, where to run them, how to handle results, and whether to generate additional diagnostic information during testing. You also have the option to run your test directly from the dialog box \(online execution\), or to generate a batch file allowing for a later test run \(offline execution\).

**Note:**

The Execute Test dialog box can be accessed by right-clicking any test module node in the TestArchitect explorer tree, and then clicking **Execute Test**.

**Fastpath:** Alternatively, click F9.

![](../Images/Test_execution.png)

The Execute Test dialog box is then presented.

## Execute Test dialog box {#section_imm_phx_ncb .section}

![](../Images/Execute_test_dlg.png)

Following are the fields of the Execute Test dialog box:

1.  Test Modules panel: Lists the test modules and test cases to be executed.

    ![](../Images/Execute_test_dlg_test_modules_panel.png)

    -   If a test module is selected, it appears in this box.
    -   If you select a test folder, all test modules belonging to that folder appear in this box.
    -   You can expand each test module to specify which tests to execute:
        -   Individual test cases.
        -   The INITIAL section of the test module starts before the first test case with the [INITIAL](../../TA_Automation/Topics/bia_initial.html) action. This section is where you would typically perform initiating operations like launching the application under test and logging into it.
        -   The FINAL section of the test module starts after the final test case with the [FINAL](../../TA_Automation/Topics/bia_final.html) action. You can use the final section to perform some housekeeping before the conclusion of your test, such as logging out of the application.
    -   The number of executed test modules and test cases is displayed. Note that, INTIAL and FINAL sections are excluded. You are now able to be aware when the number of executed tests is too large; therefore, you might decide whether you minimize that number by selecting only essential tests to run.

        **Note:**

        -   Applies to TestArchitect [8.3 Update 4](../../TA_Automation/Topics/../../TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.
        -   When you deselect some test modules/test cases, the number of selected tests modules/test cases is updated immediately.
    -   In the Test Modules panel, test modules and test cases are executed from the top downwards. You might also change the positions of the test modules in the panel, which means changing the execution order of test modules.

        **Note:** Applies to TestArchitect [8.3 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

        -   Basically, there are two options:

            -   Option \#1: In the Test Modules panel, drag the preferred test modules one after another into the new desired positions.
            -   Option \#2: In the Test Modules panel, select a desired test module and then click the **Move Up** button or the **Move Down** button, until the test module reaches the desired position. Repeat for other desired test modules.
            **Restriction:** Moving multiple test modules at once is not allowed.

    -   **Save as Test Suite**: Use this button to create a static test suite containing the group of test modules listed in the Test Module panel. \([Learn more](Test_suite_item_static.html).\)
2.  **General** tab:
    1.  Settings panel:

        ![](../Images/Execute_dlg_Settings_panel.png)

        1.  **Result Name**: The result name together with the timestamp and process ID is used as the title on the test result page. For example, the **Result Name** is Action Based Testing, the title for the test run page might look like Action Based Testing \(2013-04-04 13.54.11\) - 5044.
        2.  **Comment**: \(Optional\) Allows you to add a comment that will be included in the report generated after the test is executed. The comment value will appear as a field of the result item in the **Results** subtree of theTestArchitect explorer tree, and can therefore be used to filter or sort your reports.
        3.  **Build Number**: \(Optional\) Use to specify the AUT build number. The build number is displayed in the test result report and can be used as a filter or sort criteria.

            **Note:** During execution, the built-in action [assign result field](../../TA_Automation/Topics/bia_assign_result_field.html)can be used to assign a new value to this field, which changes the build number.

        4.  **Automation Tools**: Click this button to set the automation tools \(see [Lesson \#8: Using an automation harness](../../TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html)\). The following settings are available for automation tools:
            -   **Playback Tool**: Select the automation playback tool.
            -   **Executable\(s\)**: Path to the automation playback tool executable file.
            -   **Script\(s\)**: Path to the automation script folder.
            -   **Command Line**: Add any command line switches you may wish to include to control the third-party tool.
    2.  Controllers/Devices panel:

        ![](../Images/Execute_test_dlg_Controllers_Devices_panel.png)

        1.  Displays the list of target controllers, physical mobile devices, and/or cloud mobile devices upon which the test will execute.
            -   If there is exactly one controller/physical device selected, this panel will display its name; otherwise, the number of selected controllers/devices is displayed instead.
            -   For cloud devices, this panel will display the loaded JSON file which contains desired capabilities of the target cloud devices. \([Learn more](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_automation_json.html).\)
        2.  **Select Controllers/Devices**: Click this button to designate which controller, physical mobile device, and cloud device the test will execute on.

            ![](../Images/Select_controller_device_dlg.png)

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
        **Note:** To run tests on multiple controllers or devices simultaneously, see [Multiple device execution](Test_exec_multiple_device_execution.md#step_exk_bfm_gk) for details.

    3.  Variation Specification panel:
        1.  **Keyword**: Keyword, or comma-delimited list of keywords, specifying the test variation to be executed, if any. \(See [Creating keyword variations](Variations_create_keyword.html).\)

            **Attention:** If the test module selected for execution is a [variation](ug_TM_create_variation.html), this field is automatically filled in. If multiple test module variations are selected for execution and they do not all feature identical keyword sets, this field is not auto-filled.

            ![](../Images/TM_var_execution.png)

        2.  **AUT Version**: Enter a value or click the **Select Version** button to specify a variation tailored to an AUT version or platform \(See [Creating linked variations](Variations_create_linked.html).\)

            **Attention:** If the test module selected for execution is a [variation](ug_TM_create_variation.html), this field is automatically filled in. If multiple test module variations are selected for execution and they do not all feature identical keyword sets, this field is not auto-filled.

            ![](../Images/TM_var_execution.png)

        3.  **Time Traveling**: To opt for time traveling execution, which selects a historical “snapshot” of the test's project items for execution during the test run, select the check box and provide an appropriate timestamp. \(See [Time Traveling](ug_time_traveling.html) for details.\)
    4.  Screenshot recording panel: Use this panel to enable and configure the capturing of screenshots of [UI-Interacting actions](../../TA_Automation/Topics/timing_classifying_actions.html). For details, see [Capturing screenshots during test execution](ug_Screenshot_recording.md#li.screenshot.exec_test_dlg.settings)
3.  **Advanced** tab:
    1.  **Export Result\(s\) to TARESULT**: Export test results to .TARESULT files automatically once the text execution is complete. \([Learn more](ug_test_results_export_TARESULT.html)\).

        ![](../Images/Advaned_tab_Export_TARESULT.png)

        -   **Include screenshots**: Retain all [captured screenshots](ug_Screenshot_recording.html) in the exported .TARESULT test result.
        -   Include all sub test results: If the exported test result is a master result, meaning, it is a [test suite result](ug_test_results_introduction.md#section.TS_results), or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.
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

    5.  **Upload result to <externalTool\>**: Automatically upload test results to an external test tool, such as, Team Foundation Server-Microsoft Team Manger \([TFS-MTM](ug_MTM_def.html)\) or [HP Quality Center](Integration_QC_intro.html), after the test is terminated.
    6.  **Automatically add result\(s\) to repository**: TestArchitect automatically stores the test results, based on predefined conditions, to a specific location on a repository once the text execution is complete. \([Learn more](Test_result_storing_automatically.html).\)

        ![](../Images/Advanced_tab_Add_res_to_repo.png)

4.  **Startup Settings** tab: List of custom, user-defined settings to be created at test run startup, and/or built-in settings that are to be set to your choice of values at startup.

    ![](../Images/Test_execution_dialog_startup_settings_tab.png)

    -   **Startup Settings**: Select this check box to allow the listed built-in settings to be initialized with your values at startup \(overriding the TestArchitect defaults\), and the user-defined settings to be both created and initialized. \([Learn more](../../TA_Automation/Topics/aut_startup_settings.html).\)
5.  **Execute**: Click this button to start executing selected tests.

    Instead of executing the tests, you can use the following:

    -   **Compile Only**: Prepare a test execution, but do not start the execution. Automation engineers can use this to test harness scripts in their own development environment.
    -   **Generate Batch File**: Generate a batch file \(\*.BAT file in Windows\) to execute the test in command line mode.

**Tip:** To quickly execute a test module you are working on in the editor, press F9. This starts the execution without invoking the Execute Test dialog box.

**Parent topic:**[Methods of test execution](../../TA_Help/Topics/Test_exec_methods.html)

**Next topic:**[Executing specific test cases](../../TA_Help/Topics/Test_exec_specific_TC.html)

**Related information**  


[Default port numbers and port ranges](../../TA_Administration/Topics/adm_port_number_port_ranges.html)

