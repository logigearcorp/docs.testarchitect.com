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

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## {{< expand >}} TestArchitect Client {{< permerlink >}} {#concept_what_new_8.3_Windows_update_3__section.TAC} 

**New features**

-   **Changing the TestArchitect command line's [port](/user-guide/controller-management/changing-command-line-port)** It not only resolves port conflict but also enable parallel test execution in Docker environment. By dedicating different ports to different command line interfaces, you can execute TestArchitect batch files on multiple containers residing within a single Docker host at once.
-   [**Optimizing Java virtual machine parameters**](/user-guide/support/frequently-asked-questions/optimizing-jvm-parameters-for-testarchitect-performance) – MaxMetaspaceSize, MinHeapFreeRatio and MaxHeapFreeRatio \([Learn more](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html)\)- for either TestArchitect performance or memory savings. These parameters, in general, control how garbage collection is performed by the Java HotSpot VM.

**Enhancements to existing features**

-   **Changing the test execution order**: TestArchitect allows you to explicitly specify a custom execution order of test module invocations. For more comfort, the test execution order can be changed in the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client#li.reorder.test.exec) dialog box or in a given [static test suite list view](/user-guide/projects-and-project-items/project-items/test-suites/static-test-suites/rearranging-test-execution-order#choice.move.up.down.btn).
-   **Previewing the summary of a checkpoint failure or an automation warning/error**: You can quickly preview status of a checkpoint by selecting a specific checkpoint in the [local](/user-guide/projects-and-project-items/project-items/list-view/result-list-view/local-result-list-view#section.preview_checkpoint) / [repository](/user-guide/projects-and-project-items/project-items/list-view/result-list-view/repository-result-list-view) result list views and clicking its corresponding number of failures, warnings or errors. The first failure, warning or error of that checkpoint will be displayed in a tooltip.
-   **Additional integration support for [Zephyr Enterprise Cloud](/user-guide/integration-with-third-party-tools/zephyr-integration/) version 6.1.**
    -   **[Importing](/user-guide/integration-with-third-party-tools/zephyr-integration/features-of-testarchitect-zephyr-integration/importing-zephyr-test-cases-into-testarchitect) Zephyr test cases into TestArchitect** and **Uploading TestArchitect test modules/tests cases to Zephyr**: Test cases residing on Zephyr can be imported into TestArchitect. Likewise, TestArchitect test cases and test modules can be uploaded to the Zephyr.
    -   **[Execute test](/user-guide/integration-with-third-party-tools/zephyr-integration/features-of-testarchitect-zephyr-integration/executing-tests-from-zephyr) from Zephyr**: As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules may be executed from Zephyr. Test results are automatically uploaded to Zephyr for the associated Zephyr test cases. Or you can upload specific results of tests stored in TestArchitect to Zephyr.
-   **Additional sections** for the test result [**Summary**](/user-guide/working-with-test-results/overview/summary-tab) tab, which reports basic test run information and summarizes various aspects of the test.
    -   [**Known Bug Summary**](/user-guide/working-with-test-results/overview/summary-tab#section_known.bug): Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.
    -   **[Failure/Error Summary](/user-guide/working-with-test-results/overview/summary-tab#section_failure.error)**: Displaying all failure, error, or warning encountered during the test run.
    -   [**Log Information**](/user-guide/working-with-test-results/overview/summary-tab#section_log.information): Displaying the logging information from the report actions, that is, [report](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report), [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check), [report warning](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-warning), and [report error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-error) in the test procedure.
-   **Recent Run Duration** field supported in [test module list views](/user-guide/projects-and-project-items/project-items/list-view/test-module-list-view/): This field shows the most recent execution time of a given test module. The field is available, when respective test results are added into the repository.
-   **Improvement for the [Lab Manager](/user-guide/lab-manager/managing-automation-lab/controller-status#li.host.address)**: Host address is added to the Lab Manger. A host address is composed of the IP address and port number of the controller machine.
-   **Editing [**Source ID**](/user-guide/projects-and-project-items/project-items/list-view/test-case-list-view/changing-source-id)**. A Source ID that is the ID of a test case in an external tool \([Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/), [Team Foundation Server](/user-guide/integration-with-third-party-tools/tfs-integration/) or [Zephyr](/user-guide/integration-with-third-party-tools/zephyr-integration/)\) and is used for mapping purpose now can be modified quickly in a test case list view.

## {{< expand >}} TestArchitect Automation {{< permerlink >}} {#concept_what_new_8.3_Windows_update_3__section.Auto} 

**New features**

-   **Official support for [Oracle Forms](/automation-guide/application-testing/testing-desktop-applications/testing-oracle-forms/)**: TestArchitect supports testing of Oracle Forms. Now development and playback of tests for Oracle Forms applets are within your reach. It recognizes controls in Oracle Forms screens and provides specific built-in actions and properties for simulating user actions on these controls.
    -   As of this release, Oracle Forms controls and timing built-in settings supported by TestArchitect can be found at:
        -   Support for [timing built-in settings](/automation-guide/application-testing/testing-desktop-applications/testing-oracle-forms/timing-built-in-settings-support).
        -   Support for [Oracle Forms controls](/automation-guide/application-testing/testing-desktop-applications/testing-oracle-forms/controls-support).
-   New **control flow built-in** action provided:
    -   [continue](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/continue) built-in action: Skips the remaining action lines in the current iteration of a loop and proceeds to the next iteration.

**Enhancements to existing features**

-   **Support for new exit codes**: Determines whether the overall final result status is [Not Finished](/user-guide/working-with-test-results/overview/test-result-status) or not.
    -   Possible values:
        -   complete: The operation is successful.
        -   incomplete: \(Default\) The operation is unsuccessful.
    -   Affected built-in actions:
        -   [exit test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-case)
        -   [exit test module](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-module)
-   [exit loop](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-loop), which terminates a loop immediately and moves to next action line following the loop, is capable of supporting all types of TestArchitect loops including:
    -   [while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/while) - [end while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-while)
    -   [repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat) - [until](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/until)
    -   [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) - [repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set)

## {{< expand >}} Repository Server {{< permerlink >}} {#concept_what_new_8.3_Windows_update_3__section.RS} 

**Enhancements to existing features**

-   **Primary-replication repositories configuration**:
    -   [**Registering replication repositories**](/administration-guide/repository-server-management/replication-repositories/setting-up-primary-replication-repositories) with the replica network by either hostname or IP:
        -   IP address: IP address of your host machine. It should be used for registration when your replication machine has a static IP address.
        -   Hostname: Name of your host machine. It should be used for registration when your machine has a dynamic IP address.
    -   **Breaking primary-replication relationship**: A confirmation dialog appears to confirm if you really want to remove [replication](/administration-guide/repository-server-management/replication-repositories/breaking-primary-replication-relationship/removing-a-replication-server) and/or [primary](/administration-guide/repository-server-management/replication-repositories/breaking-primary-replication-relationship/removing-primary-server) repositories from the replica network.


