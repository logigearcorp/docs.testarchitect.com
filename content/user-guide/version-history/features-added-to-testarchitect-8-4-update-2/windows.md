--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 2 running under Windows.."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.4_update_2.html
keywords: "Release Notes 8.4 Update 2, Windows, What is new, Windows, TestArchitect 8.4 Update 2, TestArchitect 8.4 Update 2, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 2 running under Windows..

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   The [delete](/user-guide/testarchitect-command-line-tool/delete-command) command is added to the TestArchitect command line tool. From now on, you can use ta delete to do a bulk deletion of local test results based on certain conditions from the command line shell.
-   Ability to configure the [number of retries for a failed connection](/administration-guide/connections/connection-retry-configuration) which the TestArchitect Controller establishes to a repository server. This helps users deal with an unstable network efficiently.
-   **[Users are prevented from changing the values of user-defined fields used in test results](/user-guide/working-with-test-results/)**. If you adjust the value of a user-defined field on the **Information** tab of a test module, it will not take effect on the test result of this module. The test result will still adopt the default value.

## TestArchitect Automation

**New features**

-   **Partial support for Generic WebDriver**: automated testing with [WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/) is within your reach. Numerous actions and setting are specially designed to better suit the behaviors of WebDriver.
    -   The [configure webdriver](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/configure-webdriver) action is used for setting up an advanced test environment.
    -   **Popup Handling**: the [click popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-popup) action is used for clicking a button in a popup; the [copy popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/copy-popup-message) action is used for obtaining the message in a popup; the enter value in popup action is used for writing text in a field in a popup.
    -   **Frame switching**: the [switch frame by path](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-frame-by-path) action is used for shifting the focus to the target frame defined by frame path whereas [switch frame by destination](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-frame-by-destination) is used for jumping to the main or parent frame.
    -   **Turning on and off** the mode of [automatic switch](/automation-guide/action-based-testing-language/built-in-settings/other-settings/auto-switch-window) among window instances. If the mode is on, when you open a new window instance, the focus will be shifted to the newly opened window instance. Otherwise, the focus will stay in the current window instance. Furthermore, you can move the focus to another window using the [switch window](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-window) action.
    -   [target browser instance](/automation-guide/action-based-testing-language/built-in-settings/other-settings/target-browser-instance) offers you a choice whether the navigate built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL.

**Enhancements to existing features**

-   **Support for [Chrome 70](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) and [Firefox 63](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.

## Repository Server

-   Ability to configure the **[connection backlog size](/administration-guide/repository-server-management/configuring-connection-backlog-size-for-a-repository-server)** for a repository server – allows users to specify the maximum size of the queue used for holding pending connections to a repository server.

## Known Issues

-   The repository memory is leaked after an enormous number of nodes connect to and interact with the repository server. A typical case is that 3 JPPF servers submit 13000 jobs to 72 nodes, and test results are sent to a repository server; as a result, memory leak occurs.


