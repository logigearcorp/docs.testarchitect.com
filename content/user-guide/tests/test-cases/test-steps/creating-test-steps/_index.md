--- 
title: "Creating test steps"
linktitle: "Creating test steps"
description: "Create test steps with the steps list view."
weight: 1
aliases: 
    - /TA_Help/Topics/Projects_and_tests_steps_creating.html
keywords: "creating, steps"
---

Create test steps with the steps list view.

To create test steps, follow the steps below:

1.  [Check out](/TA_Help/Topics/Project_items_checkout.html) a test module.

2.  In the TestArchitect explorer tree, double-click a test case for which you would like to create new steps.

    The steps list view appears in the main panel.

    ![](/images/TA_Help/Images/listview_steps.png)

3.  Enter the following information for each step:

    -   **Step**: Title of the test step.

        **Note:**

        -   Its maximum allowable length is 30,000 characters.
        -   It does support multiple lines. Provided that you type more than one line in the **Step** field, the lines automatically merge into a single one.
    -   **Description**: \(optional\) Short description for the test step.

        **Tip:** To start a new line in the same cell, press Alt + Enter on your keyboard.

    -   **Expected result**: \(optional\) Define the expected test step result.
    -   **Recent result**: \(read-only\) The actual test step result.

        **Note:**

        -   The **Recent result** field is automatically filled in with the results of the most recent test execution [added to the repository](/TA_Help/Topics/Test_result_storing.html).
        -   Possible returned values are:
            -   Not tested\(default\)
            -   Passed
            -   Failed
            -   Passed with warning\(s\)/error\(s\)
            -   Passed with known bug
4.  Click **Apply**.


A new step is added to the test case for each pass of the above instructions. . Also note that, by default, the new test step is automatically added to the bottom of the parent test case in the test module editor view.

![](/images/TA_Help/Images/ug67.png)

**Tip:** If you do not want TestArchitect to insert test steps to action lines automatically, follow these steps:

1.  Invoke the [Preferences](/TA_Help/Topics/Additional_features_preferences.html) dialog box.
2.  Clear the **Automatically insert step to test case** check box.
3.  Click **Save**.

After you [execute](/TA_Help/Topics/Projects_execute_test.html) an automated test, the **Step Summary** table appears in [test results](/TA_Help/Topics/Test_result.html) on both TestArchitect Client and a web browser. With the support of this table, you might take a quick glance at which test steps have automation problems. Also you might grab the test flow thoroughly when you can identify the exact test steps in which the failures, errors, or warnings occur.

**Note:** Click ![](/images/TA_Help/Images/Test_results_expand_detail.png), next to the test case's title, to expand and view **Step Summary** table for each test case.

![](/images/TA_Help/Images/step_summary_table_tac.png "Step Summary table on TestArchitect Client")

![](/images/TA_Help/Images/step_summary_table_web.png "Step Summary table on a web browser")



