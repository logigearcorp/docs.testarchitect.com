--- 
title: "Summary tab"
linktitle: "Summary tab"
description: "The test result Summary tab reports basic test run information which summarizes various aspects of the test. A summary report represents the results of a single run of one test module."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_result_summaries.html
keywords: "test results, summaries, test cases, result summaries, test results, baseline results, comparisons"
---

The test result **Summary** tab reports basic test run information which summarizes various aspects of the test. A summary report represents the results of a single run of one test module.

Test result summaries are displayed on the test result **Summary** tab, and the various summaries it contains are grouped into sections.

{{<remember>}} The **Summary** tab is available when the test results are viewed either on TestArchitect Client or a web browser.

## General Information section

The top of the **Summary** tab lists such items as follows:

![](/images/TA_Help/Images/Test_results_summaries_general_info.01.png)

|Field|Description|
|-----|-----------|
|**Result**|Result of the test execution|
|**Test module**|Name of the executed test module|
|**Revision timestamp**|Timestamp of the executed revision of the test module|
|**Start time**|Start time of the test execution|
|**Duration**|Duration of the test execution|
|**Time traveling**|Selected timestamp when [time traveling](/user-guide/test-execution/time-traveling-execution/executing-retroactively-with-time-travel) is implemented for the run, and the executed test module is [checked in](/user-guide/projects-and-project-items/project-items/revision-control/check-in). \([Learn more](/user-guide/test-execution/time-traveling-execution/).\)|
|**Run by**|User who runs the test|
|**Run machine**|TestArchitect controller executing the test|
|**OS**|OS name of the TestArchitect controller executing the test|
|**Video snapshots directory**|The location at which [screen-recording videos](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/#section.Video_playback) \(taken during the automated test runs\) are stored.|
|**Device Name**|Name of the target physical mobile device|
|**Device OS**|OS name of the target physical mobile device|
|**Desired capabilities name**|Name of the target cloud mobile device and full path to the JSON file, which defines target cloud devices \([learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-appium/creating-a-test/multiple-cloud-devices)\)|

{{<note>}}

![](/images/TA_Help/Images/Test_results_summaries_general_info.01a.png)

The test result name consists of:

1.  test module name;
2.  *if part of a serial test run,* the test module's chronological position in the test run, in parentheses;
3.  execution timestamp, in the format: \(yyyy-mm-dd hh.nn.ss\), where nn=minutes;
4.  – \(hyphen\);
5.  process id of the test module's run, received from the O/S. \(Used to ensure a unique name for the result, in the event that two instances of the given test module's execution happen to have identical timestamps.\)

## Test Case Summary section

This section displays the executed test cases, skipped test cases \(if any\) and their test results in terms of passed, failed, passed with warning/error, passed with known bug, not run, and not finished.

![](/images/TA_Help/Images/Test_results_summaries_TC_summary_XML.png)

|Field|Description|
|-----|-----------|
|**Total test casts selected**|The number of test cases selected to be executed.|
|**Total test cases executed**|The number of test cases that were actually executed.|
|[**Passed**](/user-guide/working-with-test-results/overview/test-result-status)|The number of passed test cases.|
|[**Failed**](/user-guide/working-with-test-results/overview/test-result-status)|The number of failed test cases.|
|[**Passed with Warning/Error**](/user-guide/working-with-test-results/overview/test-result-status)|The number of test cases that passed, but at least one warning or error was detected.|
|[**Passed with known bug**](/user-guide/working-with-test-results/overview/test-result-status)|The number of test cases that failed, but for which each failed check was already marked as a known bug.|
|[**Not Run**](/user-guide/working-with-test-results/overview/test-result-status)|The number of test cases that were skipped during execution, because the automated test was halted. Note that, when a test case is skipped, its detailed information has the N/a text.|
|[**Not Finished**](/user-guide/working-with-test-results/overview/test-result-status)|The number of test cases that were unable to reach the end of an automated run.|
|**Test Case**|A list of all executed test cases. Note that each test case name listed in the leftmost column of this list is hyperlinked, so that clicking on it displays the result details on a web browser.|
|**Checks**|The number of checkpoints \(check actions\) in each test case.|
|**Passed**|The number of checkpoints with passed results in each test case.|
|**Failed**|The number of checkpoints with ordinary failed results in each test case.|
|**Ignored Fails**|The number of failed checkpoints that are marked as known bugs in each test case.|
|**Total Fails**|The number of ordinary failed checkpoints plus the number of ignored failed checks in each test case.|
|**Warning**|The number of checkpoints producing automation warnings in each test case.|
|**Error**|The number of checkpoints resulting in automation errors in each test case.|

**Step Summary** table: With the support of this table, you might take a quick glance at which test steps have automation problems. Also you might grab the test flow thoroughly when you can identify the exact test steps in which the failures, errors, or warnings occur.

![](/images/TA_Help/Images/step_summary_table_tac.png "Step Summary table on TestArchitect Client")

![](/images/TA_Help/Images/step_summary_table_web.png "Step Summary table on a web browser")

{{<note>}}

-   This table is only available when you [create test steps](/user-guide/tests/test-cases/test-steps/creating-test-steps).
-   Click ![](/images/TA_Help/Images/Test_results_expand_detail.png), next to the test case's title, to expand and view **Step Summary** table for each test case.

## Failure/Error Summary section

{{<note>}} Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.

The section exhibits a list of the failures occurring during the test run. For more details, please refer to [Failure/Error Summary tab](/user-guide/working-with-test-results/overview/failure-error-summary-tab).

![](/images/TA_Help/Images/Test_results_summary_failure_error_summary.png)

## Known Bug Summary section

{{<note>}} Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.

This section displays details about known bugs marked on action lines. For more details, please refer to [Known Bug Summary tab](/user-guide/working-with-test-results/overview/known-bug-summary-tab).

![](/images/TA_Help/Images/Test_results_summary_known_bug_summary.png)

## Log Information tab section

{{<note>}} Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.

This section displays the logging information from the report actions, that is, [report](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report), [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check), [report warning](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-warning), and [report error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-error) in the test procedure.

For more details, please refer to [Log Information tab](/user-guide/working-with-test-results/overview/log-information-tab).

![](/images/TA_Help/Images/Test_results_summary_log_info.png)

## Additional functions

The **Summary** tab also has an icon bar from which you can conveniently activate functions such as deleting and exporting test results, setting and comparing baselines, etc. This quick-access icon bar is located in the upper-right hand corner of the **Summary** tab.

Based on types of test result, that is, **local** or **repository**, available options may vary.

-   Available options for a **local result**:

    ![](/images/TA_Help/Images/Result_details_tab_main_panel_local_result_XML.png)

    1.  Locate the test result in the result tree node.
    2.  [Submit bug to an external bug tracking system](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/submitting-testarchitect-bugs-to-jira-server), such as JIRA.
    3.  [Attach the test results to a JIRA bug.](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/working-with-jira-attachments/attaching-html-test-results-to-a-jira-bug)
    4.  Delete test result
    5.  [Add local test result to repository.](/user-guide/working-with-test-results/adding-test-results-to-the-repository/adding-test-results-manually#step_bvq_cjp_h4)
    6.  [Resolve unverified picture checks.](/user-guide/projects-and-project-items/project-items/picture-checks/resolving-unverified-picture-checks)
    7.  [Export test result to an HTML file.](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file#step_qld_qkp_h4)
    8.  [Compare to baseline.](/user-guide/working-with-test-results/comparing-test-results/comparing-results-with-baseline#step_e3l_3jp_h4)
-   Available options for a **repository result**:

    ![](/images/TA_Help/Images/Result_details_tab_main_panel_repo_result_XML.png)

    1.  Locate the test result in the result tree node.
    2.  [Submit bug to an external bug tracking system](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/submitting-testarchitect-bugs-to-jira-server), such as JIRA.
    3.  [Attach the test results to a JIRA bug.](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/working-with-jira-attachments/attaching-html-test-results-to-a-jira-bug)
    4.  Delete test result
    5.  [Export test result to an HTML file](/user-guide/working-with-test-results/exporting-test-results/exporting-repository-test-results-to-an-html-file).
    6.  [Set as baseline](/user-guide/working-with-test-results/comparing-test-results/setting-baseline-result#step_an5_ljp_h4)
    7.  [Compare to baseline.](/user-guide/working-with-test-results/comparing-test-results/comparing-results-with-baseline#step_e3l_3jp_h4)



