--- 
title: "Features added to TestArchitect 7.2"
linktitle: "Features added to TestArchitect 7.2"
description: "This topic describes the changes made in TestArchitect version 7.2."
weight: 37
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.2.html
keywords: "What is new, TestArchitect 7.2, what is new"
---

This topic describes the changes made in TestArchitect version 7.2.

{{<caution>}}

It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.

## TestArchitect Client {{< permerlink >}} {#concept_what_new_7.2__section_jqm_z13_nh} 

-   [Multiple device execution](/user-guide/test-execution/methods-of-test-execution/multiple-device-execution/): An automated test can be run on multiple devices attached to a local machine and/or remote machines.
-   [Device management in the Lab Manager](/user-guide/lab-manager/managing-automation-lab/device-status): Adding or removing controllers/devices, and terminating tests running on controllers/devices can be directly managed in the TestArchitect Lab Manager.
-   [**Variation**](/administration-guide/license-server/managing-licenses/testarchitect-editions) functionality is now available in all TestArchitect editions.
-   [Capturing multiple controls](/user-guide/interface-definitions/the-interface-viewer/): Multiple controls can be captured simultaneously on the Interface Viewer.
-   [Variable auto-completion](/automation-guide/action-based-testing-language/the-test-language/variables/): Entering a pound symbol \(\#\) in an empty expression cell triggers an auto-complete pop-up window containing a list of suitable scope-based \(global, test module, test case, local\) variables associated with that action.
-   [Test suite creation](/user-guide/projects-and-project-items/project-items/test-suites/): Test suites can be created with any test-related items \(test modules, test cases, and test results\).
-   [Automatically add test results to repository](/user-guide/working-with-test-results/adding-test-results-to-the-repository/adding-test-results-automatically): Test results meeting certain predefined criteria can automatically be added to the repository immediately after a test run.
-   Import data into data sets: Data in a tab-delimited CSV file can be imported into dataset files used for data-driven tests. \(Refer to [Importing a source file into a data set](/user-guide/projects-and-project-items/project-items/data-sets/importing-a-source-file-into-a-data-set) and [Importing a data folder into a data set folder](/user-guide/projects-and-project-items/project-items/data-sets/importing-a-data-folder-into-a-data-set-folder) for details.\)
-   [Username/password encryption](/administration-guide/users-and-passwords/managing-aut-passwords/): Passwords can be encrypted and then be used within test script via the built-in action [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) in conjunction with special identifiers.
-   [Auto export result to html file](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file): Exporting to html allows for convenient viewing of test results on any web browser.
-   [Variation for data sets](/user-guide/variations/):  Variation is supported for data sets to enhance modularity by limiting code changes to applicable sections while allowing your test modules to remain intact from one version to the next.
-   [Dashboard](/user-guide/reporting-and-dashboard/dashboard/introduction):  The enhanced Dashboard is customizable to include trends, graphs and charts to help quickly and effectively manage, measure, and analyze the &health& and status of all your test projects.
    -   New predefined charts:  Additional charts are provided for you to quickly create most commonly used charts.
        -   Test Modules Execution Result Details: This stacked bar chart shows the test module's test run results as percentage of pass/fail/passed with warning errors by day, week, month, or year. The default view is by week.
        -   Test Modules Execution Failure Trend: This line chart displays the test module's test run failure status \(the number of failures\) by day, week, month, or year. The default view is by week.
        -   Test Modules Execution Result by Build: This pie chart shows the statistic data of the test module's test run results from the latest build.
        -   Test Modules Execution History: This chart displays the test run history of each test module for each day.
    -   Get latest filters:  Updates the information on a panel from the latest filtered data from the data source profile.
    -   Hyperlinks:  Hyperlinks are available on detail reports and on heat maps for you to quickly open corresponding entities in TestArchitect.
    -   Drill down reports:  Clicking a section on the chart opens a drill down report page showing detail statistics for that section.
-   [Test results](/user-guide/working-with-test-results/): Test result user interface, usability and performance are improved.
    -   Summary tab: This section summarizes passed, failed, errors and warnings the test results for quick references. All test run logs are also shown in this section.
    -   Result details:  Detail test run results including the start and elapsed time for each action are shown in this section.
    -   New fields \(*Device Name*, *Device OS*, and *Build Number*\) added to the summary and information tabs.

Enhancements to existing features:

-   New UI for [Dashboard](/user-guide/reporting-and-dashboard/dashboard/introduction) and [Lab Manager](/user-guide/lab-manager/).
-   New GUI for [$ Class Map](/user-guide/interface-definitions/class-mapping/class-maps-entity) to improve clarification:  The $ Class Maps entity is divided into WPF platform and WIN32 platform sections.
-   [MTM association](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases) performance improvement.
-   [**Adding results to repository**](/user-guide/working-with-test-results/adding-test-results-to-the-repository/): Performance improvement when adding large amount of test results to the repository, or when multiple users are simultaneously adding test results to the repository.
-   [Comparing results](/user-guide/working-with-test-results/comparing-test-results/): Test results can be compared with more than one baseline at a time, and the comparison performance is improved.

## TestArchitect Automation

-   [Variable scopes](/automation-guide/action-based-testing-language/the-test-language/variables/): Support both global and local variables.
-   Extensibility: Extend control recognition through customizable action behavior. Extensibility is supported on Win32, Java, and WPF.
-   [Class mapping for WPF](/user-guide/interface-definitions/class-mapping/): Class mapping helps the user maps unknown controls to known TestArchitect controls so that TestArchitect can use existing built-in actions to recognize and handle unknown controls.
-   [Container Class for WPF](/user-guide/interface-definitions/container-classes/): The container class help captures child UI elements of complex controls belonging to Treeview, Listbox, Listview, or Table classes so that TestArchitect can use existing built-in actions to recognize and handle those child UI elements.
-   [Ignore modifier for built-in action](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions): When the modifier "*ignore*" is used as an argument value in support actions, that action line will be ignored when it is executed.
-   Support the latest Firefox browser on Linux.
-   [Support Android 4.2 devices](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/).
-   New property resource ID on Android.
-   Support property editable for text box with true/false value.
-   New setting [color format](/automation-guide/action-based-testing-language/built-in-settings/other-settings/color-format): Specifies the RGB color code in either decimal or hexadecimal format.
-   [Support Android on Linux](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/).
-   New built-in actions:
    -   [kill process](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/kill-process): Terminates running process on mobile device.
    -   lock :  Turns off and locks iOS device screen.
    -   unlock :  Turns on and unlocks iOS device screen.
    -   [press device buttons](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/press-device-buttons): Emulates pressing of a hard button on the device.
    -   [get last check information](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/get-last-check-information): Retrieve information from the last check action.
    -   [check controls matched](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/check-controls-matched): Checks if all identified controls on an interface entity match with the controls on an AUT  window.
    -   [set native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set-native-property): Sets a new value of a control’s native property.
    -   [get native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-native-property): Retrieves the value of a control's native property.
    -   [check native property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-native-property): Captures the value of a specified native property from a control, and then compare it against the expected value.
    -   [check process running](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/check-process-running): Checks if one or more processes are running on a mobile device.
    -   [check process not running](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/check-process-not-running): Checks if one or more processes are not running on a mobile device.
    -   [is process running](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/is-process-running): Returns a Boolean value to indicate whether a process is running on a mobile device.
    -   [local variable:](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/local-variable): Defines and assigns a value to a local variable.
    -   [global variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/global-variable): Defines and assigns a value to a global variable.
    -   [set global variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/set-global-variable): Assigns a value to an existing global variable.

Enhancements to existing features:

-   Modify the action [start program](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/start-program) to start a new process with the current System Environment Variable \(without inheriting from the parent’s process\).
-   Support the action [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set) to set text box values on all browsers.
-   Support the action [get system performance information](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-system-performance-information) to get the current system performance information from a mobile device or desktop test machine.
-   Not showing automation message box errors \(on any notice level\) when using the [on error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-error) or [on error action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-error-action).
-   Not reporting warnings for the actions [on error action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-error-action) and [on failure action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-failure-action) when they execute.
-   Report as error instead of warning when a tree/list item is not found.
-   The action [report error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-error) will trigger error handler.
-   The return coordinate values left and top of the actions [get picture location](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/get-picture-location) and [get text coordinate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-coordinates) \(for Android\) is relative to screen/window/control.
-   The TA property doc title in the interface viewer has highest suggestion priority.

## Installation and Upgrades

-   Install selectable components:  User can select which TestArchitect components \(TestArchitect Client and Repository Server\) to install.
-   Update installer for JTO: Installer resolves the*Java Tool Option* conflicts.
-   Retain test module data:  Local test module data are saved when installing or upgrading new builds.



