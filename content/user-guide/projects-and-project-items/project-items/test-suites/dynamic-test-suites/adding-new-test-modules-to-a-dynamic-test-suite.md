--- 
title: "Adding new test modules to a dynamic test suite"
linktitle: "Adding new test modules to a dynamic test suite"
description: "New test modules in a dynamic test suite can be added only by customizing the test suite's data profile."
weight: 2
aliases: 
    - /TA_Help/Topics/Test_suite_dynamic_add_new_test_module.html
keywords: "dynamic, test suites, adding new test modules, test suites, dynamic, adding new test modules"
---

When a dynamic test suite item is open in the test suite list view, the test module list is read-only. New test modules in a dynamic test suite can be added only by customizing the test suite's data profile.

To add new test modules to an existing dynamic test suite, do the following:

1.  In the TestArchitect explorer tree, right-click a dynamic test suite node residing under the project's **Test Suites** folder, then click **Edit data profile**.

    {{<note>}} If you right-click a static test suite node, the **Edit data profile** option is unavailable.

2.  In the Edit Profile panel, [customize](/user-guide/reporting-and-dashboard/reporting/customizing-reports) the data profile so that its specified set of criteria are inclusive of the test modules you wish to add.

    ![](/images/TA_Help/Images/Edit_profile_panel.png)

3.  **Optional:** To verify that the customized data profile specifies the set of test modules that you want it to, click the **Show** button.

    The test module report that matches the new conditions appears.

4.  Click the **Update** button to save the changes to the customized data profile.

5.  In the confirmation dialog box, click **Yes**.

6.  In the TestArchitect explorer tree, double-click the dynamic test suite node whose data profile has been customized.


The test suite list view appears in the main panel. From the test suite list view, you can observe that new test modules specified by the data profile are now members of the dynamic test suite.




