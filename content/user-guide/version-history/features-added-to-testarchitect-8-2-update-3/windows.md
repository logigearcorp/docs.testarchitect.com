--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 3 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_3_Windows.html
keywords: "Release Notes 8.2 Update 3, Windows, What is new, Windows, TestArchitect 8.2 Update 3, TestArchitect 8.2 Update 3, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 3 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## {{< expand >}} TestArchitect Client

**Enhancements to existing features**

-   **Team Foundation Server-Microsoft Test Manager integration improvement**
    -   [**TA-MTM extensibility**](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/ta-tfs-extensibility/): TestArchitect offers APIs to extend and customize test execution within a TA-MTM integration project. This allows you to get and set TestArchitect’s execution settings such as repository and project information, keyword variations and so on. You can now pass test settings from MTM, and anything you can get from the TestContext object, to TestArchitect the way you want.
    -   **Ability to specify an AUT’s [build number](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/specifying-a-value-for-tfs-build-number-field)** when uploading test results to MTM from TestArchitect.
    -   **You can now configure TestArchitect to select, based on run status \(Passed, Failed, etc.\), which HTML-based test results are sent to MTM** as an attachment during an [automatic](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/automatically-uploading-testarchitect-test-results-to-tfs#step.Upload_attachement_MTM) or [manual](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/manually-uploading-testarchitect-test-results-to-tfs#step.Conditional_upload_results) upload.
-   [**Access to test results in a web browser**](/user-guide/working-with-test-results/displaying-test-results-in-a-browser) on any machine, regardless of whether or not TestArchitect Client is installed.
-   Performance improvement during startup of the Repository Server.

## {{< expand >}} TestArchitect Automation {{< permerlink >}} {#concept_what_new_8.1_U4_Wins__section_p2c_51b_cs} 

-   **Mobile testing**
    -   **Support for mobile apps testing on [Android 5.x](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/#table.Android_versions) and [iOS 9.x](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/#row.iOS_version)**
    -   **Beta support for automation of built-in web browsers on [Android emulators](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-the-built-in-browser-on-android-emulators/)**, including Genymotion and Android Virtual Device \(AVD\).
-   **Built-in actions/built-in setting to handle unpredicted appearance of a modal dialog box in desktop applications**: The troublesome modal dialog can be automatically closed, or custom-handled by a user-defined action.
    -   [on modal action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-modal-action) \(built-in action\): Specify the action to be invoked in the event of the occurrence of a modal dialog box that may block the test automation.
    -   [get modal definition](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/get-modal-definition) \(built-in action\): Retrieve the definition of the current modal dialog box.
    -   [modal close attempts](/automation-guide/action-based-testing-language/built-in-settings/other-settings/modal-close-attempts) \(built-in setting\): Set the number of retries for the invoked action handler specified in the [on modal action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-modal-action) built-in action.


