--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_3_Windows.html
---
# What's new in TestArchitect for Windows {#concept_what_new_8.1_U4_Wins .concept}

The following new features and improvements are introduced in TestArchitect version 8.2 Update 3 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client { .section}

**Enhancements to existing features**

-   **Team Foundation Server-Microsoft Test Manager integration improvement**
    -   [**TA-MTM extensibility**](../../TA_Help/Topics/ug_MTM_Extensibility.html): TestArchitect offers APIs to extend and customize test execution within a TA-MTM integration project. This allows you to get and set TestArchitect’s execution settings such as repository and project information, keyword variations and so on. You can now pass test settings from MTM, and anything you can get from the TestContext object, to TestArchitect the way you want.
    -   **Ability to specify an AUT’s [build number](../../TA_Help/Topics/ug_MTM_build_number_field.html)** when uploading test results to MTM from TestArchitect.
    -   **You can now configure TestArchitect to select, based on run status \(Passed, Failed, etc.\), which HTML-based test results are sent to MTM** as an attachment during an [automatic](../../TA_Help/Topics/ug_MTM_upload_result_automatic.md#step.Upload_attachement_MTM) or [manual](../../TA_Help/Topics/ug_MTM_upload_result_manual.md#step.Conditional_upload_results) upload.
-   [**Access to test results in a web browser**](../../TA_Help/Topics/ug_test_results_open_in_browser.html) on any machine, regardless of whether or not TestArchitect Client is installed.
-   Performance improvement during startup of the Repository Server.

## TestArchitect Automation {#section_p2c_51b_cs .section}

-   **Mobile testing**
    -   **Support for mobile apps testing on [Android 5.x](../../Android/Topics/Android_Automation_begin.md#table.Android_versions) and [iOS 9.x](../../iOS/Topics/iOS_automation_def.md#row.iOS_version)**
    -   **Beta support for automation of built-in web browsers on [Android emulators](../../TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html)**, including Genymotion and Android Virtual Device \(AVD\).
-   **Built-in actions/built-in setting to handle unpredicted appearance of a modal dialog box in desktop applications**: The troublesome modal dialog can be automatically closed, or custom-handled by a user-defined action.
    -   [on modal action](../../TA_Automation/Topics/bia_on_modal_action.html) \(built-in action\): Specify the action to be invoked in the event of the occurrence of a modal dialog box that may block the test automation.
    -   [get modal definition](../../TA_Automation/Topics/bia_get_modal_definition.html) \(built-in action\): Retrieve the definition of the current modal dialog box.
    -   [modal close attempts](../../TA_Automation/Topics/bis_modal_close_attempts.html) \(built-in setting\): Set the number of retries for the invoked action handler specified in the [on modal action](../../TA_Automation/Topics/bia_on_modal_action.html) built-in action.

**Parent topic:**[Features added to TestArchitect 8.2 Update 3](../../TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_3.html)

