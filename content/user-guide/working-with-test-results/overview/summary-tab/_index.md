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
|**Time traveling**|Selected timestamp when [time traveling](/TA_Help/Topics/ug_time_traveling_execution.html) is implemented for the run, and the executed test module is [checked in](/TA_Help/Topics/Project_items_checkin.html). \([Learn more](/TA_Help/Topics/ug_time_traveling.html).\)|
|**Run by**|User who runs the test|
|**Run machine**|TestArchitect controller executing the test|
|**OS**|OS name of the TestArchitect controller executing the test|
|**Video snapshots directory**|The location at which [screen-recording videos](/TA_Help/Topics/ug_Screenshot_recording.html#section.Video_playback) \(taken during the automated test runs\) are stored.|
|**Device Name**|Name of the target physical mobile device|
|**Device OS**|OS name of the target physical mobile device|
|**Desired capabilities name**|Name of the target cloud mobile device and full path to the JSON file, which defines target cloud devices \([learn more](/TA_Automation/Topics/aut_app_cloud_testing_Appium_automation_json.html)\)|

**Note:**

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
|[**Passed**](/TA_Help/Topics/ug_test_results_status.html)|The number of passed test cases.|
|[**Failed**](/TA_Help/Topics/ug_test_results_status.html)|The number of failed test cases.|
|[**Passed with Warning/Error**](/TA_Help/Topics/ug_test_results_status.html)|The number of test cases that passed, but at least one warning or error was detected.|
|[**Passed with known bug**](/TA_Help/Topics/ug_test_results_status.html)|The number of test cases that failed, but for which each failed check was already marked as a known bug.|
|[**Not Run**](/TA_Help/Topics/ug_test_results_status.html)|The number of test cases that were skipped during execution, because the automated test was halted. Note that, when a test case is skipped, its detailed information has the N/a text.|
|[**Not Finished**](/TA_Help/Topics/ug_test_results_status.html)|The number of test cases that were unable to reach the end of an automated run.|
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

**Note:**

-   This table is only available when you [create test steps](/TA_Help/Topics/Projects_and_tests_steps_creating.html).
-   Click ![](/images/TA_Help/Images/Test_results_expand_detail.png), next to the test case's title, to expand and view **Step Summary** table for each test case.

## Failure/Error Summary section

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

The section exhibits a list of the failures occurring during the test run. For more details, please refer to [Failure/Error Summary tab](/TA_Help/Topics/ug_results_failure_error_summary.html).

![](/images/TA_Help/Images/Test_results_summary_failure_error_summary.png)

## Known Bug Summary section

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

This section displays details about known bugs marked on action lines. For more details, please refer to [Known Bug Summary tab](/TA_Help/Topics/ug_results_known_bug_summary.html).

![](/images/TA_Help/Images/Test_results_summary_known_bug_summary.png)

## Log Information tab section

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

This section displays the logging information from the report actions, that is, [report](/TA_Automation/Topics/bia_report.html), [report check](/TA_Automation/Topics/bia_report_check.html), [report warning](/TA_Automation/Topics/bia_report_warning.html), and [report error](/TA_Automation/Topics/bia_report_error.html) in the test procedure.

For more details, please refer to [Log Information tab](/TA_Help/Topics/ug_results_log_information.html).

![](/images/TA_Help/Images/Test_results_summary_log_info.png)

## Additional functions

The **Summary** tab also has an icon bar from which you can conveniently activate functions such as deleting and exporting test results, setting and comparing baselines, etc. This quick-access icon bar is located in the upper-right hand corner of the **Summary** tab.

Based on types of test result, that is, **local** or **repository**, available options may vary.

-   Available options for a **local result**:

    ![](/images/TA_Help/Images/Result_details_tab_main_panel_local_result_XML.png)

    1.  Locate the test result in the result tree node.
    2.  [Submit bug to an external bug tracking system](/TA_Help/Topics/JIRA_submitting_bug.html), such as JIRA.
    3.  [Attach the test results to a JIRA bug.](/TA_Help/Topics/Bug_working_attachments_test_results.html)
    4.  Delete test result
    5.  [Add local test result to repository.](/TA_Help/Topics/Test_result_viewing_storing.html#step_bvq_cjp_h4)
    6.  [Resolve unverified picture checks.](/TA_Help/Topics/ug_Resolving_unverfied_picture_checks.html)
    7.  [Export test result to an HTML file.](/TA_Help/Topics/Test_result_export_HTML.html#step_qld_qkp_h4)
    8.  [Compare to baseline.](/TA_Help/Topics/Test_result_compare_to_baseline_results.html#step_e3l_3jp_h4)
-   Available options for a **repository result**:

    ![](/images/TA_Help/Images/Result_details_tab_main_panel_repo_result_XML.png)

    1.  Locate the test result in the result tree node.
    2.  [Submit bug to an external bug tracking system](/TA_Help/Topics/JIRA_submitting_bug.html), such as JIRA.
    3.  [Attach the test results to a JIRA bug.](/TA_Help/Topics/Bug_working_attachments_test_results.html)
    4.  Delete test result
    5.  [Export test result to an HTML file](/TA_Help/Topics/ug_test_results_export_repository_results_HTML.html).
    6.  [Set as baseline](/TA_Help/Topics/Test_result_settting_baseline.html#step_an5_ljp_h4)
    7.  [Compare to baseline.](/TA_Help/Topics/Test_result_compare_to_baseline_results.html#step_e3l_3jp_h4)



