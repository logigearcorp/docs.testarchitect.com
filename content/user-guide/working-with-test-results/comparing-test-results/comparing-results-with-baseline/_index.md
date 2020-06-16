--- 
title: "Comparing results with baseline"
linktitle: "Comparing results with baseline"
description: "Side-by-side comparison can be made between a test result and a baseline result. Both results must be for the same test module or test module variation."
weight: 3
aliases: 
    - /TA_Help/Topics/Test_result_compare_to_baseline_results.html
keywords: "results, comparing baseline, comparisons, baseline results"
---

Side-by-side comparison can be made between a test result and a baseline result. Both results must be for the same test module or test module variation.

Ensure that you meet the following requirements before comparing test results to a baseline:

-   TestArchitect is running and connected to the repository that contains the baseline results.
-   You have [set the baseline results](/TA_Help/Topics/Test_result_settting_baseline.html), and the baseline results are stored in the repository.

    **Tip:** The results can be stored in the repository either [manually](/TA_Help/Topics/Test_result_viewing_storing.html) or [automatically](/TA_Help/Topics/Test_result_storing_automatically.html).

-   The test results you want to compare and the baseline results are generated from the same test module or the same test module variation.

Choose one of the following two methods to compare the test results against the baseline results:

-   **Option 1**:

    1.  In the TestArchitect explorer tree, right-click the test results node you want to compare to the baseline, then click **Compare to Baseline Result**.

    ![](/images/TA_Help/Images/compare_to_baseline.png)

    **Tip:** Baseline comparison is available for any test results within the same test module or test module variation.

-   **Option 2**:

    1.  Double-click the **Results** node in the TestArchitect explorer tree to open the result list view.

    2.  Right-click a test result you want to compare in the result list view and click **Compare to Baseline Result**.

        **Tip:** Multiple test results can be selected from the result list view.

-   **Option 3**:

    1.  In the TestArchitect explorer tree, double-click a test result node.

    2.  Click the **Compare to Baseline Result** ![](/images/TA_Help/Images/Compare_to_baseline_result_icon.png) icon on the main panel.

    **Note:** Baseline comparison is available for any test results within the same test module or test module variation.


The Result Comparison dialog box appears to show the differences at checkpoints in the test results. See [Results Comparison dialog boxes](/TA_Help/Topics/Test_result_comparison_dialog_box.html#sect_e383h_k3e8) for an explanation of the Results Comparison dialog box.

**Note:** If the test result is from a set of serial test results, the Comparing Multiple Pairs of Results dialog box appears. See [Comparing serial run results](/TA_Help/Topics/Test_result_comparison_dialog_box.html#sect_nd6h_kd83) for an explanation of the Comparing Multiple Pairs of Results dialog box.




**Related information**  


[Setting baseline result](/TA_Help/Topics/Test_result_settting_baseline.html)

[Unsetting baseline results](/TA_Help/Topics/Test_result_unsettting_baseline.html)

[Comparing results without baseline](/TA_Help/Topics/Test_result_compare_results.html)

