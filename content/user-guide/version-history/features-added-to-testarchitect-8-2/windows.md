--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.2.html
keywords: "Release Notes 8.2, Windows, What is new, Windows, TestArchitect 8.2, TestArchitect 8.2, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## {{< expand >}} TestArchitect Client

-   [**Time-traveling execution**](/user-guide/test-execution/time-traveling-execution/): Time-traveling execution provides support for retroactive execution, that is, the ability to execute a particular historical snapshot, or set of revisions, of project items in a given project. Given its ability to find the right set of test assets for a particular past version of an application, time-traveling execution is well-suited for regression testing on AUT versions that precede the current release.

    {{<note>}}

    -   Implementation of time-traveling execution has necessitated structural changes to TestArchitect repository databases. An [upgrade tool](/administration-guide/repository-server-management/upgrading-the-repository-database-for-time-traveling-execution) is provided to allow you to take advantage of time traveling on repositories created prior to TestArchitect version 8.2.
    -   Note that repository databases belonging to TestArchitect version 6.4 or earlier must be upgraded in stages:
        1.  If your TestArchitect version is 6.4 or earlier, upgrade TestArchitect to any version between 7.3 and 8.1.
        2.  From a TestArchitect 7.3-8.1 installation, run the repository upgrade tool. This upgrades your repository databases to support name change propagation \([learn more](/administration-guide/repository-server-management/upgrading-the-repository-database-for-name-change-propagation/)\), a prerequisite for time traveling support.
        3.  Upgrade to TestArchitect version 8.2.
        4.  Run the 8.2 [repository upgrade tool](/administration-guide/repository-server-management/upgrading-the-repository-database-for-time-traveling-execution). This upgrade provides time traveling support to your databases.
-   **Support for time zones**: To help teams spread across different time zones, TestArchitect can now automatically display date and time values for project assets relative to the time zone in which they are being viewed. As an example, during the months of Daylight Savings Time, Vietnam is 14 hours ahead of the U.S. Pacific Time Zone. Hence, if a team in California checks in a project item at 3:00pm on January 1, Vietnamese engineers see the item as having a **Last update date** of 5:00am, January 2.

**Enhancements to existing features**

-   [**Support for creating a branch in variations**](/user-guide/variations/creating-linked-variations/the-systems-tree/create-a-new-branch-node): Branches are most typically used to represent the test changes implemented to accommodate series of patches or hot fixes, usually involving such things as bug fixes or performance enhancements for a given version of an AUT. Note that you may also create subtrees of version nodes under branch nodes.
-   [**Support for picture checks in project subscription**](/user-guide/projects-and-project-items/projects-in-testarchitect/project-subscription/): Picture checks stored within the **Picture Checks** node can now be shared across multiple projects via subscription. In other words, your project can reuse picture checks that reside in other projects.
-   [**Enhanced support for Revision Control**](/user-guide/projects-and-project-items/project-items/revision-control/): TestArchitect Revision Control saves pertinent information on a project item every time it is checked in. Each revision is now identified by the following information:
    -   timestamp \(that is, the checked-in date and time\)
    -   assigned AUT versions
    -   host project name
    -   project item type
    -   project item name
    -   user who checked in the item
    -   check-in comment
-   New UI for the [Version History](/user-guide/projects-and-project-items/project-items/revision-control/revision-history/) dialog box.
-   [**Support for Context-sensitive help**](/using-the-testarchitect-help-system/getting-help) **of** [**built-in settings**](/automation-guide/action-based-testing-language/built-in-settings/): Positioning your cell pointer over a built-in setting in the test editor and pressing F1 opens TestArchitect Help with the associated reference topic displayed.
-   **Team Foundation Server-Microsoft Test Manager integration improvement**:
    -   [**Mapping test result status**](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection#choice_xrl_w5x_xs): Statuses of TestArchitect test results, such as Passed with Warning/Error, Pending Picture Check\(s\), and others, can be mapped to corresponding statuses of Team Foundation Server test results, such as Passed, Failed, or Inconclusive.
    -   [**Mapping a TestArchitect project to a Team Foundation Server project**](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/mapping-a-ta-project-to-a-tfs-project): Mapping a Test Architect project to a Team Foundation Server team project allows you to upload test results to TFS.
    -   **Importing Team Foundation Server [test suites](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/importing-tfs-test-suites)/[test cases](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/importing-tfs-test-cases) to TestArchitect**: Test cases or test suites residing on Team Foundation Server may be imported into TestArchitect, establishing one-to-one mappings between the two sets of test cases.
    -   [**Uploading TestArchitect test modules/test cases to Team Foundation Server**](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/uploading-ta-test-modules-test-cases-to-tfs): TestArchitect test cases and test modules can be uploaded to the Team Foundation Server, which also establishes one-to-one mappings between the two sets of test cases.
    -   **Uploading TestArchitect test results to Team Foundation Server**: Results of tests executed and stored in TestArchitect from projects mapped to Team Foundation Server may be conveniently uploaded to Team Foundation Server either [manually](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/manually-uploading-testarchitect-test-results-to-tfs) \(via the context menu\), or [automatically](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/automatically-uploading-testarchitect-test-results-to-tfs) upon conclusion of a test run.
    -   [**Matching custom fields between TestArchitect and Team Foundation Server**](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/creating-matching-custom-fields/): Custom fields in Team Foundation Server may be mapped to user-defined fields in TestArchitect test modules or test cases, and vice versa. Mapping is driven by field names. Fields in Team Foundation Server and TestArchitect are mapped automatically when their names are identical and their data types are compatible.
    -   [**Upgrading build assemblies of the TestArchitect plug-in**](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/upgrading-build-assemblies-of-the-ta-plug-in/): When installed, information for the TestArchitect-Microsoft Test Manager plug-in is stored in build assembly files. These files may now be upgraded when necessary - either manually or automatically - to ease the process of upgrading to a newer version of the plug-in.
    -   [**Switching to a different TFS account**](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/switching-to-a-different-tfs-account): You have the option of rapidly switching from the current TFS account to a different account.
    -   **INITIAL****and****FINAL****sections are both invoked for each [test case run](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/running-ta-tests-from-mtm#note_xkz_kfr_yq)**: When running an automated test, the execution of every single Team Foundation Server test case entails the execution of both the INITIAL and FINAL sections of the associated TestArchitect test module, if any. For example, the execution of test case \#01 is preceded by the execution of the INITIAL section, and followed by the FINAL section; the same is true for test case \#02, and each subsequent test case.

## {{< expand >}} TestArchitect Automation {{< permerlink >}} {#concept_what_new_8.1_U4_Wins__section_p2c_51b_cs} 

-   [**Introduction of XPath property**](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property): TestArchitect uses a special new TA property, called XPath and derived from the XPath language, to uniquely locate UI controls within tested web applications. Specifically, TestArchitect depicts the UI controls running on web applications as a hierarchical representation of elements and provides the XPath TA property for each control to uniquely identify it within that hierarchy.
-   **Support for escape sequences during string processing**: A new built-in setting, [escape sequences](/automation-guide/action-based-testing-language/built-in-settings/value-settings/escape-sequences), allows this functionality to be enabled or turned off.


**Enhancements to existing features**

-   **[Improved Action Recorder for web apps on Internet Explorer](/user-guide/actions/action-recorder/)**:
    -   Improved design: Action Recorder now generates test procedures with high stability and reusability, consistent with Action-Based Testing.
    -   [tabs](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/tab) and [newlines](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/newline) can now be generated for the [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter)/[set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set) action and the Check function. \(The Check function is available on the [Recording toolbar](/user-guide/actions/action-recorder/recording-in-testarchitect) and is used to insert checkpoints into the current test.\)
    -   The XPath TA property is used to identify window and control definitions that are generated during the recording session.
    -   Manual keyboard entry of the characters ^, +, % and \# is now recorded correctly, ensuring that they are not misinterpreted as special characters during playback.
    -   Support for recording tests on Internet Explorer 64-bit version.
    -   Support in TestArchitect 64-bit for recording within both the 32- and 64-bit versions of Internet Explorer. \(Note, however, that TestArchitect 32-bit does support recording within Internet Explorer 64-bit.\)
    -   New built-in actions, [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) and [move mouse](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/move-mouse), are generated during the recording session.
    -   In the generated interface entity, reduced the number of TA property-value pairs used to identify the associated web page: only the doc title property is now used.
    -   Action Recorder performance much improved, including start up time and speed of test procedure generation.


