--- 
title: "What's new in TestArchitect for Linux"
linktitle: "What's new in TestArchitect for Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4.html
keywords: "Release Notes 8.4, Linux, What is new, Linux, TestArchitect 8.4, TestArchitect 8.4, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.4 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   [**Running multiple harnesses in parallel**](/user-guide/test-execution/working-on-multiple-test-harnesses/running-multiple-harnesses-from-testarchitect-client): When the number of test scripts increases to a point in which it takes too much time, it is essential to reduce the execution time. Now, TestArchitect is able to add parallelization to your automation. It helps you speed up the tests and reduce the execution time. The more tests you run at the same time, the less overall time you might spend.

    {{<note>}} Restrictions applied, please see the [article](/user-guide/test-execution/working-on-multiple-test-harnesses/) in the TestArchitect Help for details.

    -   **Monitoring progress of running harnesses and their current status** through the [Playback Toolbar](/user-guide/test-execution/playback-toolbar), [Lab Manager](/user-guide/lab-manager/managing-automation-lab/controller-status), and [TestArchitect Controller](/user-guide/controller-management/) dialog box: These improved features provide detailed information about each harness running on a given controller.
    -   **[Configuring the harness pool size](/user-guide/test-execution/working-on-multiple-test-harnesses/configuring-harness-pool-size), or the parallel test limit**: Based on the recommended [system requirements](/user-guide/getting-started/testarchitect-installation-guide/system-requirements) for installation of TestArchitect Client, a default number of maximum harnesses which to be invoked simultaneously has been pre-configured. However, you are able to adjust the number of maximum running harnesses, as long as the memory and CPU of your hardware can manage.
    -   [**Queuing harnesses**](/user-guide/test-execution/working-on-multiple-test-harnesses/configuring-harness-pool-size): The queuing feature enables you to launch additional harnesses, even after your parallel test limit is hit. For example, the configured harness pool size, the parallel test limit, is 10 parallel harnesses. Beyond 10 parallel harnesses, the subsequent harnesses will be queued. When one of the first 10 harnesses completes, the 11th harnesses starts to run.
    -   Viewing quickly the **[number of actual running and pending harnesses](/user-guide/test-execution/playback-toolbar)** in a queue on the Playback Toolbar

**Enhancements to existing features**

-   **[Execution log files](/user-guide/test-execution/execution-log-files/)**: Once a harness run completes, its execution information are logged to files. These log files help you facilitate debugging or analysis of test results in case of automation errors.
    -   **Improved log format**: All report lines are separated into various subsections including checking license, compiling data, and finalizing test runs, etc. Although, this improvement is small, it has a profound effect on readability and usability.
    -   **Improved logging messages and outputting error messages that are uncaught in test results**: All errors and exceptions that occurred during the harness run are reported in log files. Furthermore, logging messages are described with more details than ones reported in test results.
    -   **Using a log file**: Each harness run is logged into a log file. Additionally, every log file is suffixed with the respective test result name for quick trace of locating the desired log files.
    -   **Adding timestamp for log messages**: All report lines in log files are printed with timestamp prefixes.
    -   [**Preventing excessive number of log files**](/user-guide/test-execution/execution-log-files/automatically-removing-old-log-files): Gradually, log files may take up hard disk space over time. Thus, TestArchitect offers you a mechanism to automatically delete old log files.


