--- 
title: "Modifying test objectives"
linktitle: "Modifying test objectives"
description: "Various fields of a test objective can be edited by you."
weight: 3
aliases: 
    - /TA_Help/Topics/Projects_and_tests_TO_modifying.html
keywords: "modifying, test objectives, modification"
---

Various fields of a test objective can be edited by you.

To modify a test objective, follow these steps:

1.  [Check out](/TA_Help/Topics/Project_items_checkout.html) and open a test module.

2.  In the `Objectives` section in the editor worksheet, right-click the cell containing the test objective, then click **Test objective** \> **Edit Test Objective**.

    **Fastpath:** F2

    The **Information** tab is presented.

3.  You can modify the following fields of the selected test objective:

    -   **ID**: ID number of the test objective.
    -   **Title**: Title of the test objective.
    -   **Recent result:** Result of the test objective.

        {{<note>}}

        -   The **Recent result** field is automatically filled in from the results of parent test cases [added to the repository](/TA_Help/Topics/Test_result_storing.html).
        -   This field may also be manually edited, allowing you to override the value that the system supplies.
        -   Possible returned values are:
            -   Not tested \(default\)
            -   Failed
            -   Passed with warning\(s\)/error\(s\)
            -   Passed with known bug
            -   Passed
        -   Note that, when a test objective is covered by more than a single test case, **Recent result** is set to Failed if anyone of the linked test cases produce a Failed result.
4.  Click **Apply** to save your changes.


The test objective's information is updated.




