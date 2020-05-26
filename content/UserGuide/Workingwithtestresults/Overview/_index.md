--- 
title: "Overview of test results"
linktitle: "Overview"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_test_results_introduction.html
---
# Overview of test results {#concept_s3n_clc_qz .concept}

This topic contains information about various tabs and panels, and on viewing test results.

## Local results {#section_wpq_jlc_qz .section}

In TestArchitect Client, **local test results**, which are not stored in the repository, only consist of the [**Summary**](Test_result_summaries.html) tab.

The **Summary** tab reports basic test run information, which summarizes various aspects of the test. Additionally, **local test results** show the following tabs when they are viewed in a web browser.

|Tab name|Description|
|--------|-----------|
|[**Result Details**](Test_result_details.html)|Displays a detailed \(line-by-line\) log of the test execution, which can be essential for test run analysis and debugging.|
|[**Known Bug Summary**](ug_results_known_bug_summary.html)|Displays details about known bugs marked on action lines.|
|[**Failure/Error Summary**](ug_results_failure_error_summary.html)|Exhibits a list of the failures occurring during the test run.|
|[**Log Information**](ug_results_log_information.html)|Displays the logging information from the report actions, that is, [report](../../TA_Automation/Topics/bia_report.html), [report check](../../TA_Automation/Topics/bia_report_check.html), [report warning](../../TA_Automation/Topics/bia_report_warning.html), and [report error](../../TA_Automation/Topics/bia_report_error.html) in the test procedure.|

## Repository results {#section_sxd_klc_qz .section}

Repository test results are saved in the repository and have the same tabs as the local test results, but include an additional [**Information**](Test_result_information.html) tab.

## Non-serial test results {#section_xwk_klc_qz .section}

A non-serial test result is a typical test result generated when TestArchitect executes only a single test module via the [Execute Test](Test_exec_test_execution.html) dialog box \(or by pressing F9\). A non-serial test result does not contain execution information from other test modules.

![](../Images/ug_test_result_non_serial.png)

## Serial results {#section.Serial_results .section}

A serial result is generated after a serial test run, which is implemented when you drag several test modules into the [Execute Test](Test_exec_test_execution.html) dialog box, or apply the Execute Test command to a test folder. Unlike non-serial test results, serial test results contain execution information from multiple test modules. The main **Summary** tab of the serial result shows the test module summaries and hyperlinks to test result summaries on web browser for each of the executed test modules.

![](../Images/ug_test_result_serial_run.png)

## Test suite results {#section.TS_results .section}

A [test suite](Test_suite.html) is a container for sets of test modules. Therefore, a test suite result is as same as a serial result containing execution information from multiple test modules. The main **Summary** tab of the test suite result shows the test module summaries and hyperlinks to test result summaries for each of the executed test modules.

![](../Images/ug_test_result_TS.png)

## Subresult {#section.Subresults .section}

This category of result is generated when TestArchitect executes subtest modules from one **master test module** via calls to the [run test](../../TA_Automation/Topics/bia_run_test.html) built-in action.

Generally, this result is similar to the non-serial test results, with the exception that they contain extra information about the executed subtest modules.

![](../Images/ug_test_result_subtest_module.png)

1.  [Summary tab](../../TA_Help/Topics/Test_result_summaries.html)  
The test result **Summary** tab reports basic test run information which summarizes various aspects of the test. A summary report represents the results of a single run of one test module.
2.  [Result Details tab](../../TA_Help/Topics/Test_result_details.html)  
The **Result Details** tab displays a detailed \(line-by-line\) log of the test execution, which can be essential for test run analysis and debugging.
3.  [Known Bug Summary tab](../../TA_Help/Topics/ug_results_known_bug_summary.html)  
Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.
4.  [Failure/Error Summary tab](../../TA_Help/Topics/ug_results_failure_error_summary.html)  
This section displays all failure, error, or warning encountered during the test run.
5.  [Log Information tab](../../TA_Help/Topics/ug_results_log_information.html)  

6.  [Information tab](../../TA_Help/Topics/Test_result_information.html)  
The test result **Information** tab displays general information about the test, including the date, time and duration of the test run, the type of machine or device running the test, the AUT version, etc. The numbers of test cases flagged as Passed, Failed, Warning, Error, and Ignored Fails are also displayed.
7.  [Test result status](../../TA_Help/Topics/ug_test_results_status.html)  
The topic of this section contains information about detailed test result status.

**Parent topic:**[Working with test results](../../TA_Help/Topics/Test_result.html)

**Next topic:**[Converting test results generated in earlier versions to TestArchitect 8.3](../../TA_Help/Topics/ug_XML_result_conversion.html)

