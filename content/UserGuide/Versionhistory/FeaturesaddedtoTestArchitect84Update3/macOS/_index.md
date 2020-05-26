--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.4_update_3.html
---
# What's new in TestArchitect for macOS {#Whats_New_macOS .concept}

The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running on macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {#section.TAC .section}

**New features**

-   Support for[macOS Mojave \(10.14\)](https://www.testarchitect.com/OnlineHelp/TA_ReleaseNotes/DITA_source/Supported_platforms.html) - TestArchitect has been verified as fully functional on macOS.
-   The TestArchitect command line tool is supplemented with one more command named export which allows users to [export](https://www.testarchitect.com/OnlineHelp/TA_Help/Topics/TA_command_line_export.html) TestArchitect items like repository, project, built-in actions, test modules/test cases using the command interface.
-   **Loading mechanism of a test module is changed.** When you open a test module, the Results tab is not loaded until you switch to it. So the loading time of the test module is reduced.
-   When you open a test result, the tree node does not automatically expand and focus the result for faster loading time. The **Summary** tab of the test results features the [locate in result tree node](https://www.testarchitect.com/OnlineHelp/TA_Help/Topics/Test_result_summaries.html) button.

## TestArchitect Automation {#section.Auto .section}

**Enhancements to existing features**

-   **Support for multiple test runs on** [Generic WebDriver](https://www.testarchitect.com/OnlineHelp/TA_Automation/Topics/Generic_WebDriver.html) - WebDriver can work on multiple instances at once. So it provides the capability to test more than one web page simultaneously.

## Repository Server {#section_yht_rqp_yfb .section}

-   [**Garbage collector**](../../TA_Administration/Topics/Repo_server_management_control_panel.html) is introduced in order to improve the performance of repositories.

**Parent topic:**[Features added to TestArchitect 8.4 Update 3](../../TA_ReleaseNotes/DITA_source/Whats_New_8.4_update_3.html)

