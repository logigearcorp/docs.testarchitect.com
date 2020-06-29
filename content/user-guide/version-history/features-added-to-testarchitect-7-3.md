--- 
title: "Features added to TestArchitect 7.3"
linktitle: "Features added to TestArchitect 7.3"
description: "This topic describes the changes made in TestArchitect version 7.3."
weight: 35
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.3.html
keywords: "What is new, TestArchitect 7.3, what is new"
---

This topic describes the changes made in TestArchitect version 7.3.

{{<caution>}}

-   It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.
-   A TestArchitect client and any Repository Server to which it connects must be of the same version.

## TestArchitect Client

-   [**Favorite items**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/favorite-items/): Keep track of frequently-visited items \(test modules, data sets, actions, etc.\) by storing them as favorites in TestArchitect.
-   [**Opening recently used items**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/opening-recently-used-items): Conveniently open recently used items, such as test modules, data sets, actions, test suites, etc.
-   [**Reopening closed tabs**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/recovering-closed-tabs): If one or more tabs have been closed by mistake, TestArchitect allows them to be easily reopened.
-   [/compileonly **flag**](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/): Command line flag used when generating a batch file so that, upon the file’s execution, tests are compiled but not run.
-   **CSV export**: Test modules and test cases can be exported to a .CSV file, which can be used as a backup or for re-importing. Additionally, test modules and test cases can be imported into TestArchitect from a .CSV file. \(Refer to [Exporting to CSV files](/user-guide/tests/exporting-and-importing-tests/exporting-to-csv-files/) and [Importing from CSV files](/user-guide/tests/exporting-and-importing-tests/importing-from-csv-files/) for details.
-   [**XML export**](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-xml): Test results may be exported to an .XML file.
-   **Changing ports**: Port numbers of the Repository Server and Controller may now be changed conveniently via the UI.
-   [**Adding comments on rollback:**](/user-guide/projects-and-project-items/project-items/revision-control/revision-history/revision-rollback) TestArchitect now supports the addition of comments when rolling back items.


**Enhancements to existing features:**

-   [**Version History dialog:**](/user-guide/projects-and-project-items/project-items/revision-control/revision-history/) A text area has been added to the dialog to display multiline comments.
-   [click tree node](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/click-tree-node) **built-in action:** argument type has been renamed to click type.
-   **Improved tab navigation**: Navigate between active tabs more conveniently.
-   [**Quality Center integration improvement**](/user-guide/integration-with-third-party-tools/hp-quality-center/):
    -   **The mapping step** between a TestArchitect project and a Quality Center project has been simplified. The user may now specify both the TestArchitect and Quality Center projects to be linked, with no renaming of projects required.
    -   **Importing Quality Center tests into a TestArchitect test module**: Tests residing in Quality Center can be imported into TestArchitect so that each QC test is mapped automatically to a test case in TestArchitect.
    -   **Uploading TestArchitect test modules to Quality Center**: An uploaded test module's name in Quality Center is assigned the same name as in TestArchitect, prepended with a pound sign \( \# \). \(For example, a TestArchitect test module named Input Validation appears as \#Input Validation in Quality Center.\) Additionally, each of the uploaded TestArchitect test cases is associated with a test in Quality Center.
    -   **Execute in TestArchitect, upload results to Quality Center:** Results of tests executed and stored in TestArchitect from projects mapped to Quality Center may be conveniently uploaded to Quality Center either manually, via context menu, or automatically, as specified.
-   **MTM integration improvement**
    -   [**Automatic uploading of test results to TestArchitect repository**](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/running-ta-tests-from-mtm): A new option in the TestArchitect Execution dialog box within MTM can be used to direct that test results be uploaded to a TestArchitect repository, with options for filtering the results and specifying the destination repository.

## TestArchitect Automation

-   [**Support for automation on Android 4.3**](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/).
-   [**Support for automation on Chrome 32**](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/).
-   [**Android command line tool**](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-command-line-tool/): Rather than re-signing, installing, and then launching an Android AUT via the Android Instrumentation Tool, you can perform these operations via a command line tool on both the Windows and Linux platforms. This feature is especially useful when working with Continuous Integration \(CI\) tools.
-   [execute command](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/execute-command): A new built-in action that executes a command line and returns the output of that command.

**Enhancements to existing features:**

-   [pinch](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/pinch): The pinch built-in action now supports both Android and iOS devices.
-   **Performance improvements on Android platform**: Performance of test execution has been increased by 30% and performance of control loading on Interface Viewer by 50% \(both cable and WiFi modes\).

## Repository Server

-   **Zero-downtime administration tasks:** You can now import, export, or back up your working repositories without having to terminate the Repository Server, allowing for continuous, uninterrupted operation. \(Refer to [Backing up repositories](/administration-guide/repository-server-management/backing-up-repositories), and [Exporting/Importing repositories](/administration-guide/repository-server-management/exporting-importing-repositories/) for details.\)
-   [**Ability to import and export multiple repositories at a time.**](/administration-guide/repository-server-management/exporting-importing-repositories/)




