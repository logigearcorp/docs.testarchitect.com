--- 
title: "Features added to TestArchitect 7.0"
linktitle: "Features added to TestArchitect 7.0"
weight: 39
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.0.html
---

This topic describes the changes made in TestArchitect version 7.0.

**Note:** The following TestArchitect enhancements are currently stable on Windows platforms only.

CAUTION:

It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.

## Stand-alone TestArchitect License Server installer

TestArchitect License Server now has a dedicated stand-alone installer.

## Repository server replication

[Replication](/TA_Administration/Topics/Repo_server_management_replication_repo.html) is a process that maintains synchronization between two or more repositories anywhere in the world, allowing users in different locales to work collaboratively on projects.

## Test Architect Client

-   [**New Quick Start page**](/TA_Help/Topics/Quick_start.html): The Quick Start page provides quick access to basic tasks such as connecting to a repository, creating a new project, and recording a test module.
-   [**Test module template**](/TA_Help/Topics/ABT_Test_module.html): A basic test module template is provided to get you started with the Action-Based Testing methodology.
-   [**Test case steps**](/TA_Help/Topics/Projects_and_tests_steps.html): Test case steps enable you to define a sequence of events and a test result for each test case.
-   [**Test case**](/TA_Help/Topics/Projects_and_tests_TC.html) and [**test module**](/TA_Help/Topics/Create_test_module.html) buttons: Toolbar buttons are now available for quickly creating a new test case or a new test module.
-   [**TA item URLs**](/TA_Help/Topics/Additional_features_TA_URL.html): Each TA item has a unique URL, making it easy for you to access any item by clicking its link..
-   [**Create new action from action lines**](/TA_Help/Topics/High_level_actions_smart_creating.html): Creating new actions from action lines is a smart and easy way to create new actions.
-   [**Picture capturing tool:**](/TA_Help/Topics/Additional_features_image_capturing_tool.html) Use this tool to capture on-screen images and save them as a baseline or picture.
-   [**Device Live Screen**](/TA_Help/Topics/ug_capturing_mobile_screenshot.html): Displays the screen of a connected device for testing of mobile devices.
-   Enhancements to existing features:
    -   [**History roll back**](/TA_Help/Topics/Project_items_revision_roll_back.html): Create a new version of a test case using the content of an earlier version \(use this instead of deleting the current version\).
    -   [**Reporting:**](/TA_Help/Topics/Reporting_def.html) Graphic design has been enhanced to increase usability.
    -   [**Screentips identify control class:**](/TA_Help/Topics/Interface_def_Viewer_identify.html) Hold your cursor over a control to view the control's TA class.
    -   Automation problem dialog box: More information is now included in error messages, making it easier for you to debug issues.
    -   [**User permission:**](/TA_Administration/Topics/User_administration.html) You can now define permissions across an entire project.
    -   [**TA list view:**](/TA_Help/Topics/Projects_and_tests_list_view.html) Columns in TA list view have been enhanced to increase usability.
    -   **Edit command \(context menu\)** The **Edit** command \(accessed from the context menu\) assists you with editing items such as interface entities and datasets.
    -   [**Harness sample:**](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html) Harness samples have been provided to make it easier for you to get started developing an automation harness.
    -   **Process for updating/deleting test cases and objectives**: Updating and deleting test cases and test objectives needs to follow the process to ensure data integrity. \(Refer to [test cases](/TA_Help/Topics/Projects_and_tests_TC.html) and [test objectives](/TA_Help/Topics/Projects_and_tests_TO.html) for details.\)
    -   [**Playback toolbar:**](/TA_Help/Topics/Test_exec_playback_toolbar.html) A toolbar with **Stop**, **Pause**, and **Resume** buttons is available when tests are run.
    -   [**Action recorder**](/TA_Help/Topics/Creating_and_using_actions_AR.html): Graphic design of the Action Recorder has been improved to increase usability.
    -   **Create New Item form:** The Create New Item form has been simplified.
    -   [**Test result**](/TA_Help/Topics/Test_result.html): Test results have been redesigned to increase usability.

## TestArchitect Automation

-   The following browsers are now supported: Internet Explorer 10, Firefox 14, Chrome 21. \(Refer to [Testing web applications](/TA_Automation/Topics/Web_automation.html) for details.\)
-   [Support is now available for Android 2x, 3x, 4x](/Android/Topics/Android_Automation_begin.html).
-   Support is now available OCR and image comparison \(Windows and Android\)
-   [report check](/TA_Automation/Topics/bia_report_check.html) action: Allows you to report passed/failed results to test results
-   [wait for property](/TA_Automation/Topics/bia_wait_for_property.html) action: Enables wait for a specified value of a property of a control or window
-   [capture screen](/TA_Automation/Topics/bia_capture_screen.html) action: Enables you to perform a screen capture and save it as an image
-   Deprecated: use frame setting
-   Deprecated: Hierarchy mode
-   The [use interface](/TA_Automation/Topics/bia_use_interface.html) setting is now optional

**Parent topic:**[Version history](/TA_ReleaseNotes/DITA_source/Version_History.html)

**Previous topic:**[Features added to TestArchitect 7.1](/TA_ReleaseNotes/DITA_source/Whats_New_7.1.html)

