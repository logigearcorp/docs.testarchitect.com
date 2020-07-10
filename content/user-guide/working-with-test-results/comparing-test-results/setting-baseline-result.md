--- 
title: "Setting baseline result"
linktitle: "Setting baseline result"
description: "Methods for defining a test result as the baseline."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_result_settting_baseline.html
keywords: "baseline result, setting, set baseline result"
---

Methods for defining a test result as the baseline.

Ensure that TestArchitect is running and connected to the repository that contains the test results you want to set as a baseline \(see [Adding test results manually](/user-guide/working-with-test-results/adding-test-results-to-the-repository/adding-test-results-manually)\).

Choose one of the following three methods to designate a test result as the baseline:

-   **Option 1**:

    1.  Select the test result node you want to set as the baseline in the TestArchitect explorer tree, and right-click the selection.

    2.  Click **Set as Baseline Result** from the context menu.

        ![](/images/TA_Help/Images/ug_resultbaseline2.png)

-   **Option 2:**

    1.  On the TestArchitect explorer tree, double-click the test result node you want to set as the baseline.

    2.  Click the **Set as Baseline Result** ![](/images/TA_Help/Images/baseline_set_btn.png) icon on the main panel.

        ![](/images/TA_Help/Images/ug_resultbaseline4.png)

-   **Option 3**:

    1.  Open the repository test result list view, that is, Double-click the **Results** node on the TestArchitect explorer tree.

        The repository test result list view appears in the main panel.

    2.  Select the test result you want to set as the baseline in the test result list view, and then right-click the selection.

    3.  Click **Set as Baseline Result** from the context menu.


The icon for the test result that has been set as the baseline now has a **B** overlaid on it, indicating that it is indeed now the baseline. If there was a previous baseline for the test module/test module variation, it now loses its designation. You can proceed to compare other test results in the same test module or the same test module variation, against the new baseline results \(see [Comparing results with baseline](/user-guide/working-with-test-results/comparing-test-results/comparing-results-with-baseline)\).

![](/images/TA_Help/Images/baseline_result.png)



**Related information**  


[Unsetting baseline results](/user-guide/working-with-test-results/comparing-test-results/unsetting-baseline-results)

[Comparing results with baseline](/user-guide/working-with-test-results/comparing-test-results/comparing-results-with-baseline)

[Comparing results without baseline](/user-guide/working-with-test-results/comparing-test-results/comparing-results-without-baseline)

