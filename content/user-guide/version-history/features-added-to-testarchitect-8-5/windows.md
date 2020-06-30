--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.5 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.5.html
keywords: "Release Notes 8.5, Windows, What is new, Windows, TestArchitect 8.5, TestArchitect 8.5, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.5 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**Enhancements to existing features**

-   [**Delete a TestArchitect repository**](/administration-guide/repository-server-management/deleting-a-repository#): Now when you delete a repository using the TestArchitect Repository Server Control Panel, you no longer have to stop the repository first, you can delete it immediately.

## TestArchitect Automation

**New features**

-   [**SAP automation support**](/automation-guide/application-testing/testing-sap-applications/#): SAP software includes many powerful enterprise tools. From now on, TestArchitect supports interacting with SAP, with a focus on SAP BW \(Business Warehouse\).
-   [**Built-In Actions for SAP**](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-table-tree-list/#): New Built-In Actions specifically for working with SAP tree-list and tree-table.

**Enhancements to existing features**

-   **Support for [Chrome 79](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) and [Firefox 71](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.
-   [**Python 3**](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-python-harness/#): TestArchitect now supports using Python 3 to implement TestArchitect actions.

## Known issues

-   [**Firefox 70+**](/automation-guide/diagnosing-and-resolving-automation-errors/testarchitect-cannot-navigate-with-webdriver-mode-in-firefox-70-and-geckodriver-v0-26-0#): There is an issue with geckodriver. Some computers may experience issues when navigating in webdriver mode.
-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

    {{<note>}} These changes do not effect non-GWD mode.

-   Certain BIA may not behave we expected when SAP cells are obscured by a scrollbar or off the screen. It's best to use the TestArchitect scroll action to reveal the full table before using actions on table cells.
-   When using the action Count Child Node on an SAP Tree List control, you must first use the expand Built-In Action.
-   SAP BW controls use a lazy loading method, so please make sure that you make them visible first \(manually or with a BIA\) before interacting with them in order to get correct results.


