--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_5_Mac.html
keywords: "Release Notes 8.2 Update 5, macOS, What is new, macOS, TestArchitect 8.2 Update 5, TestArchitect 8.2 Update 5, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   **Supporting for macOS 10.11**: TestArchitect has been verified as fully functional under macOS 10.11 \(El Capitan\).

## TestArchitect Automation

-   **Support for automation on macOS 10.11**: You can now perform the following types of testing with a test controller running under macOS 10.11:
    -   **Automate web applications on [Safari](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/#li_pbz_fkq_js) in physical iOS devices.**
    -   **Automated [native applications](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/#row.Mac_version) on iOS devices.**
-   [wait for control not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/wait-for-control-not-exists) built-in action: Wait \(up until some specified time limit\) for a given control to disappear before executing the next test line.

**Enhancements to existing features**

-   [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) built-in action improvements:
    -   **Enhanced functionality for improved performance:** It’s now possible to submit multiple picture checks to the repository in batches.
    -   **Unverified picture checks** in serial test results can be quickly verified from the serial result nodes in the TestArchitect explorer tree.
-   [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space) built-in setting: Choose whether or not to trim leading and trailing white spaces from text strings that TestArchitect samples from the AUT before making the values available to actions.
-   **Expanded support for the [getCurrentEntityID](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getcurrententityid) method**: A value of testcase for the entityType parameter causes the ID of the currently running test case to be returned.


