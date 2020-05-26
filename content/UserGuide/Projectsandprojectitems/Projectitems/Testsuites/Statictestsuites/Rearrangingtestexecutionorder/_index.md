--- 
title: "Rearranging test execution order"
linktitle: "Rearranging test execution order"
weight: 3
aliases: 
    - /TA_Help/Topics/Test_suite_static_rearrange_test_modules.html
---
# Rearranging test execution order {#static_test_suites.rearrange .task}

You can reorder the execution of test modules in a static test suite.

When you select to execute a static test suite, its member test modules are executed in the order in which they appear in the test suite's list view.

To rearrange the test modules in a static test suite, do the following:

1.  In the TestArchitect explorer tree, double-click an existing static test suite node.

2.  In [test suite list view](Listview_test_suite.html), perform either of the following options:

    ![](../Images/Rearrange_test_modules_in_test_suite.png)

    -   Option \#1: Performing a drag and drop
        -   Select a test module whose position in the list you wish to change, then drag it to the desired positions in the list view. Repeat for other test modules until the list reflects your preferred execution order.
    -   Option \#2: Move Up and Move Down buttons

        **Note:** Applies to TestArchitect [8.3 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

        -   Select the preferred test module, and then click the **Move Up** button or **Move Down** button, until the test module reaches the desired position. Repeat for other preferred test modules.
3.  Click the **Apply** button to save your changes to the static test suite.


The static test suite's contents are reordered, determining the order of test module execution the next time you run the test suite.

**Parent topic:**[Static test suites](../../TA_Help/Topics/Test_suite_static.html)

**Previous topic:**[Adding new test modules to a static test suite](../../TA_Help/Topics/Test_suite_static_add_new_test_module.html)

