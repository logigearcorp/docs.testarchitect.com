--- 
title: "Integrating JIRA and TestArchitect bug tracking"
linktitle: "Integrating JIRA and TestArchitect bug tracking"
weight: 5
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug_JIRA.html
---

For tracking and resolving bugs, JIRA and TestArchitect complement each other well.You can collect bug issues in JIRA, track those JIRA bugs in TestArchitect via the Track Known Bug feature, and let TestArchitect suggest a new life cycle stage of a JIRA bug.

Suppose that you already have an existing bug issue registered in JIRA. For example, a JIRA bug named "Missing a notification message during installation process" exists, and its status is Open. You can use TestArchitect to keep track of that bug. The generated test results upon running automated tests from TestArchitect aid you in deciding whether, and how, the status of the bug should be changed. These steps should help you how to achieve those objectives:

-   Incorporate bug information from JIRA into TestArchitect by [creating a TA registered bug](/TA_Help/Topics/JIRA_creating_registered_bugs.html).
-   Use the [Track Known Bug](/TA_Help/Topics/Bugs_working_known_bug_marking.html) feature of TA to associate the TA bug with specific action lines\(s\) in your test module. \(In the test editor, use the **Mark as Known Bug** context menu option to flag action lines as being connected with a given bug.\)
-   Execute the test module.
-   Test results from your automated runs report the results of action lines with marked known bugs in a special [Known bug summary](/TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html#section_KBSum) section. This aids you in deciding whether, and how, the status of each given bug should be changed.\)
-   Based on TestArchitect's suggested change \(if any\) of bug status, you can decide whether or not the corresponding JIRA bug issue on the JIRA server should be closed, reopened, or resolved. \(Refer to [Suggested TA bug status](/TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html#section_m3b_t2l_wn) for details.\)

**Parent topic:**[Features - JIRA integration](/TA_Help/Topics/JIRA_features.html)

**Previous topic:**[Adding JIRA-support fields to TestArchitect](/TA_Help/Topics/Bugs_defined_field_TA.html)

