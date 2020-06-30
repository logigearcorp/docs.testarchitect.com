--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.2_update_5.html
keywords: "Release Notes 8.2 Update 5, Windows, What is new, Windows, TestArchitect 8.2 Update 5, TestArchitect 8.2 Update 5, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   **Support for Windows 10**: TestArchitect has been verified as fully functional under Windows 10.

**Enhancements to existing features**

-   [**Support for Visual Studio 2015 Update 1**](/user-guide/integration-with-third-party-tools/tfs-integration/supported-versions): TestArchitect now supports integration with Visual Studio 2015 Update 1, and both the on-premise and cloud-based forms of Team Foundation Server 2015 Update 1.

## TestArchitect Automation

-   **Support for Windows 10**: You can now perform the following types of automated testing with a Windows 10-based test controller:
    -   **Automate classic desktop applications**.
    -   **Automate native applications on Android and iOS devices.**
    -   **Automate web applications on desktop browsers** including Internet Explorer, Firefox, and Chrome.
-   [wait for control not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/wait-for-control-not-exists) built-in action: Wait \(up until some specified time limit\) for a given control to disappear before executing the next test line.
-   [get system double click time](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/get-system-double-click-time) built-in action: Retrieve the host test system’s current setting for maximum interval between clicks, if two clicks are to be interpreted as a single double-click.
-   [double click time](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/double-click-time) built-in setting: Set the spacing between individual clicks, for those actions that apply a double-click to the AUT.

**Enhancements to existing features**

-   Mobile automation:
    -   Support for automating [re-signed applications](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/) and [Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/) on Android 6.0.

        {{<note>}} As of this release, Dolphin browser versions 11.5 and later running on Android 6.0 are not currently supported.

    -   Support for [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) and [OCR](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/) built-in actions on [Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/) in physical Android devices with ARM architecture.
-   [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) built-in action improvements:
    -   **Enhanced functionality for improved performance:** It’s now possible to submit multiple picture checks to the repository in batches.
    -   **Unverified picture checks** in serial test results can be quickly verified from the serial result nodes in the TestArchitect explorer tree.
-   [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space) built-in setting: Choose whether or not to trim leading and trailing white spaces from text strings that TestArchitect samples from the AUT before making the values available to actions.
-   **Expanded support for the [getCurrentEntityID](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getcurrententityid) method**: A value of testcase for the entityType parameter causes the ID of the currently running test case to be returned.


