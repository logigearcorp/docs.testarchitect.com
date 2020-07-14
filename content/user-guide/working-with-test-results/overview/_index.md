--- 
title: "Overview of test results"
linktitle: "Overview"
description: "This topic contains information about various tabs and panels, and on viewing test results."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_test_results_introduction.html
keywords: "test results, introduction, test results, categories"
---

This topic contains information about various tabs and panels, and on viewing test results.

## Local results {{< permerlink >}} {#concept_s3n_clc_qz__section_wpq_jlc_qz} 

In TestArchitect Client, local test results, which are not stored in the repository, only consist of the [Summary](/user-guide/working-with-test-results/overview/summary-tab) tab.

The Summary tab reports basic test run information, which summarizes various aspects of the test. Additionally, local test results show the following tabs when they are viewed in a web browser.

|Tab name|Description|
|--------|-----------|
|[**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab)|Displays a detailed \(line-by-line\) log of the test execution, which can be essential for test run analysis and debugging.|
|[**Known Bug Summary**](/user-guide/working-with-test-results/overview/known-bug-summary-tab)|Displays details about known bugs marked on action lines.|
|[**Failure/Error Summary**](/user-guide/working-with-test-results/overview/failure-error-summary-tab)|Exhibits a list of the failures occurring during the test run.|
|[**Log Information**](/user-guide/working-with-test-results/overview/log-information-tab)|Displays the logging information from the report actions, that is, [report](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report), [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check), [report warning](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-warning), and [report error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-error) in the test procedure.|

## Repository results {{< permerlink >}} {#concept_s3n_clc_qz__section_sxd_klc_qz} 

Repository test results are saved in the repository and have the same tabs as the local test results, but include an additional [Information](/user-guide/working-with-test-results/overview/information-tab) tab.

## Non-serial test results {{< permerlink >}} {#concept_s3n_clc_qz__section_xwk_klc_qz} 

A non-serial test result is a typical test result generated when TestArchitect executes only a single test module via the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box \(or by pressing F9\). A non-serial test result does not contain execution information from other test modules.

![](/images/TA_Help/Images/ug_test_result_non_serial.png)

## Serial results {{< permerlink >}} {#concept_s3n_clc_qz__section.Serial_results} 

A serial result is generated after a serial test run, which is implemented when you drag several test modules into the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box, or apply the Execute Test command to a test folder. Unlike non-serial test results, serial test results contain execution information from multiple test modules. The main **Summary** tab of the serial result shows the test module summaries and hyperlinks to test result summaries on web browser for each of the executed test modules.

![](/images/TA_Help/Images/ug_test_result_serial_run.png)

## Test suite results {{< permerlink >}} {#concept_s3n_clc_qz__section.TS_results} 

A [test suite](/user-guide/projects-and-project-items/project-items/test-suites/) is a container for sets of test modules. Therefore, a test suite result is as same as a serial result containing execution information from multiple test modules. The main **Summary** tab of the test suite result shows the test module summaries and hyperlinks to test result summaries for each of the executed test modules.

![](/images/TA_Help/Images/ug_test_result_TS.png)

## Subresult {{< permerlink >}} {#concept_s3n_clc_qz__section.Subresults} 

This category of result is generated when TestArchitect executes subtest modules from one master test module via calls to the [run test](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/run-test) built-in action.

Generally, this result is similar to the non-serial test results, with the exception that they contain extra information about the executed subtest modules.

![](/images/TA_Help/Images/ug_test_result_subtest_module.png)

1.  [Summary tab](/user-guide/working-with-test-results/overview/summary-tab)  
The test result **Summary** tab reports basic test run information which summarizes various aspects of the test. A summary report represents the results of a single run of one test module.
2.  [Result Details tab](/user-guide/working-with-test-results/overview/result-details-tab)  
The **Result Details** tab displays a detailed \(line-by-line\) log of the test execution, which can be essential for test run analysis and debugging.
3.  [Known Bug Summary tab](/user-guide/working-with-test-results/overview/known-bug-summary-tab)  
Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.
4.  [Failure/Error Summary tab](/user-guide/working-with-test-results/overview/failure-error-summary-tab)  
This section displays all failure, error, or warning encountered during the test run.
5.  [Log Information tab](/user-guide/working-with-test-results/overview/log-information-tab)  

6.  [Information tab](/user-guide/working-with-test-results/overview/information-tab)  
The test result **Information** tab displays general information about the test, including the date, time and duration of the test run, the type of machine or device running the test, the AUT version, etc. The numbers of test cases flagged as Passed, Failed, Warning, Error, and Ignored Fails are also displayed.
7.  [Test result status](/user-guide/working-with-test-results/overview/test-result-status)  
The topic of this section contains information about detailed test result status.


