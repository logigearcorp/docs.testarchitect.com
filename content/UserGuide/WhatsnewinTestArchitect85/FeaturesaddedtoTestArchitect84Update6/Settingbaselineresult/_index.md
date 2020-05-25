--- 
title: "Setting baseline result"
linktitle: "Setting baseline result"
aliases: 
    - /TA_Help/Topics/Test_result_settting_baseline.html
---
# Setting baseline result {#Test_result_setting_baseline .task}

Methods for defining a test result as the baseline.

Ensure that TestArchitect is running and connected to the repository that contains the test results you want to set as a baseline \(see [Adding test results manually](Test_result_viewing_storing.html)\).

Choose one of the following three methods to designate a test result as the baseline:

-   **Option 1**:

    1.  Select the test result node you want to set as the baseline in the TestArchitect explorer tree, and right-click the selection.

    2.  Click **Set as Baseline Result** from the context menu.

        ![](../Images/ug_resultbaseline2.png)

-   **Option 2:**

    1.  On the TestArchitect explorer tree, double-click the test result node you want to set as the baseline.

    2.  Click the **Set as Baseline Result** ![](../Images/baseline_set_btn.png) icon on the main panel.

        ![](../Images/ug_resultbaseline4.png)

-   **Option 3**:

    1.  Open the repository test result list view, that is, Double-click the **Results** node on the TestArchitect explorer tree.

        The repository test result list view appears in the main panel.

    2.  Select the test result you want to set as the baseline in the test result list view, and then right-click the selection.

    3.  Click **Set as Baseline Result** from the context menu.


The icon for the test result that has been set as the baseline now has a **B** overlaid on it, indicating that it is indeed now the baseline. If there was a previous baseline for the test module/test module variation, it now loses its designation. You can proceed to compare other test results in the same test module or the same test module variation, against the new baseline results \(see [Comparing results with baseline](Test_result_compare_to_baseline_results.html)\).

![](../Images/baseline_result.png)

**Parent topic:**[Comparing test results](../../TA_Help/Topics/Test_result_baselining.html)

**Next topic:**[Unsetting baseline results](../../TA_Help/Topics/Test_result_unsettting_baseline.html)

**Related information**  


[Unsetting baseline results](../../TA_Help/Topics/Test_result_unsettting_baseline.html)

[Comparing results with baseline](../../TA_Help/Topics/Test_result_compare_to_baseline_results.html)

[Comparing results without baseline](../../TA_Help/Topics/Test_result_compare_results.html)

