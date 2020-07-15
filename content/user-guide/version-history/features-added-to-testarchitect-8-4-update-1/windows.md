--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 1 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.4_update_1.html
keywords: "Release Notes 8.4 Update 1, Windows, What is new, Windows, TestArchitect 8.4 Update 1, TestArchitect 8.4 Update 1, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 1 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client  

New features

-   [**Mapping TestArchitect \(TA\) test modules to Team Foundation Server \(TFS\) test cases**](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-ta-test-modules-to-tfs-test-cases): Previously, you can only map TA test cases to TFS test cases. But our user feedback tells us that there are real use cases in which you need to link a test module to a TFS test case. So from 8.4 Update 1 onwards, you’ll have two methods to conduct the new mapping:
    -   Via Test Module List View.
    -   Via the Information tab of a test module.

Enhancements to existing features

-   [Upload](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/uploading-ta-test-modules-test-cases-to-tfs) to and [importation](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/importing-tfs-test-suites) from Team Foundation Server are greatly enhanced with many new valuable options:
    -   Apart from uploading and importing all action lines, you are now able to upload and import only test step actions.
    -   Keep folder structure option allows you to organize the tests in TFS in a similar way to those in TestArchitect or vice versa.
    -   Scan the project for existing tests: option allows you to avoid creating duplicated tests on TFS by not only scanning for previously-created tests on the selected test suite but also the whole TFS project. Whenever the test to be uploaded already exists, you’ll be prompted to keep or skip it on the**Confirm Overwriting** dialog box. This works for importing tests from TFS to TA also.
-   The length limit of a [test step](/user-guide/tests/test-cases/test-steps/creating-test-steps)’s title has been increased from 70 characters up to 30,000 characters. This improvement allows you to create more meaningful and descriptive titles.
-   Support for [Windows Server 2016](/user-guide/getting-started/supported-platforms): TestArchitect has been verified as fully functional on Windows Server 2016.

## TestArchitect Automation  

-   Support for Windows Server 2016: you are able to conduct different types of automated testing on Windows Server 2016:
    -   Automate desktop applications.
    -   Automate native applications on Android and iOS devices \(with no changes to the scope of mobile OS versions\).
    -   Automate web applications on desktop browsers such as Microsoft Edge, Internet Explorer, Firefox, and Chrome.
-   Support for [Chrome 69](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) and [Firefox 62](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/): Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.
-   Support for [Chrome 69 on Android 8](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/): You can carry out Chrome-based automated tests on devices running this version of the Android operating system.

