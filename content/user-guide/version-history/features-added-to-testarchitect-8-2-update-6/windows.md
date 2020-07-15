--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 6 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_6_Windows.html
keywords: "Release Notes 8.2 Update 6, Windows, What is new, Windows, TestArchitect 8.2 Update 6, TestArchitect 8.2 Update 6, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 6 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

Enhancements to existing features

-   [Deleting](/user-guide/projects-and-project-items/projects-in-testarchitect/delete-a-project) TestArchitect projects containing project items is now supported.
-   [TAUtilities](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/tautilities-overview), a library which allows you to connect and retrieve data from a TestArchitect repository server, is significantly updated:
    -   New interfaces and new methods are provided:
        -   DataSetFolder interface.
        -   DataSet interface.
        -   ActionFolder interface.
        -   Action interface.
        -   ActionArgument interface.
        -   TestSuiteFolder interface.
        -   TestSuite interface.
    -   For the existing interfaces, additional methods are also provided:
        -   Project interface:
            -   getAction\(\): Returns the desired Action object based on the given tree path.
            -   getActionFolder\(\): Returns the desired ActionFolder object with the given relative tree path.
            -   getActionFolders\(\): Returns recursively a collection of action folders in the current project.
            -   getActions\(\): Returns recursively a collection of user-defined actions in the current project.
            -   getDataset\(\): Returns the desired Dataset object with the given relative tree path.
            -   getDatasetFolder\(\): Returns the desired DatasetFolder object with the given relative tree path.
            -   getDatasetFolders\(\): Returns recursively a collection of dataset folders in the current project.
            -   getDatasets\(\): Returns recursively a collection of datasets in the current project.
            -   getTestSuite\(\): Returns the desired TestSuite object with the given relative tree path.
            -   getTestSuiteFolder\(\): Returns the desired TestSuiteFolder object with the given relative tree path.
            -   getTestSuiteFolders\(\): Returns recursively a collection of test suite folders in the current project.
            -   getTestSuites\(\): Returns recursively a collection of test suites in the current project.
        -   TestModule interface:
            -   getRevisionTimestamp\(\): Gets the value of the **Revision Timestamp** field in the current test module.
            -   getURL\(\): Gets the value of the **URL** field in the current test module.
        -   Result interface:
            -   getWebLink\(\): Gets the value of the **Web Link** field in the current test result.
        -   TestCase interface:
            -   getURL\(\): Gets the value of the **URL** field in the current test case.

## TestArchitect Automation  

-   [hold key](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/hold-key) built-in action: Hold specified keyboard key\(s\) down.
-   [release key](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/release-key) built-in action: Release the specified key\(s\) that were previously held down using the [hold key](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/hold-key) built-in action.

Enhancements to existing features

-   Support for [picture handling](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-the-built-in-browser-on-android-emulators/automation-testing#section.Android_emu_bia) built-in actions on Android emulators.

## Repository Server

-   Ability to specify a user account to start the Repository Server service either during the [installation process](/administration-guide/repository-server-management/changing-user-account-to-start-the-repository-server/changing-user-account-during-installation-process), or via the [Repository Server Control](/administration-guide/repository-server-management/changing-user-account-to-start-the-repository-server/changing-user-account-via-the-repository-server-control-panel-dialog-box) dialog box.

## Deprecation

-   global pos property on web automation has been deprecated. We highly recommend that you use [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property) instead.
-   [TAUtilities](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/tautilities-overview): getVersion\(\) method has been deprecated, due to the fact that the **Version** field of a project item is no longer available.

