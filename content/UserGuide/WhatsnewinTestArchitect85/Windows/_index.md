--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows.html
---
# What's new in TestArchitect for Windows {#Whats_New_Windows .concept}

The following new features and improvements are introduced in the latest version of TestArchitect running on Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {#section.TAC .section}

**Enhancements to existing features**

-   [**Delete a TestArchitect repository**](../../TA_Administration/Topics/adm_delete_repo.md#): Now when you delete a repository using the TestArchitect Repository Server Control Panel, you no longer have to stop the repository first, you can delete it immediately.

## TestArchitect Automation {#section.Auto .section}

**New features**

-   [**SAP automation support**](../../TA_Automation/Topics/aut_sap_integration.md#): SAP software includes many powerful enterprise tools. From now on, TestArchitect supports interacting with SAP controls, with a focus on SAP BW \(Business Warehouse\).
-   [**Built-In Actions for SAP**](../../TA_Automation/Topics/bia_Tree_table.md#): New Built-In Actions specifically for working with SAP tree-list and tree-table.

**Enhancements to existing features**

-   **Support for [Chrome 79](../../TA_Automation/Topics/Web_automation.html) and [Firefox 71](../../TA_Automation/Topics/Web_automation.html)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.
-   [**Python 3**](../../TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.md#): TestArchitect now supports using Python 3 to implement TestArchitect actions.

## Known issues {#section_hhf_pk5_4jb .section}

-   [**Firefox 70+**](../../TA_FAQ/Topics/0x80020015L.md#): There is an issue with geckodriver. Some computers may experience issues when navigating in webdriver mode.

**Parent topic:**[What's new in TestArchitect 8.5](../../TA_ReleaseNotes/DITA_source/Whats_New.html)

