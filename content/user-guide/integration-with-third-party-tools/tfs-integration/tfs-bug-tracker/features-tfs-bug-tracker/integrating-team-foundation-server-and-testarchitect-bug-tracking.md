--- 
title: "Integrating Team Foundation Server and TestArchitect bug tracking"
linktitle: "Integrating Team Foundation Server and TestArchitect bug tracking"
description: "For tracking and resolving bugs, TFS and TestArchitect complement each other well."
weight: 5
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug_TFS.html
keywords: "known bugs, TFS, bugs, working with known bugs, TFS, tracking known bugs, TFS, marking known bugs, TFS"
---

For tracking and resolving bugs, TFS and TestArchitect complement each other well.You can collect bug issues in TFS, track those TFS bugs in TestArchitect via the Track Known Bug feature, and let TestArchitect suggest a new life cycle stage of a TFS bug.

Suppose that you already have an existing bug issue registered in TFS. For example, a TFS bug named "Missing a notification message during installation process" exists, and its status is Open. You can use TestArchitect to keep track of that bug. The generated test results upon running automated tests from TestArchitect aid you in deciding whether, and how, the status of the bug should be changed. These steps should help you how to achieve those objectives:

-   Incorporate bug information from TFS into TestArchitect by [creating a TA registered bug](/user-guide/integration-with-third-party-tools/tfs-integration/tfs-bug-tracker/configuring-tfs-bug-tracker-integration/creating-registered-ta-bugs-with-tfs-bug-tracker#).
-   Use the [Track Known Bug](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/tracking-known-bugs) feature of TA to associate the TA bug with specific action lines\(s\) in your test module. \(In the test editor, use the **Mark as Known Bug** context menu option to flag action lines as being connected with a given bug.\)
-   Execute the test module.
-   Test results from your automated runs report the results of action lines with marked known bugs in a special [Known bug summary](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/reviewing-test-results-with-known-bugs#section_KBSum) section. This aids you in deciding whether, and how, the status of each given bug should be changed.\)
-   Based on TestArchitect's suggested change \(if any\) of bug status, you can decide whether or not the corresponding TFS bug issue on the TFS server should be closed, reopened, or resolved. \(Refer to [Suggested TA bug status](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/reviewing-test-results-with-known-bugs#section_m3b_t2l_wn) for details.\)


