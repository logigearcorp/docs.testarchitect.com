--- 
title: "Creating a dynamic test suite"
linktitle: "Creating a dynamic test suite"
description: "You can create a dynamic test suite based on the following data profile types: test module, test case, test objective, test result, or test case result."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_suite_item_dynamic.html
keywords: "dynamic, test suites, dynamic, creating, creating, dynamic test suites"
---

You can create a dynamic test suite based on the following data profile types: test module, test case, test objective, test result, or test case result.

Perform one of the following procedures to create a dynamic test suite:

-   **Option 1**:

    1.  In the TestArchitect explorer tree, select the **Test Suites** node ![](/images/TA_Help/Images/test_suite_item_add_icon.png)

    2.  Select **File** \> **New test suite**.

        **Fastpath:** Ctrl + N

    3.  In the New Test Suite dialog box, specify the details of the test suite:

        -   **Name**: Specify a unique name.
        -   **Description**: \(Optional\) The short description for the test suite.
        -   **Data Profile**: Select a data profile from the drop-down list.
{{<tip>}} If you want to create your own data profile, see [Creating a report](/TA_Help/Topics/Report_producing.html) for details.

        ![](/images/TA_Help/Images/create_dynamic_test_suite.png)

    4.  Click **Create**.

-   **Option 2**:

    1.  In the TestArchitect explorer tree, right-click the project node, and then select **Reporting** \> **Create reports**.

        ![](/images/TA_Help/Images/Project_reporting.png)

    2.  From the **Create reports** submenu, select a desired report type.

        For example: select the **Test modules** report type.

        The Edit Profile tab appears in the main window, offering you options for defining the properties of the report \(see [customizing a report](/TA_Help/Topics/Report_customizing.html)\).

{{<tip>}} You can include all related items as subreports in your report. Refer to [Subreports](/TA_Help/Topics/Report_customizing.html#section_uvw_3jp_cl) for further information.

    3.  Click the **Save as test suite** ![](/images/TA_Help/Images/test_suite_item_add_icon.png) button.

    4.  In the New Test Suite dialog box, specify the details of the test suite:

        -   **Name**: Specify a unique name.
        -   **Description**: \(Optional\) Short description for the test suite.
        -   **Location**: \(Optional\) Browse to the destination to save the test suite.
    5.  Click **Create**.


The new dynamic test suite is saved as a node beneath the project's **Test Suites** node on the TestArchitect explorer tree.

![](/images/TA_Help/Images/create_dynamic_test_suite_node.png)



