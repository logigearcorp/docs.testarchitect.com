--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.4_update_3.html
keywords: "Release Notes 8.4 Update 3, Windows, What is new, Windows, TestArchitect 8.4 Update 3, TestArchitect 8.4 Update 3, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   The TestArchitect command line tool is supplemented with one more command named [export](/TA_Help/Topics/TA_command_line_export.html) which allows users to export TestArchitect items like repository, project, built-in actions, test modules/test cases using the command interface.
-   [Running tests with multiple remote desktop sessions](https://www.testarchitect.com/OnlineHelp/TA_Help/Topics/Test_exec_multiple_remote_desktop_sessions.html) – you can remotely access a computer running Windows Server 2016, executing tests on different remote desktop sessions concurrently. The execution time decreases accordingly.
-   **Loading mechanism of a test module is changed**. When you open a test module, the Results tab is not loaded until you switch to it. So the loading time of the test module is reduced.
-   When you open a test result, the tree node does not automatically expand and focus the result for faster loading time. The Summary tab of the test results features the [**locate in result tree node**](/TA_Help/Topics/Test_result_summaries.html) button.
-   **[Mapping TestArchitect \(TA\) test modules to Zephyr test cases](/TA_Help/Topics/Zephyr_mapping_TM.html)** – Previously, you could only create mapping between TA test cases and Zephyr counterparts. From 8.4 Update 3 onwards, you can also link a TA test module to a Zephyr test case via two ways:
    -   Via test module list view.
    -   Via the Information tab of a test module.

**Enhancements to existing features**

**Zephyr 6.2 is fully supported**. The import and upload processes from/to Zephyr experience profound changes. From now on, only test steps, rather than all contents, in test modules are uploaded to Zephyr. New options are available in both processes:

-   **Keep folder structure** option - allows you to organize the tests in Zephyr in a similar folder structure to those in TestArchitect and vice versa.
-   **Scan project for existing tests** option - helps eliminate test duplication on Zephyr by not only examining the existing test in the target test folder but also in the whole project.
-   **Create folder corresponding to test module** option - creates a test folder in Zephyr corresponding to each TA test module.

## TestArchitect Automation

**New features**

-   Menu-related built-in settings are introduced to allow you to interact with menus more effectively:

    -   [menu interact delay](https://www.testarchitect.com/OnlineHelp/TA_Automation/Topics/bis_menu_interact_delay.html) built-in setting - is used to specify a wait time before clicking the next menu items.
    -   [menu interact type](https://www.testarchitect.com/OnlineHelp/TA_Automation/Topics/bis_menu_interact_type.html) built-in setting - is used to determine which action \(click or hover\) to take on each middle-level menu item.

**Enhancements to existing features**

-   **Support for multiple test runs on [Generic WebDriver](/TA_Automation/Topics/Generic_WebDriver.html)** - WebDriver can work on multiple instances at once. So it provides the capability to test more than one web page simultaneously.
-   Support for [Chrome 71](https://www.testarchitect.com/OnlineHelp/TA_ReleaseNotes/DITA_source/Supported_platforms.html) and [Firefox 64](https://www.testarchitect.com/OnlineHelp/TA_ReleaseNotes/DITA_source/Supported_platforms.html) - Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.

## Repository Server

-   [**Garbage collector**](/TA_Administration/Topics/Repo_server_management_control_panel.html) is introduced in order to improve the performance of repositories.


