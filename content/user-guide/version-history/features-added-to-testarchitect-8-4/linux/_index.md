--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4.html
---

The following new features and improvements are introduced in TestArchitect version 8.4 running under Linux.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   [**Running multiple harnesses in parallel**](/TA_Help/Topics/Multiple_harnesses_running.html): When the number of test scripts increases to a point in which it takes too much time, it is essential to reduce the execution time. Now, TestArchitect is able to add parallelization to your automation. It helps you speed up the tests and reduce the execution time. The more tests you run at the same time, the less overall time you might spend.

    **Note:** Restrictions applied, please see the [article](/TA_Help/Topics/Multiple_harnesses.html) in the TestArchitect Help for details.

    -   **Monitoring progress of running harnesses and their current status** through the [Playback Toolbar](/TA_Help/Topics/Test_exec_playback_toolbar.html), [Lab Manager](/TA_Help/Topics/Lab_manager_controller.html), and [TestArchitect Controller](/TA_Help/Topics/Controller_management.html) dialog box: These improved features provide detailed information about each harness running on a given controller.
    -   **[Configuring the harness pool size](/TA_Help/Topics/Multiple_harnesses_pool_size.html), or the parallel test limit**: Based on the recommended [system requirements](System_Requirements.html) for installation of TestArchitect Client, a default number of maximum harnesses which to be invoked simultaneously has been pre-configured. However, you are able to adjust the number of maximum running harnesses, as long as the memory and CPU of your hardware can manage.
    -   [**Queuing harnesses**](/TA_Help/Topics/Multiple_harnesses_pool_size.html): The queuing feature enables you to launch additional harnesses, even after your parallel test limit is hit. For example, the configured harness pool size, the parallel test limit, is 10 parallel harnesses. Beyond 10 parallel harnesses, the subsequent harnesses will be queued. When one of the first 10 harnesses completes, the 11th harnesses starts to run.
    -   Viewing quickly the **[number of actual running and pending harnesses](/TA_Help/Topics/Test_exec_playback_toolbar.html)** in a queue on the Playback Toolbar

**Enhancements to existing features**

-   **[Execution log files](/TA_Help/Topics/Execution_log_files.html)**: Once a harness run completes, its execution information are logged to files. These log files help you facilitate debugging or analysis of test results in case of automation errors.
    -   **Improved log format**: All report lines are separated into various subsections including checking license, compiling data, and finalizing test runs, etc. Although, this improvement is small, it has a profound effect on readability and usability.
    -   **Improved logging messages and outputting error messages that are uncaught in test results**: All errors and exceptions that occurred during the harness run are reported in log files. Furthermore, logging messages are described with more details than ones reported in test results.
    -   **Using a log file**: Each harness run is logged into a log file. Additionally, every log file is suffixed with the respective test result name for quick trace of locating the desired log files.
    -   **Adding timestamp for log messages**: All report lines in log files are printed with timestamp prefixes.
    -   [**Preventing excessive number of log files**](/TA_Help/Topics/Remove_old_execution_log_files.html): Gradually, log files may take up hard disk space over time. Thus, TestArchitect offers you a mechanism to automatically delete old log files.

**Parent topic:**[Features added to TestArchitect 8.4](/TA_ReleaseNotes/DITA_source/Whats_New_8.4.html)

