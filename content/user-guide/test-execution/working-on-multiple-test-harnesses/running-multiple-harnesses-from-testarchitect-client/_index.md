--- 
title: "Running multiple harnesses from TestArchitect Client"
linktitle: "Running multiple harnesses from TestArchitect Client"
weight: 1
aliases: 
    - /TA_Help/Topics/Multiple_harnesses_running.html
---

Running multiple harnesses is to execute different test modules/suites with a single TA Controller simultaneously.

**Note:** Applies to TestArchitect [8.4](/TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

**Restriction:** As of the current release, there are some following constraints that you should keep in mind.

-   You are unable to run more than one GUI testing harness simultaneously. However, running a single GUI testing harness together with multiple non-GUI testing harnesses, such as, API/DB/CLI testing, etc. is allowable.
-   Running a harness in debug mode along with multiple harnesses using batch file\(s\) is allowable.
-   It is impossible to run a harness in debug mode first and then run more harness\(es\) in debug/ordinary/compilation mode.
-   Technically, you can run a harness in ordinary mode from TestArchitect Client first and then run another harness in debug mode. It is highly inadvisable to try this because it can cause unexpected functions.

**Tip:** As for as [synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous.html), a lead machine is capable of launching multiple harnesses on a deputy machine.

Perform the following steps to execute multiple harnesses from TestArchitect Client:

1.  In TestArchitect's tree explorer, locate and execute the preferred test suite/module. \([Learn more](/TA_Help/Topics/Test_exec_test_execution.html)\)

    The first harness is up and will be in progress.

2.  Continue to execute the other preferred test suites/modules one after another while other harnesses are still running.

    **Tip:** You can monitor all the running harnesses and their statuses via:

    -   [Playback toolbar](/TA_Help/Topics/Test_exec_playback_toolbar.html)
    -   [TestArchitect Controller](/TA_Help/Topics/Controller_management.html) dialog box.
    -   [Lab Manager](/TA_Help/Topics/Lab_manager.html)

One of the main features of TestArchitect is the ability to run multiple harnesses in parallel. Rather than waiting for each harness to execute in sequence, you can run multiple harnesses in parallel across various browsers. In this way, more tests can be run at a time, thereby decreasing the overall time spent on testing. For parallel testing, you can run multiple harnesses in batch files as an alternative to running multiple harnesses from TestArchitect Client.

**Parent topic:**[Working on multiple test harnesses](/TA_Help/Topics/Multiple_harnesses.html)

**Next topic:**[Creating a batch file to run multiple harnesses](/TA_Help/Topics/Multiple_harnesses_creating_batch_file.html)

**Related information**  


[Creating a batch file to run multiple harnesses](/TA_Help/Topics/Multiple_harnesses_creating_batch_file.html)

[Configuring harness pool size](/TA_Help/Topics/Multiple_harnesses_pool_size.html)

