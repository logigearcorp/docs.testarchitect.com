--- 
title: "What's new in TestArchitect for macOS"
linktitle: "What's new in TestArchitect for macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 4 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.3_update_4.html
keywords: "Release Notes 8.3 Update 4, macOS, What is new, macOS, TestArchitect 8.3 Update 4, TestArchitect 8.3 Update 4, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 4 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   [**Stopping tests on timeout**](/automation-guide/action-based-testing-language/the-test-language/stopping-tests-on-timeout): You can set time limits in which the execution of test cases will comply. You might need to do this upon the occurrence of a non-responsive test script. If a test case encounters a section of script that does not respond or the script falls into infinite loops, your use of the test case timeout lets that test case finish, when the timeout is reached.
    -   [test case timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/test-case-timeout): Specify the timeout value for an individual test case.
    -   [on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action): Specify the action to be invoked in the event of a timeout event, which occurs in the [INITIAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/initial) section, individual test cases, as well as the [FINAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final) section.
    -   [cleanup timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/cleanup-timeout): Specify the timeout value, for action to be invoked by [on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action).

**Enhancements to existing features**

-   **Support for adding more tests to run via performing a [drag and drop](/user-guide/projects-and-project-items/project-items/list-view/test-module-list-view/#section.Test_executions)**: You can quickly drag and drop additional test modules to be run from test module list views to the Execute Test dialog box.
-   **The total number of executed tests cases and test modules is visible on the [Test Modules](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client#li.TM_panel) panel** of the Execute Test dialog box: You will be aware if the number of executed tests is too large. You are now able to be aware if the number of executed tests is too large Therefore, you are able to make the decision to minimize that number by selecting only essential tests to run.
-   **Pace of license key validation sped up**: Parallel paradigm is now applied while checking license keys. Specifically, the license key validation is performed on both the primary and the redundant license servers simultaneously, so that the amount of time spent on validating key is decreased significantly.
-   **Error-tolerant in license checking**: Occasionally you may encounter the issue of a non- interactive network license. This is due to a problem in network connectivity, which blocks your machines from connecting to the TestArchitect License Server. Now, the TestArchitect Controller allows a given amount of timeout value to avoid license check failure due to network instability issue.


