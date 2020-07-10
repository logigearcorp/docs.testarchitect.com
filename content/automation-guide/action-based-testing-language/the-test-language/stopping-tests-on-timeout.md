--- 
title: "Stopping tests on timeout"
linktitle: "Stopping tests on timeout"
description: "You can set a timeout for the test case to ensure that the test execution does not take longer than it should."
weight: 12
aliases: 
    - /TA_Automation/Topics/aut_stop_tests_after_timeout.html
keywords: "test case timeout, stopping test on timeout"
---

You can set a timeout for the test case to ensure that the test execution does not take longer than it should.

{{<note>}} Applies to TestArchitect [8.3 Update 4](/user-guide/version-history/features-added-to-testarchitect-8-3-update-4/windows) and higher.

In other words, you can set time limits in which the execution of test cases will comply. You might need to do this when non-responsive test script happens. If a test case encounters a section of script that does not respond or the script falls into infinite loops, your use of the test case timeout allows that test case to finish, when the tests time out.

Setting time limits for test cases has the following effects:

-   When the duration of an individual test case reaches its timeout value, the execution of the timed-out test case stops instantly. The test run continues with the subsequent test case.
-   TestArchitect test result is marked as [Not Finished](/user-guide/working-with-test-results/overview/test-result-status#row.NF).

    ![](/images/TA_Help/Images/TC_timeout_NF.png)


{{<note>}} In TA-TFS integration, Not Finished can be mapped to various TFS test statuses. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/mapping-results-between-ta-and-tfs).\)

## {{< expand >}} Definitions of a test case timeout {{< permerlink >}} {#concept_ldh_xxt_mcb__section_abk_5my_ncb} 

A test case timeout occurs during runtime when run duration, accumulated from the beginning of a test case, exceeds a specific timeout. Run duration is calculated by accumulating total time spent on automated test activities. Non-automated test activities, such as, compiling tests, licensing checking or collecting results, etc. are not included.

## {{< expand >}} Specifying a test case timeout period {{< permerlink >}} {#concept_ldh_xxt_mcb__section_wzm_wmy_ncb} 

The [test case timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/test-case-timeout) built-in setting is used to set timeout period for individual test cases.

{{<note>}}

-   When this setting is not declared or its value is omitted, the default value of 0 is applied.
-   0 indicates an infinite timeout period.

This built-in setting can be configured

-   in a batch file via [Startup Settings](/user-guide/test-execution/startup-settings/creating-a-startup-setting-for-a-built-in-setting), or
-   in a test module during runtime

## {{< expand >}} Scope of the test case timeout's built-in setting {{< permerlink >}} {#concept_ldh_xxt_mcb__section_pdj_fzs_4cb} 

The [test case timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/test-case-timeout) setting, just like other built-in settings, once declared within a single test run, remains present throughout the execution of master test modules and subtest modules within the test run. If test case timeout is called twice in the master test module or the subtest modules, the second invocation merely assigns a new value to the existing timeout period.

## How a test case timeout configured in a master test module affects subtest modules

A test run might include subtest modules or test suites, which are called by the [run test](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/run-test) built-in action. When a subtest module is defined in a master test module, it will be assigned a finite amount of timeout. We can express this as a formula that uses these terms:

-   **D\[m\]**

    Total amount of timeout defined in the master test module

-   **D\[r\]**

    Amount of time that the master test module runs

-   **D\[s\]**

    Remaining amount of timeout assigned to the run of the entire subtest module


The following applies for the subtest module's timeout value:

```
D[s] = D[m] - D[r]
```

When the run duration of the subtest module exceeds the assigned timeout value D\[s\], the remaining lines of the timed-out subtest module will be skipped immediately.

For example:

-   You specify the test case timeout D\[t\], 20 seconds, in the INTIAL section. This timeout value affects each individual test case, as well as INTIAL and FINAL sections.
-   In the test case TC 01, you call a subtest module, named /subtest module.
-   Before the execution of the subtest module, in the master test module, the rent car user-defined action has run for 5 seconds which is the value of D\[m\].
-   The remaining amount of timeout D\[s\] assigned to the run of the entire subtest module will be:

    ```
    D[s] = D[t] - D[m] = 20 - 5 = 15 seconds
    ```


![](/images/TA_Automation/Images/bis_test_case_timeout_pgm_2.png)

## How a test case timeout affects the amount of timeout value dedicated to lead and deputy machines in synchronous remote execution

{{<note>}} It is recommended that you are familiar with the concept of synchronous remote execution. You may refer to this [topic](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/) for details.

-   [Serial synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/serial-synchronous-remote-execution): The amount of timeout assigned to the run of the deputy and lead machines is similar to the one assigned to the subtest modules, as described above. Note that, the test execution in this case is taken place in serial mode. For example:

    -   You specify a test case timeout of 20 seconds, D\[t\], in the INTIAL section. This timeout value affects each individual test cases, as well as INTIAL and FINAL sections.
    -   In the test case TC 01, you initialize a connection to a deputy machine. This connection process takes 5 seconds, D\[m\], to be completed successfully.
    -   You declare actions to be executed on the deputy and lead machines in sequence.
    -   The remaining amount of timeout D\[s\] assigned to the run of the deputy and lead machines until the end of the current test case will be

        ```
        D[s] = D[t] - D[m] = 20 - 5 = 15 seconds
        ```

    ![](/images/TA_Automation/Images/bis_test_case_timeout_serial_pgm.png)

-   [Parallel synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/parallel-synchronous-remote-execution): The remaining amount of timeout dedicated to the run of deputy and lead machines in this case is similar to the case of above serial synchronous remote execution. Due to the nature of the parallel synchronous execution, that is, each execution on the deputy and lead has its own thread, each thread in this case will have its own timeout value. For example:

    -   You specify a test case timeout of 20 seconds, D\[t\], in the INTIAL section. This timeout value affects each individual test cases, as well as INTIAL and FINAL sections.
    -   In the test case TC 01, you initialize a connection to a deputy machine. This connection process takes 5 seconds, D\[m\], to be completed successfully.
    -   You declare actions to be executed on the deputy and lead machines in parallel.
    -   Unlike the case of serial synchronous execution. For parallel execution, each of the running thread of the lead machine and the running thread of the deputy machine will have its own amount of dedicated timeout D\[s\]. They will be:

        ```
        D[s] = D[t] - D[m] = 20 - 5 = 15 seconds
        ```

    ![](/images/TA_Automation/Images/bis_test_case_timeout_parallel_pgm.png)


## {{< expand >}} Handling a test case timeout event {{< permerlink >}} {#concept_ldh_xxt_mcb__section_xbd_1ny_ncb} 

If you do not handle the event when the test case timeout occurs, TestArchitect moves to the subsequent test case; otherwise, you can provide TestArchitect with specific instructions as what to do when the timeout occurs.

Well-written test procedures include timeout handling that allows them to recover gracefully from unexpected timeout. In many cases when a test case timeout occurs, it is necessary not to interrupt the normal flow of processing, but to take a specific action or set of actions. The following built-in action and built-in setting serve this purpose:

-   **[on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action) action**

    Allows you to specify an action to be executed in the event of a test case timeout, which occurs in the [INITIAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/initial) section, individual test cases, and the [FINAL](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final) section.

    For instance, when an unexpected test case timeout occurs, you might want to close the application-under-test and clean up the environment back to a blank slate in order to prepare for subsequent test case.

    {{<note>}} After TestArchitect finishes running the action invoked by on timeout action, the renaming actions lines of the test case is skipped. The test run continues with the subsequent test case. In addition, TestArchitect test result is [Not Finished](/user-guide/working-with-test-results/overview/test-result-status#row.NF).

-   **[cleanup timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/cleanup-timeout) setting**

    Specifies the timeout value, in seconds, for the cleanup process when a test case timeout occurs.




**Related information**  


[test case timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/test-case-timeout)

[cleanup timeout](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/cleanup-timeout)

[on timeout action](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/on-timeout-action)

