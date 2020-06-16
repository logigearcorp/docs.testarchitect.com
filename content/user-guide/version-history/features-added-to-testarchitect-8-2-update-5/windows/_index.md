--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.2_update_5.html
keywords: "Release Notes 8.2 Update 5, Windows, What is new, Windows, TestArchitect 8.2 Update 5, TestArchitect 8.2 Update 5, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   **Support for Windows 10**: TestArchitect has been verified as fully functional under Windows 10.

**Enhancements to existing features**

-   [**Support for Visual Studio 2015 Update 1**](/TA_Help/Topics/ug_MTM_supported_platforms.html): TestArchitect now supports integration with Visual Studio 2015 Update 1, and both the on-premise and cloud-based forms of Team Foundation Server 2015 Update 1.

## TestArchitect Automation

-   **Support for Windows 10**: You can now perform the following types of automated testing with a Windows 10-based test controller:
    -   **Automate classic desktop applications**.
    -   **Automate native applications on Android and iOS devices.**
    -   **Automate web applications on desktop browsers** including Internet Explorer, Firefox, and Chrome.
-   [wait for control not exists](/TA_Automation/Topics/bia_wait_for_control_not_exists.html) built-in action: Wait \(up until some specified time limit\) for a given control to disappear before executing the next test line.
-   [get system double click time](/TA_Automation/Topics/bia_get_system_double_click_time.html) built-in action: Retrieve the host test system’s current setting for maximum interval between clicks, if two clicks are to be interpreted as a single double-click.
-   [double click time](/TA_Automation/Topics/bis_double_click_time.html) built-in setting: Set the spacing between individual clicks, for those actions that apply a double-click to the AUT.

**Enhancements to existing features**

-   Mobile automation:
    -   Support for automating [re-signed applications](/Android/Topics/Android_Automation_begin.html) and [Chrome](/TA_Automation/Topics/aut_app_testing_mobile_web_Android.html) on Android 6.0.

        **Note:** As of this release, Dolphin browser versions 11.5 and later running on Android 6.0 are not currently supported.

    -   Support for [picture handling](/TA_Automation/Topics/bia_picture_handling.html) and [OCR](/TA_Automation/Topics/bia_OCR.html) built-in actions on [Chrome](/TA_Automation/Topics/aut_app_testing_mobile_web_Android.html) in physical Android devices with ARM architecture.
-   [check picture](/TA_Automation/Topics/bia_check_picture.html) built-in action improvements:
    -   **Enhanced functionality for improved performance:** It’s now possible to submit multiple picture checks to the repository in batches.
    -   **Unverified picture checks** in serial test results can be quickly verified from the serial result nodes in the TestArchitect explorer tree.
-   [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html) built-in setting: Choose whether or not to trim leading and trailing white spaces from text strings that TestArchitect samples from the AUT before making the values available to actions.
-   **Expanded support for the [getCurrentEntityID](/TA_Automation/Topics/abtf_getCurrentEntityID.html) method**: A value of testcase for the entityType parameter causes the ID of the currently running test case to be returned.


