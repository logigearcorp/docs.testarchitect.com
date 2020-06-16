--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 5 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_5.html
keywords: "Release Notes 8.3 Update 5, Windows, What is new, Windows, TestArchitect 8.3 Update 5, TestArchitect 8.3 Update 5, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 5 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   **Changing the TestArchitect command line's [port](/TA_Help/Topics/ug_changing_cmdline_port.html)** It not only resolves port conflict but also enable parallel test execution in Docker environment. By dedicating different ports to different command line interfaces, you can execute TestArchitect batch files on multiple containers residing within a single Docker host at once.
-   [**Optimizing Java virtual machine parameters**](/TA_FAQ/Topics/faq.optimizing_TA_performance.html) – MaxMetaspaceSize, MinHeapFreeRatio and MaxHeapFreeRatio \([Learn more](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html)\)- for either TestArchitect performance or memory savings. These parameters, in general, control how garbage collection is performed by the Java HotSpot VM.

**Enhancements to existing features**

-   **Changing the test execution order**: TestArchitect allows you to explicitly specify a custom execution order of test module invocations. For more comfort, the test execution order can be changed in the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html#li.reorder.test.exec) dialog box or in a given [static test suite list view](/TA_Help/Topics/Test_suite_static_rearrange_test_modules.html#choice.move.up.down.btn).
-   **Previewing the summary of a checkpoint failure or an automation warning/error**: You can quickly preview status of a checkpoint by selecting a specific checkpoint in the [local](/TA_Help/Topics/Listview_results_local.html#section.preview_checkpoint) / [repository](/TA_Help/Topics/Listview_results_repository.html) result list views and clicking its corresponding number of failures, warnings or errors. The first failure, warning or error of that checkpoint will be displayed in a tooltip.
-   **Additional integration support for [Zephyr Enterprise Cloud](/TA_Help/Topics/ug_Zephyr.html) version 6.1.**
    -   **[Importing](/TA_Help/Topics/ug_Zephyr_importing_Zephyr_test_cases.html) Zephyr test cases into TestArchitect** and **Uploading TestArchitect test modules/tests cases to Zephyr**: Test cases residing on Zephyr can be imported into TestArchitect. Likewise, TestArchitect test cases and test modules can be uploaded to the Zephyr.
    -   **[Execute test](/TA_Help/Topics/ug_Zephyr_executing_tests.html) from Zephyr**: As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules may be executed from Zephyr. Test results are automatically uploaded to Zephyr for the associated Zephyr test cases. Or you can upload specific results of tests stored in TestArchitect to Zephyr.
-   **Additional sections** for the test result [**Summary**](/TA_Help/Topics/Test_result_summaries.html) tab, which reports basic test run information and summarizes various aspects of the test.
    -   [**Known Bug Summary**](/TA_Help/Topics/Test_result_summaries.html#section_known.bug): Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.
    -   **[Failure/Error Summary](/TA_Help/Topics/Test_result_summaries.html#section_failure.error)**: Displaying all failure, error, or warning encountered during the test run.
    -   [**Log Information**](/TA_Help/Topics/Test_result_summaries.html#section_log.information): Displaying the logging information from the report actions, that is, [report](/TA_Automation/Topics/bia_report.html), [report check](/TA_Automation/Topics/bia_report_check.html), [report warning](/TA_Automation/Topics/bia_report_warning.html), and [report error](/TA_Automation/Topics/bia_report_error.html) in the test procedure.
-   **Recent Run Duration** field supported in [test module list views](/TA_Help/Topics/Listview_TM.html): This field shows the most recent execution time of a given test module. The field is available, when respective test results are added into the repository.
-   **Improvement for the [Lab Manager](/TA_Help/Topics/Lab_manager_controller.html#li.host.address)**: Host address is added to the Lab Manger. A host address is composed of the IP address and port number of the controller machine.
-   **Editing [**Source ID**](/TA_Help/Topics/Listview_test_case_changing_source.html)**. A Source ID that is the ID of a test case in an external tool \([Quality Center](/TA_Help/Topics/Integration_QC_intro.html), [Team Foundation Server](/TA_Help/Topics/ug_MTM_def.html) or [Zephyr](/TA_Help/Topics/ug_Zephyr.html)\) and is used for mapping purpose now can be modified quickly in a test case list view.

## TestArchitect Automation

**New features**

-   **Official support for [Oracle Forms](/TA_Automation/Topics/aut_app_testing_Oracle_Forms.html)**: TestArchitect supports testing of Oracle Forms. Now development and playback of tests for Oracle Forms applets are within your reach. It recognizes controls in Oracle Forms screens and provides specific built-in actions and properties for simulating user actions on these controls.
    -   As of this release, Oracle Forms controls and timing built-in settings supported by TestArchitect can be found at:
        -   Support for [timing built-in settings](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_timing.html).
        -   Support for [Oracle Forms controls](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_controls.html).
-   New **control flow built-in** action provided:
    -   [continue](/TA_Automation/Topics/bia_continue.html) built-in action: Skips the remaining action lines in the current iteration of a loop and proceeds to the next iteration.

**Enhancements to existing features**

-   **Support for new exit codes**: Determines whether the overall final result status is [Not Finished](/TA_Help/Topics/ug_test_results_status.html) or not.
    -   Possible values:
        -   complete: The operation is successful.
        -   incomplete: \(Default\) The operation is unsuccessful.
    -   Affected built-in actions:
        -   [exit test case](/TA_Automation/Topics/bia_exit_test_case.html)
        -   [exit test module](/TA_Automation/Topics/bia_exit_test_module.html)
-   [exit loop](/TA_Automation/Topics/bia_exit_loop.html), which terminates a loop immediately and moves to next action line following the loop, is capable of supporting all types of TestArchitect loops including:
    -   [while](/TA_Automation/Topics/bia_while.html) - [end while](/TA_Automation/Topics/bia_end_while.html)
    -   [repeat](/TA_Automation/Topics/bia_repeat.html) - [until](/TA_Automation/Topics/bia_until.html)
    -   [use data set](/TA_Automation/Topics/bia_use_data_set.html) - [repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html)

## Repository Server

**Enhancements to existing features**

-   **Primary-replication repositories configuration**:
    -   [**Registering replication repositories**](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository.html) with the replica network by either hostname or IP:
        -   IP address: IP address of your host machine. It should be used for registration when your replication machine has a static IP address.
        -   Hostname: Name of your host machine. It should be used for registration when your machine has a dynamic IP address.
    -   **Breaking primary-replication relationship**: A confirmation dialog appears to confirm if you really want to remove [replication](/TA_Administration/Topics/adm_Removing_primary_repication_repository.html) and/or [primary](/TA_Administration/Topics/adm_Setting_up_primary_replication_repository_2.html) repositories from the replica network.


