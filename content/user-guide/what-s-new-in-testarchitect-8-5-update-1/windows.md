--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in the latest version of TestArchitect running on Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows.html
keywords: "Release Notes 8.5 update 1, Windows, What is new, Windows, TestArchitect 8.5 update 1, TestArchitect 8.5 update 1, what is new, Windows"
---

The following new features and improvements are introduced in the latest version of TestArchitect running on Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.

## TestArchitect Client  

Enhancements to existing features

-   [**Repository Versioning**](/administration-guide/repository-server-management/repository-version#): From 8.5 Update 1 onward, as long as TestArchitect Client and Repository Server share the same major version number, they can work with each other without any compatibility problems.

## TestArchitect Automation  

New features

-   [**SAP automation support**](/automation-guide/application-testing/testing-sap-applications/#): TestArchitect support for SAP has been complete for all major controls and the following SAP controls have been newly supported:

    -   Calendar
    -   Richtext
    -   Frame
    -   Password field
    -   Status bar
    -   Combo-box
    Additionally, TestArchitect now supports [unlock container classes](/user-guide/interface-definitions/container-classes/unlocking-container-classes#) and [class mapping](/user-guide/interface-definitions/class-mapping/#) for SAP.


Enhancements to existing features

-   Support for [Chrome 80, 81**](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) and [**Firefox 74, 75**](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.
-   [**Execute command in Window JP**](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/execute-command#): Support two encoding types of **charset** in execute command:
    -   **Shift-JIS**: Encodes the file with Shift-JIS format. Recommended for use with Windows with Japanese characters.
    -   **UTF-8**: Encodes the file with UTF-8 format.

