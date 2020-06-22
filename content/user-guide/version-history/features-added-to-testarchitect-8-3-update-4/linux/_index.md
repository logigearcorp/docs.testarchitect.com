--- 
title: "What's new in TestArchitect for Linux"
linktitle: "What's new in TestArchitect for Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 4 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.3_update_4.html
keywords: "Release Notes 8.3 Update 4, Linux, What is new, Linux, TestArchitect 8.3 Update 4, TestArchitect 8.3 Update 4, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 4 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   [**Stopping tests on timeout**](/TA_Automation/Topics/aut_stop_tests_after_timeout.html): You can set time limits in which the execution of test cases will comply. You might need to do this upon the occurrence of a non-responsive test script. If a test case encounters a section of script that does not respond or the script falls into infinite loops, your use of the test case timeout lets that test case finish, when the timeout is reached.
    -   [test case timeout](/TA_Automation/Topics/bis_test_case_timeout.html): Specify the timeout value for an individual test case.
    -   [on timeout action](/TA_Automation/Topics/bia_on_timeout_action.html): Specify the action to be invoked in the event of a timeout event, which occurs in the [INITIAL](/TA_Automation/Topics/bia_initial.html) section, individual test cases, as well as the [FINAL](/TA_Automation/Topics/bia_final.html) section.
    -   [cleanup timeout](/TA_Automation/Topics/bis_cleanup_timeout.html): Specify the timeout value, for action to be invoked by [on timeout action](/TA_Automation/Topics/bia_on_timeout_action.html).

**Enhancements to existing features**

-   **Support for adding more tests to run via performing a [drag and drop](/TA_Help/Topics/Listview_TM.html#section.Test_executions)**: You can quickly drag and drop additional test modules to be run from test module list views to the Execute Test dialog box.
-   **The total number of executed tests cases and test modules is visible on the [Test Modules](/TA_Help/Topics/Test_exec_test_execution.html#li.TM_panel) panel** of the Execute Test dialog box: You will be aware if the number of executed tests is too large. You are now able to be aware if the number of executed tests is too large Therefore, you are able to make the decision to minimize that number by selecting only essential tests to run.
-   **Pace of license key validation sped up**: Parallel paradigm is now applied while checking license keys. Specifically, the license key validation is performed on both the primary and the redundant license servers simultaneously, so that the amount of time spent on validating key is decreased significantly.
-   **Error-tolerant in license checking**: Occasionally you may encounter the issue of a non- interactive network license. This is due to a problem in network connectivity, which blocks your machines from connecting to the TestArchitect License Server. Now, the TestArchitect Controller allows a given amount of timeout value to avoid license check failure due to network instability issue.

## TestArchitect Automation

**Enhancements to existing features**

-   [capture screen](/TA_Automation/Topics/bia_capture_screen.html) built-in action: Additional support for saving captured screenshots to .PNG format.


