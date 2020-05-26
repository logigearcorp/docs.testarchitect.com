--- 
title: "test case timeout"
linktitle: "test case timeout"
weight: 13
aliases: 
    - /TA_Automation/Topics/bis_test_case_timeout.html
---
# test case timeout {#bis_test_case_timeout .reference}

## Description {#section_i15_jp2_4cb .section}

Specify the timeout value for an individual test case.

## Value units {#section_j15_jp2_4cb .section}

seconds

## Default value {#section_k15_jp2_4cb .section}

0
:   Indicates an infinite timeout period.

## Notes {#section_m15_jp2_4cb .section}

-   Applies to TestArchitect [8.3 Update 4](../../TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.
-   When this setting is not declared or its value is omitted, the value of 0 is used.
-   The specified timeout value affects all test cases, as well as the [INITIAL](bia_initial.html) and [FINAL](bia_final.html) sections, as long as they are declared underneath the test case timeout setting. The test procedures which are declared above the built-in setting is unaffected by the timeout value.
-   The [test case timeout](bis_test_case_timeout.html) setting, just like other built-in settings, once declared within a single test run, remains present throughout the execution of master test modules and subtest modules within the test run. If test case timeout is called twice in the master test module or the subtest modules, the second invocation merely assigns a new value to the existing timeout period.

## Example { .section}

Suppose that you would like to set the timeout value, such as, 5 seconds, on all individual test cases, as well as INTIAL and FINAL.

When the timeout value of a test case is reached, the remaining lines of the timed-out test case stop instantly. The test run continues with the subsequent test case.

**Action Lines**

![](../Images/bis_test_case_timeout_pgm.png)

**Result**

When a test case timeout occurs, you will see the following warning message in test results. Additional, the test status is [Not Finished](../../TA_Help/Topics/ug_test_results_status.md#row.NF).

![](../Images/bis_test_case_timeout_res.png)

The detailed log of the test execution, the [**Result Details**](../../TA_Help/Topics/Test_result_details.html) tab, also informs a timeout event has occurred.

![](../Images/bis_test_case_timeout_res_2.png)

**Parent topic:**[Timing settings](../../TA_Automation/Topics/bis_timing.html)

**Previous topic:**[property wait](../../TA_Automation/Topics/bis_property_wait.html)

**Next topic:**[value changed wait](../../TA_Automation/Topics/bis_value_changed_wait.html)

**Related information**  


[Stopping tests on timeout](../../TA_Automation/Topics/aut_stop_tests_after_timeout.html)

[cleanup timeout](../../TA_Automation/Topics/bis_cleanup_timeout.html)

[on timeout action](../../TA_Automation/Topics/bia_on_timeout_action.html)

