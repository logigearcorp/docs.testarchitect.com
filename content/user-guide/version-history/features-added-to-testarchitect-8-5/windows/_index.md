--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.5.html
---

The following new features and improvements are introduced in TestArchitect version 8.5 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**Enhancements to existing features**

-   [**Delete a TestArchitect repository**](/TA_Administration/Topics/adm_delete_repo.html#): Now when you delete a repository using the TestArchitect Repository Server Control Panel, you no longer have to stop the repository first, you can delete it immediately.

## TestArchitect Automation

**New features**

-   [**SAP automation support**](/TA_Automation/Topics/aut_sap_integration.html#): SAP software includes many powerful enterprise tools. From now on, TestArchitect supports interacting with SAP, with a focus on SAP BW \(Business Warehouse\).
-   [**Built-In Actions for SAP**](/TA_Automation/Topics/bia_Tree_table.html#): New Built-In Actions specifically for working with SAP tree-list and tree-table.

**Enhancements to existing features**

-   **Support for [Chrome 79](/TA_Automation/Topics/Web_automation.html) and [Firefox 71](/TA_Automation/Topics/Web_automation.html)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.
-   [**Python 3**](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.html#): TestArchitect now supports using Python 3 to implement TestArchitect actions.

## Known issues

-   [**Firefox 70+**](/TA_FAQ/Topics/0x80020015L.html#): There is an issue with geckodriver. Some computers may experience issues when navigating in webdriver mode.
-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

    **Note:** These changes do not effect non-GWD mode.

-   Certain BIA may not behave we expected when SAP cells are obscured by a scrollbar or off the screen. It's best to use the TestArchitect scroll action to reveal the full table before using actions on table cells.
-   When using the action Count Child Node on an SAP Tree List control, you must first use the expand Built-In Action.
-   SAP BW controls use a lazy loading method, so please make sure that you make them visible first \(manually or with a BIA\) before interacting with them in order to get correct results.

**Parent topic:**[Features added to TestArchitect 8.5](/TA_ReleaseNotes/DITA_source/Whats_New_8.5.html)

