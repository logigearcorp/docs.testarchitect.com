--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.2.html
---

The following new features and improvements are introduced in TestArchitect version 8.2 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Time-traveling execution**](/TA_Help/Topics/ug_time_traveling.html): Time-traveling execution provides support for retroactive execution, that is, the ability to execute a particular historical snapshot, or set of revisions, of project items in a given project. Given its ability to find the right set of test assets for a particular past version of an application, time-traveling execution is well-suited for regression testing on AUT versions that precede the current release.

    **Note:**

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
-   **Team Foundation Server-Microsoft Test Manager integration improvement**:
    -   [**Mapping test result status**](/TA_Help/Topics/Integration_MTM_connecting_TFS.html#choice_xrl_w5x_xs): Statuses of TestArchitect test results, such as Passed with Warning/Error, Pending Picture Check\(s\), and others, can be mapped to corresponding statuses of Team Foundation Server test results, such as Passed, Failed, or Inconclusive.
    -   [**Mapping a TestArchitect project to a Team Foundation Server project**](/TA_Help/Topics/Integration_MTM_map_proj.html): Mapping a Test Architect project to a Team Foundation Server team project allows you to upload test results to TFS.
    -   **Importing Team Foundation Server [test suites](/TA_Help/Topics/ug_MTM_import_TS.html)/[test cases](/TA_Help/Topics/ug_MTM_import_TC.html) to TestArchitect**: Test cases or test suites residing on Team Foundation Server may be imported into TestArchitect, establishing one-to-one mappings between the two sets of test cases.
    -   [**Uploading TestArchitect test modules/test cases to Team Foundation Server**](/TA_Help/Topics/ug_upload_TAtest_MTM.html): TestArchitect test cases and test modules can be uploaded to the Team Foundation Server, which also establishes one-to-one mappings between the two sets of test cases.
    -   **Uploading TestArchitect test results to Team Foundation Server**: Results of tests executed and stored in TestArchitect from projects mapped to Team Foundation Server may be conveniently uploaded to Team Foundation Server either [manually](/TA_Help/Topics/ug_MTM_upload_result_manual.html) \(via the context menu\), or [automatically](/TA_Help/Topics/ug_MTM_upload_result_automatic.html) upon conclusion of a test run.
    -   [**Matching custom fields between TestArchitect and Team Foundation Server**](/TA_Help/Topics/ug_MTM_matching_custom_fields.html): Custom fields in Team Foundation Server may be mapped to user-defined fields in TestArchitect test modules or test cases, and vice versa. Mapping is driven by field names. Fields in Team Foundation Server and TestArchitect are mapped automatically when their names are identical and their data types are compatible.
    -   [**Upgrading build assemblies of the TestArchitect plug-in**](/TA_Help/Topics/ug_MTM_upgrading_assemblies.html): When installed, information for the TestArchitect-Microsoft Test Manager plug-in is stored in build assembly files. These files may now be upgraded when necessary - either manually or automatically - to ease the process of upgrading to a newer version of the plug-in.
    -   [**Switching to a different TFS account**](/TA_Help/Topics/ug_MTM_switching_TFS_account.html): You have the option of rapidly switching from the current TFS account to a different account.
    -   **INITIAL****and****FINAL****sections are both invoked for each [test case run](/TA_Help/Topics/Integration_MTM_running_test_cases.html#note_xkz_kfr_yq)**: When running an automated test, the execution of every single Team Foundation Server test case entails the execution of both the INITIAL and FINAL sections of the associated TestArchitect test module, if any. For example, the execution of test case \#01 is preceded by the execution of the INITIAL section, and followed by the FINAL section; the same is true for test case \#02, and each subsequent test case.

## TestArchitect Automation

-   [**Introduction of XPath property**](/TA_Help/Topics/prop_xpath.html): TestArchitect uses a special new TA property, called XPath and derived from the XPath language, to uniquely locate UI controls within tested web applications. Specifically, TestArchitect depicts the UI controls running on web applications as a hierarchical representation of elements and provides the XPath TA property for each control to uniquely identify it within that hierarchy.
-   **Support for escape sequences during string processing**: A new built-in setting, [escape sequences](/TA_Automation/Topics/bis_escape_sequences.html), allows this functionality to be enabled or turned off.


**Enhancements to existing features**

-   **[Improved Action Recorder for web apps on Internet Explorer](/TA_Help/Topics/Creating_and_using_actions_AR.html)**:
    -   Improved design: Action Recorder now generates test procedures with high stability and reusability, consistent with Action-Based Testing.
    -   [tabs](/TA_Automation/Topics/Expressions_functions_tab.html) and [newlines](/TA_Automation/Topics/Expressions_functions_newLine.html) can now be generated for the [enter](/TA_Automation/Topics/bia_enter.html)/[set](/TA_Automation/Topics/bia_set.html) action and the Check function. \(The Check function is available on the [Recording toolbar](/TA_Help/Topics/ug_AR_overview.html) and is used to insert checkpoints into the current test.\)
    -   The XPath TA property is used to identify window and control definitions that are generated during the recording session.
    -   Manual keyboard entry of the characters ^, +, % and \# is now recorded correctly, ensuring that they are not misinterpreted as special characters during playback.
    -   Support for recording tests on Internet Explorer 64-bit version.
    -   Support in TestArchitect 64-bit for recording within both the 32- and 64-bit versions of Internet Explorer. \(Note, however, that TestArchitect 32-bit does support recording within Internet Explorer 64-bit.\)
    -   New built-in actions, [navigate](/TA_Automation/Topics/bia_navigate.html) and [move mouse](/TA_Automation/Topics/bia_move_mouse.html), are generated during the recording session.
    -   In the generated interface entity, reduced the number of TA property-value pairs used to identify the associated web page: only the doc title property is now used.
    -   Action Recorder performance much improved, including start up time and speed of test procedure generation.

**Parent topic:**[Features added to TestArchitect 8.2](/TA_ReleaseNotes/DITA_source/Whats_New_8.2.html)

