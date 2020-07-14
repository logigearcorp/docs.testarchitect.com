--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running under Linux"
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4_update_3.html
keywords: "Release Notes 8.4 Update 3, Linux, What is new, Linux, TestArchitect 8.4 Update 3, TestArchitect 8.4 Update 3, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 3 running under Linux

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {{< permerlink >}} {#Whats_New_Linux__section.TAC} 

New features

-   The TestArchitect command line tool is supplemented with one more command named [export](/user-guide/testarchitect-command-line-tool/export-command) which allows users to export TestArchitect items like repository, project, built-in actions, test modules/test cases using the command interface.
-   Loading mechanism of a test module is changed. When you open a test module, the Results tab is not loaded until you switch to it. So the loading time of the test module is reduced.
-   When you open a test result, the tree node does not automatically expand and focus the result for faster loading time. The Summary tab of the test results features the [**locate in result tree node**](/user-guide/working-with-test-results/overview/summary-tab) button.
-   **[Mapping TestArchitect \(TA\) test modules to Zephyr test cases](/user-guide/integration-with-third-party-tools/zephyr-integration/features-of-testarchitect-zephyr-integration/mapping-testarchitect-test-modules-to-zephyr-test-cases)** – Previously, you could only create mapping between TA test cases and Zephyr counterparts. From 8.4 Update 3 onwards, you can also link a TA test module to a Zephyr test case via two ways:
    -   Via test module list view.
    -   Via the Information tab of a test module.

Enhancements to existing features

Zephyr 6.2 is fully supported. The import and upload processes from/to Zephyr experience profound changes. From now on, only test steps, rather than all contents, in test modules are uploaded to Zephyr. New options are available in both processes:

-   Keep folder structure option - allows you to organize the tests in Zephyr in a similar folder structure to those in TestArchitect and vice versa.
-   Scan project for existing tests option - helps eliminate test duplication on Zephyr by not only examining the existing test in the target test folder but also in the whole project.
-   Create folder corresponding to test module option - creates a test folder in Zephyr corresponding to each TA test module.

## TestArchitect Automation {{< permerlink >}} {#Whats_New_Linux__section.Auto} 

Enhancements to existing features

-   Support for multiple test runs on [Generic WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/) - WebDriver can work on multiple instances at once. So it provides the capability to test more than one web page simultaneously.

## Repository Server {{< permerlink >}} {#Whats_New_Linux__section_yht_rqp_yfb} 

-   [Garbage collector](/administration-guide/repository-server-management/repository-server-control-panel-user-interface) is introduced in order to improve the performance of repositories.

