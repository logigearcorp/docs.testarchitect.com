--- 
title: "test case timeout"
linktitle: "test case timeout"
description: "Description Specify the timeout value for an individual test case. Value units seconds Default value 0 Indicates an infinite timeout period. Notes Applies to TestArchitect 8.3 Update 4 and higher. ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bis_test_case_timeout.html
keywords: "built-in settings, test case timeout, settings, test case timeout (settings), test case timeout, specify timeout for individual test cases, set timeout for individual test cases, time limit for running test case, maximum time limit for test case execution"
---

## Description  

Specify the timeout value for an individual test case.

## Value units  

seconds

## Default value  

-   **0**

    Indicates an infinite timeout period.


## Notes  

-   Applies to TestArchitect [8.3 Update 4](/user-guide/version-history/features-added-to-testarchitect-8-3-update-4/windows) and higher.
-   When this setting is not declared or its value is omitted, the value of 0 is used.
-   The specified timeout value affects all test cases, as well as the [INITIAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/initial) and [FINAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final) sections, as long as they are declared underneath the test case timeout setting. The test procedures which are declared above the built-in setting is unaffected by the timeout value.
-   The [test case timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/test-case-timeout) setting, just like other built-in settings, once declared within a single test run, remains present throughout the execution of master test modules and subtest modules within the test run. If test case timeout is called twice in the master test module or the subtest modules, the second invocation merely assigns a new value to the existing timeout period.

## Example

Suppose that you would like to set the timeout value, such as, 5 seconds, on all individual test cases, as well as INTIAL and FINAL.

When the timeout value of a test case is reached, the remaining lines of the timed-out test case stop instantly. The test run continues with the subsequent test case.

Action Lines

![](/images/TA_Automation/Images/bis_test_case_timeout_pgm.png)

Result

When a test case timeout occurs, you will see the following warning message in test results. Additional, the test status is [Not Finished](/user-guide/working-with-test-results/overview/test-result-status#row.NF).

![](/images/TA_Automation/Images/bis_test_case_timeout_res.png)

The detailed log of the test execution, the [Result Details](/user-guide/working-with-test-results/overview/result-details-tab) tab, also informs a timeout event has occurred.

![](/images/TA_Automation/Images/bis_test_case_timeout_res_2.png)




**Related information**  


[Stopping tests on timeout](/automation-guide/action-based-testing-language/the-test-language/stopping-tests-on-timeout)

[cleanup timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/cleanup-timeout)

[on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action)
