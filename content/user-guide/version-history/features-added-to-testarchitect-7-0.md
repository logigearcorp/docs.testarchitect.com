--- 
title: "Features added to TestArchitect 7.0"
linktitle: "Features added to TestArchitect 7.0"
description: "This topic describes the changes made in TestArchitect version 7.0."
weight: 39
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.0.html
keywords: "what's new, TestArchitect 7.0"
---

This topic describes the changes made in TestArchitect version 7.0.

{{<note>}} The following TestArchitect enhancements are currently stable on Windows platforms only.

{{<caution>}}

It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.

## Stand-alone TestArchitect License Server installer

TestArchitect License Server now has a dedicated stand-alone installer.

## Repository server replication

[Replication](/administration-guide/repository-server-management/replication-repositories/) is a process that maintains synchronization between two or more repositories anywhere in the world, allowing users in different locales to work collaboratively on projects.

## Test Architect Client

-   [**New Quick Start page**](/using-the-testarchitect-help-system/quick-start-tab): The Quick Start page provides quick access to basic tasks such as connecting to a repository, creating a new project, and recording a test module.
-   [**Test module template**](/user-guide/introduction-to-action-based-testing/action-based-testing/test-modules): A basic test module template is provided to get you started with the Action-Based Testing methodology.
-   [**Test case steps**](/user-guide/tests/test-cases/test-steps/): Test case steps enable you to define a sequence of events and a test result for each test case.
-   [**Test case**](/user-guide/tests/test-cases/) and [**test module**](/user-guide/tests/creating-a-test-module) buttons: Toolbar buttons are now available for quickly creating a new test case or a new test module.
-   [**TA item URLs**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/testarchitect-url): Each TA item has a unique URL, making it easy for you to access any item by clicking its link..
-   [**Create new action from action lines**](/user-guide/actions/user-defined-actions/smart-creation-of-new-actions): Creating new actions from action lines is a smart and easy way to create new actions.
-   [**Picture capturing tool:**](/user-guide/projects-and-project-items/project-items/picture-checks/picture-capturing-tool/) Use this tool to capture on-screen images and save them as a baseline or picture.
-   [**Device Live Screen**](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/capturing-screenshots-of-a-mobile-device): Displays the screen of a connected device for testing of mobile devices.
-   Enhancements to existing features:
    -   [**History roll back**](/user-guide/projects-and-project-items/project-items/revision-control/revision-history/revision-rollback): Create a new version of a test case using the content of an earlier version \(use this instead of deleting the current version\).
    -   [**Reporting:**](/user-guide/reporting-and-dashboard/reporting/) Graphic design has been enhanced to increase usability.
    -   [**Screentips identify control class:**](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode) Hold your cursor over a control to view the control's TA class.
    -   Automation problem dialog box: More information is now included in error messages, making it easier for you to debug issues.
    -   [**User permission:**](/administration-guide/users-and-passwords/user-administration/) You can now define permissions across an entire project.
    -   [**TA list view:**](/user-guide/projects-and-project-items/project-items/list-view/) Columns in TA list view have been enhanced to increase usability.
    -   **Edit command \(context menu\)** The **Edit** command \(accessed from the context menu\) assists you with editing items such as interface entities and datasets.
    -   [**Harness sample:**](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/) Harness samples have been provided to make it easier for you to get started developing an automation harness.
    -   **Process for updating/deleting test cases and objectives**: Updating and deleting test cases and test objectives needs to follow the process to ensure data integrity. \(Refer to [test cases](/user-guide/tests/test-cases/) and [test objectives](/user-guide/tests/test-cases/test-objectives/) for details.\)
    -   [**Playback toolbar:**](/user-guide/test-execution/playback-toolbar) A toolbar with **Stop**, **Pause**, and **Resume** buttons is available when tests are run.
    -   [**Action recorder**](/user-guide/actions/action-recorder/): Graphic design of the Action Recorder has been improved to increase usability.
    -   **Create New Item form:** The Create New Item form has been simplified.
    -   [**Test result**](/user-guide/working-with-test-results/): Test results have been redesigned to increase usability.

## TestArchitect Automation

-   The following browsers are now supported: Internet Explorer 10, Firefox 14, Chrome 21. \(Refer to [Testing web applications](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) for details.\)
-   [Support is now available for Android 2x, 3x, 4x](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/).
-   Support is now available OCR and image comparison \(Windows and Android\)
-   [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check) action: Allows you to report passed/failed results to test results
-   [wait for property](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/wait-for-property) action: Enables wait for a specified value of a property of a control or window
-   [capture screen](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/capture-screen) action: Enables you to perform a screen capture and save it as an image
-   Deprecated: use frame setting
-   Deprecated: Hierarchy mode
-   The [use interface](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/interface-handling/use-interface) setting is now optional



