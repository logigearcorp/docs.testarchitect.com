--- 
title: "Features added to TestArchitect 7.3"
linktitle: "Features added to TestArchitect 7.3"
weight: 34
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.3.html
---
# Features added to TestArchitect 7.3 {#concept_what_new_7.3 .concept}

This topic describes the changes made in TestArchitect version 7.3.

CAUTION:

-   It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.
-   A TestArchitect client and any Repository Server to which it connects must be of the same version.

## TestArchitect Client {#section_jqm_z13_nh .section}

-   [**Favorite items**](../../TA_Help/Topics/Favorite_items.html): Keep track of frequently-visited items \(test modules, data sets, actions, etc.\) by storing them as favorites in TestArchitect.
-   [**Opening recently used items**](../../TA_Help/Topics/Opening_recent_items.html): Conveniently open recently used items, such as test modules, data sets, actions, test suites, etc.
-   [**Reopening closed tabs**](../../TA_Help/Topics/Recovering_closed_items.html): If one or more tabs have been closed by mistake, TestArchitect allows them to be easily reopened.
-   [/compileonly **flag**](../../TA_Help/Topics/Test_exec_cmd.html): Command line flag used when generating a batch file so that, upon the file’s execution, tests are compiled but not run.
-   **CSV export**: Test modules and test cases can be exported to a .CSV file, which can be used as a backup or for re-importing. Additionally, test modules and test cases can be imported into TestArchitect from a .CSV file. \(Refer to [Exporting to CSV files](../../TA_Help/Topics/Exporing_to_CSV.html) and [Importing from CSV files](../../TA_Help/Topics/Importing_from_CSV.html) for details.
-   [**XML export**](../../TA_Help/Topics/Test_result_export_XML.html): Test results may be exported to an .XML file.
-   **Changing ports**: Port numbers of the Repository Server and Controller may now be changed conveniently via the UI.
-   [**Adding comments on rollback:**](../../TA_Help/Topics/Project_items_revision_roll_back.html) TestArchitect now supports the addition of comments when rolling back items.


**Enhancements to existing features:**

-   [**Version History dialog:**](../../TA_Help/Topics/Project_items_history.html) A text area has been added to the dialog to display multiline comments.
-   [click tree node](../../TA_Automation/Topics/bia_click_tree_node.html) **built-in action:** argument type has been renamed to click type.
-   **Improved tab navigation**: Navigate between active tabs more conveniently.
-   [**Quality Center integration improvement**](../../TA_Help/Topics/Integration_QC_intro.html):
    -   **The mapping step** between a TestArchitect project and a Quality Center project has been simplified. The user may now specify both the TestArchitect and Quality Center projects to be linked, with no renaming of projects required.
    -   **Importing Quality Center tests into a TestArchitect test module**: Tests residing in Quality Center can be imported into TestArchitect so that each QC test is mapped automatically to a test case in TestArchitect.
    -   **Uploading TestArchitect test modules to Quality Center**: An uploaded test module's name in Quality Center is assigned the same name as in TestArchitect, prepended with a pound sign \( \# \). \(For example, a TestArchitect test module named Input Validation appears as \#Input Validation in Quality Center.\) Additionally, each of the uploaded TestArchitect test cases is associated with a test in Quality Center.
    -   **Execute in TestArchitect, upload results to Quality Center:** Results of tests executed and stored in TestArchitect from projects mapped to Quality Center may be conveniently uploaded to Quality Center either manually, via context menu, or automatically, as specified.
-   **MTM integration improvement**
    -   [**Automatic uploading of test results to TestArchitect repository**](../../TA_Help/Topics/Integration_MTM_running_test_cases.html): A new option in the TestArchitect Execution dialog box within MTM can be used to direct that test results be uploaded to a TestArchitect repository, with options for filtering the results and specifying the destination repository.

## TestArchitect Automation {#section_j3v_4b3_nh .section}

-   [**Support for automation on Android 4.3**](../../Android/Topics/Android_Automation_begin.html).
-   [**Support for automation on Chrome 32**](../../TA_Automation/Topics/Web_automation.html).
-   [**Android command line tool**](../../Android/Topics/Android_command_line_tool.html): Rather than re-signing, installing, and then launching an Android AUT via the Android Instrumentation Tool, you can perform these operations via a command line tool on both the Windows and Linux platforms. This feature is especially useful when working with Continuous Integration \(CI\) tools.
-   [execute command](../../TA_Automation/Topics/bia_execute_command.html): A new built-in action that executes a command line and returns the output of that command.

**Enhancements to existing features:**

-   [pinch](../../TA_Automation/Topics/bia_iOS_pinch.html): The pinch built-in action now supports both Android and iOS devices.
-   **Performance improvements on Android platform**: Performance of test execution has been increased by 30% and performance of control loading on Interface Viewer by 50% \(both cable and WiFi modes\).

## Repository Server { .section}

-   **Zero-downtime administration tasks:** You can now import, export, or back up your working repositories without having to terminate the Repository Server, allowing for continuous, uninterrupted operation. \(Refer to [Backing up repositories](../../TA_Administration/Topics/Repo_server_management_bk.html), and [Exporting/Importing repositories](../../TA_Administration/Topics/adm_Exporting_import_repository.html) for details.\)
-   [**Ability to import and export multiple repositories at a time.**](../../TA_Administration/Topics/adm_Exporting_import_repository.html)

**Parent topic:**[Version history](../../TA_ReleaseNotes/DITA_source/Version_History.html)

**Previous topic:**[Features added to TestArchitect 8 beta 1](../../TA_ReleaseNotes/DITA_source/Whats_New_8.0_beta_1.html)

**Next topic:**[Features added to TestArchitect 7.2 update 1](../../TA_ReleaseNotes/DITA_source/Whats_New_7.2_update_1.html)

