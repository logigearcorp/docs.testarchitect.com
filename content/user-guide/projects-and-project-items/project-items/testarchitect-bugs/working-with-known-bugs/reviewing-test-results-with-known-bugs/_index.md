--- 
title: "Reviewing test results with known bugs"
linktitle: "Reviewing test results with known bugs"
weight: 2
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html
---

Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.

**Note:** It is assumed that you are familiar with test results \(see [Test results](Test_result.html) for details\). Only sections related to known bugs are discussed.

## Summary tab

**Remember:** The **Summary** tab is available when the test results are viewed either on TestArchitect Client or a web browser.

**Test case summary** section: Displays the executed test cases and their test results in terms of passed, failed, passed with warning/error, and passed with known bug.

![](/images//Images/Marking_known_bug_results_summary.png)

|Field|Description|
|-----|-----------|
|**Total test casts selected**|The number of test cases selected to be executed.|
|**Total test cases executed**|The number of test cases that were actually executed.|
|[**Passed**](ug_test_results_status.html)|The number of passed test cases.|
|[**Failed**](ug_test_results_status.html)|The number of failed test cases.|
|[**Passed with Warning/Error**](ug_test_results_status.html)|The number of test cases that passed, but at least one warning or error was detected.|
|[**Passed with known bug**](ug_test_results_status.html)|The number of test cases that failed, but for which each failed check was already marked as a known bug.|
|[**Not Run**](ug_test_results_status.html)|The number of test cases that were skipped during execution, because the automated test was halted. Note that, when a test case is skipped, its detailed information has the N/a text.|
|[**Not Finished**](ug_test_results_status.html)|The number of test cases that were unable to reach the end of an automated run.|
|**Test Case**|A list of all executed test cases. Note that each test case name listed in the leftmost column of this list is hyperlinked, so that clicking on it displays the result details on a web browser.|
|**Checks**|The number of checkpoints \(check actions\) in each test case.|
|**Passed**|The number of checkpoints with passed results in each test case.|
|**Failed**|The number of checkpoints with ordinary failed results in each test case.|
|**Ignored Fails**|The number of failed checkpoints that are marked as known bugs in each test case.|
|**Total Fails**|The number of ordinary failed checkpoints plus the number of ignored failed checks in each test case.|
|**Warning**|The number of checkpoints producing automation warnings in each test case.|
|**Error**|The number of checkpoints resulting in automation errors in each test case.|

## Known Bug Summary tab

**Remember:** The contents of **Known Bug Summary** are organized into a tab when the test results are viewed on a web browser; whereas they are organized into a sub-section when the results are viewed on TestArchitect Client.

This tab displays the information about TA bugs marked in the action lines.

![](/images//Images/Marking_known_bug_results_KB.png)

|Field|Description|
|-----|-----------|
|**Bug**|ID of the TA bug. Click the Bug ID to view [Bug Information](Bug_information.html) in TestArchitect Client.|
|**Summary**|A brief one-line summary of the TA bug.|
|**Test Case**|The particular section in the test module in which the TA bug is exposed. The section can be `Initial`, `Final` or a specific test case. Click the test case number to view the corresponding test case in the [**Result Details**](Test_result_details.html) tab.|
|**Status**|The current status, or life cycle stage, of the marked known bug, as defined in the bug's [Current status](Bug_information.html#row_current_status) field.|
|**This Run**|The suggested status of the TA bug for this automation run. \([Learn more](Bugs_working_known_bug_reviewing_test_results.html#section_m3b_t2l_wn).\)|
|**Line**|The line number in the test where the action is marked as a known bug. \(Note that any number of action lines may be marked with a given bug ID.\) Clicking on the line number allows you to view the corresponding line in the [**Result Details**](Test_result_details.html) tab.|
|**Ignored Fails**|The number of executions of the marked action line that failed during the run.|

## Suggested TA bug status

The suggested status, or life cycle stage, of a TA bug is determined based on the combination of the actual status of that bug in a new automation run \(Passed, Failed, Passed with Warning/Error, or Passed with known bug\) plus its current status. Based on the suggested status, you can decide whether or not the corresponding JIRA bug issue on a JIRA server should be closed.

The following table describes the matrix to determine the suggested bug status for each check action marked with a TA bug.

|**Current status**|**Suggested status**|
|Passed results|Failed results|Passed with Warning/Error results|Passed with known bug results|Not executed results|
|Open|Resolved|Open|Warning/Error|Open|Not Executed|
|Closed|Closed|Reopened|Reopened|
|Reopened|Resolved|Reopened|Reopened|

**Note:**

-   There may be times when an automation run does not include the execution of a given action line marked with a TA bug, such as when the test run is terminated before reaching that line. For such cases, an additional status, Not Executed, is defined, and is assigned as the **Suggested Status** for the bug.
-   Note also that, if multiple action lines marked with a given TA bug exist, and any one of them is not executed during a test run, the overall suggested status of the TA bug is again Not Executed.
-   If all action lines marked with the same TA bug have Passed results, the overall suggested bug status of this TA bug is Resolved.

**Parent topic:**[Working with known bugs](/TA_Help/Topics/Bugs_working_known_bug.html)

**Previous topic:**[Tracking known bugs](/TA_Help/Topics/Bugs_working_known_bug_marking.html)

**Next topic:**[Removing known bugs](/TA_Help/Topics/Bugs_working_known_bug_removing.html)

