--- 
title: "Comparing results without baseline"
linktitle: "Comparing results without baseline"
weight: 4
aliases: 
    - /TA_Help/Topics/Test_result_compare_results.html
---
# Comparing results without baseline {#Test_result_compare_without_baseline_results .task}

A side-by-side comparison of test results from a given test module can be a good yardstick for tracking progress over time.

Ensure that you meet the following requirements before comparing test results:

-   TestArchitect is running and connected to the repository that contains the test results.
-   The two test results you compare are from the same test module, or, as the case may be, the same test module variation.

Choose one of the following two methods to compare test results. To avoid confusion with the term baseline results, we'll refer to the test results that act as the reference in this case as the reference results.

-   **Option 1**:

    1.  In the TestArchitect explorer tree, establish a reference result by right-clicking a chosen test result node and selecting **Mark to Compare**.

        **Tip:** Unlike setting baseline results, the reference results used for comparison may reside in either the repository or the local machine.

        ![](../Images/reference_result_chosen.png)

    2.  In the TestArchitect explorer tree, right-click a test result node you want to compare against the reference, and then click **Compare Results**.

        **Tip:** When you hover your mouse over the **Compare Results** option on the context menu, a screentip appears to inform you which reference test result the current test result is about to be compared against.

        ![](../Images/compare_with_reference_result.png)

-   **Option 2**:

    1.  In the TestArchitect explorer tree, mark the reference test result by right-clicking the test result node and select **Mark to Compare**.

    2.  In the TestArchitect explorer tree, double-click the **Results** node to open the result list view.

    3.  Right-click the test result you want to compare in the result list view.

    4.  Select **Compare Results** from the context menu.


**Important:** Once you compare results, TestArchitect automatically unmarks the previously marked test result. That is, there is no longer any set of reference result. To perform another comparison, you must again go through the two-step process of **Mark to Compare** and **Compare Results**.

The Result Comparison dialog box appears to show the differences at checkpoints in the test results. See [Results Comparison dialog boxes](Test_result_comparison_dialog_box.md#sect_e383h_k3e8) for an explanation of the Results Comparison dialog box.

**Note:** If the test result is from a set of serial test results, the Comparing Multiple Pairs of Results dialog box appears. See [Comparing serial run results](Test_result_comparison_dialog_box.md#sect_nd6h_kd83) for an explanation of the Comparing Multiple Pairs of Results dialog box.

**Parent topic:**[Comparing test results](../../TA_Help/Topics/Test_result_baselining.html)

**Previous topic:**[Comparing results with baseline](../../TA_Help/Topics/Test_result_compare_to_baseline_results.html)

**Next topic:**[Results Comparison page](../../TA_Help/Topics/Test_result_comparison_dialog_box.html)

**Related information**  


[Setting baseline result](../../TA_Help/Topics/Test_result_settting_baseline.html)

[Unsetting baseline results](../../TA_Help/Topics/Test_result_unsettting_baseline.html)

[Comparing results with baseline](../../TA_Help/Topics/Test_result_compare_to_baseline_results.html)

