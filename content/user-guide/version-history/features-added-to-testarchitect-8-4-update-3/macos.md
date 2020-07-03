--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running on macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.4_update_3.html
keywords: "Release Notes 8.4 Update 3, macOS, What is new, macOS, TestArchitect 8.4 Update 3, TestArchitect 8.4 Update 3, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running on macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   Support for[macOS Mojave \(10.14\)](/user-guide/getting-started/supported-platforms) - TestArchitect has been verified as fully functional on macOS.
-   The TestArchitect command line tool is supplemented with one more command named export which allows users to [export](/user-guide/testarchitect-command-line-tool/export-command) TestArchitect items like repository, project, built-in actions, test modules/test cases using the command interface.
-   **Loading mechanism of a test module is changed.** When you open a test module, the Results tab is not loaded until you switch to it. So the loading time of the test module is reduced.
-   When you open a test result, the tree node does not automatically expand and focus the result for faster loading time. The **Summary** tab of the test results features the [locate in result tree node](/user-guide/working-with-test-results/overview/summary-tab) button.

## TestArchitect Automation

**Enhancements to existing features**

-   **Support for multiple test runs on** [Generic WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/) - WebDriver can work on multiple instances at once. So it provides the capability to test more than one web page simultaneously.

## Repository Server

-   [**Garbage collector**](/administration-guide/repository-server-management/repository-server-control-panel-user-interface) is introduced in order to improve the performance of repositories.


