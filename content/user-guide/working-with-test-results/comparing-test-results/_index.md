--- 
title: "Comparing test results"
linktitle: "Comparing test results"
weight: 9
aliases: 
    - /TA_Help/Topics/Test_result_baselining.html
---

Comparing the results of two test runs is useful in tracking and debugging new and existing issues in the AUT.

The results of a given test run can be saved to a repository and serve as a snapshot of the state of the AUT \(or a subset of the functions of the AUT\) at that specific point in time. Progress in the development cycle can thereafter be measured by comparing a recent test run with an archived test run.

A test results record for a given automation run has a [**Summary**](Test_result_summaries.html) tab, which summarizes various aspects of the test, and a [**Result Details**](Test_result_summaries.html) tab, which displays a detailed \(line-by-line\) log of the test execution. The information detailed in the test results is helpful for pinpointing test problems, but searching test results line-by-line for clues is time-consuming, especially when comparing multiple test results.

Test summaries, on the other hand, are succinct, and comparing one test summary with another can be done relatively quickly. That said, test summaries do not reveal anything about the nature of bugs. In fact, they can be misleading as an indicator of progress. For example, a test run on Tuesday might result in 15 failures while a Wednesday run ends with only 7 failures. By reading the summary, it may be tempting to conclude that 8 bugs have been fixed; in fact, there is no assurance of that. It is possible that the original 15 bugs were all resolved and 8 new bugs have been introduced. Test summaries do not tell you the seriousness of bugs either. An overall reduction in the number of bugs is no guaranty that the number of critical bugs has decreased.

TestArchitect offers two methods of comparing test results: [Compare Results](Test_result_compare_results.html) and [Compare to Baseline Results](Test_result_compare_to_baseline_results.html). In both result comparison methods, TestArchitect shows the listing of comparison checkpoints in the current test results alongside the corresponding checkpoints from previous tests. This allows for a clear side-by-side comparison, enabling you to identify which bugs have been resolved, which bugs have not yet been addressed, and which new bugs have been introduced.

## Baseline comparison

When comparing to a baseline result, you must designate a test result stored in the repository as a baseline, and this baseline must be the result from the same test module or the same test module variation. Only one test result can be designated at a time as the baseline for a given test module, but you can change the baseline at any time. All future runs of that test are then compared against this baseline. Each variation of a test is treated as a separate test module; therefore, each set of test variations can have its own baseline. For example, one baseline result for the test module `Calculation` can coexist alongside a separate baseline for `Calculation {1.1}`.

**Note:**

-   Baseline comparison for a given set of test variations is made against the baseline specific to that variation; if no such baseline exists, no baseline comparison can be made.
-   More than one baseline can be set. However, among test results belonging to a given test module, only one test result can be designate as the baseline at a time.

## Comparison without baselining

You can compare two test results without having set a baseline, but both results must come from the same test module or the same test module variation. The test results may reside locally or in the repository. You must mark a test result to serve as the comparison basis before you can make the comparison. Only one comparison can be made at a time, hence, you would have to mark a test result each time you make a comparison.

1.  [Setting baseline result](/TA_Help/Topics/Test_result_settting_baseline.html)  
Methods for defining a test result as the baseline.
2.  [Unsetting baseline results](/TA_Help/Topics/Test_result_unsettting_baseline.html)  
If a current baseline result record is no longer needed, or is to be supplanted, you can remove its designation as a baseline.
3.  [Comparing results with baseline](/TA_Help/Topics/Test_result_compare_to_baseline_results.html)  
Side-by-side comparison can be made between a test result and a baseline result. Both results must be for the same test module or test module variation.
4.  [Comparing results without baseline](/TA_Help/Topics/Test_result_compare_results.html)  
A side-by-side comparison of test results from a given test module can be a good yardstick for tracking progress over time.
5.  [Results Comparison page](/TA_Help/Topics/Test_result_comparison_dialog_box.html)  
The Result comparison page which is available on a web browser displays the differences, side-by-side, between two test results at checkpoints defined in the test procedure.

**Parent topic:**[Working with test results](/TA_Help/Topics/Test_result.html)

**Previous topic:**[Importing test results from .TARESULT files](/TA_Help/Topics/ug_importing_test_results.html)

**Next topic:**[Opening latest test result](/TA_Help/Topics/Test_result_open_latest_test_result.html)

**Related information**  


[Working with test results](/TA_Help/Topics/Test_result.html)

[Result Details tab](/TA_Help/Topics/Test_result_details.html)

[Opening latest test result](/TA_Help/Topics/Test_result_open_latest_test_result.html)

[Opening baseline result](/TA_Help/Topics/Test_result_open_baseline_result.html)

