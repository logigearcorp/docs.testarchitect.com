--- 
title: "Preferences"
linktitle: "Preferences"
description: "TestArchitect Client can be configured to your requirements with a large collection of customizable features."
weight: 3
aliases: 
    - /TA_Help/Topics/Additional_features_preferences.html
keywords: "additional features, Preferences, preferences"
---

TestArchitect Client can be configured to your requirements with a large collection of customizable features.

You can set your TestArchitect Client preferences in the Preferences dialog box by selecting menu **Edit** \> **Preferences**

![](/images/TA_Help/Images/ug_preferences_dialog.png)

The following settings are available:

1.  Test editor font: Select a font name to choose the typefont used by the test editor.
2.  Test result font: Select a font name to choose the typefont used by the test execution result.
3.  Save the test editor after every: Select the check box to autosave contents of the test editor, and set the time interval determining the frequency of saving.
4.  Hide arguments using default value: Select this box to cause argument headers and values in action lines to be automatically removed when the values match the defaults defined for the called action.
5.  Automatically archive deletion data to this location: Select check box to automatically save deleted TestArchitect data, and specify the storage location.
6.  Help extension location: Select check box to specify a custom location for the Help extension file \(See [Help system extensibility](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/help-system-extensibility/)\).
7.  Remember workspace: Select to have TestArchitect Client save the workspace before it exits. If enabled, the next time you launch TestArchitect, the last workspace saved is automatically reloaded.
8.  Use Online Help: Select this option to open the help system documentation and [TAUtilities API](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/tautilities-api-reference) reference online. This gives you access to the latest updates to the help documentations.

    {{<note>}} If the **Use Online help** option is enabled, pressing F1 while hovering over any part of the interface or selecting **Help** \> **TAUtilities API** from the TestArchitect main menu results in TestArchitect attempting to open both the online help documentation and online TAUtilities API reference. Otherwise, the local help documentations are opened in offline mode.

9.  Automatically generate test objective and test case name: Select to automatically generate names for test objectives and test cases whenever you enter the test objective and test case actions in the editor.
10. Display warning message about invalid test module template: Select to display warning message if a test module template is invalid \(See [Test Modules](/user-guide/introduction-to-action-based-testing/action-based-testing/test-modules) for a valid module template\).
11. Automatically insert step into test case: Select check box to insert your steps automatically to a test case \(See [Creating test steps](/user-guide/tests/test-cases/test-steps/creating-test-steps).
12. Show TA class when identifying: Select to enable the TA class screentip when using identify method \(See [Point-to-identify mode](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode)\).
13. Show pending result dialog: Select to show the Result Delivery Pending dialog box when executing test remotely \(See [Receiving test results of remote test execution](/user-guide/working-with-test-results/receiving-test-results-of-remote-test-execution)\).
14. Specify interface for duplicate entities: Select to show the Specify Interface dialog box to map ambiguous entities \(see [ambiguous entities](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/ambiguous-entities) for more details\).
15. Enable Error Reporting: By using Error Reporting, descriptions of problems or errors will be sent to LogiGear, which we use to improve TestArchitect. We will also treat this report as confidential and anonymous. Error Reporting is enabled by default.
16. Enable Telemetry: The Telemetry feature sends performance and usage info to LogiGear. As you use TestArchitect, Telemetry measures and collects non-personal information, such as performance, hardware, and usage. Furthermore we use this information as a tool to improve TestArchitect. Telemetry is enabled by default.
17. Number of empty lines to insert when pressing Ctrl + Enter: Set the number of empty action lines that are inserted in the editor by this keyboard shortcut.

    {{<note>}} Valid range: 3 to 10 lines; default: 4. \(see [Inserting empty lines](/user-guide/getting-started/the-test-editor/) for further information\)

18. Show start time: Select to show the local time in the test result, when TestArchitect begins executing each action line.
19. Show run duration: Select to show the elapsed time in the test result for each action executed.

    {{<note>}} The action's start and elapsed time can also be set from the toolbar on the [**Result details**](/user-guide/working-with-test-results/overview/result-details-tab) tab

20. Show Quick start Tab: Select to display the **Quick Start** tab when TestArchitect is launched \(See [Quick Start](/using-the-testarchitect-help-system/quick-start-tab)\).
21. Start Repository server: Select to start the local repository server when TestArchitect is launched, if not already running.
22. Configure the program to be used for merging items: Enable a third-party tool to be used in conjunction with TestArchitect's Diff Tool for comparing or merging project items. \([Learn more](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-and-outside-products).\)
23. Generate batch file that allows tests to run on separate terminals \(only available in TestArchitect on Linux\): When this options is selected, batch files are executed on separate terminals in parallel.

    {{<remember>}} Clear this option, while generating batch files which are then run in the [Docker](https://hub.docker.com/r/logigear/testarchitect/) environment.

    ![](/images/TA_Help/Images/ug_preferences_dialog_Linux.png)




