--- 
title: "Viewing bugs related to a test module or test case"
linktitle: "Viewing bugs related to a test module or test case"
weight: 4
aliases: 
    - /TA_Help/Topics/Bugs_viewing_related_bugs.html
---

If an action line in a test module is marked with a TA bug, the parent test case and test module are also marked with that TA bug. You have option to view all the TA bugs which are exposed by the parent test modules/test cases.

Ensure that your test modules are already [checked in](Project_items_checkin.html).

To view associated bugs, perform the following steps:

1.  In the TestArchitect explorer tree, double-click a test module or test case node of which you want to view the marked bugs.

    The test module editor or test case list view opens.

2.  On the main panel, select the **Related bugs** tab.

    -   If you selected a test module, the **Related bugs** tab appears with a list view of related bugs:

        ![](/images//Images/Bugs_tab_TM.png)

        The fields displayed in the **Related bugs** tab of the test module are as follows:

        |Field|Description|
        |-----|-----------|
        |**Bug ID**|ID of the TA bug.|
        |**Summary**|A brief one-line summary of the TA bug.|
        |**Status**|The current life cycle stage of this TA bug. \(See [Workflow](Bugs.html#ksec_tabugs_workflow).\)|
        |**Line**|The line number at which the TA bug is marked.|
        |**Test Case**|The particular section in the test module to which the TA bug belongs.|

        **Tip:** To update the latest information of the marked known bugs, click the **Refresh** button.

    -   If you selected a test case, the list view under the **Bugs** tab appears similar to that of the test module. The same fields are present, with the exception of **Test Case**.


**Parent topic:**[Working with known bugs](/TA_Help/Topics/Bugs_working_known_bug.html)

**Previous topic:**[Removing known bugs](/TA_Help/Topics/Bugs_working_known_bug_removing.html)

