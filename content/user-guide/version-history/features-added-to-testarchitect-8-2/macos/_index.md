--- 
title: "What's new in TestArchitect for macOS"
linktitle: "What's new in TestArchitect for macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.2.html
keywords: "Release Notes 8.2, macOS, What is new, macOS, TestArchitect 8.2, TestArchitect 8.2, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.2 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Time-traveling execution**](/TA_Help/Topics/ug_time_traveling.html): Time-traveling execution provides support for retroactive execution, that is, the ability to execute a particular historical snapshot, or set of revisions, of project items in a given project. Given its ability to find the right set of test assets for a particular past version of an application, time-traveling execution is well-suited for regression testing on AUT versions that precede the current release.

{{<note>}}

    -   Implementation of time-traveling execution has necessitated structural changes to TestArchitect repository databases. An [upgrade tool](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html) is provided to allow you to take advantage of time traveling on repositories created prior to TestArchitect version 8.2.
    -   Note that repository databases belonging to TestArchitect version 6.4 or earlier must be upgraded in stages:
        1.  If your TestArchitect version is 6.4 or earlier, upgrade TestArchitect to any version between 7.3 and 8.1.
        2.  From a TestArchitect 7.3-8.1 installation, run the repository upgrade tool. This upgrades your repository databases to support name change propagation \([learn more](/TA_Administration/Topics/Repo_database_upgrade.html)\), a prerequisite for time traveling support.
        3.  Upgrade to TestArchitect version 8.2.
        4.  Run the 8.2 [repository upgrade tool](/TA_Administration/Topics/adm_database_upgrade_time_traveling.html). This upgrade provides time traveling support to your databases.
-   **Support for time zones**: To help teams spread across different time zones, TestArchitect can now automatically display date and time values for project assets relative to the time zone in which they are being viewed. As an example, during the months of Daylight Savings Time, Vietnam is 14 hours ahead of the U.S. Pacific Time Zone. Hence, if a team in California checks in a project item at 3:00pm on January 1, Vietnamese engineers see the item as having a **Last update date** of 5:00am, January 2.

**Enhancements to existing features**

-   [**Support for creating a branch in variations**](/TA_Help/Topics/ug_variations_create_new_branch.html): Branches are most typically used to represent the test changes implemented to accommodate series of patches or hot fixes, usually involving such things as bug fixes or performance enhancements for a given version of an AUT. Note that you may also create subtrees of version nodes under branch nodes.
-   [**Support for picture checks in project subscription**](/TA_Help/Topics/Project_subscription.html): Picture checks stored within the **Picture Checks** node can now be shared across multiple projects via subscription. In other words, your project can reuse picture checks that reside in other projects.
-   [**Enhanced support for Revision Control**](/TA_Help/Topics/Revision_control.html): TestArchitect Revision Control saves pertinent information on a project item every time it is checked in. Each revision is now identified by the following information:
    -   timestamp \(that is, the checked-in date and time\)
    -   assigned AUT versions
    -   host project name
    -   project item type
    -   project item name
    -   user who checked in the item
    -   check-in comment
-   New UI for the [Version History](/TA_Help/Topics/Project_items_history.html) dialog box.
-   [**Support for Context-sensitive help**](/TA_UsingHelpSystem/Topics/hs_getting_help.html) **of** [**built-in settings**](/TA_Automation/Topics/bis_Built_in_settings.html): Positioning your cell pointer over a built-in setting in the test editor and pressing F1 opens TestArchitect Help with the associated reference topic displayed.

## TestArchitect Automation

-   **Support for automation on [Safari](/TA_Automation/Topics/Web_automation.html#li_pbz_fkq_js) running on macOS machines** – Beta version: TestArchitect now supports recognition of UI web controls in Safari, allowing you to carry out testing of web applications running on Safari.
-   **Support for escape sequences during string processing**: A new built-in setting, [escape sequences](/TA_Automation/Topics/bis_escape_sequences.html), allows this functionality to be enabled or turned off.



