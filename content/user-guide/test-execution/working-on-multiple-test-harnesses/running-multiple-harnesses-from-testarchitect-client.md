--- 
title: "Running multiple harnesses from TestArchitect Client"
linktitle: "Running multiple harnesses from TestArchitect Client"
description: "Running multiple harnesses is to execute different test modules/suites with a single TA Controller simultaneously."
weight: 1
aliases: 
    - /TA_Help/Topics/Multiple_harnesses_running.html
keywords: "running, multiple harnesses"
---

Running multiple harnesses is to execute different test modules/suites with a single TA Controller simultaneously.

{{<note>}} Applies to TestArchitect [8.4](/user-guide/version-history/features-added-to-testarchitect-8-4/) and higher.

{{<restriction>}} As of the current release, there are some following constraints that you should keep in mind.

-   You are unable to run more than one GUI testing harness simultaneously. However, running a single GUI testing harness together with multiple non-GUI testing harnesses, such as, API/DB/CLI testing, etc. is allowable.
-   Running a harness in debug mode along with multiple harnesses using batch file\(s\) is allowable.
-   It is impossible to run a harness in debug mode first and then run more harness\(es\) in debug/ordinary/compilation mode.
-   Technically, you can run a harness in ordinary mode from TestArchitect Client first and then run another harness in debug mode. It is highly inadvisable to try this because it can cause unexpected functions.

{{<tip>}} As for as [synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/), a lead machine is capable of launching multiple harnesses on a deputy machine.

Perform the following steps to execute multiple harnesses from TestArchitect Client:

1.  In TestArchitect's tree explorer, locate and execute the preferred test suite/module. \([Learn more](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client)\)

    The first harness is up and will be in progress.

2.  Continue to execute the other preferred test suites/modules one after another while other harnesses are still running.

    {{<tip>}} You can monitor all the running harnesses and their statuses via:

    -   [Playback toolbar](/user-guide/test-execution/playback-toolbar)
    -   [TestArchitect Controller](/user-guide/controller-management/) dialog box.
    -   [Lab Manager](/user-guide/lab-manager/)

One of the main features of TestArchitect is the ability to run multiple harnesses in parallel. Rather than waiting for each harness to execute in sequence, you can run multiple harnesses in parallel across various browsers. In this way, more tests can be run at a time, thereby decreasing the overall time spent on testing. For parallel testing, you can run multiple harnesses in batch files as an alternative to running multiple harnesses from TestArchitect Client.



**Related information**  


[Creating a batch file to run multiple harnesses](/user-guide/test-execution/working-on-multiple-test-harnesses/creating-a-batch-file-to-run-multiple-harnesses)

[Configuring harness pool size](/user-guide/test-execution/working-on-multiple-test-harnesses/configuring-harness-pool-size)

