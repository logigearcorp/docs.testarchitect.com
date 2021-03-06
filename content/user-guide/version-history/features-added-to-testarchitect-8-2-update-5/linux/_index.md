--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8_update_5_Linux.html
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 5 running under Linux.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation

-   [wait for control not exists](/TA_Automation/Topics/bia_wait_for_control_not_exists.html) built-in action: Wait \(up until some specified time limit\) for a given control to disappear before executing the next test line.

**Enhancements to existing features**

-   [check picture](/TA_Automation/Topics/bia_check_picture.html) built-in action improvements:
    -   **Enhanced functionality for improved performance:** It’s now possible to submit multiple picture checks to the repository in batches.
    -   **Unverified picture checks** in serial test results can be quickly verified from the serial result nodes in the TestArchitect explorer tree.
-   [ignore blank space](/TA_Automation/Topics/bis_ignore_blank_space.html) built-in setting: Choose whether or not to trim leading and trailing white spaces from text strings that TestArchitect samples from the AUT before making the values available to actions.
-   **Expanded support for the [getCurrentEntityID](/TA_Automation/Topics/abtf_getCurrentEntityID.html) method**: A value of testcase for the entityType parameter causes the ID of the currently running test case to be returned.

**Parent topic:**[Features added to TestArchitect 8.2 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_5.html)

