--- 
title: "Creating a static test suite"
linktitle: "Creating a static test suite"
weight: 1
aliases: 
    - /TA_Help/Topics/Test_suite_item_static.html
---

How to create a static test suite and assign member test modules to it.

Perform one of the following procedures to create a static test suite:

-   **Option \#1**:

    1.  Select the **Test Suites** node ![](/images//Images/test_suite_item_add_icon.png) in the TestArchitect explorer tree.

    2.  Select **File** \> **New test suite**.

        **Fastpath:** Ctrl + N

    3.  In the New Test Suite dialog box, specify the details of the test suite:

        -   **Name**: Unique name for the test suite.
        -   **Description**: \(Optional\) Short description for the test suite.
        -   **Data Profile**: Select **None** to indicate that the test suite is static.
        ![](/images//Images/create_static_test_suite.png)

    4.  Click **Create**.

-   **Option \#2:**

    1.  In the TestArchitect explorer tree, right-click the **Test Suites** node ![](/images//Images/test_suite_item_add_icon.png) , then click **New Test Suite**.

        **Fastpath:** Ctrl + N

    1.  In the New Test Suite dialog box, repeat steps 3 and 4 of **Option 1**.

-   **Option \#3**:

    1.  Select a test module that is to be included in a static test suite.

    2.  Click the **Execute** ![](/images//Images/btn.TAC_toolbar.Execute.png) button on the toolbar.

    3.  In the Execute Test dialog box, click the **Save as Test Suite** button.

        **Tip:** You can include additional test modules in the static test suite by dragging other test modules from the TestArchitect explorer tree and dropping them into the Test Modules panel.

        ![](/images//Images/ug_testexecution1.png)

    4.  In the New Test Suite dialog box, specify the details of the static test suite:

        -   **Name**: Unique name for the test suite.
        -   **Description**: \(Optional\) Short description for the test suite.
        -   **Location**: \(Optional\) Browse to the location in the TestArchitect explorer tree in which to save the test suite.
        ![](/images//Images/create_static_test_suite_from_Execute_Test_dlg.png)

    5.  Click **Create**.

-   **Option \#4**:

    1.  Double-click the **Tests** node on the TestArchitect explorer tree.

        The test module list view appears in the main panel.

    2.  In the list view, select those test modules you wish to be included in the static test suite. \(Note that the Shift and Ctrl keys may be used with the mouse to aid in multiple selection.\)

    3.  Right-click over one of the selected test modules, then click **Create Test Suite**.

    4.  In the New Test Suite dialog box, repeat steps 4 and 5 of **Option 3**.


The new static test suite is saved as a node beneath the project's **Test Suites** folder in the TestArchitect explorer tree.

![](/images//Images/create_test_suite_node.png)

**Parent topic:**[Static test suites](/TA_Help/Topics/Test_suite_static.html)

**Next topic:**[Adding new test modules to a static test suite](/TA_Help/Topics/Test_suite_static_add_new_test_module.html)

