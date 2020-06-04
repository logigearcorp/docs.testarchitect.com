--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.4_update_2.html
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 2 running on macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   Ability to configure the [number of retries for a failed connection](/TA_Administration/Topics/Connection_retry_configuration.html) which the TestArchitect Controller establishes to a repository server. This helps users deal with an unstable network efficiently.
-   **[Users are prevented from changing the values of user-defined fields used in test results](/TA_Help/Topics/Test_result.html)**. If you adjust the value of a user-defined field on the **Information** tab of a test module, it will not take effect on the test result of this module. The test result will still adopt the default value.
-   **Support for [macOS 10.12](Supported_platforms.html) and [10.13](Supported_platforms.html)**: TestArchitect has been verified as fully functional on macOS 10.12 and 10.13.

## TestArchitect Automation

**New features**

-   **Partial support for Generic WebDriver**: automated testing with [WebDriver](/TA_Automation/Topics/Generic_WebDriver.html) is within your reach. Numerous actions and setting are specially designed to better suit the behaviors of WebDriver.
    -   The [configure webdriver](/TA_Automation/Topics/bia_configure_webdriver.html) action is used for setting up an advanced test environment.
    -   **Popup Handling**: the [click popup](/TA_Automation/Topics/bia_click_popup.html) action is used for clicking a button in a popup; the [copy popup message](/TA_Automation/Topics/bia_copy_popup_message.html) action is used for obtaining the message in a popup; the enter value in popup action is used for writing text in a field in a popup.
    -   **Frame switching**: the [switch frame by path](/TA_Automation/Topics/bia_switch_frame_by_path.html) action is used for shifting the focus to the target frame defined by frame path whereas [switch frame by destination](/TA_Automation/Topics/bia_switch_frame_by_destination.html) is used for jumping to the main or parent frame.
    -   **Turning on and off** the mode of [automatic switch](/TA_Automation/Topics/bis_auto_switch_windows.html) among window instances. If the mode is on, when you open a new window instance, the focus will be shifted to the newly opened window instance. Otherwise, the focus will stay in the current window instance. Furthermore, you can move the focus to another window using the [switch window](/TA_Automation/Topics/bia_switch_window.html) action.
    -   [target browser instance](/TA_Automation/Topics/bis_target_browser_instance.html) offers you a choice whether the navigate built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL.

## Repository Server

-   Ability to configure the **[connection backlog size](/TA_Administration/Topics/Repo_connection_backlog.html)** for a repository server – allows users to specify the maximum size of the queue used for holding pending connections to a repository server.

## Known Issues

-   The repository memory is leaked after an enormous number of nodes connect to and interact with the repository server. A typical case is that 3 JPPF servers submit 13000 jobs to 72 nodes, and test results are sent to a repository server; as a result, memory leak occurs.

**Parent topic:**[Features added to TestArchitect 8.4 Update 2](/TA_ReleaseNotes/DITA_source/Whats_New_8.4_update_2.html)

