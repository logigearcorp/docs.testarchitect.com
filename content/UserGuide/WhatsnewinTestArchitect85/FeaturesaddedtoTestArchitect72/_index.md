--- 
title: "Features added to TestArchitect 7.2"
linktitle: "Features added to TestArchitect 7.2"
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.2.html
---
# Features added to TestArchitect 7.2 {#concept_what_new_7.2 .concept}

This topic describes the changes made in TestArchitect version 7.2.

CAUTION:

It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.

## TestArchitect Client {#section_jqm_z13_nh .section}

-   [**Multiple device execution**](../../TA_Help/Topics/Test_exec_multiple_device_execution.html): An automated test can be run on multiple devices attached to a local machine and/or remote machines.
-   [**Device management in the Lab Manager**](../../TA_Help/Topics/Lab_manager_device.html): Adding or removing controllers/devices, and terminating tests running on controllers/devices can be directly managed in the TestArchitect Lab Manager.
-   [**Variation**](../../TA_Administration/Topics/TA_Editions.html) functionality is now available in all TestArchitect editions.
-   [**Capturing multiple controls**](../../TA_Help/Topics/Interface_def_Viewer.html): Multiple controls can be captured simultaneously on the Interface Viewer.
-   [**Variable auto-completion**](../../TA_Automation/Topics/The_test_language_variables.html): Entering a pound symbol \(\#\) in an empty expression cell triggers an auto-complete pop-up window containing a list of suitable scope-based \(global, test module, test case, local\) variables associated with that action.
-   [**Test suite creation**](../../TA_Help/Topics/Test_suite.html): Test suites can be created with any test-related items \(test modules, test cases, and test results\).
-   [**Automatically add test results to repository**](../../TA_Help/Topics/Test_result_storing_automatically.html): Test results meeting certain predefined criteria can automatically be added to the repository immediately after a test run.
-   **Import data into data sets**: Data in a tab-delimited CSV file can be imported into dataset files used for data-driven tests. \(Refer to [Importing a source file into a data set](../../TA_Help/Topics/Projects_and_tests_dataset_importing.html) and [Importing a data folder into a data set folder](../../TA_Help/Topics/Projects_and_tests_dataset_importing_data_folder.html) for details.\)
-   [**Username/password encryption**](../../TA_Administration/Topics/Manage_password.html): Passwords can be encrypted and then be used within test script via the built-in action [enter](../../TA_Automation/Topics/bia_enter.html) in conjunction with special identifiers.
-   [**Auto export result to html file**](../../TA_Help/Topics/Test_result_export_HTML.html): Exporting to html allows for convenient viewing of test results on any web browser.
-   [**Variation for data sets**](../../TA_Help/Topics/Variations.html):  Variation is supported for data sets to enhance modularity by limiting code changes to applicable sections while allowing your test modules to remain intact from one version to the next.
-   [**Dashboard**](../../TA_Help/Topics/Dashboard_intro.html):  The enhanced Dashboard is customizable to include trends, graphs and charts to help quickly and effectively manage, measure, and analyze the &health& and status of all your test projects.
    -   **New predefined charts**:  Additional charts are provided for you to quickly create most commonly used charts.
        -   **Test Modules Execution Result Details**: This stacked bar chart shows the test module's test run results as percentage of pass/fail/passed with warning errors by day, week, month, or year. The default view is by week.
        -   **Test Modules Execution Failure Trend**: This line chart displays the test module's test run failure status \(the number of failures\) by day, week, month, or year. The default view is by week.
        -   **Test Modules Execution Result by Build**: This pie chart shows the statistic data of the test module's test run results from the latest build.
        -   **Test Modules Execution History**: This chart displays the test run history of each test module for each day.
    -   **Get latest filters**:  Updates the information on a panel from the latest filtered data from the data source profile.
    -   **Hyperlinks**:  Hyperlinks are available on detail reports and on heat maps for you to quickly open corresponding entities in TestArchitect.
    -   **Drill down reports**:  Clicking a section on the chart opens a drill down report page showing detail statistics for that section.
-   [**Test results**](../../TA_Help/Topics/Test_result.html): Test result user interface, usability and performance are improved.
    -   **Summary tab**: This section summarizes passed, failed, errors and warnings the test results for quick references. All test run logs are also shown in this section.
    -   **Result details:**  Detail test run results including the start and elapsed time for each action are shown in this section.
    -   **New fields** \(*Device Name*, *Device OS*, and *Build Number*\) added to the summary and information tabs.

**Enhancements to existing features:**

-   New UI for [**Dashboard**](../../TA_Help/Topics/Dashboard_intro.html) and [**Lab Manager**](../../TA_Help/Topics/Lab_manager.html).
-   New GUI for [**$ Class Map**](../../TA_Help/Topics/Interface_def_Viewer_class_mapping.html) to improve clarification:  The $ Class Maps entity is divided into WPF platform and WIN32 platform sections.
-   [**MTM association**](../../TA_Help/Topics/ug_MTM_associate.html) performance improvement.
-   [**Adding results to repository**](../../TA_Help/Topics/Test_result_storing.html): Performance improvement when adding large amount of test results to the repository, or when multiple users are simultaneously adding test results to the repository.
-   [**Comparing results**](../../TA_Help/Topics/Test_result_baselining.html): Test results can be compared with more than one baseline at a time, and the comparison performance is improved.

## TestArchitect Automation {#section_j3v_4b3_nh .section}

-   [**Variable scopes**](../../TA_Automation/Topics/The_test_language_variables.html): Support both global and local variables.
-   **Extensibility**: Extend control recognition through customizable action behavior. Extensibility is supported on Win32, Java, and WPF.
-   [**Class mapping for WPF**](../../TA_Help/Topics/Class_mapping.html): Class mapping helps the user maps unknown controls to known TestArchitect controls so that TestArchitect can use existing built-in actions to recognize and handle unknown controls.
-   [**Container Class for WPF**](../../TA_Help/Topics/Interface_def_container_class.html): The container class help captures child UI elements of complex controls belonging to Treeview, Listbox, Listview, or Table classes so that TestArchitect can use existing built-in actions to recognize and handle those child UI elements.
-   [**Ignore modifier for built-in action**](../../TA_Automation/Topics/Ignoring_action.html): When the modifier "*ignore*" is used as an argument value in support actions, that action line will be ignored when it is executed.
-   Support the latest Firefox browser on Linux.
-   [Support Android 4.2 devices](../../Android/Topics/Android_Automation_begin.html).
-   New property resource ID on Android.
-   Support property editable for text box with true/false value.
-   New setting [color format](../../TA_Automation/Topics/bis_color_format.html): Specifies the RGB color code in either decimal or hexadecimal format.
-   [**Support Android on Linux**](../../Android/Topics/Android_Automation_begin.html).
-   **New built-in actions**:
    -   [kill process](../../TA_Automation/Topics/bia_kill_process.html): Terminates running process on mobile device.
    -   lock :  Turns off and locks iOS device screen.
    -   unlock :  Turns on and unlocks iOS device screen.
    -   [press device buttons](../../TA_Automation/Topics/bia_press_device_buttons.html): Emulates pressing of a hard button on the device.
    -   [get last check information](../../TA_Automation/Topics/bia_get_last_check_information.html): Retrieve information from the last check action.
    -   [check controls matched](../../TA_Automation/Topics/bia_check_controls_matched.html): Checks if all identified controls on an interface entity match with the controls on an AUT  window.
    -   [set native property](../../TA_Automation/Topics/bia_set_native_property.html): Sets a new value of a control’s native property.
    -   [get native property](../../TA_Automation/Topics/bia_get_native_property.html): Retrieves the value of a control's native property.
    -   [check native property](../../TA_Automation/Topics/bia_check_native_property.html): Captures the value of a specified native property from a control, and then compare it against the expected value.
    -   [check process running](../../TA_Automation/Topics/bia_check_process_running.html): Checks if one or more processes are running on a mobile device.
    -   [check process not running](../../TA_Automation/Topics/bia_check_process_not_running.html): Checks if one or more processes are not running on a mobile device.
    -   [is process running](../../TA_Automation/Topics/bia_is_process_running.html): Returns a Boolean value to indicate whether a process is running on a mobile device.
    -   [local variable:](../../TA_Automation/Topics/bia_local_variable.html): Defines and assigns a value to a local variable.
    -   [global variable](../../TA_Automation/Topics/bia_global_variable.html): Defines and assigns a value to a global variable.
    -   [set global variable](../../TA_Automation/Topics/bia_set_global_variable.html): Assigns a value to an existing global variable.

**Enhancements to existing features:**

-   Modify the action [start program](../../TA_Automation/Topics/bia_start_program.html) to start a new process with the current System Environment Variable \(without inheriting from the parent’s process\).
-   Support the action [set](../../TA_Automation/Topics/bia_set.html) to set text box values on all browsers.
-   Support the action [get system performance information](../../TA_Automation/Topics/bia_get_system_performance_information.html) to get the current system performance information from a mobile device or desktop test machine.
-   Not showing automation message box errors \(on any notice level\) when using the [on error](../../TA_Automation/Topics/bia_on_error.html)or [on error action](../../TA_Automation/Topics/bia_on_error_action.html).
-   Not reporting warnings for the actions [on error action](../../TA_Automation/Topics/bia_on_error_action.html) and [on failure action](../../TA_Automation/Topics/bia_on_failure_action.html) when they execute.
-   Report as error instead of warning when a tree/list item is not found.
-   The action [report error](../../TA_Automation/Topics/bia_report_error.html) will trigger error handler.
-   The return coordinate values left and top of the actions [get picture location](../../TA_Automation/Topics/bia_get_picture_location.html) and [get text coordinate](../../TA_Automation/Topics/bia_get_text_coordinates.html) \(for Android\) is relative to screen/window/control.
-   The TA property doc title in the interface viewer has highest suggestion priority.

## Installation and Upgrades { .section}

-   **Install selectable components**:  User can select which TestArchitect components \(TestArchitect Client and Repository Server\) to install.
-   **Update installer for JTO**: Installer resolves the*Java Tool Option* conflicts.
-   **Retain test module data**:  Local test module data are saved when installing or upgrading new builds.

**Parent topic:**[Version history](../../TA_ReleaseNotes/DITA_source/Version_History.html)

**Previous topic:**[Features added to TestArchitect 7.2 update 1](../../TA_ReleaseNotes/DITA_source/Whats_New_7.2_update_1.html)

**Next topic:**[Features added to TestArchitect 7.1](../../TA_ReleaseNotes/DITA_source/Whats_New_7.1.html)

